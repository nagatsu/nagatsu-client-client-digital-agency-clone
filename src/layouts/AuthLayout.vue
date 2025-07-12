<template>
  <div class="min-h-screen bg-neutral-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
    <!-- ヘッダー -->
    <div class="sm:mx-auto sm:w-full sm:max-w-md">
      <router-link to="/" class="flex justify-center">
        <div class="h-12 w-12 bg-primary-500 rounded-xl flex items-center justify-center">
          <span class="text-white font-bold text-lg">N</span>
        </div>
      </router-link>
      <h2 class="mt-6 text-center text-heading-2 font-bold text-neutral-900">
        {{ pageTitle }}
      </h2>
      <p v-if="pageDescription" class="mt-2 text-center text-body-regular text-neutral-600">
        {{ pageDescription }}
      </p>
    </div>
    
    <!-- メインコンテンツ -->
    <div class="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
      <div class="bg-white py-8 px-4 shadow-lg sm:rounded-lg sm:px-10">
        <router-view />
      </div>
      
      <!-- フッターリンク -->
      <div class="mt-6">
        <div class="relative">
          <div class="absolute inset-0 flex items-center">
            <div class="w-full border-t border-neutral-300" />
          </div>
          <div class="relative flex justify-center text-body-sm">
            <span class="px-2 bg-neutral-50 text-neutral-500">または</span>
          </div>
        </div>
        
        <div class="mt-6 text-center">
          <router-link
            v-if="$route.name === 'Login'"
            to="/auth/register"
            class="text-body-regular text-primary-600 hover:text-primary-500 font-medium"
          >
            アカウントを新規作成
          </router-link>
          <router-link
            v-else-if="$route.name === 'Register'"
            to="/auth/login"
            class="text-body-regular text-primary-600 hover:text-primary-500 font-medium"
          >
            すでにアカウントをお持ちの方はこちら
          </router-link>
        </div>
      </div>
    </div>
    
    <!-- ホームリンク -->
    <div class="mt-8 text-center">
      <router-link
        to="/"
        class="text-body-sm text-neutral-500 hover:text-neutral-700 inline-flex items-center"
      >
        <svg class="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
        </svg>
        ホームに戻る
      </router-link>
    </div>
    
    <!-- フッター -->
    <footer class="mt-16">
      <div class="max-w-md mx-auto px-4 sm:px-6">
        <div class="border-t border-neutral-200 pt-8 pb-4">
          <div class="flex flex-col items-center space-y-4">
            <div class="flex items-center">
              <div class="h-6 w-6 bg-primary-500 rounded-md flex items-center justify-center">
                <span class="text-white font-bold text-xs">N</span>
              </div>
              <span class="ml-2 text-body-sm text-neutral-600">
                Nagatsu Mockup Template
              </span>
            </div>
            <div class="flex space-x-6">
              <a href="#" class="text-body-xs text-neutral-400 hover:text-neutral-600">プライバシー</a>
              <a href="#" class="text-body-xs text-neutral-400 hover:text-neutral-600">利用規約</a>
              <a href="#" class="text-body-xs text-neutral-400 hover:text-neutral-600">サポート</a>
            </div>
            <p class="text-body-xs text-neutral-400 text-center">
              © 2024 Nagatsu. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()

// ページタイトル
const pageTitle = computed(() => {
  const titleMap = {
    'Login': 'アカウントにログイン',
    'Register': 'アカウントを作成'
  }
  return titleMap[route.name] || '認証'
})

// ページ説明
const pageDescription = computed(() => {
  const descriptionMap = {
    'Login': 'メールアドレスとパスワードでログインしてください',
    'Register': 'アカウントを作成してサービスを始めましょう'
  }
  return descriptionMap[route.name] || ''
})
</script>