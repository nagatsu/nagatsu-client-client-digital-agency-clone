<template>
  <div class="space-y-8">
    <!-- ヘッダー -->
    <div class="text-center mb-8">
      <h1 class="text-3xl font-bold text-neutral-900 mb-4">
        コンポーネントライブラリ
      </h1>
      <p class="text-lg text-neutral-600 max-w-2xl mx-auto mb-8">
        デジタル庁デザインシステム準拠の全コンポーネントを確認できます。
        基本機能から高度なデータ表示まで、カテゴリ別に整理され、高品質なプロトタイプを作成できます。
      </p>
      
      <!-- カテゴリへの直接リンク -->
      <div class="flex flex-wrap justify-center gap-3">
        <router-link 
          to="/components/basic" 
          class="bg-primary-500 hover:bg-primary-600 text-white font-medium py-2 px-4 rounded-md transition-colors"
        >
          基本コンポーネント
        </router-link>
        <router-link 
          to="/components/navigation" 
          class="bg-neutral-200 hover:bg-neutral-300 text-neutral-800 font-medium py-2 px-4 rounded-md transition-colors"
        >
          ナビゲーション
        </router-link>
        <router-link 
          to="/components/layout" 
          class="bg-neutral-200 hover:bg-neutral-300 text-neutral-800 font-medium py-2 px-4 rounded-md transition-colors"
        >
          レイアウト
        </router-link>
        <router-link 
          to="/components/data" 
          class="bg-neutral-200 hover:bg-neutral-300 text-neutral-800 font-medium py-2 px-4 rounded-md transition-colors"
        >
          データ表示
        </router-link>
        <router-link 
          to="/components/advanced" 
          class="bg-neutral-200 hover:bg-neutral-300 text-neutral-800 font-medium py-2 px-4 rounded-md transition-colors"
        >
          高度なコンポーネント
        </router-link>
      </div>
    </div>

    <!-- コンポーネントカテゴリ一覧 -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <!-- 基本コンポーネント -->
      <div class="bg-white rounded-lg border border-neutral-200 p-6 hover:shadow-md transition-shadow">
        <div class="flex items-center mb-4">
          <div class="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mr-4">
            <svg class="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
            </svg>
          </div>
          <h3 class="text-xl font-semibold text-neutral-900">基本コンポーネント</h3>
        </div>
        <p class="text-neutral-600 mb-4">
          ボタン、入力フィールド、カード、バッジなど、UIの基礎となるコンポーネント
        </p>
        <router-link 
          to="/components/basic" 
          class="text-primary-600 hover:text-primary-700 font-medium"
        >
          詳細を見る →
        </router-link>
      </div>

      <!-- ナビゲーション -->
      <div class="bg-white rounded-lg border border-neutral-200 p-6 hover:shadow-md transition-shadow">
        <div class="flex items-center mb-4">
          <div class="w-12 h-12 bg-success-100 rounded-lg flex items-center justify-center mr-4">
            <svg class="w-6 h-6 text-success-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </div>
          <h3 class="text-xl font-semibold text-neutral-900">ナビゲーション</h3>
        </div>
        <p class="text-neutral-600 mb-4">
          メニュー、タブ、ブレッドクラム、ページネーションなど
        </p>
        <router-link 
          to="/components/navigation" 
          class="text-primary-600 hover:text-primary-700 font-medium"
        >
          詳細を見る →
        </router-link>
      </div>

      <!-- レイアウト -->
      <div class="bg-white rounded-lg border border-neutral-200 p-6 hover:shadow-md transition-shadow">
        <div class="flex items-center mb-4">
          <div class="w-12 h-12 bg-warning-100 rounded-lg flex items-center justify-center mr-4">
            <svg class="w-6 h-6 text-warning-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
            </svg>
          </div>
          <h3 class="text-xl font-semibold text-neutral-900">レイアウト</h3>
        </div>
        <p class="text-neutral-600 mb-4">
          グリッド、コンテナ、スペーシング、レスポンシブレイアウト
        </p>
        <router-link 
          to="/components/layout" 
          class="text-primary-600 hover:text-primary-700 font-medium"
        >
          詳細を見る →
        </router-link>
      </div>

      <!-- データ表示 -->
      <div class="bg-white rounded-lg border border-neutral-200 p-6 hover:shadow-md transition-shadow">
        <div class="flex items-center mb-4">
          <div class="w-12 h-12 bg-info-100 rounded-lg flex items-center justify-center mr-4">
            <svg class="w-6 h-6 text-info-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
            </svg>
          </div>
          <h3 class="text-xl font-semibold text-neutral-900">データ表示</h3>
        </div>
        <p class="text-neutral-600 mb-4">
          テーブル、リスト、統計カード、チャートなど
        </p>
        <router-link 
          to="/components/data" 
          class="text-primary-600 hover:text-primary-700 font-medium"
        >
          詳細を見る →
        </router-link>
      </div>

      <!-- 高度なコンポーネント -->
      <div class="bg-white rounded-lg border border-neutral-200 p-6 hover:shadow-md transition-shadow">
        <div class="flex items-center mb-4">
          <div class="w-12 h-12 bg-error-100 rounded-lg flex items-center justify-center mr-4">
            <svg class="w-6 h-6 text-error-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          </div>
          <h3 class="text-xl font-semibold text-neutral-900">高度なコンポーネント</h3>
        </div>
        <p class="text-neutral-600 mb-4">
          モーダル、ドロップダウン、ファイルアップロード、フォームビルダー
        </p>
        <router-link 
          to="/components/advanced" 
          class="text-primary-600 hover:text-primary-700 font-medium"
        >
          詳細を見る →
        </router-link>
      </div>

      <!-- その他のコンポーネント -->
      <div class="bg-white rounded-lg border border-neutral-200 p-6 hover:shadow-md transition-shadow">
        <div class="flex items-center mb-4">
          <div class="w-12 h-12 bg-neutral-100 rounded-lg flex items-center justify-center mr-4">
            <svg class="w-6 h-6 text-neutral-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
            </svg>
          </div>
          <h3 class="text-xl font-semibold text-neutral-900">専用コンポーネント</h3>
        </div>
        <p class="text-neutral-600 mb-4">
          アイコン、画像、ECサイト向けなど特化型コンポーネント
        </p>
        <div class="space-y-2">
          <div>
            <router-link 
              to="/icons" 
              class="text-primary-600 hover:text-primary-700 font-medium block"
            >
              アイコンライブラリ →
            </router-link>
          </div>
          <div>
            <router-link 
              to="/images" 
              class="text-primary-600 hover:text-primary-700 font-medium block"
            >
              画像コンポーネント →
            </router-link>
          </div>
          <div>
            <router-link 
              to="/ecommerce" 
              class="text-primary-600 hover:text-primary-700 font-medium block"
            >
              ECサイト向け →
            </router-link>
          </div>
          <div>
            <router-link 
              to="/media" 
              class="text-primary-600 hover:text-primary-700 font-medium block"
            >
              メディア向け →
            </router-link>
          </div>
          <div>
            <router-link 
              to="/admin" 
              class="text-primary-600 hover:text-primary-700 font-medium block"
            >
              管理画面系 →
            </router-link>
          </div>
          <div>
            <router-link 
              to="/crypto" 
              class="text-primary-600 hover:text-primary-700 font-medium block"
            >
              Web3・クリプト系 →
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
// Pure HTML/CSS with router-link - no custom components
</script>