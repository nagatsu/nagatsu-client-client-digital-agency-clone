<template>
  <div class="min-h-screen bg-neutral-50">
    <!-- ヘッダー -->
    <section class="bg-white border-b">
      <div class="container mx-auto px-4 py-12">
        <div class="max-w-4xl mx-auto text-center">
          <h2
            level="1"
            class="text-4xl font-bold mb-4"
          >
            ドキュメント
          </h2>
          <p
            size="lg"
            class="text-neutral-600 mb-8 max-w-2xl mx-auto"
          >
            Model-Aデザインシステムと開発プラットフォームの<br>
            完全なドキュメント・ガイド
          </p>
        </div>
      </div>
    </section>

    <!-- 検索 -->
    <section class="py-8 bg-white border-b">
      <div class="container mx-auto px-4">
        <div class="max-w-2xl mx-auto">
          <div class="relative">
            <BaseInput
              v-model="searchQuery"
              placeholder="ドキュメントを検索..."
              class="w-full pl-10"
            />
            <div class="absolute left-3 top-1/2 transform -translate-y-1/2">
              <svg class="w-5 h-5 text-neutral-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ドキュメントカテゴリ -->
    <section class="py-16">
      <div class="container mx-auto px-4">
        <div class="max-w-6xl mx-auto">
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <BaseCard
              v-for="category in documentCategories"
              :key="category.id"
              class="p-6 hover:shadow-lg transition-shadow cursor-pointer"
              @click="openCategory(category)"
            >
              <div class="flex items-center mb-4">
                <div
                  class="w-12 h-12 rounded-full flex items-center justify-center mr-4"
                  :class="category.color"
                >
                  <span class="text-xl">{{ category.icon }}</span>
                </div>
                <div>
                  <h2 level="3" class="text-lg font-bold">
                    {{ category.name }}
                  </h2>
                  <p class="text-sm text-neutral-600">
                    {{ category.count }}件のドキュメント
                  </p>
                </div>
              </div>
              <p class="text-neutral-600 mb-4">
                {{ category.description }}
              </p>
              <div class="space-y-2">
                <div
                  v-for="doc in category.documents.slice(0, 3)"
                  :key="doc.id"
                  class="flex items-center text-sm text-neutral-600"
                >
                  <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
                  </svg>
                  {{ doc.title }}
                </div>
                <div
                  v-if="category.documents.length > 3"
                  class="flex items-center text-sm text-neutral-500"
                >
                  <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
                  </svg>
                  さらに{{ category.documents.length - 3 }}件
                </div>
              </div>
            </BaseCard>
          </div>
        </div>
      </div>
    </section>

    <!-- 人気のドキュメント -->
    <section class="py-16 bg-white">
      <div class="container mx-auto px-4">
        <div class="max-w-6xl mx-auto">
          <h2
            level="2"
            class="text-3xl font-bold text-center mb-12"
          >
            人気のドキュメント
          </h2>
          
          <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
            <BaseCard
              v-for="doc in popularDocs"
              :key="doc.id"
              class="p-6 hover:shadow-lg transition-shadow cursor-pointer"
              @click="openDocument(doc)"
            >
              <div class="flex items-start">
                <div class="flex-shrink-0 mr-4">
                  <div
                    class="w-10 h-10 rounded-lg flex items-center justify-center"
                    :class="doc.color"
                  >
                    <span class="text-lg">{{ doc.icon }}</span>
                  </div>
                </div>
                <div class="flex-1">
                  <h2 level="3" class="text-lg font-bold mb-2">
                    {{ doc.title }}
                  </h2>
                  <p class="text-neutral-600 mb-3">
                    {{ doc.description }}
                  </p>
                  <div class="flex items-center justify-between">
                    <div class="flex items-center gap-4">
                      <p class="text-sm text-neutral-500">
                        {{ doc.category }}
                      </p>
                      <p class="text-sm text-neutral-500">
                        {{ doc.readTime }}
                      </p>
                    </div>
                    <BaseBadge
                      variant="info"
                      size="sm"
                    >
                      {{ doc.views }} views
                    </BaseBadge>
                  </div>
                </div>
              </div>
            </BaseCard>
          </div>
        </div>
      </div>
    </section>

    <!-- 最新更新 -->
    <section class="py-16 bg-neutral-50">
      <div class="container mx-auto px-4">
        <div class="max-w-4xl mx-auto">
          <h2
            level="2"
            class="text-3xl font-bold text-center mb-12"
          >
            最新更新
          </h2>
          
          <div class="space-y-6">
            <BaseCard
              v-for="update in recentUpdates"
              :key="update.id"
              class="p-6"
            >
              <div class="flex items-start">
                <div class="flex-shrink-0 mr-4">
                  <BaseBadge
                    :variant="update.type === 'new' ? 'success' : update.type === 'update' ? 'warning' : 'info'"
                  >
                    {{ update.type === 'new' ? '新規' : update.type === 'update' ? '更新' : '修正' }}
                  </BaseBadge>
                </div>
                <div class="flex-1">
                  <h2 level="3" class="text-lg font-bold mb-2">
                    {{ update.title }}
                  </h2>
                  <p class="text-neutral-600 mb-3">
                    {{ update.description }}
                  </p>
                  <div class="flex items-center justify-between">
                    <p class="text-sm text-neutral-500">
                      {{ update.date }}
                    </p>
                    <BaseButton
                      variant="outline"
                      size="xs"
                      @click="openDocument(update)"
                    >
                      詳細
                    </BaseButton>
                  </div>
                </div>
              </div>
            </BaseCard>
          </div>
        </div>
      </div>
    </section>

    <!-- クイックリンク -->
    <section class="py-16 bg-white">
      <div class="container mx-auto px-4">
        <div class="max-w-6xl mx-auto">
          <h2
            level="2"
            class="text-3xl font-bold text-center mb-12"
          >
            クイックリンク
          </h2>
          
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <BaseCard
              v-for="link in quickLinks"
              :key="link.id"
              class="p-6 text-center hover:shadow-lg transition-shadow cursor-pointer"
              @click="openLink(link)"
            >
              <div class="w-12 h-12 bg-neutral-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span class="text-lg">{{ link.icon }}</span>
              </div>
              <h2 level="3" class="text-lg font-bold mb-2">
                {{ link.title }}
              </h2>
              <p class="text-neutral-600 text-sm">
                {{ link.description }}
              </p>
            </BaseCard>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import BaseButton from '@/components/base/BaseButton.vue'
import BaseCard from '@/components/base/BaseCard.vue'
import BaseBadge from '@/components/base/BaseBadge.vue'
import BaseInput from '@/components/base/BaseInput.vue'

const router = useRouter()
const searchQuery = ref('')

// ドキュメントカテゴリ
const documentCategories = ref([
  {
    id: 1,
    name: 'はじめに',
    count: 8,
    description: 'プラットフォームの基本概念と導入方法',
    icon: '🚀',
    color: 'bg-blue-100 text-blue-600',
    documents: [
      { id: 1, title: 'プラットフォーム概要' },
      { id: 2, title: 'インストール方法' },
      { id: 3, title: 'クイックスタート' },
      { id: 4, title: 'よくある質問' },
      { id: 5, title: 'トラブルシューティング' }
    ]
  },
  {
    id: 2,
    name: 'デザインシステム',
    count: 12,
    description: 'Model-Aデザインシステムの詳細仕様',
    icon: '🎨',
    color: 'bg-purple-100 text-purple-600',
    documents: [
      { id: 6, title: 'デザイン原則' },
      { id: 7, title: 'カラーパレット' },
      { id: 8, title: 'タイポグラフィ' },
      { id: 9, title: 'スペーシング' },
      { id: 10, title: 'アイコン' }
    ]
  },
  {
    id: 3,
    name: 'コンポーネント',
    count: 51,
    description: 'Vue.jsコンポーネントの使用方法',
    icon: '🧩',
    color: 'bg-green-100 text-green-600',
    documents: [
      { id: 11, title: 'BaseButton' },
      { id: 12, title: 'BaseInput' },
      { id: 13, title: 'BaseCard' },
      { id: 14, title: 'BaseModal' },
      { id: 15, title: 'BaseNavigation' }
    ]
  },
  {
    id: 4,
    name: 'API リファレンス',
    count: 6,
    description: 'プラットフォームAPIの詳細仕様',
    icon: '📡',
    color: 'bg-orange-100 text-orange-600',
    documents: [
      { id: 16, title: 'Authentication API' },
      { id: 17, title: 'Project API' },
      { id: 18, title: 'Component API' },
      { id: 19, title: 'Deployment API' }
    ]
  },
  {
    id: 5,
    name: 'デプロイメント',
    count: 9,
    description: 'Railway + Cloudflareデプロイメント',
    icon: '🚀',
    color: 'bg-red-100 text-red-600',
    documents: [
      { id: 20, title: 'Railway セットアップ' },
      { id: 21, title: 'Cloudflare Pages' },
      { id: 22, title: 'カスタムドメイン' },
      { id: 23, title: 'CI/CD パイプライン' }
    ]
  },
  {
    id: 6,
    name: 'ベストプラクティス',
    count: 7,
    description: '開発・運用のベストプラクティス',
    icon: '⭐',
    color: 'bg-indigo-100 text-indigo-600',
    documents: [
      { id: 24, title: 'コーディング規約' },
      { id: 25, title: 'パフォーマンス最適化' },
      { id: 26, title: 'セキュリティ対策' },
      { id: 27, title: 'メンテナンス方法' }
    ]
  }
])

// 人気のドキュメント
const popularDocs = ref([
  {
    id: 1,
    title: 'Model-A デザインシステム入門',
    description: 'デザインシステムの基本概念と51コンポーネントの概要',
    category: 'デザインシステム',
    readTime: '15分',
    views: '2.1k',
    icon: '🎨',
    color: 'bg-purple-100 text-purple-600'
  },
  {
    id: 2,
    title: 'Railway + Cloudflare デプロイメント',
    description: '高速デプロイメントの設定方法と最適化のコツ',
    category: 'デプロイメント',
    readTime: '10分',
    views: '1.8k',
    icon: '🚀',
    color: 'bg-red-100 text-red-600'
  },
  {
    id: 3,
    title: 'Vue.js コンポーネントの作成',
    description: 'TypeScript対応のVue.jsコンポーネント開発ガイド',
    category: 'コンポーネント',
    readTime: '20分',
    views: '1.5k',
    icon: '🧩',
    color: 'bg-green-100 text-green-600'
  },
  {
    id: 4,
    title: 'プロジェクト作成から公開まで',
    description: '新規プロジェクトの作成から本番公開までの完全ガイド',
    category: 'はじめに',
    readTime: '25分',
    views: '1.3k',
    icon: '🚀',
    color: 'bg-blue-100 text-blue-600'
  }
])

// 最新更新
const recentUpdates = ref([
  {
    id: 1,
    type: 'new',
    title: 'アップグレード・テスト・プロトコル',
    description: 'Major Update & Upgrade Testing Protocol を新規追加',
    date: '2025-07-09'
  },
  {
    id: 2,
    type: 'update',
    title: 'Technical Stack Management',
    description: '技術スタック管理ドキュメントを更新',
    date: '2025-07-09'
  },
  {
    id: 3,
    type: 'new',
    title: 'アーキテクチャ意思決定記録',
    description: 'ADR（Architecture Decision Records）を新規作成',
    date: '2025-07-09'
  }
])

// クイックリンク
const quickLinks = ref([
  {
    id: 1,
    title: 'GitHub Repository',
    description: 'ソースコードとIssue管理',
    icon: '🐙',
    url: 'https://github.com/nagatsu/dev'
  },
  {
    id: 2,
    title: 'Storybook',
    description: 'コンポーネントライブラリ',
    icon: '📚',
    url: '/storybook'
  },
  {
    id: 3,
    title: 'Railway Dashboard',
    description: 'インフラ管理',
    icon: '🚂',
    url: 'https://railway.app'
  },
  {
    id: 4,
    title: 'Cloudflare Dashboard',
    description: 'CDN・DNS管理',
    icon: '☁️',
    url: 'https://dash.cloudflare.com'
  }
])

// メソッド
const openCategory = (category) => {
  router.push(`/docs/category/${category.id}`)
}

const openDocument = (doc) => {
  router.push(`/docs/${doc.id}`)
}

const openLink = (link) => {
  if (link.url.startsWith('http')) {
    window.open(link.url, '_blank')
  } else {
    router.push(link.url)
  }
}
</script>