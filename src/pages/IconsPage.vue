<template>
  <div class="icons-page container mx-auto px-4 py-8">
    <!-- ページヘッダー -->
    <div class="mb-8">
      <h1 class="text-heading-2 font-bold text-neutral-900 mb-4">
        アイコンライブラリ
      </h1>
      <p class="text-body-lg text-neutral-600 max-w-2xl">
        Heroicons準拠のアイコンセット。OutlineとSolidの2つのスタイルで、{{ totalIcons }}個のアイコンが利用可能です。
      </p>
    </div>

    <!-- 検索・フィルターエリア -->
    <div class="mb-8 bg-white rounded-lg border border-neutral-200 p-6">
      <div class="grid grid-cols-1 md:grid-cols-4 gap-4">
        <!-- 検索 -->
        <div class="md:col-span-2">
          <label class="text-sm font-medium text-neutral-700 mb-2 block">
            アイコン検索
          </label>
          <BaseInput
            v-model="searchQuery"
            placeholder="アイコン名で検索..."
            size="md"
            class="w-full"
          >
            <template #prefix>
              <BaseIcon name="Search" size="sm" color="neutral" />
            </template>
          </BaseInput>
        </div>

        <!-- カテゴリフィルター -->
        <div>
          <label class="text-sm font-medium text-neutral-700 mb-2 block">
            カテゴリ
          </label>
          <BaseDropdown v-model="selectedCategory" size="md">
            <option value="">すべてのカテゴリ</option>
            <option v-for="category in categories" :key="category" :value="category">
              {{ category }}
            </option>
          </BaseDropdown>
        </div>

        <!-- スタイルフィルター -->
        <div>
          <label class="text-sm font-medium text-neutral-700 mb-2 block">
            スタイル
          </label>
          <BaseDropdown v-model="selectedStyle" size="md">
            <option value="">両方</option>
            <option value="outline">Outline</option>
            <option value="solid">Solid</option>
          </BaseDropdown>
        </div>
      </div>
    </div>

    <!-- 統計情報 -->
    <div class="mb-8 grid grid-cols-2 md:grid-cols-4 gap-4">
      <div class="bg-white rounded-lg border border-neutral-200 p-4 text-center">
        <div class="text-2xl font-bold text-primary-600">{{ filteredIcons.length }}</div>
        <div class="text-sm text-neutral-600">表示中</div>
      </div>
      <div class="bg-white rounded-lg border border-neutral-200 p-4 text-center">
        <div class="text-2xl font-bold text-neutral-900">{{ totalIcons }}</div>
        <div class="text-sm text-neutral-600">総数</div>
      </div>
      <div class="bg-white rounded-lg border border-neutral-200 p-4 text-center">
        <div class="text-2xl font-bold text-success-600">{{ categories.length }}</div>
        <div class="text-sm text-neutral-600">カテゴリ</div>
      </div>
      <div class="bg-white rounded-lg border border-neutral-200 p-4 text-center">
        <div class="text-2xl font-bold text-info-600">2</div>
        <div class="text-sm text-neutral-600">スタイル</div>
      </div>
    </div>

    <!-- アイコングリッド -->
    <div class="bg-white rounded-lg border border-neutral-200">
      <!-- スタイル切り替えタブ -->
      <div class="border-b border-neutral-200">
        <nav class="flex">
          <button
            :class="[
              'px-6 py-4 text-sm font-medium border-b-2 transition-colors',
              !showSolidOnly 
                ? 'border-primary-500 text-primary-600 bg-primary-50' 
                : 'border-transparent text-neutral-500 hover:text-neutral-700'
            ]"
            @click="showSolidOnly = false"
          >
            <BaseIcon name="Square2Stack" size="sm" class="mr-2" />
            Outline Icons
          </button>
          <button
            :class="[
              'px-6 py-4 text-sm font-medium border-b-2 transition-colors',
              showSolidOnly 
                ? 'border-primary-500 text-primary-600 bg-primary-50' 
                : 'border-transparent text-neutral-500 hover:text-neutral-700'
            ]"
            @click="showSolidOnly = true"
          >
            <BaseIcon name="Square2Stack" type="solid" size="sm" class="mr-2" />
            Solid Icons
          </button>
        </nav>
      </div>

      <!-- アイコン一覧 -->
      <div class="p-6">
        <div class="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 xl:grid-cols-10 gap-4">
          <div
            v-for="icon in displayedIcons"
            :key="`${icon.name}-${showSolidOnly ? 'solid' : 'outline'}`"
            class="flex flex-col items-center p-4 rounded-lg border border-neutral-200 hover:border-primary-300 hover:bg-primary-50 transition-colors cursor-pointer group"
            @click="copyIconCode(icon.name, showSolidOnly ? 'solid' : 'outline')"
          >
            <BaseIcon
              :name="icon.name"
              :type="showSolidOnly ? 'solid' : 'outline'"
              size="xl"
              color="neutral"
              class="mb-2 group-hover:text-primary-600 transition-colors"
            />
            <div class="text-xs text-center text-neutral-600 group-hover:text-primary-700 font-medium">
              {{ icon.displayName }}
            </div>
          </div>
        </div>

        <!-- アイコンが見つからない場合 -->
        <div v-if="displayedIcons.length === 0" class="text-center py-12">
          <BaseIcon name="MagnifyingGlass" size="2xl" color="neutral" class="mx-auto mb-4" />
          <h3 class="text-heading-5 font-medium text-neutral-900 mb-2">
            アイコンが見つかりません
          </h3>
          <p class="text-body-sm text-neutral-600">
            検索条件を変更してお試しください。
          </p>
        </div>
      </div>
    </div>

    <!-- 使用方法 -->
    <div class="mt-8 bg-neutral-50 rounded-lg p-6">
      <h3 class="text-heading-5 font-semibold text-neutral-900 mb-4">
        使用方法
      </h3>
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div>
          <h4 class="text-sm font-medium text-neutral-700 mb-2">基本的な使用</h4>
          <pre class="bg-white p-3 rounded border text-sm text-neutral-800 overflow-x-auto"><code>&lt;BaseIcon name="Home" size="md" color="primary" /&gt;</code></pre>
        </div>
        <div>
          <h4 class="text-sm font-medium text-neutral-700 mb-2">Solidタイプ</h4>
          <pre class="bg-white p-3 rounded border text-sm text-neutral-800 overflow-x-auto"><code>&lt;BaseIcon name="Heart" type="solid" color="error" /&gt;</code></pre>
        </div>
      </div>
      
      <div class="mt-4 p-3 bg-blue-50 border border-blue-200 rounded">
        <p class="text-sm text-blue-800">
          <BaseIcon name="InformationCircle" size="sm" color="info" class="mr-1" />
          アイコンをクリックするとコードがクリップボードにコピーされます。
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, watch } from 'vue'
import BaseIcon from '@/components/base/BaseIcon.vue'
import BaseInput from '@/components/base/BaseInput.vue'
import BaseDropdown from '@/components/base/BaseDropdown.vue'

// リアクティブデータ
const searchQuery = ref('')
const selectedCategory = ref('')
const selectedStyle = ref('')
const showSolidOnly = ref(false)

// アイコンデータ
const iconData = [
  // ナビゲーション
  { name: 'Home', category: 'ナビゲーション', displayName: 'Home' },
  { name: 'ChevronLeft', category: 'ナビゲーション', displayName: 'Chevron Left' },
  { name: 'ChevronRight', category: 'ナビゲーション', displayName: 'Chevron Right' },
  { name: 'ChevronUp', category: 'ナビゲーション', displayName: 'Chevron Up' },
  { name: 'ChevronDown', category: 'ナビゲーション', displayName: 'Chevron Down' },
  { name: 'ArrowLeft', category: 'ナビゲーション', displayName: 'Arrow Left' },
  { name: 'ArrowRight', category: 'ナビゲーション', displayName: 'Arrow Right' },
  { name: 'ArrowUp', category: 'ナビゲーション', displayName: 'Arrow Up' },
  { name: 'ArrowDown', category: 'ナビゲーション', displayName: 'Arrow Down' },
  
  // ユーザー・アカウント
  { name: 'User', category: 'ユーザー', displayName: 'User' },
  { name: 'UserGroup', category: 'ユーザー', displayName: 'User Group' },
  { name: 'UserCircle', category: 'ユーザー', displayName: 'User Circle' },
  { name: 'UserPlus', category: 'ユーザー', displayName: 'User Plus' },
  { name: 'UserMinus', category: 'ユーザー', displayName: 'User Minus' },
  
  // アクション
  { name: 'Plus', category: 'アクション', displayName: 'Plus' },
  { name: 'Minus', category: 'アクション', displayName: 'Minus' },
  { name: 'X', category: 'アクション', displayName: 'Close' },
  { name: 'Check', category: 'アクション', displayName: 'Check' },
  { name: 'Pencil', category: 'アクション', displayName: 'Edit' },
  { name: 'Trash', category: 'アクション', displayName: 'Delete' },
  { name: 'Duplicate', category: 'アクション', displayName: 'Copy' },
  { name: 'Share', category: 'アクション', displayName: 'Share' },
  
  // 検索・フィルター
  { name: 'Search', category: '検索', displayName: 'Search' },
  { name: 'MagnifyingGlass', category: '検索', displayName: 'Magnifying Glass' },
  { name: 'FunnelIcon', category: '検索', displayName: 'Filter' },
  { name: 'AdjustmentsHorizontal', category: '検索', displayName: 'Adjustments' },
  
  // 通知・コミュニケーション
  { name: 'Bell', category: '通知', displayName: 'Bell' },
  { name: 'BellAlert', category: '通知', displayName: 'Bell Alert' },
  { name: 'BellSlash', category: '通知', displayName: 'Bell Slash' },
  { name: 'Mail', category: '通知', displayName: 'Mail' },
  { name: 'ChatBubbleLeft', category: '通知', displayName: 'Chat' },
  { name: 'Phone', category: '通知', displayName: 'Phone' },
  
  // ステータス
  { name: 'CheckCircle', category: 'ステータス', displayName: 'Success' },
  { name: 'XCircle', category: 'ステータス', displayName: 'Error' },
  { name: 'ExclamationTriangle', category: 'ステータス', displayName: 'Warning' },
  { name: 'InformationCircle', category: 'ステータス', displayName: 'Info' },
  { name: 'QuestionMarkCircle', category: 'ステータス', displayName: 'Question' },
  
  // ファイル・メディア
  { name: 'Document', category: 'ファイル', displayName: 'Document' },
  { name: 'DocumentText', category: 'ファイル', displayName: 'Document Text' },
  { name: 'Folder', category: 'ファイル', displayName: 'Folder' },
  { name: 'FolderOpen', category: 'ファイル', displayName: 'Folder Open' },
  { name: 'Photo', category: 'ファイル', displayName: 'Photo' },
  { name: 'Film', category: 'ファイル', displayName: 'Video' },
  { name: 'MusicalNote', category: 'ファイル', displayName: 'Audio' },
  
  // 時間・日付
  { name: 'Calendar', category: '時間', displayName: 'Calendar' },
  { name: 'CalendarDays', category: '時間', displayName: 'Calendar Days' },
  { name: 'Clock', category: '時間', displayName: 'Clock' },
  
  // 設定・ツール
  { name: 'Cog6Tooth', category: '設定', displayName: 'Settings' },
  { name: 'Wrench', category: '設定', displayName: 'Tools' },
  { name: 'WrenchScrewdriver', category: '設定', displayName: 'Wrench Screwdriver' },
  
  // セキュリティ
  { name: 'Lock', category: 'セキュリティ', displayName: 'Lock' },
  { name: 'LockOpen', category: 'セキュリティ', displayName: 'Unlock' },
  { name: 'Key', category: 'セキュリティ', displayName: 'Key' },
  { name: 'Shield', category: 'セキュリティ', displayName: 'Shield' },
  { name: 'Eye', category: 'セキュリティ', displayName: 'Show' },
  { name: 'EyeSlash', category: 'セキュリティ', displayName: 'Hide' },
  
  // エンターテイメント
  { name: 'Heart', category: 'エンターテイメント', displayName: 'Heart' },
  { name: 'Star', category: 'エンターテイメント', displayName: 'Star' },
  { name: 'Fire', category: 'エンターテイメント', displayName: 'Fire' },
  { name: 'HandThumbUp', category: 'エンターテイメント', displayName: 'Like' },
  { name: 'HandThumbDown', category: 'エンターテイメント', displayName: 'Dislike' },
  
  // データ・分析
  { name: 'ChartBar', category: 'データ', displayName: 'Bar Chart' },
  { name: 'ChartPie', category: 'データ', displayName: 'Pie Chart' },
  { name: 'PresentationChartLine', category: 'データ', displayName: 'Line Chart' },
  { name: 'Calculator', category: 'データ', displayName: 'Calculator' },
  
  // レイアウト
  { name: 'Square2Stack', category: 'レイアウト', displayName: 'Layers' },
  { name: 'Squares2X2', category: 'レイアウト', displayName: 'Grid' },
  { name: 'QueueList', category: 'レイアウト', displayName: 'List' },
  { name: 'Bars3', category: 'レイアウト', displayName: 'Menu' },
  { name: 'Bars4', category: 'レイアウト', displayName: 'Menu 4' },
  
  // 接続・共有
  { name: 'Link', category: '共有', displayName: 'Link' },
  { name: 'Upload', category: '共有', displayName: 'Upload' },
  { name: 'Download', category: '共有', displayName: 'Download' },
  { name: 'CloudArrowUp', category: '共有', displayName: 'Cloud Upload' },
  { name: 'CloudArrowDown', category: '共有', displayName: 'Cloud Download' }
]

// 計算されたプロパティ
const categories = computed(() => {
  const cats = [...new Set(iconData.map(icon => icon.category))]
  return cats.sort()
})

const totalIcons = computed(() => iconData.length)

const filteredIcons = computed(() => {
  let filtered = iconData

  // 検索フィルター
  if (searchQuery.value) {
    const query = searchQuery.value.toLowerCase()
    filtered = filtered.filter(icon => 
      icon.name.toLowerCase().includes(query) ||
      icon.displayName.toLowerCase().includes(query) ||
      icon.category.toLowerCase().includes(query)
    )
  }

  // カテゴリフィルター
  if (selectedCategory.value) {
    filtered = filtered.filter(icon => icon.category === selectedCategory.value)
  }

  return filtered
})

const displayedIcons = computed(() => {
  if (selectedStyle.value === 'outline' && showSolidOnly.value) {
    return []
  }
  if (selectedStyle.value === 'solid' && !showSolidOnly.value) {
    return []
  }
  return filteredIcons.value
})

// メソッド
const copyIconCode = (iconName, type = 'outline') => {
  const code = `<BaseIcon name="${iconName}" type="${type}" size="md" color="current" />`
  
  if (navigator.clipboard && window.isSecureContext) {
    navigator.clipboard.writeText(code).then(() => {
      // TODO: トースト通知を表示
      console.log(`コピーしました: ${code}`)
    })
  } else {
    // フォールバック
    const textArea = document.createElement('textarea')
    textArea.value = code
    document.body.appendChild(textArea)
    textArea.select()
    document.execCommand('copy')
    document.body.removeChild(textArea)
    console.log(`コピーしました: ${code}`)
  }
}

// ウォッチャー
watch(selectedStyle, (newStyle) => {
  if (newStyle === 'solid') {
    showSolidOnly.value = true
  } else if (newStyle === 'outline') {
    showSolidOnly.value = false
  }
})

watch(showSolidOnly, (newValue) => {
  if (newValue) {
    selectedStyle.value = 'solid'
  } else {
    selectedStyle.value = 'outline'
  }
})
</script>

<style scoped>
.icons-page {
  min-height: calc(100vh - 200px);
}

/* コードブロックのスタイル */
pre code {
  font-family: 'SF Mono', Monaco, 'Cascadia Code', 'Roboto Mono', Consolas, 'Courier New', monospace;
}

/* レスポンシブ調整 */
@media (max-width: 768px) {
  .grid-cols-8 {
    grid-template-columns: repeat(4, minmax(0, 1fr));
  }
  
  .grid-cols-10 {
    grid-template-columns: repeat(5, minmax(0, 1fr));
  }
}
</style>