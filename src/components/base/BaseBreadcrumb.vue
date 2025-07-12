<template>
  <!-- JDS準拠時のスキップリンク -->
  <a 
    v-if="jdsCompliant && showSkipLink"
    href="#main-content"
    class="jds-skip-link sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-jds-primary text-white px-4 py-2 rounded-md z-50"
  >
    メインコンテンツへスキップ
  </a>
  
  <nav 
    :aria-label="jdsCompliant ? 'サイト内の現在位置' : ariaLabel" 
    :class="containerClasses" 
    :role="jdsCompliant && navigationLandmark ? 'navigation' : null"
    class="flex"
  >
    <ol :class="listClasses" class="flex flex-wrap items-center space-x-1">
      <li
        v-for="(item, index) in items"
        :key="`breadcrumb-${index}`"
        :class="itemClasses(item, index)"
        class="flex items-center"
      >
        <!-- ホームアイコン（最初の項目でhomeIconが有効な場合） -->
        <svg
          v-if="showHomeIcon && index === 0"
          :class="iconClasses"
          class="flex-shrink-0"
          aria-hidden="true"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
        </svg>
        
        <!-- リンクまたはテキスト（JDS準拠アクセシビリティ強化） -->
        <component
          :is="getLinkComponent(item, index)"
          v-bind="getLinkProps(item, index)"
          :class="linkClasses(item, index)"
          class="transition-colors duration-200"
          :aria-label="jdsCompliant ? getAriaLabel(item, index) : null"
        >
          <!-- カスタムアイコン -->
          <component
            v-if="item.icon"
            :is="item.icon"
            :class="iconClasses"
            class="flex-shrink-0 mr-1"
            aria-hidden="true"
          />
          
          {{ item.label }}
        </component>
        
        <!-- セパレーター -->
        <template v-if="index < items.length - 1">
          <!-- Chevron Right -->
          <svg v-if="separator === 'chevron'" :class="separatorClasses" fill="currentColor" viewBox="0 0 20 20" class="flex-shrink-0 mx-2" aria-hidden="true">
            <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd" />
          </svg>
          
          <!-- Slash -->
          <span v-else-if="separator === 'slash'" :class="separatorClasses" class="flex-shrink-0 mx-2" aria-hidden="true">/</span>
          
          <!-- Arrow Right -->
          <svg v-else-if="separator === 'arrow'" :class="separatorClasses" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="flex-shrink-0 mx-2" aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
          </svg>
        </template>
      </li>
    </ol>
    
    <!-- 構造化データ -->
    <component
      v-if="enableStructuredData"
      :is="'script'"
      type="application/ld+json"
      v-html="structuredDataJson"
    />
  </nav>
</template>

<script setup lang="ts">
import { computed } from 'vue'

interface BreadcrumbItem {
  label: string
  href?: string
  to?: string | object
  disabled?: boolean
  icon?: string | object
}

interface Props {
  items: BreadcrumbItem[]
  separator?: 'chevron' | 'slash' | 'arrow' | 'custom'
  separatorIcon?: string | object
  variant?: 'default' | 'minimal' | 'card' | 'underline' | 'jds-default' | 'jds-minimal'  // JDS準拠バリアント追加
  size?: 'sm' | 'md' | 'lg'
  showHomeIcon?: boolean
  homeIcon?: string | object
  maxItems?: number
  collapseFrom?: 'start' | 'middle' | 'end'
  enableStructuredData?: boolean
  ariaLabel?: string
  linkComponent?: string
  // JDS準拠プロップス
  jdsCompliant?: boolean  // JDS準拠モード（アクセシビリティ・政府基準準拠）
  showSkipLink?: boolean  // JDS準拠時のスキップリンク表示
  navigationLandmark?: boolean  // JDS準拠時のナビゲーションランドマーク
}

const props = withDefaults(defineProps<Props>(), {
  separator: 'chevron',
  variant: 'default',
  size: 'md',
  showHomeIcon: false,
  maxItems: 0,
  collapseFrom: 'middle',
  enableStructuredData: true,
  ariaLabel: 'パンくずリスト',
  linkComponent: 'a',
  // JDS準拠デフォルト値
  jdsCompliant: false,
  showSkipLink: false,
  navigationLandmark: true
})

const emit = defineEmits<{
  'item-click': [item: BreadcrumbItem, index: number]
}>()

// アイテム表示制御
const displayItems = computed(() => {
  if (props.maxItems <= 0 || props.items.length <= props.maxItems) {
    return props.items
  }
  
  const items = [...props.items]
  const excess = items.length - props.maxItems
  
  if (props.collapseFrom === 'middle') {
    // 中間を省略（最初と最後を残す）
    const keepStart = Math.ceil((props.maxItems - 1) / 2)
    const keepEnd = Math.floor((props.maxItems - 1) / 2)
    
    return [
      ...items.slice(0, keepStart),
      { label: '...', disabled: true },
      ...items.slice(-keepEnd)
    ]
  } else if (props.collapseFrom === 'start') {
    // 開始から省略
    return [
      { label: '...', disabled: true },
      ...items.slice(excess + 1)
    ]
  } else {
    // 終了から省略
    return [
      ...items.slice(0, props.maxItems - 1),
      { label: '...', disabled: true }
    ]
  }
})

// コンテナクラス（JDS準拠対応）
const containerClasses = computed(() => {
  const classes = ['flex']
  
  if (props.jdsCompliant || props.variant.startsWith('jds-')) {
    classes.push('jds-breadcrumb')
    
    // JDS準拠の基本スタイル
    classes.push(
      'font-jds', 'text-base', 'leading-6',
      'py-jds-sm'  // 適切な余白確保
    )
    
    // JDS準拠バリアント
    if (props.variant === 'jds-minimal') {
      classes.push('border-b', 'border-gray-200', 'pb-jds-sm')
    } else {
      // jds-default
      classes.push('bg-gray-50', 'px-jds-md', 'py-jds-sm', 'rounded-md', 'border', 'border-gray-200')
    }
  } else {
    // 従来のバリアント
    const variants = {
      default: '',
      minimal: '',
      card: 'bg-white rounded-lg shadow-sm border border-gray-200 px-4 py-2',
      underline: 'border-b border-gray-200 pb-2'
    }
    
    if (variants[props.variant]) {
      classes.push(variants[props.variant])
    }
  }
  
  return classes.join(' ')
})

// リストクラス（JDS準拠対応）
const listClasses = computed(() => {
  const classes = ['flex', 'flex-wrap', 'items-center']
  
  if (props.jdsCompliant || props.variant.startsWith('jds-')) {
    // JDS 8pxグリッドシステム
    const jdsSizes = {
      sm: 'text-sm gap-jds-xs',  // 4px gap
      md: 'text-base gap-jds-sm',  // 8px gap (JDS標準)
      lg: 'text-lg gap-jds-md'   // 16px gap
    }
    classes.push(jdsSizes[props.size] || jdsSizes.md)
  } else {
    const sizes = {
      sm: 'text-sm space-x-1',
      md: 'text-sm space-x-1', 
      lg: 'text-base space-x-2'
    }
    classes.push(sizes[props.size])
  }
  
  return classes.join(' ')
})

// アイテムクラス
const itemClasses = (item: BreadcrumbItem, index: number) => {
  return 'flex items-center'
}

// リンククラス（JDS準拠対応）
const linkClasses = (item: BreadcrumbItem, index: number) => {
  const classes = ['transition-colors', 'duration-200']
  const isLast = index === displayItems.value.length - 1
  const isDisabled = item.disabled
  
  if (props.jdsCompliant || props.variant.startsWith('jds-')) {
    // JDS準拠アクセシビリティ強化
    classes.push(
      'focus:outline-none', 'focus:ring-2', 'focus:ring-jds-primary', 'focus:ring-offset-2',
      'rounded-sm', 'px-1', 'py-0.5'  // フォーカス時の視認性向上
    )
    
    // JDS準拠カラーシステム
    if (isLast) {
      classes.push('text-jds-text', 'font-medium', 'cursor-default')
    } else if (isDisabled) {
      classes.push('text-gray-400', 'cursor-default')
    } else {
      classes.push(
        'text-jds-primary', 'hover:text-blue-800',
        'underline', 'decoration-1', 'underline-offset-2',
        'hover:decoration-2'  // JDS推奨のリンクスタイル
      )
    }
    
    // JDS準拠サイズ
    const jdsSizes = {
      sm: 'text-sm',
      md: 'text-base',  // JDS標準
      lg: 'text-lg'
    }
    classes.push(jdsSizes[props.size] || jdsSizes.md)
  } else {
    // 従来のバリアント
    const variants = {
      default: isLast 
        ? 'text-gray-900 font-medium cursor-default'
        : isDisabled
          ? 'text-gray-400 cursor-default'
          : 'text-blue-600 hover:text-blue-800 hover:underline',
      minimal: isLast
        ? 'text-gray-900 font-medium cursor-default'
        : isDisabled
          ? 'text-gray-400 cursor-default'
          : 'text-gray-600 hover:text-gray-900',
      card: isLast
        ? 'text-gray-900 font-medium cursor-default'
        : isDisabled
          ? 'text-gray-400 cursor-default'
          : 'text-blue-600 hover:text-blue-800',
      underline: isLast
        ? 'text-gray-900 font-semibold cursor-default'
        : isDisabled
          ? 'text-gray-400 cursor-default'
          : 'text-gray-600 hover:text-gray-900 hover:underline'
    }
    
    const sizes = {
      sm: 'text-xs',
      md: 'text-sm',
      lg: 'text-base'
    }
    
    classes.push(variants[props.variant], sizes[props.size])
  }
  
  return classes.join(' ')
}

// アイコンクラス
const iconClasses = computed(() => {
  const sizes = {
    sm: 'w-3 h-3',
    md: 'w-4 h-4',
    lg: 'w-5 h-5'
  }
  
  return sizes[props.size]
})

// セパレータークラス（JDS準拠対応）
const separatorClasses = computed(() => {
  const classes = []
  
  if (props.jdsCompliant || props.variant.startsWith('jds-')) {
    classes.push('text-gray-500')  // JDS推奨のセパレーター色
    
    // JDS準拠サイズ
    const jdsSizes = {
      sm: 'text-sm',
      md: 'text-base',  // JDS標準
      lg: 'text-lg'
    }
    classes.push(jdsSizes[props.size] || jdsSizes.md)
  } else {
    classes.push('text-gray-400')
    
    const sizes = {
      sm: 'text-xs',
      md: 'text-sm',
      lg: 'text-base'
    }
    classes.push(sizes[props.size])
  }
  
  return classes.join(' ')
})

// リンクコンポーネント決定
const getLinkComponent = (item: BreadcrumbItem, index: number) => {
  const isLast = index === displayItems.value.length - 1
  const isDisabled = item.disabled
  
  if (isLast || isDisabled) {
    return 'span'
  }
  
  if (item.to) {
    return 'router-link'
  }
  
  return props.linkComponent
}

// リンクプロップス
const getLinkProps = (item: BreadcrumbItem, index: number) => {
  const isLast = index === displayItems.value.length - 1
  const isDisabled = item.disabled
  
  if (isLast || isDisabled) {
    return {
      'aria-current': isLast ? 'page' : undefined
    }
  }
  
  const baseProps = {
    onClick: (event: Event) => {
      if (!item.href && !item.to) {
        event.preventDefault()
      }
      emit('item-click', item, index)
    }
  }
  
  if (item.to) {
    return {
      ...baseProps,
      to: item.to
    }
  }
  
  if (item.href) {
    return {
      ...baseProps,
      href: item.href
    }
  }
  
  return baseProps
}

// JDS準拠時のアクセシビリティラベル
const getAriaLabel = (item: BreadcrumbItem, index: number) => {
  if (!props.jdsCompliant) return null
  
  const isLast = index === displayItems.value.length - 1
  const position = index + 1
  const total = displayItems.value.length
  
  if (isLast) {
    return `現在のページ: ${item.label}`
  }
  
  return `${position}番目の階層: ${item.label}。${total}階層中の${position}番目。`
}

// アイコンコンポーネントは直接SVGで実装済み

// 構造化データ
const structuredDataJson = computed(() => {
  if (!props.enableStructuredData) return ''
  
  const itemList = props.items.map((item, index) => ({
    '@type': 'ListItem',
    position: index + 1,
    name: item.label,
    item: item.href || item.to || undefined
  }))
  
  return JSON.stringify({
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: itemList
  })
})
</script>