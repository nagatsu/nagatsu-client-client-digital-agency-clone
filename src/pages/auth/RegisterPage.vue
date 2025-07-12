<template>
  <RegisterForm />

  <!-- 利用規約同意 -->
  <div class="flex items-start mt-6">
    <div class="flex items-center h-5">
      <input
        id="terms"
        v-model="agreeToTerms"
        type="checkbox"
        class="h-4 w-4 text-primary-600 focus:ring-primary-500 border-neutral-300 rounded"
      >
    </div>
    <div class="ml-3 text-body-sm">
      <label for="terms" class="text-neutral-700">
        <a href="#" class="text-primary-600 hover:text-primary-500 font-medium">利用規約</a>
        および
        <a href="#" class="text-primary-600 hover:text-primary-500 font-medium">プライバシーポリシー</a>
        に同意します
      </label>
      <p v-if="termsError" class="mt-1 text-body-xs text-error-600">
        {{ termsError }}
      </p>
    </div>
  </div>

  <!-- メール通知設定 -->
  <div class="bg-neutral-50 rounded-lg p-4 mt-4">
    <h4 class="text-body-regular font-medium text-neutral-900 mb-3">メール通知設定</h4>
    <div class="space-y-3">
      <div class="flex items-center">
        <input
          id="email-updates"
          v-model="emailUpdates"
          type="checkbox"
          class="h-4 w-4 text-primary-600 focus:ring-primary-500 border-neutral-300 rounded"
        >
        <label for="email-updates" class="ml-2 text-body-sm text-neutral-700">
          サービスの更新情報を受け取る
        </label>
      </div>
      <div class="flex items-center">
        <input
          id="marketing-emails"
          v-model="marketingEmails"
          type="checkbox"
          class="h-4 w-4 text-primary-600 focus:ring-primary-500 border-neutral-300 rounded"
        >
        <label for="marketing-emails" class="ml-2 text-body-sm text-neutral-700">
          マーケティングメールを受け取る
        </label>
      </div>
    </div>
  </div>

  <!-- ソーシャル登録 -->
  <div class="mt-6">
    <div class="relative">
      <div class="absolute inset-0 flex items-center">
        <div class="w-full border-t border-neutral-300" />
      </div>
      <div class="relative flex justify-center text-body-sm">
        <span class="px-2 bg-white text-neutral-500">または</span>
      </div>
    </div>

    <div class="mt-6 grid grid-cols-1 gap-3">
      <BaseButton
        type="button"
        variant="outline"
        class="w-full"
        @click="registerWithGoogle"
      >
        <svg class="h-5 w-5 mr-2" viewBox="0 0 24 24">
          <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
          <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
          <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
          <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
        </svg>
        Googleで登録
      </BaseButton>
    </div>
  </div>

  <!-- エラーメッセージ -->
  <BaseAlert
    v-if="errorMessage"
    type="error"
    :message="errorMessage"
    @close="errorMessage = ''"
  />
</template>

<script setup>
import { ref } from 'vue'
import { useAppStore } from '@/stores/app'
import RegisterForm from '@/components/RegisterForm.vue'
import BaseButton from '@/components/base/BaseButton.vue'
import BaseAlert from '@/components/base/BaseAlert.vue'

const appStore = useAppStore()

const agreeToTerms = ref(false)
const termsError = ref('')
const emailUpdates = ref(true)
const marketingEmails = ref(false)
const errorMessage = ref('')

// Google登録
const registerWithGoogle = () => {
  appStore.addNotification({
    type: 'info',
    title: 'Google登録',
    message: 'Google登録機能は現在開発中です。',
    duration: 3000
  })
}
</script>