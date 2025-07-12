<template>
  <div class="space-y-8">
    <!-- ヘッダー -->
    <div class="text-center">
      <h1 class="text-heading-1 font-bold text-neutral-900 mb-4">
        フォームサンプル
      </h1>
      <p class="text-heading-6 text-neutral-600 max-w-2xl mx-auto">
        様々なフォーム要素とバリデーションのサンプルです。
        実際のアプリケーションで使用できる実装例を確認できます。
      </p>
    </div>
    
    <!-- フォームセクション -->
    <div class="max-w-2xl mx-auto space-y-8">
      <!-- 基本フォーム -->
      <BaseCard>
        <h3 class="text-heading-4 font-semibold text-neutral-900 mb-6">基本フォーム</h3>
        <form @submit.prevent="handleSubmit" class="space-y-6">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <BaseInput
              v-model="form.firstName"
              label="名"
              placeholder="太郎"
              required
            />
            <BaseInput
              v-model="form.lastName"
              label="姓"
              placeholder="山田"
              required
            />
          </div>
          
          <BaseInput
            v-model="form.email"
            type="email"
            label="メールアドレス"
            placeholder="example@domain.com"
            help-text="重要な通知をお送りします"
            required
          />
          
          <BaseInput
            v-model="form.phone"
            type="tel"
            label="電話番号"
            placeholder="090-1234-5678"
            help-text="ハイフンを含めて入力してください"
          />
          
          <BaseInput
            v-model="form.message"
            type="textarea"
            label="メッセージ"
            placeholder="ご質問やご要望をお聞かせください"
            :rows="4"
            :max-length="500"
            :show-counter="true"
          />
          
          <div class="flex justify-end space-x-4">
            <BaseButton type="button" variant="outline" @click="resetForm">
              リセット
            </BaseButton>
            <BaseButton type="submit" variant="primary">
              送信
            </BaseButton>
          </div>
        </form>
      </BaseCard>
      
      <!-- バリデーションフォーム -->
      <BaseCard>
        <h3 class="text-heading-4 font-semibold text-neutral-900 mb-6">バリデーションサンプル</h3>
        <form @submit.prevent="handleValidationSubmit" class="space-y-6">
          <BaseInput
            v-model="validationForm.username"
            label="ユーザー名"
            placeholder="3文字以上で入力してください"
            :error-message="validationErrors.username"
            required
          />
          
          <BaseInput
            v-model="validationForm.password"
            type="password"
            label="パスワード"
            placeholder="8文字以上で入力してください"
            :error-message="validationErrors.password"
            :show-password-toggle="true"
            required
          />
          
          <BaseInput
            v-model="validationForm.confirmPassword"
            type="password"
            label="パスワード（確認）"
            placeholder="パスワードを再入力してください"
            :error-message="validationErrors.confirmPassword"
            :show-password-toggle="true"
            required
          />
          
          <BaseInput
            v-model="validationForm.website"
            type="url"
            label="ウェブサイト"
            placeholder="https://example.com"
            :error-message="validationErrors.website"
            help-text="有効なURLを入力してください"
          />
          
          <div class="flex justify-end">
            <BaseButton type="submit" variant="primary">
              バリデーション実行
            </BaseButton>
          </div>
        </form>
      </BaseCard>
      
      <!-- フォーム状態デモ -->
      <BaseCard>
        <h3 class="text-heading-4 font-semibold text-neutral-900 mb-6">フォーム状態デモ</h3>
        <div class="space-y-6">
          <BaseInput
            label="通常状態"
            placeholder="通常のインプットフィールド"
            value="サンプルテキスト"
          />
          
          <BaseInput
            label="フォーカス状態"
            placeholder="フォーカス時のスタイル"
          />
          
          <BaseInput
            label="無効状態"
            placeholder="無効化されています"
            value="編集できません"
            :disabled="true"
          />
          
          <BaseInput
            label="エラー状態"
            placeholder="エラーがある状態"
            value="無効な値"
            error-message="この値は正しくありません"
          />
          
          <BaseInput
            label="成功状態"
            placeholder="バリデーション成功"
            value="有効な値"
            help-text="この値は正しく入力されています"
          />
        </div>
      </BaseCard>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive, watch } from 'vue'
import { useAppStore } from '@/stores/app'
import { validators } from '@/utils/helpers'
import BaseCard from '@/components/base/BaseCard.vue'
import BaseInput from '@/components/base/BaseInput.vue'
import BaseButton from '@/components/base/BaseButton.vue'

const appStore = useAppStore()

// フォームデータ
const form = reactive({
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  message: ''
})

// バリデーションフォーム
const validationForm = reactive({
  username: '',
  password: '',
  confirmPassword: '',
  website: ''
})

// バリデーションエラー
const validationErrors = reactive({
  username: '',
  password: '',
  confirmPassword: '',
  website: ''
})

// フォーム送信
const handleSubmit = () => {
  appStore.addNotification({
    type: 'success',
    title: 'フォーム送信完了',
    message: `${form.firstName} ${form.lastName}様のフォームが正常に送信されました。`,
    duration: 5000
  })
}

// フォームリセット
const resetForm = () => {
  Object.keys(form).forEach(key => {
    form[key] = ''
  })
  appStore.addNotification({
    type: 'info',
    title: 'フォームをリセット',
    message: 'フォームの内容がクリアされました。'
  })
}

// バリデーション実行
const validateForm = () => {
  const errors = {}
  
  // ユーザー名バリデーション
  if (!validationForm.username) {
    errors.username = 'ユーザー名は必須です'
  } else if (validationForm.username.length < 3) {
    errors.username = 'ユーザー名は3文字以上で入力してください'
  }
  
  // パスワードバリデーション
  if (!validationForm.password) {
    errors.password = 'パスワードは必須です'
  } else if (validationForm.password.length < 8) {
    errors.password = 'パスワードは8文字以上で入力してください'
  }
  
  // パスワード確認バリデーション
  if (!validationForm.confirmPassword) {
    errors.confirmPassword = 'パスワード確認は必須です'
  } else if (validationForm.password !== validationForm.confirmPassword) {
    errors.confirmPassword = 'パスワードが一致しません'
  }
  
  // ウェブサイトバリデーション
  if (validationForm.website) {
    const urlError = validators.url(validationForm.website)
    if (urlError) {
      errors.website = urlError
    }
  }
  
  return errors
}

// バリデーションフォーム送信
const handleValidationSubmit = () => {
  const errors = validateForm()
  
  // エラーを更新
  Object.keys(validationErrors).forEach(key => {
    validationErrors[key] = errors[key] || ''
  })
  
  if (Object.keys(errors).length === 0) {
    appStore.addNotification({
      type: 'success',
      title: 'バリデーション成功',
      message: 'すべての入力値が正しく検証されました。',
      duration: 5000
    })
  } else {
    appStore.addNotification({
      type: 'error',
      title: 'バリデーションエラー',
      message: '入力内容を確認してください。',
      duration: 5000
    })
  }
}

// リアルタイムバリデーション
watch(
  () => validationForm.username,
  (newValue) => {
    if (newValue && newValue.length >= 3) {
      validationErrors.username = ''
    }
  }
)

watch(
  () => validationForm.password,
  (newValue) => {
    if (newValue && newValue.length >= 8) {
      validationErrors.password = ''
    }
    // パスワード確認も再チェック
    if (validationForm.confirmPassword && newValue !== validationForm.confirmPassword) {
      validationErrors.confirmPassword = 'パスワードが一致しません'
    } else if (validationForm.confirmPassword && newValue === validationForm.confirmPassword) {
      validationErrors.confirmPassword = ''
    }
  }
)

watch(
  () => validationForm.confirmPassword,
  (newValue) => {
    if (newValue && validationForm.password === newValue) {
      validationErrors.confirmPassword = ''
    }
  }
)
</script>