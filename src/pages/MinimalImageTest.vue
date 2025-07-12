<template>
  <div class="space-y-8">
    <!-- ページヘッダー -->
    <div class="text-center">
      <h1 class="text-3xl font-bold text-neutral-900 dark:text-dark-800 mb-4">
        画像コンポーネント
      </h1>
      <p class="text-lg text-neutral-600 dark:text-dark-600 max-w-3xl mx-auto">
        プレースホルダー、遅延読み込み、ギャラリー、ヒーロー画像など、
        画像表示に特化したコンポーネントライブラリです。
      </p>
    </div>

    <!-- BaseImage プロフェッショナルプレースホルダー -->
    <div class="bg-white dark:bg-dark-200 rounded-lg shadow-md p-6">
      <h2 class="text-2xl font-semibold text-neutral-900 dark:text-dark-800 mb-6">BaseImage - プロフェッショナルプレースホルダー</h2>
      
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div>
          <BaseImage 
            type="product"
            :width="300"
            :height="200"
            alt="商品画像プレースホルダー"
          />
          <p class="text-sm text-neutral-600 dark:text-dark-600 mt-2">商品画像</p>
        </div>
        <div>
          <BaseImage 
            type="hero"
            :width="300"
            :height="200"
            alt="ヒーロー画像プレースホルダー"
          />
          <p class="text-sm text-neutral-600 dark:text-dark-600 mt-2">ヒーロー画像</p>
        </div>
        <div>
          <BaseImage 
            type="avatar"
            :width="300"
            :height="200"
            alt="アバタープレースホルダー"
          />
          <p class="text-sm text-neutral-600 dark:text-dark-600 mt-2">アバター</p>
        </div>
      </div>
      
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div>
          <BaseImage 
            type="chart"
            :width="300"
            :height="200"
            alt="チャートプレースホルダー"
          />
          <p class="text-sm text-neutral-600 dark:text-dark-600 mt-2">チャート・グラフ</p>
        </div>
        <div>
          <BaseImage 
            type="map"
            :width="300"
            :height="200"
            alt="地図プレースホルダー"
          />
          <p class="text-sm text-neutral-600 dark:text-dark-600 mt-2">地図</p>
        </div>
        <div>
          <BaseImage 
            type="gallery"
            :width="300"
            :height="200"
            alt="ギャラリープレースホルダー"
          />
          <p class="text-sm text-neutral-600 dark:text-dark-600 mt-2">ギャラリー</p>
        </div>
      </div>
    </div>

    <!-- 基本的な画像使用例 -->
    <div class="bg-white dark:bg-dark-200 rounded-lg shadow-md p-6">
      <h2 class="text-2xl font-semibold text-neutral-900 dark:text-dark-800 mb-6">基本的な画像使用例</h2>
      
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div>
          <img
            src="https://picsum.photos/300/200?random=1"
            alt="サンプル画像 1"
            class="w-full h-48 object-cover rounded-lg shadow-sm"
          />
          <p class="text-sm text-neutral-600 dark:text-dark-600 mt-2">標準画像</p>
        </div>
        <div>
          <img
            src="https://picsum.photos/300/200?random=2"
            alt="サンプル画像 2"
            class="w-full h-48 object-cover rounded-lg shadow-sm"
            loading="lazy"
          />
          <p class="text-sm text-neutral-600 dark:text-dark-600 mt-2">遅延読み込み</p>
        </div>
        <div>
          <div class="w-full h-48 bg-neutral-200 dark:bg-dark-300 rounded-lg flex items-center justify-center">
            <div class="text-center">
              <svg class="w-12 h-12 text-neutral-400 dark:text-dark-500 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <p class="text-sm text-neutral-600 dark:text-dark-600">プレースホルダー</p>
            </div>
          </div>
          <p class="text-sm text-neutral-600 dark:text-dark-600 mt-2">エラー処理</p>
        </div>
      </div>
    </div>

    <!-- サイズバリエーション -->
    <div class="bg-white dark:bg-dark-200 rounded-lg shadow-md p-6">
      <h2 class="text-2xl font-semibold text-neutral-900 dark:text-dark-800 mb-6">サイズバリエーション</h2>
      
      <div class="flex flex-wrap items-end gap-6">
        <div>
          <img
            src="https://picsum.photos/100/100?random=3"
            alt="小サイズ"
            class="w-20 h-20 object-cover rounded-md"
          />
          <p class="text-xs text-neutral-600 dark:text-dark-600 mt-2 text-center">Small (80px)</p>
        </div>
        <div>
          <img
            src="https://picsum.photos/150/150?random=4"
            alt="中サイズ"
            class="w-32 h-32 object-cover rounded-md"
          />
          <p class="text-xs text-neutral-600 dark:text-dark-600 mt-2 text-center">Medium (128px)</p>
        </div>
        <div>
          <img
            src="https://picsum.photos/200/200?random=5"
            alt="大サイズ"
            class="w-48 h-48 object-cover rounded-md"
          />
          <p class="text-xs text-neutral-600 dark:text-dark-600 mt-2 text-center">Large (192px)</p>
        </div>
      </div>
    </div>

    <!-- 角丸バリエーション -->
    <div class="bg-white dark:bg-dark-200 rounded-lg shadow-md p-6">
      <h2 class="text-2xl font-semibold text-neutral-900 dark:text-dark-800 mb-6">角丸バリエーション</h2>
      
      <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div>
          <img
            src="https://picsum.photos/150/150?random=6"
            alt="角丸なし"
            class="w-full h-32 object-cover"
          />
          <p class="text-xs text-neutral-600 dark:text-dark-600 mt-2 text-center">None</p>
        </div>
        <div>
          <img
            src="https://picsum.photos/150/150?random=7"
            alt="小さい角丸"
            class="w-full h-32 object-cover rounded-sm"
          />
          <p class="text-xs text-neutral-600 dark:text-dark-600 mt-2 text-center">Small</p>
        </div>
        <div>
          <img
            src="https://picsum.photos/150/150?random=8"
            alt="中角丸"
            class="w-full h-32 object-cover rounded-md"
          />
          <p class="text-xs text-neutral-600 dark:text-dark-600 mt-2 text-center">Medium</p>
        </div>
        <div>
          <img
            src="https://picsum.photos/150/150?random=9"
            alt="完全な円"
            class="w-32 h-32 object-cover rounded-full mx-auto"
          />
          <p class="text-xs text-neutral-600 dark:text-dark-600 mt-2 text-center">Full</p>
        </div>
      </div>
    </div>

    <!-- 画像ギャラリー -->
    <div class="bg-white dark:bg-dark-200 rounded-lg shadow-md p-6">
      <h2 class="text-2xl font-semibold text-neutral-900 dark:text-dark-800 mb-6">画像ギャラリー</h2>
      
      <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        <img src="https://picsum.photos/300/200?random=10" alt="ギャラリー 1" class="w-full h-32 object-cover rounded-lg hover:shadow-md transition-shadow cursor-pointer" />
        <img src="https://picsum.photos/300/200?random=11" alt="ギャラリー 2" class="w-full h-32 object-cover rounded-lg hover:shadow-md transition-shadow cursor-pointer" />
        <img src="https://picsum.photos/300/200?random=12" alt="ギャラリー 3" class="w-full h-32 object-cover rounded-lg hover:shadow-md transition-shadow cursor-pointer" />
        <img src="https://picsum.photos/300/200?random=13" alt="ギャラリー 4" class="w-full h-32 object-cover rounded-lg hover:shadow-md transition-shadow cursor-pointer" />
        <img src="https://picsum.photos/300/200?random=14" alt="ギャラリー 5" class="w-full h-32 object-cover rounded-lg hover:shadow-md transition-shadow cursor-pointer" />
        <img src="https://picsum.photos/300/200?random=15" alt="ギャラリー 6" class="w-full h-32 object-cover rounded-lg hover:shadow-md transition-shadow cursor-pointer" />
        <img src="https://picsum.photos/300/200?random=16" alt="ギャラリー 7" class="w-full h-32 object-cover rounded-lg hover:shadow-md transition-shadow cursor-pointer" />
        <img src="https://picsum.photos/300/200?random=17" alt="ギャラリー 8" class="w-full h-32 object-cover rounded-lg hover:shadow-md transition-shadow cursor-pointer" />
      </div>
    </div>

    <!-- ヒーロー画像セクション -->
    <div class="bg-white dark:bg-dark-200 rounded-lg shadow-md overflow-hidden">
      <div class="relative">
        <img
          src="https://picsum.photos/1200/400?random=18"
          alt="ヒーロー画像"
          class="w-full h-64 md:h-80 object-cover"
        />
        <div class="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
          <div class="text-center text-white">
            <h3 class="text-3xl font-bold mb-4">ヒーロー画像セクション</h3>
            <p class="text-lg mb-6">大きな画像の上にテキストを重ねる使用例</p>
            <button class="bg-primary-500 hover:bg-primary-600 text-white font-medium py-2 px-6 rounded-md transition-colors">
              詳細を見る
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import BaseImage from '@/components/base/BaseImage.vue'
</script>