<template>
  <div :class="containerClasses" class="relative inline-block">
    <!-- 吹き出し本体 -->
    <div
      :class="balloonClasses"
      class="relative px-4 py-3 rounded-lg shadow-sm border"
      role="dialog"
      :aria-label="ariaLabel"
    >
      <!-- ヘッダー（タイトル付きの場合） -->
      <div
        v-if="title || $slots.header"
        :class="headerClasses"
        class="flex items-center justify-between mb-2"
      >
        <slot name="header" :title="title" :close="handleClose">
          <h3 v-if="title" class="text-sm font-medium">{{ title }}</h3>
        </slot>
        
        <!-- クローズボタン -->
        <button
          v-if="closable"
          :class="closeButtonClasses"
          class="p-1 rounded-md transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-primary-500"
          :aria-label="closeLabel"
          @click="handleClose"
        >
          <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
      
      <!-- メインコンテンツ -->
      <div :class="contentClasses" class="text-sm">
        <slot :content="content" :variant="variant">
          <p v-if="content">{{ content }}</p>
        </slot>
      </div>
      
      <!-- フッター（アクション付きの場合） -->
      <div
        v-if="actions.length > 0 || $slots.footer"
        :class="footerClasses"
        class="flex items-center justify-end space-x-2 mt-3 pt-2"
      >
        <slot name="footer" :actions="actions" :close="handleClose">
          <button
            v-for="(action, index) in actions"
            :key="index"
            :class="getActionClasses(action)"
            class="px-3 py-1 text-xs font-medium rounded transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-primary-500"
            :disabled="action.disabled"
            @click="handleActionClick(action)"
          >
            {{ action.label }}
          </button>
        </slot>
      </div>
      
      <!-- 吹き出しの矢印 -->
      <div
        :class="arrowClasses"
        class="absolute w-3 h-3 transform rotate-45"
        aria-hidden="true"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'

type Position = 'top' | 'bottom' | 'left' | 'right' | 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right'
type Variant = 'default' | 'info' | 'success' | 'warning' | 'error' | 'help'
type Size = 'sm' | 'md' | 'lg'

interface Action {
  label: string
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost'
  disabled?: boolean
  onClick?: () => void
}

interface Props {
  content?: string
  title?: string
  variant?: Variant
  size?: Size
  position?: Position
  closable?: boolean
  closeLabel?: string
  actions?: Action[]
  maxWidth?: string
  ariaLabel?: string
  showIcon?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  variant: 'default',
  size: 'md',
  position: 'top',
  closable: false,
  closeLabel: '閉じる',
  actions: () => [],
  ariaLabel: 'メッセージ',
  showIcon: true
})

const emit = defineEmits<{
  'close': []
  'action-click': [action: Action]
}>()

// 計算されたプロパティ
const containerClasses = computed(() => {
  const base = 'relative inline-block'
  const maxWidth = props.maxWidth ? '' : 'max-w-xs'
  
  return [base, maxWidth]
})

const balloonClasses = computed(() => {
  const base = 'relative px-4 py-3 rounded-lg shadow-sm border'
  
  const variants = {
    default: 'bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 text-gray-900 dark:text-gray-100',
    info: 'bg-blue-50 dark:bg-blue-900 border-blue-200 dark:border-blue-700 text-blue-900 dark:text-blue-100',
    success: 'bg-green-50 dark:bg-green-900 border-green-200 dark:border-green-700 text-green-900 dark:text-green-100',
    warning: 'bg-yellow-50 dark:bg-yellow-900 border-yellow-200 dark:border-yellow-700 text-yellow-900 dark:text-yellow-100',
    error: 'bg-red-50 dark:bg-red-900 border-red-200 dark:border-red-700 text-red-900 dark:text-red-100',
    help: 'bg-purple-50 dark:bg-purple-900 border-purple-200 dark:border-purple-700 text-purple-900 dark:text-purple-100'
  }
  
  const sizes = {
    sm: 'px-3 py-2 text-xs',
    md: 'px-4 py-3 text-sm',
    lg: 'px-5 py-4 text-base'
  }
  
  return [base, variants[props.variant], sizes[props.size]]
})

const headerClasses = computed(() => {
  const variants = {
    default: 'text-gray-900 dark:text-gray-100',
    info: 'text-blue-900 dark:text-blue-100',
    success: 'text-green-900 dark:text-green-100',
    warning: 'text-yellow-900 dark:text-yellow-100',
    error: 'text-red-900 dark:text-red-100',
    help: 'text-purple-900 dark:text-purple-100'
  }
  
  return ['flex items-center justify-between mb-2', variants[props.variant]]
})

const contentClasses = computed(() => {
  const variants = {
    default: 'text-gray-700 dark:text-gray-300',
    info: 'text-blue-800 dark:text-blue-200',
    success: 'text-green-800 dark:text-green-200',
    warning: 'text-yellow-800 dark:text-yellow-200',
    error: 'text-red-800 dark:text-red-200',
    help: 'text-purple-800 dark:text-purple-200'
  }
  
  return ['text-sm', variants[props.variant]]
})

const footerClasses = computed(() => {
  const variants = {
    default: 'border-gray-200 dark:border-gray-700',
    info: 'border-blue-200 dark:border-blue-700',
    success: 'border-green-200 dark:border-green-700',
    warning: 'border-yellow-200 dark:border-yellow-700',
    error: 'border-red-200 dark:border-red-700',
    help: 'border-purple-200 dark:border-purple-700'
  }
  
  return ['flex items-center justify-end space-x-2 mt-3 pt-2 border-t', variants[props.variant]]
})

const closeButtonClasses = computed(() => {
  const variants = {
    default: 'text-gray-400 hover:text-gray-600 dark:text-gray-500 dark:hover:text-gray-300',
    info: 'text-blue-400 hover:text-blue-600 dark:text-blue-500 dark:hover:text-blue-300',
    success: 'text-green-400 hover:text-green-600 dark:text-green-500 dark:hover:text-green-300',
    warning: 'text-yellow-400 hover:text-yellow-600 dark:text-yellow-500 dark:hover:text-yellow-300',
    error: 'text-red-400 hover:text-red-600 dark:text-red-500 dark:hover:text-red-300',
    help: 'text-purple-400 hover:text-purple-600 dark:text-purple-500 dark:hover:text-purple-300'
  }
  
  return ['p-1 rounded-md transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-primary-500', variants[props.variant]]
})

const arrowClasses = computed(() => {
  const base = 'absolute w-3 h-3 transform rotate-45'
  
  const variants = {
    default: 'bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700',
    info: 'bg-blue-50 dark:bg-blue-900 border-blue-200 dark:border-blue-700',
    success: 'bg-green-50 dark:bg-green-900 border-green-200 dark:border-green-700',
    warning: 'bg-yellow-50 dark:bg-yellow-900 border-yellow-200 dark:border-yellow-700',
    error: 'bg-red-50 dark:bg-red-900 border-red-200 dark:border-red-700',
    help: 'bg-purple-50 dark:bg-purple-900 border-purple-200 dark:border-purple-700'
  }
  
  // 位置に応じて矢印の配置を調整
  const positions = {
    top: '-bottom-1.5 left-1/2 -translate-x-1/2 border-b border-r',
    bottom: '-top-1.5 left-1/2 -translate-x-1/2 border-t border-l',
    left: '-right-1.5 top-1/2 -translate-y-1/2 border-t border-r',
    right: '-left-1.5 top-1/2 -translate-y-1/2 border-b border-l',
    'top-left': '-bottom-1.5 left-4 border-b border-r',
    'top-right': '-bottom-1.5 right-4 border-b border-r',
    'bottom-left': '-top-1.5 left-4 border-t border-l',
    'bottom-right': '-top-1.5 right-4 border-t border-l'
  }
  
  return [base, variants[props.variant], positions[props.position]]
})

// メソッド
const getActionClasses = (action: Action) => {
  const base = 'px-3 py-1 text-xs font-medium rounded transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-primary-500'
  
  if (action.disabled) {
    return [base, 'opacity-50 cursor-not-allowed bg-gray-100 text-gray-400 dark:bg-gray-800 dark:text-gray-600']
  }
  
  const variants = {
    primary: 'bg-primary-600 text-white hover:bg-primary-700 dark:bg-primary-500 dark:hover:bg-primary-600',
    secondary: 'bg-gray-600 text-white hover:bg-gray-700 dark:bg-gray-500 dark:hover:bg-gray-600',
    outline: 'border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800',
    ghost: 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 hover:bg-gray-100 dark:hover:bg-gray-800'
  }
  
  return [base, variants[action.variant || 'primary']]
}

const handleClose = () => {
  emit('close')
}

const handleActionClick = (action: Action) => {
  if (action.disabled) return
  
  if (action.onClick) {
    action.onClick()
  }
  
  emit('action-click', action)
}
</script>