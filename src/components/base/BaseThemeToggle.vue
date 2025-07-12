<template>
  <button
    @click="toggleTheme"
    :class="buttonClasses"
    type="button"
    :aria-label="ariaLabel"
    class="relative inline-flex items-center justify-center p-2 rounded-lg transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 hover:scale-105"
  >
    <!-- Sun Icon (Light Mode) -->
    <transition
      enter-active-class="transition-all duration-300"
      enter-from-class="opacity-0 rotate-90 scale-75"
      enter-to-class="opacity-100 rotate-0 scale-100"
      leave-active-class="transition-all duration-300"
      leave-from-class="opacity-100 rotate-0 scale-100"
      leave-to-class="opacity-0 -rotate-90 scale-75"
    >
      <svg
        v-if="!isDark"
        class="h-5 w-5 text-amber-500"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path d="M12 2.25a.75.75 0 01.75.75v2.25a.75.75 0 01-1.5 0V3a.75.75 0 01.75-.75zM7.5 12a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM18.894 6.166a.75.75 0 00-1.06-1.06l-1.591 1.59a.75.75 0 101.06 1.061l1.591-1.59zM21.75 12a.75.75 0 01-.75.75h-2.25a.75.75 0 010-1.5H21a.75.75 0 01.75.75zM17.834 18.894a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 10-1.061 1.06l1.59 1.591zM12 18a.75.75 0 01.75.75V21a.75.75 0 01-1.5 0v-2.25A.75.75 0 0112 18zM7.758 17.303a.75.75 0 00-1.061-1.06l-1.591 1.59a.75.75 0 001.06 1.061l1.591-1.59zM6 12a.75.75 0 01-.75.75H3a.75.75 0 010-1.5h2.25A.75.75 0 016 12zM6.697 7.757a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 00-1.061 1.06l1.59 1.591z" />
      </svg>
    </transition>

    <!-- Moon Icon (Dark Mode) -->
    <transition
      enter-active-class="transition-all duration-300"
      enter-from-class="opacity-0 rotate-90 scale-75"
      enter-to-class="opacity-100 rotate-0 scale-100"
      leave-active-class="transition-all duration-300"
      leave-from-class="opacity-100 rotate-0 scale-100"
      leave-to-class="opacity-0 -rotate-90 scale-75"
    >
      <svg
        v-if="isDark"
        class="h-5 w-5 text-blue-400"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path fill-rule="evenodd" d="M9.528 1.718a.75.75 0 01.162.819A8.97 8.97 0 009 6a9 9 0 009 9 8.97 8.97 0 003.463-.69.75.75 0 01.981.98 10.503 10.503 0 01-9.694 6.46c-5.799 0-10.5-4.701-10.5-10.5 0-4.368 2.667-8.112 6.46-9.694a.75.75 0 01.818.162z" clip-rule="evenodd" />
      </svg>
    </transition>

    <!-- Ripple Effect -->
    <span
      v-if="showRipple"
      class="absolute inset-0 rounded-lg bg-primary-500 opacity-25 animate-ping"
    ></span>
  </button>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useAppStore } from '@/stores/app'

const appStore = useAppStore()

// リップルエフェクト用
const showRipple = ref(false)

// 計算されたプロパティ
const isDark = computed(() => appStore.theme === 'dark')

const buttonClasses = computed(() => [
  'bg-white dark:bg-dark-100',
  'border border-neutral-200 dark:border-dark-300',
  'text-neutral-700 dark:text-dark-700',
  'hover:bg-neutral-50 dark:hover:bg-dark-200',
  'shadow-sm hover:shadow-md',
  'ring-offset-white dark:ring-offset-dark-50'
])

const ariaLabel = computed(() => 
  isDark.value ? 'ライトモードに切り替え' : 'ダークモードに切り替え'
)

// テーマ切り替え
const toggleTheme = () => {
  // リップルエフェクト
  showRipple.value = true
  setTimeout(() => {
    showRipple.value = false
  }, 600)

  // テーマ変更
  const newTheme = isDark.value ? 'light' : 'dark'
  appStore.setTheme(newTheme)
  
  // システム設定変更の通知
  appStore.addNotification({
    type: 'info',
    title: 'テーマ変更',
    message: `${isDark.value ? 'ライト' : 'ダーク'}モードに切り替えました`,
    duration: 2000
  })
}

// OSのシステム設定に従う機能
const followSystem = () => {
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
  appStore.setTheme(prefersDark ? 'dark' : 'light')
}

// システム設定の変更を監視
if (typeof window !== 'undefined') {
  const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
  mediaQuery.addEventListener('change', (e) => {
    if (appStore.theme === 'system') {
      appStore.setTheme(e.matches ? 'dark' : 'light')
    }
  })
}

// Props定義（必要に応じて）
defineProps({
  size: {
    type: String,
    default: 'md',
    validator: (value) => ['sm', 'md', 'lg'].includes(value)
  },
  variant: {
    type: String,
    default: 'default',
    validator: (value) => ['default', 'minimal', 'floating'].includes(value)
  }
})

// 公開するメソッド
defineExpose({
  toggleTheme,
  followSystem
})
</script>

<style scoped>
/* ボタンのカスタムホバーエフェクト */
.theme-toggle:hover {
  transform: scale(1.05);
}

/* フォーカス時のアクセシビリティ */
.theme-toggle:focus-visible {
  outline: 2px solid theme('colors.primary.500');
  outline-offset: 2px;
}

/* アニメーション最適化 */
@media (prefers-reduced-motion: reduce) {
  * {
    transition-duration: 0.01ms !important;
    animation: none !important;
  }
}
</style>