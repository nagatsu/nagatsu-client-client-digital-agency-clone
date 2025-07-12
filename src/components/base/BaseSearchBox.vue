<template>
  <div :class="containerClasses">
    <div class="relative">
      <!-- 検索入力フィールド -->
      <div class="relative">
        <input
          ref="searchInput"
          v-model="searchQuery"
          type="text"
          :placeholder="placeholder"
          :class="inputClasses"
          :aria-label="ariaLabel"
          :aria-expanded="showSuggestions"
          :aria-haspopup="true"
          :aria-owns="showSuggestions ? 'search-suggestions' : undefined"
          @input="handleInput"
          @focus="handleFocus"
          @blur="handleBlur"
          @keydown="handleKeydown"
        />
        
        <!-- 検索アイコン -->
        <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <svg class="h-5 w-5 text-neutral-400" fill="currentColor" viewBox="0 0 20 20">
            <path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd" />
          </svg>
        </div>
        
        <!-- クリアボタン -->
        <button
          v-if="searchQuery && showClearButton"
          type="button"
          class="absolute inset-y-0 right-0 pr-3 flex items-center"
          @click="clearSearch"
          aria-label="検索をクリア"
        >
          <svg class="h-5 w-5 text-neutral-400 hover:text-neutral-600" fill="currentColor" viewBox="0 0 20 20">
            <path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd" />
          </svg>
        </button>
      </div>
      
      <!-- 検索候補・結果ドロップダウン -->
      <transition
        enter-active-class="transition ease-out duration-100"
        enter-from-class="transform opacity-0 scale-95"
        enter-to-class="transform opacity-100 scale-100"
        leave-active-class="transition ease-in duration-75"
        leave-from-class="transform opacity-100 scale-100"
        leave-to-class="transform opacity-0 scale-95"
      >
        <div
          v-if="showSuggestions && (suggestions.length > 0 || shortcuts.length > 0)"
          id="search-suggestions"
          :class="dropdownClasses"
        >
          <!-- ショートカット -->
          <div v-if="shortcuts.length > 0 && !searchQuery" class="py-2">
            <div class="px-3 py-1 text-caption font-medium text-neutral-500 uppercase tracking-wide">
              ショートカット
            </div>
            <div
              v-for="(shortcut, index) in shortcuts"
              :key="`shortcut-${index}`"
              :class="[
                suggestionClasses,
                highlightedIndex === index ? suggestionActiveClasses : ''
              ]"
              @click="selectShortcut(shortcut)"
              @mouseenter="highlightedIndex = index"
            >
              <svg class="h-4 w-4 text-neutral-400 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd" />
              </svg>
              {{ shortcut.text }}
            </div>
          </div>
          
          <!-- 検索候補 -->
          <div v-if="suggestions.length > 0" class="py-2">
            <div v-if="!searchQuery" class="px-3 py-1 text-caption font-medium text-neutral-500 uppercase tracking-wide">
              最近の検索
            </div>
            <div v-else class="px-3 py-1 text-caption font-medium text-neutral-500 uppercase tracking-wide">
              候補
            </div>
            <div
              v-for="(suggestion, index) in suggestions"
              :key="`suggestion-${index}`"
              :class="[
                suggestionClasses,
                highlightedIndex === (shortcuts.length + index) ? suggestionActiveClasses : ''
              ]"
              @click="selectSuggestion(suggestion)"
              @mouseenter="highlightedIndex = shortcuts.length + index"
            >
              <svg class="h-4 w-4 text-neutral-400 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span v-html="highlightMatch(suggestion.text, searchQuery)"></span>
            </div>
          </div>
          
          <!-- 詳細検索リンク -->
          <div v-if="showAdvancedSearch" class="border-t border-neutral-200 dark:border-dark-300 py-2">
            <button
              type="button"
              :class="suggestionClasses"
              @click="openAdvancedSearch"
            >
              <svg class="h-4 w-4 text-neutral-400 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11.707 4.707a1 1 0 00-1.414-1.414L10 9.586 8.707 8.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
              </svg>
              詳細検索
            </button>
          </div>
        </div>
      </transition>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, nextTick, onMounted, onUnmounted } from 'vue'

const props = defineProps({
  // v-model用
  modelValue: {
    type: String,
    default: ''
  },
  
  // プレースホルダー
  placeholder: {
    type: String,
    default: '検索...'
  },
  
  // 検索候補
  suggestions: {
    type: Array,
    default: () => []
  },
  
  // ショートカット（固定キーワード）
  shortcuts: {
    type: Array,
    default: () => [
      { text: 'よくある質問', query: 'FAQ' },
      { text: 'お問い合わせ', query: '連絡先' },
      { text: '利用規約', query: '規約' }
    ]
  },
  
  // サイズ
  size: {
    type: String,
    default: 'md',
    validator: (value) => ['sm', 'md', 'lg'].includes(value)
  },
  
  // 詳細検索の表示
  showAdvancedSearch: {
    type: Boolean,
    default: true
  },
  
  // クリアボタンの表示
  showClearButton: {
    type: Boolean,
    default: true
  },
  
  // アクセシビリティラベル
  ariaLabel: {
    type: String,
    default: 'サイト内検索'
  }
})

const emit = defineEmits(['update:modelValue', 'search', 'suggestion-select', 'advanced-search'])

// リアクティブデータ
const searchInput = ref(null)
const searchQuery = ref(props.modelValue)
const showSuggestions = ref(false)
const highlightedIndex = ref(-1)

// コンテナのクラス
const containerClasses = computed(() => {
  const classes = ['search-box', 'relative']
  
  switch (props.size) {
    case 'sm':
      classes.push('max-w-sm')
      break
    case 'lg':
      classes.push('max-w-2xl')
      break
    default:
      classes.push('max-w-lg')
  }
  
  return classes.join(' ')
})

// 入力フィールドのクラス
const inputClasses = computed(() => {
  const classes = [
    'block', 'w-full', 'pl-10', 'border', 'border-neutral-300', 'dark:border-dark-400',
    'rounded-lg', 'bg-white', 'dark:bg-dark-100',
    'text-neutral-900', 'dark:text-dark-900',
    'placeholder-neutral-500', 'dark:placeholder-dark-500',
    'focus:outline-none', 'focus:ring-2', 'focus:ring-primary-500', 'focus:border-primary-500',
    'transition-colors', 'duration-200'
  ]
  
  switch (props.size) {
    case 'sm':
      classes.push('px-3', 'py-2', 'text-body-sm')
      break
    case 'lg':
      classes.push('px-4', 'py-4', 'text-body-lg')
      break
    default:
      classes.push('px-3', 'py-3', 'text-body-regular')
  }
  
  if (searchQuery.value && props.showClearButton) {
    classes.push('pr-10')
  } else {
    classes.push('pr-3')
  }
  
  return classes.join(' ')
})

// ドロップダウンのクラス
const dropdownClasses = computed(() => {
  return [
    'absolute', 'top-full', 'left-0', 'right-0', 'mt-1',
    'bg-white', 'dark:bg-dark-100',
    'border', 'border-neutral-200', 'dark:border-dark-300',
    'rounded-lg', 'shadow-lg', 'z-50',
    'max-h-96', 'overflow-y-auto'
  ].join(' ')
})

// 候補のクラス
const suggestionClasses = computed(() => {
  return [
    'flex', 'items-center', 'px-3', 'py-2', 'cursor-pointer',
    'text-body-sm', 'text-neutral-700', 'dark:text-dark-700',
    'hover:bg-neutral-100', 'dark:hover:bg-dark-200',
    'transition-colors', 'duration-150'
  ].join(' ')
})

// アクティブな候補のクラス
const suggestionActiveClasses = computed(() => {
  return 'bg-primary-50 dark:bg-primary-900/20 text-primary-700 dark:text-primary-300'
})

// 入力時の処理
const handleInput = (event) => {
  searchQuery.value = event.target.value
  emit('update:modelValue', searchQuery.value)
  
  showSuggestions.value = true
  highlightedIndex.value = -1
  
  // デバウンス処理で検索実行
  clearTimeout(searchTimeout.value)
  searchTimeout.value = setTimeout(() => {
    if (searchQuery.value.trim()) {
      emit('search', searchQuery.value)
    }
  }, 300)
}

const searchTimeout = ref(null)

// フォーカス時の処理
const handleFocus = () => {
  showSuggestions.value = true
}

// ブラー時の処理
const handleBlur = () => {
  // 少し遅延してから閉じる（クリックイベントを処理するため）
  setTimeout(() => {
    showSuggestions.value = false
    highlightedIndex.value = -1
  }, 150)
}

// キーボード操作
const handleKeydown = (event) => {
  const totalItems = props.shortcuts.length + props.suggestions.length
  
  switch (event.key) {
    case 'ArrowDown':
      event.preventDefault()
      highlightedIndex.value = Math.min(highlightedIndex.value + 1, totalItems - 1)
      break
    case 'ArrowUp':
      event.preventDefault()
      highlightedIndex.value = Math.max(highlightedIndex.value - 1, -1)
      break
    case 'Enter':
      event.preventDefault()
      if (highlightedIndex.value >= 0) {
        if (highlightedIndex.value < props.shortcuts.length) {
          selectShortcut(props.shortcuts[highlightedIndex.value])
        } else {
          selectSuggestion(props.suggestions[highlightedIndex.value - props.shortcuts.length])
        }
      } else if (searchQuery.value.trim()) {
        performSearch()
      }
      break
    case 'Escape':
      showSuggestions.value = false
      searchInput.value?.blur()
      break
  }
}

// ショートカット選択
const selectShortcut = (shortcut) => {
  searchQuery.value = shortcut.query
  emit('update:modelValue', shortcut.query)
  showSuggestions.value = false
  performSearch()
}

// 候補選択
const selectSuggestion = (suggestion) => {
  searchQuery.value = suggestion.text
  emit('update:modelValue', suggestion.text)
  showSuggestions.value = false
  emit('suggestion-select', suggestion)
  performSearch()
}

// 検索実行
const performSearch = () => {
  if (searchQuery.value.trim()) {
    emit('search', searchQuery.value)
  }
}

// 検索クリア
const clearSearch = () => {
  searchQuery.value = ''
  emit('update:modelValue', '')
  showSuggestions.value = false
  searchInput.value?.focus()
}

// 詳細検索を開く
const openAdvancedSearch = () => {
  emit('advanced-search', searchQuery.value)
  showSuggestions.value = false
}

// 検索語のハイライト
const highlightMatch = (text, query) => {
  if (!query) return text
  
  const regex = new RegExp(`(${query})`, 'gi')
  return text.replace(regex, '<mark class="bg-yellow-200 dark:bg-yellow-800">$1</mark>')
}

// 外部クリックで閉じる
const handleClickOutside = (event) => {
  if (!searchInput.value?.contains(event.target)) {
    showSuggestions.value = false
  }
}

onMounted(() => {
  document.addEventListener('click', handleClickOutside)
})

onUnmounted(() => {
  document.removeEventListener('click', handleClickOutside)
  if (searchTimeout.value) {
    clearTimeout(searchTimeout.value)
  }
})
</script>