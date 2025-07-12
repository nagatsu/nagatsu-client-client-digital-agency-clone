<template>
  <div class="space-y-8">
    <!-- ページヘッダー -->
    <div class="text-center">
      <h1 class="text-heading-1 font-bold text-neutral-900 mb-4">
        画像コンポーネント
      </h1>
      <p class="text-heading-6 text-neutral-600 max-w-3xl mx-auto">
        プレースホルダー、遅延読み込み、ギャラリー、ヒーロー画像など、
        画像表示に特化したコンポーネントライブラリです。
      </p>
    </div>

    <!-- BaseImage Examples Only -->
    <BaseCard>
      <div class="p-6">
        <h2 class="text-heading-4 font-semibold text-neutral-900 mb-6">
          BaseImage コンポーネント
        </h2>
        
        <!-- 基本的な使用例 -->
        <div class="mb-8">
          <h3 class="text-heading-5 font-medium text-neutral-900 mb-4">基本的な使用例</h3>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <BaseImage
                src="https://picsum.photos/300/200?random=1"
                alt="サンプル画像 1"
                size="full"
                rounded="lg"
              />
              <p class="text-xs text-neutral-600 mt-2">標準画像</p>
            </div>
            <div>
              <BaseImage
                src="https://picsum.photos/300/200?random=2"
                alt="サンプル画像 2"
                size="full"
                rounded="lg"
                loading="lazy"
              />
              <p class="text-xs text-neutral-600 mt-2">遅延読み込み</p>
            </div>
            <div>
              <BaseImage
                src="https://invalid-url.jpg"
                alt="エラー画像"
                size="full"
                rounded="lg"
                :show-error="true"
              />
              <p class="text-xs text-neutral-600 mt-2">エラー処理</p>
            </div>
          </div>
        </div>

        <!-- サイズバリエーション -->
        <div class="mb-8">
          <h3 class="text-heading-5 font-medium text-neutral-900 mb-4">サイズバリエーション</h3>
          <div class="flex flex-wrap items-end gap-4">
            <div>
              <BaseImage
                src="https://picsum.photos/100/100?random=3"
                alt="小サイズ"
                size="sm"
                rounded="md"
              />
              <p class="text-xs text-neutral-600 mt-2 text-center">Small</p>
            </div>
            <div>
              <BaseImage
                src="https://picsum.photos/150/150?random=4"
                alt="中サイズ"
                size="md"
                rounded="md"
              />
              <p class="text-xs text-neutral-600 mt-2 text-center">Medium</p>
            </div>
            <div>
              <BaseImage
                src="https://picsum.photos/200/200?random=5"
                alt="大サイズ"
                size="lg"
                rounded="md"
              />
              <p class="text-xs text-neutral-600 mt-2 text-center">Large</p>
            </div>
          </div>
        </div>

        <!-- 角丸バリエーション -->
        <div>
          <h3 class="text-heading-5 font-medium text-neutral-900 mb-4">角丸バリエーション</h3>
          <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div>
              <BaseImage
                src="https://picsum.photos/150/150?random=6"
                alt="角丸なし"
                size="md"
                rounded="none"
              />
              <p class="text-xs text-neutral-600 mt-2 text-center">None</p>
            </div>
            <div>
              <BaseImage
                src="https://picsum.photos/150/150?random=7"
                alt="小さい角丸"
                size="md"
                rounded="sm"
              />
              <p class="text-xs text-neutral-600 mt-2 text-center">Small</p>
            </div>
            <div>
              <BaseImage
                src="https://picsum.photos/150/150?random=8"
                alt="中角丸"
                size="md"
                rounded="md"
              />
              <p class="text-xs text-neutral-600 mt-2 text-center">Medium</p>
            </div>
            <div>
              <BaseImage
                src="https://picsum.photos/150/150?random=9"
                alt="完全な円"
                size="md"
                rounded="full"
              />
              <p class="text-xs text-neutral-600 mt-2 text-center">Full</p>
            </div>
          </div>
        </div>
      </div>
    </BaseCard>

    <!-- プレースホルダー -->
    <BaseCard>
      <div class="p-6">
        <h2 class="text-heading-4 font-semibold text-neutral-900 mb-6">
          プレースホルダー機能
        </h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h3 class="text-heading-6 font-medium text-neutral-900 mb-3">カスタムプレースホルダー</h3>
            <BaseImage
              src=""
              alt="プレースホルダー"
              size="full"
              rounded="lg"
              :show-placeholder="true"
              placeholder-text="画像を読み込み中..."
            />
          </div>
          <div>
            <h3 class="text-heading-6 font-medium text-neutral-900 mb-3">読み込み状態</h3>
            <BaseImage
              src="https://picsum.photos/300/200?random=10"
              alt="読み込み中"
              size="full"
              rounded="lg"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </BaseCard>
  </div>
</template>

<script setup>
import BaseCard from '@/components/base/BaseCard.vue'
import BaseImage from '@/components/base/BaseImage.vue'
</script>