<template>
  <div class="chart-component bg-white border border-neutral-200 rounded-lg p-6">
    <!-- ヘッダー -->
    <div v-if="showHeader" class="mb-6">
      <h3 v-if="title" class="text-heading-5 font-semibold text-neutral-900">
        {{ title }}
      </h3>
      <p v-if="description" class="text-body-sm text-neutral-600 mt-1">
        {{ description }}
      </p>
    </div>

    <!-- 静的チャートモックアップ（モックアップテンプレート用） -->
    <div class="chart-container relative" :style="{ height: height + 'px' }">
      <!-- 線グラフ風の静的表示 -->
      <div v-if="type === 'line'" class="h-full flex items-end justify-center space-x-4 p-4 bg-neutral-50 rounded">
        <div class="flex flex-col items-center space-y-2">
          <div class="w-2 bg-primary-500 rounded-t" style="height: 60%"></div>
          <span class="text-xs text-neutral-600">1月</span>
        </div>
        <div class="flex flex-col items-center space-y-2">
          <div class="w-2 bg-primary-500 rounded-t" style="height: 75%"></div>
          <span class="text-xs text-neutral-600">2月</span>
        </div>
        <div class="flex flex-col items-center space-y-2">
          <div class="w-2 bg-primary-500 rounded-t" style="height: 45%"></div>
          <span class="text-xs text-neutral-600">3月</span>
        </div>
        <div class="flex flex-col items-center space-y-2">
          <div class="w-2 bg-primary-500 rounded-t" style="height: 80%"></div>
          <span class="text-xs text-neutral-600">4月</span>
        </div>
        <div class="flex flex-col items-center space-y-2">
          <div class="w-2 bg-primary-500 rounded-t" style="height: 90%"></div>
          <span class="text-xs text-neutral-600">5月</span>
        </div>
        <div class="flex flex-col items-center space-y-2">
          <div class="w-2 bg-primary-600 rounded-t" style="height: 100%"></div>
          <span class="text-xs text-neutral-600">6月</span>
        </div>
      </div>

      <!-- 円グラフ風の静的表示 -->
      <div v-else-if="type === 'pie' || type === 'doughnut'" class="h-full flex items-center justify-center">
        <div class="relative w-48 h-48">
          <div class="absolute inset-0 rounded-full bg-gradient-to-r from-primary-500 via-success-500 to-warning-500"></div>
          <div v-if="type === 'doughnut'" class="absolute inset-6 bg-white rounded-full"></div>
          <div class="absolute inset-0 flex items-center justify-center">
            <div class="text-center">
              <div class="text-2xl font-bold text-neutral-900">Chart</div>
              <div class="text-sm text-neutral-600">Mock Data</div>
            </div>
          </div>
        </div>
      </div>

      <!-- デフォルト（棒グラフ風）の静的表示 -->
      <div v-else class="h-full flex items-end justify-center space-x-3 p-4 bg-neutral-50 rounded">
        <div class="w-8 bg-primary-500 rounded-t" style="height: 60%"></div>
        <div class="w-8 bg-success-500 rounded-t" style="height: 75%"></div>
        <div class="w-8 bg-warning-500 rounded-t" style="height: 45%"></div>
        <div class="w-8 bg-error-500 rounded-t" style="height: 80%"></div>
        <div class="w-8 bg-purple-500 rounded-t" style="height: 90%"></div>
        <div class="w-8 bg-cyan-500 rounded-t" style="height: 100%"></div>
      </div>

      <!-- モックアップ表示であることを示すオーバーレイ -->
      <div class="absolute top-2 right-2">
        <span class="px-2 py-1 bg-neutral-200 text-neutral-600 text-xs rounded">Mock Chart</span>
      </div>
    </div>
  </div>
</template>

<script setup>
// 静的モックアップ用のシンプルなprops定義
const props = defineProps({
  // チャートタイプ
  type: {
    type: String,
    default: 'bar',
    validator: (value) => ['line', 'bar', 'pie', 'doughnut', 'radar', 'polarArea'].includes(value)
  },

  // 基本設定
  title: {
    type: String,
    default: 'Chart Title'
  },

  description: {
    type: String,
    default: 'Chart description'
  },

  height: {
    type: Number,
    default: 300
  },

  // 表示制御
  showHeader: {
    type: Boolean,
    default: true
  }
})

// モックアップテンプレート用：動的処理なし・静的表示のみ
</script>

<style scoped>
.chart-component {
  @apply relative;
}

.chart-container {
  @apply relative min-h-[200px];
}

.chart-container canvas {
  @apply max-w-full h-auto;
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}

.animate-spin {
  animation: spin 1s linear infinite;
}
</style>