<template>
  <component
    :is="tag"
    :class="buttonClasses"
    :disabled="disabled || loading"
    :aria-label="ariaLabel"
    :aria-describedby="actionDescription ? `${$attrs.id || 'btn'}-desc` : null"
    :aria-busy="loading ? 'true' : null"
    v-bind="$attrs"
    @click="handleClick"
  >
    <!-- ローディング時のスピナー -->
    <svg
      v-if="loading"
      class="animate-spin -ml-1 mr-3 h-5 w-5"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
    >
      <circle
        class="opacity-25"
        cx="12"
        cy="12"
        r="10"
        stroke="currentColor"
        stroke-width="4"
      ></circle>
      <path
        class="opacity-75"
        fill="currentColor"
        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
      ></path>
    </svg>
    
    <!-- アイコン（左） -->
    <component
      v-if="iconLeft && !loading"
      :is="iconLeft"
      :class="iconClasses"
    />
    
    <!-- テキストコンテンツ -->
    <span v-if="$slots.default" :class="{ 'ml-2': iconLeft && !loading, 'mr-2': iconRight }">
      <slot />
    </span>
    
    <!-- アイコン（右） -->
    <component
      v-if="iconRight"
      :is="iconRight"
      :class="iconClasses"
    />
  </component>
  
  <!-- JDS準拠時のアクション説明（スクリーンリーダー用） -->
  <div 
    v-if="actionDescription && (jdsCompliant || variant.startsWith('jds-'))"
    :id="`${$attrs.id || 'btn'}-desc`"
    class="sr-only"
  >
    {{ actionDescription }}
  </div>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  // ボタンのタイプ（JDS準拠バリアント追加）
  variant: {
    type: String,
    default: 'primary',
    validator: (value) => [
      'primary', 'secondary', 'success', 'warning', 'error', 'outline', 'ghost',
      'jds-primary', 'jds-secondary', 'jds-transparent'  // JDS準拠バリアント
    ].includes(value)
  },
  
  // サイズ
  size: {
    type: String,
    default: 'md',
    validator: (value) => ['xs', 'sm', 'md', 'lg', 'xl'].includes(value)
  },
  
  // HTMLタグ
  tag: {
    type: String,
    default: 'button'
  },
  
  // 無効状態
  disabled: {
    type: Boolean,
    default: false
  },
  
  // ローディング状態
  loading: {
    type: Boolean,
    default: false
  },
  
  // フルワイズ
  fullWidth: {
    type: Boolean,
    default: false
  },
  
  // アイコン
  iconLeft: {
    type: [String, Object],
    default: null
  },
  
  iconRight: {
    type: [String, Object],
    default: null
  },
  
  // 角丸
  rounded: {
    type: String,
    default: 'lg',
    validator: (value) => ['none', 'sm', 'md', 'lg', 'xl', 'full'].includes(value)
  },
  
  // JDS準拠モード（アクセシビリティ・政府基準準拠）
  jdsCompliant: {
    type: Boolean,
    default: false
  },
  
  // アクセシビリティ説明（JDS準拠時必須）
  ariaLabel: {
    type: String,
    default: null
  },
  
  // アクション結果の説明（JDS透明性要件）
  actionDescription: {
    type: String,
    default: null
  }
})

const emit = defineEmits(['click'])

// ボタンのクラス計算（JDS準拠対応）
const buttonClasses = computed(() => {
  const classes = []
  
  // JDS準拠モードの基本クラス
  if (props.jdsCompliant || props.variant.startsWith('jds-')) {
    classes.push('jds-btn')
    
    // JDS準拠の基本スタイル
    classes.push(
      'transition-all', 'duration-200', 'ease-in-out',
      'focus:outline-none', 'focus:ring-2', 'focus:ring-jds-primary', 'focus:ring-offset-2',
      'min-h-[44px]', 'min-w-[44px]',  // JDS最小タッチターゲット
      'font-medium', 'text-base', 'leading-6'  // JDS可読性基準
    )
  } else {
    classes.push('btn')
  }
  
  // バリアント（JDS準拠対応）
  if (props.variant.startsWith('jds-')) {
    const jdsVariantMap = {
      'jds-primary': [
        'bg-jds-primary', 'text-white', 'border-2', 'border-jds-primary',
        'hover:bg-jds-primary-hover', 'hover:border-jds-primary-hover',
        'disabled:bg-gray-300', 'disabled:border-gray-300', 'disabled:text-gray-500'
      ],
      'jds-secondary': [
        'bg-transparent', 'text-jds-primary', 'border-2', 'border-jds-primary',
        'hover:bg-jds-primary', 'hover:text-white',
        'disabled:border-gray-300', 'disabled:text-gray-400'
      ],
      'jds-transparent': [
        'bg-transparent', 'text-jds-text', 'border-0',
        'hover:bg-gray-50', 'hover:text-jds-primary',
        'disabled:text-gray-400'
      ]
    }
    classes.push(...(jdsVariantMap[props.variant] || jdsVariantMap['jds-primary']))
  } else {
    classes.push(`btn-${props.variant}`)
  }
  
  // サイズ（JDS準拠時はより大きめ）
  if (props.jdsCompliant || props.variant.startsWith('jds-')) {
    const jdsSizeMap = {
      xs: 'px-3 py-2 text-sm min-h-[36px]',    // 小さくても最小基準確保
      sm: 'px-4 py-2 text-sm min-h-[40px]',
      md: 'px-6 py-3 text-base min-h-[44px]',  // JDS標準
      lg: 'px-8 py-4 text-lg min-h-[52px]',
      xl: 'px-10 py-5 text-xl min-h-[60px]'
    }
    classes.push(jdsSizeMap[props.size] || jdsSizeMap.md)
  } else {
    if (props.size !== 'md') {
      classes.push(`btn-${props.size}`)
    }
  }
  
  // フルワイズ
  if (props.fullWidth) {
    classes.push('w-full')
  }
  
  // 角丸（JDS準拠時は控えめ）
  if (props.jdsCompliant || props.variant.startsWith('jds-')) {
    classes.push('rounded-md')  // JDS推奨の適度な角丸
  } else {
    if (props.rounded !== 'lg') {
      const roundedMap = {
        'none': 'rounded-none',
        'sm': 'rounded-sm', 
        'md': 'rounded-md',
        'xl': 'rounded-xl',
        'full': 'rounded-full'
      }
      classes.push(roundedMap[props.rounded] || 'rounded-lg')
    }
  }
  
  // 無効・ローディング状態（JDS準拠時はより明確に）
  if (props.disabled || props.loading) {
    if (props.jdsCompliant || props.variant.startsWith('jds-')) {
      classes.push('cursor-not-allowed', 'opacity-60')
    } else {
      classes.push('opacity-50', 'cursor-not-allowed')
    }
  }
  
  return classes.join(' ')
})

// アイコンのクラス
const iconClasses = computed(() => {
  const sizeMap = {
    xs: 'h-3 w-3',
    sm: 'h-4 w-4',
    md: 'h-5 w-5',
    lg: 'h-5 w-5',
    xl: 'h-6 w-6'
  }
  return sizeMap[props.size] || 'h-5 w-5'
})

// クリックハンドラー
const handleClick = (event) => {
  if (!props.disabled && !props.loading) {
    emit('click', event)
  }
}
</script>