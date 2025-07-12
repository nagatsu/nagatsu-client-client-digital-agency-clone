<template>
  <div :class="containerClasses">
    <!-- プログレスバー -->
    <div v-if="type === 'bar'" class="w-full">
      <!-- ラベル -->
      <div v-if="showLabel" class="flex justify-between items-center mb-2">
        <span :class="labelClasses">{{ label }}</span>
        <span :class="percentageClasses">{{ Math.round(percentage) }}%</span>
      </div>
      
      <!-- バー -->
      <div :class="trackClasses">
        <div
          :class="barClasses"
          :style="{ width: `${Math.min(100, Math.max(0, percentage))}%` }"
          role="progressbar"
          :aria-valuenow="percentage"
          :aria-valuemin="0"
          :aria-valuemax="100"
          :aria-label="ariaLabel"
        >
          <div v-if="animated" :class="animationClasses"></div>
        </div>
      </div>
      
      <!-- 説明テキスト -->
      <div v-if="description" :class="descriptionClasses">
        {{ description }}
      </div>
    </div>
    
    <!-- 円形プログレス -->
    <div v-else-if="type === 'circle'" class="relative inline-flex items-center justify-center">
      <svg :class="circleClasses" :width="circleSize" :height="circleSize">
        <!-- 背景円 -->
        <circle
          :cx="circleSize / 2"
          :cy="circleSize / 2"
          :r="radius"
          fill="transparent"
          :class="circleTrackClasses"
          :stroke-width="strokeWidth"
        />
        <!-- プログレス円 -->
        <circle
          :cx="circleSize / 2"
          :cy="circleSize / 2"
          :r="radius"
          fill="transparent"
          :class="circleBarClasses"
          :stroke-width="strokeWidth"
          :stroke-dasharray="circumference"
          :stroke-dashoffset="strokeDashoffset"
          :style="{ transition: animated ? 'stroke-dashoffset 0.5s ease-in-out' : 'none' }"
          role="progressbar"
          :aria-valuenow="percentage"
          :aria-valuemin="0"
          :aria-valuemax="100"
          :aria-label="ariaLabel"
        />
      </svg>
      
      <!-- 中央のテキスト -->
      <div class="absolute inset-0 flex items-center justify-center">
        <span :class="circleTextClasses">
          <slot name="center-content">
            {{ Math.round(percentage) }}%
          </slot>
        </span>
      </div>
    </div>
    
    <!-- スピナー -->
    <div v-else-if="type === 'spinner'" class="flex items-center">
      <svg :class="spinnerClasses" fill="none" viewBox="0 0 24 24">
        <circle
          class="opacity-25"
          cx="12"
          cy="12"
          r="10"
          stroke="currentColor"
          stroke-width="4"
        />
        <path
          class="opacity-75"
          fill="currentColor"
          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
        />
      </svg>
      
      <span v-if="showLabel" :class="spinnerLabelClasses">
        {{ label }}
      </span>
    </div>
    
    <!-- ステップ進行表示 -->
    <div v-else-if="type === 'steps'" class="w-full">
      <div class="flex items-center">
        <div
          v-for="(step, index) in steps"
          :key="index"
          class="flex items-center"
        >
          <!-- ステップ円 -->
          <div :class="stepCircleClasses(index)">
            <svg v-if="index < currentStep" class="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
            </svg>
            <span v-else class="text-body-sm font-medium">{{ index + 1 }}</span>
          </div>
          
          <!-- ステップラベル -->
          <div v-if="step.label" :class="stepLabelClasses(index)">
            {{ step.label }}
          </div>
          
          <!-- 接続線 -->
          <div
            v-if="index < steps.length - 1"
            :class="stepConnectorClasses(index)"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  // プログレスのタイプ
  type: {
    type: String,
    default: 'bar',
    validator: (value) => ['bar', 'circle', 'spinner', 'steps'].includes(value)
  },
  
  // 進行率（0-100）
  percentage: {
    type: Number,
    default: 0,
    validator: (value) => value >= 0 && value <= 100
  },
  
  // ラベル
  label: {
    type: String,
    default: ''
  },
  
  // 説明文
  description: {
    type: String,
    default: ''
  },
  
  // ステップ（steps用）
  steps: {
    type: Array,
    default: () => []
  },
  
  // 現在のステップ（steps用）
  currentStep: {
    type: Number,
    default: 0
  },
  
  // サイズ
  size: {
    type: String,
    default: 'md',
    validator: (value) => ['xs', 'sm', 'md', 'lg', 'xl'].includes(value)
  },
  
  // バリアント
  variant: {
    type: String,
    default: 'primary',
    validator: (value) => ['primary', 'success', 'warning', 'error', 'info'].includes(value)
  },
  
  // アニメーション
  animated: {
    type: Boolean,
    default: true
  },
  
  // ラベル表示
  showLabel: {
    type: Boolean,
    default: true
  },
  
  // アクセシビリティラベル
  ariaLabel: {
    type: String,
    default: '進行状況'
  }
})

// コンテナのクラス
const containerClasses = computed(() => {
  return 'progress-indicator'
})

// ラベルのクラス
const labelClasses = computed(() => {
  const classes = ['font-medium']
  
  switch (props.size) {
    case 'xs':
      classes.push('text-caption')
      break
    case 'sm':
      classes.push('text-body-sm')
      break
    case 'lg':
      classes.push('text-body-lg')
      break
    case 'xl':
      classes.push('text-heading-6')
      break
    default:
      classes.push('text-body-regular')
  }
  
  return classes.join(' ')
})

// パーセンテージのクラス
const percentageClasses = computed(() => {
  return [labelClasses.value, 'text-neutral-600', 'dark:text-dark-600'].join(' ')
})

// 説明文のクラス
const descriptionClasses = computed(() => {
  const classes = ['mt-1', 'text-neutral-600', 'dark:text-dark-600']
  
  switch (props.size) {
    case 'xs':
    case 'sm':
      classes.push('text-caption')
      break
    default:
      classes.push('text-body-sm')
  }
  
  return classes.join(' ')
})

// トラックのクラス
const trackClasses = computed(() => {
  const classes = ['w-full', 'bg-neutral-200', 'dark:bg-dark-300', 'rounded-full', 'overflow-hidden']
  
  switch (props.size) {
    case 'xs':
      classes.push('h-1')
      break
    case 'sm':
      classes.push('h-2')
      break
    case 'lg':
      classes.push('h-4')
      break
    case 'xl':
      classes.push('h-6')
      break
    default:
      classes.push('h-3')
  }
  
  return classes.join(' ')
})

// バーのクラス
const barClasses = computed(() => {
  const classes = ['h-full', 'transition-all', 'duration-500', 'ease-out', 'relative', 'overflow-hidden']
  
  // バリアント
  switch (props.variant) {
    case 'success':
      classes.push('bg-success-500')
      break
    case 'warning':
      classes.push('bg-warning-500')
      break
    case 'error':
      classes.push('bg-error-500')
      break
    case 'info':
      classes.push('bg-info-500')
      break
    default:
      classes.push('bg-primary-500')
  }
  
  return classes.join(' ')
})

// アニメーションのクラス
const animationClasses = computed(() => {
  return [
    'absolute', 'inset-0', 'bg-gradient-to-r', 'from-transparent', 'via-white', 'to-transparent',
    'opacity-30', 'animate-pulse'
  ].join(' ')
})

// 円形プログレスのサイズ
const circleSize = computed(() => {
  switch (props.size) {
    case 'xs':
      return 32
    case 'sm':
      return 48
    case 'lg':
      return 96
    case 'xl':
      return 128
    default:
      return 64
  }
})

// 円の半径
const radius = computed(() => {
  return (circleSize.value - strokeWidth.value * 2) / 2
})

// ストローク幅
const strokeWidth = computed(() => {
  switch (props.size) {
    case 'xs':
      return 2
    case 'sm':
      return 3
    case 'lg':
      return 6
    case 'xl':
      return 8
    default:
      return 4
  }
})

// 円周
const circumference = computed(() => {
  return 2 * Math.PI * radius.value
})

// ストロークのオフセット
const strokeDashoffset = computed(() => {
  return circumference.value - (props.percentage / 100) * circumference.value
})

// 円形プログレスのクラス
const circleClasses = computed(() => {
  const classes = ['transform', '-rotate-90']
  
  if (props.animated) {
    classes.push('transition-transform', 'duration-500')
  }
  
  return classes.join(' ')
})

// 円形トラックのクラス
const circleTrackClasses = computed(() => {
  return 'stroke-neutral-200 dark:stroke-dark-300'
})

// 円形バーのクラス
const circleBarClasses = computed(() => {
  const classes = ['stroke-current']
  
  switch (props.variant) {
    case 'success':
      classes.push('text-success-500')
      break
    case 'warning':
      classes.push('text-warning-500')
      break
    case 'error':
      classes.push('text-error-500')
      break
    case 'info':
      classes.push('text-info-500')
      break
    default:
      classes.push('text-primary-500')
  }
  
  return classes.join(' ')
})

// 円形テキストのクラス
const circleTextClasses = computed(() => {
  const classes = ['font-bold', 'text-neutral-900', 'dark:text-dark-900']
  
  switch (props.size) {
    case 'xs':
      classes.push('text-caption')
      break
    case 'sm':
      classes.push('text-body-sm')
      break
    case 'lg':
      classes.push('text-heading-6')
      break
    case 'xl':
      classes.push('text-heading-5')
      break
    default:
      classes.push('text-body-regular')
  }
  
  return classes.join(' ')
})

// スピナーのクラス
const spinnerClasses = computed(() => {
  const classes = ['animate-spin']
  
  switch (props.variant) {
    case 'success':
      classes.push('text-success-500')
      break
    case 'warning':
      classes.push('text-warning-500')
      break
    case 'error':
      classes.push('text-error-500')
      break
    case 'info':
      classes.push('text-info-500')
      break
    default:
      classes.push('text-primary-500')
  }
  
  switch (props.size) {
    case 'xs':
      classes.push('h-4', 'w-4')
      break
    case 'sm':
      classes.push('h-5', 'w-5')
      break
    case 'lg':
      classes.push('h-8', 'w-8')
      break
    case 'xl':
      classes.push('h-10', 'w-10')
      break
    default:
      classes.push('h-6', 'w-6')
  }
  
  return classes.join(' ')
})

// スピナーラベルのクラス
const spinnerLabelClasses = computed(() => {
  const classes = ['ml-3', 'text-neutral-700', 'dark:text-dark-700']
  
  switch (props.size) {
    case 'xs':
      classes.push('text-caption')
      break
    case 'sm':
      classes.push('text-body-sm')
      break
    case 'lg':
      classes.push('text-body-lg')
      break
    case 'xl':
      classes.push('text-heading-6')
      break
    default:
      classes.push('text-body-regular')
  }
  
  return classes.join(' ')
})

// ステップ円のクラス
const stepCircleClasses = (index) => {
  const classes = [
    'flex', 'items-center', 'justify-center',
    'rounded-full', 'transition-all', 'duration-200'
  ]
  
  const stepSize = props.size === 'sm' ? 'h-8 w-8' : props.size === 'lg' ? 'h-12 w-12' : 'h-10 w-10'
  classes.push(stepSize)
  
  if (index < props.currentStep) {
    // 完了ステップ
    classes.push('bg-success-500', 'text-white')
  } else if (index === props.currentStep) {
    // 現在のステップ
    classes.push('bg-primary-500', 'text-white')
  } else {
    // 未完了ステップ
    classes.push('bg-neutral-200', 'dark:bg-dark-300', 'text-neutral-600', 'dark:text-dark-600')
  }
  
  return classes.join(' ')
}

// ステップラベルのクラス
const stepLabelClasses = (index) => {
  const classes = ['ml-3', 'font-medium']
  
  const textSize = props.size === 'sm' ? 'text-body-sm' : props.size === 'lg' ? 'text-body-regular' : 'text-body-sm'
  classes.push(textSize)
  
  if (index <= props.currentStep) {
    classes.push('text-neutral-900', 'dark:text-dark-900')
  } else {
    classes.push('text-neutral-500', 'dark:text-dark-500')
  }
  
  return classes.join(' ')
}

// ステップ接続線のクラス
const stepConnectorClasses = (index) => {
  const classes = ['flex-1', 'h-0.5', 'mx-4']
  
  if (index < props.currentStep) {
    classes.push('bg-success-500')
  } else {
    classes.push('bg-neutral-200', 'dark:bg-dark-300')
  }
  
  return classes.join(' ')
}
</script>