<template>
  <div :class="jdsCompliant ? 'jds-textarea-group space-y-2' : 'relative'">
    <!-- ラベル（JDS準拠強化） -->
    <label 
      v-if="label" 
      :for="textareaId" 
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
      v-if="jdsCompliant && textareaDescription" 
      :id="`${textareaId}-description`"
      class="text-sm text-gray-600"
    >
      {{ textareaDescription }}
    </p>
    
    <!-- JDS準拠時の入力例 -->
    <p 
      v-if="jdsCompliant && textareaExample" 
      :id="`${textareaId}-example`"
      class="text-sm text-gray-500"
    >
      例: {{ textareaExample }}
    </p>
    
    <!-- メインテキストエリア -->
    <div class="relative">
      <textarea
        :id="textareaId"
        v-model="internalValue"
        :placeholder="placeholder"
        :disabled="disabled"
        :readonly="readonly"
        :rows="rows"
        :cols="cols"
        :maxlength="maxlength"
        :required="required"
        :aria-required="required"
        :aria-invalid="jdsCompliant && (validationState === 'invalid' || error) ? 'true' : null"
        :aria-describedby="getAriaDescribedBy()"
        :class="textareaClasses"
        @input="handleInput"
        @blur="handleBlur"
        @focus="handleFocus"
      />
      
      <!-- 文字数カウンター（JDS準拠改善） -->
      <div v-if="showCounter" :class="counterClasses">
        {{ characterCount }}{{ maxlength ? `/${maxlength}` : '' }}
      </div>
    </div>
    
    <!-- ヘルプテキスト（JDS準拠改善） -->
    <p 
      v-if="helpText && !errorMessage && !error" 
      :id="`${textareaId}-help`"
      :class="jdsCompliant ? 'text-sm text-gray-600' : 'form-help'"
    >
      {{ helpText }}
    </p>
    
    <!-- エラーメッセージ（JDS準拠：建設的エラー） -->
    <div 
      v-if="errorMessage || error" 
      :id="`${textareaId}-error`"
      :class="jdsCompliant ? 'text-sm text-red-600' : 'form-error'"
      role="alert"
      aria-live="polite"
    >
      <span class="font-medium">{{ errorMessage || error }}</span>
      <span v-if="jdsCompliant && textareaExample" class="block mt-1 text-red-500">
        正しい形式: {{ textareaExample }}
      </span>
    </div>
    
    <!-- JDS準拠時のバリデーション成功メッセージ -->
    <div 
      v-if="jdsCompliant && validationState === 'valid'" 
      :id="`${textareaId}-success`"
      class="text-sm text-green-600"
      role="status"
      aria-live="polite"
    >
      <span class="font-medium">入力内容に問題ありません</span>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, watch } from 'vue'

const props = defineProps({
  id: {
    type: String,
    default: undefined
  },
  
  modelValue: {
    type: String,
    default: ''
  },
  
  placeholder: {
    type: String,
    default: ''
  },
  
  disabled: {
    type: Boolean,
    default: false
  },
  
  readonly: {
    type: Boolean,
    default: false
  },
  
  rows: {
    type: Number,
    default: 3
  },
  
  cols: {
    type: Number,
    default: undefined
  },
  
  maxlength: {
    type: Number,
    default: undefined
  },
  
  size: {
    type: String,
    default: 'md',
    validator: value => ['sm', 'md', 'lg'].includes(value)
  },
  
  variant: {
    type: String,
    default: 'default',
    validator: value => ['default', 'error', 'success'].includes(value)
  },
  
  showCounter: {
    type: Boolean,
    default: false
  },
  
  resize: {
    type: String,
    default: 'vertical',
    validator: value => ['none', 'vertical', 'horizontal', 'both'].includes(value)
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
  
  // エラーメッセージ（明示的）
  errorMessage: {
    type: String,
    default: ''
  },
  
  // 必須フィールド
  required: {
    type: Boolean,
    default: false
  },
  
  // JDS準拠時のバリデーション状態
  validationState: {
    type: String,
    default: null,
    validator: (value) => [null, 'valid', 'invalid', 'warning'].includes(value)
  },
  
  // JDS準拠時のテキストエリア説明（建設的ヘルプ）
  textareaDescription: {
    type: String,
    default: ''
  },
  
  // JDS準拠時のテキストエリア例
  textareaExample: {
    type: String,
    default: ''
  }
})

const emit = defineEmits(['update:modelValue', 'input', 'blur', 'focus'])

// リアクティブデータ（JDS準拠ID管理）
import { generateId } from '@/utils/helpers'

const internalValue = ref(props.modelValue)
const textareaId = ref(props.id || generateId('textarea'))

const characterCount = computed(() => {
  return internalValue.value.length
})

// テキストエリアのクラス（JDS準拠対応）
const textareaClasses = computed(() => {
  const classes = []
  
  // JDS準拠モードの基本スタイル
  if (props.jdsCompliant) {
    classes.push(
      'jds-textarea',
      'block', 'w-full', 'border-2', 'rounded-md',
      'font-jds', 'text-base', 'leading-6',
      'bg-white', 'border-gray-300',
      'focus:outline-none', 'focus:ring-2', 'focus:ring-jds-primary', 'focus:border-jds-primary',
      'transition-all', 'duration-200'
    )
    
    // JDS準拠サイズ（十分なタッチターゲット確保）
    const jdsSizeMap = {
      sm: 'px-3 py-2 text-sm min-h-[88px]',      // 44px x 2行分
      md: 'px-4 py-3 text-base min-h-[132px]',  // 44px x 3行分（JDS標準）
      lg: 'px-5 py-4 text-lg min-h-[176px]'     // 44px x 4行分
    }
    classes.push(jdsSizeMap[props.size] || jdsSizeMap.md)
    
    // JDS準拠バリデーション状態
    if (props.validationState === 'invalid' || props.error || props.errorMessage) {
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
    // 従来の非 JDS スタイル
    const base = [
      'block w-full rounded-lg border transition-colors duration-200',
      'placeholder:text-neutral-400',
      'focus:outline-none focus:ring-2 focus:ring-offset-0'
    ]
    classes.push(...base)

    // サイズ
    const sizeClasses = {
      sm: 'px-3 py-2 text-sm',
      md: 'px-4 py-2.5 text-base',
      lg: 'px-4 py-3 text-lg'
    }
    classes.push(sizeClasses[props.size])

    // バリアント
    const variantClasses = {
      default: [
        'border-neutral-300 bg-white',
        'hover:border-neutral-400',
        'focus:border-primary-500 focus:ring-primary-500',
        'disabled:bg-neutral-50 disabled:border-neutral-200 disabled:text-neutral-500 disabled:cursor-not-allowed'
      ],
      error: [
        'border-error-300 bg-white',
        'hover:border-error-400',
        'focus:border-error-500 focus:ring-error-500'
      ],
      success: [
        'border-success-300 bg-white',
        'hover:border-success-400',
        'focus:border-success-500 focus:ring-success-500'
      ]
    }
    classes.push(...variantClasses[props.variant])
  }

  // リサイズ（JDS・非 JDS 共通）
  const resizeClasses = {
    none: 'resize-none',
    vertical: 'resize-y',
    horizontal: 'resize-x',
    both: 'resize'
  }
  classes.push(resizeClasses[props.resize])
  
  // 無効・読み取り専用状態（JDS・非 JDS 共通）
  if (props.disabled) {
    if (props.jdsCompliant) {
      classes.push('bg-gray-100', 'border-gray-200', 'text-gray-500', 'cursor-not-allowed')
    } else {
      classes.push('bg-neutral-50', 'cursor-not-allowed')
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

// 文字数カウンターのクラス（JDS準拠改善）
const counterClasses = computed(() => {
  if (props.jdsCompliant) {
    return 'absolute bottom-2 right-2 text-xs text-gray-500 bg-white px-1 rounded'
  }
  return 'absolute bottom-2 right-2 text-xs text-neutral-500'
})

const handleInput = (event) => {
  internalValue.value = event.target.value
  emit('update:modelValue', event.target.value)
  emit('input', event)
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
  
  // テキストエリア説明があれば追加
  if (props.textareaDescription) {
    descriptions.push(`${textareaId.value}-description`)
  }
  
  // テキストエリア例があれば追加
  if (props.textareaExample) {
    descriptions.push(`${textareaId.value}-example`)
  }
  
  // ヘルプテキストがあり、エラーがない場合追加
  if (props.helpText && !props.errorMessage && !props.error) {
    descriptions.push(`${textareaId.value}-help`)
  }
  
  // エラーメッセージがある場合追加
  if (props.errorMessage || props.error) {
    descriptions.push(`${textareaId.value}-error`)
  }
  
  // 成功状態の場合追加
  if (props.validationState === 'valid') {
    descriptions.push(`${textareaId.value}-success`)
  }
  
  return descriptions.length > 0 ? descriptions.join(' ') : null
}

watch(() => props.modelValue, (newValue) => {
  internalValue.value = newValue
})
</script>

<style scoped>
/* カスタムスクロールバー（Webkit系ブラウザ） */
textarea::-webkit-scrollbar {
  width: 8px;
}

textarea::-webkit-scrollbar-track {
  background: transparent;
}

textarea::-webkit-scrollbar-thumb {
  background-color: rgba(0, 0, 0, 0.2);
  border-radius: 4px;
}

textarea::-webkit-scrollbar-thumb:hover {
  background-color: rgba(0, 0, 0, 0.3);
}
</style>