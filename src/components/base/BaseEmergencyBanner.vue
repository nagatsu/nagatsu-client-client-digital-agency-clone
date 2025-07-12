<template>
  <div
    v-if="visible"
    role="alert"
    class="fixed top-0 left-0 right-0 z-50 bg-error-500 text-white shadow-lg"
    :class="{ 'animate-slide-down': visible }"
  >
    <div class="container-xl py-4">
      <div class="flex items-center justify-between gap-4">
        <!-- アイコンとコンテンツ -->
        <div class="flex items-start gap-3 flex-1">
          <!-- 緊急アイコン -->
          <div class="flex-shrink-0 mt-0.5">
            <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clip-rule="evenodd" />
            </svg>
          </div>
          
          <!-- テキストコンテンツ -->
          <div class="flex-1 min-w-0">
            <h2 class="text-heading-6 font-bold mb-1">
              {{ title }}
            </h2>
            <p v-if="description" class="text-body-sm leading-relaxed">
              {{ description }}
            </p>
          </div>
        </div>
        
        <!-- アクションボタン -->
        <div class="flex-shrink-0">
          <BaseButton
            v-if="actionText && actionUrl"
            :href="actionUrl"
            tag="a"
            variant="secondary"
            size="sm"
            class="bg-white text-error-500 hover:bg-neutral-50 border-white"
            @click="handleAction"
          >
            {{ actionText }}
          </BaseButton>
        </div>
      </div>
    </div>
  </div>
  
  <!-- スペーサー（バナーが表示されている間、コンテンツを下に押し下げる） -->
  <div v-if="visible" :style="{ height: bannerHeight + 'px' }" class="bg-error-500"></div>
</template>

<script setup>
import { ref, onMounted, nextTick } from 'vue'
import BaseButton from './BaseButton.vue'

const props = defineProps({
  // バナータイトル（全角30文字以内、先頭に「【緊急】」推奨）
  title: {
    type: String,
    required: true,
    validator: (value) => value.length <= 30
  },
  
  // 説明文（全角100文字以内）
  description: {
    type: String,
    default: '',
    validator: (value) => value.length <= 100
  },
  
  // アクションボタンのテキスト
  actionText: {
    type: String,
    default: ''
  },
  
  // アクションボタンのURL
  actionUrl: {
    type: String,
    default: ''
  },
  
  // バナーの表示状態
  modelValue: {
    type: Boolean,
    default: true
  }
})

const emit = defineEmits(['update:modelValue', 'action'])

// バナーの表示状態
const visible = ref(props.modelValue)
const bannerHeight = ref(0)

// バナーの高さを計算
onMounted(async () => {
  await nextTick()
  const bannerElement = document.querySelector('[role="alert"]')
  if (bannerElement) {
    bannerHeight.value = bannerElement.offsetHeight
  }
})

// アクションボタンクリック時の処理
const handleAction = (event) => {
  emit('action', event)
  
  // 外部リンクの場合は新しいタブで開く
  if (props.actionUrl && props.actionUrl.startsWith('http')) {
    event.preventDefault()
    window.open(props.actionUrl, '_blank', 'noopener,noreferrer')
  }
}

// バナーを閉じる（緊急事バナーは通常ユーザーが閉じることはできないが、プログラムから制御可能）
const closeBanner = () => {
  visible.value = false
  emit('update:modelValue', false)
}

// 外部からバナーを制御するためのメソッドを公開
defineExpose({
  closeBanner
})
</script>

<style scoped>
/* アニメーション */
@keyframes slideDown {
  from {
    transform: translateY(-100%);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}

.animate-slide-down {
  animation: slideDown 0.3s ease-out;
}
</style>