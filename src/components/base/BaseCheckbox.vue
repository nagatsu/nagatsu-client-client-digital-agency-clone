<template>
  <div class="flex items-start space-x-3">
    <div class="relative flex items-center">
      <input
        :id="id || `checkbox-${Math.random().toString(36).substr(2, 9)}`"
        v-model="internalValue"
        type="checkbox"
        :disabled="disabled"
        :required="required"
        :aria-describedby="description ? `${id}-description` : undefined"
        :class="checkboxClasses"
        class="peer sr-only"
        @change="handleChange"
      >
      <label
        :for="id || `checkbox-${Math.random().toString(36).substr(2, 9)}`"
        :class="labelClasses"
        class="relative flex items-center justify-center w-5 h-5 border-2 rounded cursor-pointer transition-all duration-200 focus-within:ring-2 focus-within:ring-blue-500 focus-within:ring-offset-2"
      >
        <!-- チェックマーク -->
        <svg
          v-if="internalValue"
          class="w-3 h-3 text-white pointer-events-none"
          fill="currentColor"
          viewBox="0 0 20 20"
          aria-hidden="true"
        >
          <path
            fill-rule="evenodd"
            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
            clip-rule="evenodd"
          />
        </svg>
      </label>
    </div>
    
    <!-- ラベルテキストとコンテンツ -->
    <div class="flex-1 min-w-0">
      <label
        v-if="label"
        :for="id || `checkbox-${Math.random().toString(36).substr(2, 9)}`"
        :class="textLabelClasses"
        class="block text-sm font-medium cursor-pointer"
      >
        {{ label }}
        <span v-if="required" class="text-red-500 ml-1" aria-label="必須">*</span>
      </label>
      
      <p
        v-if="description"
        :id="`${id}-description`"
        :class="descriptionClasses"
        class="mt-1 text-sm"
      >
        {{ description }}
      </p>
      
      <!-- スロットコンテンツ -->
      <div v-if="$slots.default" class="mt-2">
        <slot />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'

interface Props {
  modelValue?: boolean
  id?: string
  label?: string
  description?: string
  disabled?: boolean
  required?: boolean
  variant?: 'default' | 'success' | 'warning' | 'error'
  size?: 'sm' | 'md' | 'lg'
}

const props = withDefaults(defineProps<Props>(), {
  modelValue: false,
  variant: 'default',
  size: 'md',
  disabled: false,
  required: false
})

const emit = defineEmits<{
  'update:modelValue': [value: boolean]
  'change': [value: boolean]
}>()

const internalValue = computed({
  get: () => props.modelValue,
  set: (value) => emit('update:modelValue', value)
})

const handleChange = () => {
  emit('change', internalValue.value)
}

// チェックボックスのスタイルクラス
const checkboxClasses = computed(() => {
  return [
    // ベーススタイル
    'peer',
    // フォーカス状態
    'focus:ring-2 focus:ring-blue-500 focus:ring-offset-2'
  ]
})

// ラベル（チェックボックス部分）のスタイルクラス  
const labelClasses = computed(() => {
  const base = 'relative flex items-center justify-center border-2 rounded cursor-pointer transition-all duration-200'
  
  // サイズバリエーション
  const sizes = {
    sm: 'w-4 h-4',
    md: 'w-5 h-5', 
    lg: 'w-6 h-6'
  }
  
  // バリアントスタイル
  const variants = {
    default: internalValue.value 
      ? 'bg-blue-600 border-blue-600' 
      : 'bg-white border-gray-300 hover:border-blue-400',
    success: internalValue.value
      ? 'bg-green-600 border-green-600'
      : 'bg-white border-gray-300 hover:border-green-400',
    warning: internalValue.value
      ? 'bg-yellow-600 border-yellow-600'
      : 'bg-white border-gray-300 hover:border-yellow-400',
    error: internalValue.value
      ? 'bg-red-600 border-red-600'
      : 'bg-white border-gray-300 hover:border-red-400'
  }
  
  // 無効状態
  const disabledStyles = props.disabled 
    ? 'opacity-50 cursor-not-allowed' 
    : 'cursor-pointer'
    
  return [
    base,
    sizes[props.size],
    variants[props.variant],
    disabledStyles
  ]
})

// テキストラベルのスタイルクラス
const textLabelClasses = computed(() => {
  const base = 'block font-medium cursor-pointer'
  
  const sizes = {
    sm: 'text-sm',
    md: 'text-sm',
    lg: 'text-base'
  }
  
  const variants = {
    default: 'text-gray-900',
    success: 'text-gray-900',
    warning: 'text-gray-900', 
    error: 'text-red-900'
  }
  
  const disabledStyles = props.disabled 
    ? 'opacity-50 cursor-not-allowed' 
    : 'cursor-pointer'
    
  return [
    base,
    sizes[props.size],
    variants[props.variant],
    disabledStyles
  ]
})

// 説明文のスタイルクラス
const descriptionClasses = computed(() => {
  const variants = {
    default: 'text-gray-600',
    success: 'text-gray-600',
    warning: 'text-gray-600',
    error: 'text-red-600'
  }
  
  const disabledStyles = props.disabled ? 'opacity-50' : ''
  
  return [
    variants[props.variant],
    disabledStyles
  ]
})
</script>