<template>
  <component
    :is="clickable ? 'button' : 'div'"
    :class="cardClasses"
    :role="jdsCompliant ? (clickable ? 'button' : 'article') : null"
    :aria-label="jdsCompliant && ariaLabel ? ariaLabel : null"
    :aria-describedby="jdsCompliant && cardDescription ? `${cardId}-desc` : null"
    :tabindex="jdsCompliant && clickable ? '0' : null"
    @click="handleClick"
    @keydown="handleKeydown"
  >
    <!-- カードヘッダー（JDS準拠セマンティック強化） -->
    <header v-if="$slots.header || title" :class="headerClasses">
      <slot name="header">
        <h3 v-if="title" :class="titleClasses">{{ title }}</h3>
      </slot>
    </header>
    
    <!-- カードボディ（JDS準拠構造化） -->
    <div :class="bodyClasses">
      <slot />
    </div>
    
    <!-- カードフッター（JDS準拠アクセシビリティ） -->
    <footer v-if="$slots.footer" :class="footerClasses">
      <slot name="footer" />
    </footer>
    
    <!-- JDS準拠時のカード説明（スクリーンリーダー用） -->
    <div 
      v-if="jdsCompliant && cardDescription"
      :id="`${cardId}-desc`"
      class="sr-only"
    >
      {{ cardDescription }}
    </div>
  </component>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  // カードのバリアント（JDS準拠バリアント追加）
  variant: {
    type: String,
    default: 'default',
    validator: (value) => [
      'default', 'elevated', 'outlined', 'ghost',
      'jds-default', 'jds-elevated', 'jds-content'  // JDS準拠バリアント
    ].includes(value)
  },
  
  // タイトル
  title: {
    type: String,
    default: ''
  },
  
  // パディング
  padding: {
    type: String,
    default: 'md',
    validator: (value) => ['none', 'sm', 'md', 'lg', 'xl'].includes(value)
  },
  
  // ホバー効果
  hoverable: {
    type: Boolean,
    default: false
  },
  
  // クリッカブル
  clickable: {
    type: Boolean,
    default: false
  },
  
  // 角丸
  rounded: {
    type: String,
    default: 'xl',
    validator: (value) => ['none', 'sm', 'md', 'lg', 'xl', '2xl'].includes(value)
  },
  
  // JDS準拠モード（アクセシビリティ・政府基準準拠）
  jdsCompliant: {
    type: Boolean,
    default: false
  },
  
  // アクセシビリティラベル（JDS準拠時推奨）
  ariaLabel: {
    type: String,
    default: null
  },
  
  // カード内容の説明（JDS透明性要件）
  cardDescription: {
    type: String,
    default: null
  }
})

const emit = defineEmits(['click'])

// リアクティブデータ（JDS準拠ID管理）
import { ref } from 'vue'
import { generateId } from '@/utils/helpers'

const cardId = ref(generateId('card'))

// カードのクラス計算（JDS準拠対応）
const cardClasses = computed(() => {
  const classes = []
  
  // JDS準拠モードの基本クラス
  if (props.jdsCompliant || props.variant.startsWith('jds-')) {
    classes.push('jds-card')
    
    // JDS準拠の基本スタイル
    classes.push(
      'transition-all', 'duration-200', 'ease-in-out',
      'focus:outline-none', 'focus:ring-2', 'focus:ring-jds-primary', 'focus:ring-offset-2',
      'font-jds', 'text-base', 'leading-6'  // JDS可読性基準
    )
  } else {
    classes.push('card')
  }
  
  // バリアント（JDS準拠対応）
  if (props.variant.startsWith('jds-')) {
    const jdsVariantMap = {
      'jds-default': [
        'bg-white', 'border', 'border-gray-200', 'shadow-sm',
        'hover:shadow-md', 'rounded-md'
      ],
      'jds-elevated': [
        'bg-white', 'border', 'border-gray-100', 'shadow-md',
        'hover:shadow-lg', 'rounded-md'
      ],
      'jds-content': [
        'bg-gray-50', 'border', 'border-gray-200', 'shadow-none',
        'hover:bg-gray-100', 'rounded-md'
      ]
    }
    classes.push(...(jdsVariantMap[props.variant] || jdsVariantMap['jds-default']))
  } else {
    // 従来のバリアント処理
    switch (props.variant) {
      case 'elevated':
        classes.push('shadow-lg hover:shadow-xl transition-shadow')
        break
      case 'outlined':
        classes.push('border-2 shadow-none')
        break
      case 'ghost':
        classes.push('shadow-none border-0 bg-transparent')
        break
      default:
        // デフォルトスタイルは既にCSSで定義済み
        break
    }
  }
  
  // ホバー効果（JDS準拠時は控えめ）
  if (props.hoverable && !props.variant.startsWith('jds-')) {
    classes.push('hover:shadow-lg transition-shadow duration-200')
  }
  
  // クリッカブル（JDS準拠時はアクセシビリティ重視）
  if (props.clickable) {
    if (props.jdsCompliant || props.variant.startsWith('jds-')) {
      classes.push(
        'cursor-pointer',
        'hover:bg-gray-50', 'active:bg-gray-100',
        'focus-visible:ring-2', 'focus-visible:ring-jds-primary'
      )
    } else {
      classes.push('cursor-pointer hover:scale-105 transition-transform duration-200')
    }
  }
  
  // 角丸（JDS準拠時は統一）
  if (!props.variant.startsWith('jds-')) {
    if (props.rounded !== 'xl') {
      const roundedMap = {
        'none': 'rounded-none',
        'sm': 'rounded-sm',
        'md': 'rounded-md',
        'lg': 'rounded-lg',
        '2xl': 'rounded-2xl'
      }
      classes.push(roundedMap[props.rounded] || 'rounded-xl')
    }
  }
  
  return classes.join(' ')
})

// ヘッダーのクラス（JDS準拠セマンティック）
const headerClasses = computed(() => {
  if (props.jdsCompliant || props.variant.startsWith('jds-')) {
    return 'jds-card-header border-b border-gray-200 px-jds-md py-jds-sm'
  }
  return 'card-header'
})

// ボディのクラス（JDS準拠スペーシング）
const bodyClasses = computed(() => {
  const classes = []
  
  if (props.jdsCompliant || props.variant.startsWith('jds-')) {
    classes.push('jds-card-body')
    
    // JDS 8pxグリッドパディング
    const jdsPaddingMap = {
      'none': 'p-0',
      'sm': 'p-jds-sm',
      'md': 'p-jds-md',
      'lg': 'p-jds-lg',
      'xl': 'p-jds-xl'
    }
    classes.push(jdsPaddingMap[props.padding] || 'p-jds-md')
  } else {
    classes.push('card-body')
    
    // 従来のパディング
    const paddingMap = {
      'none': 'p-0',
      'sm': 'p-3',
      'md': 'p-6',
      'lg': 'p-8',
      'xl': 'p-10'
    }
    
    if (props.padding !== 'md') {
      // デフォルトのcard-bodyクラスのpaddingを上書き
      classes[0] = paddingMap[props.padding] || 'p-6'
    }
  }
  
  return classes.join(' ')
})

// フッターのクラス（JDS準拠セマンティック）
const footerClasses = computed(() => {
  if (props.jdsCompliant || props.variant.startsWith('jds-')) {
    return 'jds-card-footer border-t border-gray-200 px-jds-md py-jds-sm bg-gray-50'
  }
  return 'card-footer'
})

// タイトルのクラス（JDS準拠タイポグラフィ）
const titleClasses = computed(() => {
  if (props.jdsCompliant || props.variant.startsWith('jds-')) {
    return 'text-jds-hierarchy-h3 font-medium text-jds-text leading-relaxed'
  }
  return 'text-heading-4 font-semibold text-neutral-900'
})

// クリックハンドラー（JDS準拠アクセシビリティ）
const handleClick = (event) => {
  if (props.clickable) {
    emit('click', event)
  }
}

// キーボードハンドラー（JDS準拠キーボードナビゲーション）
const handleKeydown = (event) => {
  if (props.clickable && props.jdsCompliant) {
    // Enter または Space キーでクリック動作
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault()
      emit('click', event)
    }
  }
}
</script>