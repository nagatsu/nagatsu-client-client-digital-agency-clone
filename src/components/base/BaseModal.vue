<template>
  <teleport to="body">
    <transition
      enter-active-class="transition ease-out duration-300"
      enter-from-class="opacity-0"
      enter-to-class="opacity-100"
      leave-active-class="transition ease-in duration-200"
      leave-from-class="opacity-100"
      leave-to-class="opacity-0"
    >
      <div
        v-if="modelValue"
        class="fixed inset-0 z-50 overflow-y-auto"
        @click="handleBackdropClick"
      >
        <!-- オーバーレイ -->
        <div class="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm" aria-hidden="true"></div>
        
        <!-- モーダルコンテナ -->
        <div class="flex min-h-full items-center justify-center p-4 text-center sm:p-0">
          <transition
            enter-active-class="transition ease-out duration-300"
            enter-from-class="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            enter-to-class="opacity-100 translate-y-0 sm:scale-100"
            leave-active-class="transition ease-in duration-200"
            leave-from-class="opacity-100 translate-y-0 sm:scale-100"
            leave-to-class="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
          >
            <div
              :class="modalClasses"
              role="dialog"
              aria-modal="true"
              :aria-labelledby="title ? `${modalId}-title` : undefined"
              :aria-describedby="jdsCompliant && modalDescription ? `${modalId}-description` : undefined"
              :aria-live="jdsCompliant ? 'polite' : null"
              @click.stop
            >
              <!-- ヘッダー（JDS準拠セマンティック強化） -->
              <header v-if="$slots.header || title || closable" :class="headerClasses">
                <div class="flex items-center">
                  <slot name="header">
                    <h2 v-if="title" :id="`${modalId}-title`" :class="titleClasses">
                      {{ title }}
                    </h2>
                  </slot>
                </div>
                
                <button
                  v-if="closable"
                  type="button"
                  :class="closeButtonClasses"
                  :aria-label="jdsCompliant ? 'モーダルダイアログを閉じる' : '閉じる'"
                  @click="close"
                >
                  <span class="sr-only">{{ jdsCompliant ? 'モーダルダイアログを閉じる' : '閉じる' }}</span>
                  <svg class="h-5 w-5" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                    <path
                      fill-rule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </button>
              </header>
              
              <!-- JDS準拠時のモーダル説明 -->
              <div 
                v-if="jdsCompliant && modalDescription"
                :id="`${modalId}-description`"
                class="px-jds-md py-jds-sm text-sm text-gray-600 border-b border-gray-200"
              >
                {{ modalDescription }}
              </div>
              
              <!-- ボディ（JDS準拠スタイリング） -->
              <main :class="bodyClasses">
                <slot></slot>
              </main>
              
              <!-- フッター（JDS準拠セマンティック） -->
              <footer v-if="$slots.footer" :class="footerClasses">
                <slot name="footer"></slot>
              </footer>
            </div>
          </transition>
        </div>
      </div>
    </transition>
  </teleport>
</template>

<script setup>
import { computed, watch, nextTick, ref } from 'vue'

const props = defineProps({
  // モーダル表示状態
  modelValue: {
    type: Boolean,
    default: false
  },
  
  // タイトル
  title: {
    type: String,
    default: ''
  },
  
  // サイズ
  size: {
    type: String,
    default: 'md',
    validator: (value) => ['xs', 'sm', 'md', 'lg', 'xl', 'full'].includes(value)
  },
  
  // 閉じるボタン表示
  closable: {
    type: Boolean,
    default: true
  },
  
  // 背景クリックで閉じる
  closeOnBackdrop: {
    type: Boolean,
    default: true
  },
  
  // ESCキーで閉じる
  closeOnEscape: {
    type: Boolean,
    default: true
  },
  
  // フォーカストラップ
  trapFocus: {
    type: Boolean,
    default: true
  },
  
  // パディングなし
  noPadding: {
    type: Boolean,
    default: false
  },
  
  // JDS準拠モード（アクセシビリティ・政府基準準拠）
  jdsCompliant: {
    type: Boolean,
    default: false
  },
  
  // JDS準拠時のモーダル説明（アクセシビリティ向上）
  modalDescription: {
    type: String,
    default: null
  },
  
  // JDS準拠時のモーダルタイプ（政府情報分類）
  modalType: {
    type: String,
    default: 'dialog',
    validator: (value) => ['dialog', 'alert', 'confirmation', 'form', 'information'].includes(value)
  },
  
  // JDS準拠時の重要度（スクリーンリーダー対応）
  importance: {
    type: String,
    default: 'normal',
    validator: (value) => ['low', 'normal', 'high', 'critical'].includes(value)
  }
})

const emit = defineEmits(['update:modelValue', 'close', 'open'])

// リアクティブデータ（JDS準拠ID管理）
import { generateId } from '@/utils/helpers'
const modalId = ref(generateId('modal'))

// モーダルのクラス（JDS準拠対応）
const modalClasses = computed(() => {
  const classes = []
  
  if (props.jdsCompliant) {
    classes.push(
      'jds-modal',
      'relative', 'transform', 'overflow-hidden',
      'bg-white', 'text-left', 'shadow-xl', 'transition-all',
      'rounded-md',  // JDS推奨の適度な角丸
      'sm:my-8',
      'font-jds', 'text-base', 'leading-6'  // JDS可読性基準
    )
    
    // JDS準拠サイズ（アクセシビリティ考慮）
    const jdsSizeMap = {
      xs: 'sm:max-w-sm sm:w-full',     // 最小でも読みやすいサイズ
      sm: 'sm:max-w-md sm:w-full',
      md: 'sm:max-w-lg sm:w-full',     // JDS標準
      lg: 'sm:max-w-xl sm:w-full',
      xl: 'sm:max-w-2xl sm:w-full',
      full: 'sm:max-w-4xl sm:w-full'
    }
    classes.push(jdsSizeMap[props.size] || jdsSizeMap.md)
    
    // JDS準拠重要度スタイル
    if (props.importance === 'critical') {
      classes.push('ring-4', 'ring-red-200', 'border-2', 'border-red-300')
    } else if (props.importance === 'high') {
      classes.push('ring-2', 'ring-yellow-200', 'border', 'border-yellow-300')
    } else {
      classes.push('border', 'border-gray-200')
    }
  } else {
    // 従来の非 JDS スタイル
    classes.push(
      'relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8'
    )
    
    const sizeMap = {
      xs: 'sm:max-w-xs sm:w-full',
      sm: 'sm:max-w-sm sm:w-full',
      md: 'sm:max-w-md sm:w-full',
      lg: 'sm:max-w-lg sm:w-full',
      xl: 'sm:max-w-xl sm:w-full',
      full: 'sm:max-w-4xl sm:w-full'
    }
    classes.push(sizeMap[props.size])
  }
  
  return classes.join(' ')
})

// ヘッダーのクラス（JDS準拠セマンティック）
const headerClasses = computed(() => {
  if (props.jdsCompliant) {
    return 'jds-modal-header flex items-center justify-between px-jds-md py-jds-sm border-b border-gray-200 bg-gray-50'
  }
  return 'flex items-center justify-between p-6 border-b border-neutral-200'
})

// タイトルのクラス（JDS準拠タイポグラフィ）
const titleClasses = computed(() => {
  if (props.jdsCompliant) {
    return 'text-jds-hierarchy-h2 font-medium text-jds-text leading-relaxed'
  }
  return 'text-heading-4 font-bold text-neutral-900'
})

// 閉じるボタンのクラス（JDS準拠アクセシビリティ）
const closeButtonClasses = computed(() => {
  if (props.jdsCompliant) {
    return [
      'jds-modal-close',
      'rounded-md', 'p-2',  // JDS最小タッチターゲット確保
      'text-gray-500', 'hover:text-gray-700', 'hover:bg-gray-100',
      'focus:outline-none', 'focus:ring-2', 'focus:ring-jds-primary', 'focus:ring-offset-2',
      'transition-all', 'duration-200'
    ].join(' ')
  }
  return 'rounded-md p-2 text-neutral-400 hover:text-neutral-500 hover:bg-neutral-100 focus:outline-none focus:ring-2 focus:ring-primary-500 transition-colors'
})

// ボディのクラス（JDS準拠スペーシング）
const bodyClasses = computed(() => {
  const classes = []
  
  if (props.jdsCompliant) {
    classes.push('jds-modal-body')
    
    if (!props.noPadding) {
      classes.push('px-jds-md', 'py-jds-lg')  // JDS 8pxグリッド
    }
  } else {
    if (!props.noPadding) {
      classes.push('p-6')
    }
  }
  
  return classes.join(' ')
})

// フッターのクラス（JDS準拠セマンティック）
const footerClasses = computed(() => {
  if (props.jdsCompliant) {
    return 'jds-modal-footer flex items-center justify-end gap-jds-sm px-jds-md py-jds-sm border-t border-gray-200 bg-gray-50'
  }
  return 'flex items-center justify-end gap-3 p-6 border-t border-neutral-200 bg-neutral-50'
})

// 背景クリック処理
const handleBackdropClick = () => {
  if (props.closeOnBackdrop) {
    close()
  }
}

// 閉じる処理
const close = () => {
  emit('update:modelValue', false)
  emit('close')
}

// ESCキー処理
const handleEscapeKey = (event) => {
  if (event.key === 'Escape' && props.closeOnEscape) {
    close()
  }
}

// フォーカス可能要素を取得
const getFocusableElements = (container) => {
  const focusableSelectors = [
    'button',
    '[href]',
    'input',
    'select',
    'textarea',
    '[tabindex]:not([tabindex="-1"])'
  ]
  
  return container.querySelectorAll(focusableSelectors.join(', '))
}

// フォーカストラップ処理
const handleTabKey = (event) => {
  if (!props.trapFocus) return
  
  const modal = event.currentTarget
  const focusableElements = getFocusableElements(modal)
  const firstElement = focusableElements[0]
  const lastElement = focusableElements[focusableElements.length - 1]
  
  if (event.shiftKey) {
    if (document.activeElement === firstElement) {
      event.preventDefault()
      lastElement.focus()
    }
  } else {
    if (document.activeElement === lastElement) {
      event.preventDefault()
      firstElement.focus()
    }
  }
}

// モーダル表示/非表示の監視
watch(
  () => props.modelValue,
  async (newValue) => {
    if (newValue) {
      // 開く時の処理
      document.body.style.overflow = 'hidden'
      document.addEventListener('keydown', handleEscapeKey)
      
      emit('open')
      
      // 初期フォーカス設定
      if (props.trapFocus) {
        await nextTick()
        const modal = document.querySelector('[role="dialog"]')
        if (modal) {
          const focusableElements = getFocusableElements(modal)
          if (focusableElements.length > 0) {
            focusableElements[0].focus()
          }
          modal.addEventListener('keydown', (e) => {
            if (e.key === 'Tab') {
              handleTabKey(e)
            }
          })
        }
      }
    } else {
      // 閉じる時の処理
      document.body.style.overflow = ''
      document.removeEventListener('keydown', handleEscapeKey)
    }
  },
  { immediate: true }
)
</script>