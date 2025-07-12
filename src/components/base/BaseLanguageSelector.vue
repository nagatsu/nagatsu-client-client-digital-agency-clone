<template>
  <div :class="containerClasses" class="relative">
    <!-- ラベル -->
    <label
      v-if="label"
      :for="selectId"
      :class="labelClasses"
      class="block text-sm font-medium mb-2"
    >
      {{ label }}
      <span v-if="required" class="text-error-500 ml-1" aria-label="必須">*</span>
    </label>
    
    <!-- セレクター -->
    <div class="relative">
      <select
        :id="selectId"
        v-model="selectedLanguage"
        :class="selectClasses"
        class="w-full px-4 py-3 pr-10 text-sm border rounded-lg appearance-none transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-primary-500"
        :disabled="disabled"
        :required="required"
        :aria-describedby="helpTextId"
        @change="handleLanguageChange"
      >
        <option
          v-for="language in languages"
          :key="language.code"
          :value="language.code"
          :disabled="language.disabled"
        >
          {{ getDisplayText(language) }}
        </option>
      </select>
      
      <!-- ドロップダウンアイコン -->
      <div class="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
        <svg
          :class="iconClasses"
          class="w-5 h-5 transition-transform duration-200"
          aria-hidden="true"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
        </svg>
      </div>
      
      <!-- フラグアイコン（オプション） -->
      <div
        v-if="showFlag && selectedLanguageData"
        class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none"
      >
        <span
          :class="flagClasses"
          class="text-lg"
          :aria-label="`${selectedLanguageData.name}の国旗`"
        >
          {{ selectedLanguageData.flag }}
        </span>
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
  </div>
</template>

<script setup lang="ts">
import { computed, ref, onMounted, watch } from 'vue'

interface Language {
  code: string
  name: string
  nativeName?: string
  flag?: string
  disabled?: boolean
}

interface Props {
  modelValue?: string
  languages?: Language[]
  label?: string
  helpText?: string
  errorMessage?: string
  placeholder?: string
  disabled?: boolean
  required?: boolean
  showFlag?: boolean
  showNativeName?: boolean
  variant?: 'default' | 'minimal' | 'outlined'
  size?: 'sm' | 'md' | 'lg'
  selectId?: string
  chevronIcon?: string | object
}

const props = withDefaults(defineProps<Props>(), {
  modelValue: 'ja',
  languages: () => [
    { code: 'ja', name: '日本語', nativeName: '日本語', flag: '🇯🇵' },
    { code: 'en', name: 'English', nativeName: 'English', flag: '🇺🇸' },
    { code: 'ko', name: '韓国語', nativeName: '한국어', flag: '🇰🇷' },
    { code: 'zh-cn', name: '中国語（簡体字）', nativeName: '简体中文', flag: '🇨🇳' },
    { code: 'zh-tw', name: '中国語（繁体字）', nativeName: '繁體中文', flag: '🇹🇼' }
  ],
  disabled: false,
  required: false,
  showFlag: true,
  showNativeName: true,
  variant: 'default',
  size: 'md',
  selectId: () => `language-selector-${Math.random().toString(36).substr(2, 9)}`,
  chevronIcon: () => 'svg'
})

const emit = defineEmits<{
  'update:modelValue': [value: string]
  'change': [language: Language]
}>()

// リアクティブな状態
const selectedLanguage = ref(props.modelValue)

// 計算されたプロパティ
const selectedLanguageData = computed(() => {
  return props.languages.find(lang => lang.code === selectedLanguage.value)
})

const helpTextId = computed(() => `${props.selectId}-help`)

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

const selectClasses = computed(() => {
  const base = 'w-full pr-10 text-sm border rounded-lg appearance-none transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-primary-500'
  
  const variants = {
    default: 'bg-white dark:bg-gray-800 border-gray-300 dark:border-gray-600 text-gray-900 dark:text-gray-100',
    minimal: 'bg-transparent border-gray-200 dark:border-gray-700 text-gray-900 dark:text-gray-100',
    outlined: 'bg-white dark:bg-gray-800 border-2 border-gray-300 dark:border-gray-600 text-gray-900 dark:text-gray-100'
  }
  
  const sizes = {
    sm: 'px-3 py-2 text-xs',
    md: 'px-4 py-3 text-sm',
    lg: 'px-5 py-4 text-base'
  }
  
  const state = props.errorMessage 
    ? 'border-error-500 focus:ring-error-500'
    : props.disabled
      ? 'opacity-50 cursor-not-allowed bg-gray-50 dark:bg-gray-900'
      : ''
  
  const padding = props.showFlag ? (props.size === 'sm' ? 'pl-10' : props.size === 'lg' ? 'pl-12' : 'pl-11') : ''
  
  return [base, variants[props.variant], sizes[props.size], state, padding]
})

const iconClasses = computed(() => {
  const base = 'transition-transform duration-200'
  const color = props.disabled ? 'text-gray-400' : 'text-gray-500 dark:text-gray-400'
  
  return [base, color]
})

const flagClasses = computed(() => {
  const sizes = {
    sm: 'text-base',
    md: 'text-lg',
    lg: 'text-xl'
  }
  
  return sizes[props.size]
})

const helpTextClasses = computed(() => {
  return 'text-gray-500 dark:text-gray-400'
})

const errorClasses = computed(() => {
  return 'text-error-500 dark:text-error-400'
})

// メソッド
const getDisplayText = (language: Language) => {
  if (props.showNativeName && language.nativeName) {
    return `${language.name} (${language.nativeName})`
  }
  return language.name
}

const handleLanguageChange = () => {
  const selectedLang = props.languages.find(lang => lang.code === selectedLanguage.value)
  
  emit('update:modelValue', selectedLanguage.value)
  
  if (selectedLang) {
    emit('change', selectedLang)
  }
}

// ライフサイクル
onMounted(() => {
  // 初期値が無効な場合は最初の有効な言語を選択
  const isValidLanguage = props.languages.some(lang => 
    lang.code === selectedLanguage.value && !lang.disabled
  )
  
  if (!isValidLanguage) {
    const firstValidLanguage = props.languages.find(lang => !lang.disabled)
    if (firstValidLanguage) {
      selectedLanguage.value = firstValidLanguage.code
      handleLanguageChange()
    }
  }
})

// プロパティ変更の監視
watch(() => props.modelValue, (newValue) => {
  selectedLanguage.value = newValue || 'ja'
})
</script>