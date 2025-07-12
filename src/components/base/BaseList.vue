<template>
  <component :is="actualTag" :class="listClasses">
    <li
      v-for="(item, index) in items"
      :key="item.id || index"
      :class="itemClasses(item, index)"
    >
      <!-- カスタムアイテムスロット -->
      <slot name="item" :item="item" :index="index">
        <!-- デフォルトアイテム表示 -->
        <div class="flex items-start">
          <!-- マーカー・アイコン -->
          <div v-if="showMarkers" class="flex-shrink-0 mr-3 mt-1">
            <!-- カスタムアイコン -->
            <component
              v-if="item.icon"
              :is="getIconComponent(item.icon)"
              :class="markerClasses"
            />
            <!-- 順序番号 -->
            <span
              v-else-if="ordered"
              :class="numberClasses"
            >
              {{ getItemNumber(index) }}.
            </span>
            <!-- ブレットポイント -->
            <span
              v-else
              :class="bulletClasses"
            >
              •
            </span>
          </div>
          
          <!-- コンテンツ -->
          <div class="flex-1 min-w-0">
            <!-- タイトル -->
            <div v-if="item.title" :class="titleClasses">
              {{ item.title }}
            </div>
            
            <!-- 本文 -->
            <div :class="contentClasses">
              <component
                v-if="item.url"
                :is="item.external ? 'a' : 'router-link'"
                :to="item.external ? undefined : item.url"
                :href="item.external ? item.url : undefined"
                :target="item.external ? '_blank' : undefined"
                :rel="item.external ? 'noopener noreferrer' : undefined"
                :class="linkClasses"
                @click="handleItemClick(item, $event)"
              >
                {{ item.text || item.content }}
                <svg
                  v-if="item.external"
                  class="inline h-4 w-4 ml-1"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path fill-rule="evenodd" d="M4.25 5.5a.75.75 0 00-.75.75v8.5c0 .414.336.75.75.75h8.5a.75.75 0 00.75-.75v-4a.75.75 0 011.5 0v4A2.25 2.25 0 0112.75 17h-8.5A2.25 2.25 0 012 14.75v-8.5A2.25 2.25 0 014.25 4h5a.75.75 0 010 1.5h-5z" clip-rule="evenodd" />
                  <path fill-rule="evenodd" d="M6.194 12.753a.75.75 0 001.06.053L16.5 4.44v2.81a.75.75 0 001.5 0v-4.5a.75.75 0 00-.75-.75h-4.5a.75.75 0 000 1.5h2.553l-9.056 8.194a.75.75 0 00-.053 1.06z" clip-rule="evenodd" />
                </svg>
              </component>
              <span v-else>{{ item.text || item.content }}</span>
            </div>
            
            <!-- 説明文 -->
            <div v-if="item.description" :class="descriptionClasses">
              {{ item.description }}
            </div>
            
            <!-- サブアイテム -->
            <BaseList
              v-if="item.children && item.children.length > 0"
              :items="item.children"
              :ordered="false"
              :size="size"
              :variant="variant"
              :spacing="spacing"
              :nested="true"
              :level="level + 1"
              :class="nestedClasses"
            />
          </div>
          
          <!-- 右側要素 -->
          <div v-if="item.badge || item.meta" class="flex items-center space-x-2 ml-3">
            <!-- バッジ -->
            <BaseBadge
              v-if="item.badge"
              :text="item.badge.text"
              :variant="item.badge.variant || 'neutral'"
              size="xs"
            />
            
            <!-- メタ情報 -->
            <span v-if="item.meta" :class="metaClasses">
              {{ item.meta }}
            </span>
          </div>
        </div>
      </slot>
    </li>
  </component>
</template>

<script setup>
import { computed } from 'vue'
import BaseBadge from './BaseBadge.vue'

const props = defineProps({
  // リストアイテム配列
  items: {
    type: Array,
    default: () => [],
    validator: (items) => {
      return items.every(item => 
        typeof item === 'object' && 
        (item.text || item.content || item.title)
      )
    }
  },
  
  // 順序付きリスト
  ordered: {
    type: Boolean,
    default: false
  },
  
  // HTMLタグ
  tag: {
    type: String,
    default: null
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
    validator: (value) => ['default', 'minimal', 'divided'].includes(value)
  },
  
  // スペーシング
  spacing: {
    type: String,
    default: 'normal',
    validator: (value) => ['compact', 'normal', 'relaxed'].includes(value)
  },
  
  // マーカー表示
  showMarkers: {
    type: Boolean,
    default: true
  },
  
  // ネストされたリスト
  nested: {
    type: Boolean,
    default: false
  },
  
  // ネストレベル
  level: {
    type: Number,
    default: 0
  },
  
  // 開始番号（順序付きリスト用）
  startNumber: {
    type: Number,
    default: 1
  }
})

const emit = defineEmits(['item-click'])

// 実際のHTMLタグ
const actualTag = computed(() => {
  if (props.tag) return props.tag
  return props.ordered ? 'ol' : 'ul'
})

// リストのクラス
const listClasses = computed(() => {
  const classes = ['list']
  
  // バリアント
  if (props.variant === 'divided') {
    classes.push('divide-y', 'divide-neutral-200', 'dark:divide-dark-300')
  }
  
  // スペーシング
  switch (props.spacing) {
    case 'compact':
      classes.push('space-y-1')
      break
    case 'relaxed':
      classes.push('space-y-4')
      break
    default:
      classes.push('space-y-2')
  }
  
  // ネスト
  if (props.nested) {
    classes.push('mt-2')
  }
  
  return classes.join(' ')
})

// アイテムのクラス
const itemClasses = (item, index) => {
  const classes = []
  
  // バリアント
  if (props.variant === 'divided' && index > 0) {
    classes.push('pt-2')
  }
  
  // サイズ
  switch (props.size) {
    case 'sm':
      classes.push('text-body-sm')
      break
    case 'lg':
      classes.push('text-body-lg')
      break
    default:
      classes.push('text-body-regular')
  }
  
  return classes.join(' ')
}

// マーカーのクラス
const markerClasses = computed(() => {
  const classes = []
  
  switch (props.size) {
    case 'sm':
      classes.push('h-4', 'w-4')
      break
    case 'lg':
      classes.push('h-6', 'w-6')
      break
    default:
      classes.push('h-5', 'w-5')
  }
  
  classes.push('text-primary-500')
  
  return classes.join(' ')
})

// 番号のクラス
const numberClasses = computed(() => {
  const classes = ['font-medium', 'text-primary-600', 'dark:text-primary-400']
  
  switch (props.size) {
    case 'sm':
      classes.push('text-body-sm')
      break
    case 'lg':
      classes.push('text-body-lg')
      break
    default:
      classes.push('text-body-regular')
  }
  
  return classes.join(' ')
})

// ブレットのクラス
const bulletClasses = computed(() => {
  const classes = ['text-primary-500']
  
  switch (props.size) {
    case 'sm':
      classes.push('text-body-sm')
      break
    case 'lg':
      classes.push('text-body-lg')
      break
    default:
      classes.push('text-body-regular')
  }
  
  return classes.join(' ')
})

// タイトルのクラス
const titleClasses = computed(() => {
  const classes = ['font-semibold', 'text-neutral-900', 'dark:text-dark-900', 'mb-1']
  
  switch (props.size) {
    case 'sm':
      classes.push('text-body-sm')
      break
    case 'lg':
      classes.push('text-body-lg')
      break
    default:
      classes.push('text-body-regular')
  }
  
  return classes.join(' ')
})

// コンテンツのクラス
const contentClasses = computed(() => {
  const classes = ['text-neutral-700', 'dark:text-dark-700']
  
  switch (props.size) {
    case 'sm':
      classes.push('text-body-sm')
      break
    case 'lg':
      classes.push('text-body-lg')
      break
    default:
      classes.push('text-body-regular')
  }
  
  return classes.join(' ')
})

// リンクのクラス
const linkClasses = computed(() => {
  return [
    'text-primary-600', 'dark:text-primary-400',
    'hover:text-primary-700', 'dark:hover:text-primary-300',
    'transition-colors', 'duration-200'
  ].join(' ')
})

// 説明文のクラス
const descriptionClasses = computed(() => {
  const classes = ['mt-1', 'text-neutral-600', 'dark:text-dark-600']
  
  switch (props.size) {
    case 'sm':
      classes.push('text-caption')
      break
    case 'lg':
      classes.push('text-body-regular')
      break
    default:
      classes.push('text-body-sm')
  }
  
  return classes.join(' ')
})

// メタ情報のクラス
const metaClasses = computed(() => {
  const classes = ['text-neutral-500', 'dark:text-dark-500']
  
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
  
  return classes.join(' ')
})

// ネストされたリストのクラス
const nestedClasses = computed(() => {
  const classes = []
  
  // インデント
  const indentClass = `ml-${Math.min(props.level * 4, 12)}`
  classes.push(indentClass)
  
  return classes.join(' ')
})

// アイテム番号の取得
const getItemNumber = (index) => {
  return props.startNumber + index
}

// アイコンコンポーネントの取得
const getIconComponent = (iconName) => {
  const icons = {
    check: {
      template: `<svg fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" /></svg>`
    },
    star: {
      template: `<svg fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>`
    },
    arrow: {
      template: `<svg fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd" /></svg>`
    },
    dot: {
      template: `<svg fill="currentColor" viewBox="0 0 20 20"><circle cx="10" cy="10" r="3" /></svg>`
    }
  }
  
  return icons[iconName] || icons.dot
}

// アイテムクリック時の処理
const handleItemClick = (item, event) => {
  emit('item-click', { item, event })
}
</script>