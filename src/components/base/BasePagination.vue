<template>
  <nav :class="navClasses" :aria-label="ariaLabel">
    <div class="flex items-center justify-between">
      <!-- 情報表示 -->
      <div class="flex-1 flex justify-between sm:hidden">
        <button
          :disabled="currentPage <= 1"
          :class="mobileButtonClasses(currentPage <= 1)"
          @click="goToPage(currentPage - 1)"
        >
          前へ
        </button>
        <button
          :disabled="currentPage >= totalPages"
          :class="mobileButtonClasses(currentPage >= totalPages)"
          @click="goToPage(currentPage + 1)"
        >
          次へ
        </button>
      </div>
      
      <!-- デスクトップ版 -->
      <div class="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
        <!-- 情報テキスト -->
        <div>
          <p :class="infoTextClasses">
            <span class="font-medium">{{ startItem }}</span>
            から
            <span class="font-medium">{{ endItem }}</span>
            件目を表示
            （全<span class="font-medium">{{ totalItems }}</span>件中）
          </p>
        </div>
        
        <!-- ページネーション -->
        <div class="flex items-center space-x-1">
          <!-- 前へボタン -->
          <button
            :disabled="currentPage <= 1"
            :class="buttonClasses(false, currentPage <= 1)"
            @click="goToPage(currentPage - 1)"
            aria-label="前のページ"
          >
            <svg class="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clip-rule="evenodd" />
            </svg>
          </button>
          
          <!-- ページ番号 -->
          <template v-for="page in visiblePages" :key="page">
            <span v-if="page === '...'" class="px-3 py-2 text-neutral-500">
              ...
            </span>
            <button
              v-else
              :class="buttonClasses(page === currentPage, false)"
              @click="goToPage(page)"
              :aria-label="`ページ ${page}`"
              :aria-current="page === currentPage ? 'page' : undefined"
            >
              {{ page }}
            </button>
          </template>
          
          <!-- 次へボタン -->
          <button
            :disabled="currentPage >= totalPages"
            :class="buttonClasses(false, currentPage >= totalPages)"
            @click="goToPage(currentPage + 1)"
            aria-label="次のページ"
          >
            <svg class="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  // 現在のページ
  currentPage: {
    type: Number,
    default: 1,
    validator: (value) => value > 0
  },
  
  // 総ページ数
  totalPages: {
    type: Number,
    required: true,
    validator: (value) => value > 0
  },
  
  // 総アイテム数
  totalItems: {
    type: Number,
    required: true,
    validator: (value) => value >= 0
  },
  
  // 1ページあたりのアイテム数
  itemsPerPage: {
    type: Number,
    default: 10,
    validator: (value) => value > 0
  },
  
  // 表示するページ数の範囲
  visibleRange: {
    type: Number,
    default: 5,
    validator: (value) => value > 0 && value % 2 === 1 // 奇数のみ
  },
  
  // サイズ
  size: {
    type: String,
    default: 'md',
    validator: (value) => ['sm', 'md', 'lg'].includes(value)
  },
  
  // テーマ
  theme: {
    type: String,
    default: 'light',
    validator: (value) => ['light', 'dark'].includes(value)
  },
  
  // アクセシビリティラベル
  ariaLabel: {
    type: String,
    default: 'ページネーション'
  }
})

const emit = defineEmits(['page-change'])

// ナビゲーションのクラス
const navClasses = computed(() => {
  const classes = ['pagination']
  
  switch (props.size) {
    case 'sm':
      classes.push('text-body-sm')
      break
    case 'lg':
      classes.push('text-body-lg')
      break
    default:
      classes.push('text-body-regular')
  }
  
  return classes.join(' ')
})

// 情報テキストのクラス
const infoTextClasses = computed(() => {
  const classes = []
  
  if (props.theme === 'dark') {
    classes.push('text-neutral-300')
  } else {
    classes.push('text-neutral-700', 'dark:text-dark-700')
  }
  
  switch (props.size) {
    case 'sm':
      classes.push('text-caption')
      break
    case 'lg':
      classes.push('text-body-regular')
      break
    default:
      classes.push('text-body-sm')
  }
  
  return classes.join(' ')
})

// ボタンのクラス
const buttonClasses = (isActive, isDisabled) => {
  const classes = [
    'relative', 'inline-flex', 'items-center', 'justify-center',
    'font-medium', 'transition-colors', 'duration-200',
    'focus:outline-none', 'focus:ring-2', 'focus:ring-offset-2'
  ]
  
  // サイズ
  switch (props.size) {
    case 'sm':
      classes.push('px-2', 'py-1', 'text-caption', 'min-w-[2rem]')
      break
    case 'lg':
      classes.push('px-4', 'py-3', 'text-body-regular', 'min-w-[3rem]')
      break
    default:
      classes.push('px-3', 'py-2', 'text-body-sm', 'min-w-[2.5rem]')
  }
  
  // 状態とテーマ
  if (isDisabled) {
    if (props.theme === 'dark') {
      classes.push('text-neutral-600', 'cursor-not-allowed')
    } else {
      classes.push('text-neutral-400', 'cursor-not-allowed')
    }
  } else if (isActive) {
    if (props.theme === 'dark') {
      classes.push('bg-primary-600', 'text-white', 'border-primary-600')
    } else {
      classes.push('bg-primary-500', 'text-white', 'border-primary-500')
    }
    classes.push('focus:ring-primary-500')
  } else {
    if (props.theme === 'dark') {
      classes.push(
        'text-neutral-300', 'hover:text-white',
        'hover:bg-neutral-700', 'border-neutral-600'
      )
    } else {
      classes.push(
        'text-neutral-700', 'dark:text-dark-700',
        'hover:text-primary-600', 'hover:bg-neutral-50', 'dark:hover:bg-dark-200',
        'border-neutral-300', 'dark:border-dark-400'
      )
    }
    classes.push('focus:ring-primary-500')
  }
  
  // ボーダー
  classes.push('border', 'rounded-md')
  
  return classes.join(' ')
}

// モバイルボタンのクラス
const mobileButtonClasses = (isDisabled) => {
  const classes = [
    'relative', 'inline-flex', 'items-center', 'px-4', 'py-2',
    'border', 'text-body-sm', 'font-medium', 'rounded-md',
    'transition-colors', 'duration-200'
  ]
  
  if (isDisabled) {
    if (props.theme === 'dark') {
      classes.push('text-neutral-600', 'border-neutral-600', 'cursor-not-allowed')
    } else {
      classes.push('text-neutral-400', 'border-neutral-300', 'cursor-not-allowed')
    }
  } else {
    if (props.theme === 'dark') {
      classes.push(
        'text-neutral-300', 'border-neutral-600',
        'hover:text-white', 'hover:bg-neutral-700'
      )
    } else {
      classes.push(
        'text-neutral-700', 'dark:text-dark-700', 'border-neutral-300', 'dark:border-dark-400',
        'hover:text-primary-600', 'hover:bg-neutral-50', 'dark:hover:bg-dark-200'
      )
    }
  }
  
  return classes.join(' ')
}

// 表示される開始アイテム番号
const startItem = computed(() => {
  return (props.currentPage - 1) * props.itemsPerPage + 1
})

// 表示される終了アイテム番号
const endItem = computed(() => {
  return Math.min(props.currentPage * props.itemsPerPage, props.totalItems)
})

// 表示するページ番号の配列
const visiblePages = computed(() => {
  const pages = []
  const halfRange = Math.floor(props.visibleRange / 2)
  
  let startPage = Math.max(1, props.currentPage - halfRange)
  let endPage = Math.min(props.totalPages, props.currentPage + halfRange)
  
  // 範囲を調整して常に指定された数のページを表示
  if (endPage - startPage + 1 < props.visibleRange) {
    if (startPage === 1) {
      endPage = Math.min(props.totalPages, startPage + props.visibleRange - 1)
    } else {
      startPage = Math.max(1, endPage - props.visibleRange + 1)
    }
  }
  
  // 最初のページを追加
  if (startPage > 1) {
    pages.push(1)
    if (startPage > 2) {
      pages.push('...')
    }
  }
  
  // 中間のページを追加
  for (let i = startPage; i <= endPage; i++) {
    pages.push(i)
  }
  
  // 最後のページを追加
  if (endPage < props.totalPages) {
    if (endPage < props.totalPages - 1) {
      pages.push('...')
    }
    pages.push(props.totalPages)
  }
  
  return pages
})

// ページ移動処理
const goToPage = (page) => {
  if (page < 1 || page > props.totalPages || page === props.currentPage) {
    return
  }
  
  emit('page-change', page)
}
</script>