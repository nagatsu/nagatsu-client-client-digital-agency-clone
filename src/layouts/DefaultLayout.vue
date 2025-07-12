<template>
  <div class="min-h-screen bg-gray-50">
    <!-- ヘッダー -->
    <header class="bg-white border-b border-gray-200 sticky top-0 z-40" role="banner">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between items-center h-16">
          <!-- ロゴ -->
          <router-link to="/" class="flex items-center" aria-label="Nagatsuトップページへ">
            <div class="h-8 w-8 bg-blue-600 rounded-lg flex items-center justify-center">
              <span class="text-white font-bold text-sm">N</span>
            </div>
            <span class="ml-2 text-xl font-bold text-gray-900">Nagatsu</span>
          </router-link>
          
          <!-- ナビゲーション -->
          <nav class="hidden md:flex space-x-8" role="navigation" aria-label="メインナビゲーション">
            <router-link
              v-for="item in mainNavigation"
              :key="item.name"
              :to="item.to"
              class="text-gray-600 hover:text-gray-900 px-3 py-2 text-sm font-medium transition-colors"
              :aria-label="`${item.label}ページへ移動`"
            >
              {{ item.label }}
            </router-link>
          </nav>
          
          <!-- ハンバーガーメニューボタン（全画面表示） -->
          <button
            @click="toggleDropdownMenu"
            class="p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors"
            aria-label="メニューを開く"
            :aria-expanded="dropdownMenuOpen"
          >
            <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
      
      <!-- ドロップダウンメニュー -->
      <div v-if="dropdownMenuOpen" class="block" role="region" aria-label="サブメニュー">
        <div class="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t border-gray-200">
          <router-link
            v-for="item in hamburgerNavigation"
            :key="item.name"
            :to="item.to"
            class="block px-3 py-2 text-base font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-50 transition-colors"
            @click="closeDropdownMenu"
            :aria-label="`${item.label}ページへ移動`"
          >
            {{ item.label }}
          </router-link>
        </div>
      </div>
    </header>
    
    <!-- メインコンテンツ -->
    <main class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8" role="main">
      <router-view />
    </main>
    
    <!-- フッター -->
    <footer class="bg-white border-t border-gray-200 mt-16" role="contentinfo">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div class="flex flex-col md:flex-row justify-between items-center">
          <div class="flex items-center mb-4 md:mb-0">
            <div class="h-6 w-6 bg-blue-600 rounded-md flex items-center justify-center" aria-hidden="true">
              <span class="text-white font-bold text-xs">N</span>
            </div>
            <span class="ml-2 text-sm text-gray-600">
              © 2024 Nagatsu Dev. All rights reserved.
            </span>
          </div>
          <nav class="flex space-x-6" role="navigation" aria-label="フッターリンク">
            <a href="#" class="text-sm text-gray-500 hover:text-gray-900 transition-colors" aria-label="プライバシーポリシー">プライバシー</a>
            <a href="#" class="text-sm text-gray-500 hover:text-gray-900 transition-colors" aria-label="利用規約">利用規約</a>
            <a href="#" class="text-sm text-gray-500 hover:text-gray-900 transition-colors" aria-label="お問い合わせ">お問い合わせ</a>
          </nav>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup>
import { ref } from 'vue'

// ドロップダウンメニューの状態
const dropdownMenuOpen = ref(false)

// メインナビゲーション（デスクトップ表示）
const mainNavigation = [
  { name: 'home', label: 'ホーム', to: '/' },
  { name: 'components', label: 'コンポーネント', to: '/components' },
  { name: 'storybook', label: 'Storybook', to: '/storybook' }
]

// ハンバーガーメニュー専用ナビゲーション
const hamburgerNavigation = [
  // Component Categories
  { name: 'components-basics', label: '基本コンポーネント', to: '/components/basics' },
  { name: 'components-navigation', label: 'ナビゲーション', to: '/components/navigation' },
  { name: 'components-layout', label: 'レイアウト', to: '/components/layout' },
  { name: 'components-data', label: 'データ表示', to: '/components/data' },
  { name: 'components-advanced', label: '高度なコンポーネント', to: '/components/advanced' },
  // Other Pages
  { name: 'icons', label: 'アイコン', to: '/icons' },
  { name: 'images', label: 'イメージ', to: '/images' },
  { name: 'ecommerce', label: 'ECサイト', to: '/ecommerce' },
  { name: 'media', label: 'メディア', to: '/media' },
  { name: 'admin', label: '管理画面', to: '/admin' },
  { name: 'crypto', label: 'Web3', to: '/crypto' }
]

// ドロップダウンメニュー制御
const toggleDropdownMenu = () => {
  dropdownMenuOpen.value = !dropdownMenuOpen.value
}

const closeDropdownMenu = () => {
  dropdownMenuOpen.value = false
}
</script>