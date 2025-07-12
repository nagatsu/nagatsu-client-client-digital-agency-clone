<template>
  <span :class="badgeClasses">
    <!-- アイコン（左） -->
    <component
      v-if="icon && iconPosition === 'left'"
      :is="iconComponent"
      class="h-3 w-3 mr-1"
    />
    
    <!-- テキスト -->
    <slot>{{ text }}</slot>
    
    <!-- アイコン（右） -->
    <component
      v-if="icon && iconPosition === 'right'"
      :is="iconComponent"
      class="h-3 w-3 ml-1"
    />
    
    <!-- 削除ボタン -->
    <button
      v-if="removable"
      type="button"
      class="ml-1 inline-flex items-center justify-center h-4 w-4 rounded-full hover:bg-black hover:bg-opacity-20 focus:outline-none focus:bg-black focus:bg-opacity-20"
      @click="handleRemove"
    >
      <span class="sr-only">削除</span>
      <svg class="h-2 w-2" fill="currentColor" viewBox="0 0 8 8">
        <path d="M0 0l8 8m0-8L0 8" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />
      </svg>
    </button>
  </span>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  // テキスト
  text: {
    type: String,
    default: ''
  },
  
  // バリアント
  variant: {
    type: String,
    default: 'default',
    validator: (value) => ['default', 'primary', 'success', 'warning', 'error', 'info', 'neutral'].includes(value)
  },
  
  // サイズ
  size: {
    type: String,
    default: 'md',
    validator: (value) => ['xs', 'sm', 'md', 'lg'].includes(value)
  },
  
  // スタイル
  style: {
    type: String,
    default: 'filled',
    validator: (value) => ['filled', 'outline', 'soft'].includes(value)
  },
  
  // 角丸
  rounded: {
    type: String,
    default: 'md',
    validator: (value) => ['none', 'sm', 'md', 'lg', 'full'].includes(value)
  },
  
  // アイコン
  icon: {
    type: String,
    default: ''
  },
  
  // アイコン位置
  iconPosition: {
    type: String,
    default: 'left',
    validator: (value) => ['left', 'right'].includes(value)
  },
  
  // 削除可能
  removable: {
    type: Boolean,
    default: false
  },
  
  // ドット表示
  dot: {
    type: Boolean,
    default: false
  }
})

const emit = defineEmits(['remove'])

// バッジのクラス
const badgeClasses = computed(() => {
  const classes = ['badge']
  
  // サイズ
  const sizeMap = {
    xs: 'text-xs px-2 py-0.5',
    sm: 'text-xs px-2.5 py-0.5',
    md: 'text-sm px-2.5 py-1',
    lg: 'text-sm px-3 py-1.5'
  }
  classes.push(sizeMap[props.size])
  
  // 角丸
  const roundedMap = {
    none: 'rounded-none',
    sm: 'rounded-sm',
    md: 'rounded-md',
    lg: 'rounded-lg',
    full: 'rounded-full'
  }
  classes.push(roundedMap[props.rounded])
  
  // スタイルとバリアント
  if (props.style === 'filled') {
    const filledMap = {
      default: 'bg-neutral-100 text-neutral-800',
      primary: 'bg-primary-500 text-white',
      success: 'bg-success-500 text-white',
      warning: 'bg-warning-500 text-white',
      error: 'bg-error-500 text-white',
      info: 'bg-info-500 text-white',
      neutral: 'bg-neutral-500 text-white'
    }
    classes.push(filledMap[props.variant])
  } else if (props.style === 'outline') {
    const outlineMap = {
      default: 'border border-neutral-300 text-neutral-700 bg-white',
      primary: 'border border-primary-500 text-primary-700 bg-white',
      success: 'border border-success-500 text-success-700 bg-white',
      warning: 'border border-warning-500 text-warning-700 bg-white',
      error: 'border border-error-500 text-error-700 bg-white',
      info: 'border border-info-500 text-info-700 bg-white',
      neutral: 'border border-neutral-500 text-neutral-700 bg-white'
    }
    classes.push(outlineMap[props.variant])
  } else if (props.style === 'soft') {
    const softMap = {
      default: 'bg-neutral-100 text-neutral-800',
      primary: 'bg-primary-100 text-primary-800',
      success: 'bg-success-100 text-success-800',
      warning: 'bg-warning-100 text-warning-800',
      error: 'bg-error-100 text-error-800',
      info: 'bg-info-100 text-info-800',
      neutral: 'bg-neutral-100 text-neutral-800'
    }
    classes.push(softMap[props.variant])
  }
  
  // ドット
  if (props.dot) {
    classes.push('relative')
  }
  
  return classes.join(' ')
})

// アイコンコンポーネント
const iconComponent = computed(() => {
  const icons = {
    check: {
      template: `
        <svg fill="currentColor" viewBox="0 0 20 20">
          <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
        </svg>
      `
    },
    star: {
      template: `
        <svg fill="currentColor" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      `
    },
    user: {
      template: `
        <svg fill="currentColor" viewBox="0 0 20 20">
          <path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd" />
        </svg>
      `
    },
    tag: {
      template: `
        <svg fill="currentColor" viewBox="0 0 20 20">
          <path fill-rule="evenodd" d="M17.707 9.293a1 1 0 010 1.414l-7 7a1 1 0 01-1.414 0l-7-7A.997.997 0 012 10V5a3 3 0 013-3h5c.256 0 .512.098.707.293l7 7zM5 6a1 1 0 100-2 1 1 0 000 2z" clip-rule="evenodd" />
        </svg>
      `
    }
  }
  
  return icons[props.icon] || null
})

// 削除処理
const handleRemove = (event) => {
  event.stopPropagation()
  emit('remove')
}
</script>

<style scoped>
/* ドット表示 */
.badge.relative::before {
  content: '';
  position: absolute;
  top: -2px;
  right: -2px;
  width: 6px;
  height: 6px;
  background-color: #ef4444;
  border-radius: 50%;
  border: 1px solid white;
}
</style>