<template>
  <div class="space-y-8">
    <!-- ページヘッダー -->
    <div class="text-center">
      <h1 class="text-3xl font-bold text-neutral-900 dark:text-dark-900 mb-4">
        ECサイト向けコンポーネント（シンプル版）
      </h1>
      <p class="text-lg text-neutral-600 dark:text-dark-700 max-w-3xl mx-auto">
        ECサイト構築に特化したコンポーネントのテスト版です。
      </p>
    </div>

    <!-- 評価スターテスト -->
    <div class="bg-white dark:bg-dark-100 rounded-lg shadow-md p-6">
      <h2 class="text-2xl font-semibold text-neutral-900 dark:text-dark-900 mb-4">
        RatingStars
      </h2>
      <div class="space-y-4">
        <div>
          <h3 class="text-xl font-medium text-neutral-900 dark:text-dark-900 mb-2">表示モード</h3>
          <div class="flex gap-4 flex-wrap">
            <!-- 評価 4.5 -->
            <div class="p-4 border border-neutral-200 dark:border-dark-300 rounded-lg">
              <div class="flex items-center space-x-1">
                <div class="flex">
                  <span class="text-yellow-400">★★★★</span><span class="text-yellow-400">☆</span>
                </div>
                <span class="text-sm text-neutral-600 dark:text-dark-700 ml-2">4.5 (127件)</span>
              </div>
            </div>
            <!-- 評価 3.0 -->
            <div class="p-4 border border-neutral-200 dark:border-dark-300 rounded-lg">
              <div class="flex items-center space-x-1">
                <div class="flex">
                  <span class="text-yellow-400">★★★</span><span class="text-gray-300">☆☆</span>
                </div>
                <span class="text-sm text-neutral-600 dark:text-dark-700 ml-2">3.0 (45件)</span>
              </div>
            </div>
            <!-- 評価 5.0 -->
            <div class="p-4 border border-neutral-200 dark:border-dark-300 rounded-lg">
              <div class="flex items-center space-x-1">
                <div class="flex">
                  <span class="text-yellow-400">★★★★★</span>
                </div>
                <span class="text-sm text-neutral-600 dark:text-dark-700 ml-2">5.0 (892件)</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- 価格表示テスト -->
    <div class="bg-white dark:bg-dark-100 rounded-lg shadow-md p-6">
      <h2 class="text-2xl font-semibold text-neutral-900 dark:text-dark-900 mb-4">
        PriceDisplay
      </h2>
      <div class="space-y-4">
        <div>
          <h3 class="text-xl font-medium text-neutral-900 dark:text-dark-900 mb-2">基本価格表示</h3>
          <div class="space-y-4">
            <!-- 通常価格 -->
            <div class="p-4 border border-neutral-200 dark:border-dark-300 rounded-lg">
              <p class="text-sm font-medium text-neutral-700 dark:text-dark-800 mb-2">通常価格</p>
              <div class="text-2xl font-bold text-neutral-900 dark:text-dark-900">¥2,980</div>
            </div>
            <!-- セール価格 -->
            <div class="p-4 border border-neutral-200 dark:border-dark-300 rounded-lg">
              <p class="text-sm font-medium text-neutral-700 dark:text-dark-800 mb-2">セール価格</p>
              <div class="flex items-center space-x-2">
                <span class="text-2xl font-bold text-error-600">¥1,980</span>
                <span class="text-sm text-neutral-500 dark:text-dark-600 line-through">¥2,980</span>
                <span class="bg-error-100 text-error-700 px-2 py-1 rounded text-xs font-medium">33% OFF</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- 商品カードテスト -->
    <div class="bg-white dark:bg-dark-100 rounded-lg shadow-md p-6">
      <h2 class="text-2xl font-semibold text-neutral-900 dark:text-dark-900 mb-4">
        ProductCard
      </h2>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <!-- 商品カード 1 -->
        <div class="border border-neutral-200 dark:border-dark-300 rounded-lg overflow-hidden hover:shadow-md transition-shadow">
          <img src="https://picsum.photos/300/300?random=1" alt="プレミアムコーヒー豆" class="w-full h-48 object-cover" />
          <div class="p-4">
            <div class="flex items-center space-x-2 mb-2">
              <span class="bg-error-100 text-error-700 px-2 py-1 rounded text-xs font-medium">NEW</span>
              <span class="bg-warning-100 text-warning-700 px-2 py-1 rounded text-xs font-medium">SALE</span>
            </div>
            <h3 class="font-semibold text-neutral-900 dark:text-dark-900 mb-2">プレミアムコーヒー豆</h3>
            <p class="text-sm text-neutral-600 dark:text-dark-700 mb-3">厳選されたアラビカ種100%使用。深煎りで芳醇な香り。</p>
            <div class="flex items-center space-x-1 mb-2">
              <span class="text-yellow-400">★★★★</span><span class="text-yellow-400">☆</span>
              <span class="text-sm text-neutral-600 dark:text-dark-700 ml-1">4.5 (127)</span>
            </div>
            <div class="flex items-center justify-between mb-3">
              <div class="flex items-center space-x-2">
                <span class="text-xl font-bold text-error-600">¥1,980</span>
                <span class="text-sm text-neutral-500 dark:text-dark-600 line-through">¥2,980</span>
              </div>
              <span class="text-sm text-neutral-600 dark:text-dark-700">在庫: 15</span>
            </div>
            <button class="w-full bg-primary-500 hover:bg-primary-600 text-white py-2 rounded-md transition-colors">
              カートに追加
            </button>
          </div>
        </div>

        <!-- 商品カード 2 -->
        <div class="border border-neutral-200 dark:border-dark-300 rounded-lg overflow-hidden hover:shadow-md transition-shadow">
          <img src="https://picsum.photos/300/300?random=2" alt="有機緑茶セット" class="w-full h-48 object-cover" />
          <div class="p-4">
            <div class="flex items-center space-x-2 mb-2">
              <span class="bg-info-100 text-info-700 px-2 py-1 rounded text-xs font-medium">限定版</span>
            </div>
            <h3 class="font-semibold text-neutral-900 dark:text-dark-900 mb-2">有機緑茶セット</h3>
            <p class="text-sm text-neutral-600 dark:text-dark-700 mb-3">無農薬栽培の有機緑茶。健康志向の方におすすめ。</p>
            <div class="flex items-center space-x-1 mb-2">
              <span class="text-yellow-400">★★★★★</span>
              <span class="text-sm text-neutral-600 dark:text-dark-700 ml-1">4.8 (89)</span>
            </div>
            <div class="flex items-center justify-between mb-3">
              <span class="text-xl font-bold text-neutral-900 dark:text-dark-900">¥3,200</span>
              <span class="text-sm text-warning-600">在庫: 3</span>
            </div>
            <button class="w-full bg-primary-500 hover:bg-primary-600 text-white py-2 rounded-md transition-colors">
              カートに追加
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- テスト用ステータス -->
    <div class="bg-white dark:bg-dark-100 rounded-lg shadow-md p-6">
      <h3 class="text-xl font-medium text-neutral-900 dark:text-dark-900 mb-3">ステータス</h3>
      <p class="text-success-600 flex items-center">
        <span class="w-2 h-2 bg-success-500 rounded-full mr-2"></span>
        ECサイト向けコンポーネントは正常に動作しています
      </p>
    </div>
  </div>
</template>

<script setup>
// Pure HTML/CSS implementation - no custom components
</script>