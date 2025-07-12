<template>
  <div class="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
    <!-- Header with Live Maturity Score -->
    <header class="bg-white/80 backdrop-blur-sm border-b border-gray-200 sticky top-0 z-50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex items-center justify-between h-16">
          <div class="flex items-center space-x-4">
            <div class="text-2xl font-bold text-gray-900">
              🚀 Model-A Platform
            </div>
            <div class="hidden md:flex items-center space-x-2 bg-blue-50 px-3 py-1 rounded-full">
              <div class="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span class="text-sm font-medium text-blue-900">
                Live Quality: {{ overallScore }}/100 ({{ level }})
              </span>
            </div>
          </div>
          
          <div class="flex items-center space-x-4">
            <button 
              @click="refreshScore"
              :disabled="isLoading"
              class="p-2 text-gray-600 hover:text-gray-900 rounded-lg transition-colors"
              :class="{ 'animate-spin': isLoading }"
            >
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>

    <main class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <!-- Hero Section with Integrated Maturity Score -->
      <section class="text-center mb-16">
        <div class="mb-8">
          <h1 class="text-5xl md:text-6xl font-black text-gray-900 mb-6 tracking-tight">
            Model-A<br>
            <span class="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Design System
            </span>
          </h1>
          <p class="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            科学的品質管理による<span class="font-semibold text-blue-600">94.5/100品質</span>のデザインシステム<br>
            営業担当者がクライアントを感動させる武器
          </p>
        </div>

        <!-- Featured Maturity Score Display -->
        <div class="max-w-4xl mx-auto mb-12">
          <div class="bg-white rounded-2xl shadow-xl border border-gray-200 p-8">
            <!-- Quality Score Section -->
            <div class="mb-8">
              <h3 class="text-2xl font-bold text-gray-900 mb-6 text-center">🎯 Model-A 品質スコア</h3>
              
              <div class="flex items-center justify-center mb-6">
                <div class="text-center">
                  <div class="text-6xl font-black mb-2" :class="getScoreColor(overallScore)">
                    {{ overallScore }}
                  </div>
                  <div class="text-lg text-gray-600">/ 100</div>
                  <div :class="getLevelBadgeColor(level)" class="inline-block px-4 py-2 rounded-full text-sm font-medium mt-2">
                    {{ getLevelText(level) }}
                  </div>
                </div>
              </div>
              
              <!-- Quick Dimension Overview -->
              <div class="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                <div 
                  v-for="(score, dimension) in dimensionScores" 
                  :key="dimension"
                  class="text-center p-4 bg-gray-50 rounded-lg"
                >
                  <div class="text-2xl font-bold mb-1" :class="getScoreColor(score)">
                    {{ score }}
                  </div>
                  <div class="text-xs text-gray-600">
                    {{ getDimensionName(dimension) }}
                  </div>
                </div>
              </div>

              <!-- Top Achievement -->
              <div v-if="topPerformingDimension" class="bg-green-50 border border-green-200 rounded-lg p-4 mb-6">
                <div class="flex items-center justify-center space-x-2">
                  <svg class="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                  </svg>
                  <span class="text-green-800 font-medium">
                    強み: {{ getDimensionName(topPerformingDimension) }}が特に優秀
                  </span>
                </div>
              </div>
            </div>

            <!-- Design System Foundation -->
            <div class="border-t border-gray-200 pt-8 mb-8">
              <h3 class="text-2xl font-bold text-gray-900 mb-6 text-center">🎨 Model-A デザインシステム基盤</h3>
              
              <!-- Typography Scale -->
              <div class="mb-8">
                <h4 class="text-lg font-semibold text-gray-800 mb-4">タイプフェイス階層</h4>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div class="space-y-3">
                    <div class="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                      <span class="text-4xl font-black">Aa</span>
                      <div class="text-right">
                        <div class="text-sm font-medium text-gray-900">Display Large</div>
                        <div class="text-xs text-gray-600">56px・Bold</div>
                      </div>
                    </div>
                    <div class="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                      <span class="text-3xl font-bold">Aa</span>
                      <div class="text-right">
                        <div class="text-sm font-medium text-gray-900">Display Medium</div>
                        <div class="text-xs text-gray-600">48px・Bold</div>
                      </div>
                    </div>
                    <div class="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                      <span class="text-2xl font-semibold">Aa</span>
                      <div class="text-right">
                        <div class="text-sm font-medium text-gray-900">Heading 1</div>
                        <div class="text-xs text-gray-600">36px・Semibold</div>
                      </div>
                    </div>
                  </div>
                  <div class="space-y-3">
                    <div class="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                      <span class="text-xl font-semibold">Aa</span>
                      <div class="text-right">
                        <div class="text-sm font-medium text-gray-900">Heading 2</div>
                        <div class="text-xs text-gray-600">32px・Semibold</div>
                      </div>
                    </div>
                    <div class="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                      <span class="text-lg">Aa</span>
                      <div class="text-right">
                        <div class="text-sm font-medium text-gray-900">Body Large</div>
                        <div class="text-xs text-gray-600">18px・Regular</div>
                      </div>
                    </div>
                    <div class="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                      <span class="text-base">Aa</span>
                      <div class="text-right">
                        <div class="text-sm font-medium text-gray-900">Body Regular</div>
                        <div class="text-xs text-gray-600">16px・Regular</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Color Palette -->
              <div class="mb-8">
                <h4 class="text-lg font-semibold text-gray-800 mb-4">カラーパレット（デジタル庁準拠）</h4>
                <div class="grid grid-cols-2 md:grid-cols-5 gap-4">
                  <!-- Primary Blue -->
                  <div class="text-center">
                    <div class="w-full h-16 bg-blue-600 rounded-lg mb-2 border border-gray-200"></div>
                    <div class="text-sm font-medium text-gray-900">Primary</div>
                    <div class="text-xs text-gray-600">#0969da</div>
                  </div>
                  <!-- Success Green -->
                  <div class="text-center">
                    <div class="w-full h-16 rounded-lg mb-2 border border-gray-200" style="background-color: #1f883d;"></div>
                    <div class="text-sm font-medium text-gray-900">Success</div>
                    <div class="text-xs text-gray-600">#1f883d</div>
                  </div>
                  <!-- Warning Orange -->
                  <div class="text-center">
                    <div class="w-full h-16 rounded-lg mb-2 border border-gray-200" style="background-color: #fb8500;"></div>
                    <div class="text-sm font-medium text-gray-900">Warning</div>
                    <div class="text-xs text-gray-600">#fb8500</div>
                  </div>
                  <!-- Error Red -->
                  <div class="text-center">
                    <div class="w-full h-16 rounded-lg mb-2 border border-gray-200" style="background-color: #cf222e;"></div>
                    <div class="text-sm font-medium text-gray-900">Error</div>
                    <div class="text-xs text-gray-600">#cf222e</div>
                  </div>
                  <!-- Neutral Gray -->
                  <div class="text-center">
                    <div class="w-full h-16 rounded-lg mb-2 border border-gray-200" style="background-color: #656d76;"></div>
                    <div class="text-sm font-medium text-gray-900">Neutral</div>
                    <div class="text-xs text-gray-600">#656d76</div>
                  </div>
                </div>
              </div>

              <!-- Spacing System -->
              <div class="mb-6">
                <h4 class="text-lg font-semibold text-gray-800 mb-4">スペーシングシステム（8px Grid）</h4>
                <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div class="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                    <div class="w-1 h-6 bg-blue-600"></div>
                    <div>
                      <div class="text-sm font-medium">4px</div>
                      <div class="text-xs text-gray-600">最小間隔</div>
                    </div>
                  </div>
                  <div class="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                    <div class="w-2 h-6 bg-blue-600"></div>
                    <div>
                      <div class="text-sm font-medium">8px</div>
                      <div class="text-xs text-gray-600">基本単位</div>
                    </div>
                  </div>
                  <div class="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                    <div class="w-4 h-6 bg-blue-600"></div>
                    <div>
                      <div class="text-sm font-medium">16px</div>
                      <div class="text-xs text-gray-600">標準間隔</div>
                    </div>
                  </div>
                  <div class="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                    <div class="w-8 h-6 bg-blue-600"></div>
                    <div>
                      <div class="text-sm font-medium">32px</div>
                      <div class="text-xs text-gray-600">大間隔</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Call to Action -->
            <div class="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                @click="navigateToComponents"
                class="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-3 rounded-lg transition-colors duration-200 flex items-center justify-center"
              >
                <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
                コンポーネントを探索
              </button>
              <button 
                @click="exportDetailedReport"
                class="bg-gray-600 hover:bg-gray-700 text-white font-semibold px-8 py-3 rounded-lg transition-colors duration-200 flex items-center justify-center"
              >
                <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                品質レポート出力
              </button>
            </div>
          </div>
        </div>
      </section>

      <!-- Feature Highlights -->
      <section class="mb-16">
        <div class="grid md:grid-cols-3 gap-8">
          <!-- Component Purpose Framework -->
          <div class="bg-white rounded-xl shadow-lg p-8 border border-gray-200 hover:shadow-xl transition-shadow duration-200">
            <div class="text-4xl mb-4">🎯</div>
            <h3 class="text-xl font-bold text-gray-900 mb-3">Purpose Framework</h3>
            <p class="text-gray-600 mb-4">
              51コンポーネントすべてに明確なPurpose定義。なぜそのコンポーネントを使うかが科学的に裏付けられています。
            </p>
            <div class="bg-blue-50 rounded-lg p-3">
              <div class="text-sm text-blue-900 font-medium">現在の定義率</div>
              <div class="text-2xl font-bold text-blue-600">100%</div>
            </div>
          </div>

          <!-- Emotional Design System -->
          <div class="bg-white rounded-xl shadow-lg p-8 border border-gray-200 hover:shadow-xl transition-shadow duration-200">
            <div class="text-4xl mb-4">💝</div>
            <h3 class="text-xl font-bold text-gray-900 mb-3">感情設計システム</h3>
            <p class="text-gray-600 mb-4">
              Trust・Excitement・Serenityの3軸による感情フロー設計。ユーザーの心を動かすインターフェース。
            </p>
            <div class="bg-purple-50 rounded-lg p-3">
              <div class="text-sm text-purple-900 font-medium">感情設計一貫性</div>
              <div class="text-2xl font-bold text-purple-600">{{ dimensionScores?.emotionalDesign }}%</div>
            </div>
          </div>

          <!-- Industry Optimization -->
          <div class="bg-white rounded-xl shadow-lg p-8 border border-gray-200 hover:shadow-xl transition-shadow duration-200">
            <div class="text-4xl mb-4">🏢</div>
            <h3 class="text-xl font-bold text-gray-900 mb-3">業界最適化</h3>
            <p class="text-gray-600 mb-4">
              医療・SaaS・EC・飲食・教育・行政の6業界に最適化された配色戦略とコンポーネント組み合わせ。
            </p>
            <div class="bg-green-50 rounded-lg p-3">
              <div class="text-sm text-green-900 font-medium">対応業界数</div>
              <div class="text-2xl font-bold text-green-600">6業界</div>
            </div>
          </div>
        </div>
      </section>

      <!-- Detailed Maturity Analytics -->
      <section class="mb-16">
        <div class="bg-white rounded-2xl shadow-xl border border-gray-200 p-8">
          <h2 class="text-3xl font-bold text-gray-900 mb-8 text-center">📊 詳細品質分析</h2>
          
          <!-- Full Maturity Score Panel -->
          <MaturityScorePanel 
            :auto-refresh="true"
            :refresh-interval="60000"
            class="mb-8"
          />

          <!-- Quick Insights -->
          <div v-if="recommendations.length > 0" class="bg-amber-50 border border-amber-200 rounded-lg p-6">
            <h3 class="text-lg font-semibold text-amber-900 mb-4 flex items-center">
              <svg class="w-5 h-5 mr-2 text-amber-600" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clip-rule="evenodd" />
              </svg>
              今すぐ改善できるポイント
            </h3>
            <div class="space-y-2">
              <div 
                v-for="(recommendation, index) in recommendations.slice(0, 3)" 
                :key="index"
                class="flex items-start space-x-3"
              >
                <div class="w-6 h-6 bg-amber-400 text-white rounded-full flex items-center justify-center text-xs font-bold mt-0.5">
                  {{ index + 1 }}
                </div>
                <span class="text-amber-800">{{ recommendation }}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Platform Access -->
      <section class="mb-16">
        <h2 class="text-3xl font-bold text-gray-900 mb-8 text-center">🔗 プラットフォームアクセス</h2>
        <div class="grid md:grid-cols-2 gap-8">
          <!-- Design System -->
          <div class="bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl shadow-lg p-8 text-white">
            <div class="text-4xl mb-4">🎨</div>
            <h3 class="text-2xl font-bold mb-3">デザインシステム</h3>
            <p class="text-blue-100 mb-6">
              51コンポーネント・6業界対応の<br>
              Model-Aデザインシステム全体
            </p>
            <button 
              @click="navigateToDesignSystem"
              class="bg-white text-blue-600 font-semibold px-6 py-3 rounded-lg hover:bg-blue-50 transition-colors duration-200 w-full"
            >
              デザインシステムを探索
            </button>
          </div>

          <!-- Management Dashboard -->
          <div class="bg-gradient-to-br from-green-600 to-green-700 rounded-xl shadow-lg p-8 text-white">
            <div class="text-4xl mb-4">📊</div>
            <h3 class="text-2xl font-bold mb-3">管理ダッシュボード</h3>
            <p class="text-green-100 mb-6">
              クライアント専用Storybook<br>
              自動生成・品質管理システム
            </p>
            <button 
              @click="navigateToDashboard"
              class="bg-white text-green-600 font-semibold px-6 py-3 rounded-lg hover:bg-green-50 transition-colors duration-200 w-full"
            >
              ダッシュボードを開く
            </button>
          </div>
        </div>
      </section>

      <!-- API Information -->
      <section class="mb-16">
        <div class="bg-gray-900 rounded-2xl shadow-xl p-8 text-white">
          <h2 class="text-2xl font-bold mb-6 text-center">🔗 API エンドポイント</h2>
          <div class="grid md:grid-cols-3 gap-6">
            <div class="bg-gray-800 rounded-lg p-4">
              <code class="text-green-400 block mb-2">/api/info</code>
              <p class="text-gray-300 text-sm">Model-A システム情報</p>
            </div>
            <div class="bg-gray-800 rounded-lg p-4">
              <code class="text-green-400 block mb-2">/api/components</code>
              <p class="text-gray-300 text-sm">コンポーネント一覧・定義</p>
            </div>
            <div class="bg-gray-800 rounded-lg p-4">
              <code class="text-green-400 block mb-2">/api/maturity</code>
              <p class="text-gray-300 text-sm">リアルタイム品質スコア</p>
            </div>
          </div>
        </div>
      </section>
    </main>

    <!-- Footer -->
    <footer class="bg-white border-t border-gray-200">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div class="flex items-center justify-between">
          <div class="flex items-center space-x-4">
            <div class="text-sm text-gray-600">
              Model-A Design System Platform
            </div>
            <div :class="getHealthStatusColor()" class="inline-flex items-center space-x-2 px-3 py-1 rounded-full text-xs font-medium">
              <div class="w-2 h-2 rounded-full" :class="getHealthDotColor()"></div>
              <span>{{ getHealthStatusText() }}</span>
            </div>
          </div>
          
          <div class="text-sm text-gray-500">
            最終更新: {{ formatTimestamp(state.lastUpdated) }}
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import MaturityScorePanel from '../../components/MaturityScorePanel.vue'
import { useMaturityScore } from '../../composables/useMaturityScore'

// Maturity Score Integration
const {
  state,
  overallScore,
  level,
  isHealthy,
  needsImprovement,
  recommendations,
  dimensionScores,
  topPerformingDimension,
  refreshScore,
  exportReport
} = useMaturityScore({
  autoRefresh: true,
  refreshInterval: 60000, // 1分間隔
  onScoreUpdate: (score) => {
    console.log('🎯 Welcome Page: Maturity score updated:', score.overall)
  }
})

// Computed Properties
const isLoading = computed(() => state.value.isLoading)

const dimensionNames = {
  informationArchitecture: '情報設計',
  componentUtilization: 'コンポーネント活用',
  emotionalDesign: '感情設計',
  businessValue: 'ビジネス価値'
}

const levelTexts = {
  Beginner: '初級者',
  Intermediate: '中級者',
  Advanced: '上級者',
  Expert: '専門家',
  Master: 'マスター'
}

// Methods
const getScoreColor = (score: number): string => {
  if (score >= 90) return 'text-green-600'
  if (score >= 80) return 'text-blue-600'
  if (score >= 70) return 'text-yellow-600'
  return 'text-red-600'
}

const getLevelBadgeColor = (level: string): string => {
  const colors = {
    Beginner: 'bg-gray-100 text-gray-800',
    Intermediate: 'bg-blue-100 text-blue-800',
    Advanced: 'bg-yellow-100 text-yellow-800',
    Expert: 'bg-green-100 text-green-800',
    Master: 'bg-purple-100 text-purple-800'
  }
  return colors[level as keyof typeof colors] || colors.Beginner
}

const getDimensionName = (key: string): string => {
  return dimensionNames[key as keyof typeof dimensionNames] || key
}

const getLevelText = (level: string): string => {
  return levelTexts[level as keyof typeof levelTexts] || level
}

const getHealthStatusColor = (): string => {
  if (isHealthy.value) return 'bg-green-100 text-green-800'
  if (needsImprovement.value) return 'bg-red-100 text-red-800'
  return 'bg-yellow-100 text-yellow-800'
}

const getHealthDotColor = (): string => {
  if (isHealthy.value) return 'bg-green-500'
  if (needsImprovement.value) return 'bg-red-500'
  return 'bg-yellow-500'
}

const getHealthStatusText = (): string => {
  if (isHealthy.value) return 'システム正常'
  if (needsImprovement.value) return '改善が必要'
  return '注意が必要'
}

const formatTimestamp = (timestamp: Date | null): string => {
  if (!timestamp) return '未更新'
  
  return new Intl.DateTimeFormat('ja-JP', {
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit'
  }).format(timestamp)
}

// Navigation Methods
const navigateToComponents = (): void => {
  window.location.href = '/components'
}

const navigateToDesignSystem = (): void => {
  window.location.href = '/'
}

const navigateToDashboard = (): void => {
  window.location.href = '/dashboard'
}

const exportDetailedReport = (): void => {
  exportReport()
  
  // 追加のアナリティクス情報も含めた詳細レポート
  const enhancedReport = {
    timestamp: new Date().toISOString(),
    platform: 'Model-A Welcome Page',
    version: '2.0.0',
    maturityScore: overallScore.value,
    level: level.value,
    dimensionScores: dimensionScores.value,
    recommendations: recommendations.value,
    topPerformingArea: topPerformingDimension.value,
    healthStatus: isHealthy.value ? 'healthy' : needsImprovement.value ? 'needs-improvement' : 'warning',
    exportedFrom: 'welcome-page'
  }
  
  console.log('📊 Enhanced report generated:', enhancedReport)
}
</script>

<style scoped>
/* カスタムアニメーション */
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.fade-in-up {
  animation: fadeInUp 0.6s ease-out;
}

/* グラデーション背景 */
.bg-gradient-to-br {
  background-attachment: fixed;
}

/* カードホバー効果 */
.hover\:shadow-xl:hover {
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
}

/* スムーズスクロール */
html {
  scroll-behavior: smooth;
}
</style>