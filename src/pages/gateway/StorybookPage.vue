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
            Model-A Storybook
          </h2>
          <p
            size="lg"
            class="text-neutral-600 mb-8 max-w-2xl mx-auto"
          >
            51コンポーネント、100%カバレッジ達成<br>
            デジタル庁準拠デザインシステムの完全なドキュメント
          </p>
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <BaseButton
              variant="primary"
              size="lg"
              @click="openStorybook"
            >
              Storybook を開く
            </BaseButton>
            <BaseButton
              variant="secondary"
              size="lg"
              @click="downloadComponents"
            >
              コンポーネントをダウンロード
            </BaseButton>
          </div>
        </div>
      </div>
    </section>

    <!-- 統計情報 -->
    <section class="py-16 bg-gradient-to-r from-blue-50 to-indigo-50">
      <div class="container mx-auto px-4">
        <div class="max-w-6xl mx-auto">
          <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div class="text-center">
              <div class="text-3xl font-bold text-blue-600 mb-2">51</div>
              <p class="text-neutral-600">コンポーネント</p>
            </div>
            <div class="text-center">
              <div class="text-3xl font-bold text-green-600 mb-2">100%</div>
              <p class="text-neutral-600">カバレッジ</p>
            </div>
            <div class="text-center">
              <div class="text-3xl font-bold text-purple-600 mb-2">94.5</div>
              <p class="text-neutral-600">品質スコア</p>
            </div>
            <div class="text-center">
              <div class="text-3xl font-bold text-orange-600 mb-2">8</div>
              <p class="text-neutral-600">カテゴリ</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- コンポーネントカテゴリ -->
    <section class="py-16 bg-white">
      <div class="container mx-auto px-4">
        <div class="max-w-6xl mx-auto">
          <h2
            level="2"
            class="text-3xl font-bold text-center mb-12"
          >
            コンポーネントカテゴリ
          </h2>
          
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <BaseCard
              v-for="category in componentCategories"
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
                    {{ category.count }}個のコンポーネント
                  </p>
                </div>
              </div>
              <p class="text-neutral-600 mb-4">
                {{ category.description }}
              </p>
              <div class="flex flex-wrap gap-2">
                <BaseBadge
                  v-for="component in category.components.slice(0, 3)"
                  :key="component"
                  variant="secondary"
                  size="sm"
                >
                  {{ component }}
                </BaseBadge>
                <BaseBadge
                  v-if="category.components.length > 3"
                  variant="neutral"
                  size="sm"
                >
                  +{{ category.components.length - 3 }}
                </BaseBadge>
              </div>
            </BaseCard>
          </div>
        </div>
      </div>
    </section>

    <!-- 最新アップデート -->
    <section class="py-16 bg-neutral-50">
      <div class="container mx-auto px-4">
        <div class="max-w-4xl mx-auto">
          <h2
            level="2"
            class="text-3xl font-bold text-center mb-12"
          >
            最新アップデート
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
                      @click="viewUpdate(update)"
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

    <!-- 使用方法 -->
    <section class="py-16 bg-white">
      <div class="container mx-auto px-4">
        <div class="max-w-4xl mx-auto text-center">
          <h2
            level="2"
            class="text-3xl font-bold mb-4"
          >
            使用方法
          </h2>
          <p
            size="lg"
            class="text-neutral-600 mb-12 max-w-2xl mx-auto"
          >
            Model-Aデザインシステムを活用して、高品質なモックアップを作成しましょう
          </p>
          
          <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div class="text-center">
              <div class="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span class="text-2xl font-bold text-blue-600">1</span>
              </div>
              <h2 level="3" class="text-lg font-bold mb-4">
                コンポーネント選択
              </h2>
              <p class="text-neutral-600">
                51個のコンポーネントから<br>
                必要なものを選択
              </p>
            </div>
            <div class="text-center">
              <div class="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span class="text-2xl font-bold text-green-600">2</span>
              </div>
              <h2 level="3" class="text-lg font-bold mb-4">
                カスタマイズ
              </h2>
              <p class="text-neutral-600">
                プロジェクトに合わせて<br>
                スタイルを調整
              </p>
            </div>
            <div class="text-center">
              <div class="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span class="text-2xl font-bold text-purple-600">3</span>
              </div>
              <h2 level="3" class="text-lg font-bold mb-4">
                デプロイ
              </h2>
              <p class="text-neutral-600">
                Railway + Cloudflareで<br>
                高速デプロイ
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import BaseButton from '@/components/base/BaseButton.vue'
import BaseCard from '@/components/base/BaseCard.vue'
import BaseBadge from '@/components/base/BaseBadge.vue'

// コンポーネントカテゴリ
const componentCategories = ref([
  {
    id: 1,
    name: 'Base Components',
    count: 18,
    description: 'ボタン、フォーム、レイアウト等の基本コンポーネント',
    icon: '🧱',
    color: 'bg-blue-100 text-blue-600',
    components: ['BaseButton', 'BaseInput', 'BaseCard', 'BaseModal', 'BaseAlert']
  },
  {
    id: 2,
    name: 'Navigation',
    count: 8,
    description: 'ナビゲーション、メニュー、ブレッドクラム等',
    icon: '🧭',
    color: 'bg-green-100 text-green-600',
    components: ['BaseNavigation', 'BaseMenuList', 'BaseBreadcrumb', 'BaseTabs']
  },
  {
    id: 3,
    name: 'Layout',
    count: 6,
    description: 'グリッド、コンテナ、レスポンシブレイアウト',
    icon: '📐',
    color: 'bg-purple-100 text-purple-600',
    components: ['BaseGrid', 'BaseContainer', 'BaseSection', 'BaseColumns']
  },
  {
    id: 4,
    name: 'Media',
    count: 7,
    description: 'アバター、画像、動画、ギャラリー等',
    icon: '🖼️',
    color: 'bg-orange-100 text-orange-600',
    components: ['BaseAvatar', 'BaseImage', 'BaseGallery', 'BaseVideo']
  },
  {
    id: 5,
    name: 'E-commerce',
    count: 5,
    description: 'プロダクトカード、ショッピングカート等',
    icon: '🛒',
    color: 'bg-red-100 text-red-600',
    components: ['ProductCard', 'ShoppingCart', 'PriceTag', 'ProductGallery']
  },
  {
    id: 6,
    name: 'Admin',
    count: 4,
    description: '管理画面、ダッシュボード、統計表示',
    icon: '⚡',
    color: 'bg-indigo-100 text-indigo-600',
    components: ['AdminDashboard', 'AdminTable', 'AdminChart', 'AdminSidebar']
  }
])

// 最新アップデート
const recentUpdates = ref([
  {
    id: 1,
    type: 'new',
    title: 'BaseHeaderContainer コンポーネント追加',
    description: 'レスポンシブ対応のヘッダーコンテナコンポーネントを追加しました',
    date: '2025-07-09'
  },
  {
    id: 2,
    type: 'update',
    title: 'BaseMenuList 改善',
    description: 'router-link対応とStorybook互換性を向上させました',
    date: '2025-07-08'
  },
  {
    id: 3,
    type: 'fix',
    title: 'ArticleCard isBookmarked プロパティ修正',
    description: 'ブックマーク機能の型定義を修正しました',
    date: '2025-07-07'
  }
])

// イベントハンドラー
const openStorybook = () => {
  // Storybook URLを開く
  window.open('https://model-a-storybook.pages.dev', '_blank')
}

const downloadComponents = () => {
  // コンポーネントダウンロード機能
  console.log('コンポーネントダウンロード開始')
}

const openCategory = (category) => {
  // カテゴリ詳細ページへ
  console.log('カテゴリ詳細:', category.name)
}

const viewUpdate = (update) => {
  // アップデート詳細を表示
  console.log('アップデート詳細:', update.title)
}
</script>