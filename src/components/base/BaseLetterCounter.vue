<template>
  <div :class="containerClasses" class="relative">
    <!-- ラベル -->
    <label
      v-if="label"
      :for="inputId"
      :class="labelClasses"
      class="block text-sm font-medium mb-2"
    >
      {{ label }}
      <span v-if="required" class="text-error-500 ml-1" aria-label="必須">*</span>
    </label>
    
    <!-- 入力フィールド -->
    <div class="relative">
      <component
        :is="multiline ? 'textarea' : 'input'"
        :id="inputId"
        v-model="inputValue"
        :type="multiline ? undefined : inputType"
        :class="inputClasses"
        class="w-full px-4 py-3 text-sm border rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-primary-500 resize-none"
        :disabled="disabled"
        :readonly="readonly"
        :required="required"
        :placeholder="placeholder"
        :maxlength="maxLength"
        :rows="multiline ? rows : undefined"
        :aria-describedby="helpTextId"
        :aria-invalid="!!errorMessage"
        @input="handleInput"
        @blur="handleBlur"
        @focus="handleFocus"
      />
      
      <!-- 文字数カウンター -->
      <div
        :class="counterClasses"
        class="absolute bottom-2 right-3 text-xs font-medium pointer-events-none"
        :aria-live="isNearLimit ? 'polite' : 'off'"
      >
        {{ currentLength }}/{{ maxLength }}
      </div>
    </div>
    
    <!-- ヘルプテキスト -->
    <p
      v-if="helpText"
      :id="helpTextId"
      :class="helpTextClasses"
      class="mt-2 text-sm"
    >
      {{ helpText }}
    </p>
    
    <!-- エラーメッセージ -->
    <p
      v-if="errorMessage"
      :class="errorClasses"
      class="mt-2 text-sm text-error-500"
      role="alert"
    >
      {{ errorMessage }}
    </p>
    
    <!-- 文字数制限警告 -->
    <p
      v-if="isNearLimit && !errorMessage"
      :class="warningClasses"
      class="mt-2 text-sm text-warning-600"
      role="status"
    >
      残り {{ remainingChars }} 文字です
    </p>
  </div>
</template>

<script setup lang="ts">
import { computed, ref, watch } from 'vue'

interface Props {
  modelValue?: string
  label?: string
  helpText?: string
  errorMessage?: string
  placeholder?: string
  maxLength?: number
  disabled?: boolean
  readonly?: boolean
  required?: boolean
  multiline?: boolean
  rows?: number
  inputType?: 'text' | 'email' | 'tel' | 'url' | 'search'
  variant?: 'default' | 'minimal' | 'outlined'
  size?: 'sm' | 'md' | 'lg'
  inputId?: string
  warningThreshold?: number
}

const props = withDefaults(defineProps<Props>(), {
  modelValue: '',
  maxLength: 200,
  disabled: false,
  readonly: false,
  required: false,
  multiline: false,
  rows: 4,
  inputType: 'text',
  variant: 'default',
  size: 'md',
  inputId: () => `letter-counter-${Math.random().toString(36).substr(2, 9)}`,
  warningThreshold: 0.8
})

const emit = defineEmits<{
  'update:modelValue': [value: string]
  'input': [event: Event]
  'blur': [event: FocusEvent]
  'focus': [event: FocusEvent]
  'limit-exceeded': [currentLength: number, maxLength: number]
}>()

// リアクティブな状態
const inputValue = ref(props.modelValue)
const isFocused = ref(false)

// 計算されたプロパティ
const currentLength = computed(() => inputValue.value.length)
const remainingChars = computed(() => props.maxLength - currentLength.value)
const isNearLimit = computed(() => currentLength.value >= props.maxLength * props.warningThreshold)
const isOverLimit = computed(() => currentLength.value > props.maxLength)
const helpTextId = computed(() => `${props.inputId}-help`)

// スタイルクラス
const containerClasses = computed(() => {
  return 'relative'
})

const labelClasses = computed(() => {
  const base = 'block text-sm font-medium mb-2'
  
  const variants = {
    default: 'text-gray-700 dark:text-gray-300',
    minimal: 'text-gray-600 dark:text-gray-400',
    outlined: 'text-gray-700 dark:text-gray-300'
  }
  
  return [base, variants[props.variant]]
})

const inputClasses = computed(() => {
  const base = 'w-full px-4 text-sm border rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-primary-500'
  
  const variants = {
    default: 'bg-white dark:bg-gray-800 border-gray-300 dark:border-gray-600 text-gray-900 dark:text-gray-100',
    minimal: 'bg-transparent border-gray-200 dark:border-gray-700 text-gray-900 dark:text-gray-100',
    outlined: 'bg-white dark:bg-gray-800 border-2 border-gray-300 dark:border-gray-600 text-gray-900 dark:text-gray-100'
  }
  
  const sizes = {
    sm: 'py-2 text-xs',
    md: 'py-3 text-sm',
    lg: 'py-4 text-base'
  }
  
  // multilineの場合は下部のパディングを大きくしてカウンター分のスペースを確保
  const bottomPadding = props.multiline ? 'pb-8' : 'pb-3'
  
  const state = props.errorMessage || isOverLimit.value
    ? 'border-error-500 focus:ring-error-500'
    : isNearLimit.value
      ? 'border-warning-500 focus:ring-warning-500'
      : props.disabled
        ? 'opacity-50 cursor-not-allowed bg-gray-50 dark:bg-gray-900'
        : props.readonly
          ? 'bg-gray-50 dark:bg-gray-900'
          : ''
  
  return [base, variants[props.variant], sizes[props.size], bottomPadding, state]
})

const counterClasses = computed(() => {
  const base = 'absolute text-xs font-medium pointer-events-none'
  
  const state = isOverLimit.value
    ? 'text-error-500 dark:text-error-400'
    : isNearLimit.value
      ? 'text-warning-600 dark:text-warning-400'
      : 'text-gray-500 dark:text-gray-400'
  
  // multilineとsinglelineで位置を調整
  const position = props.multiline 
    ? 'bottom-2 right-3'
    : 'bottom-3 right-3'
  
  return [base, state, position]
})

const helpTextClasses = computed(() => {
  return 'text-gray-500 dark:text-gray-400'
})

const errorClasses = computed(() => {
  return 'text-error-500 dark:text-error-400'
})

const warningClasses = computed(() => {
  return 'text-warning-600 dark:text-warning-400'
})

// メソッド
const handleInput = (event: Event) => {
  const target = event.target as HTMLInputElement | HTMLTextAreaElement
  inputValue.value = target.value
  
  emit('update:modelValue', inputValue.value)
  emit('input', event)
  
  // 文字数制限を超えた場合のイベント
  if (currentLength.value > props.maxLength) {
    emit('limit-exceeded', currentLength.value, props.maxLength)
  }
}

const handleBlur = (event: FocusEvent) => {
  isFocused.value = false
  emit('blur', event)
}

const handleFocus = (event: FocusEvent) => {
  isFocused.value = true
  emit('focus', event)
}

// プロパティ変更の監視
watch(() => props.modelValue, (newValue) => {
  inputValue.value = newValue || ''
})
</script>