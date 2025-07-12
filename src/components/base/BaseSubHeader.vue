<template>
  <header :class="headerClasses" class="border-b border-gray-200 dark:border-gray-700">
    <div :class="containerClasses" class="mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between h-16">
        <!-- 左側コンテンツ -->
        <div class="flex items-center space-x-4">
          <!-- 戻るボタン -->
          <button
            v-if="showBackButton"
            :class="backButtonClasses"
            class="flex items-center px-3 py-2 text-sm font-medium rounded-md transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-primary-500"
            :aria-label="backButtonLabel"
            @click="handleBackClick"
          >
            <component
              v-if="backIcon && typeof backIcon === 'object'"
              :is="backIcon"
              class="w-4 h-4 mr-2"
              aria-hidden="true"
            />
            <svg
              v-else
              class="w-4 h-4 mr-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
            </svg>
            {{ backButtonText }}
          </button>
          
          <!-- タイトルセクション -->
          <div class="flex items-center space-x-3">
            <!-- アイコン -->
            <component
              v-if="icon && typeof icon === 'object'"
              :is="icon"
              :class="iconClasses"
              class="w-6 h-6"
              aria-hidden="true"
            />
            
            <!-- タイトル -->
            <div>
              <h1 :class="titleClasses" class="text-lg font-semibold">
                {{ title }}
              </h1>
              <p
                v-if="subtitle"
                :class="subtitleClasses"
                class="text-sm"
              >
                {{ subtitle }}
              </p>
            </div>
          </div>
          
          <!-- ステータスバッジ -->
          <span
            v-if="status"
            :class="statusClasses"
            class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium"
          >
            <span
              v-if="statusIcon"
              :class="statusIconClasses"
              class="w-2 h-2 mr-1 rounded-full"
            />
            {{ status }}
          </span>
        </div>
        
        <!-- 中央コンテンツ（ナビゲーション等） -->
        <div v-if="showNavigation" class="hidden md:flex items-center space-x-1">
          <nav class="flex space-x-1" role="navigation">
            <a
              v-for="(item, index) in navigationItems"
              :key="item.href || index"
              :href="item.href"
              :class="getNavItemClasses(item)"
              class="px-3 py-2 text-sm font-medium rounded-md transition-colors duration-200"
              :aria-current="item.current ? 'page' : undefined"
            >
              {{ item.label }}
            </a>
          </nav>
        </div>
        
        <!-- 右側コンテンツ -->
        <div class="flex items-center space-x-3">
          <!-- カスタムアクション -->
          <slot name="actions" :title="title" :subtitle="subtitle">
            <!-- アクションボタン -->
            <button
              v-for="(action, index) in actions"
              :key="index"
              :class="getActionClasses(action)"
              class="inline-flex items-center px-3 py-2 text-sm font-medium rounded-md transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-primary-500"
              :disabled="action.disabled"
              @click="handleActionClick(action)"
            >
              <component
                v-if="action.icon"
                :is="action.icon"
                class="w-4 h-4 mr-2"
                aria-hidden="true"
              />
              {{ action.label }}
            </button>
          </slot>
          
          <!-- モバイルメニューボタン -->
          <button
            v-if="showMobileMenu"
            :class="mobileMenuButtonClasses"
            class="md:hidden p-2 rounded-md transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-primary-500"
            :aria-expanded="mobileMenuOpen"
            aria-label="メニューを開く"
            @click="toggleMobileMenu"
          >
            <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
      
      <!-- モバイルナビゲーション -->
      <div
        v-if="showNavigation && mobileMenuOpen"
        class="md:hidden border-t border-gray-200 dark:border-gray-700 pt-4 pb-4"
      >
        <nav class="space-y-1" role="navigation">
          <a
            v-for="(item, index) in navigationItems"
            :key="`mobile-${item.href || index}`"
            :href="item.href"
            :class="getMobileNavItemClasses(item)"
            class="block px-3 py-2 text-sm font-medium rounded-md transition-colors duration-200"
            :aria-current="item.current ? 'page' : undefined"
          >
            {{ item.label }}
          </a>
        </nav>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'

interface NavigationItem {
  label: string
  href: string
  current?: boolean
  disabled?: boolean
}

interface ActionButton {
  label: string
  icon?: string | object
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost'
  disabled?: boolean
  onClick?: () => void
}

interface Props {
  title: string
  subtitle?: string
  icon?: string | object
  status?: string
  statusVariant?: 'success' | 'warning' | 'error' | 'info' | 'neutral'
  statusIcon?: boolean
  showBackButton?: boolean
  backButtonText?: string
  backButtonLabel?: string
  backIcon?: string | object
  navigationItems?: NavigationItem[]
  showNavigation?: boolean
  actions?: ActionButton[]
  showMobileMenu?: boolean
  variant?: 'default' | 'minimal' | 'branded'
  size?: 'sm' | 'md' | 'lg'
  sticky?: boolean
  maxWidth?: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | 'full'
}

const props = withDefaults(defineProps<Props>(), {
  navigationItems: () => [],
  actions: () => [],
  showBackButton: false,
  backButtonText: '戻る',
  backButtonLabel: '前のページに戻る',
  showNavigation: false,
  showMobileMenu: false,
  variant: 'default',
  size: 'md',
  sticky: false,
  maxWidth: 'full',
  statusVariant: 'neutral',
  statusIcon: false
})

const emit = defineEmits<{
  'back-click': []
  'action-click': [action: ActionButton]
  'mobile-menu-toggle': [open: boolean]
}>()

// リアクティブな状態
const mobileMenuOpen = ref(false)

// 計算されたプロパティ
const headerClasses = computed(() => {
  const base = 'border-b border-gray-200 dark:border-gray-700'
  
  const variants = {
    default: 'bg-white dark:bg-gray-900',
    minimal: 'bg-gray-50 dark:bg-gray-800',
    branded: 'bg-primary-50 dark:bg-primary-900'
  }
  
  const sticky = props.sticky ? 'sticky top-0 z-30' : ''
  
  return [base, variants[props.variant], sticky]
})

const containerClasses = computed(() => {
  const maxWidths = {
    sm: 'max-w-2xl',
    md: 'max-w-4xl',
    lg: 'max-w-6xl',
    xl: 'max-w-7xl',
    '2xl': 'max-w-8xl',
    full: 'max-w-none'
  }
  
  return ['mx-auto px-4 sm:px-6 lg:px-8', maxWidths[props.maxWidth]]
})

const backButtonClasses = computed(() => {
  const base = 'flex items-center px-3 py-2 text-sm font-medium rounded-md transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-primary-500'
  
  const variants = {
    default: 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 hover:bg-gray-100 dark:hover:bg-gray-800',
    minimal: 'text-gray-500 dark:text-gray-500 hover:text-gray-700 dark:hover:text-gray-300',
    branded: 'text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 hover:bg-primary-100 dark:hover:bg-primary-800'
  }
  
  return [base, variants[props.variant]]
})

const iconClasses = computed(() => {
  const variants = {
    default: 'text-gray-500 dark:text-gray-400',
    minimal: 'text-gray-400 dark:text-gray-500',
    branded: 'text-primary-600 dark:text-primary-400'
  }
  
  return variants[props.variant]
})

const titleClasses = computed(() => {
  const base = 'text-lg font-semibold'
  
  const sizes = {
    sm: 'text-base',
    md: 'text-lg',
    lg: 'text-xl'
  }
  
  const variants = {
    default: 'text-gray-900 dark:text-gray-100',
    minimal: 'text-gray-800 dark:text-gray-200',
    branded: 'text-primary-900 dark:text-primary-100'
  }
  
  return [base, sizes[props.size], variants[props.variant]]
})

const subtitleClasses = computed(() => {
  const variants = {
    default: 'text-gray-500 dark:text-gray-400',
    minimal: 'text-gray-400 dark:text-gray-500',
    branded: 'text-primary-600 dark:text-primary-400'
  }
  
  return ['text-sm', variants[props.variant]]
})

const statusClasses = computed(() => {
  const base = 'inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium'
  
  const variants = {
    success: 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300',
    warning: 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300',
    error: 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300',
    info: 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300',
    neutral: 'bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-300'
  }
  
  return [base, variants[props.statusVariant]]
})

const statusIconClasses = computed(() => {
  const variants = {
    success: 'bg-green-400',
    warning: 'bg-yellow-400',
    error: 'bg-red-400',
    info: 'bg-blue-400',
    neutral: 'bg-gray-400'
  }
  
  return variants[props.statusVariant]
})

const mobileMenuButtonClasses = computed(() => {
  const base = 'md:hidden p-2 rounded-md transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-primary-500'
  
  const variants = {
    default: 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 hover:bg-gray-100 dark:hover:bg-gray-800',
    minimal: 'text-gray-500 dark:text-gray-500 hover:text-gray-700 dark:hover:text-gray-300',
    branded: 'text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300'
  }
  
  return [base, variants[props.variant]]
})

// メソッド
const getNavItemClasses = (item: NavigationItem) => {
  const base = 'px-3 py-2 text-sm font-medium rounded-md transition-colors duration-200'
  
  if (item.disabled) {
    return [base, 'text-gray-400 dark:text-gray-600 cursor-not-allowed']
  }
  
  if (item.current) {
    return [base, 'bg-primary-100 text-primary-700 dark:bg-primary-900 dark:text-primary-300']
  }
  
  return [base, 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 hover:bg-gray-100 dark:hover:bg-gray-800']
}

const getMobileNavItemClasses = (item: NavigationItem) => {
  const base = 'block px-3 py-2 text-sm font-medium rounded-md transition-colors duration-200'
  
  if (item.disabled) {
    return [base, 'text-gray-400 dark:text-gray-600 cursor-not-allowed']
  }
  
  if (item.current) {
    return [base, 'bg-primary-100 text-primary-700 dark:bg-primary-900 dark:text-primary-300']
  }
  
  return [base, 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 hover:bg-gray-100 dark:hover:bg-gray-800']
}

const getActionClasses = (action: ActionButton) => {
  const base = 'inline-flex items-center px-3 py-2 text-sm font-medium rounded-md transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-primary-500'
  
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

const handleBackClick = () => {
  emit('back-click')
}

const handleActionClick = (action: ActionButton) => {
  if (action.disabled) return
  
  if (action.onClick) {
    action.onClick()
  }
  
  emit('action-click', action)
}

const toggleMobileMenu = () => {
  mobileMenuOpen.value = !mobileMenuOpen.value
  emit('mobile-menu-toggle', mobileMenuOpen.value)
}
</script>