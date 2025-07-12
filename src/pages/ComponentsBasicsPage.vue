<template>
  <div class="space-y-8">
    <!-- ヘッダー -->
    <div class="flex items-center justify-between">
      <div>
        <h1 class="text-4xl font-bold text-neutral-900 mb-2">
          基本コンポーネント
        </h1>
        <p class="text-lg text-neutral-600">
          ボタン、インプット、アラート、バッジ、カード、モーダルなどの基本的なUIコンポーネント
        </p>
      </div>
      <a href="/components" class="border border-neutral-300 hover:border-neutral-400 text-neutral-700 font-medium py-2 px-4 rounded-md transition-colors inline-flex items-center">
        <svg class="h-4 w-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
          <path fill-rule="evenodd" d="M7.707 14.707a1 1 0 01-1.414 0L3 11.414V13a1 1 0 11-2 0V9a1 1 0 011-1h4a1 1 0 110 2H4.414l3.293 3.293a1 1 0 010 1.414z" clip-rule="evenodd" />
        </svg>
        一覧に戻る
      </a>
    </div>
    
    <!-- ボタン -->
    <section class="space-y-6">
      <BaseCard>
        <div class="p-6">
          <h3 class="text-heading-4 font-semibold text-neutral-900 mb-4">ボタンバリアント</h3>
          <p class="text-body-sm text-neutral-600 mb-6">
            デジタル庁デザインシステムに準拠したボタンバリアント。用途に応じて適切なバリアントを選択してください。
          </p>
          <div class="space-y-4">
            <div class="flex flex-wrap items-center gap-4">
              <BaseButton variant="primary">Primary</BaseButton>
              <BaseButton variant="secondary">Secondary</BaseButton>
              <BaseButton variant="success">Success</BaseButton>
              <BaseButton variant="warning">Warning</BaseButton>
              <BaseButton variant="error">Error</BaseButton>
              <BaseButton variant="outline">Outline</BaseButton>
              <BaseButton variant="ghost">Ghost</BaseButton>
            </div>
            <div class="text-body-sm text-neutral-600">
              <strong>Primary:</strong> メインアクション（最も目立つ） | 
              <strong>Secondary:</strong> セカンダリアクション | 
              <strong>Outline:</strong> 低優先度アクション | 
              <strong>Ghost:</strong> 最も控えめなアクション
            </div>
          </div>
        </div>
      </BaseCard>
      
      <BaseCard>
        <div class="p-6">
          <h3 class="text-heading-4 font-semibold text-neutral-900 mb-4">ボタンサイズ</h3>
          <p class="text-body-sm text-neutral-600 mb-6">
            5つのサイズが用意されており、コンテキストに応じて適切なサイズを選択できます。
          </p>
          <div class="space-y-4">
            <div class="flex flex-wrap items-center gap-4">
              <BaseButton size="xs">Extra Small</BaseButton>
              <BaseButton size="sm">Small</BaseButton>
              <BaseButton size="md">Medium</BaseButton>
              <BaseButton size="lg">Large</BaseButton>
              <BaseButton size="xl">Extra Large</BaseButton>
            </div>
            <div class="text-body-sm text-neutral-600">
              <strong>xs:</strong> 表内のアクション | 
              <strong>sm:</strong> サブアクション | 
              <strong>md:</strong> 標準 | 
              <strong>lg:</strong> 重要なアクション | 
              <strong>xl:</strong> ヒーローセクション
            </div>
          </div>
        </div>
      </BaseCard>
      
      <BaseCard>
        <div class="p-6">
          <h3 class="text-heading-4 font-semibold text-neutral-900 mb-4">ボタン状態</h3>
          <div class="space-y-4">
            <div class="flex flex-wrap items-center gap-4">
              <BaseButton>Normal</BaseButton>
              <BaseButton :loading="true">Loading</BaseButton>
              <BaseButton :disabled="true">Disabled</BaseButton>
              <BaseButton full-width>Full Width</BaseButton>
            </div>
          </div>
        </div>
      </BaseCard>
    </section>
    
    <!-- インプット -->
    <section class="space-y-6">
      <BaseCard>
        <div class="p-6">
          <h3 class="text-heading-4 font-semibold text-neutral-900 mb-4">テキストインプット</h3>
          <div class="space-y-4 max-w-md">
            <BaseInput
              v-model="sampleInputs.text"
              label="ラベル"
              placeholder="プレースホルダーテキスト"
            />
            <BaseInput
              v-model="sampleInputs.email"
              type="email"
              label="メールアドレス"
              placeholder="example@domain.com"
              help-text="有効なメールアドレスを入力してください"
            />
            <BaseInput
              v-model="sampleInputs.password"
              type="password"
              label="パスワード"
              placeholder="パスワードを入力"
              :show-password-toggle="true"
            />
            <BaseInput
              v-model="sampleInputs.disabled"
              label="無効化"
              placeholder="無効化されています"
              :disabled="true"
            />
            <BaseInput
              v-model="sampleInputs.error"
              label="エラー例"
              placeholder="エラー状態"
              error-message="このフィールドは必須です"
            />
          </div>
        </div>
      </BaseCard>
      
      <BaseCard>
        <div class="p-6">
          <h3 class="text-heading-4 font-semibold text-neutral-900 mb-4">テキストエリア</h3>
          <div class="max-w-md">
            <BaseInput
              v-model="sampleInputs.textarea"
              type="textarea"
              label="メッセージ"
              placeholder="こちらにメッセージを入力してください..."
              :rows="4"
              :max-length="500"
              :show-counter="true"
            />
          </div>
        </div>
      </BaseCard>
    </section>
    
    <!-- アラート -->
    <section class="space-y-6">
      <BaseCard>
        <div class="p-6">
          <h3 class="text-heading-4 font-semibold text-neutral-900 mb-4">アラート</h3>
          <div class="space-y-4">
            <BaseAlert
              type="info"
              title="情報"
              message="これは情報アラートのサンプルです。重要な情報をユーザーに伝えるために使用します。"
              :closable="false"
            />
            <BaseAlert
              type="success"
              title="成功"
              message="操作が正常に完了しました。このメッセージはユーザーに成功を知らせます。"
              :closable="false"
            />
            <BaseAlert
              type="warning"
              title="警告"
              message="この操作には注意が必要です。続行する前に内容をご確認ください。"
              :closable="false"
            />
            <BaseAlert
              type="error"
              title="エラー"
              message="エラーが発生しました。再度お試しいただくか、サポートにお問い合わせください。"
              :closable="false"
            />
          </div>
        </div>
      </BaseCard>
    </section>
    
    <!-- バッジ -->
    <section class="space-y-6">
      <BaseCard>
        <div class="p-6">
          <h3 class="text-heading-4 font-semibold text-neutral-900 mb-4">バッジバリアント</h3>
          <div class="flex flex-wrap gap-2 mb-4">
            <BaseBadge text="Default" />
            <BaseBadge text="Primary" variant="primary" />
            <BaseBadge text="Success" variant="success" />
            <BaseBadge text="Warning" variant="warning" />
            <BaseBadge text="Error" variant="error" />
            <BaseBadge text="Info" variant="info" />
            <BaseBadge text="Neutral" variant="neutral" />
          </div>
          
          <h4 class="text-body-regular font-medium mb-3">スタイルバリエーション</h4>
          <div class="space-y-3">
            <div>
              <span class="text-body-sm font-medium text-neutral-700 block mb-2">フィルド（デフォルト）</span>
              <div class="flex flex-wrap gap-2">
                <BaseBadge text="Filled" variant="primary" style="filled" />
                <BaseBadge text="Filled" variant="success" style="filled" />
                <BaseBadge text="Filled" variant="warning" style="filled" />
              </div>
            </div>
            <div>
              <span class="text-body-sm font-medium text-neutral-700 block mb-2">アウトライン</span>
              <div class="flex flex-wrap gap-2">
                <BaseBadge text="Outline" variant="primary" style="outline" />
                <BaseBadge text="Outline" variant="success" style="outline" />
                <BaseBadge text="Outline" variant="warning" style="outline" />
              </div>
            </div>
            <div>
              <span class="text-body-sm font-medium text-neutral-700 block mb-2">ソフト</span>
              <div class="flex flex-wrap gap-2">
                <BaseBadge text="Soft" variant="primary" style="soft" />
                <BaseBadge text="Soft" variant="success" style="soft" />
                <BaseBadge text="Soft" variant="warning" style="soft" />
              </div>
            </div>
          </div>
        </div>
      </BaseCard>
    </section>
    
    <!-- カード -->
    <section class="space-y-6">
      <BaseCard>
        <div class="p-6">
          <h3 class="text-heading-4 font-semibold text-neutral-900 mb-4">カード</h3>
          
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <BaseCard>
              <div class="p-4">
                <h4 class="text-heading-5 font-semibold text-neutral-900 mb-2">基本カード</h4>
                <p class="text-body-regular text-neutral-600">
                  これは基本的なカードコンポーネントです。コンテンツをグループ化し、視覚的に分離するために使用します。
                </p>
              </div>
            </BaseCard>
            
            <BaseCard hover>
              <div class="p-4">
                <div class="flex items-center justify-between mb-3">
                  <h4 class="text-heading-5 font-semibold text-neutral-900">ホバー効果付き</h4>
                  <BaseBadge text="New" variant="success" size="xs" />
                </div>
                <p class="text-body-regular text-neutral-600 mb-4">
                  マウスホバー時にエレベーション効果が適用されます。
                </p>
                <BaseButton size="sm" variant="primary">詳細を見る</BaseButton>
              </div>
            </BaseCard>
          </div>
        </div>
      </BaseCard>
    </section>
    
    <!-- モーダル -->
    <section class="space-y-6">
      <BaseCard>
        <div class="p-6">
          <h3 class="text-heading-4 font-semibold text-neutral-900 mb-4">モーダル</h3>
          <div class="flex flex-wrap gap-4">
            <BaseButton @click="showModal('small')">小サイズモーダル</BaseButton>
            <BaseButton @click="showModal('medium')">中サイズモーダル</BaseButton>
            <BaseButton @click="showModal('large')">大サイズモーダル</BaseButton>
            <BaseButton @click="showModal('form')">フォームモーダル</BaseButton>
          </div>
        </div>
      </BaseCard>
    </section>
    
    <!-- モーダルコンポーネント -->
    <BaseModal
      v-model="modalStates.small"
      title="小サイズモーダル"
      size="sm"
    >
      <p class="text-body-regular text-neutral-600">
        これは小サイズのモーダルです。簡単な確認メッセージや短い情報を表示するために使用します。
      </p>
      <template #footer>
        <BaseButton @click="modalStates.small = false">閉じる</BaseButton>
      </template>
    </BaseModal>
    
    <BaseModal
      v-model="modalStates.medium"
      title="中サイズモーダル"
      size="md"
    >
      <div class="space-y-4">
        <p class="text-body-regular text-neutral-600">
          これは中サイズのモーダルです。一般的な情報表示や簡単なフォームに適しています。
        </p>
        <BaseAlert
          type="info"
          message="モーダル内でもアラートコンポーネントを使用できます。"
          :closable="false"
        />
      </div>
      <template #footer>
        <div class="flex gap-3">
          <BaseButton variant="outline" @click="modalStates.medium = false">キャンセル</BaseButton>
          <BaseButton variant="primary" @click="modalStates.medium = false">OK</BaseButton>
        </div>
      </template>
    </BaseModal>
    
    <BaseModal
      v-model="modalStates.large"
      title="大サイズモーダル"
      size="lg"
    >
      <div class="space-y-6">
        <p class="text-body-regular text-neutral-600">
          これは大サイズのモーダルです。多くの情報や複数のコンポーネントを含むコンテンツに適しています。
        </p>
        
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <BaseCard>
            <div class="p-4">
              <h4 class="text-heading-6 font-semibold mb-2">カード 1</h4>
              <p class="text-body-sm text-neutral-600">
                モーダル内に複数のカードを配置することも可能です。
              </p>
            </div>
          </BaseCard>
          <BaseCard>
            <div class="p-4">
              <h4 class="text-heading-6 font-semibold mb-2">カード 2</h4>
              <p class="text-body-sm text-neutral-600">
                コンテンツを整理して表示するために使用します。
              </p>
            </div>
          </BaseCard>
        </div>
      </div>
      <template #footer>
        <div class="flex gap-3">
          <BaseButton variant="outline" @click="modalStates.large = false">キャンセル</BaseButton>
          <BaseButton variant="primary" @click="modalStates.large = false">保存</BaseButton>
        </div>
      </template>
    </BaseModal>
    
    <BaseModal
      v-model="modalStates.form"
      title="フォームモーダル"
      size="md"
    >
      <form @submit.prevent="submitForm" class="space-y-4">
        <BaseInput
          v-model="formData.name"
          label="名前"
          placeholder="お名前を入力してください"
          required
        />
        <BaseInput
          v-model="formData.email"
          type="email"
          label="メールアドレス"
          placeholder="example@domain.com"
          required
        />
        <BaseInput
          v-model="formData.message"
          type="textarea"
          label="メッセージ"
          placeholder="メッセージを入力してください"
          :rows="3"
        />
      </form>
      <template #footer>
        <div class="flex gap-3">
          <BaseButton variant="outline" @click="modalStates.form = false">キャンセル</BaseButton>
          <BaseButton variant="primary" @click="submitForm">送信</BaseButton>
        </div>
      </template>
    </BaseModal>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue'
import { useAppStore } from '@/stores/app'
import BaseButton from '@/components/base/BaseButton.vue'
import BaseCard from '@/components/base/BaseCard.vue'
import BaseInput from '@/components/base/BaseInput.vue'
import BaseAlert from '@/components/base/BaseAlert.vue'
import BaseBadge from '@/components/base/BaseBadge.vue'
import BaseModal from '@/components/base/BaseModal.vue'

const appStore = useAppStore()

// サンプルデータ
const sampleInputs = reactive({
  text: '',
  email: '',
  password: '',
  disabled: '無効化された値',
  error: '',
  textarea: ''
})

// モーダル状態
const modalStates = reactive({
  small: false,
  medium: false,
  large: false,
  form: false
})

// フォームデータ
const formData = reactive({
  name: '',
  email: '',
  message: ''
})

// モーダル表示
const showModal = (type) => {
  modalStates[type] = true
}

// フォーム送信
const submitForm = () => {
  appStore.addNotification({
    type: 'success',
    title: '送信完了',
    message: 'フォームが正常に送信されました。'
  })
  modalStates.form = false
  Object.keys(formData).forEach(key => formData[key] = '')
}
</script>