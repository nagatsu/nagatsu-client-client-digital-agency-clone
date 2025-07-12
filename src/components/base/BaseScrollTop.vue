<template>
  <Transition
    name="scroll-top"
    enter-active-class="transition ease-out duration-300"
    enter-from-class="transform opacity-0 scale-95 translate-y-2"
    enter-to-class="transform opacity-100 scale-100 translate-y-0"
    leave-active-class="transition ease-in duration-200"
    leave-from-class="transform opacity-100 scale-100 translate-y-0"
    leave-to-class="transform opacity-0 scale-95 translate-y-2"
  >
    <button
      v-show="isVisible"
      :class="buttonClasses"
      class="fixed z-50 flex items-center justify-center rounded-full shadow-lg transition-all duration-300 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-offset-2"
      :style="positionStyles"
      :aria-label="ariaLabel"
      @click="scrollToTop"
      @mouseenter="handleMouseEnter"
      @mouseleave="handleMouseLeave"
    >
      <!-- アイコン -->
      <!-- Arrow Up -->
      <svg v-if="icon === 'arrow-up'" :class="iconClasses" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="transition-transform duration-200" aria-hidden="true">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 10l7-7m0 0l7 7m-7-7v18" />
      </svg>
      
      <!-- Chevron Up -->
      <svg v-else-if="icon === 'chevron-up'" :class="iconClasses" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="transition-transform duration-200" aria-hidden="true">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 15l7-7 7 7" />
      </svg>
      
      <!-- Arrow Circle Up -->
      <svg v-else-if="icon === 'arrow-circle-up'" :class="iconClasses" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="transition-transform duration-200" aria-hidden="true">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 11l3-3m0 0l3 3m-3-3v8m0-13a9 9 0 110 18 9 9 0 010-18z" />
      </svg>
      
      <!-- プログレス表示（オプション） -->
      <div
        v-if="showProgress"
        class="absolute inset-0 rounded-full"
        :style="progressStyles"
      >
        <svg
          class="w-full h-full transform -rotate-90"
          viewBox="0 0 36 36"
        >
          <circle
            cx="18"
            cy="18"
            r="16"
            fill="none"
            class="stroke-current opacity-25"
            stroke-width="2"
          />
          <circle
            cx="18"
            cy="18"
            r="16"
            fill="none"
            class="stroke-current transition-all duration-300"
            stroke-width="2"
            :stroke-dasharray="circumference"
            :stroke-dashoffset="progressOffset"
            stroke-linecap="round"
          />
        </svg>
      </div>
      
      <!-- ツールチップ（オプション） -->
      <div
        v-if="showTooltip && isHovered"
        :class="tooltipClasses"
        class="absolute bottom-full mb-2 px-2 py-1 text-xs font-medium rounded shadow-lg whitespace-nowrap pointer-events-none"
      >
        {{ tooltipText }}
        <div
          class="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-2 border-r-2 border-t-2 border-transparent"
          :class="tooltipArrowClasses"
        ></div>
      </div>
    </button>
  </Transition>
</template>

<script setup lang="ts">
import { computed, onMounted, onUnmounted, ref } from 'vue'

interface Props {
  threshold?: number
  behavior?: 'smooth' | 'auto'
  position?: 'bottom-right' | 'bottom-left' | 'bottom-center'
  offset?: { bottom?: number; right?: number; left?: number }
  variant?: 'default' | 'primary' | 'secondary' | 'minimal'
  size?: 'sm' | 'md' | 'lg'
  showProgress?: boolean
  showTooltip?: boolean
  tooltipText?: string
  ariaLabel?: string
  icon?: 'arrow-up' | 'chevron-up' | 'arrow-circle-up'
}

const props = withDefaults(defineProps<Props>(), {
  threshold: 300,
  behavior: 'smooth',
  position: 'bottom-right',
  offset: () => ({ bottom: 24, right: 24 }),
  variant: 'default',
  size: 'md',
  showProgress: false,
  showTooltip: true,
  tooltipText: 'トップに戻る',
  ariaLabel: 'ページの先頭に戻る',
  icon: 'arrow-up'
})

const emit = defineEmits<{
  'scroll-start': []
  'scroll-end': []
  'visibility-change': [visible: boolean]
}>()

// リアクティブな状態
const isVisible = ref(false)
const isHovered = ref(false)
const scrollY = ref(0)
const documentHeight = ref(0)
const windowHeight = ref(0)

// スクロール進捗の計算
const scrollProgress = computed(() => {
  if (documentHeight.value <= windowHeight.value) return 0
  const maxScroll = documentHeight.value - windowHeight.value
  return Math.min(scrollY.value / maxScroll, 1)
})

// プログレス円の設定
const circumference = 2 * Math.PI * 16 // r=16の円周
const progressOffset = computed(() => {
  return circumference * (1 - scrollProgress.value)
})

// ポジションスタイル
const positionStyles = computed(() => {
  const styles: Record<string, string> = {}
  
  switch (props.position) {
    case 'bottom-right':
      styles.bottom = `${props.offset.bottom || 24}px`
      styles.right = `${props.offset.right || 24}px`
      break
    case 'bottom-left':
      styles.bottom = `${props.offset.bottom || 24}px`
      styles.left = `${props.offset.left || 24}px`
      break
    case 'bottom-center':
      styles.bottom = `${props.offset.bottom || 24}px`
      styles.left = '50%'
      styles.transform = 'translateX(-50%)'
      break
  }
  
  return styles
})

// ボタンクラス
const buttonClasses = computed(() => {
  const base = 'fixed z-50 flex items-center justify-center rounded-full shadow-lg transition-all duration-300 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-offset-2'
  
  // サイズ
  const sizes = {
    sm: 'w-10 h-10',
    md: 'w-12 h-12',
    lg: 'w-14 h-14'
  }
  
  // バリアント
  const variants = {
    default: 'bg-white text-gray-700 hover:bg-gray-50 focus:ring-blue-500 border border-gray-200',
    primary: 'bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500',
    secondary: 'bg-gray-600 text-white hover:bg-gray-700 focus:ring-gray-500',
    minimal: 'bg-black bg-opacity-20 text-white hover:bg-opacity-30 backdrop-blur-sm focus:ring-white'
  }
  
  return [
    base,
    sizes[props.size],
    variants[props.variant]
  ]
})

// アイコンクラス
const iconClasses = computed(() => {
  const sizes = {
    sm: 'w-4 h-4',
    md: 'w-5 h-5',
    lg: 'w-6 h-6'
  }
  
  const hoverEffect = isHovered.value ? 'transform -translate-y-0.5' : ''
  
  return [
    sizes[props.size],
    hoverEffect
  ]
})

// ツールチップクラス
const tooltipClasses = computed(() => {
  const variants = {
    default: 'bg-gray-900 text-white',
    primary: 'bg-blue-600 text-white',
    secondary: 'bg-gray-600 text-white',
    minimal: 'bg-black bg-opacity-75 text-white backdrop-blur-sm'
  }
  
  return variants[props.variant]
})

const tooltipArrowClasses = computed(() => {
  const variants = {
    default: 'border-t-gray-900',
    primary: 'border-t-blue-600',
    secondary: 'border-t-gray-600',
    minimal: 'border-t-black border-opacity-75'
  }
  
  return variants[props.variant]
})

const progressStyles = computed(() => {
  return {
    color: props.variant === 'default' ? '#3b82f6' : 'currentColor'
  }
})

// アイコンコンポーネント
// アイコンコンポーネントは直接SVGで実装済み

// イベントハンドラー
const handleScroll = () => {
  scrollY.value = window.scrollY
  documentHeight.value = document.documentElement.scrollHeight
  windowHeight.value = window.innerHeight
  
  const shouldShow = scrollY.value > props.threshold
  
  if (shouldShow !== isVisible.value) {
    isVisible.value = shouldShow
    emit('visibility-change', shouldShow)
  }
}

const handleMouseEnter = () => {
  isHovered.value = true
}

const handleMouseLeave = () => {
  isHovered.value = false
}

const scrollToTop = () => {
  emit('scroll-start')
  
  window.scrollTo({
    top: 0,
    behavior: props.behavior
  })
  
  // スムーススクロール完了の検出
  if (props.behavior === 'smooth') {
    const checkScrollEnd = () => {
      if (window.scrollY === 0) {
        emit('scroll-end')
      } else {
        requestAnimationFrame(checkScrollEnd)
      }
    }
    requestAnimationFrame(checkScrollEnd)
  } else {
    // 即座にスクロール完了
    setTimeout(() => emit('scroll-end'), 0)
  }
}

// ライフサイクル
onMounted(() => {
  window.addEventListener('scroll', handleScroll, { passive: true })
  window.addEventListener('resize', handleScroll, { passive: true })
  handleScroll() // 初期状態の設定
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
  window.removeEventListener('resize', handleScroll)
})
</script>

