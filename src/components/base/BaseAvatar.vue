<template>
  <div :class="containerClasses" class="relative">
    <!-- メインアバター -->
    <div
      :class="avatarClasses"
      class="inline-block relative overflow-hidden rounded-full bg-gray-300 dark:bg-gray-600"
      :style="avatarStyles"
    >
      <!-- 画像アバター -->
      <img
        v-if="src && !imageError"
        :src="src"
        :alt="alt || `${name}のアバター`"
        :class="imageClasses"
        class="w-full h-full object-cover"
        @error="handleImageError"
        @load="handleImageLoad"
      />
      
      <!-- イニシャルアバター -->
      <div
        v-else-if="initials"
        :class="initialsClasses"
        class="flex items-center justify-center w-full h-full text-white font-medium"
      >
        {{ initials }}
      </div>
      
      <!-- デフォルトアイコンアバター -->
      <div
        v-else
        :class="defaultIconClasses"
        class="flex items-center justify-center w-full h-full text-gray-400 dark:text-gray-500"
      >
        <component
          v-if="defaultIcon"
          :is="defaultIcon"
          :class="defaultIconSizeClasses"
          aria-hidden="true"
        />
        <svg
          v-else
          :class="defaultIconSizeClasses"
          fill="currentColor"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path
            fill-rule="evenodd"
            d="M18.685 19.097A9.723 9.723 0 0021.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 003.065 7.097A9.716 9.716 0 0012 21.75a9.716 9.716 0 006.685-2.653zm-12.54-1.285A7.486 7.486 0 0112 15a7.486 7.486 0 015.855 2.812A8.224 8.224 0 0112 20.25a8.224 8.224 0 01-5.855-2.438zM15.75 9a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
            clip-rule="evenodd"
          />
        </svg>
      </div>
      
      <!-- オンライン状態インジケーター -->
      <div
        v-if="showStatus"
        :class="statusClasses"
        class="absolute rounded-full border-2 border-white dark:border-gray-800"
        :aria-label="statusText"
        role="img"
      />
    </div>
    
    <!-- バッジ -->
    <div
      v-if="badge || $slots.badge"
      :class="badgeClasses"
      class="absolute rounded-full flex items-center justify-center"
    >
      <slot name="badge" :badge="badge">
        <span
          v-if="typeof badge === 'string'"
          :class="badgeTextClasses"
          class="text-xs font-bold"
        >
          {{ badge }}
        </span>
        <span
          v-else-if="typeof badge === 'number'"
          :class="badgeTextClasses"
          class="text-xs font-bold"
        >
          {{ badge > 99 ? '99+' : badge }}
        </span>
      </slot>
    </div>
    
    <!-- ホバー時の詳細情報 -->
    <div
      v-if="showTooltip && (name || title)"
      :class="tooltipClasses"
      class="absolute z-10 px-3 py-2 text-sm font-medium text-white bg-gray-900 rounded-lg shadow-sm opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200"
      role="tooltip"
    >
      <div v-if="name" class="font-semibold">{{ name }}</div>
      <div v-if="title" class="text-gray-300">{{ title }}</div>
      
      <!-- ツールチップ矢印 -->
      <div class="absolute w-2 h-2 bg-gray-900 transform rotate-45 -bottom-1 left-1/2 -translate-x-1/2" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'

type AvatarSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl'
type StatusType = 'online' | 'offline' | 'away' | 'busy' | 'invisible'
type BadgeVariant = 'primary' | 'secondary' | 'success' | 'warning' | 'error' | 'info'

interface Props {
  src?: string
  alt?: string
  name?: string
  title?: string
  size?: AvatarSize
  variant?: 'circle' | 'rounded' | 'square'
  status?: StatusType
  showStatus?: boolean
  badge?: string | number
  badgeVariant?: BadgeVariant
  defaultIcon?: string | object
  backgroundColor?: string
  textColor?: string
  clickable?: boolean
  showTooltip?: boolean
  loading?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  size: 'md',
  variant: 'circle',
  showStatus: false,
  badgeVariant: 'primary',
  clickable: false,
  showTooltip: false,
  loading: false
})

const emit = defineEmits<{
  'click': [event: MouseEvent]
  'image-error': [event: Event]
  'image-load': [event: Event]
}>()

// リアクティブな状態
const imageError = ref(false)
const imageLoaded = ref(false)

// 計算されたプロパティ
const initials = computed(() => {
  if (!props.name) return ''
  
  return props.name
    .split(' ')
    .slice(0, 2)
    .map(word => word.charAt(0).toUpperCase())
    .join('')
})

const statusText = computed(() => {
  const statusMap = {
    online: 'オンライン',
    offline: 'オフライン',
    away: '離席中',
    busy: '取り込み中',
    invisible: '非表示'
  }
  
  return statusMap[props.status || 'offline']
})

// スタイルクラス
const containerClasses = computed(() => {
  const base = 'relative inline-block'
  const clickable = props.clickable ? 'group cursor-pointer' : ''
  
  return [base, clickable]
})

const avatarClasses = computed(() => {
  const base = 'inline-block relative overflow-hidden bg-gray-300 dark:bg-gray-600'
  
  const sizes = {
    xs: 'w-6 h-6',
    sm: 'w-8 h-8',
    md: 'w-10 h-10',
    lg: 'w-12 h-12',
    xl: 'w-16 h-16',
    '2xl': 'w-20 h-20'
  }
  
  const variants = {
    circle: 'rounded-full',
    rounded: 'rounded-lg',
    square: 'rounded-none'
  }
  
  const clickable = props.clickable 
    ? 'transition-transform duration-200 group-hover:scale-105' 
    : ''
  
  return [base, sizes[props.size], variants[props.variant], clickable]
})

const avatarStyles = computed(() => {
  const styles: Record<string, string> = {}
  
  if (props.backgroundColor) {
    styles.backgroundColor = props.backgroundColor
  }
  
  return styles
})

const imageClasses = computed(() => {
  const base = 'w-full h-full object-cover'
  const loading = props.loading ? 'animate-pulse' : ''
  
  return [base, loading]
})

const initialsClasses = computed(() => {
  const base = 'flex items-center justify-center w-full h-full font-medium'
  
  const sizes = {
    xs: 'text-xs',
    sm: 'text-sm',
    md: 'text-base',
    lg: 'text-lg',
    xl: 'text-xl',
    '2xl': 'text-2xl'
  }
  
  const textColor = props.textColor ? '' : 'text-white'
  
  return [base, sizes[props.size], textColor]
})

const defaultIconClasses = computed(() => {
  return 'flex items-center justify-center w-full h-full text-gray-400 dark:text-gray-500'
})

const defaultIconSizeClasses = computed(() => {
  const sizes = {
    xs: 'w-3 h-3',
    sm: 'w-4 h-4',
    md: 'w-5 h-5',
    lg: 'w-6 h-6',
    xl: 'w-8 h-8',
    '2xl': 'w-10 h-10'
  }
  
  return sizes[props.size]
})

const statusClasses = computed(() => {
  const base = 'absolute rounded-full border-2 border-white dark:border-gray-800'
  
  const positions = {
    xs: 'bottom-0 right-0 w-2 h-2',
    sm: 'bottom-0 right-0 w-2.5 h-2.5',
    md: 'bottom-0 right-0 w-3 h-3',
    lg: 'bottom-0 right-0 w-3.5 h-3.5',
    xl: 'bottom-0 right-0 w-4 h-4',
    '2xl': 'bottom-0 right-0 w-5 h-5'
  }
  
  const colors = {
    online: 'bg-green-400',
    offline: 'bg-gray-400',
    away: 'bg-yellow-400',
    busy: 'bg-red-400',
    invisible: 'bg-gray-400'
  }
  
  return [base, positions[props.size], colors[props.status || 'offline']]
})

const badgeClasses = computed(() => {
  const base = 'absolute rounded-full flex items-center justify-center'
  
  const positions = {
    xs: 'top-0 right-0 w-4 h-4 -mr-1 -mt-1',
    sm: 'top-0 right-0 w-4 h-4 -mr-1 -mt-1',
    md: 'top-0 right-0 w-5 h-5 -mr-1 -mt-1',
    lg: 'top-0 right-0 w-6 h-6 -mr-1 -mt-1',
    xl: 'top-0 right-0 w-7 h-7 -mr-1 -mt-1',
    '2xl': 'top-0 right-0 w-8 h-8 -mr-1 -mt-1'
  }
  
  const variants = {
    primary: 'bg-primary-500 text-white',
    secondary: 'bg-gray-500 text-white',
    success: 'bg-green-500 text-white',
    warning: 'bg-yellow-500 text-white',
    error: 'bg-red-500 text-white',
    info: 'bg-blue-500 text-white'
  }
  
  return [base, positions[props.size], variants[props.badgeVariant]]
})

const badgeTextClasses = computed(() => {
  return 'text-xs font-bold text-white'
})

const tooltipClasses = computed(() => {
  return 'absolute z-10 px-3 py-2 text-sm font-medium text-white bg-gray-900 rounded-lg shadow-sm opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 bottom-full left-1/2 transform -translate-x-1/2 -translate-y-2 whitespace-nowrap'
})

// メソッド
const handleImageError = (event: Event) => {
  imageError.value = true
  emit('image-error', event)
}

const handleImageLoad = (event: Event) => {
  imageLoaded.value = true
  emit('image-load', event)
}

const handleClick = (event: MouseEvent) => {
  if (props.clickable) {
    emit('click', event)
  }
}
</script>