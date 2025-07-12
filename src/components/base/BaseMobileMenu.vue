<template>
  <div>
    <!-- モバイルメニュートリガー -->
    <button
      :class="triggerClasses"
      class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary-500 transition-colors duration-200"
      :aria-expanded="isOpen"
      :aria-controls="menuId"
      aria-label="メインメニューを開く"
      @click="toggleMenu"
    >
      <!-- ハンバーガーアイコンまたはカスタムアイコン -->
      <component
        v-if="triggerIcon"
        :is="triggerIcon"
        :class="iconClasses"
        class="w-6 h-6"
        aria-hidden="true"
      />
      <template v-else>
        <!-- デフォルトハンバーガーアイコン -->
        <svg
          :class="[iconClasses, { 'hidden': isOpen }]"
          class="w-6 h-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          aria-hidden="true"
        >
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
        </svg>
        <!-- クローズアイコン -->
        <svg
          :class="[iconClasses, { 'hidden': !isOpen }]"
          class="w-6 h-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          aria-hidden="true"
        >
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </template>
    </button>

    <!-- オーバーレイ -->
    <Transition
      enter-active-class="transition-opacity duration-300 ease-out"
      enter-from-class="opacity-0"
      enter-to-class="opacity-100"
      leave-active-class="transition-opacity duration-200 ease-in"
      leave-from-class="opacity-100"
      leave-to-class="opacity-0"
    >
      <div
        v-if="isOpen && showOverlay"
        class="fixed inset-0 bg-black bg-opacity-50 z-40"
        @click="closeMenu"
      />
    </Transition>

    <!-- モバイルメニューパネル -->
    <Transition
      enter-active-class="transition duration-300 ease-out"
      enter-from-class="transform -translate-x-full"
      enter-to-class="transform translate-x-0"
      leave-active-class="transition duration-200 ease-in"
      leave-from-class="transform translate-x-0"
      leave-to-class="transform -translate-x-full"
    >
      <div
        v-if="isOpen"
        :id="menuId"
        :class="menuClasses"
        class="fixed top-0 left-0 w-64 h-full bg-white dark:bg-gray-800 shadow-xl z-50 overflow-y-auto"
        role="navigation"
        :aria-label="ariaLabel"
      >
        <!-- メニューヘッダー -->
        <div
          v-if="headerContent || $slots.header"
          :class="headerClasses"
          class="flex items-center justify-between px-4 py-3 border-b border-gray-200 dark:border-gray-700"
        >
          <slot name="header" :close="closeMenu">
            <div v-if="headerContent" v-html="headerContent" />
          </slot>
          
          <!-- クローズボタン -->
          <button
            :class="closeButtonClasses"
            class="p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-primary-500 transition-colors duration-200"
            aria-label="メニューを閉じる"
            @click="closeMenu"
          >
            <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <!-- メニューコンテンツ -->
        <nav :class="navClasses" class="flex-1 px-4 py-4 space-y-1" role="menu">
          <!-- メニューアイテム -->
          <template v-for="(item, index) in menuItems" :key="item.id || index">
            <!-- グループヘッダー -->
            <div
              v-if="item.type === 'group'"
              :class="groupHeaderClasses"
              class="px-3 py-2 text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider"
            >
              {{ item.label }}
            </div>
            
            <!-- 区切り線 -->
            <hr
              v-else-if="item.type === 'divider'"
              class="my-2 border-gray-200 dark:border-gray-700"
            />
            
            <!-- リンクアイテム -->
            <template v-else>
              <component
                :is="item.href ? 'a' : 'button'"
                :href="item.href"
                :class="getItemClasses(item)"
                class="w-full flex items-center px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
                :aria-current="item.current ? 'page' : undefined"
                :disabled="item.disabled"
                role="menuitem"
                @click="handleItemClick(item)"
              >
                <!-- アイテムアイコン -->
                <component
                  v-if="item.icon"
                  :is="item.icon"
                  :class="getIconClasses(item)"
                  class="mr-3 w-5 h-5"
                  aria-hidden="true"
                />
                
                <!-- アイテムラベル -->
                <span class="flex-1 text-left">{{ item.label }}</span>
                
                <!-- バッジ -->
                <span
                  v-if="item.badge"
                  :class="getBadgeClasses(item)"
                  class="ml-auto px-2 py-1 text-xs rounded-full"
                >
                  {{ item.badge }}
                </span>
                
                <!-- 外部リンクアイコン -->
                <svg
                  v-if="item.external"
                  class="ml-2 w-4 h-4 text-gray-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </component>
            </template>
          </template>
          
          <!-- カスタムスロットコンテンツ -->
          <slot name="content" :close="closeMenu" :items="menuItems" />
        </nav>

        <!-- メニューフッター -->
        <div
          v-if="footerContent || $slots.footer"
          :class="footerClasses"
          class="px-4 py-3 border-t border-gray-200 dark:border-gray-700"
        >
          <slot name="footer" :close="closeMenu">
            <div v-if="footerContent" v-html="footerContent" />
          </slot>
        </div>
      </div>
    </Transition>
  </div>
</template>

<script setup lang="ts">
import { computed, ref, onMounted, onUnmounted, watch } from 'vue'

interface MenuItem {
  id?: string
  type?: 'item' | 'group' | 'divider'
  label?: string
  href?: string
  icon?: string | object
  badge?: string | number
  current?: boolean
  disabled?: boolean
  external?: boolean
  onClick?: () => void
}

interface Props {
  modelValue?: boolean
  menuItems?: MenuItem[]
  headerContent?: string
  footerContent?: string
  triggerIcon?: string | object
  variant?: 'default' | 'minimal' | 'branded'
  position?: 'left' | 'right'
  width?: 'sm' | 'md' | 'lg' | 'full'
  showOverlay?: boolean
  closeOnItemClick?: boolean
  closeOnOutsideClick?: boolean
  menuId?: string
  ariaLabel?: string
}

const props = withDefaults(defineProps<Props>(), {
  modelValue: false,
  menuItems: () => [],
  variant: 'default',
  position: 'left',
  width: 'md',
  showOverlay: true,
  closeOnItemClick: true,
  closeOnOutsideClick: true,
  menuId: () => `mobile-menu-${Math.random().toString(36).substr(2, 9)}`,
  ariaLabel: 'メインナビゲーション'
})

const emit = defineEmits<{
  'update:modelValue': [value: boolean]
  'open': []
  'close': []
  'item-click': [item: MenuItem]
}>()

// リアクティブな状態
const isOpen = ref(props.modelValue)

// 計算されたプロパティ
const triggerClasses = computed(() => {
  const base = 'inline-flex items-center justify-center p-2 rounded-md transition-colors duration-200'
  
  const variants = {
    default: 'text-gray-400 hover:text-gray-500 hover:bg-gray-100 dark:text-gray-300 dark:hover:text-gray-200 dark:hover:bg-gray-700',
    minimal: 'text-gray-600 hover:text-gray-700 hover:bg-gray-50 dark:text-gray-400 dark:hover:text-gray-300 dark:hover:bg-gray-800',
    branded: 'text-primary-600 hover:text-primary-700 hover:bg-primary-50 dark:text-primary-400 dark:hover:text-primary-300 dark:hover:bg-primary-900'
  }
  
  return [base, variants[props.variant]]
})

const iconClasses = computed(() => {
  return 'transition-transform duration-200'
})

const menuClasses = computed(() => {
  const base = 'fixed top-0 h-full bg-white dark:bg-gray-800 shadow-xl z-50 overflow-y-auto'
  
  const positions = {
    left: 'left-0',
    right: 'right-0'
  }
  
  const widths = {
    sm: 'w-56',
    md: 'w-64',
    lg: 'w-72',
    full: 'w-full max-w-sm'
  }
  
  const variants = {
    default: 'border-r border-gray-200 dark:border-gray-700',
    minimal: '',
    branded: 'border-r-2 border-primary-200 dark:border-primary-800'
  }
  
  return [base, positions[props.position], widths[props.width], variants[props.variant]]
})

const headerClasses = computed(() => {
  const base = 'flex items-center justify-between px-4 py-3 border-b border-gray-200 dark:border-gray-700'
  
  const variants = {
    default: 'bg-gray-50 dark:bg-gray-900',
    minimal: 'bg-white dark:bg-gray-800',
    branded: 'bg-primary-50 dark:bg-primary-900'
  }
  
  return [base, variants[props.variant]]
})

const navClasses = computed(() => {
  return 'flex-1 px-4 py-4 space-y-1'
})

const footerClasses = computed(() => {
  const base = 'px-4 py-3 border-t border-gray-200 dark:border-gray-700'
  
  const variants = {
    default: 'bg-gray-50 dark:bg-gray-900',
    minimal: 'bg-white dark:bg-gray-800',
    branded: 'bg-primary-50 dark:bg-primary-900'
  }
  
  return [base, variants[props.variant]]
})

const closeButtonClasses = computed(() => {
  return 'p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-primary-500 transition-colors duration-200'
})

const groupHeaderClasses = computed(() => {
  return 'px-3 py-2 text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider'
})

// メソッド
const getItemClasses = (item: MenuItem) => {
  const base = 'w-full flex items-center px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200'
  
  if (item.disabled) {
    return [base, 'text-gray-400 dark:text-gray-600 cursor-not-allowed']
  }
  
  if (item.current) {
    return [base, 'bg-primary-100 text-primary-700 dark:bg-primary-900 dark:text-primary-300']
  }
  
  return [base, 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 hover:text-gray-900 dark:hover:text-gray-100']
}

const getIconClasses = (item: MenuItem) => {
  const base = 'mr-3 w-5 h-5'
  
  if (item.disabled) {
    return [base, 'text-gray-400 dark:text-gray-600']
  }
  
  if (item.current) {
    return [base, 'text-primary-600 dark:text-primary-400']
  }
  
  return [base, 'text-gray-500 dark:text-gray-400']
}

const getBadgeClasses = (item: MenuItem) => {
  const base = 'ml-auto px-2 py-1 text-xs rounded-full'
  
  if (item.current) {
    return [base, 'bg-primary-200 text-primary-800 dark:bg-primary-800 dark:text-primary-200']
  }
  
  return [base, 'bg-gray-200 text-gray-700 dark:bg-gray-700 dark:text-gray-300']
}

const toggleMenu = () => {
  isOpen.value = !isOpen.value
}

const openMenu = () => {
  isOpen.value = true
}

const closeMenu = () => {
  isOpen.value = false
}

const handleItemClick = (item: MenuItem) => {
  if (item.disabled) return
  
  emit('item-click', item)
  
  if (item.onClick) {
    item.onClick()
  }
  
  if (props.closeOnItemClick) {
    closeMenu()
  }
}

const handleEscapeKey = (event: KeyboardEvent) => {
  if (event.key === 'Escape' && isOpen.value) {
    closeMenu()
  }
}

// プロパティ変更の監視
watch(() => props.modelValue, (newValue) => {
  isOpen.value = newValue
})

watch(isOpen, (newValue) => {
  emit('update:modelValue', newValue)
  
  if (newValue) {
    emit('open')
    document.body.style.overflow = 'hidden'
  } else {
    emit('close')
    document.body.style.overflow = ''
  }
})

// ライフサイクル
onMounted(() => {
  document.addEventListener('keydown', handleEscapeKey)
})

onUnmounted(() => {
  document.removeEventListener('keydown', handleEscapeKey)
  document.body.style.overflow = ''
})

// 公開メソッド
defineExpose({
  openMenu,
  closeMenu,
  toggleMenu
})
</script>