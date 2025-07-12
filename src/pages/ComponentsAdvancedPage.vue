<template>
  <div class="components-advanced-page container mx-auto px-4 py-8">
    <!-- ページヘッダー -->
    <div class="mb-8">
      <h1 class="text-heading-2 font-bold text-neutral-900 mb-4">
        高度なコンポーネント
      </h1>
      <p class="text-body-lg text-neutral-600">
        データ表示・フォーム構築・チャート可視化など、高度な機能を持つコンポーネントの一覧です。
      </p>
    </div>

    <!-- ナビゲーションタブ -->
    <div class="mb-8">
      <nav class="flex space-x-8 border-b border-neutral-200">
        <button
          v-for="tab in tabs"
          :key="tab.id"
          :class="[
            'py-2 px-1 border-b-2 font-medium text-sm transition-colors',
            activeTab === tab.id
              ? 'border-primary-500 text-primary-600'
              : 'border-transparent text-neutral-500 hover:text-neutral-700 hover:border-neutral-300'
          ]"
          @click="activeTab = tab.id"
        >
          {{ tab.label }}
        </button>
      </nav>
    </div>

    <!-- DataTable セクション -->
    <section v-if="activeTab === 'datatable'" class="space-y-8">
      <div class="bg-white rounded-lg border border-neutral-200 p-6">
        <h2 class="text-heading-4 font-semibold text-neutral-900 mb-4">
          DataTable - データテーブル
        </h2>
        <p class="text-body-sm text-neutral-600 mb-6">
          ソート、フィルタ、ページネーション、CSV出力機能を備えた高機能なデータテーブル
        </p>
        
        <!-- 基本的なDataTable -->
        <div class="mb-8">
          <h3 class="text-heading-5 font-medium text-neutral-900 mb-4">基本例</h3>
          <DataTable
            :data="sampleUsers"
            :columns="userColumns"
            title="ユーザー一覧"
            description="登録ユーザーの管理画面"
            :selectable="true"
            :exportable="true"
            :refreshable="true"
            :actions="userActions"
            :bulk-actions="bulkActions"
            @edit="handleEdit"
            @delete="handleDelete"
            @bulk-delete="handleBulkDelete"
            @refresh="loadUsers"
          />
        </div>
      </div>
    </section>

    <!-- FormBuilder セクション -->
    <section v-if="activeTab === 'formbuilder'" class="space-y-8">
      <div class="bg-white rounded-lg border border-neutral-200 p-6">
        <h2 class="text-heading-4 font-semibold text-neutral-900 mb-4">
          FormBuilder - フォームビルダー
        </h2>
        <p class="text-body-sm text-neutral-600 mb-6">
          動的なフォーム生成とバリデーション機能を提供する高機能フォームコンポーネント
        </p>
        
        <!-- 基本的なFormBuilder -->
        <div class="mb-8">
          <h3 class="text-heading-5 font-medium text-neutral-900 mb-4">基本例</h3>
          <FormBuilder
            :schema="contactFormSchema"
            :initial-data="formData"
            title="お問い合わせフォーム"
            description="ご質問やお問い合わせをお受けしています"
            :configurable="true"
            :show-progress="true"
            :show-preview="true"
            submit-text="送信する"
            @submit="handleFormSubmit"
            @change="handleFormChange"
          />
        </div>
      </div>
    </section>

    <!-- ChartComponent セクション -->
    <section v-if="activeTab === 'charts'" class="space-y-8">
      <div class="bg-white rounded-lg border border-neutral-200 p-6">
        <h2 class="text-heading-4 font-semibold text-neutral-900 mb-4">
          ChartComponent - データ可視化
        </h2>
        <p class="text-body-sm text-neutral-600 mb-6">
          Chart.jsを使用した様々なタイプのチャートコンポーネント
        </p>
        
        <!-- 複数チャートの例 -->
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <!-- 線グラフ -->
          <div>
            <h3 class="text-heading-5 font-medium text-neutral-900 mb-4">線グラフ</h3>
            <ChartComponent
              type="line"
              :data="lineChartData"
              title="月別売上推移"
              description="2024年の月別売上データ"
              :height="300"
            />
          </div>
          
          <!-- 棒グラフ -->
          <div>
            <h3 class="text-heading-5 font-medium text-neutral-900 mb-4">棒グラフ</h3>
            <ChartComponent
              type="bar"
              :data="barChartData"
              title="商品カテゴリ別売上"
              description="主要商品カテゴリの売上比較"
              :height="300"
            />
          </div>
          
          <!-- 円グラフ -->
          <div>
            <h3 class="text-heading-5 font-medium text-neutral-900 mb-4">円グラフ</h3>
            <ChartComponent
              type="pie"
              :data="pieChartData"
              title="トラフィック参照元"
              description="Webサイトへの流入元の内訳"
              :height="300"
            />
          </div>
          
          <!-- ドーナツグラフ -->
          <div>
            <h3 class="text-heading-5 font-medium text-neutral-900 mb-4">ドーナツグラフ</h3>
            <ChartComponent
              type="doughnut"
              :data="doughnutChartData"
              title="デバイス別アクセス"
              description="利用デバイスの分布"
              :height="300"
            />
          </div>
        </div>
      </div>
    </section>

    <!-- 統合例セクション -->
    <section v-if="activeTab === 'integration'" class="space-y-8">
      <div class="bg-white rounded-lg border border-neutral-200 p-6">
        <h2 class="text-heading-4 font-semibold text-neutral-900 mb-4">
          統合例 - ダッシュボード
        </h2>
        <p class="text-body-sm text-neutral-600 mb-6">
          複数のコンポーネントを組み合わせたダッシュボードの例
        </p>
        
        <!-- KPI カード -->
        <div class="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          <div
            v-for="kpi in kpiData"
            :key="kpi.label"
            class="bg-gradient-to-r from-primary-500 to-primary-600 text-white p-6 rounded-lg"
          >
            <div class="text-sm opacity-90">{{ kpi.label }}</div>
            <div class="text-2xl font-bold mt-1">{{ kpi.value }}</div>
            <div class="text-sm opacity-90 mt-1">{{ kpi.change }}</div>
          </div>
        </div>

        <!-- チャートとテーブルの組み合わせ -->
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <!-- 売上チャート -->
          <div class="lg:col-span-2">
            <ChartComponent
              type="line"
              :data="salesTrendData"
              title="売上トレンド"
              description="過去12ヶ月の売上推移"
              :height="350"
            />
          </div>
          
          <!-- トップ商品テーブル -->
          <div>
            <DataTable
              :data="topProducts"
              :columns="productColumns"
              title="売上トップ商品"
              :show-header="true"
              :page-size="5"
              :searchable="false"
            />
          </div>
        </div>
      </div>
    </section>

    <!-- 動作テストボタン -->
    <div class="mt-8 p-6 bg-neutral-50 rounded-lg">
      <h3 class="text-heading-5 font-medium text-neutral-900 mb-4">
        動作テスト
      </h3>
      <div class="flex flex-wrap gap-3">
        <BaseButton @click="loadRandomData">
          ランダムデータ生成
        </BaseButton>
        <BaseButton variant="outline" @click="showNotification">
          通知テスト
        </BaseButton>
        <BaseButton variant="outline" @click="validateAllForms">
          フォーム検証
        </BaseButton>
        <BaseButton variant="outline" @click="exportAllData">
          全データ出力
        </BaseButton>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive, computed } from 'vue'
import DataTable from '@/components/advanced/DataTable.vue'
import FormBuilder from '@/components/advanced/FormBuilder.vue'
import ChartComponent from '@/components/advanced/ChartComponent.vue'
import BaseButton from '@/components/base/BaseButton.vue'

// リアクティブデータ
const activeTab = ref('datatable')
const formData = reactive({})

// タブ設定
const tabs = [
  { id: 'datatable', label: 'DataTable' },
  { id: 'formbuilder', label: 'FormBuilder' },
  { id: 'charts', label: 'Charts' },
  { id: 'integration', label: '統合例' }
]

// DataTable用のサンプルデータ
const sampleUsers = ref([
  {
    id: 1,
    name: '田中太郎',
    email: 'tanaka@example.com',
    department: '開発部',
    role: 'エンジニア',
    status: 'アクティブ',
    lastLogin: '2024-01-15',
    projects: 5
  },
  {
    id: 2,
    name: '佐藤花子',
    email: 'sato@example.com',
    department: 'デザイン部',
    role: 'デザイナー',
    status: 'アクティブ',
    lastLogin: '2024-01-14',
    projects: 3
  },
  {
    id: 3,
    name: '鈴木一郎',
    email: 'suzuki@example.com',
    department: '営業部',
    role: 'マネージャー',
    status: '非アクティブ',
    lastLogin: '2024-01-10',
    projects: 8
  },
  {
    id: 4,
    name: '高橋美咲',
    email: 'takahashi@example.com',
    department: '開発部',
    role: 'テックリード',
    status: 'アクティブ',
    lastLogin: '2024-01-15',
    projects: 12
  },
  {
    id: 5,
    name: '伊藤健太',
    email: 'ito@example.com',
    department: 'マーケティング',
    role: 'アナリスト',
    status: 'アクティブ',
    lastLogin: '2024-01-13',
    projects: 6
  }
])

const userColumns = [
  { key: 'id', label: 'ID', sortable: true },
  { key: 'name', label: '氏名', sortable: true },
  { key: 'email', label: 'メールアドレス', sortable: true },
  { key: 'department', label: '部署', sortable: true, filterable: true },
  { key: 'role', label: '役職', sortable: true, filterable: true },
  { key: 'status', label: 'ステータス', sortable: true, filterable: true },
  { key: 'lastLogin', label: '最終ログイン', sortable: true },
  { key: 'projects', label: 'プロジェクト数', sortable: true }
]

const userActions = [
  { key: 'edit', label: '編集', event: 'edit', variant: 'outline' },
  { key: 'delete', label: '削除', event: 'delete', variant: 'outline' }
]

const bulkActions = [
  { key: 'bulk-delete', label: '一括削除', event: 'bulk-delete', variant: 'outline' }
]

// FormBuilder用のスキーマ
const contactFormSchema = [
  {
    name: 'name',
    type: 'text',
    label: 'お名前',
    placeholder: '山田太郎',
    required: true,
    validation: [
      { type: 'minLength', value: 2, message: '2文字以上で入力してください' }
    ]
  },
  {
    name: 'email',
    type: 'email',
    label: 'メールアドレス',
    placeholder: 'example@domain.com',
    required: true,
    validation: [
      { type: 'email', message: '有効なメールアドレスを入力してください' }
    ]
  },
  {
    name: 'phone',
    type: 'tel',
    label: '電話番号',
    placeholder: '090-1234-5678',
    help: 'ハイフン付きで入力してください'
  },
  {
    name: 'category',
    type: 'select',
    label: 'お問い合わせカテゴリ',
    required: true,
    options: [
      { value: 'general', label: '一般的なお問い合わせ' },
      { value: 'technical', label: '技術的なサポート' },
      { value: 'billing', label: '料金について' },
      { value: 'feature', label: '機能のご要望' }
    ]
  },
  {
    name: 'priority',
    type: 'radio',
    label: '優先度',
    required: true,
    options: [
      { value: 'low', label: '低' },
      { value: 'medium', label: '中' },
      { value: 'high', label: '高' }
    ]
  },
  {
    name: 'message',
    type: 'textarea',
    label: 'お問い合わせ内容',
    placeholder: 'こちらにお問い合わせ内容をご記入ください...',
    required: true,
    rows: 5,
    validation: [
      { type: 'minLength', value: 10, message: '10文字以上で入力してください' }
    ]
  },
  {
    name: 'newsletter',
    type: 'checkbox',
    label: 'ニュースレター購読',
    checkboxLabel: 'ニュースレターの配信を希望する'
  }
]

// チャート用のサンプルデータ
const lineChartData = {
  labels: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
  datasets: [
    {
      label: '売上',
      data: [65, 59, 80, 81, 56, 55, 40, 65, 75, 85, 90, 100],
      borderColor: '#3B82F6',
      backgroundColor: 'rgba(59, 130, 246, 0.1)',
      tension: 0.4
    },
    {
      label: '利益',
      data: [28, 48, 40, 19, 86, 27, 90, 45, 55, 65, 70, 80],
      borderColor: '#10B981',
      backgroundColor: 'rgba(16, 185, 129, 0.1)',
      tension: 0.4
    }
  ]
}

const barChartData = {
  labels: ['電子機器', '書籍', '衣料品', '家具', '食品', 'スポーツ'],
  datasets: [
    {
      label: '売上（万円）',
      data: [300, 150, 200, 120, 180, 90],
      backgroundColor: [
        '#3B82F6',
        '#10B981',
        '#F59E0B',
        '#EF4444',
        '#8B5CF6',
        '#06B6D4'
      ]
    }
  ]
}

const pieChartData = {
  labels: ['Google検索', 'SNS', '直接アクセス', '参照サイト', '広告'],
  datasets: [
    {
      data: [35, 25, 20, 15, 5],
      backgroundColor: [
        '#3B82F6',
        '#10B981',
        '#F59E0B',
        '#EF4444',
        '#8B5CF6'
      ]
    }
  ]
}

const doughnutChartData = {
  labels: ['デスクトップ', 'モバイル', 'タブレット'],
  datasets: [
    {
      data: [45, 40, 15],
      backgroundColor: [
        '#3B82F6',
        '#10B981',
        '#F59E0B'
      ]
    }
  ]
}

// 統合例用データ
const kpiData = [
  { label: '月間売上', value: '¥1,234,567', change: '+12.3%' },
  { label: '新規顧客', value: '1,234', change: '+5.7%' },
  { label: 'コンバージョン率', value: '3.45%', change: '+0.8%' },
  { label: '顧客満足度', value: '4.8/5.0', change: '+0.2%' }
]

const salesTrendData = {
  labels: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
  datasets: [
    {
      label: '売上',
      data: [120, 135, 150, 140, 160, 155, 170, 165, 180, 175, 190, 200],
      borderColor: '#3B82F6',
      backgroundColor: 'rgba(59, 130, 246, 0.1)',
      tension: 0.4
    }
  ]
}

const topProducts = [
  { id: 1, name: 'ワイヤレスイヤホン', sales: '¥890,000', growth: '+15%' },
  { id: 2, name: 'スマートウォッチ', sales: '¥750,000', growth: '+8%' },
  { id: 3, name: 'ノートPC', sales: '¥650,000', growth: '+12%' },
  { id: 4, name: 'タブレット', sales: '¥580,000', growth: '+5%' },
  { id: 5, name: 'スマートフォン', sales: '¥520,000', growth: '+18%' }
]

const productColumns = [
  { key: 'name', label: '商品名' },
  { key: 'sales', label: '売上' },
  { key: 'growth', label: '成長率' }
]

// イベントハンドラ
const handleEdit = (user) => {
  console.log('編集:', user)
  // 編集モーダルを開くなどの処理
}

const handleDelete = (user) => {
  console.log('削除:', user)
  // 削除確認ダイアログを表示するなどの処理
}

const handleBulkDelete = (users) => {
  console.log('一括削除:', users)
  // 一括削除確認ダイアログを表示するなどの処理
}

const loadUsers = () => {
  console.log('ユーザーデータを再読み込み')
  // API呼び出しなどの処理
}

const handleFormSubmit = (data) => {
  console.log('フォーム送信:', data)
  // フォームデータの送信処理
}

const handleFormChange = (data) => {
  console.log('フォーム変更:', data)
  // フォームデータの変更をリアルタイムで処理
}

// テスト関数
const loadRandomData = () => {
  console.log('ランダムデータを生成しました')
  // ランダムデータ生成処理
}

const showNotification = () => {
  console.log('通知を表示します')
  // 通知表示処理
}

const validateAllForms = () => {
  console.log('全フォームのバリデーションを実行します')
  // フォームバリデーション処理
}

const exportAllData = () => {
  console.log('全データをエクスポートします')
  // データエクスポート処理
}
</script>

<style scoped>
.components-advanced-page {
  min-height: calc(100vh - 200px);
}

/* タブのアニメーション */
.tab-content {
  @apply transition-opacity duration-200;
}

/* レスポンシブ調整 */
@media (max-width: 768px) {
  .grid-cols-4 {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
  
  .lg\:col-span-2 {
    grid-column: span 1;
  }
  
  .lg\:col-span-3 {
    grid-column: span 1;
  }
}
</style>