<template>
  <div class="space-y-8">
    <!-- ページヘッダー -->
    <div class="text-center">
      <h1 class="text-heading-1 font-bold text-neutral-900 mb-4">
        画像コンポーネント（シンプル版）
      </h1>
      <p class="text-heading-6 text-neutral-600 max-w-3xl mx-auto">
        画像表示に特化したコンポーネントのテスト版です。
      </p>
    </div>

    <!-- BaseImage コンポーネント -->
    <BaseCard>
      <div class="p-6">
        <h2 class="text-heading-4 font-semibold text-neutral-900 mb-4">
          BaseImage
        </h2>
        <p class="text-body-sm text-neutral-600 mb-6">
          基本的な画像表示コンポーネントです。
        </p>

        <div class="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
          <BaseImage
            src="https://picsum.photos/200/200?random=1"
            alt="サンプル画像 1"
            size="md"
            rounded="lg"
          />
          <BaseImage
            src="https://picsum.photos/200/200?random=2"
            alt="サンプル画像 2"
            size="md"
            rounded="lg"
            badge="新着"
          />
          <BaseImage
            placeholder
            placeholderText="プレースホルダー"
            size="md"
            rounded="lg"
          />
          <BaseImage
            src="invalid-url"
            fallbackSrc="https://picsum.photos/200/200?random=3"
            alt="フォールバック例"
            size="md"
            rounded="lg"
          />
        </div>
      </div>
    </BaseCard>

    <!-- テスト用ステータス -->
    <BaseCard>
      <div class="p-6">
        <h3 class="text-heading-5 font-medium text-neutral-900 mb-3">ステータス</h3>
        <p class="text-body-sm text-success-600">画像コンポーネントは正常に動作しています</p>
      </div>
    </BaseCard>
  </div>
</template>

<script setup>
import BaseCard from '@/components/base/BaseCard.vue'
import BaseImage from '@/components/base/BaseImage.vue'
</script>