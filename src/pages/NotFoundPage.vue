<template>
  <div class="min-h-screen bg-neutral-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
    <div class="sm:mx-auto sm:w-full sm:max-w-md text-center">
      <!-- 404アイコン -->
      <div class="mx-auto h-24 w-24 bg-neutral-100 rounded-full flex items-center justify-center mb-8">
        <svg class="h-12 w-12 text-neutral-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.172 16.172a4 4 0 015.656 0M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      </div>
      
      <!-- メインメッセージ -->
      <h1 class="text-heading-1 font-bold text-neutral-900 mb-4">
        404
      </h1>
      <h2 class="text-heading-3 font-semibold text-neutral-700 mb-2">
        ページが見つかりません
      </h2>
      <p class="text-body-regular text-neutral-600 mb-8 max-w-sm mx-auto">
        お探しのページは存在しないか、移動された可能性があります。
        URLを確認してから再度お試しください。
      </p>
      
      <!-- アクションボタン -->
      <div class="flex flex-col sm:flex-row gap-4 justify-center mb-8">
        <BaseButton
          variant="primary"
          @click="goHome"
        >
          ホームに戻る
        </BaseButton>
        <BaseButton
          variant="outline"
          @click="goBack"
        >
          前のページに戻る
        </BaseButton>
      </div>
      
      <!-- おすすめリンク -->
      <div class="border-t border-neutral-200 pt-8">
        <h3 class="text-heading-6 font-semibold text-neutral-900 mb-4">
          おすすめページ
        </h3>
        <div class="space-y-3">
          <router-link
            v-for="link in recommendedLinks"
            :key="link.name"
            :to="link.to"
            class="block p-3 rounded-lg border border-neutral-200 hover:border-primary-300 hover:bg-primary-50 transition-colors group"
          >
            <div class="flex items-center">
              <component :is="link.icon" class="h-5 w-5 text-neutral-400 group-hover:text-primary-600 mr-3" />
              <div class="text-left">
                <p class="text-body-regular font-medium text-neutral-900 group-hover:text-primary-700">
                  {{ link.name }}
                </p>
                <p class="text-body-sm text-neutral-600">
                  {{ link.description }}
                </p>
              </div>
            </div>
          </router-link>
        </div>
      </div>
      
      <!-- お問い合わせ -->
      <div class="mt-8 pt-8 border-t border-neutral-200">
        <p class="text-body-sm text-neutral-600 mb-4">
          お困りのことがありましたら、お気軽にお問い合わせください。
        </p>
        <BaseButton
          variant="ghost"
          size="sm"
          @click="contactSupport"
        >
          <svg class="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
          サポートに連絡
        </BaseButton>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'
import { useAppStore } from '@/stores/app'
import BaseButton from '@/components/base/BaseButton.vue'

const router = useRouter()
const appStore = useAppStore()

// おすすめリンク
const recommendedLinks = [
  {
    name: 'ホーム',
    description: 'サービスの概要と主要機能を確認',
    to: '/',
    icon: {
      template: `<svg fill="currentColor" viewBox="0 0 20 20">
        <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
      </svg>`
    }
  },
  {
    name: 'コンポーネント',
    description: '利用可能なコンポーネントを一覧',
    to: '/components',
    icon: {
      template: `<svg fill="currentColor" viewBox="0 0 20 20">
        <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zm0 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V8zm0 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1v-2z" />
      </svg>`
    }
  },
  {
    name: 'フォーム',
    description: '様々なフォーム要素の使用例',
    to: '/forms',
    icon: {
      template: `<svg fill="currentColor" viewBox="0 0 20 20">
        <path fill-rule="evenodd" d="M4 4a2 2 0 012-2h8a2 2 0 012 2v12a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 0v12h8V4H6z" clip-rule="evenodd" />
      </svg>`
    }
  }
]

// アクション関数
const goHome = () => {
  router.push('/')
}

const goBack = () => {
  // ブラウザー履歴がある場合は前のページに戻る
  if (window.history.length > 1) {
    router.go(-1)
  } else {
    // 履歴がない場合はホームにリダイレクト
    router.push('/')
  }
}

const contactSupport = () => {
  appStore.addNotification({
    type: 'info',
    title: 'サポート連絡',
    message: 'サポートページを開きます。実際のアプリではお問い合わせフォームにリンクします。',
    duration: 5000
  })
}
</script>