<template>
  <div :class="containerClasses">
    <!-- 評価表示モード -->
    <div v-if="!interactive" class="flex items-center gap-1">
      <div
        v-for="(star, index) in stars"
        :key="index"
        :class="starClasses(star)"
      >
        <BaseIcon
          :name="getStarIcon(star)"
          :size="size"
          :color="getStarColor(star)"
        />
      </div>
      
      <!-- 数値表示 -->
      <span
        v-if="showValue"
        :class="valueClasses"
      >
        {{ displayValue }}
      </span>
      
      <!-- レビュー数表示 -->
      <span
        v-if="showCount && count > 0"
        :class="countClasses"
      >
        ({{ count }})
      </span>
    </div>
    
    <!-- インタラクティブモード（入力可能） -->
    <div v-else class="flex items-center gap-1">
      <button
        v-for="(star, index) in stars"
        :key="index"
        :class="[starClasses(star), 'transition-transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-1 rounded']"
        @click="setRating(index + 1)"
        @mouseenter="setHover(index + 1)"
        @mouseleave="setHover(0)"
        :disabled="disabled"
        :aria-label="`${index + 1}つ星をつける`"
      >
        <BaseIcon
          :name="getStarIcon(star)"
          :size="size"
          :color="getStarColor(star)"
        />
      </button>
      
      <!-- 数値表示 -->
      <span
        v-if="showValue"
        :class="valueClasses"
      >
        {{ displayValue }}
      </span>
      
      <!-- クリア ボタン -->
      <button
        v-if="clearable && modelValue > 0"
        :class="clearButtonClasses"
        @click="clearRating"
        :disabled="disabled"
        aria-label="評価をクリア"
      >
        <BaseIcon name="X" size="sm" color="neutral" />
      </button>
    </div>
    
    <!-- 説明テキスト -->
    <div
      v-if="showLabels && currentLabel"
      :class="labelClasses"
    >
      {{ currentLabel }}
    </div>
  </div>
</template>

<script setup>
import { ref, computed, watch } from 'vue'
import BaseIcon from './BaseIcon.vue'

const props = defineProps({
  // 評価値
  modelValue: {
    type: Number,
    default: 0
  },
  
  // 最大星数
  max: {
    type: Number,
    default: 5
  },
  
  // サイズ
  size: {
    type: String,
    default: 'md',
    validator: value => ['xs', 'sm', 'md', 'lg', 'xl', '2xl'].includes(value)
  },
  
  // インタラクティブ（クリック可能）
  interactive: {
    type: Boolean,
    default: false
  },
  
  // 無効状態
  disabled: {
    type: Boolean,
    default: false
  },
  
  // 数値表示
  showValue: {
    type: Boolean,
    default: false
  },
  
  // レビュー数表示
  showCount: {
    type: Boolean,
    default: false
  },
  
  // レビュー数
  count: {
    type: Number,
    default: 0
  },
  
  // ラベル表示
  showLabels: {
    type: Boolean,
    default: false
  },
  
  // ラベル配列
  labels: {
    type: Array,
    default: () => ['最悪', '悪い', '普通', '良い', '最高']
  },
  
  // クリア可能
  clearable: {
    type: Boolean,
    default: true
  },
  
  // 半分の星を許可
  allowHalf: {
    type: Boolean,
    default: false
  },
  
  // 読み取り専用
  readonly: {
    type: Boolean,
    default: false
  },
  
  // カラーテーマ
  color: {
    type: String,
    default: 'warning',
    validator: value => ['primary', 'warning', 'success', 'error', 'info', 'neutral'].includes(value)
  },
  
  // 小数点表示桁数
  precision: {
    type: Number,
    default: 1
  }
})

const emit = defineEmits(['update:modelValue', 'change', 'hover'])

// リアクティブデータ
const hoverValue = ref(0)

// 計算されたプロパティ
const stars = computed(() => {
  const result = []
  const currentValue = props.interactive && hoverValue.value > 0 ? hoverValue.value : props.modelValue
  
  for (let i = 1; i <= props.max; i++) {
    if (props.allowHalf) {
      if (currentValue >= i) {
        result.push('full')
      } else if (currentValue >= i - 0.5) {
        result.push('half')
      } else {
        result.push('empty')
      }
    } else {
      result.push(currentValue >= i ? 'full' : 'empty')
    }
  }
  
  return result
})

const containerClasses = computed(() => {
  const classes = ['rating-stars']
  
  if (props.disabled) {
    classes.push('opacity-50 cursor-not-allowed')
  }
  
  return classes.join(' ')
})

const starClasses = (starType) => {
  const classes = ['inline-flex']
  
  if (props.interactive && !props.disabled && !props.readonly) {
    classes.push('cursor-pointer')
  }
  
  return classes.join(' ')
}

const valueClasses = computed(() => {
  const sizeClasses = {
    xs: 'text-xs',
    sm: 'text-sm',
    md: 'text-base',
    lg: 'text-lg',
    xl: 'text-xl',
    '2xl': 'text-2xl'
  }
  
  return `${sizeClasses[props.size]} font-medium text-neutral-700 ml-2`
})

const countClasses = computed(() => {
  const sizeClasses = {
    xs: 'text-xs',
    sm: 'text-xs',
    md: 'text-sm',
    lg: 'text-base',
    xl: 'text-lg',
    '2xl': 'text-xl'
  }
  
  return `${sizeClasses[props.size]} text-neutral-500 ml-1`
})

const labelClasses = computed(() => {
  const sizeClasses = {
    xs: 'text-xs',
    sm: 'text-xs',
    md: 'text-sm',
    lg: 'text-base',
    xl: 'text-lg',
    '2xl': 'text-xl'
  }
  
  return `${sizeClasses[props.size]} text-neutral-600 mt-1`
})

const clearButtonClasses = computed(() => {
  return [
    'ml-2 p-1 rounded hover:bg-neutral-100',
    'transition-colors focus:outline-none focus:ring-2 focus:ring-primary-500',
    props.disabled ? 'cursor-not-allowed opacity-50' : 'cursor-pointer'
  ].join(' ')
})

const displayValue = computed(() => {
  const value = props.interactive && hoverValue.value > 0 ? hoverValue.value : props.modelValue
  return props.precision === 0 ? Math.round(value) : value.toFixed(props.precision)
})

const currentLabel = computed(() => {
  const value = props.interactive && hoverValue.value > 0 ? hoverValue.value : props.modelValue
  const index = Math.ceil(value) - 1
  return props.labels[index] || ''
})

// メソッド
const getStarIcon = (starType) => {
  // 一律でStarを使用（Heroiconsには半分の星がないため）
  return 'Star'
}

const getStarColor = (starType) => {
  if (starType === 'empty') {
    return 'neutral'
  }
  
  const colorMap = {
    primary: 'primary',
    warning: 'warning',
    success: 'success',
    error: 'error',
    info: 'info',
    neutral: 'neutral'
  }
  
  return colorMap[props.color] || 'warning'
}

const setRating = (value) => {
  if (props.disabled || props.readonly) return
  
  const newValue = value === props.modelValue ? 0 : value
  emit('update:modelValue', newValue)
  emit('change', newValue)
}

const setHover = (value) => {
  if (props.disabled || props.readonly) return
  
  hoverValue.value = value
  emit('hover', value)
}

const clearRating = () => {
  if (props.disabled || props.readonly) return
  
  emit('update:modelValue', 0)
  emit('change', 0)
}

// ウォッチャー
watch(() => props.modelValue, (newValue) => {
  // 値の検証
  if (newValue < 0) {
    emit('update:modelValue', 0)
  } else if (newValue > props.max) {
    emit('update:modelValue', props.max)
  }
})
</script>

<style scoped>
.rating-stars .star-full {
  color: #f59e0b; /* warning-500 */
}

.rating-stars .star-empty {
  color: #d1d5db; /* neutral-300 */
}

.rating-stars .star-half {
  background: linear-gradient(90deg, #f59e0b 50%, #d1d5db 50%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

/* カラーバリエーション */
.rating-stars.color-primary .star-full {
  color: #3b82f6; /* primary-500 */
}

.rating-stars.color-success .star-full {
  color: #10b981; /* success-500 */
}

.rating-stars.color-error .star-full {
  color: #ef4444; /* error-500 */
}

.rating-stars.color-info .star-full {
  color: #06b6d4; /* info-500 */
}

.rating-stars.color-neutral .star-full {
  color: #6b7280; /* neutral-500 */
}
</style>