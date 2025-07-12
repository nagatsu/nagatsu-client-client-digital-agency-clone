<template>
  <div :class="containerClasses">
    <!-- カテゴリータイトル -->
    <h3 v-if="title" :class="titleClasses">
      {{ title }}
    </h3>
    
    <ul :class="listClasses">
      <template v-for="(item, index) in items" :key="item.id || index">
        <!-- ディバイダー -->
        <li v-if="item.type === 'divider'" :class="dividerClasses">
          <hr class="border-neutral-200 dark:border-dark-300" />
        </li>
        
        <!-- カテゴリーヘッダー -->
        <li v-else-if="item.type === 'header'" :class="headerClasses">
          {{ item.text }}
        </li>
        
        <!-- 通常のメニューアイテム -->
        <li v-else>
          <component
            :is="item.external || !item.url || item.url.startsWith('#') ? 'a' : 'router-link'"
            :to="item.external || !item.url || item.url.startsWith('#') ? undefined : item.url"
            :href="item.external || item.url?.startsWith('#') ? item.url : undefined"
            :target="item.external ? '_blank' : undefined"
            :rel="item.external ? 'noopener noreferrer' : undefined"
            :class="itemClasses(item)"
            @click="handleItemClick(item, $event)"
          >
            <!-- 左側アイコン -->
            <div v-if="item.icon" class="flex-shrink-0">
              <component :is="getIconComponent(item.icon)" :class="iconClasses" />
            </div>
            
            <!-- テキストコンテンツ -->
            <div class="flex-1 min-w-0">
              <div class="font-medium">{{ item.text }}</div>
              <div v-if="item.description" :class="descriptionClasses">
                {{ item.description }}
              </div>
            </div>
            
            <!-- 右側要素 -->
            <div class="flex items-center space-x-2">
              <!-- バッジ -->
              <BaseBadge
                v-if="item.badge"
                :text="item.badge.text"
                :variant="item.badge.variant || 'primary'"
                size="xs"
              />
              
              <!-- エンドアイコン -->
              <svg
                v-if="item.url && !item.external"
                class="h-4 w-4 text-neutral-400"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd" />
              </svg>
              
              <!-- 外部リンクアイコン -->
              <svg
                v-else-if="item.external"
                class="h-4 w-4 text-neutral-400"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path fill-rule="evenodd" d="M4.25 5.5a.75.75 0 00-.75.75v8.5c0 .414.336.75.75.75h8.5a.75.75 0 00.75-.75v-4a.75.75 0 011.5 0v4A2.25 2.25 0 0112.75 17h-8.5A2.25 2.25 0 012 14.75v-8.5A2.25 2.25 0 014.25 4h5a.75.75 0 010 1.5h-5z" clip-rule="evenodd" />
                <path fill-rule="evenodd" d="M6.194 12.753a.75.75 0 001.06.053L16.5 4.44v2.81a.75.75 0 001.5 0v-4.5a.75.75 0 00-.75-.75h-4.5a.75.75 0 000 1.5h2.553l-9.056 8.194a.75.75 0 00-.053 1.06z" clip-rule="evenodd" />
              </svg>
            </div>
          </component>
        </li>
      </template>
    </ul>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import BaseBadge from './BaseBadge.vue'

const props = defineProps({
  // タイトル
  title: {
    type: String,
    default: ''
  },
  
  // メニューアイテム配列
  items: {
    type: Array,
    default: () => [],
    validator: (items) => {
      return items.every(item => 
        (item.type && ['divider', 'header'].includes(item.type)) ||
        (typeof item.text === 'string')
      )
    }
  },
  
  // サイズ
  size: {
    type: String,
    default: 'md',
    validator: (value) => ['sm', 'md', 'lg'].includes(value)
  },
  
  // バリアント
  variant: {
    type: String,
    default: 'default',
    validator: (value) => ['default', 'compact', 'spacious'].includes(value)
  },
  
  // テーマ
  theme: {
    type: String,
    default: 'light',
    validator: (value) => ['light', 'dark'].includes(value)
  }
})

const emit = defineEmits(['item-click'])

// コンテナのクラス
const containerClasses = computed(() => {
  const classes = ['menu-list']
  
  if (props.theme === 'dark') {
    classes.push('bg-neutral-800', 'text-neutral-100')
  } else {
    classes.push('bg-white', 'dark:bg-dark-100')
  }
  
  return classes.join(' ')
})

// タイトルのクラス
const titleClasses = computed(() => {
  const classes = ['font-bold', 'mb-3']
  
  switch (props.size) {
    case 'sm':
      classes.push('text-body-sm', 'px-3')
      break
    case 'lg':
      classes.push('text-heading-6', 'px-4')
      break
    default:
      classes.push('text-body-regular', 'px-4')
  }
  
  if (props.theme === 'dark') {
    classes.push('text-neutral-100')
  } else {
    classes.push('text-neutral-900', 'dark:text-dark-900')
  }
  
  return classes.join(' ')
})

// リストのクラス
const listClasses = computed(() => {
  const classes = ['space-y-1']
  
  return classes.join(' ')
})

// アイテムのクラス
const itemClasses = (item) => {
  const classes = [
    'flex', 'items-center', 'w-full',
    'transition-colors', 'duration-200',
    'focus:outline-none', 'focus:ring-2', 'focus:ring-offset-2'
  ]
  
  // サイズ
  switch (props.size) {
    case 'sm':
      classes.push('px-3', 'py-1', 'text-body-sm')
      break
    case 'lg':
      classes.push('px-4', 'py-3', 'text-body-regular')
      break
    default:
      classes.push('px-4', 'py-2', 'text-body-sm')
  }
  
  // バリアント
  if (props.variant === 'spacious') {
    classes.push('py-4')
  } else if (props.variant === 'compact') {
    classes.push('py-1')
  }
  
  // テーマとインタラクション
  if (item.disabled) {
    if (props.theme === 'dark') {
      classes.push('text-neutral-600', 'cursor-not-allowed')
    } else {
      classes.push('text-neutral-400', 'cursor-not-allowed')
    }
  } else {
    if (props.theme === 'dark') {
      classes.push(
        'text-neutral-300', 'hover:text-white',
        'hover:bg-neutral-700', 'focus:ring-primary-400'
      )
    } else {
      classes.push(
        'text-neutral-700', 'dark:text-dark-700',
        'hover:text-neutral-900', 'dark:hover:text-dark-900',
        'hover:bg-neutral-100', 'dark:hover:bg-dark-200',
        'focus:ring-primary-500'
      )
    }
  }
  
  // 角丸
  classes.push('rounded-md')
  
  return classes.join(' ')
}

// アイコンのクラス
const iconClasses = computed(() => {
  const classes = ['flex-shrink-0']
  
  switch (props.size) {
    case 'sm':
      classes.push('h-4', 'w-4', 'mr-2')
      break
    case 'lg':
      classes.push('h-6', 'w-6', 'mr-3')
      break
    default:
      classes.push('h-5', 'w-5', 'mr-2')
  }
  
  return classes.join(' ')
})

// 説明文のクラス
const descriptionClasses = computed(() => {
  const classes = ['mt-1']
  
  switch (props.size) {
    case 'sm':
      classes.push('text-caption')
      break
    case 'lg':
      classes.push('text-body-sm')
      break
    default:
      classes.push('text-caption')
  }
  
  if (props.theme === 'dark') {
    classes.push('text-neutral-400')
  } else {
    classes.push('text-neutral-500', 'dark:text-dark-500')
  }
  
  return classes.join(' ')
})

// ディバイダーのクラス
const dividerClasses = computed(() => {
  const classes = []
  
  switch (props.size) {
    case 'sm':
      classes.push('my-1')
      break
    case 'lg':
      classes.push('my-3')
      break
    default:
      classes.push('my-2')
  }
  
  return classes.join(' ')
})

// ヘッダーのクラス
const headerClasses = computed(() => {
  const classes = ['font-semibold', 'text-neutral-900', 'dark:text-dark-900']
  
  switch (props.size) {
    case 'sm':
      classes.push('px-3', 'py-1', 'text-caption')
      break
    case 'lg':
      classes.push('px-4', 'py-2', 'text-body-sm')
      break
    default:
      classes.push('px-4', 'py-1', 'text-caption')
  }
  
  return classes.join(' ')
})

// アイコンコンポーネントの取得
const getIconComponent = (iconName) => {
  const icons = {
    home: {
      template: `<svg fill="currentColor" viewBox="0 0 20 20"><path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" /></svg>`
    },
    user: {
      template: `<svg fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd" /></svg>`
    },
    settings: {
      template: `<svg fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clip-rule="evenodd" /></svg>`
    },
    document: {
      template: `<svg fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z" clip-rule="evenodd" /></svg>`
    }
  }
  
  return icons[iconName] || icons.document
}

// アイテムクリック時の処理
const handleItemClick = (item, event) => {
  if (item.disabled) {
    event.preventDefault()
    return
  }
  
  emit('item-click', { item, event })
}
</script>