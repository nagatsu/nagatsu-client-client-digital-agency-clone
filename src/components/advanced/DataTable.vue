<template>
  <div class="data-table bg-white rounded-lg border border-neutral-200 overflow-hidden">
    <!-- ヘッダー -->
    <div class="px-6 py-4 border-b border-neutral-200 bg-neutral-50">
      <div class="flex items-center justify-between">
        <div>
          <h3 class="text-heading-5 font-semibold text-neutral-900">
            {{ title || 'Data Table' }}
          </h3>
          <p class="text-body-sm text-neutral-600 mt-1">
            {{ description || 'Static mockup data table component' }}
          </p>
        </div>
        
        <!-- アクションボタン -->
        <div class="flex items-center gap-2">
          <button class="px-3 py-2 border border-neutral-300 rounded-md text-sm hover:bg-neutral-50">
            CSV出力
          </button>
          <button class="px-3 py-2 border border-neutral-300 rounded-md text-sm hover:bg-neutral-50">
            更新
          </button>
        </div>
      </div>
    </div>

    <!-- 検索・フィルタエリア -->
    <div class="px-6 py-4 border-b border-neutral-200 bg-neutral-25">
      <div class="flex flex-col md:flex-row gap-4">
        <!-- 検索 -->
        <div class="flex-1">
          <input
            type="text"
            placeholder="検索..."
            class="w-full px-3 py-2 border border-neutral-300 rounded-md focus:ring-2 focus:ring-primary-500"
          />
        </div>
        
        <!-- フィルタ -->
        <div class="flex gap-2">
          <select class="px-3 py-2 border border-neutral-300 rounded-md focus:ring-2 focus:ring-primary-500">
            <option>すべてのステータス</option>
            <option>アクティブ</option>
            <option>非アクティブ</option>
          </select>
          
          <select class="px-3 py-2 border border-neutral-300 rounded-md focus:ring-2 focus:ring-primary-500">
            <option>並び順</option>
            <option>名前順</option>
            <option>日付順</option>
          </select>
        </div>
      </div>
    </div>

    <!-- テーブル本体 -->
    <div class="overflow-x-auto">
      <table class="w-full">
        <thead class="bg-neutral-50">
          <tr>
            <th class="px-6 py-3 text-left text-xs font-medium text-neutral-500 uppercase tracking-wider">
              <input type="checkbox" class="rounded border-neutral-300">
            </th>
            <th class="px-6 py-3 text-left text-xs font-medium text-neutral-500 uppercase tracking-wider">
              Name
            </th>
            <th class="px-6 py-3 text-left text-xs font-medium text-neutral-500 uppercase tracking-wider">
              Status
            </th>
            <th class="px-6 py-3 text-left text-xs font-medium text-neutral-500 uppercase tracking-wider">
              Role
            </th>
            <th class="px-6 py-3 text-left text-xs font-medium text-neutral-500 uppercase tracking-wider">
              Last Login
            </th>
            <th class="px-6 py-3 text-left text-xs font-medium text-neutral-500 uppercase tracking-wider">
              Actions
            </th>
          </tr>
        </thead>
        <tbody class="bg-white divide-y divide-neutral-200">
          <tr class="hover:bg-neutral-50">
            <td class="px-6 py-4 whitespace-nowrap">
              <input type="checkbox" class="rounded border-neutral-300">
            </td>
            <td class="px-6 py-4 whitespace-nowrap">
              <div class="flex items-center">
                <div class="h-10 w-10 rounded-full bg-primary-100 flex items-center justify-center">
                  <span class="text-primary-600 font-medium">JD</span>
                </div>
                <div class="ml-4">
                  <div class="text-sm font-medium text-neutral-900">John Doe</div>
                  <div class="text-sm text-neutral-500">john@example.com</div>
                </div>
              </div>
            </td>
            <td class="px-6 py-4 whitespace-nowrap">
              <span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-success-100 text-success-800">
                Active
              </span>
            </td>
            <td class="px-6 py-4 whitespace-nowrap text-sm text-neutral-500">
              Admin
            </td>
            <td class="px-6 py-4 whitespace-nowrap text-sm text-neutral-500">
              2024-01-15 14:30
            </td>
            <td class="px-6 py-4 whitespace-nowrap text-sm font-medium">
              <button class="text-primary-600 hover:text-primary-900 mr-3">Edit</button>
              <button class="text-error-600 hover:text-error-900">Delete</button>
            </td>
          </tr>
          
          <tr class="hover:bg-neutral-50">
            <td class="px-6 py-4 whitespace-nowrap">
              <input type="checkbox" class="rounded border-neutral-300">
            </td>
            <td class="px-6 py-4 whitespace-nowrap">
              <div class="flex items-center">
                <div class="h-10 w-10 rounded-full bg-success-100 flex items-center justify-center">
                  <span class="text-success-600 font-medium">JS</span>
                </div>
                <div class="ml-4">
                  <div class="text-sm font-medium text-neutral-900">Jane Smith</div>
                  <div class="text-sm text-neutral-500">jane@example.com</div>
                </div>
              </div>
            </td>
            <td class="px-6 py-4 whitespace-nowrap">
              <span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-warning-100 text-warning-800">
                Pending
              </span>
            </td>
            <td class="px-6 py-4 whitespace-nowrap text-sm text-neutral-500">
              User
            </td>
            <td class="px-6 py-4 whitespace-nowrap text-sm text-neutral-500">
              2024-01-14 09:15
            </td>
            <td class="px-6 py-4 whitespace-nowrap text-sm font-medium">
              <button class="text-primary-600 hover:text-primary-900 mr-3">Edit</button>
              <button class="text-error-600 hover:text-error-900">Delete</button>
            </td>
          </tr>
          
          <tr class="hover:bg-neutral-50">
            <td class="px-6 py-4 whitespace-nowrap">
              <input type="checkbox" class="rounded border-neutral-300">
            </td>
            <td class="px-6 py-4 whitespace-nowrap">
              <div class="flex items-center">
                <div class="h-10 w-10 rounded-full bg-error-100 flex items-center justify-center">
                  <span class="text-error-600 font-medium">MB</span>
                </div>
                <div class="ml-4">
                  <div class="text-sm font-medium text-neutral-900">Mike Brown</div>
                  <div class="text-sm text-neutral-500">mike@example.com</div>
                </div>
              </div>
            </td>
            <td class="px-6 py-4 whitespace-nowrap">
              <span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-error-100 text-error-800">
                Inactive
              </span>
            </td>
            <td class="px-6 py-4 whitespace-nowrap text-sm text-neutral-500">
              User
            </td>
            <td class="px-6 py-4 whitespace-nowrap text-sm text-neutral-500">
              2024-01-10 16:45
            </td>
            <td class="px-6 py-4 whitespace-nowrap text-sm font-medium">
              <button class="text-primary-600 hover:text-primary-900 mr-3">Edit</button>
              <button class="text-error-600 hover:text-error-900">Delete</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <!-- ページネーション -->
    <div class="px-6 py-4 border-t border-neutral-200 bg-neutral-50">
      <div class="flex items-center justify-between">
        <div class="text-sm text-neutral-500">
          101件中 1-10件を表示
        </div>
        <div class="flex space-x-2">
          <button class="px-3 py-1 border border-neutral-300 rounded text-sm hover:bg-neutral-50 disabled:opacity-50" disabled>
            前へ
          </button>
          <button class="px-3 py-1 bg-primary-500 text-white rounded text-sm">1</button>
          <button class="px-3 py-1 border border-neutral-300 rounded text-sm hover:bg-neutral-50">2</button>
          <button class="px-3 py-1 border border-neutral-300 rounded text-sm hover:bg-neutral-50">3</button>
          <span class="px-3 py-1 text-sm text-neutral-500">...</span>
          <button class="px-3 py-1 border border-neutral-300 rounded text-sm hover:bg-neutral-50">10</button>
          <button class="px-3 py-1 border border-neutral-300 rounded text-sm hover:bg-neutral-50">
            次へ
          </button>
        </div>
      </div>
    </div>

    <!-- モックアップ表示であることを示すオーバーレイ -->
    <div class="absolute top-2 right-2">
      <span class="px-2 py-1 bg-neutral-200 text-neutral-600 text-xs rounded">Mock DataTable</span>
    </div>
  </div>
</template>

<script setup>
// 静的モックアップ用のシンプルなprops定義
const props = defineProps({
  title: {
    type: String,
    default: 'Data Table'
  },
  description: {
    type: String,
    default: 'Static mockup data table component'
  }
})

// モックアップテンプレート用：動的処理なし・静的表示のみ
</script>

<style scoped>
.data-table {
  @apply relative;
}
</style>