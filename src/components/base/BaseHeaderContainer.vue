<template>
  <header :class="headerClasses">
    <!-- ユーティリティリンク（上部） -->
    <div v-if="showUtilityLinks && utilityLinks.length > 0" class="border-b border-neutral-200 dark:border-dark-300">
      <div :class="containerClasses">
        <div class="py-2">
          <BaseUtilityLinks 
            :links="utilityLinks" 
            :alignment="utilityLinksAlignment"
            size="sm"
            :theme="theme"
          />
        </div>
      </div>
    </div>
    
    <!-- メインヘッダー -->
    <div :class="containerClasses">
      <div :class="mainHeaderClasses">
        <!-- ロゴエリア -->
        <div class="flex items-center">
          <slot name="logo">
            <router-link 
              to="/" 
              class="flex items-center space-x-3"
              :aria-label="logoAlt || 'ホームページに戻る'"
            >
              <img 
                v-if="logoSrc" 
                :src="logoSrc" 
                :alt="logoAlt" 
                :class="logoClasses"
              />
              <span v-if="siteName" :class="siteNameClasses">
                {{ siteName }}
              </span>
            </router-link>
          </slot>
        </div>
        
        <!-- ヘッダーコンテナアイテム（汎用エリア） -->
        <div v-if="$slots.content" class="flex-1 flex items-center justify-center">
          <slot name="content" />
        </div>
        
        <!-- ナビゲーションエリア -->
        <div class="flex items-center space-x-4">
          <!-- グローバルメニュー（デスクトップ） -->
          <nav v-if="showGlobalMenu" class="hidden lg:block">
            <slot name="global-menu">
              <BaseGlobalMenu v-if="globalMenuItems.length > 0" :items="globalMenuItems" />
            </slot>
          </nav>
          
          <!-- 追加アクション -->
          <div v-if="$slots.actions" class="flex items-center space-x-2">
            <slot name="actions" />
          </div>
          
          <!-- テーマ切り替えボタン -->
          <BaseThemeToggle v-if="showThemeToggle" />
          
          <!-- ハンバーガーメニューボタン（モバイル） -->
          <button
            v-if="showMobileMenu"
            type="button"
            class="lg:hidden p-2 rounded-md text-neutral-700 dark:text-dark-700 hover:bg-neutral-100 dark:hover:bg-dark-200 focus:outline-none focus:ring-2 focus:ring-primary-500"
            @click="toggleMobileMenu"
            :aria-expanded="mobileMenuOpen"
            aria-label="メニューを開く"
          >
            <svg class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path 
                v-if="!mobileMenuOpen"
                stroke-linecap="round" 
                stroke-linejoin="round" 
                stroke-width="2" 
                d="M4 6h16M4 12h16M4 18h16" 
              />
              <path 
                v-else
                stroke-linecap="round" 
                stroke-linejoin="round" 
                stroke-width="2" 
                d="M6 18L18 6M6 6l12 12" 
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
    
    <!-- モバイルメニュー -->
    <div 
      v-if="showMobileMenu && mobileMenuOpen" 
      class="lg:hidden border-t border-neutral-200 dark:border-dark-300 bg-white dark:bg-dark-100"
    >
      <div :class="containerClasses">
        <div class="py-4 space-y-2">
          <slot name="mobile-menu">
            <div v-if="globalMenuItems.length > 0" class="space-y-1">
              <router-link
                v-for="item in globalMenuItems"
                :key="item.text"
                :to="item.url"
                class="block px-3 py-2 text-body-regular font-medium text-neutral-700 dark:text-dark-700 hover:bg-neutral-100 dark:hover:bg-dark-200 rounded-md"
                @click="closeMobileMenu"
              >
                {{ item.text }}
              </router-link>
            </div>
          </slot>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup>
import { ref, computed, readonly } from 'vue'
import BaseUtilityLinks from './BaseUtilityLinks.vue'
import BaseThemeToggle from './BaseThemeToggle.vue'
// import BaseGlobalMenu from './BaseGlobalMenu.vue' // 次に実装予定

const props = defineProps({
  // レイアウトサイズ
  layout: {
    type: String,
    default: 'wide', // wide, medium, compact
    validator: (value) => ['wide', 'medium', 'compact'].includes(value)
  },
  
  // コンテナ幅
  containerWidth: {
    type: String,
    default: 'xl', // sm, md, lg, xl
    validator: (value) => ['sm', 'md', 'lg', 'xl'].includes(value)
  },
  
  // ロゴ画像
  logoSrc: {
    type: String,
    default: ''
  },
  
  // ロゴのalt属性
  logoAlt: {
    type: String,
    default: 'サイトロゴ'
  },
  
  // サイト名
  siteName: {
    type: String,
    default: ''
  },
  
  // グローバルメニューアイテム
  globalMenuItems: {
    type: Array,
    default: () => []
  },
  
  // ユーティリティリンク
  utilityLinks: {
    type: Array,
    default: () => []
  },
  
  // ユーティリティリンクの配置
  utilityLinksAlignment: {
    type: String,
    default: 'right',
    validator: (value) => ['left', 'center', 'right'].includes(value)
  },
  
  // 機能表示フラグ
  showUtilityLinks: {
    type: Boolean,
    default: true
  },
  
  showGlobalMenu: {
    type: Boolean,
    default: true
  },
  
  showMobileMenu: {
    type: Boolean,
    default: true
  },
  
  showThemeToggle: {
    type: Boolean,
    default: true
  },
  
  // カラーテーマ
  theme: {
    type: String,
    default: 'light',
    validator: (value) => ['light', 'dark'].includes(value)
  },
  
  // ヘッダーの固定
  sticky: {
    type: Boolean,
    default: false
  }
})

const emit = defineEmits(['mobile-menu-toggle'])

// モバイルメニューの開閉状態
const mobileMenuOpen = ref(false)

// ヘッダーのクラス
const headerClasses = computed(() => {
  const classes = ['bg-white', 'dark:bg-dark-100', 'shadow-sm', 'border-b', 'border-neutral-200', 'dark:border-dark-300']
  
  if (props.sticky) {
    classes.push('sticky', 'top-0', 'z-40')
  }
  
  return classes.join(' ')
})

// コンテナのクラス
const containerClasses = computed(() => {
  return `container-${props.containerWidth}`
})

// メインヘッダーのクラス
const mainHeaderClasses = computed(() => {
  const classes = ['flex', 'items-center', 'justify-between']
  
  // レイアウトサイズに応じたパディング
  switch (props.layout) {
    case 'compact':
      classes.push('py-2')
      break
    case 'medium':
      classes.push('py-3')
      break
    default: // wide
      classes.push('py-4')
  }
  
  return classes.join(' ')
})

// ロゴのクラス
const logoClasses = computed(() => {
  const classes = []
  
  switch (props.layout) {
    case 'compact':
      classes.push('h-8')
      break
    case 'medium':
      classes.push('h-10')
      break
    default: // wide
      classes.push('h-12')
  }
  
  return classes.join(' ')
})

// サイト名のクラス
const siteNameClasses = computed(() => {
  const classes = ['font-bold', 'text-neutral-900', 'dark:text-dark-900']
  
  switch (props.layout) {
    case 'compact':
      classes.push('text-heading-6')
      break
    case 'medium':
      classes.push('text-heading-5')
      break
    default: // wide
      classes.push('text-heading-4')
  }
  
  return classes.join(' ')
})

// モバイルメニューの切り替え
const toggleMobileMenu = () => {
  mobileMenuOpen.value = !mobileMenuOpen.value
  emit('mobile-menu-toggle', mobileMenuOpen.value)
}

// モバイルメニューを閉じる
const closeMobileMenu = () => {
  mobileMenuOpen.value = false
  emit('mobile-menu-toggle', false)
}

// 外部からモバイルメニューを制御するためのメソッドを公開
defineExpose({
  toggleMobileMenu,
  closeMobileMenu,
  mobileMenuOpen: readonly(mobileMenuOpen)
})
</script>