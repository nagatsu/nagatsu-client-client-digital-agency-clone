<template>
  <BaseCard :class="cardClasses" @click="handleCardClick">
    <!-- 商品画像エリア -->
    <div class="relative overflow-hidden">
      <BaseImage
        :src="product.image"
        :alt="product.name"
        :aspect-ratio="imageAspectRatio"
        :object-fit="imageObjectFit"
        :placeholder="!product.image"
        placeholder-text="商品画像"
        :clickable="clickable"
        size="full"
        rounded="none"
        class="transition-transform duration-200 group-hover:scale-105"
        @click="handleImageClick"
      />
      
      <!-- バッジ類 -->
      <div class="absolute top-2 left-2 flex flex-col gap-1">
        <BaseBadge
          v-if="product.isNew"
          text="NEW"
          variant="primary"
          size="xs"
        />
        <BaseBadge
          v-if="product.isSale"
          text="SALE"
          variant="error"
          size="xs"
        />
        <BaseBadge
          v-if="product.isLimitedEdition"
          text="限定"
          variant="warning"
          size="xs"
        />
      </div>
      
      <!-- 在庫状況 -->
      <div v-if="showStockStatus" class="absolute top-2 right-2">
        <BaseBadge
          v-if="product.stock === 0"
          text="在庫切れ"
          variant="neutral"
          size="xs"
        />
        <BaseBadge
          v-else-if="product.stock <= lowStockThreshold"
          text="残りわずか"
          variant="warning"
          size="xs"
        />
      </div>
      
      <!-- お気に入りボタン -->
      <button
        v-if="showFavorite"
        :class="favoriteButtonClasses"
        @click.stop="toggleFavorite"
        :aria-label="isFavorite ? 'お気に入りから削除' : 'お気に入りに追加'"
      >
        <BaseIcon
          :name="isFavorite ? 'Heart' : 'Heart'"
          size="sm"
          :color="isFavorite ? 'error' : 'white'"
          :class="{ 'fill-current': isFavorite }"
        />
      </button>
      
      <!-- クイックビューボタン -->
      <button
        v-if="showQuickView"
        :class="quickViewButtonClasses"
        @click.stop="handleQuickView"
        aria-label="クイックビュー"
      >
        <BaseIcon name="Eye" size="sm" color="white" />
      </button>
    </div>
    
    <!-- 商品情報エリア -->
    <div :class="contentClasses">
      <!-- カテゴリ -->
      <div v-if="product.category && showCategory" class="mb-1">
        <span class="text-xs text-neutral-500 uppercase tracking-wide">
          {{ product.category }}
        </span>
      </div>
      
      <!-- 商品名 -->
      <h3 :class="titleClasses">
        {{ product.name }}
      </h3>
      
      <!-- 商品説明 -->
      <p v-if="product.description && showDescription" :class="descriptionClasses">
        {{ truncatedDescription }}
      </p>
      
      <!-- 評価 -->
      <div v-if="showRating && product.rating" class="mb-2">
        <RatingStars
          :model-value="product.rating"
          :count="product.reviewCount"
          size="sm"
          :show-value="showRatingValue"
          :show-count="showReviewCount"
        />
      </div>
      
      <!-- 価格表示 -->
      <div class="mb-3">
        <PriceDisplay
          :current-price="product.price"
          :original-price="product.originalPrice"
          :show-original-price="true"
          :show-discount-badge="true"
          :tax-included="true"
          :show-tax-info="showTaxInfo"
          :size="priceSize"
          :emphasis="true"
        />
      </div>
      
      <!-- バリエーション（色・サイズなど） -->
      <div v-if="product.variants && showVariants" class="mb-3">
        <div class="flex flex-wrap gap-1">
          <button
            v-for="variant in product.variants.slice(0, maxVariantsShow)"
            :key="variant.id"
            :class="variantButtonClasses(variant)"
            @click.stop="selectVariant(variant)"
            :aria-label="`${variant.name}を選択`"
          >
            <div
              v-if="variant.type === 'color'"
              class="w-4 h-4 rounded-full border border-neutral-300"
              :style="{ backgroundColor: variant.value }"
            />
            <span v-else class="text-xs">{{ variant.name }}</span>
          </button>
          <span
            v-if="product.variants.length > maxVariantsShow"
            class="text-xs text-neutral-500 self-center"
          >
            +{{ product.variants.length - maxVariantsShow }}
          </span>
        </div>
      </div>
      
      <!-- アクションボタンエリア -->
      <div :class="actionsClasses">
        <!-- カートに追加ボタン -->
        <BaseButton
          v-if="showAddToCart"
          :variant="addToCartVariant"
          :size="buttonSize"
          :disabled="product.stock === 0 || isLoading"
          :loading="isLoading"
          @click.stop="handleAddToCart"
          class="flex-1"
        >
          <BaseIcon v-if="!isLoading" name="ShoppingCart" size="sm" class="mr-2" />
          {{ addToCartText }}
        </BaseButton>
        
        <!-- 即購入ボタン -->
        <BaseButton
          v-if="showBuyNow"
          variant="primary"
          :size="buttonSize"
          :disabled="product.stock === 0"
          @click.stop="handleBuyNow"
          class="flex-1"
        >
          即購入
        </BaseButton>
      </div>
    </div>
  </BaseCard>
</template>

<script setup>
import { ref, computed } from 'vue'
import BaseCard from '@/components/base/BaseCard.vue'
import BaseImage from '@/components/base/BaseImage.vue'
import BaseBadge from '@/components/base/BaseBadge.vue'
import BaseButton from '@/components/base/BaseButton.vue'
import BaseIcon from '@/components/base/BaseIcon.vue'
import RatingStars from '@/components/base/RatingStars.vue'
import PriceDisplay from './PriceDisplay.vue'

const props = defineProps({
  // 商品データ
  product: {
    type: Object,
    required: true
  },
  
  // 表示設定
  layout: {
    type: String,
    default: 'vertical',
    validator: value => ['vertical', 'horizontal'].includes(value)
  },
  
  // 画像アスペクト比
  imageAspectRatio: {
    type: String,
    default: 'square'
  },
  
  // 画像フィット
  imageObjectFit: {
    type: String,
    default: 'cover'
  },
  
  // クリック可能
  clickable: {
    type: Boolean,
    default: true
  },
  
  // お気に入り表示
  showFavorite: {
    type: Boolean,
    default: true
  },
  
  // クイックビュー表示
  showQuickView: {
    type: Boolean,
    default: true
  },
  
  // カテゴリ表示
  showCategory: {
    type: Boolean,
    default: true
  },
  
  // 説明表示
  showDescription: {
    type: Boolean,
    default: false
  },
  
  // 評価表示
  showRating: {
    type: Boolean,
    default: true
  },
  
  // 評価値表示
  showRatingValue: {
    type: Boolean,
    default: false
  },
  
  // レビュー数表示
  showReviewCount: {
    type: Boolean,
    default: true
  },
  
  // 税情報表示
  showTaxInfo: {
    type: Boolean,
    default: false
  },
  
  // バリエーション表示
  showVariants: {
    type: Boolean,
    default: true
  },
  
  // 最大バリエーション表示数
  maxVariantsShow: {
    type: Number,
    default: 3
  },
  
  // 在庫状況表示
  showStockStatus: {
    type: Boolean,
    default: true
  },
  
  // 低在庫閾値
  lowStockThreshold: {
    type: Number,
    default: 5
  },
  
  // カートに追加ボタン表示
  showAddToCart: {
    type: Boolean,
    default: true
  },
  
  // 即購入ボタン表示
  showBuyNow: {
    type: Boolean,
    default: false
  },
  
  // ボタンサイズ
  buttonSize: {
    type: String,
    default: 'sm'
  },
  
  // 価格サイズ
  priceSize: {
    type: String,
    default: 'md'
  },
  
  // コンパクトモード
  compact: {
    type: Boolean,
    default: false
  },
  
  // 説明文字数制限
  descriptionLimit: {
    type: Number,
    default: 80
  }
})

const emit = defineEmits([
  'click',
  'image-click',
  'add-to-cart',
  'buy-now',
  'favorite-toggle',
  'quick-view',
  'variant-select'
])

// リアクティブデータ
const isLoading = ref(false)
const isFavorite = ref(props.product.isFavorite || false)
const selectedVariant = ref(null)

// 計算されたプロパティ
const cardClasses = computed(() => {
  const classes = ['product-card group cursor-pointer']
  
  if (props.layout === 'horizontal') {
    classes.push('flex')
  }
  
  if (props.compact) {
    classes.push('compact')
  }
  
  return classes.join(' ')
})

const contentClasses = computed(() => {
  const classes = ['p-3']
  
  if (props.layout === 'horizontal') {
    classes.push('flex-1')
  }
  
  if (props.compact) {
    classes.push('p-2')
  }
  
  return classes.join(' ')
})

const titleClasses = computed(() => {
  const classes = ['font-medium text-neutral-900 mb-1']
  
  if (props.compact) {
    classes.push('text-sm line-clamp-1')
  } else {
    classes.push('text-base line-clamp-2')
  }
  
  return classes.join(' ')
})

const descriptionClasses = computed(() => {
  return 'text-sm text-neutral-600 mb-2 line-clamp-2'
})

const actionsClasses = computed(() => {
  const classes = ['flex gap-2']
  
  if (props.showAddToCart && props.showBuyNow) {
    classes.push('flex-col')
  }
  
  return classes.join(' ')
})

const favoriteButtonClasses = computed(() => {
  return [
    'absolute top-2 right-2 w-8 h-8 rounded-full',
    'bg-black bg-opacity-50 hover:bg-opacity-70',
    'flex items-center justify-center',
    'transition-all duration-200',
    'opacity-0 group-hover:opacity-100',
    'focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2'
  ].join(' ')
})

const quickViewButtonClasses = computed(() => {
  return [
    'absolute bottom-2 right-2 w-8 h-8 rounded-full',
    'bg-black bg-opacity-50 hover:bg-opacity-70',
    'flex items-center justify-center',
    'transition-all duration-200',
    'opacity-0 group-hover:opacity-100',
    'focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2'
  ].join(' ')
})

const addToCartVariant = computed(() => {
  if (props.product.stock === 0) return 'neutral'
  return props.showBuyNow ? 'outline' : 'primary'
})

const addToCartText = computed(() => {
  if (props.product.stock === 0) return '在庫切れ'
  if (isLoading.value) return 'カートに追加中...'
  return 'カートに追加'
})

const truncatedDescription = computed(() => {
  if (!props.product.description) return ''
  if (props.product.description.length <= props.descriptionLimit) {
    return props.product.description
  }
  return props.product.description.substring(0, props.descriptionLimit) + '...'
})

// メソッド
const handleCardClick = () => {
  if (props.clickable) {
    emit('click', props.product)
  }
}

const handleImageClick = () => {
  emit('image-click', props.product)
}

const handleAddToCart = async () => {
  if (props.product.stock === 0) return
  
  isLoading.value = true
  try {
    await new Promise(resolve => setTimeout(resolve, 800)) // シミュレート
    emit('add-to-cart', {
      product: props.product,
      variant: selectedVariant.value
    })
  } finally {
    isLoading.value = false
  }
}

const handleBuyNow = () => {
  emit('buy-now', {
    product: props.product,
    variant: selectedVariant.value
  })
}

const toggleFavorite = () => {
  isFavorite.value = !isFavorite.value
  emit('favorite-toggle', {
    product: props.product,
    isFavorite: isFavorite.value
  })
}

const handleQuickView = () => {
  emit('quick-view', props.product)
}

const selectVariant = (variant) => {
  selectedVariant.value = variant
  emit('variant-select', {
    product: props.product,
    variant: variant
  })
}

const variantButtonClasses = (variant) => {
  const classes = [
    'w-6 h-6 rounded border border-neutral-300',
    'hover:border-neutral-400 transition-colors',
    'flex items-center justify-center'
  ]
  
  if (selectedVariant.value?.id === variant.id) {
    classes.push('border-primary-500 ring-1 ring-primary-500')
  }
  
  return classes.join(' ')
}
</script>

<style scoped>
.product-card {
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.product-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.line-clamp-1 {
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.compact {
  /* コンパクトモード用のスタイル */
}
</style>