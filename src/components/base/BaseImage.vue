<template>
  <div :class="containerClasses" class="relative overflow-hidden">
    <!-- 実際の画像 -->
    <img
      v-if="src && !imageError && !forceplaceholder"
      :src="src"
      :alt="alt"
      :class="imageClasses"
      class="w-full h-full object-cover transition-opacity duration-300"
      :style="imageStyles"
      @load="handleLoad"
      @error="handleError"
    />
    
    <!-- プレースホルダー画像 -->
    <div
      v-else
      :class="placeholderClasses"
      class="w-full h-full flex items-center justify-center transition-colors duration-200"
      :style="placeholderStyles"
    >
      <!-- プレースホルダーアイコン -->
      <div class="text-center">
        <component
          :is="placeholderIcon"
          :class="placeholderIconClasses"
          class="mx-auto mb-2"
          aria-hidden="true"
        />
        
        <!-- プレースホルダーテキスト -->
        <div v-if="showPlaceholderText" :class="placeholderTextClasses" class="text-sm font-medium">
          {{ placeholderText }}
        </div>
        
        <!-- サイズ表示 -->
        <div v-if="showDimensions" class="text-xs text-gray-400 mt-1">
          {{ width }} × {{ height }}
        </div>
      </div>
    </div>
    
    <!-- オーバーレイコンテンツ -->
    <div
      v-if="overlay || $slots.overlay"
      :class="overlayClasses"
      class="absolute inset-0 flex items-center justify-center"
    >
      <slot name="overlay" :overlay="overlay">
        <div v-if="overlay" class="bg-black bg-opacity-50 text-white px-4 py-2 rounded-lg text-sm font-medium">
          {{ overlay }}
        </div>
      </slot>
    </div>
    
    <!-- ローディング状態 -->
    <div
      v-if="loading"
      :class="loadingClasses"
      class="absolute inset-0 flex items-center justify-center bg-gray-100 dark:bg-gray-800"
    >
      <div class="animate-spin rounded-full h-8 w-8 border-b-2 border-primary-600"></div>
    </div>
    
    <!-- バッジ -->
    <div
      v-if="badge"
      :class="badgeClasses"
      class="absolute top-2 right-2"
    >
      <span class="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-primary-600 text-white">
        {{ badge }}
      </span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'

type PlaceholderType = 'product' | 'hero' | 'avatar' | 'chart' | 'map' | 'gallery' | 'document' | 'video' | 'generic'
type ImageShape = 'rectangle' | 'square' | 'circle' | 'rounded'
type AspectRatio = '16:9' | '4:3' | '1:1' | '3:2' | '21:9' | 'auto'

interface Props {
  src?: string
  alt?: string
  width?: number | string
  height?: number | string
  placeholder?: PlaceholderType
  placeholderText?: string
  shape?: ImageShape
  aspectRatio?: AspectRatio
  overlay?: string
  badge?: string
  loading?: boolean
  lazy?: boolean
  objectFit?: 'cover' | 'contain' | 'fill' | 'none' | 'scale-down'
  showPlaceholderText?: boolean
  showDimensions?: boolean
  forceplaceholder?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  placeholder: 'generic',
  shape: 'rectangle',
  aspectRatio: 'auto',
  loading: false,
  lazy: true,
  objectFit: 'cover',
  showPlaceholderText: true,
  showDimensions: true,
  forceplaceholder: false
})

const emit = defineEmits<{
  'load': [event: Event]
  'error': [event: Event]
}>()

// リアクティブな状態
const imageError = ref(false)
const imageLoaded = ref(false)

// 計算されたプロパティ
const containerClasses = computed(() => {
  const base = 'relative overflow-hidden'
  
  const shapes = {
    rectangle: 'rounded-lg',
    square: 'rounded-lg',
    circle: 'rounded-full',
    rounded: 'rounded-xl'
  }
  
  const aspectRatios = {
    '16:9': 'aspect-video',
    '4:3': 'aspect-[4/3]',
    '1:1': 'aspect-square',
    '3:2': 'aspect-[3/2]',
    '21:9': 'aspect-[21/9]',
    'auto': ''
  }
  
  return [base, shapes[props.shape], aspectRatios[props.aspectRatio]]
})

const imageClasses = computed(() => {
  const base = 'w-full h-full transition-opacity duration-300'
  const objectFit = {
    cover: 'object-cover',
    contain: 'object-contain',
    fill: 'object-fill',
    none: 'object-none',
    'scale-down': 'object-scale-down'
  }
  
  return [base, objectFit[props.objectFit]]
})

const imageStyles = computed(() => {
  const styles: Record<string, string> = {}
  
  if (props.width) {
    styles.width = typeof props.width === 'number' ? `${props.width}px` : props.width
  }
  if (props.height) {
    styles.height = typeof props.height === 'number' ? `${props.height}px` : props.height
  }
  
  return styles
})

const placeholderClasses = computed(() => {
  const base = 'w-full h-full flex items-center justify-center transition-colors duration-200'
  
  const variants = {
    product: 'bg-blue-50 dark:bg-blue-900 text-blue-600 dark:text-blue-400',
    hero: 'bg-purple-50 dark:bg-purple-900 text-purple-600 dark:text-purple-400',
    avatar: 'bg-green-50 dark:bg-green-900 text-green-600 dark:text-green-400',
    chart: 'bg-yellow-50 dark:bg-yellow-900 text-yellow-600 dark:text-yellow-400',
    map: 'bg-red-50 dark:bg-red-900 text-red-600 dark:text-red-400',
    gallery: 'bg-pink-50 dark:bg-pink-900 text-pink-600 dark:text-pink-400',
    document: 'bg-indigo-50 dark:bg-indigo-900 text-indigo-600 dark:text-indigo-400',
    video: 'bg-orange-50 dark:bg-orange-900 text-orange-600 dark:text-orange-400',
    generic: 'bg-gray-50 dark:bg-gray-800 text-gray-500 dark:text-gray-400'
  }
  
  return [base, variants[props.placeholder]]
})

const placeholderStyles = computed(() => {
  const styles: Record<string, string> = {}
  
  if (props.width) {
    styles.width = typeof props.width === 'number' ? `${props.width}px` : props.width
  }
  if (props.height) {
    styles.height = typeof props.height === 'number' ? `${props.height}px` : props.height
  }
  
  return styles
})

const placeholderIcon = computed(() => {
  const icons = {
    product: {
      template: `
        <svg viewBox="0 0 24 24" fill="currentColor" class="w-12 h-12">
          <path d="M7 4V2C7 1.45 7.45 1 8 1H16C16.55 1 17 1.45 17 2V4H20C20.55 4 21 4.45 21 5S20.55 6 20 6H19V19C19 20.1 18.1 21 17 21H7C5.9 21 5 20.1 5 19V6H4C3.45 6 3 5.55 3 5S3.45 4 4 4H7ZM9 3V4H15V3H9ZM7 6V19H17V6H7Z"/>
          <path d="M9 8V17H11V8H9ZM13 8V17H15V8H13Z"/>
        </svg>
      `
    },
    hero: {
      template: `
        <svg viewBox="0 0 24 24" fill="currentColor" class="w-16 h-16">
          <path d="M21 3H3C1.9 3 1 3.9 1 5V19C1 20.1 1.9 21 3 21H21C22.1 21 23 20.1 23 19V5C23 3.9 22.1 3 21 3ZM21 19H3V5H21V19Z"/>
          <path d="M10 17L6 12L7.5 10.5L10 13L16.5 6.5L18 8L10 17Z"/>
        </svg>
      `
    },
    avatar: {
      template: `
        <svg viewBox="0 0 24 24" fill="currentColor" class="w-12 h-12">
          <path d="M12 12C14.21 12 16 10.21 16 8C16 5.79 14.21 4 12 4C9.79 4 8 5.79 8 8C8 10.21 9.79 12 12 12ZM12 14C9.33 14 4 15.34 4 18V20H20V18C20 15.34 14.67 14 12 14Z"/>
        </svg>
      `
    },
    chart: {
      template: `
        <svg viewBox="0 0 24 24" fill="currentColor" class="w-12 h-12">
          <path d="M19 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3ZM19 19H5V5H19V19Z"/>
          <path d="M7 10H9V17H7V10ZM11 7H13V17H11V7ZM15 13H17V17H15V13Z"/>
        </svg>
      `
    },
    map: {
      template: `
        <svg viewBox="0 0 24 24" fill="currentColor" class="w-12 h-12">
          <path d="M20.5 3L20.34 3.03L15 5.1L9 3L3.36 4.9C3.15 4.97 3 5.15 3 5.38V20.5C3 20.78 3.22 21 3.5 21L3.66 20.97L9 18.9L15 21L20.64 19.1C20.85 19.03 21 18.85 21 18.62V3.5C21 3.22 20.78 3 20.5 3ZM15 19L9 17V5L15 7V19Z"/>
        </svg>
      `
    },
    gallery: {
      template: `
        <svg viewBox="0 0 24 24" fill="currentColor" class="w-12 h-12">
          <path d="M21 17H7V3H21V17ZM21 1H7C5.9 1 5 1.9 5 3V17C5 18.1 5.9 19 7 19H21C22.1 19 23 18.1 23 17V3C23 1.9 22.1 1 21 1Z"/>
          <path d="M3 5H1V21C1 22.1 1.9 23 3 23H19V21H3V5Z"/>
          <path d="M17.5 10C18.33 10 19 9.33 19 8.5C19 7.67 18.33 7 17.5 7C16.67 7 16 7.67 16 8.5C16 9.33 16.67 10 17.5 10Z"/>
          <path d="M9 15L11.5 12L13.5 14.5L16.5 11L20 15H9Z"/>
        </svg>
      `
    },
    document: {
      template: `
        <svg viewBox="0 0 24 24" fill="currentColor" class="w-12 h-12">
          <path d="M6 2C4.9 2 4 2.9 4 4V20C4 21.1 4.9 22 6 22H18C19.1 22 20 21.1 20 20V8L14 2H6ZM18 20H6V4H13V9H18V20Z"/>
        </svg>
      `
    },
    video: {
      template: `
        <svg viewBox="0 0 24 24" fill="currentColor" class="w-12 h-12">
          <path d="M17 10.5V7C17 6.45 16.55 6 16 6H4C3.45 6 3 6.45 3 7V17C3 17.55 3.45 18 4 18H16C16.55 18 17 17.55 17 17V13.5L21 17.5V6.5L17 10.5Z"/>
        </svg>
      `
    },
    generic: {
      template: `
        <svg viewBox="0 0 24 24" fill="currentColor" class="w-12 h-12">
          <path d="M21 19V5C21 3.9 20.1 3 19 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19ZM19 19H5V5H19V19Z"/>
          <path d="M13.5 9C14.33 9 15 8.33 15 7.5C15 6.67 14.33 6 13.5 6C12.67 6 12 6.67 12 7.5C12 8.33 12.67 9 13.5 9Z"/>
          <path d="M5 15L8 12L11 15H5Z"/>
          <path d="M19 15L16 12L13 15H19Z"/>
        </svg>
      `
    }
  }
  
  return icons[props.placeholder]
})

const placeholderIconClasses = computed(() => {
  const sizes = {
    product: 'w-12 h-12',
    hero: 'w-16 h-16',
    avatar: 'w-12 h-12',
    chart: 'w-12 h-12',
    map: 'w-12 h-12',
    gallery: 'w-12 h-12',
    document: 'w-12 h-12',
    video: 'w-12 h-12',
    generic: 'w-12 h-12'
  }
  
  return sizes[props.placeholder]
})

const placeholderTextClasses = computed(() => {
  return 'text-sm font-medium'
})

const placeholderText = computed(() => {
  if (props.placeholderText) {
    return props.placeholderText
  }
  
  const texts = {
    product: '商品画像',
    hero: 'ヒーロー画像',
    avatar: 'プロフィール写真',
    chart: 'グラフ・チャート',
    map: 'マップ・地図',
    gallery: 'ギャラリー画像',
    document: 'ドキュメント',
    video: '動画コンテンツ',
    generic: '画像プレースホルダー'
  }
  
  return texts[props.placeholder]
})

const overlayClasses = computed(() => {
  return 'absolute inset-0 flex items-center justify-center'
})

const loadingClasses = computed(() => {
  return 'absolute inset-0 flex items-center justify-center bg-gray-100 dark:bg-gray-800'
})

const badgeClasses = computed(() => {
  return 'absolute top-2 right-2'
})

// メソッド
const handleLoad = (event: Event) => {
  imageLoaded.value = true
  emit('load', event)
}

const handleError = (event: Event) => {
  imageError.value = true
  emit('error', event)
}
</script>