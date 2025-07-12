<template>
  <section :class="heroClasses">
    <!-- 背景画像/動画 -->
    <div class="absolute inset-0 overflow-hidden">
      <!-- 背景画像 -->
      <BaseImage
        v-if="!isVideo"
        :src="computedSrc"
        :alt="alt"
        :object-fit="objectFit"
        size="full"
        rounded="none"
        :placeholder="placeholder"
        :placeholder-text="placeholderText"
        class="absolute inset-0"
      />
      
      <!-- 背景動画 -->
      <video
        v-else
        class="absolute inset-0 w-full h-full object-cover"
        :autoplay="autoplay"
        :loop="loop"
        :muted="muted"
        :poster="poster"
      >
        <source :src="src" type="video/mp4">
        お使いのブラウザは動画に対応していません。
      </video>
      
      <!-- オーバーレイ -->
      <div
        v-if="overlay"
        :class="overlayClasses"
      />
    </div>
    
    <!-- コンテンツエリア -->
    <div class="relative z-10 flex items-center justify-center min-h-full">
      <div :class="contentClasses">
        <slot>
          <!-- デフォルトコンテンツ -->
          <div class="text-center">
            <h1 v-if="title" :class="titleClasses">
              {{ title }}
            </h1>
            <p v-if="subtitle" :class="subtitleClasses">
              {{ subtitle }}
            </p>
            <div v-if="showActions" class="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <BaseButton
                v-if="primaryAction"
                :variant="primaryAction.variant || 'primary'"
                :size="primaryAction.size || 'lg'"
                @click="handleAction('primary', primaryAction)"
              >
                {{ primaryAction.text }}
              </BaseButton>
              <BaseButton
                v-if="secondaryAction"
                :variant="secondaryAction.variant || 'outline'"
                :size="secondaryAction.size || 'lg'"
                @click="handleAction('secondary', secondaryAction)"
              >
                {{ secondaryAction.text }}
              </BaseButton>
            </div>
          </div>
        </slot>
      </div>
    </div>
    
    <!-- スクロールインジケーター -->
    <div
      v-if="showScrollIndicator"
      class="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce"
    >
      <BaseIcon name="ChevronDown" size="lg" :color="textColor === 'white' ? 'white' : 'neutral'" />
    </div>
    
    <!-- ナビゲーションドット（複数画像の場合） -->
    <div
      v-if="images.length > 1 && showNavigation"
      class="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2"
    >
      <button
        v-for="(_, index) in images"
        :key="index"
        :class="[
          'w-3 h-3 rounded-full border-2 transition-all',
          index === currentImageIndex
            ? textColor === 'white' ? 'bg-white border-white' : 'bg-neutral-900 border-neutral-900'
            : textColor === 'white' ? 'border-white bg-transparent' : 'border-neutral-900 bg-transparent'
        ]"
        @click="setCurrentImage(index)"
      />
    </div>
    
    <!-- 前後ナビゲーション -->
    <template v-if="images.length > 1 && showArrows">
      <button
        class="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-30 hover:bg-opacity-50 rounded-full p-3 transition-all"
        @click="previousImage"
      >
        <BaseIcon name="ChevronLeft" size="lg" color="white" />
      </button>
      <button
        class="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-30 hover:bg-opacity-50 rounded-full p-3 transition-all"
        @click="nextImage"
      >
        <BaseIcon name="ChevronRight" size="lg" color="white" />
      </button>
    </template>
  </section>
</template>

<script setup>
import { ref, computed, watch, onMounted, onUnmounted } from 'vue'
import BaseImage from './BaseImage.vue'
import BaseIcon from './BaseIcon.vue'
import BaseButton from './BaseButton.vue'

const props = defineProps({
  // 画像/動画ソース
  src: {
    type: String,
    default: ''
  },
  
  // 複数画像
  images: {
    type: Array,
    default: () => []
  },
  
  // 代替テキスト
  alt: {
    type: String,
    default: 'Hero Image'
  },
  
  // 高さ設定
  height: {
    type: String,
    default: 'screen',
    validator: value => ['sm', 'md', 'lg', 'xl', '2xl', 'screen', 'auto'].includes(value)
  },
  
  // オブジェクトフィット
  objectFit: {
    type: String,
    default: 'cover'
  },
  
  // プレースホルダー
  placeholder: {
    type: Boolean,
    default: false
  },
  
  placeholderText: {
    type: String,
    default: 'ヒーロー画像'
  },
  
  // オーバーレイ
  overlay: {
    type: Boolean,
    default: true
  },
  
  overlayOpacity: {
    type: Number,
    default: 0.4,
    validator: value => value >= 0 && value <= 1
  },
  
  overlayColor: {
    type: String,
    default: 'black'
  },
  
  // テキストコンテンツ
  title: {
    type: String,
    default: ''
  },
  
  subtitle: {
    type: String,
    default: ''
  },
  
  textColor: {
    type: String,
    default: 'white',
    validator: value => ['white', 'black', 'neutral'].includes(value)
  },
  
  textAlign: {
    type: String,
    default: 'center',
    validator: value => ['left', 'center', 'right'].includes(value)
  },
  
  // アクションボタン
  primaryAction: {
    type: Object,
    default: null
  },
  
  secondaryAction: {
    type: Object,
    default: null
  },
  
  // 表示制御
  showActions: {
    type: Boolean,
    default: true
  },
  
  showScrollIndicator: {
    type: Boolean,
    default: false
  },
  
  showNavigation: {
    type: Boolean,
    default: true
  },
  
  showArrows: {
    type: Boolean,
    default: true
  },
  
  // 動画設定
  isVideo: {
    type: Boolean,
    default: false
  },
  
  autoplay: {
    type: Boolean,
    default: true
  },
  
  loop: {
    type: Boolean,
    default: true
  },
  
  muted: {
    type: Boolean,
    default: true
  },
  
  poster: {
    type: String,
    default: ''
  },
  
  // 自動切り替え
  autoSlide: {
    type: Boolean,
    default: false
  },
  
  slideInterval: {
    type: Number,
    default: 5000
  },
  
  // コンテンツ配置
  contentPosition: {
    type: String,
    default: 'center',
    validator: value => ['top', 'center', 'bottom'].includes(value)
  },
  
  contentMaxWidth: {
    type: String,
    default: '4xl'
  }
})

const emit = defineEmits(['action', 'slideChange'])

// リアクティブデータ
const currentImageIndex = ref(0)
let slideTimer = null

// 計算されたプロパティ
const computedSrc = computed(() => {
  if (props.images.length > 0) {
    return props.images[currentImageIndex.value]?.src || props.images[currentImageIndex.value]
  }
  return props.src
})

const heroClasses = computed(() => {
  const classes = ['relative overflow-hidden']
  
  // 高さクラス
  const heightClasses = {
    sm: 'h-64',
    md: 'h-80',
    lg: 'h-96',
    xl: 'h-[32rem]',
    '2xl': 'h-[40rem]',
    screen: 'h-screen',
    auto: 'h-auto min-h-[20rem]'
  }
  classes.push(heightClasses[props.height])
  
  return classes.join(' ')
})

const overlayClasses = computed(() => {
  const classes = ['absolute inset-0']
  
  // オーバーレイカラーと透明度
  const colorClasses = {
    black: `bg-black`,
    white: `bg-white`,
    primary: `bg-primary-900`,
    neutral: `bg-neutral-900`
  }
  
  classes.push(colorClasses[props.overlayColor] || colorClasses.black)
  classes.push(`bg-opacity-${Math.round(props.overlayOpacity * 100)}`)
  
  return classes.join(' ')
})

const contentClasses = computed(() => {
  const classes = ['px-6 sm:px-8 lg:px-12']
  
  // 最大幅
  const maxWidthClasses = {
    sm: 'max-w-sm',
    md: 'max-w-md',
    lg: 'max-w-lg',
    xl: 'max-w-xl',
    '2xl': 'max-w-2xl',
    '3xl': 'max-w-3xl',
    '4xl': 'max-w-4xl',
    '5xl': 'max-w-5xl',
    '6xl': 'max-w-6xl',
    '7xl': 'max-w-7xl'
  }
  classes.push(maxWidthClasses[props.contentMaxWidth] || maxWidthClasses['4xl'])
  classes.push('mx-auto')
  
  // テキスト配置
  const alignClasses = {
    left: 'text-left',
    center: 'text-center',
    right: 'text-right'
  }
  classes.push(alignClasses[props.textAlign])
  
  return classes.join(' ')
})

const titleClasses = computed(() => {
  const classes = ['text-heading-1 md:text-heading-xl font-bold mb-4']
  
  // テキストカラー
  const colorClasses = {
    white: 'text-white',
    black: 'text-neutral-900',
    neutral: 'text-neutral-700'
  }
  classes.push(colorClasses[props.textColor])
  
  return classes.join(' ')
})

const subtitleClasses = computed(() => {
  const classes = ['text-heading-6 md:text-heading-5']
  
  // テキストカラー
  const colorClasses = {
    white: 'text-neutral-200',
    black: 'text-neutral-600',
    neutral: 'text-neutral-500'
  }
  classes.push(colorClasses[props.textColor])
  
  return classes.join(' ')
})

// メソッド
const setCurrentImage = (index) => {
  currentImageIndex.value = index
  emit('slideChange', index)
}

const nextImage = () => {
  const nextIndex = currentImageIndex.value + 1
  if (nextIndex < props.images.length) {
    setCurrentImage(nextIndex)
  } else {
    setCurrentImage(0)
  }
}

const previousImage = () => {
  const prevIndex = currentImageIndex.value - 1
  if (prevIndex >= 0) {
    setCurrentImage(prevIndex)
  } else {
    setCurrentImage(props.images.length - 1)
  }
}

const handleAction = (type, action) => {
  emit('action', { type, action })
  
  // カスタムハンドラがある場合は実行
  if (action.handler && typeof action.handler === 'function') {
    action.handler()
  }
}

const startAutoSlide = () => {
  if (props.autoSlide && props.images.length > 1) {
    slideTimer = setInterval(() => {
      nextImage()
    }, props.slideInterval)
  }
}

const stopAutoSlide = () => {
  if (slideTimer) {
    clearInterval(slideTimer)
    slideTimer = null
  }
}

// ウォッチャー
watch(() => props.autoSlide, (newValue) => {
  if (newValue) {
    startAutoSlide()
  } else {
    stopAutoSlide()
  }
})

watch(() => props.slideInterval, () => {
  if (props.autoSlide) {
    stopAutoSlide()
    startAutoSlide()
  }
})

// ライフサイクル
onMounted(() => {
  if (props.autoSlide) {
    startAutoSlide()
  }
})

onUnmounted(() => {
  stopAutoSlide()
})
</script>

<style scoped>
/* カスタム透明度クラス */
.bg-opacity-10 { background-color: rgba(0, 0, 0, 0.1); }
.bg-opacity-20 { background-color: rgba(0, 0, 0, 0.2); }
.bg-opacity-30 { background-color: rgba(0, 0, 0, 0.3); }
.bg-opacity-40 { background-color: rgba(0, 0, 0, 0.4); }
.bg-opacity-50 { background-color: rgba(0, 0, 0, 0.5); }
.bg-opacity-60 { background-color: rgba(0, 0, 0, 0.6); }
.bg-opacity-70 { background-color: rgba(0, 0, 0, 0.7); }
.bg-opacity-80 { background-color: rgba(0, 0, 0, 0.8); }
.bg-opacity-90 { background-color: rgba(0, 0, 0, 0.9); }

/* アニメーション */
@keyframes bounce {
  0%, 20%, 53%, 80%, 100% {
    transform: translate3d(0,0,0) translate(-50%, 0);
  }
  40%, 43% {
    transform: translate3d(0,-8px,0) translate(-50%, 0);
  }
  70% {
    transform: translate3d(0,-4px,0) translate(-50%, 0);
  }
  90% {
    transform: translate3d(0,-2px,0) translate(-50%, 0);
  }
}

.animate-bounce {
  animation: bounce 2s infinite;
}

/* レスポンシブ調整 */
@media (max-width: 768px) {
  .h-screen {
    height: 70vh;
    min-height: 24rem;
  }
}
</style>