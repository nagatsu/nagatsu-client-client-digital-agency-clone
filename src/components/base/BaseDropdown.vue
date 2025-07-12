<template>
  <!-- JDS準拠時のドロップダウン説明 -->
  <div 
    v-if="jdsCompliant && dropdownDescription"
    :id="`${dropdownId}-description`"
    class="mb-jds-xs text-sm text-gray-700"
  >
    {{ dropdownDescription }}
  </div>

  <Menu as="div" :class="wrapperClasses">
    <MenuButton 
      :class="buttonClasses"
      :aria-describedby="jdsCompliant ? getAriaDescribedBy() : null"
      :aria-label="jdsCompliant ? buttonAriaLabel : null"
      @keydown="handleButtonKeydown"
    >
      <slot name="button" :open="false">
        <span class="sr-only" v-if="jdsCompliant">{{ buttonText || 'メニューを開く' }}</span>
        {{ buttonText || 'Open' }}
      </slot>
      
      <!-- JDS準拠アイコン -->
      <svg 
        v-if="jdsCompliant || showIcon"
        :class="iconClasses" 
        fill="none" 
        stroke="currentColor" 
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
      </svg>
    </MenuButton>

    <transition
      enter-active-class="transition ease-out duration-100"
      enter-from-class="transform opacity-0 scale-95"
      enter-to-class="transform opacity-100 scale-100"
      leave-active-class="transition ease-in duration-75"
      leave-from-class="transform opacity-100 scale-100"
      leave-to-class="transform opacity-0 scale-95"
    >
      <MenuItems 
        :class="menuItemsClasses"
        :aria-labelledby="jdsCompliant ? `${dropdownId}-button` : null"
      >
        <div 
          v-if="jdsCompliant && menuTitle"
          class="px-jds-md py-jds-sm border-b border-gray-200"
        >
          <div class="text-sm font-medium text-jds-text">{{ menuTitle }}</div>
        </div>
        
        <slot />
        
        <!-- JDS準拠フッター -->
        <div 
          v-if="jdsCompliant && menuFooter"
          class="px-jds-md py-jds-sm border-t border-gray-200 bg-gray-50"
        >
          <div class="text-xs text-gray-600">{{ menuFooter }}</div>
        </div>
      </MenuItems>
    </transition>
  </Menu>

  <!-- JDS準拠時のヘルプテキスト -->
  <div 
    v-if="jdsCompliant && helpText"
    :id="`${dropdownId}-help`"
    class="mt-jds-xs text-xs text-gray-600"
  >
    {{ helpText }}
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { Menu, MenuButton, MenuItems } from '@headlessui/vue'

interface Props {
  // 基本プロップス
  buttonText?: string
  showIcon?: boolean
  placement?: 'left' | 'right' | 'center'
  width?: 'auto' | 'sm' | 'md' | 'lg' | 'xl' | 'full'
  variant?: 'default' | 'minimal' | 'bordered' | 'jds-primary' | 'jds-secondary' | 'jds-transparent'
  size?: 'xs' | 'sm' | 'md' | 'lg'
  disabled?: boolean
  loading?: boolean
  
  // JDS準拠プロップス
  jdsCompliant?: boolean
  dropdownDescription?: string
  buttonAriaLabel?: string
  menuTitle?: string
  menuFooter?: string
  helpText?: string
  
  // 非推奨（後方互換性）
  buttonClasses?: string
}

const props = withDefaults(defineProps<Props>(), {
  buttonText: '',
  showIcon: true,
  placement: 'right',
  width: 'md',
  variant: 'default',
  size: 'md',
  disabled: false,
  loading: false,
  jdsCompliant: false,
  dropdownDescription: null,
  buttonAriaLabel: null,
  menuTitle: null,
  menuFooter: null,
  helpText: null,
  buttonClasses: ''
})

// JDS準拠ID管理
import { generateId } from '@/utils/helpers'
const dropdownId = ref(generateId('dropdown'))

// Computed properties
const wrapperClasses = computed(() => {
  const classes = ['relative']
  
  if (props.jdsCompliant || props.variant.startsWith('jds-')) {
    classes.push('jds-dropdown-wrapper')
  }
  
  if (props.width === 'full') {
    classes.push('w-full')
  } else {
    classes.push('inline-block')
  }
  
  return classes
})

const buttonClasses = computed(() => {
  // 後方互換性: 古いbuttonClassesプロップが指定されている場合はそれを使用
  if (props.buttonClasses) {
    return props.buttonClasses
  }
  
  const classes = ['inline-flex', 'items-center', 'justify-between']
  
  if (props.jdsCompliant || props.variant.startsWith('jds-')) {
    // JDS準拠スタイル
    classes.push(
      'jds-dropdown-button',
      'font-jds', 'text-jds-text',
      'border', 'border-gray-300', 'rounded-md',
      'transition-colors', 'duration-200'
    )
    
    // JDS準拠バリアント
    if (props.variant === 'jds-primary') {
      classes.push(
        'bg-jds-primary', 'text-white', 'border-jds-primary',
        'hover:bg-jds-primary-dark', 'focus:bg-jds-primary-dark'
      )
    } else if (props.variant === 'jds-secondary') {
      classes.push(
        'bg-gray-100', 'text-jds-text', 'border-gray-300',
        'hover:bg-gray-200', 'focus:bg-gray-200'
      )
    } else if (props.variant === 'jds-transparent') {
      classes.push(
        'bg-transparent', 'text-jds-text', 'border-gray-300',
        'hover:bg-gray-50', 'focus:bg-gray-50'
      )
    } else {
      // jds-default
      classes.push(
        'bg-white', 'text-jds-text', 'border-gray-300',
        'hover:bg-gray-50', 'focus:bg-gray-50'
      )
    }
    
    // JDS 8pxグリッドサイズ
    const jdsSizes = {
      xs: 'px-jds-sm py-jds-xs text-sm min-h-[32px]',
      sm: 'px-jds-sm py-jds-sm text-sm min-h-[36px]',
      md: 'px-jds-md py-jds-sm text-base min-h-[44px]',  // JDS最小タッチターゲット
      lg: 'px-jds-lg py-jds-md text-lg min-h-[48px]'
    }
    classes.push(jdsSizes[props.size] || jdsSizes.md)
    
    // JDS準拠フォーカス
    classes.push(
      'focus:outline-none', 'focus:ring-2', 'focus:ring-jds-primary', 'focus:ring-offset-2'
    )
    
    // JDS準拠幅設定
    const jdsWidths = {
      auto: 'w-auto',
      sm: 'w-32',
      md: 'w-48',
      lg: 'w-64',
      xl: 'w-80',
      full: 'w-full'
    }
    classes.push(jdsWidths[props.width] || jdsWidths.md)
    
  } else {
    // 従来のスタイル
    classes.push(
      'rounded-md', 'border', 'border-neutral-300', 'bg-white',
      'text-sm', 'font-medium', 'text-neutral-700',
      'hover:bg-neutral-50', 'focus:outline-none', 'focus:ring-2', 'focus:ring-primary-500'
    )
    
    // 従来のサイズ
    if (props.size === 'xs') {
      classes.push('px-2', 'py-1', 'text-xs')
    } else if (props.size === 'sm') {
      classes.push('px-3', 'py-1.5', 'text-sm')
    } else if (props.size === 'lg') {
      classes.push('px-6', 'py-3', 'text-base')
    } else {
      classes.push('px-4', 'py-2', 'text-sm')
    }
  }
  
  // 共通状態
  if (props.disabled) {
    classes.push('opacity-50', 'cursor-not-allowed')
  } else {
    classes.push('cursor-pointer')
  }
  
  return classes
})

const iconClasses = computed(() => {
  const classes = ['transition-transform', 'duration-200']
  
  if (props.jdsCompliant || props.variant.startsWith('jds-')) {
    classes.push('w-4', 'h-4', 'ml-jds-sm')
  } else {
    classes.push('w-5', 'h-5', 'ml-2')
  }
  
  return classes
})

const menuItemsClasses = computed(() => {
  const classes = ['absolute', 'z-50', 'mt-1']
  
  if (props.jdsCompliant || props.variant.startsWith('jds-')) {
    classes.push(
      'jds-dropdown-menu',
      'bg-white', 'border', 'border-gray-300', 'rounded-md', 'shadow-lg',
      'focus:outline-none', 'overflow-hidden'
    )
  } else {
    classes.push(
      'bg-white', 'shadow-lg', 'ring-1', 'ring-black', 'ring-opacity-5',
      'focus:outline-none', 'rounded-md'
    )
  }
  
  // 配置
  if (props.placement === 'left') {
    classes.push('left-0', 'origin-top-left')
  } else if (props.placement === 'center') {
    classes.push('left-1/2', '-translate-x-1/2', 'origin-top')
  } else {
    classes.push('right-0', 'origin-top-right')
  }
  
  // 幅設定
  const widths = {
    auto: 'w-auto min-w-max',
    sm: 'w-32',
    md: 'w-56',
    lg: 'w-72',
    xl: 'w-80',
    full: 'w-full'
  }
  classes.push(widths[props.width] || widths.md)
  
  return classes
})

// Methods
const getAriaDescribedBy = () => {
  if (!props.jdsCompliant) return null
  
  const descriptions = []
  
  if (props.dropdownDescription) {
    descriptions.push(`${dropdownId.value}-description`)
  }
  
  if (props.helpText) {
    descriptions.push(`${dropdownId.value}-help`)
  }
  
  return descriptions.length > 0 ? descriptions.join(' ') : null
}

const handleButtonKeydown = (event: KeyboardEvent) => {
  if (!props.jdsCompliant) return
  
  // JDS準拠キーボード操作
  if (event.key === 'ArrowDown' || event.key === 'ArrowUp') {
    event.preventDefault()
    // メニューが開いている場合の処理は@headlessui/vueが自動処理
  }
}
</script>
