<template>
  <div class="space-y-8">
    <!-- ヘッダー -->
    <div class="flex items-center justify-between">
      <div>
        <h1 class="text-heading-1 font-bold text-neutral-900 mb-2">
          データ表示コンポーネント
        </h1>
        <p class="text-heading-6 text-neutral-600">
          テーブル、リスト、ドロップダウン、日付ピッカー、ファイルアップロード、プログレス表示
        </p>
      </div>
      <BaseButton variant="outline" @click="$router.push('/components')">
        <svg class="h-4 w-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
          <path fill-rule="evenodd" d="M7.707 14.707a1 1 0 01-1.414 0L3 11.414V13a1 1 0 11-2 0V9a1 1 0 011-1h4a1 1 0 110 2H4.414l3.293 3.293a1 1 0 010 1.414z" clip-rule="evenodd" />
        </svg>
        一覧に戻る
      </BaseButton>
    </div>
    
    <!-- テーブル -->
    <section class="space-y-6">
      <BaseCard>
        <div class="p-6">
          <h3 class="text-heading-4 font-semibold text-neutral-900 mb-4">データテーブル</h3>
          <p class="text-body-sm text-neutral-600 mb-6">
            ソート機能付きのデータテーブル。大量のデータを整理して表示できます。
          </p>
          <BaseTable :columns="tableColumns" :items="tableItems" sortable />
        </div>
      </BaseCard>
    </section>
    
    <!-- ドロップダウン -->
    <section class="space-y-6">
      <BaseCard>
        <div class="p-6">
          <h3 class="text-heading-4 font-semibold text-neutral-900 mb-4">ドロップダウン</h3>
          <p class="text-body-sm text-neutral-600 mb-6">
            Headless UIを使用した高機能なドロップダウンメニュー。
          </p>
          <BaseDropdown>
            <template #button>メニューを開く</template>
            <MenuItem v-for="(item, idx) in dropdownItems" :key="idx">
              <button class="w-full text-left px-4 py-2 text-sm text-neutral-700 hover:bg-neutral-100">{{ item }}</button>
            </MenuItem>
          </BaseDropdown>
        </div>
      </BaseCard>
    </section>
    
    <!-- 日付ピッカー -->
    <section class="space-y-6">
      <BaseCard>
        <div class="p-6">
          <h3 class="text-heading-4 font-semibold text-neutral-900 mb-4">日付ピッカー</h3>
          <p class="text-body-sm text-neutral-600 mb-6">
            dayjsを使用した日付選択コンポーネント。フォームでの日付入力に最適です。
          </p>
          <div class="max-w-sm">
            <BaseDatePicker v-model="selectedDate" />
            <p class="text-body-sm text-neutral-600 mt-2">選択日: {{ selectedDate }}</p>
          </div>
        </div>
      </BaseCard>
    </section>
    
    <!-- ファイルアップロード -->
    <section class="space-y-6">
      <BaseCard>
        <div class="p-6">
          <h3 class="text-heading-4 font-semibold text-neutral-900 mb-4">ファイルアップロード</h3>
          <p class="text-body-sm text-neutral-600 mb-6">
            ドラッグ&ドロップに対応したファイルアップロードコンポーネント。
          </p>
          <BaseFileUpload @change="onFileChange" />
          <p v-if="uploadedFile" class="text-body-sm text-neutral-600 mt-2">{{ uploadedFile.name }}</p>
        </div>
      </BaseCard>
    </section>
    
    <!-- プログレスインジケーター -->
    <section class="space-y-6">
      <BaseCard>
        <div class="p-6">
          <h3 class="text-heading-4 font-semibold text-neutral-900 mb-4">プログレスインジケーター</h3>
          <p class="text-body-sm text-neutral-600 mb-6">
            4種類のプログレス表示コンポーネント。処理進行状況を視覚的に伝えます。
          </p>
          <div class="space-y-8">
            <div>
              <h4 class="text-body-regular font-medium mb-4">プログレスバー</h4>
              <div class="space-y-4">
                <BaseProgressIndicator
                  type="bar"
                  :percentage="45"
                  label="ファイルアップロード中"
                  description="残り時間: 約3分"
                />
                <BaseProgressIndicator
                  type="bar"
                  :percentage="75"
                  variant="success"
                  label="処理完了間近"
                />
                <BaseProgressIndicator
                  type="bar"
                  :percentage="30"
                  variant="warning"
                  label="注意が必要"
                />
              </div>
            </div>
            
            <div>
              <h4 class="text-body-regular font-medium mb-4">円形プログレス</h4>
              <div class="flex flex-wrap gap-6">
                <BaseProgressIndicator
                  type="circle"
                  :percentage="80"
                  size="sm"
                  variant="primary"
                />
                <BaseProgressIndicator
                  type="circle"
                  :percentage="60"
                  size="md"
                  variant="success"
                />
                <BaseProgressIndicator
                  type="circle"
                  :percentage="90"
                  size="lg"
                  variant="warning"
                />
              </div>
            </div>
            
            <div>
              <h4 class="text-body-regular font-medium mb-4">スピナー</h4>
              <div class="flex flex-wrap items-center gap-6">
                <BaseProgressIndicator
                  type="spinner"
                  label="読み込み中..."
                  size="sm"
                />
                <BaseProgressIndicator
                  type="spinner"
                  label="処理中..."
                  size="md"
                  variant="success"
                />
                <BaseProgressIndicator
                  type="spinner"
                  label="アップロード中..."
                  size="lg"
                  variant="warning"
                />
              </div>
            </div>
            
            <div>
              <h4 class="text-body-regular font-medium mb-4">ステップ進行</h4>
              <div class="space-y-4">
                <BaseProgressIndicator
                  type="steps"
                  :steps="progressSteps"
                  :current-step="2"
                />
                <BaseProgressIndicator
                  type="steps"
                  :steps="progressSteps"
                  :current-step="3"
                  size="sm"
                />
              </div>
            </div>
          </div>
        </div>
      </BaseCard>
    </section>
    
    <!-- リスト -->
    <section class="space-y-6">
      <BaseCard>
        <div class="p-6">
          <h3 class="text-heading-4 font-semibold text-neutral-900 mb-4">リスト</h3>
          <p class="text-body-sm text-neutral-600 mb-6">
            汎用的なリスト表示コンポーネント。ネスト、アイコン、バッジに対応しています。
          </p>
          <div class="space-y-6">
            <div>
              <h4 class="text-body-regular font-medium mb-3">通常リスト</h4>
              <BaseList :items="listItems" />
            </div>
            
            <div>
              <h4 class="text-body-regular font-medium mb-3">順序付きリスト</h4>
              <BaseList :items="listItems.slice(0, 3)" :ordered="true" />
            </div>
            
            <div>
              <h4 class="text-body-regular font-medium mb-3">区切り線付きリスト</h4>
              <BaseList :items="listItems" variant="divided" spacing="relaxed" />
            </div>
            
            <div>
              <h4 class="text-body-regular font-medium mb-3">コンパクトリスト</h4>
              <BaseList :items="listItems" variant="minimal" spacing="compact" size="sm" />
            </div>
          </div>
        </div>
      </BaseCard>
    </section>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import BaseButton from '@/components/base/BaseButton.vue'
import BaseCard from '@/components/base/BaseCard.vue'
import BaseTable from '@/components/base/BaseTable.vue'
import BaseDropdown from '@/components/base/BaseDropdown.vue'
import BaseDatePicker from '@/components/base/BaseDatePicker.vue'
import BaseFileUpload from '@/components/base/BaseFileUpload.vue'
import BaseProgressIndicator from '@/components/base/BaseProgressIndicator.vue'
import BaseList from '@/components/base/BaseList.vue'
import { MenuItem } from '@headlessui/vue'

// サンプルデータ
const selectedDate = ref('')
const uploadedFile = ref(null)

const tableColumns = [
  { key: 'name', label: '名前' },
  { key: 'email', label: 'メール' },
  { key: 'role', label: '役割' },
  { key: 'status', label: 'ステータス' }
]

const tableItems = [
  { name: '山田太郎', email: 'taro@example.com', role: 'Admin', status: 'アクティブ' },
  { name: '鈴木花子', email: 'hanako@example.com', role: 'User', status: 'アクティブ' },
  { name: '田中次郎', email: 'jiro@example.com', role: 'Moderator', status: '保留中' },
  { name: '佐藤美咲', email: 'misaki@example.com', role: 'User', status: 'アクティブ' }
]

const dropdownItems = ['アクション1', 'アクション2', 'アクション3', '編集', '削除']

const progressSteps = [
  { label: '申請' },
  { label: '審査' },
  { label: '承認' },
  { label: '完了' }
]

const listItems = [
  { text: 'リストアイテム 1', description: '詳細説明がここに入ります' },
  { text: 'リストアイテム 2', url: '/item2', badge: { text: 'NEW', variant: 'primary' } },
  { 
    text: 'ネストされたリスト', 
    children: [
      { text: '子アイテム 1' },
      { text: '子アイテム 2', badge: { text: '更新', variant: 'info' } }
    ]
  },
  { text: 'アイコン付きアイテム', icon: 'check', meta: '完了' },
  { text: '外部リンクアイテム', url: 'https://example.com', external: true, icon: 'arrow' }
]

const onFileChange = (file) => {
  uploadedFile.value = file
}
</script>