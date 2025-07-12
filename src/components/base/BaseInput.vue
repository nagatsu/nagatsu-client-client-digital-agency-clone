<template>
  <div :class="jdsCompliant ? 'jds-form-group space-y-2' : 'form-group'">
    <!-- ラベル（JDS準拠強化） -->
    <label 
      v-if="label" 
      :for="inputId" 
      :class="jdsCompliant ? 'jds-form-label block text-sm font-medium text-gray-700' : 'form-label'"
    >
      {{ label }}
      <span 
        v-if="required" 
        :class="jdsCompliant ? 'text-red-500 ml-1' : 'text-error-500 ml-1'"
        aria-label="必須項目"
      >*</span>
    </label>
    
    <!-- JDS準拠時の入力説明 -->
    <p 
      v-if="jdsCompliant && inputDescription" 
      :id="`${inputId}-description`"
      class="text-sm text-gray-600"
    >
      {{ inputDescription }}
    </p>
    
    <!-- JDS準拠時の入力例 -->
    <p 
      v-if="jdsCompliant && inputExample" 
      :id="`${inputId}-example`"
      class="text-sm text-gray-500"
    >
      例: {{ inputExample }}
    </p>
    
    <!-- 入力フィールド -->
    <div class="relative">
      <!-- 左アイコン -->
      <div v-if="iconLeft" class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
        <component :is="iconLeft" :class="iconClasses" />
      </div>
      
      <!-- メイン入力エリア（JDS準拠アクセシビリティ強化） -->
      <component
        :is="inputComponent"
        :id="inputId"
        :value="modelValue"
        :class="inputClasses"
        :placeholder="placeholder"
        :disabled="disabled"
        :readonly="readonly"
        :type="actualType"
        :rows="rows"
        :maxlength="maxlength"
        :required="required"
        :aria-required="required"
        :aria-invalid="jdsCompliant && (validationState === 'invalid' || error) ? 'true' : null"
        :aria-describedby="getAriaDescribedBy()"
        v-bind="$attrs"
        @input="handleInput"
        @blur="handleBlur"
        @focus="handleFocus"
      />
      
      <!-- 右アイコン -->
      <div v-if="iconRight" class="absolute inset-y-0 right-0 pr-3 flex items-center">
        <component :is="iconRight" :class="iconClasses" />
      </div>
      
      <!-- パスワード表示切替ボタン -->
      <button
        v-if="type === 'password' && showPasswordToggle"
        type="button"
        class="absolute inset-y-0 right-0 pr-3 flex items-center"
        @click="togglePasswordVisibility"
      >
        <svg v-if="showPassword" class="h-5 w-5 text-neutral-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
        </svg>
        <svg v-else class="h-5 w-5 text-neutral-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.878 9.878L3 3m6.878 6.878L21 21" />
        </svg>
      </button>
      
      <!-- 文字数カウンター -->
      <div v-if="maxlength && showCounter" class="absolute inset-y-0 right-0 pr-3 flex items-end pb-3">
        <span class="text-caption text-neutral-500">{{ modelValue?.length || 0 }}/{{ maxlength }}</span>
      </div>
    </div>
    
    <!-- ヘルプテキスト（JDS準拠改善） -->
    <p 
      v-if="helpText && !errorMessage" 
      :id="`${inputId}-help`"
      :class="jdsCompliant ? 'text-sm text-gray-600' : 'form-help'"
    >
      {{ helpText }}
    </p>
    
    <!-- エラーメッセージ（JDS準拠：建設的エラー） -->
    <div 
      v-if="errorMessage || error" 
      :id="`${inputId}-error`"
      :class="jdsCompliant ? 'text-sm text-red-600' : 'form-error'"
      role="alert"
      aria-live="polite"
    >
      <span class="font-medium">{{ errorMessage || error }}</span>
      <span v-if="jdsCompliant && inputExample" class="block mt-1 text-red-500">
        正しい形式: {{ inputExample }}
      </span>
    </div>
    
    <!-- JDS準拠時のバリデーション成功メッセージ -->
    <div 
      v-if="jdsCompliant && validationState === 'valid'" 
      :id="`${inputId}-success`"
      class="text-sm text-green-600"
      role="status"
      aria-live="polite"
    >
      <span class="font-medium">入力内容に問題ありません</span>
    </div>
  </div>
</template>

<script setup>
import { computed, ref, useAttrs } from 'vue'
import { generateId } from '@/utils/helpers'

const props = defineProps({
  // v-model
  modelValue: {
    type: [String, Number],
    default: ''
  },
  
  // 入力タイプ
  type: {
    type: String,
    default: 'text'
  },
  
  // JDS準拠モード（アクセシビリティ・政府基準準拠）
  jdsCompliant: {
    type: Boolean,
    default: false
  },
  
  // ラベル
  label: {
    type: String,
    default: ''
  },
  
  // プレースホルダー
  placeholder: {
    type: String,
    default: ''
  },
  
  // ヘルプテキスト
  helpText: {
    type: String,
    default: ''
  },
  
  // エラーメッセージ
  error: {
    type: String,
    default: ''
  },
  
  // 必須フィールド
  required: {
    type: Boolean,
    default: false
  },
  
  // 無効状態
  disabled: {
    type: Boolean,
    default: false
  },
  
  // 読み取り専用
  readonly: {
    type: Boolean,
    default: false
  },
  
  // サイズ
  size: {
    type: String,
    default: 'md',
    validator: (value) => ['sm', 'md', 'lg'].includes(value)
  },
  
  // アイコン
  iconLeft: {
    type: [String, Object],
    default: null
  },
  
  iconRight: {
    type: [String, Object],
    default: null
  },
  
  // textarea用
  rows: {
    type: Number,
    default: 3
  },
  
  // 最大文字数
  maxlength: {
    type: Number,
    default: null
  },
  
  // 文字数カウンター表示
  showCounter: {
    type: Boolean,
    default: false
  },
  
  // パスワード表示切替
  showPasswordToggle: {
    type: Boolean,
    default: true
  },
  
  // JDS準拠時のバリデーション状態
  validationState: {
    type: String,
    default: null,
    validator: (value) => [null, 'valid', 'invalid', 'warning'].includes(value)
  },
  
  // JDS準拠時の入力説明（建設的ヘルプ）
  inputDescription: {
    type: String,
    default: ''
  },
  
  // JDS準拠時の入力例
  inputExample: {
    type: String,
    default: ''
  }
})

const emit = defineEmits(['update:modelValue', 'blur', 'focus'])

const attrs = useAttrs()

// リアクティブデータ
const inputId = ref(generateId('input'))
const showPassword = ref(false)

// 入力コンポーネントの決定
const inputComponent = computed(() => {
  if (props.type === 'textarea') return 'textarea'
  return 'input'
})

// 実際の入力タイプ（パスワード表示切替対応）
const actualType = computed(() => {
  if (props.type === 'password' && showPassword.value) return 'text'
  return props.type
})

// 入力フィールドのクラス（JDS準拠対応）
const inputClasses = computed(() => {
  const classes = []
  
  // JDS準拠モードの基本スタイル
  if (props.jdsCompliant) {
    classes.push(
      'jds-input',
      'border-2', 'rounded-md',
      'font-jds', 'text-base', 'leading-6',
      'bg-white', 'border-gray-300',
      'focus:outline-none', 'focus:ring-2', 'focus:ring-jds-primary', 'focus:border-jds-primary',
      'transition-all', 'duration-200'
    )
    
    // JDS準拠サイズ（十分なタッチターゲット確保）
    const jdsSizeMap = {
      sm: 'px-3 py-2 text-sm min-h-[40px]',
      md: 'px-4 py-3 text-base min-h-[44px]',  // JDS標準
      lg: 'px-5 py-4 text-lg min-h-[48px]'
    }
    classes.push(jdsSizeMap[props.size] || jdsSizeMap.md)
    
    // JDS準拠バリデーション状態
    if (props.validationState === 'invalid' || props.error) {
      classes.push(
        'border-red-500', 'focus:border-red-500', 'focus:ring-red-500',
        'bg-red-50'
      )
    } else if (props.validationState === 'valid') {
      classes.push(
        'border-green-500', 'focus:border-green-500', 'focus:ring-green-500',
        'bg-green-50'
      )
    } else if (props.validationState === 'warning') {
      classes.push(
        'border-yellow-500', 'focus:border-yellow-500', 'focus:ring-yellow-500',
        'bg-yellow-50'
      )
    }
  } else {
    // 従来の非JDS スタイル
    classes.push('form-input')
    
    const sizeMap = {
      sm: 'px-3 py-2 text-body-sm',
      md: 'px-4 py-3 text-body-regular',
      lg: 'px-5 py-4 text-body-lg'
    }
    
    if (props.size !== 'md') {
      classes.push(sizeMap[props.size])
    }
    
    // エラー状態
    if (props.error) {
      classes.push('border-error-500 focus:border-error-500 focus:ring-error-500')
    }
  }
  
  // アイコンのパディング調整（JDS・非JDS共通）
  if (props.iconLeft) {
    classes.push('pl-10')
  }
  
  if (props.iconRight || (props.type === 'password' && props.showPasswordToggle)) {
    classes.push('pr-10')
  }
  
  if (props.maxlength && props.showCounter) {
    classes.push('pr-16')
  }
  
  // 無効・読み取り専用状態（JDS・非JDS共通）
  if (props.disabled) {
    if (props.jdsCompliant) {
      classes.push('bg-gray-100', 'border-gray-200', 'text-gray-500', 'cursor-not-allowed')
    } else {
      classes.push('bg-neutral-100', 'cursor-not-allowed')
    }
  }
  
  if (props.readonly) {
    if (props.jdsCompliant) {
      classes.push('bg-gray-50', 'border-gray-200')
    } else {
      classes.push('bg-neutral-50')
    }
  }
  
  return classes.join(' ')
})

// アイコンのクラス
const iconClasses = computed(() => {
  const classes = ['h-5 w-5']
  
  if (props.error) {
    classes.push('text-error-400')
  } else {
    classes.push('text-neutral-400')
  }
  
  return classes.join(' ')
})

// パスワード表示切替
const togglePasswordVisibility = () => {
  showPassword.value = !showPassword.value
}

// イベントハンドラー
const handleInput = (event) => {
  emit('update:modelValue', event.target.value)
}

const handleBlur = (event) => {
  emit('blur', event)
}

const handleFocus = (event) => {
  emit('focus', event)
}

// JDS準拠時のARIA属性管理（アクセシビリティ強化）
const getAriaDescribedBy = () => {
  if (!props.jdsCompliant) return null
  
  const descriptions = []
  
  // 入力説明があれば追加
  if (props.inputDescription) {
    descriptions.push(`${inputId.value}-description`)
  }
  
  // 入力例があれば追加
  if (props.inputExample) {
    descriptions.push(`${inputId.value}-example`)
  }
  
  // ヘルプテキストがあり、エラーがない場合追加
  if (props.helpText && !props.errorMessage && !props.error) {
    descriptions.push(`${inputId.value}-help`)
  }
  
  // エラーメッセージがある場合追加
  if (props.errorMessage || props.error) {
    descriptions.push(`${inputId.value}-error`)
  }
  
  // 成功状態の場合追加
  if (props.validationState === 'valid') {
    descriptions.push(`${inputId.value}-success`)
  }
  
  return descriptions.length > 0 ? descriptions.join(' ') : null
}
</script>