<template>
  <div class="min-h-screen bg-neutral-50 py-8">
    <div class="container mx-auto px-4">
      <h1 class="text-heading-1 text-neutral-900 mb-8 text-center">
        ChartComponent テスト
      </h1>

      <div class="grid md:grid-cols-2 gap-8">
        <!-- 売上推移チャート -->
        <div>
          <h2 class="text-heading-3 font-semibold text-neutral-900 mb-4">
            月次売上推移
          </h2>
          <ChartComponent
            type="line"
            :data="salesData"
            title="売上推移"
            description="月次売上高の推移"
            :height="300"
            :show-header="true"
          />
        </div>

        <!-- ユーザー構成チャート -->
        <div>
          <h2 class="text-heading-3 font-semibold text-neutral-900 mb-4">
            ユーザー構成
          </h2>
          <ChartComponent
            type="doughnut"
            :data="userData"
            title="ユーザータイプ別構成"
            description="アクティブユーザーの内訳"
            :height="300"
            :show-header="true"
          />
        </div>

        <!-- 週間アクセス数 -->
        <div>
          <h2 class="text-heading-3 font-semibold text-neutral-900 mb-4">
            週間アクセス数
          </h2>
          <ChartComponent
            type="bar"
            :data="accessData"
            title="週間アクセス解析"
            description="曜日別のアクセス数"
            :height="300"
            :show-header="true"
          />
        </div>

        <!-- パフォーマンススコア -->
        <div>
          <h2 class="text-heading-3 font-semibold text-neutral-900 mb-4">
            パフォーマンススコア
          </h2>
          <ChartComponent
            type="radar"
            :data="performanceData"
            title="Webサイトパフォーマンス"
            description="Lighthouseスコア"
            :height="300"
            :show-header="true"
          />
        </div>
      </div>

      <!-- 実装状況 -->
      <div class="mt-12 bg-white rounded-xl p-8 shadow-lg">
        <h2 class="text-heading-3 font-semibold text-neutral-900 mb-6">
          ChartComponent 実装状況
        </h2>
        
        <div class="grid md:grid-cols-2 gap-6">
          <div>
            <h3 class="text-heading-5 font-medium text-neutral-900 mb-3">
              実装済み機能
            </h3>
            <ul class="space-y-2 text-body-sm text-neutral-700">
              <li class="flex items-center">
                <svg class="h-4 w-4 text-success-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                </svg>
                Chart.js v4統合
              </li>
              <li class="flex items-center">
                <svg class="h-4 w-4 text-success-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                </svg>
                基本チャートタイプ対応
              </li>
              <li class="flex items-center">
                <svg class="h-4 w-4 text-success-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                </svg>
                レスポンシブ対応
              </li>
              <li class="flex items-center">
                <svg class="h-4 w-4 text-success-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                </svg>
                エラーハンドリング
              </li>
            </ul>
          </div>

          <div>
            <h3 class="text-heading-5 font-medium text-neutral-900 mb-3">
              対応チャートタイプ
            </h3>
            <ul class="space-y-2 text-body-sm text-neutral-700">
              <li>• Line Chart（線グラフ）</li>
              <li>• Bar Chart（棒グラフ）</li>
              <li>• Pie Chart（円グラフ）</li>
              <li>• Doughnut Chart（ドーナツ）</li>
              <li>• Radar Chart（レーダー）</li>
              <li>• Polar Area Chart（極座標）</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import ChartComponent from '@/components/advanced/ChartComponent.vue'

// サンプルデータ
const salesData = ref({
  labels: ['1月', '2月', '3月', '4月', '5月', '6月'],
  datasets: [
    {
      label: '売上高 (万円)',
      data: [320, 450, 380, 520, 480, 620],
      backgroundColor: 'rgba(59, 130, 246, 0.1)',
      borderColor: 'rgb(59, 130, 246)',
      borderWidth: 3,
      tension: 0.4,
      fill: true
    }
  ]
})

const userData = ref({
  labels: ['新規ユーザー', 'リピートユーザー', 'プレミアムユーザー', '休眠ユーザー'],
  datasets: [
    {
      label: 'ユーザー数',
      data: [1250, 890, 340, 120],
      backgroundColor: [
        'rgba(59, 130, 246, 0.8)',
        'rgba(16, 185, 129, 0.8)',
        'rgba(245, 158, 11, 0.8)',
        'rgba(239, 68, 68, 0.8)'
      ]
    }
  ]
})

const accessData = ref({
  labels: ['月', '火', '水', '木', '金', '土', '日'],
  datasets: [
    {
      label: 'アクセス数',
      data: [2400, 1398, 9800, 3908, 4800, 3800, 4300],
      backgroundColor: 'rgba(16, 185, 129, 0.8)',
      borderColor: 'rgb(16, 185, 129)',
      borderWidth: 2
    }
  ]
})

const performanceData = ref({
  labels: ['パフォーマンス', 'アクセシビリティ', 'ベストプラクティス', 'SEO', 'PWA'],
  datasets: [
    {
      label: 'スコア',
      data: [85, 92, 78, 88, 90],
      backgroundColor: 'rgba(139, 92, 246, 0.2)',
      borderColor: 'rgb(139, 92, 246)',
      pointBackgroundColor: 'rgb(139, 92, 246)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgb(139, 92, 246)'
    }
  ]
})
</script>