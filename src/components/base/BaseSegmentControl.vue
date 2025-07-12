<template>
  <div :class="containerClasses" class="relative">
    <!-- ラベル -->
    <label
      v-if="label"
      :class="labelClasses"
      class="block text-sm font-medium mb-3"
      :for="groupId"
    >
      {{ label }}
      <span v-if="required" class="text-error-500 ml-1" aria-label="必須">*</span>
    </label>
    
    <!-- セグメントコントロール -->
    <div
      :id="groupId"
      :class="segmentGroupClasses"
      class="inline-flex rounded-lg p-1 transition-colors duration-200"
      role="tablist"
      :aria-label="ariaLabel || label"
      :aria-describedby="helpTextId"
    >
      <!-- セグメントアイテム -->
      <button
        v-for="(option, index) in options"
        :key="option.value || index"
        :class="getSegmentClasses(option, index)"
        class="relative px-3 py-2 text-sm font-medium rounded-md transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
        :aria-selected="isSelected(option)"
        :aria-controls="`${groupId}-panel-${index}`"
        :disabled="option.disabled || disabled"
        role="tab"
        @click="selectOption(option)"
        @keydown="handleKeydown($event, index)"
      >
        <!-- アイコン -->
        <component
          v-if="option.icon"
          :is="option.icon"
          :class="getIconClasses(option)"
          class="w-4 h-4 mr-2"
          aria-hidden="true"
        />
        
        <!-- ラベル -->
        <span>{{ option.label }}</span>
        
        <!-- バッジ -->
        <span
          v-if="option.badge"
          :class="getBadgeClasses(option)"
          class="ml-2 px-1.5 py-0.5 text-xs rounded-full"
        >
          {{ option.badge }}
        </span>
      </button>
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
    
    <!-- 選択されたコンテンツパネル（オプション） -->
    <div
      v-if="showContentPanels"
      class="mt-4"
    >
      <div
        v-for="(option, index) in options"
        :key="`panel-${option.value || index}`"
        :id="`${groupId}-panel-${index}`"
        :class="{ 'hidden': !isSelected(option) }"
        role="tabpanel"
        :aria-labelledby="`${groupId}-tab-${index}`"
      >
        <slot
          :name="`panel-${option.value}`"
          :option="option"
          :index="index"
          :isSelected="isSelected(option)"
        >
          <div v-if="option.content" v-html="option.content" />
        </slot>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'

interface SegmentOption {
  value: string | number
  label: string
  icon?: string | object
  badge?: string | number
  disabled?: boolean
  content?: string
}

interface Props {
  modelValue?: string | number | null
  options: SegmentOption[]
  label?: string
  helpText?: string
  errorMessage?: string
  disabled?: boolean
  required?: boolean
  variant?: 'default' | 'minimal' | 'outlined' | 'pills'
  size?: 'sm' | 'md' | 'lg'
  color?: 'primary' | 'secondary' | 'success' | 'warning' | 'error'
  fullWidth?: boolean
  showContentPanels?: boolean
  groupId?: string
  ariaLabel?: string
}

const props = withDefaults(defineProps<Props>(), {
  disabled: false,
  required: false,
  variant: 'default',
  size: 'md',
  color: 'primary',
  fullWidth: false,
  showContentPanels: false,
  groupId: () => `segment-control-${Math.random().toString(36).substr(2, 9)}`
})

const emit = defineEmits<{
  'update:modelValue': [value: string | number]
  'change': [option: SegmentOption]
  'focus': [option: SegmentOption]
  'blur': [option: SegmentOption]
}>()

// リアクティブな状態
const focusedIndex = ref<number>(-1)

// 計算されたプロパティ
const helpTextId = computed(() => `${props.groupId}-help`)

const isSelected = (option: SegmentOption) => {
  return props.modelValue === option.value
}

// スタイルクラス
const containerClasses = computed(() => {
  const base = 'relative'
  const fullWidth = props.fullWidth ? 'w-full' : ''
  
  return [base, fullWidth]
})

const labelClasses = computed(() => {
  const base = 'block text-sm font-medium mb-3'
  
  const variants = {
    default: 'text-gray-700 dark:text-gray-300',
    minimal: 'text-gray-600 dark:text-gray-400',
    outlined: 'text-gray-700 dark:text-gray-300',
    pills: 'text-gray-700 dark:text-gray-300'
  }
  
  return [base, variants[props.variant]]
})

const segmentGroupClasses = computed(() => {
  const base = 'inline-flex rounded-lg p-1 transition-colors duration-200'
  
  const variants = {
    default: 'bg-gray-100 dark:bg-gray-800',
    minimal: 'bg-transparent border border-gray-200 dark:border-gray-700',
    outlined: 'bg-white dark:bg-gray-900 border-2 border-gray-200 dark:border-gray-700',
    pills: 'bg-gray-50 dark:bg-gray-800'
  }
  
  const sizes = {
    sm: 'p-0.5',
    md: 'p-1',
    lg: 'p-1.5'
  }
  
  const fullWidth = props.fullWidth ? 'w-full' : ''
  
  return [base, variants[props.variant], sizes[props.size], fullWidth]
})

const getSegmentClasses = (option: SegmentOption, index: number) => {
  const base = 'relative px-3 py-2 text-sm font-medium rounded-md transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2'
  
  const sizes = {
    sm: 'px-2 py-1 text-xs',
    md: 'px-3 py-2 text-sm',
    lg: 'px-4 py-3 text-base'
  }
  
  const colors = {
    primary: 'focus:ring-primary-500',
    secondary: 'focus:ring-gray-500',
    success: 'focus:ring-green-500',
    warning: 'focus:ring-yellow-500',
    error: 'focus:ring-red-500'
  }
  
  const fullWidth = props.fullWidth ? 'flex-1 justify-center' : ''
  
  let state = ''
  if (option.disabled || props.disabled) {
    state = 'opacity-50 cursor-not-allowed'
  } else if (isSelected(option)) {
    // 選択状態
    const selectedColors = {
      primary: 'bg-white dark:bg-gray-700 text-primary-700 dark:text-primary-300 shadow-sm',
      secondary: 'bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 shadow-sm',
      success: 'bg-white dark:bg-gray-700 text-green-700 dark:text-green-300 shadow-sm',
      warning: 'bg-white dark:bg-gray-700 text-yellow-700 dark:text-yellow-300 shadow-sm',
      error: 'bg-white dark:bg-gray-700 text-red-700 dark:text-red-300 shadow-sm'
    }
    state = selectedColors[props.color]
  } else {
    // 非選択状態
    state = 'text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 hover:bg-white/50 dark:hover:bg-gray-700/50'
  }
  
  return [base, sizes[props.size], colors[props.color], fullWidth, state]
}

const getIconClasses = (option: SegmentOption) => {
  const base = 'w-4 h-4 mr-2'
  
  if (option.disabled || props.disabled) {
    return [base, 'text-gray-400 dark:text-gray-600']
  }
  
  if (isSelected(option)) {
    const selectedColors = {
      primary: 'text-primary-600 dark:text-primary-400',
      secondary: 'text-gray-600 dark:text-gray-400',
      success: 'text-green-600 dark:text-green-400',
      warning: 'text-yellow-600 dark:text-yellow-400',
      error: 'text-red-600 dark:text-red-400'
    }
    return [base, selectedColors[props.color]]
  }
  
  return [base, 'text-gray-500 dark:text-gray-400']
}

const getBadgeClasses = (option: SegmentOption) => {
  const base = 'ml-2 px-1.5 py-0.5 text-xs rounded-full'
  
  if (isSelected(option)) {
    const selectedColors = {
      primary: 'bg-primary-100 text-primary-700 dark:bg-primary-900 dark:text-primary-300',
      secondary: 'bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-300',
      success: 'bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300',
      warning: 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900 dark:text-yellow-300',
      error: 'bg-red-100 text-red-700 dark:bg-red-900 dark:text-red-300'
    }
    return [base, selectedColors[props.color]]
  }
  
  return [base, 'bg-gray-200 text-gray-600 dark:bg-gray-700 dark:text-gray-400']
}

const helpTextClasses = computed(() => {
  return 'text-gray-500 dark:text-gray-400'
})

const errorClasses = computed(() => {
  return 'text-error-500 dark:text-error-400'
})

// メソッド
const selectOption = (option: SegmentOption) => {
  if (option.disabled || props.disabled) return
  
  emit('update:modelValue', option.value)
  emit('change', option)
}

const handleKeydown = (event: KeyboardEvent, index: number) => {
  const enabledOptions = props.options.filter(opt => !opt.disabled)
  const currentEnabledIndex = enabledOptions.findIndex(opt => opt === props.options[index])
  
  switch (event.key) {
    case 'ArrowLeft':
    case 'ArrowUp':
      event.preventDefault()
      if (currentEnabledIndex > 0) {
        const prevOption = enabledOptions[currentEnabledIndex - 1]
        const prevIndex = props.options.findIndex(opt => opt === prevOption)
        focusedIndex.value = prevIndex
        selectOption(prevOption)
      }
      break
      
    case 'ArrowRight':
    case 'ArrowDown':
      event.preventDefault()
      if (currentEnabledIndex < enabledOptions.length - 1) {
        const nextOption = enabledOptions[currentEnabledIndex + 1]
        const nextIndex = props.options.findIndex(opt => opt === nextOption)
        focusedIndex.value = nextIndex
        selectOption(nextOption)
      }
      break
      
    case 'Enter':
    case ' ':
      event.preventDefault()
      selectOption(props.options[index])
      break
  }
}
</script>