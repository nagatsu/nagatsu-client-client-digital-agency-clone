<template>
  <div :class="containerClasses" class="inline-flex items-center space-x-2">
    <!-- コントラスト比バッジ -->
    <span
      :class="badgeClasses"
      class="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium transition-colors duration-200"
      :aria-label="ariaLabel"
      role="img"
    >
      <component
        v-if="showIcon"
        :is="statusIcon"
        :class="iconClasses"
        class="w-3 h-3 mr-1"
        aria-hidden="true"
      />
      {{ displayRatio }}
    </span>
    
    <!-- 詳細情報（オプション） -->
    <div v-if="showDetails" :class="detailsClasses" class="text-xs">
      <span class="text-gray-600 dark:text-gray-400">
        {{ foregroundColor }} / {{ backgroundColor }}
      </span>
    </div>
    
    <!-- ツールチップ -->
    <div
      v-if="showTooltip"
      :class="tooltipClasses"
      class="absolute z-10 px-3 py-2 text-sm font-medium text-white bg-gray-900 dark:bg-gray-700 rounded-lg shadow-sm opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200"
      role="tooltip"
    >
      <div class="space-y-1">
        <div class="font-semibold">コントラスト比: {{ ratio }}:1</div>
        <div class="text-gray-300">
          前景色: {{ foregroundColor }}<br>
          背景色: {{ backgroundColor }}
        </div>
        <div class="border-t border-gray-600 pt-1 mt-1">
          <div :class="complianceTextClasses">
            {{ complianceText }}
          </div>
        </div>
      </div>
      
      <!-- ツールチップ矢印 -->
      <div class="absolute w-2 h-2 bg-gray-900 dark:bg-gray-700 transform rotate-45 -bottom-1 left-1/2 -translate-x-1/2" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'

type ComplianceLevel = 'AA' | 'AAA'
type TextSize = 'normal' | 'large'
type RatioStatus = 'pass' | 'fail' | 'warning'

interface Props {
  ratio: number
  foregroundColor: string
  backgroundColor: string
  textSize?: TextSize
  requiredLevel?: ComplianceLevel
  showIcon?: boolean
  showDetails?: boolean
  showTooltip?: boolean
  customThresholds?: {
    AA_normal: number
    AA_large: number
    AAA_normal: number
    AAA_large: number
  }
}

const props = withDefaults(defineProps<Props>(), {
  textSize: 'normal',
  requiredLevel: 'AA',
  showIcon: true,
  showDetails: false,
  showTooltip: true,
  customThresholds: () => ({
    AA_normal: 4.5,
    AA_large: 3.0,
    AAA_normal: 7.0,
    AAA_large: 4.5
  })
})

// 計算されたプロパティ
const displayRatio = computed(() => {
  return `${props.ratio.toFixed(1)}:1`
})

const ratioStatus = computed((): RatioStatus => {
  const thresholds = props.customThresholds
  const isLargeText = props.textSize === 'large'
  
  // 要求されるレベルに基づいて閾値を決定
  let requiredRatio: number
  
  if (props.requiredLevel === 'AAA') {
    requiredRatio = isLargeText ? thresholds.AAA_large : thresholds.AAA_normal
  } else {
    requiredRatio = isLargeText ? thresholds.AA_large : thresholds.AA_normal
  }
  
  if (props.ratio >= requiredRatio) {
    return 'pass'
  } else if (props.ratio >= (isLargeText ? thresholds.AA_large : thresholds.AA_normal)) {
    return 'warning'
  } else {
    return 'fail'
  }
})

const complianceText = computed(() => {
  const isLargeText = props.textSize === 'large'
  const textSizeLabel = isLargeText ? '大きなテキスト' : '通常テキスト'
  
  switch (ratioStatus.value) {
    case 'pass':
      return `✅ WCAG ${props.requiredLevel} 準拠 (${textSizeLabel})`
    case 'warning':
      return `⚠️ WCAG AA 準拠、AAA 未達 (${textSizeLabel})`
    case 'fail':
      return `❌ WCAG 基準未達 (${textSizeLabel})`
    default:
      return ''
  }
})

const ariaLabel = computed(() => {
  return `コントラスト比 ${displayRatio.value}、${complianceText.value}`
})

// アイコンコンポーネント
const statusIcon = computed(() => {
  switch (ratioStatus.value) {
    case 'pass':
      return {
        template: `
          <svg viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
          </svg>
        `
      }
    case 'warning':
      return {
        template: `
          <svg viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clip-rule="evenodd" />
          </svg>
        `
      }
    case 'fail':
      return {
        template: `
          <svg viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd" />
          </svg>
        `
      }
    default:
      return null
  }
})

// スタイルクラス
const containerClasses = computed(() => {
  const base = 'inline-flex items-center space-x-2'
  const tooltip = props.showTooltip ? 'group relative' : ''
  
  return [base, tooltip]
})

const badgeClasses = computed(() => {
  const base = 'inline-flex items-center px-2 py-1 rounded-full text-xs font-medium transition-colors duration-200'
  
  const statusColors = {
    pass: 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300',
    warning: 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300',
    fail: 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300'
  }
  
  return [base, statusColors[ratioStatus.value]]
})

const iconClasses = computed(() => {
  const statusColors = {
    pass: 'text-green-600 dark:text-green-400',
    warning: 'text-yellow-600 dark:text-yellow-400',
    fail: 'text-red-600 dark:text-red-400'
  }
  
  return statusColors[ratioStatus.value]
})

const detailsClasses = computed(() => {
  return 'text-xs text-gray-600 dark:text-gray-400'
})

const tooltipClasses = computed(() => {
  return 'absolute z-10 px-3 py-2 text-sm font-medium text-white bg-gray-900 dark:bg-gray-700 rounded-lg shadow-sm opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 bottom-full left-1/2 transform -translate-x-1/2 -translate-y-2 whitespace-nowrap min-w-max'
})

const complianceTextClasses = computed(() => {
  const statusColors = {
    pass: 'text-green-300',
    warning: 'text-yellow-300',
    fail: 'text-red-300'
  }
  
  return statusColors[ratioStatus.value]
})

// ユーティリティ関数（外部からも使用可能）
const calculateContrastRatio = (foreground: string, background: string): number => {
  // 16進数カラーコードをRGBに変換
  const hexToRgb = (hex: string) => {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex)
    return result ? {
      r: parseInt(result[1], 16),
      g: parseInt(result[2], 16),
      b: parseInt(result[3], 16)
    } : null
  }
  
  // 相対輝度を計算
  const getLuminance = (r: number, g: number, b: number) => {
    const [rs, gs, bs] = [r, g, b].map(c => {
      c = c / 255
      return c <= 0.03928 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4)
    })
    return 0.2126 * rs + 0.7152 * gs + 0.0722 * bs
  }
  
  const fg = hexToRgb(foreground)
  const bg = hexToRgb(background)
  
  if (!fg || !bg) return 1
  
  const fgLuminance = getLuminance(fg.r, fg.g, fg.b)
  const bgLuminance = getLuminance(bg.r, bg.g, bg.b)
  
  const lighter = Math.max(fgLuminance, bgLuminance)
  const darker = Math.min(fgLuminance, bgLuminance)
  
  return (lighter + 0.05) / (darker + 0.05)
}

// 公開メソッド
defineExpose({
  calculateContrastRatio,
  ratioStatus: ratioStatus.value,
  complianceText: complianceText.value
})
</script>