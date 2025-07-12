<template>
  <div class="maturity-score-panel bg-white rounded-lg shadow-lg p-6 border border-gray-200">
    <!-- Header -->
    <div class="mb-6">
      <div class="flex items-center justify-between">
        <h3 class="text-xl font-semibold text-gray-900">
          Model-A 成熟度スコア
        </h3>
        <div class="flex items-center space-x-2">
          <div class="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
          <span class="text-sm text-gray-500">リアルタイム監視中</span>
        </div>
      </div>
      <p class="text-sm text-gray-600 mt-1">
        デザインシステム活用度の包括的評価
      </p>
    </div>

    <!-- Overall Score -->
    <div class="mb-8">
      <div class="flex items-center justify-between mb-2">
        <span class="text-sm font-medium text-gray-700">総合スコア</span>
        <span :class="getScoreColor(maturityData.overall)" class="text-2xl font-bold">
          {{ maturityData.overall }}/100
        </span>
      </div>
      
      <!-- Progress Bar -->
      <div class="w-full bg-gray-200 rounded-full h-3 mb-3">
        <div 
          class="h-3 rounded-full transition-all duration-1000 ease-out"
          :class="getProgressBarColor(maturityData.overall)"
          :style="{ width: `${maturityData.overall}%` }"
        ></div>
      </div>
      
      <!-- Level Badge -->
      <div class="flex justify-center">
        <span 
          :class="getLevelBadgeColor(maturityData.level)"
          class="px-4 py-2 rounded-full text-sm font-medium"
        >
          {{ getLevelText(maturityData.level) }}
        </span>
      </div>
    </div>

    <!-- Dimension Scores -->
    <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
      <div 
        v-for="(dimension, key) in maturityData.dimensions" 
        :key="key"
        class="p-4 bg-gray-50 rounded-lg"
      >
        <h4 class="text-sm font-semibold text-gray-800 mb-2">
          {{ getDimensionName(key) }}
        </h4>
        <div class="space-y-2">
          <div 
            v-for="(score, metric) in dimension" 
            :key="metric"
            class="flex items-center justify-between text-xs"
          >
            <span class="text-gray-600">{{ getMetricName(metric) }}</span>
            <div class="flex items-center space-x-2">
              <div class="w-12 bg-gray-200 rounded-full h-1.5">
                <div 
                  class="h-1.5 rounded-full bg-blue-500 transition-all duration-500"
                  :style="{ width: `${score}%` }"
                ></div>
              </div>
              <span :class="getScoreColor(score)" class="font-medium min-w-[2rem]">
                {{ score }}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Recommendations -->
    <div v-if="maturityData.recommendations?.length > 0" class="mb-6">
      <h4 class="text-sm font-semibold text-gray-800 mb-3 flex items-center">
        <svg class="w-4 h-4 mr-2 text-amber-500" fill="currentColor" viewBox="0 0 20 20">
          <path fill-rule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clip-rule="evenodd" />
        </svg>
        改善提案
      </h4>
      <div class="space-y-2">
        <div 
          v-for="(recommendation, index) in maturityData.recommendations.slice(0, 3)" 
          :key="index"
          class="flex items-start space-x-2 text-sm"
        >
          <div class="w-1.5 h-1.5 bg-amber-400 rounded-full mt-2 flex-shrink-0"></div>
          <span class="text-gray-700">{{ recommendation }}</span>
        </div>
      </div>
    </div>

    <!-- Actions -->
    <div class="flex space-x-3">
      <button 
        @click="refreshScore"
        :disabled="isLoading"
        class="flex-1 bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200 flex items-center justify-center"
      >
        <svg 
          v-if="isLoading" 
          class="animate-spin -ml-1 mr-2 h-4 w-4 text-white" 
          fill="none" 
          viewBox="0 0 24 24"
        >
          <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
          <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
        </svg>
        <svg v-else class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
        </svg>
        {{ isLoading ? '分析中...' : '再分析' }}
      </button>
      
      <button 
        @click="exportReport"
        class="bg-gray-600 hover:bg-gray-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200 flex items-center"
      >
        <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
        レポート
      </button>
    </div>

    <!-- Last Updated -->
    <div class="mt-4 pt-4 border-t border-gray-100">
      <p class="text-xs text-gray-500">
        最終更新: {{ formatTimestamp(maturityData.timestamp) }}
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from 'vue'

interface MaturityDimensions {
  informationArchitecture: Record<string, number>
  componentUtilization: Record<string, number>
  emotionalDesign: Record<string, number>
  businessValue: Record<string, number>
}

interface MaturityData {
  overall: number
  dimensions: MaturityDimensions
  level: 'Beginner' | 'Intermediate' | 'Advanced' | 'Expert' | 'Master'
  recommendations: string[]
  timestamp: Date
}

// Props
interface Props {
  autoRefresh?: boolean
  refreshInterval?: number
}

const props = withDefaults(defineProps<Props>(), {
  autoRefresh: true,
  refreshInterval: 30000 // 30秒
})

// State
const isLoading = ref(false)
const maturityData = ref<MaturityData>({
  overall: 85,
  dimensions: {
    informationArchitecture: {
      hierarchy: 88,
      flow: 82,
      context: 85,
      purposeClarity: 90
    },
    componentUtilization: {
      coverage: 75,
      purposeClarity: 88,
      richnessLevel: 80,
      combination: 85
    },
    emotionalDesign: {
      consistency: 90,
      journey: 85,
      impact: 82,
      cultural: 88
    },
    businessValue: {
      persuasiveness: 85,
      differentiation: 88,
      actionability: 80,
      measurability: 75
    }
  },
  level: 'Expert',
  recommendations: [
    'コンポーネントカバレッジを80%以上に向上させてください',
    'ビジネス価値の測定指標を強化してください',
    'リッチネスレベル3の実装パターンを増やしてください'
  ],
  timestamp: new Date()
})

let refreshTimer: NodeJS.Timeout | null = null

// Computed
const dimensionNames = {
  informationArchitecture: '情報設計',
  componentUtilization: 'コンポーネント活用',
  emotionalDesign: '感情設計',
  businessValue: 'ビジネス価値'
}

const metricNames = {
  hierarchy: '階層性',
  flow: 'フロー',
  context: '文脈',
  purposeClarity: '目的明確性',
  coverage: 'カバレッジ',
  richnessLevel: 'リッチ度',
  combination: '組み合わせ',
  consistency: '一貫性',
  journey: 'ジャーニー',
  impact: 'インパクト',
  cultural: '文化的配慮',
  persuasiveness: '説得力',
  differentiation: '差別化',
  actionability: '行動誘発',
  measurability: '測定可能性'
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

const getProgressBarColor = (score: number): string => {
  if (score >= 90) return 'bg-green-500'
  if (score >= 80) return 'bg-blue-500'
  if (score >= 70) return 'bg-yellow-500'
  return 'bg-red-500'
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

const getMetricName = (key: string): string => {
  return metricNames[key as keyof typeof metricNames] || key
}

const getLevelText = (level: string): string => {
  return levelTexts[level as keyof typeof levelTexts] || level
}

const formatTimestamp = (timestamp: Date): string => {
  return new Intl.DateTimeFormat('ja-JP', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit'
  }).format(new Date(timestamp))
}

const refreshScore = async (): Promise<void> => {
  isLoading.value = true
  
  try {
    // 実際の実装では maturity-score.ts の分析ロジックを呼び出す
    await new Promise(resolve => setTimeout(resolve, 2000)) // シミュレーション
    
    // スコアを少し変動させる（実際の分析結果をシミュレーション）
    const variation = () => Math.floor(Math.random() * 10) - 5
    
    maturityData.value = {
      ...maturityData.value,
      overall: Math.max(0, Math.min(100, maturityData.value.overall + variation())),
      timestamp: new Date()
    }
    
    console.log('✅ 成熟度スコアを更新しました')
  } catch (error) {
    console.error('❌ 成熟度スコア更新に失敗:', error)
  } finally {
    isLoading.value = false
  }
}

const exportReport = (): void => {
  const report = {
    timestamp: new Date().toISOString(),
    overall: maturityData.value.overall,
    level: maturityData.value.level,
    dimensions: maturityData.value.dimensions,
    recommendations: maturityData.value.recommendations
  }
  
  const blob = new Blob([JSON.stringify(report, null, 2)], {
    type: 'application/json'
  })
  
  const url = URL.createObjectURL(blob)
  const a = document.createElement('a')
  a.href = url
  a.download = `model-a-maturity-report-${new Date().toISOString().split('T')[0]}.json`
  document.body.appendChild(a)
  a.click()
  document.body.removeChild(a)
  URL.revokeObjectURL(url)
  
  console.log('📊 成熟度レポートをダウンロードしました')
}

const startAutoRefresh = (): void => {
  if (props.autoRefresh && props.refreshInterval > 0) {
    refreshTimer = setInterval(() => {
      refreshScore()
    }, props.refreshInterval)
  }
}

const stopAutoRefresh = (): void => {
  if (refreshTimer) {
    clearInterval(refreshTimer)
    refreshTimer = null
  }
}

// Lifecycle
onMounted(() => {
  startAutoRefresh()
})

onUnmounted(() => {
  stopAutoRefresh()
})

// Expose methods for parent components
defineExpose({
  refreshScore,
  exportReport
})
</script>

<style scoped>
.maturity-score-panel {
  /* カスタムスタイルが必要な場合はここに追加 */
}

/* アニメーション効果 */
@keyframes slideIn {
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.maturity-score-panel {
  animation: slideIn 0.5s ease-out;
}
</style>