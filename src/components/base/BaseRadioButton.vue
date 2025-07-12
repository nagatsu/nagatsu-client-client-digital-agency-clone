<template>
  <div class="space-y-3" :class="groupClasses">
    <!-- グループラベル -->
    <fieldset v-if="groupLabel" class="space-y-3">
      <legend :class="groupLabelClasses" class="text-sm font-medium">
        {{ groupLabel }}
        <span v-if="required" class="text-red-500 ml-1" aria-label="必須">*</span>
      </legend>
      
      <!-- グループ説明 -->
      <p v-if="groupDescription" :class="groupDescriptionClasses" class="text-sm">
        {{ groupDescription }}
      </p>
      
      <!-- オプション一覧 -->
      <div class="space-y-2" role="radiogroup" :aria-required="required">
        <div
          v-for="option in options"
          :key="option.value"
          class="flex items-start space-x-3"
        >
          <div class="relative flex items-center">
            <input
              :id="`${name}-${option.value}`"
              v-model="internalValue"
              type="radio"
              :name="name"
              :value="option.value"
              :disabled="disabled || option.disabled"
              :required="required"
              :aria-describedby="option.description ? `${name}-${option.value}-desc` : undefined"
              class="peer sr-only"
              @change="handleChange"
            >
            <label
              :for="`${name}-${option.value}`"
              :class="radioClasses(option)"
              class="relative flex items-center justify-center w-5 h-5 border-2 rounded-full cursor-pointer transition-all duration-200 focus-within:ring-2 focus-within:ring-blue-500 focus-within:ring-offset-2"
            >
              <!-- 選択インジケーター -->
              <div
                v-if="internalValue === option.value"
                class="w-2 h-2 bg-white rounded-full"
              ></div>
            </label>
          </div>
          
          <!-- オプションラベルとコンテンツ -->
          <div class="flex-1 min-w-0">
            <label
              :for="`${name}-${option.value}`"
              :class="optionLabelClasses(option)"
              class="block text-sm font-medium cursor-pointer"
            >
              {{ option.label }}
            </label>
            
            <p
              v-if="option.description"
              :id="`${name}-${option.value}-desc`"
              :class="optionDescriptionClasses(option)"
              class="mt-1 text-sm"
            >
              {{ option.description }}
            </p>
          </div>
        </div>
      </div>
    </fieldset>
    
    <!-- 単体表示（オプションが1つの場合） -->
    <div v-else-if="options.length === 1" class="flex items-start space-x-3">
      <div class="relative flex items-center">
        <input
          :id="id || `radio-${Math.random().toString(36).substr(2, 9)}`"
          v-model="internalValue"
          type="radio"
          :name="name"
          :value="options[0].value"
          :disabled="disabled || options[0].disabled"
          :required="required"
          class="peer sr-only"
          @change="handleChange"
        >
        <label
          :for="id || `radio-${Math.random().toString(36).substr(2, 9)}`"
          :class="radioClasses(options[0])"
          class="relative flex items-center justify-center w-5 h-5 border-2 rounded-full cursor-pointer transition-all duration-200 focus-within:ring-2 focus-within:ring-blue-500 focus-within:ring-offset-2"
        >
          <div
            v-if="internalValue === options[0].value"
            class="w-2 h-2 bg-white rounded-full"
          ></div>
        </label>
      </div>
      
      <div class="flex-1 min-w-0">
        <label
          :for="id || `radio-${Math.random().toString(36).substr(2, 9)}`"
          :class="optionLabelClasses(options[0])"
          class="block text-sm font-medium cursor-pointer"
        >
          {{ options[0].label }}
        </label>
        
        <p
          v-if="options[0].description"
          :class="optionDescriptionClasses(options[0])"
          class="mt-1 text-sm"
        >
          {{ options[0].description }}
        </p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'

interface RadioOption {
  value: string | number
  label: string
  description?: string
  disabled?: boolean
}

interface Props {
  modelValue?: string | number | null
  name: string
  options: RadioOption[]
  id?: string
  groupLabel?: string
  groupDescription?: string
  disabled?: boolean
  required?: boolean
  variant?: 'default' | 'success' | 'warning' | 'error'
  size?: 'sm' | 'md' | 'lg'
  layout?: 'vertical' | 'horizontal'
}

const props = withDefaults(defineProps<Props>(), {
  modelValue: null,
  variant: 'default',
  size: 'md',
  layout: 'vertical',
  disabled: false,
  required: false
})

const emit = defineEmits<{
  'update:modelValue': [value: string | number | null]
  'change': [value: string | number | null]
}>()

const internalValue = computed({
  get: () => props.modelValue,
  set: (value) => emit('update:modelValue', value)
})

const handleChange = () => {
  emit('change', internalValue.value)
}

// グループのスタイルクラス
const groupClasses = computed(() => {
  return props.layout === 'horizontal' 
    ? 'flex flex-wrap gap-6' 
    : 'space-y-3'
})

// グループラベルのスタイルクラス
const groupLabelClasses = computed(() => {
  const base = 'text-sm font-medium'
  
  const variants = {
    default: 'text-gray-900',
    success: 'text-gray-900',
    warning: 'text-gray-900',
    error: 'text-red-900'
  }
  
  const disabledStyles = props.disabled ? 'opacity-50' : ''
  
  return [
    base,
    variants[props.variant],
    disabledStyles
  ]
})

// グループ説明のスタイルクラス
const groupDescriptionClasses = computed(() => {
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

// ラジオボタンのスタイルクラス
const radioClasses = (option: RadioOption) => {
  const base = 'relative flex items-center justify-center border-2 rounded-full cursor-pointer transition-all duration-200'
  
  // サイズバリエーション
  const sizes = {
    sm: 'w-4 h-4',
    md: 'w-5 h-5',
    lg: 'w-6 h-6'
  }
  
  // バリアントスタイル
  const isSelected = internalValue.value === option.value
  const variants = {
    default: isSelected 
      ? 'bg-blue-600 border-blue-600' 
      : 'bg-white border-gray-300 hover:border-blue-400',
    success: isSelected
      ? 'bg-green-600 border-green-600'
      : 'bg-white border-gray-300 hover:border-green-400',
    warning: isSelected
      ? 'bg-yellow-600 border-yellow-600'
      : 'bg-white border-gray-300 hover:border-yellow-400',
    error: isSelected
      ? 'bg-red-600 border-red-600'
      : 'bg-white border-gray-300 hover:border-red-400'
  }
  
  // 無効状態
  const isDisabled = props.disabled || option.disabled
  const disabledStyles = isDisabled 
    ? 'opacity-50 cursor-not-allowed' 
    : 'cursor-pointer'
    
  return [
    base,
    sizes[props.size],
    variants[props.variant],
    disabledStyles
  ]
}

// オプションラベルのスタイルクラス
const optionLabelClasses = (option: RadioOption) => {
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
  
  const isDisabled = props.disabled || option.disabled
  const disabledStyles = isDisabled 
    ? 'opacity-50 cursor-not-allowed' 
    : 'cursor-pointer'
    
  return [
    base,
    sizes[props.size],
    variants[props.variant],
    disabledStyles
  ]
}

// オプション説明のスタイルクラス
const optionDescriptionClasses = (option: RadioOption) => {
  const variants = {
    default: 'text-gray-600',
    success: 'text-gray-600',
    warning: 'text-gray-600',
    error: 'text-red-600'
  }
  
  const isDisabled = props.disabled || option.disabled
  const disabledStyles = isDisabled ? 'opacity-50' : ''
  
  return [
    variants[props.variant],
    disabledStyles
  ]
}
</script>