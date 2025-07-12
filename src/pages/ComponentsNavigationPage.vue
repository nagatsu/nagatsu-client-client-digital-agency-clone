<template>
  <div class="space-y-8">
    <!-- ヘッダー -->
    <div class="flex items-center justify-between">
      <div>
        <h1 class="text-heading-1 font-bold text-neutral-900 mb-2">
          ナビゲーションコンポーネント
        </h1>
        <p class="text-heading-6 text-neutral-600">
          緊急事バナー、グローバルメニュー、ユーティリティリンク、ページネーション、メニューリスト
        </p>
      </div>
      <BaseButton variant="outline" @click="$router.push('/components')">
        <svg class="h-4 w-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
          <path fill-rule="evenodd" d="M7.707 14.707a1 1 0 01-1.414 0L3 11.414V13a1 1 0 11-2 0V9a1 1 0 011-1h4a1 1 0 110 2H4.414l3.293 3.293a1 1 0 010 1.414z" clip-rule="evenodd" />
        </svg>
        一覧に戻る
      </BaseButton>
    </div>
    
    <!-- 緊急事バナー -->
    <section class="space-y-6">
      <BaseCard>
        <div class="p-6">
          <h3 class="text-heading-4 font-semibold text-neutral-900 mb-4">緊急事バナー</h3>
          <p class="text-body-sm text-neutral-600 mb-6">
            緊急性の高い告知を表示するバナー。政府系サービスで重要な情報を確実に伝達します。
          </p>
          <BaseEmergencyBanner
            v-model="emergencyBannerVisible"
            title="【緊急】システムメンテナンスのお知らせ"
            description="2025年7月5日（土）2:00〜6:00の間、システムメンテナンスを実施いたします。"
            action-text="詳細を見る"
            action-url="/maintenance"
          />
          <div class="mt-4">
            <BaseButton @click="emergencyBannerVisible = !emergencyBannerVisible" size="sm">
              バナーを{{ emergencyBannerVisible ? '非表示' : '表示' }}
            </BaseButton>
          </div>
        </div>
      </BaseCard>
    </section>
    
    <!-- ユーティリティリンク -->
    <section class="space-y-6">
      <BaseCard>
        <div class="p-6">
          <h3 class="text-heading-4 font-semibold text-neutral-900 mb-4">ユーティリティリンク</h3>
          <p class="text-body-sm text-neutral-600 mb-6">
            ヘッダーやフッターで使用するコンパクトなリンク集。5-6個程度のリンクを想定しています。
          </p>
          <div class="space-y-4">
            <div>
              <h4 class="text-body-regular font-medium mb-3">左寄せ</h4>
              <BaseUtilityLinks :links="utilityLinks" alignment="left" />
            </div>
            <div>
              <h4 class="text-body-regular font-medium mb-3">中央寄せ</h4>
              <BaseUtilityLinks :links="utilityLinks" alignment="center" />
            </div>
            <div>
              <h4 class="text-body-regular font-medium mb-3">右寄せ</h4>
              <BaseUtilityLinks :links="utilityLinks" alignment="right" />
            </div>
          </div>
        </div>
      </BaseCard>
    </section>
    
    <!-- グローバルメニュー -->
    <section class="space-y-6">
      <BaseCard>
        <div class="p-6">
          <h3 class="text-heading-4 font-semibold text-neutral-900 mb-4">グローバルメニュー</h3>
          <p class="text-body-sm text-neutral-600 mb-6">
            サイト全体のナビゲーション。ドロップダウンメニューに対応し、アクティブ状態の表示も行います。
          </p>
          <BaseGlobalMenu :items="globalMenuItems" />
        </div>
      </BaseCard>
    </section>
    
    <!-- メニューリスト -->
    <section class="space-y-6">
      <BaseCard>
        <div class="p-6">
          <h3 class="text-heading-4 font-semibold text-neutral-900 mb-4">メニューリスト</h3>
          <p class="text-body-sm text-neutral-600 mb-6">
            構造化されたメニューリスト。アイコン、バッジ、ディバイダーに対応しています。
          </p>
          <BaseMenuList :items="menuListItems" title="ナビゲーション" />
        </div>
      </BaseCard>
    </section>
    
    <!-- ページネーション -->
    <section class="space-y-6">
      <BaseCard>
        <div class="p-6">
          <h3 class="text-heading-4 font-semibold text-neutral-900 mb-4">ページネーション</h3>
          <p class="text-body-sm text-neutral-600 mb-6">
            大量のデータを複数ページに分割して表示する際に使用。モバイル対応も含まれます。
          </p>
          <div class="space-y-4">
            <div>
              <h4 class="text-body-regular font-medium mb-3">標準サイズ</h4>
              <BasePagination
                :current-page="currentPage"
                :total-pages="totalPages"
                :total-items="totalItems"
                :items-per-page="10"
                @page-change="handlePageChange"
              />
            </div>
            <div>
              <h4 class="text-body-regular font-medium mb-3">小サイズ</h4>
              <BasePagination
                :current-page="2"
                :total-pages="5"
                :total-items="45"
                :items-per-page="10"
                size="sm"
                @page-change="() => {}"
              />
            </div>
          </div>
        </div>
      </BaseCard>
    </section>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import BaseButton from '@/components/base/BaseButton.vue'
import BaseCard from '@/components/base/BaseCard.vue'
import BaseEmergencyBanner from '@/components/base/BaseEmergencyBanner.vue'
import BaseUtilityLinks from '@/components/base/BaseUtilityLinks.vue'
import BaseGlobalMenu from '@/components/base/BaseGlobalMenu.vue'
import BaseMenuList from '@/components/base/BaseMenuList.vue'
import BasePagination from '@/components/base/BasePagination.vue'

// サンプルデータ
const emergencyBannerVisible = ref(true)
const currentPage = ref(1)
const totalPages = ref(10)
const totalItems = ref(95)

const utilityLinks = [
  { text: 'お問合わせ', url: '/contact', external: false },
  { text: 'よくあるご質問', url: '/faq', external: false },
  { text: 'ヘルプ', url: '/help', external: false },
  { text: 'アクセス', url: '/access', external: false },
  { text: 'プライバシーポリシー', url: '/privacy', external: false }
]

const globalMenuItems = [
  { text: 'ホーム', url: '/' },
  { text: 'サービス', url: '/services', children: [
    { text: 'サービス一覧', url: '/services' },
    { text: 'オンライン申請', url: '/services/online' },
    { text: 'よくある質問', url: '/services/faq' }
  ]},
  { text: 'お知らせ', url: '/news' },
  { text: 'お問い合わせ', url: '/contact' }
]

const menuListItems = [
  { type: 'header', text: 'メインメニュー' },
  { text: 'ダッシュボード', url: '/dashboard', icon: 'home' },
  { text: 'ユーザー管理', url: '/users', icon: 'user', badge: { text: 'New', variant: 'success' } },
  { text: '設定', url: '/settings', icon: 'settings' },
  { type: 'divider' },
  { type: 'header', text: 'ドキュメント' },
  { text: 'マニュアル', url: '/manual', icon: 'document' },
  { text: 'API仕様書', url: 'https://api.example.com', external: true, icon: 'document' }
]

const handlePageChange = (page) => {
  currentPage.value = page
}
</script>