<template>
  <div class="form-builder bg-white rounded-lg border border-neutral-200 overflow-hidden">
    <!-- ヘッダー -->
    <div v-if="showHeader" class="px-6 py-4 border-b border-neutral-200 bg-neutral-50">
      <div class="flex items-center justify-between">
        <div>
          <h3 v-if="title" class="text-heading-5 font-semibold text-neutral-900">
            {{ title }}
          </h3>
          <p v-if="description" class="text-body-sm text-neutral-600 mt-1">
            {{ description }}
          </p>
        </div>
        
        <!-- 設定ボタン -->
        <div class="flex items-center gap-2">
          <BaseButton
            v-if="configurable"
            variant="outline"
            size="sm"
            @click="showConfig = !showConfig"
          >
            <svg class="h-4 w-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            設定
          </BaseButton>
        </div>
      </div>
    </div>

    <!-- 設定パネル -->
    <div v-if="showConfig && configurable" class="px-6 py-4 border-b border-neutral-200 bg-neutral-25">
      <div class="space-y-4">
        <div>
          <label class="text-sm font-medium text-neutral-700 mb-2 block">
            フォームレイアウト
          </label>
          <BaseDropdown v-model="formConfig.layout" size="sm">
            <option value="vertical">縦型</option>
            <option value="horizontal">横型</option>
            <option value="grid">グリッド</option>
          </BaseDropdown>
        </div>
        
        <div>
          <label class="text-sm font-medium text-neutral-700 mb-2 block">
            バリデーション表示
          </label>
          <BaseDropdown v-model="formConfig.validationMode" size="sm">
            <option value="immediate">即座</option>
            <option value="blur">フォーカス離脱時</option>
            <option value="submit">送信時</option>
          </BaseDropdown>
        </div>
      </div>
    </div>

    <!-- フォーム本体 -->
    <form @submit.prevent="handleSubmit" class="p-6">
      <div :class="formLayoutClasses">
        <div
          v-for="field in schema"
          :key="field.name"
          :class="fieldLayoutClasses"
        >
          <!-- フィールドラベル -->
          <label
            v-if="field.label"
            :for="field.name"
            :class="labelClasses"
          >
            {{ field.label }}
            <span v-if="field.required" class="text-error-600 ml-1">*</span>
          </label>

          <!-- 入力フィールド -->
          <div class="relative">
            <!-- テキスト系入力 -->
            <BaseInput
              v-if="['text', 'email', 'password', 'tel', 'url'].includes(field.type)"
              :id="field.name"
              v-model="formData[field.name]"
              :type="field.type"
              :placeholder="field.placeholder"
              :disabled="field.disabled"
              :size="formConfig.size || 'md'"
              :class="{ 'border-error-300': hasError(field.name) }"
              @blur="validateField(field.name)"
              @input="formConfig.validationMode === 'immediate' && validateField(field.name)"
            />

            <!-- テキストエリア -->
            <BaseTextarea
              v-else-if="field.type === 'textarea'"
              :id="field.name"
              v-model="formData[field.name]"
              :placeholder="field.placeholder"
              :disabled="field.disabled"
              :rows="field.rows || 3"
              :class="{ 'border-error-300': hasError(field.name) }"
              @blur="validateField(field.name)"
              @input="formConfig.validationMode === 'immediate' && validateField(field.name)"
            />

            <!-- セレクト -->
            <BaseDropdown
              v-else-if="field.type === 'select'"
              :id="field.name"
              v-model="formData[field.name]"
              :disabled="field.disabled"
              :size="formConfig.size || 'md'"
              :class="{ 'border-error-300': hasError(field.name) }"
              @change="validateField(field.name)"
            >
              <option value="" disabled>{{ field.placeholder || '選択してください' }}</option>
              <option
                v-for="option in field.options"
                :key="option.value"
                :value="option.value"
              >
                {{ option.label }}
              </option>
            </BaseDropdown>

            <!-- チェックボックス -->
            <div v-else-if="field.type === 'checkbox'" class="flex items-center">
              <input
                :id="field.name"
                v-model="formData[field.name]"
                type="checkbox"
                :disabled="field.disabled"
                class="h-4 w-4 text-primary-600 border-neutral-300 rounded focus:ring-primary-500"
                @change="validateField(field.name)"
              />
              <label :for="field.name" class="ml-2 text-sm text-neutral-700">
                {{ field.checkboxLabel || field.label }}
              </label>
            </div>

            <!-- ラジオボタン -->
            <fieldset v-else-if="field.type === 'radio'" class="space-y-2">
              <div
                v-for="option in field.options"
                :key="option.value"
                class="flex items-center"
              >
                <input
                  :id="`${field.name}_${option.value}`"
                  v-model="formData[field.name]"
                  :value="option.value"
                  type="radio"
                  :name="field.name"
                  :disabled="field.disabled"
                  class="h-4 w-4 text-primary-600 border-neutral-300 focus:ring-primary-500"
                  @change="validateField(field.name)"
                />
                <label :for="`${field.name}_${option.value}`" class="ml-2 text-sm text-neutral-700">
                  {{ option.label }}
                </label>
              </div>
            </fieldset>

            <!-- 日付 -->
            <BaseInput
              v-else-if="field.type === 'date'"
              :id="field.name"
              v-model="formData[field.name]"
              type="date"
              :disabled="field.disabled"
              :size="formConfig.size || 'md'"
              :class="{ 'border-error-300': hasError(field.name) }"
              @blur="validateField(field.name)"
              @input="formConfig.validationMode === 'immediate' && validateField(field.name)"
            />

            <!-- 数値 -->
            <BaseInput
              v-else-if="field.type === 'number'"
              :id="field.name"
              :model-value="formData[field.name]"
              @update:model-value="(value) => formData[field.name] = Number(value)"
              type="number"
              :placeholder="field.placeholder"
              :disabled="field.disabled"
              :min="field.min"
              :max="field.max"
              :step="field.step"
              :size="formConfig.size || 'md'"
              :class="{ 'border-error-300': hasError(field.name) }"
              @blur="validateField(field.name)"
              @input="formConfig.validationMode === 'immediate' && validateField(field.name)"
            />

            <!-- ファイル -->
            <input
              v-else-if="field.type === 'file'"
              :id="field.name"
              type="file"
              :disabled="field.disabled"
              :accept="field.accept"
              :multiple="field.multiple"
              class="block w-full text-sm text-neutral-500 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-medium file:bg-primary-50 file:text-primary-700 hover:file:bg-primary-100"
              @change="handleFileChange(field.name, $event)"
            />
          </div>

          <!-- エラーメッセージ -->
          <div v-if="hasError(field.name)" class="mt-1">
            <p class="text-sm text-error-600">
              {{ errors[field.name] }}
            </p>
          </div>

          <!-- ヘルプテキスト -->
          <div v-if="field.help && !hasError(field.name)" class="mt-1">
            <p class="text-sm text-neutral-500">
              {{ field.help }}
            </p>
          </div>
        </div>
      </div>

      <!-- フォームアクション -->
      <div class="mt-6 pt-6 border-t border-neutral-200">
        <div class="flex items-center justify-between">
          <div>
            <span v-if="showProgress" class="text-sm text-neutral-600">
              {{ completedFields }} / {{ requiredFields }} 必須項目完了
            </span>
          </div>
          
          <div class="flex items-center gap-3">
            <BaseButton
              v-if="showReset"
              type="button"
              variant="outline"
              @click="resetForm"
            >
              リセット
            </BaseButton>
            
            <BaseButton
              v-if="showValidate"
              type="button"
              variant="outline"
              @click="validateAll"
            >
              バリデーション
            </BaseButton>
            
            <BaseButton
              type="submit"
              variant="primary"
              :disabled="!isValid || isSubmitting"
              :loading="isSubmitting"
            >
              {{ submitText }}
            </BaseButton>
          </div>
        </div>
      </div>
    </form>

    <!-- プレビューモード -->
    <div v-if="showPreview" class="px-6 py-4 border-t border-neutral-200 bg-neutral-25">
      <h4 class="text-sm font-medium text-neutral-700 mb-3">フォームデータプレビュー</h4>
      <pre class="text-xs bg-white p-3 rounded border overflow-auto max-h-40">{{ JSON.stringify(formData, null, 2) }}</pre>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, watch, nextTick } from 'vue'
import BaseInput from '@/components/base/BaseInput.vue'
import BaseTextarea from '@/components/base/BaseTextarea.vue'
import BaseButton from '@/components/base/BaseButton.vue'
import BaseDropdown from '@/components/base/BaseDropdown.vue'

const props = defineProps({
  // フォームスキーマ
  schema: {
    type: Array,
    required: true
  },
  
  // 初期値
  initialData: {
    type: Object,
    default: () => ({})
  },
  
  // 基本設定
  title: {
    type: String,
    default: ''
  },
  
  description: {
    type: String,
    default: ''
  },
  
  // 表示制御
  showHeader: {
    type: Boolean,
    default: true
  },
  
  showProgress: {
    type: Boolean,
    default: false
  },
  
  showReset: {
    type: Boolean,
    default: true
  },
  
  showValidate: {
    type: Boolean,
    default: false
  },
  
  showPreview: {
    type: Boolean,
    default: false
  },
  
  configurable: {
    type: Boolean,
    default: false
  },
  
  // ボタンテキスト
  submitText: {
    type: String,
    default: '送信'
  },
  
  // フォーム設定
  layout: {
    type: String,
    default: 'vertical',
    validator: value => ['vertical', 'horizontal', 'grid'].includes(value)
  },
  
  validationMode: {
    type: String,
    default: 'blur',
    validator: value => ['immediate', 'blur', 'submit'].includes(value)
  },
  
  size: {
    type: String,
    default: 'md',
    validator: value => ['sm', 'md', 'lg'].includes(value)
  }
})

const emit = defineEmits(['submit', 'change', 'validate', 'reset'])

// リアクティブデータ
const formData = ref({})
const errors = ref({})
const isSubmitting = ref(false)
const showConfig = ref(false)

const formConfig = ref({
  layout: props.layout,
  validationMode: props.validationMode,
  size: props.size
})

// フォームデータ初期化
const initializeFormData = () => {
  const data = {}
  props.schema.forEach(field => {
    if (props.initialData[field.name] !== undefined) {
      data[field.name] = props.initialData[field.name]
    } else if (field.default !== undefined) {
      data[field.name] = field.default
    } else {
      switch (field.type) {
        case 'checkbox':
          data[field.name] = false
          break
        case 'file':
          data[field.name] = field.multiple ? [] : null
          break
        default:
          data[field.name] = ''
      }
    }
  })
  formData.value = data
}

// 計算されたプロパティ
const formLayoutClasses = computed(() => {
  const base = 'space-y-6'
  switch (formConfig.value.layout) {
    case 'horizontal':
      return `${base} space-y-4`
    case 'grid':
      return 'grid grid-cols-1 md:grid-cols-2 gap-6'
    default:
      return base
  }
})

const fieldLayoutClasses = computed(() => {
  if (formConfig.value.layout === 'horizontal') {
    return 'flex items-start gap-4'
  }
  return ''
})

const labelClasses = computed(() => {
  const base = 'text-sm font-medium text-neutral-700'
  if (formConfig.value.layout === 'horizontal') {
    return `${base} w-32 flex-shrink-0 pt-2`
  }
  return `${base} mb-2 block`
})

const requiredFields = computed(() => {
  return props.schema.filter(field => field.required).length
})

const completedFields = computed(() => {
  return props.schema.filter(field => {
    if (!field.required) return false
    const value = formData.value[field.name]
    return value !== '' && value !== null && value !== undefined && 
           (Array.isArray(value) ? value.length > 0 : true)
  }).length
})

const isValid = computed(() => {
  return Object.keys(errors.value).length === 0 && 
         completedFields.value === requiredFields.value
})

// バリデーション
const validateField = (fieldName) => {
  const field = props.schema.find(f => f.name === fieldName)
  if (!field) return

  const value = formData.value[fieldName]
  
  // 必須チェック
  if (field.required && (value === '' || value === null || value === undefined)) {
    errors.value[fieldName] = `${field.label}は必須です`
    return
  }
  
  // カスタムバリデーション
  if (field.validation && value !== '' && value !== null && value !== undefined) {
    for (const rule of field.validation) {
      if (rule.type === 'minLength' && value.length < rule.value) {
        errors.value[fieldName] = rule.message || `${rule.value}文字以上で入力してください`
        return
      }
      
      if (rule.type === 'maxLength' && value.length > rule.value) {
        errors.value[fieldName] = rule.message || `${rule.value}文字以下で入力してください`
        return
      }
      
      if (rule.type === 'pattern' && !rule.value.test(value)) {
        errors.value[fieldName] = rule.message || '形式が正しくありません'
        return
      }
      
      if (rule.type === 'email' && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
        errors.value[fieldName] = rule.message || 'メールアドレスの形式が正しくありません'
        return
      }
      
      if (rule.type === 'min' && Number(value) < rule.value) {
        errors.value[fieldName] = rule.message || `${rule.value}以上の値を入力してください`
        return
      }
      
      if (rule.type === 'max' && Number(value) > rule.value) {
        errors.value[fieldName] = rule.message || `${rule.value}以下の値を入力してください`
        return
      }
      
      if (rule.type === 'custom' && rule.validator && !rule.validator(value)) {
        errors.value[fieldName] = rule.message || 'バリデーションエラー'
        return
      }
    }
  }
  
  // エラーがない場合は削除
  delete errors.value[fieldName]
}

const validateAll = () => {
  errors.value = {}
  props.schema.forEach(field => {
    validateField(field.name)
  })
  
  emit('validate', {
    isValid: isValid.value,
    errors: errors.value,
    data: formData.value
  })
}

const hasError = (fieldName) => {
  return errors.value[fieldName] !== undefined
}

// イベントハンドラ
const handleSubmit = async () => {
  if (formConfig.value.validationMode === 'submit') {
    validateAll()
  }
  
  if (!isValid.value) {
    return
  }
  
  isSubmitting.value = true
  
  try {
    await emit('submit', { ...formData.value })
  } finally {
    isSubmitting.value = false
  }
}

const handleFileChange = (fieldName, event) => {
  const files = Array.from(event.target.files)
  const field = props.schema.find(f => f.name === fieldName)
  
  if (field.multiple) {
    formData.value[fieldName] = files
  } else {
    formData.value[fieldName] = files[0] || null
  }
  
  validateField(fieldName)
}

const resetForm = () => {
  initializeFormData()
  errors.value = {}
  emit('reset', { ...formData.value })
}

// ウォッチャー
watch(() => props.schema, () => {
  initializeFormData()
}, { immediate: true })

watch(() => props.initialData, () => {
  initializeFormData()
}, { deep: true })

watch(formData, (newData) => {
  emit('change', { ...newData })
}, { deep: true })

// 初期化
initializeFormData()
</script>

<style scoped>
.form-builder {
  @apply shadow-sm;
}

/* レスポンシブ対応 */
@media (max-width: 768px) {
  .form-builder .grid {
    grid-template-columns: 1fr;
  }
  
  .form-builder .flex.items-start {
    flex-direction: column;
    align-items: stretch;
  }
  
  .form-builder .w-32 {
    width: 100%;
    padding-top: 0;
    margin-bottom: 0.5rem;
  }
}
</style>