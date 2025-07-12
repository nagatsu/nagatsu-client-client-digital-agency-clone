<template>
  <div class="space-y-8">
    <!-- ページヘッダー -->
    <div class="text-center">
      <h1 class="text-heading-1 font-bold text-neutral-900 mb-4">
        基本テストページ
      </h1>
      <p class="text-heading-6 text-neutral-600 max-w-3xl mx-auto">
        コンポーネントの基本動作をテストするためのページです。
      </p>
    </div>

    <!-- 基本コンポーネントテスト -->
    <BaseCard>
      <div class="p-6">
        <h2 class="text-heading-4 font-semibold text-neutral-900 mb-4">
          基本コンポーネント
        </h2>
        
        <!-- ボタンテスト -->
        <div class="mb-6">
          <h3 class="text-heading-5 font-medium text-neutral-900 mb-3">ボタン</h3>
          <div class="flex gap-2">
            <BaseButton variant="primary">プライマリ</BaseButton>
            <BaseButton variant="secondary">セカンダリ</BaseButton>
            <BaseButton variant="outline">アウトライン</BaseButton>
          </div>
        </div>

        <!-- バッジテスト -->
        <div class="mb-6">
          <h3 class="text-heading-5 font-medium text-neutral-900 mb-3">バッジ</h3>
          <div class="flex gap-2">
            <BaseBadge text="成功" variant="success" />
            <BaseBadge text="警告" variant="warning" />
            <BaseBadge text="エラー" variant="error" />
          </div>
        </div>

        <!-- アイコンテスト -->
        <div class="mb-6">
          <h3 class="text-heading-5 font-medium text-neutral-900 mb-3">アイコン</h3>
          <div class="flex gap-2">
            <BaseIcon name="Home" size="sm" />
            <BaseIcon name="User" size="md" />
            <BaseIcon name="Settings" size="lg" />
          </div>
        </div>

        <!-- 画像テスト -->
        <div class="mb-6">
          <h3 class="text-heading-5 font-medium text-neutral-900 mb-3">画像</h3>
          <div class="grid grid-cols-2 gap-4 max-w-md">
            <BaseImage
              src="https://picsum.photos/200/200?random=1"
              alt="テスト画像 1"
              size="md"
              rounded="lg"
            />
            <BaseImage
              placeholder
              placeholderText="プレースホルダー"
              size="md"
              rounded="lg"
            />
          </div>
        </div>
      </div>
    </BaseCard>

    <!-- ステータス表示 -->
    <BaseCard>
      <div class="p-6">
        <h2 class="text-heading-4 font-semibold text-neutral-900 mb-4">
          動作ステータス
        </h2>
        <div class="space-y-2">
          <div class="flex items-center gap-2">
            <BaseIcon name="CheckCircle" size="sm" class="text-success-600" />
            <span class="text-body-sm">基本コンポーネント: 正常</span>
          </div>
          <div class="flex items-center gap-2">
            <BaseIcon name="CheckCircle" size="sm" class="text-success-600" />
            <span class="text-body-sm">レンダリング: 正常</span>
          </div>
          <div class="flex items-center gap-2">
            <BaseIcon name="CheckCircle" size="sm" class="text-success-600" />
            <span class="text-body-sm">JavaScript: 正常</span>
          </div>
        </div>
      </div>
    </BaseCard>
  </div>
</template>

<script setup>
import BaseCard from '@/components/base/BaseCard.vue'
import BaseBadge from '@/components/base/BaseBadge.vue'
import BaseButton from '@/components/base/BaseButton.vue'
import BaseIcon from '@/components/base/BaseIcon.vue'
import BaseImage from '@/components/base/BaseImage.vue'
</script>