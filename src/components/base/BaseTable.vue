<template>
  <!-- JDS準拠時のテーブル説明 -->
  <div 
    v-if="jdsCompliant && tableDescription"
    :id="`${tableId}-description`"
    class="mb-jds-sm text-sm text-gray-700"
  >
    {{ tableDescription }}
  </div>
  
  <div :class="wrapperClasses">
    <!-- JDS準拠時のテーブルキャプション -->
    <caption 
      v-if="jdsCompliant && tableCaption"
      :id="`${tableId}-caption`"
      class="jds-table-caption sr-only"
    >
      {{ tableCaption }}
    </caption>
    
    <table 
      :class="tableClasses"
      :aria-describedby="jdsCompliant ? getAriaDescribedBy() : null"
      :role="jdsCompliant ? 'table' : null"
    >
      <thead :class="headerClasses">
        <tr>
          <th
            v-for="column in columns"
            :key="column.key"
            scope="col"
            :class="getColumnClasses(column)"
            :aria-sort="getSortDirection(column)"
            :aria-label="jdsCompliant ? getColumnAriaLabel(column) : null"
            :tabindex="jdsCompliant && sortable && column.sortable !== false ? '0' : null"
            @click="toggleSort(column)"
            @keydown="handleColumnKeydown($event, column)"
          >
            <div class="flex items-center space-x-2">
              <span>{{ column.label }}</span>
              <div v-if="sortable && column.sortable !== false" class="flex flex-col">
                <svg 
                  :class="[getSortIconClasses(column, 'asc')]"
                  class="w-3 h-3 -mb-1" 
                  fill="currentColor" 
                  viewBox="0 0 20 20"
                  aria-hidden="true"
                >
                  <path d="M5 8l5-5 5 5H5z" />
                </svg>
                <svg 
                  :class="[getSortIconClasses(column, 'desc')]"
                  class="w-3 h-3" 
                  fill="currentColor" 
                  viewBox="0 0 20 20"
                  aria-hidden="true"
                >
                  <path d="M15 12l-5 5-5-5h10z" />
                </svg>
              </div>
            </div>
          </th>
        </tr>
      </thead>
      <tbody :class="bodyClasses">
        <tr 
          v-for="(item, index) in sortedItems" 
          :key="getRowKey(item, index)"
          :class="getRowClasses(item, index)"
          :aria-rowindex="jdsCompliant ? index + 2 : null"
          @click="handleRowClick(item, index)"
        >
          <td 
            v-for="column in columns" 
            :key="column.key" 
            :class="getCellClasses(column, item)"
            :aria-label="jdsCompliant ? getCellAriaLabel(column, item) : null"
            @click="handleCellClick(item, column, item[column.key])"
          >
            <slot :name="`cell-${column.key}`" :item="item" :value="item[column.key]" :column="column">
              <span :class="getCellContentClasses(column)">
                {{ formatCellValue(item[column.key], column) }}
              </span>
            </slot>
          </td>
        </tr>
        <tr v-if="sortedItems.length === 0" :class="emptyRowClasses">
          <td :colspan="columns.length" class="text-center py-12">
            <slot name="empty">
              <div class="text-gray-500 dark:text-gray-400">
                <svg class="mx-auto h-12 w-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                <p class="mt-2 text-sm font-medium text-gray-900 dark:text-gray-100">{{ emptyMessage }}</p>
              </div>
            </slot>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'

interface Column {
  key: string
  label: string
  sortable?: boolean
  align?: 'left' | 'center' | 'right'
  width?: string
  format?: (value: any) => string
  type?: 'text' | 'number' | 'date' | 'currency' | 'badge'
}

interface Props {
  columns: Column[]
  items: any[]
  sortable?: boolean
  striped?: boolean
  bordered?: boolean
  hover?: boolean
  dense?: boolean
  loading?: boolean
  emptyMessage?: string
  variant?: 'default' | 'minimal' | 'bordered' | 'jds-default' | 'jds-bordered' | 'jds-minimal'  // JDS準拠バリアント追加
  size?: 'xs' | 'sm' | 'md' | 'lg'
  stickyHeader?: boolean
  maxHeight?: string
  rowKey?: string
  // JDS準拠プロップス
  jdsCompliant?: boolean  // JDS準拠モード（アクセシビリティ・政府基準準拠）
  tableCaption?: string   // JDS準拠時のテーブルキャプション
  tableDescription?: string // JDS準拠時のテーブル説明
  tableSummary?: string   // JDS準拠時のテーブル概要
  showRowNumbers?: boolean // JDS準拠時の行番号表示
}

const props = withDefaults(defineProps<Props>(), {
  columns: () => [],
  items: () => [],
  sortable: false,
  striped: false,
  bordered: false,
  hover: true,
  dense: false,
  loading: false,
  emptyMessage: 'データがありません',
  variant: 'default',
  size: 'md',
  stickyHeader: false,
  maxHeight: 'auto',
  rowKey: 'id',
  // JDS準拠デフォルト値
  jdsCompliant: false,
  tableCaption: null,
  tableDescription: null,
  tableSummary: null,
  showRowNumbers: false
})

const emit = defineEmits<{
  'sort-change': [{ key: string; direction: 'asc' | 'desc' }]
  'row-click': [item: any, index: number]
  'cell-click': [item: any, column: Column, value: any]
}>()

const sortKey = ref('')
const sortAsc = ref(true)

// JDS準拠ID管理
import { generateId } from '@/utils/helpers'
const tableId = ref(generateId('table'))

// Computed properties
const sortedItems = computed(() => {
  if (!props.sortable || !sortKey.value) return props.items
  
  const column = props.columns.find(col => col.key === sortKey.value)
  if (!column || column.sortable === false) return props.items
  
  return [...props.items].sort((a, b) => {
    let aVal = a[sortKey.value]
    let bVal = b[sortKey.value]
    
    // Handle null/undefined values
    if (aVal == null && bVal == null) return 0
    if (aVal == null) return 1
    if (bVal == null) return -1
    
    // Type-specific comparison
    if (column.type === 'number') {
      aVal = Number(aVal)
      bVal = Number(bVal)
    } else if (column.type === 'date') {
      aVal = new Date(aVal).getTime()
      bVal = new Date(bVal).getTime()
    } else {
      aVal = String(aVal).toLowerCase()
      bVal = String(bVal).toLowerCase()
    }
    
    if (aVal < bVal) return sortAsc.value ? -1 : 1
    if (aVal > bVal) return sortAsc.value ? 1 : -1
    return 0
  })
})

const wrapperClasses = computed(() => {
  const classes = ['overflow-hidden']
  
  if (props.jdsCompliant || props.variant.startsWith('jds-')) {
    classes.push('jds-table-wrapper')
    
    // JDS準拠バリアント
    if (props.variant === 'jds-bordered') {
      classes.push('border-2', 'border-gray-300', 'rounded-md', 'shadow-sm')
    } else if (props.variant === 'jds-minimal') {
      classes.push('border-0')
    } else {
      // jds-default
      classes.push('border', 'border-gray-200', 'rounded-md')
    }
  } else {
    if (props.variant === 'bordered') {
      classes.push('border border-gray-200 dark:border-gray-700 rounded-lg')
    }
  }
  
  if (props.maxHeight !== 'auto') {
    classes.push('overflow-y-auto')
  }
  
  return classes
})

const tableClasses = computed(() => {
  const classes = []
  
  if (props.jdsCompliant || props.variant.startsWith('jds-')) {
    classes.push(
      'jds-table',
      'min-w-full', 'table-auto',
      'font-jds', 'text-base', 'leading-6'  // JDS準拠タイポグラフィ
    )
    
    // JDS準拠区切り線
    classes.push('divide-y', 'divide-gray-300')
  } else {
    classes.push('min-w-full divide-y divide-gray-200 dark:divide-gray-700')
  }
  
  if (props.stickyHeader) {
    classes.push('relative')
  }
  
  return classes
})

const headerClasses = computed(() => {
  const classes = []
  
  if (props.jdsCompliant || props.variant.startsWith('jds-')) {
    classes.push('jds-table-header', 'bg-gray-100')  // JDS推奨ヘッダー背景
  } else {
    classes.push('bg-gray-50 dark:bg-gray-800')
  }
  
  if (props.stickyHeader) {
    classes.push('sticky top-0 z-10')
  }
  
  return classes
})

const bodyClasses = computed(() => {
  const classes = []
  
  if (props.jdsCompliant || props.variant.startsWith('jds-')) {
    classes.push('jds-table-body', 'bg-white')  // JDS推奨背景
    classes.push('divide-y', 'divide-gray-200')  // JDS準拠区切り線
  } else {
    classes.push('bg-white dark:bg-gray-900')
    classes.push('divide-y divide-gray-200 dark:divide-gray-700')
  }
  
  return classes
})

const emptyRowClasses = computed(() => {
  return ['bg-white dark:bg-gray-900']
})

// Methods
const getColumnClasses = (column: Column) => {
  const classes = []
  
  if (props.jdsCompliant || props.variant.startsWith('jds-')) {
    // JDS準拠ヘッダースタイル
    classes.push(
      'jds-table-header-cell',
      'text-left', 'font-medium', 'text-jds-text',
      'border-b-2', 'border-gray-300'  // JDS推奨ボーダー
    )
    
    // JDS 8pxグリッドサイズ
    const jdsSizes = {
      xs: 'px-jds-sm py-jds-xs text-sm',
      sm: 'px-jds-sm py-jds-sm text-sm',
      md: 'px-jds-md py-jds-sm text-base',  // JDS標準
      lg: 'px-jds-lg py-jds-md text-lg'
    }
    classes.push(jdsSizes[props.size] || jdsSizes.md)
    
    // JDS準拠ソート機能
    if (props.sortable && column.sortable !== false) {
      classes.push(
        'cursor-pointer', 'select-none',
        'hover:bg-gray-200', 'focus:bg-gray-200',
        'focus:outline-none', 'focus:ring-2', 'focus:ring-jds-primary', 'focus:ring-inset',
        'transition-colors', 'duration-200'
      )
    }
  } else {
    // 従来の非 JDS スタイル
    classes.push(
      'px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider'
    )
    
    if (props.sortable && column.sortable !== false) {
      classes.push('cursor-pointer select-none hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors')
    }
    
    if (props.size === 'xs') {
      classes.push('px-3 py-2 text-xs')
    } else if (props.size === 'sm') {
      classes.push('px-4 py-2 text-xs')
    } else if (props.size === 'lg') {
      classes.push('px-8 py-4 text-sm')
    }
  }
  
  // Alignment (共通)
  if (column.align === 'center') {
    classes.push('text-center')
  } else if (column.align === 'right') {
    classes.push('text-right')
  }
  
  return classes
}

const getRowClasses = (item: any, index: number) => {
  const classes = []
  
  if (props.hover) {
    classes.push('hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors cursor-pointer')
  }
  
  if (props.striped && index % 2 === 1) {
    classes.push('bg-gray-50 dark:bg-gray-800')
  }
  
  return classes
}

const getCellClasses = (column: Column, item: any) => {
  const classes = []
  
  if (props.jdsCompliant || props.variant.startsWith('jds-')) {
    // JDS準拠セルスタイル
    classes.push(
      'jds-table-cell',
      'text-jds-text', 'border-b', 'border-gray-200'  // JDS推奨ボーダー
    )
    
    // JDS 8pxグリッドサイズ
    const jdsSizes = {
      xs: 'px-jds-sm py-jds-xs text-sm',
      sm: 'px-jds-sm py-jds-sm text-sm',
      md: 'px-jds-md py-jds-sm text-base',  // JDS標準
      lg: 'px-jds-lg py-jds-md text-lg'
    }
    classes.push(jdsSizes[props.size] || jdsSizes.md)
    
    if (props.dense) {
      classes.push('py-jds-xs')  // JDSグリッドで締める
    }
  } else {
    // 従来の非 JDS スタイル
    classes.push('px-6 py-4 whitespace-nowrap text-sm')
    
    if (props.size === 'xs') {
      classes.push('px-3 py-2 text-xs')
    } else if (props.size === 'sm') {
      classes.push('px-4 py-2 text-xs')
    } else if (props.size === 'lg') {
      classes.push('px-8 py-4 text-base')
    }
    
    if (props.dense) {
      classes.push('py-2')
    }
  }
  
  // Alignment (共通)
  if (column.align === 'center') {
    classes.push('text-center')
  } else if (column.align === 'right') {
    classes.push('text-right')
  }
  
  return classes
}

const getCellContentClasses = (column: Column) => {
  const classes = []
  
  if (column.type === 'badge') {
    classes.push('inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium')
  } else if (column.type === 'number' || column.type === 'currency') {
    classes.push('font-mono text-gray-900 dark:text-gray-100')
  } else {
    classes.push('text-gray-900 dark:text-gray-100')
  }
  
  return classes
}

const getSortDirection = (column: Column) => {
  if (!props.sortable || column.sortable === false) return null
  if (sortKey.value !== column.key) return 'none'
  return sortAsc.value ? 'ascending' : 'descending'
}

const getSortIconClasses = (column: Column, direction: 'asc' | 'desc') => {
  const classes = ['text-gray-400']
  
  if (sortKey.value === column.key) {
    if ((direction === 'asc' && sortAsc.value) || (direction === 'desc' && !sortAsc.value)) {
      classes.push('text-gray-900 dark:text-gray-100')
    }
  }
  
  return classes
}

const getRowKey = (item: any, index: number) => {
  return item[props.rowKey] || index
}

const formatCellValue = (value: any, column: Column) => {
  if (value == null) return ''
  
  if (column.format) {
    return column.format(value)
  }
  
  if (column.type === 'currency') {
    return new Intl.NumberFormat('ja-JP', {
      style: 'currency',
      currency: 'JPY'
    }).format(Number(value))
  }
  
  if (column.type === 'date') {
    return new Date(value).toLocaleDateString('ja-JP')
  }
  
  return String(value)
}

const toggleSort = (column: Column) => {
  if (!props.sortable || column.sortable === false) return
  
  if (sortKey.value === column.key) {
    sortAsc.value = !sortAsc.value
  } else {
    sortKey.value = column.key
    sortAsc.value = true
  }
  
  emit('sort-change', { 
    key: column.key, 
    direction: sortAsc.value ? 'asc' : 'desc' 
  })
}

const handleRowClick = (item: any, index: number) => {
  emit('row-click', item, index)
}

const handleCellClick = (item: any, column: Column, value: any) => {
  emit('cell-click', item, column, value)
}

// JDS準拠時のアクセシビリティ関連メソッド
const getAriaDescribedBy = () => {
  if (!props.jdsCompliant) return null
  
  const descriptions = []
  
  if (props.tableDescription) {
    descriptions.push(`${tableId.value}-description`)
  }
  
  if (props.tableSummary) {
    descriptions.push(`${tableId.value}-summary`)
  }
  
  return descriptions.length > 0 ? descriptions.join(' ') : null
}

const getColumnAriaLabel = (column: Column) => {
  if (!props.jdsCompliant) return null
  
  let label = `列ヘッダー: ${column.label}`
  
  if (props.sortable && column.sortable !== false) {
    const sortState = getSortDirection(column)
    if (sortState === 'ascending') {
      label += '。現在昇順でソート中。クリックで降順ソート。'
    } else if (sortState === 'descending') {
      label += '。現在降順でソート中。クリックでソート解除。'
    } else {
      label += '。クリックでソート。'
    }
  }
  
  return label
}

const getCellAriaLabel = (column: Column, item: any) => {
  if (!props.jdsCompliant) return null
  
  const value = formatCellValue(item[column.key], column)
  return `${column.label}: ${value}`
}

const handleColumnKeydown = (event: KeyboardEvent, column: Column) => {
  if (!props.jdsCompliant) return
  
  // Enter または Space キーでソート実行
  if ((event.key === 'Enter' || event.key === ' ') && props.sortable && column.sortable !== false) {
    event.preventDefault()
    toggleSort(column)
  }
}
</script>
