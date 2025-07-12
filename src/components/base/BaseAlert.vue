<template>
  <transition
    enter-active-class="transition ease-out duration-300"
    enter-from-class="opacity-0 transform scale-95"
    enter-to-class="opacity-100 transform scale-100"
    leave-active-class="transition ease-in duration-200"
    leave-from-class="opacity-100 transform scale-100"
    leave-to-class="opacity-0 transform scale-95"
  >
    <div 
      v-if="visible" 
      :class="alertClasses" 
      :role="jdsCompliant ? 'alert' : 'alert'"
      :aria-live="jdsCompliant ? (type === 'error' ? 'assertive' : 'polite') : null"
      :aria-labelledby="jdsCompliant && title ? `${alertId}-title` : null"
      :aria-describedby="jdsCompliant ? `${alertId}-message` : null"
    >
      <div class="flex">
        <!-- アイコン -->
        <div class="flex-shrink-0">
          <component :is="iconComponent" :class="iconClasses" />
        </div>
        
        <!-- コンテンツ -->
        <div class="ml-3 flex-1">
          <!-- タイトル（JDS準拠セマンティック強化） -->
          <h3 
            v-if="title" 
            :id="jdsCompliant ? `${alertId}-title` : null"
            :class="titleClasses"
          >
            {{ title }}
          </h3>
          
          <!-- メッセージ（JDS準拠アクセシビリティ強化） -->
          <div 
            :id="jdsCompliant ? `${alertId}-message` : null"
            :class="messageClasses"
          >
            <slot>{{ message }}</slot>
          </div>
          
          <!-- アクションボタン -->
          <div v-if="$slots.actions || actionText" class="mt-4">
            <slot name="actions">
              <BaseButton
                v-if="actionText"
                size="sm"
                :variant="actionVariant"
                @click="handleAction"
              >
                {{ actionText }}
              </BaseButton>
            </slot>
          </div>
        </div>
        
        <!-- 閉じるボタン -->
        <div v-if="closable" class="ml-auto pl-3">
          <button
            type="button"
            :class="closeButtonClasses"
            @click="close"
          >
            <span class="sr-only">{{ jdsCompliant ? 'アラートを閉じる' : 'Close' }}</span>
            <svg class="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
              <path
                fill-rule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clip-rule="evenodd"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  </transition>
</template>

<script setup>
import { computed, ref, onMounted } from 'vue'
import BaseButton from './BaseButton.vue'

const props = defineProps({
  // アラートタイプ
  type: {
    type: String,
    default: 'info',
    validator: (value) => ['info', 'success', 'warning', 'error'].includes(value)
  },
  
  // タイトル
  title: {
    type: String,
    default: ''
  },
  
  // メッセージ
  message: {
    type: String,
    default: ''
  },
  
  // 閉じるボタン表示
  closable: {
    type: Boolean,
    default: true
  },
  
  // 自動非表示
  autoClose: {
    type: Boolean,
    default: false
  },
  
  // 自動非表示時間（ミリ秒）
  duration: {
    type: Number,
    default: 5000
  },
  
  // アクションボタンテキスト
  actionText: {
    type: String,
    default: ''
  },
  
  // バリアント（JDS準拠バリアント追加）
  variant: {
    type: String,
    default: 'default',
    validator: (value) => [
      'default', 'solid', 'minimal',
      'jds-default', 'jds-important', 'jds-system'  // JDS準拠バリアント
    ].includes(value)
  },
  
  // JDS準拠モード（アクセシビリティ・政府基準準拠）
  jdsCompliant: {
    type: Boolean,
    default: false
  },
  
  // JDS準拠時の優先度（スクリーンリーダー対応）
  priority: {
    type: String,
    default: 'normal',
    validator: (value) => ['low', 'normal', 'high', 'urgent'].includes(value)
  },
  
  // JDS準拠時のアラートカテゴリ（政府情報分類）
  category: {
    type: String,
    default: null,
    validator: (value) => [null, 'system', 'user', 'security', 'maintenance'].includes(value)
  }
})

const emit = defineEmits(['close', 'action'])

// リアクティブデータ（JDS準拠ID管理）
import { generateId } from '@/utils/helpers'

const visible = ref(true)
const alertId = ref(generateId('alert'))

// アラートのクラス（JDS準拠対応）
const alertClasses = computed(() => {
  const classes = []
  
  // JDS準拠モードの基本クラス
  if (props.jdsCompliant || props.variant.startsWith('jds-')) {
    classes.push('jds-alert')
    
    // JDS準拠の基本スタイル
    classes.push(
      'transition-all', 'duration-200', 'ease-in-out',
      'font-jds', 'text-base', 'leading-6',
      'rounded-md', 'border-l-4', 'p-jds-md',  // JDS推奨スタイル
      'mb-jds-md'  // 適切な下余白
    )
    
    // JDS準拠バリアント
    if (props.variant.startsWith('jds-')) {
      const jdsVariantMap = {
        'jds-default': [
          'bg-blue-50', 'border-l-blue-400', 'text-blue-700'
        ],
        'jds-important': [
          'bg-yellow-50', 'border-l-yellow-400', 'text-yellow-800'
        ],
        'jds-system': [
          'bg-gray-50', 'border-l-gray-400', 'text-gray-700'
        ]
      }
      classes.push(...(jdsVariantMap[props.variant] || jdsVariantMap['jds-default']))
    } else {
      // JDSタイプベースのカラーシステム
      const jdsTypeMap = {
        info: 'bg-blue-50 border-l-blue-400 text-blue-700',
        success: 'bg-green-50 border-l-green-400 text-green-700',
        warning: 'bg-yellow-50 border-l-yellow-400 text-yellow-800',
        error: 'bg-red-50 border-l-red-400 text-red-700'
      }
      classes.push(jdsTypeMap[props.type] || jdsTypeMap.info)
    }
    
    // JDS準拠優先度スタイル
    if (props.priority === 'urgent') {
      classes.push('ring-2', 'ring-red-200', 'shadow-lg')
    } else if (props.priority === 'high') {
      classes.push('ring-1', 'ring-yellow-200', 'shadow-md')
    }
  } else {
    // 従来の非 JDS スタイル
    classes.push('alert')
    
    // タイプベースのクラス
    if (props.variant === 'solid') {
      const solidMap = {
        info: 'bg-primary-500 text-white border-primary-500',
        success: 'bg-success-500 text-white border-success-500',
        warning: 'bg-warning-500 text-white border-warning-500',
        error: 'bg-error-500 text-white border-error-500'
      }
      classes.push(solidMap[props.type])
    } else if (props.variant === 'minimal') {
      const minimalMap = {
        info: 'bg-transparent border-primary-200 text-primary-800',
        success: 'bg-transparent border-success-200 text-success-800',
        warning: 'bg-transparent border-warning-200 text-warning-800',
        error: 'bg-transparent border-error-200 text-error-800'
      }
      classes.push(minimalMap[props.type])
    } else {
      // デフォルトバリアント
      classes.push(`alert-${props.type}`)
    }
  }
  
  return classes.join(' ')
})

// アイコンコンポーネント
const iconComponent = computed(() => {
  const iconMap = {
    info: 'InformationCircleIcon',
    success: 'CheckCircleIcon',
    warning: 'ExclamationTriangleIcon',
    error: 'XCircleIcon'
  }
  
  // SVGアイコンを直接定義
  const icons = {
    InformationCircleIcon: {
      template: `
        <svg fill="currentColor" viewBox="0 0 20 20">
          <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd" />
        </svg>
      `
    },
    CheckCircleIcon: {
      template: `
        <svg fill="currentColor" viewBox="0 0 20 20">
          <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
        </svg>
      `
    },
    ExclamationTriangleIcon: {
      template: `
        <svg fill="currentColor" viewBox="0 0 20 20">
          <path fill-rule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clip-rule="evenodd" />
        </svg>
      `
    },
    XCircleIcon: {
      template: `
        <svg fill="currentColor" viewBox="0 0 20 20">
          <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clip-rule="evenodd" />
        </svg>
      `
    }
  }
  
  return icons[iconMap[props.type]]
})

// アイコンのクラス（JDS準拠対応）
const iconClasses = computed(() => {
  const classes = ['h-5 w-5']
  
  if (props.jdsCompliant || props.variant.startsWith('jds-')) {
    // JDS準拠アイコンカラーシステム
    const jdsIconColorMap = {
      info: 'text-blue-400',
      success: 'text-green-400',
      warning: 'text-yellow-500',
      error: 'text-red-400'
    }
    classes.push(jdsIconColorMap[props.type] || 'text-blue-400')
  } else {
    if (props.variant === 'solid') {
      classes.push('text-white')
    } else {
      const colorMap = {
        info: 'text-primary-400',
        success: 'text-success-400',
        warning: 'text-warning-400',
        error: 'text-error-400'
      }
      classes.push(colorMap[props.type])
    }
  }
  
  return classes.join(' ')
})

// タイトルのクラス（JDS準拠タイポグラフィ）
const titleClasses = computed(() => {
  const classes = []
  
  if (props.jdsCompliant || props.variant.startsWith('jds-')) {
    classes.push('text-jds-hierarchy-h3', 'font-medium', 'mb-jds-sm')
    
    // JDS準拠タイトルカラーシステム
    const jdsTitleColorMap = {
      info: 'text-blue-800',
      success: 'text-green-800',
      warning: 'text-yellow-900',
      error: 'text-red-800'
    }
    classes.push(jdsTitleColorMap[props.type] || 'text-blue-800')
  } else {
    classes.push('text-body-regular', 'font-medium')
    
    if (props.variant === 'solid') {
      classes.push('text-white')
    } else {
      const colorMap = {
        info: 'text-primary-800',
        success: 'text-success-800',
        warning: 'text-warning-800',
        error: 'text-error-800'
      }
      classes.push(colorMap[props.type])
    }
  }
  
  return classes.join(' ')
})

// メッセージのクラス（JDS準拠可読性）
const messageClasses = computed(() => {
  const classes = []
  
  if (props.jdsCompliant || props.variant.startsWith('jds-')) {
    classes.push('text-jds-hierarchy-body', 'leading-relaxed')
    
    if (props.title) {
      classes.push('mt-jds-sm')
    }
    
    // JDS準拠メッセージカラーシステム
    const jdsMessageColorMap = {
      info: 'text-blue-700',
      success: 'text-green-700',
      warning: 'text-yellow-800',
      error: 'text-red-700'
    }
    classes.push(jdsMessageColorMap[props.type] || 'text-blue-700')
  } else {
    classes.push('text-body-sm')
    
    if (props.title) {
      classes.push('mt-1')
    }
    
    if (props.variant === 'solid') {
      classes.push('text-white')
    } else {
      const colorMap = {
        info: 'text-primary-700',
        success: 'text-success-700',
        warning: 'text-warning-700',
        error: 'text-error-700'
      }
      classes.push(colorMap[props.type])
    }
  }
  
  return classes.join(' ')
})

// 閉じるボタンのクラス（JDS準拠アクセシビリティ）
const closeButtonClasses = computed(() => {
  const classes = []
  
  if (props.jdsCompliant || props.variant.startsWith('jds-')) {
    classes.push(
      'rounded-md', 'p-2',  // JDS最小タッチターゲット確保
      'transition-all', 'duration-200',
      'focus:outline-none', 'focus:ring-2', 'focus:ring-jds-primary', 'focus:ring-offset-2',
      'hover:bg-gray-100', 'active:bg-gray-200'
    )
    
    // JDS準拠閉じるボタンカラーシステム
    const jdsCloseColorMap = {
      info: 'text-blue-600 hover:text-blue-700',
      success: 'text-green-600 hover:text-green-700',
      warning: 'text-yellow-700 hover:text-yellow-800',
      error: 'text-red-600 hover:text-red-700'
    }
    classes.push(jdsCloseColorMap[props.type] || 'text-blue-600 hover:text-blue-700')
  } else {
    classes.push(
      'rounded-md p-1.5 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2'
    )
    
    if (props.variant === 'solid') {
      classes.push('text-white hover:bg-white hover:bg-opacity-20 focus:ring-white')
    } else {
      const colorMap = {
        info: 'text-primary-500 hover:bg-primary-100 focus:ring-primary-500',
        success: 'text-success-500 hover:bg-success-100 focus:ring-success-500',
        warning: 'text-warning-500 hover:bg-warning-100 focus:ring-warning-500',
        error: 'text-error-500 hover:bg-error-100 focus:ring-error-500'
      }
      classes.push(colorMap[props.type])
    }
  }
  
  return classes.join(' ')
})

// アクションボタンのバリアント
const actionVariant = computed(() => {
  if (props.variant === 'solid') return 'secondary'
  return props.type === 'info' ? 'primary' : props.type
})

// 閉じる処理
const close = () => {
  visible.value = false
  emit('close')
}

// アクション処理
const handleAction = () => {
  emit('action')
}

// 自動非表示
onMounted(() => {
  if (props.autoClose && props.duration > 0) {
    setTimeout(() => {
      close()
    }, props.duration)
  }
})
</script>