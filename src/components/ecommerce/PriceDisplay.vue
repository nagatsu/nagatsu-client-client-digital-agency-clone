<template>
  <div :class="containerClasses">
    <!-- メイン価格表示 -->
    <div class="flex items-baseline gap-2">
      <!-- 現在価格 -->
      <span :class="currentPriceClasses">
        {{ formattedCurrentPrice }}
      </span>
      
      <!-- 元の価格（割引時） -->
      <span 
        v-if="showOriginalPrice && originalPrice && originalPrice > currentPrice"
        :class="originalPriceClasses"
      >
        {{ formattedOriginalPrice }}
      </span>
      
      <!-- 割引率 -->
      <BaseBadge
        v-if="showDiscountBadge && discountPercentage > 0"
        :text="`${discountPercentage}%OFF`"
        :variant="discountBadgeVariant"
        size="sm"
      />
    </div>
    
    <!-- サブ情報 -->
    <div v-if="hasSubInfo" :class="subInfoClasses">
      <!-- 税込/税抜表示 -->
      <span v-if="showTaxInfo" class="text-xs text-neutral-600">
        {{ taxInfoText }}
      </span>
      
      <!-- 送料情報 -->
      <span v-if="showShipping" class="text-xs text-neutral-600">
        {{ shippingText }}
      </span>
      
      <!-- ポイント情報 -->
      <span v-if="showPoints && pointsEarned > 0" class="text-xs text-success-600">
        {{ pointsText }}
      </span>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import BaseBadge from '@/components/base/BaseBadge.vue'

const props = defineProps({
  // 現在価格
  currentPrice: {
    type: Number,
    required: true
  },
  
  // 元の価格（割引前）
  originalPrice: {
    type: Number,
    default: null
  },
  
  // 通貨
  currency: {
    type: String,
    default: 'JPY'
  },
  
  // 価格サイズ
  size: {
    type: String,
    default: 'md',
    validator: value => ['xs', 'sm', 'md', 'lg', 'xl', '2xl'].includes(value)
  },
  
  // 税込み価格かどうか
  taxIncluded: {
    type: Boolean,
    default: true
  },
  
  // 税情報表示
  showTaxInfo: {
    type: Boolean,
    default: true
  },
  
  // 元価格表示
  showOriginalPrice: {
    type: Boolean,
    default: true
  },
  
  // 割引バッジ表示
  showDiscountBadge: {
    type: Boolean,
    default: true
  },
  
  // 送料無料
  shippingFree: {
    type: Boolean,
    default: false
  },
  
  // 送料情報表示
  showShipping: {
    type: Boolean,
    default: false
  },
  
  // ポイント倍率
  pointsRate: {
    type: Number,
    default: 0.01 // 1%
  },
  
  // ポイント表示
  showPoints: {
    type: Boolean,
    default: false
  },
  
  // 価格強調
  emphasis: {
    type: Boolean,
    default: false
  },
  
  // 配置
  align: {
    type: String,
    default: 'left',
    validator: value => ['left', 'center', 'right'].includes(value)
  },
  
  // 割引バッジバリアント
  discountBadgeVariant: {
    type: String,
    default: 'error'
  }
})

// 計算されたプロパティ
const containerClasses = computed(() => {
  const classes = ['price-display']
  
  // 配置
  if (props.align === 'center') {
    classes.push('text-center')
  } else if (props.align === 'right') {
    classes.push('text-right')
  }
  
  return classes.join(' ')
})

const currentPriceClasses = computed(() => {
  const classes = ['font-bold']
  
  // サイズ
  const sizeClasses = {
    xs: 'text-sm',
    sm: 'text-base',
    md: 'text-lg',
    lg: 'text-xl',
    xl: 'text-2xl',
    '2xl': 'text-3xl'
  }
  classes.push(sizeClasses[props.size])
  
  // 色
  if (props.emphasis) {
    classes.push('text-primary-600')
  } else if (discountPercentage.value > 0) {
    classes.push('text-error-600')
  } else {
    classes.push('text-neutral-900')
  }
  
  return classes.join(' ')
})

const originalPriceClasses = computed(() => {
  const classes = ['line-through text-neutral-500']
  
  // サイズ（現在価格より小さく）
  const sizeClasses = {
    xs: 'text-xs',
    sm: 'text-sm',
    md: 'text-base',
    lg: 'text-lg',
    xl: 'text-xl',
    '2xl': 'text-2xl'
  }
  classes.push(sizeClasses[props.size])
  
  return classes.join(' ')
})

const subInfoClasses = computed(() => {
  return 'flex flex-wrap gap-2 mt-1'
})

// 価格フォーマット関数
const formatPrice = (price) => {
  if (price == null) return ''
  
  return new Intl.NumberFormat('ja-JP', {
    style: 'currency',
    currency: props.currency,
    currencyDisplay: 'symbol'
  }).format(price)
}

const formattedCurrentPrice = computed(() => formatPrice(props.currentPrice))
const formattedOriginalPrice = computed(() => formatPrice(props.originalPrice))

// 割引計算
const discountPercentage = computed(() => {
  if (!props.originalPrice || props.originalPrice <= props.currentPrice) return 0
  return Math.round(((props.originalPrice - props.currentPrice) / props.originalPrice) * 100)
})

// 税情報テキスト
const taxInfoText = computed(() => {
  return props.taxIncluded ? '税込' : '税抜'
})

// 送料テキスト
const shippingText = computed(() => {
  return props.shippingFree ? '送料無料' : '送料別'
})

// ポイント計算
const pointsEarned = computed(() => {
  return Math.floor(props.currentPrice * props.pointsRate)
})

const pointsText = computed(() => {
  return `${pointsEarned.value}ポイント獲得`
})

// サブ情報の有無
const hasSubInfo = computed(() => {
  return props.showTaxInfo || props.showShipping || props.showPoints
})
</script>

<style scoped>
.price-display {
  /* カスタムスタイルがあれば追加 */
}
</style>