<template>
  <BaseCard>
    <h3 class="text-heading-4 font-semibold mb-6">ユーザー登録</h3>

    <form @submit.prevent="handleSubmit" class="space-y-6">
      <BaseInput
        v-model="form.name"
        label="名前"
        placeholder="お名前を入力してください"
        :error-message="errors.name"
        required
      />

      <BaseInput
        v-model="form.email"
        type="email"
        label="メールアドレス"
        placeholder="example@domain.com"
        :error-message="errors.email"
        required
      />

      <BaseInput
        v-model="form.password"
        type="password"
        label="パスワード"
        placeholder="パスワードを入力してください"
        :error-message="errors.password"
        :show-password-toggle="true"
        help-text="8文字以上で入力してください"
        required
      />

      <div class="flex justify-end space-x-4">
        <BaseButton type="button" variant="outline" @click="handleCancel">
          キャンセル
        </BaseButton>
        <BaseButton type="submit" variant="primary" :loading="loading">
          登録
        </BaseButton>
      </div>
    </form>
  </BaseCard>
</template>

<script setup>
import { reactive, ref } from 'vue'
import { useAppStore } from '@/stores/app'
import BaseCard from '@/components/base/BaseCard.vue'
import BaseInput from '@/components/base/BaseInput.vue'
import BaseButton from '@/components/base/BaseButton.vue'

const appStore = useAppStore()
const loading = ref(false)

const form = reactive({
  name: '',
  email: '',
  password: ''
})

const errors = reactive({
  name: '',
  email: '',
  password: ''
})

const validateForm = () => {
  let isValid = true
  errors.name = ''
  errors.email = ''
  errors.password = ''

  if (!form.name) {
    errors.name = '名前は必須です。'
    isValid = false
  }
  if (!form.email) {
    errors.email = 'メールアドレスは必須です。'
    isValid = false
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
    errors.email = '有効なメールアドレスを入力してください。'
    isValid = false
  }
  if (!form.password) {
    errors.password = 'パスワードは必須です。'
    isValid = false
  } else if (form.password.length < 8) {
    errors.password = 'パスワードは8文字以上で入力してください。'
    isValid = false
  }

  return isValid
}

const handleSubmit = async () => {
  if (!validateForm()) {
    appStore.addNotification({
      type: 'error',
      title: '入力エラー',
      message: '入力内容を確認してください。'
    })
    return
  }

  loading.value = true
  appStore.setLoading(true)

  try {
    // ここにAPI呼び出しのロジックを実装します
    // 例: const response = await api.post('/api/register', form)
    // 実際にはバックエンド（Gemini CLIの役割）が提供するAPIを使用します

    // 仮の成功処理
    await new Promise(resolve => setTimeout(resolve, 1500)) // 擬似的なAPI遅延

    appStore.addNotification({
      type: 'success',
      title: '登録完了',
      message: 'ユーザー登録が完了しました。'
    })
    // フォームのリセット
    form.name = ''
    form.email = ''
    form.password = ''

  } catch (error) {
    appStore.addNotification({
      type: 'error',
      title: '登録失敗',
      message: 'ユーザー登録に失敗しました。'
    })
  } finally {
    loading.value = false
    appStore.setLoading(false)
  }
}

const handleCancel = () => {
  // キャンセル時の処理（例: フォームのリセット、前のページに戻るなど）
  form.name = ''
  form.email = ''
  form.password = ''
  errors.name = ''
  errors.email = ''
  errors.password = ''
  appStore.addNotification({
    type: 'info',
    title: 'キャンセル',
    message: 'ユーザー登録をキャンセルしました。'
  })
}
</script>
