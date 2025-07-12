<template>
  <nav :class="navClasses" :aria-label="ariaLabel">
    <ul class="flex items-center space-x-1">
      <li v-for="(item, index) in items" :key="index">
        <!-- ドロップダウンメニューがある場合 -->
        <Menu v-if="item.children && item.children.length > 0" as="div" class="relative">
          <MenuButton :class="[menuButtonClasses, { [activeClasses]: isActiveItem(item) }]">
            {{ item.text }}
            <svg class="ml-1 h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
            </svg>
          </MenuButton>
          
          <transition
            enter-active-class="transition ease-out duration-100"
            enter-from-class="transform opacity-0 scale-95"
            enter-to-class="transform opacity-100 scale-100"
            leave-active-class="transition ease-in duration-75"
            leave-from-class="transform opacity-100 scale-100"
            leave-to-class="transform opacity-0 scale-95"
          >
            <MenuItems :class="dropdownClasses">
              <MenuItem
                v-for="(child, childIndex) in item.children"
                :key="childIndex"
                v-slot="{ active }"
              >
                <component
                  :is="child.external ? 'a' : 'router-link'"
                  :to="child.external ? undefined : child.url"
                  :href="child.external ? child.url : undefined"
                  :target="child.external ? '_blank' : undefined"
                  :rel="child.external ? 'noopener noreferrer' : undefined"
                  :class="[
                    dropdownItemClasses,
                    active ? dropdownItemActiveClasses : ''
                  ]"
                  @click="handleItemClick(child, $event)"
                >
                  {{ child.text }}
                  <svg
                    v-if="child.external"
                    class="ml-auto h-4 w-4"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path fill-rule="evenodd" d="M4.25 5.5a.75.75 0 00-.75.75v8.5c0 .414.336.75.75.75h8.5a.75.75 0 00.75-.75v-4a.75.75 0 011.5 0v4A2.25 2.25 0 0112.75 17h-8.5A2.25 2.25 0 012 14.75v-8.5A2.25 2.25 0 014.25 4h5a.75.75 0 010 1.5h-5z" clip-rule="evenodd" />
                    <path fill-rule="evenodd" d="M6.194 12.753a.75.75 0 001.06.053L16.5 4.44v2.81a.75.75 0 001.5 0v-4.5a.75.75 0 00-.75-.75h-4.5a.75.75 0 000 1.5h2.553l-9.056 8.194a.75.75 0 00-.053 1.06z" clip-rule="evenodd" />
                  </svg>
                </component>
              </MenuItem>
            </MenuItems>
          </transition>
        </Menu>
        
        <!-- 通常のメニューアイテム -->
        <component
          v-else
          :is="item.external ? 'a' : 'router-link'"
          :to="item.external ? undefined : item.url"
          :href="item.external ? item.url : undefined"
          :target="item.external ? '_blank' : undefined"
          :rel="item.external ? 'noopener noreferrer' : undefined"
          :class="[
            menuItemClasses,
            isActiveItem(item) ? activeClasses : ''
          ]"
          @click="handleItemClick(item, $event)"
        >
          {{ item.text }}
          <svg
            v-if="item.external"
            class="ml-1 h-4 w-4"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path fill-rule="evenodd" d="M4.25 5.5a.75.75 0 00-.75.75v8.5c0 .414.336.75.75.75h8.5a.75.75 0 00.75-.75v-4a.75.75 0 011.5 0v4A2.25 2.25 0 0112.75 17h-8.5A2.25 2.25 0 012 14.75v-8.5A2.25 2.25 0 014.25 4h5a.75.75 0 010 1.5h-5z" clip-rule="evenodd" />
            <path fill-rule="evenodd" d="M6.194 12.753a.75.75 0 001.06.053L16.5 4.44v2.81a.75.75 0 001.5 0v-4.5a.75.75 0 00-.75-.75h-4.5a.75.75 0 000 1.5h2.553l-9.056 8.194a.75.75 0 00-.053 1.06z" clip-rule="evenodd" />
          </svg>
        </component>
      </li>
    </ul>
  </nav>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { Menu, MenuButton, MenuItems, MenuItem } from '@headlessui/vue'

const props = defineProps({
  // メニューアイテム配列
  items: {
    type: Array,
    default: () => [],
    validator: (items) => {
      return items.every(item => 
        typeof item.text === 'string' && 
        (typeof item.url === 'string' || (item.children && Array.isArray(item.children)))
      )
    }
  },
  
  // サイズ
  size: {
    type: String,
    default: 'md',
    validator: (value) => ['sm', 'md', 'lg'].includes(value)
  },
  
  // カラーテーマ
  theme: {
    type: String,
    default: 'light',
    validator: (value) => ['light', 'dark'].includes(value)
  },
  
  // アクセシビリティラベル
  ariaLabel: {
    type: String,
    default: 'グローバルナビゲーション'
  }
})

const emit = defineEmits(['item-click'])

const route = useRoute()

// ナビゲーションのクラス
const navClasses = computed(() => {
  return 'global-menu'
})

// メニューアイテムの基本クラス
const menuItemClasses = computed(() => {
  const classes = [
    'inline-flex', 'items-center', 'px-3', 'py-2', 'rounded-md',
    'font-medium', 'transition-colors', 'duration-200',
    'focus:outline-none', 'focus:ring-2', 'focus:ring-offset-2'
  ]
  
  // サイズ
  switch (props.size) {
    case 'sm':
      classes.push('text-body-sm', 'px-2', 'py-1')
      break
    case 'lg':
      classes.push('text-body-lg', 'px-4', 'py-3')
      break
    default:
      classes.push('text-body-regular')
  }
  
  // テーマ
  if (props.theme === 'dark') {
    classes.push(
      'text-neutral-300',
      'hover:text-white',
      'hover:bg-neutral-700',
      'focus:ring-primary-400'
    )
  } else {
    classes.push(
      'text-neutral-700',
      'hover:text-primary-600',
      'hover:bg-neutral-100',
      'focus:ring-primary-500'
    )
  }
  
  return classes.join(' ')
})

// メニューボタンのクラス（ドロップダウン用）
const menuButtonClasses = computed(() => {
  return menuItemClasses.value
})

// アクティブ状態のクラス
const activeClasses = computed(() => {
  if (props.theme === 'dark') {
    return 'text-white bg-neutral-700'
  } else {
    return 'text-primary-600 bg-primary-50'
  }
})

// ドロップダウンのクラス
const dropdownClasses = computed(() => {
  const classes = [
    'absolute', 'left-0', 'mt-2', 'w-56', 'origin-top-left',
    'rounded-md', 'shadow-lg', 'ring-1', 'ring-black', 'ring-opacity-5',
    'focus:outline-none', 'z-50'
  ]
  
  if (props.theme === 'dark') {
    classes.push('bg-neutral-800', 'ring-neutral-700')
  } else {
    classes.push('bg-white')
  }
  
  return classes.join(' ')
})

// ドロップダウンアイテムのクラス
const dropdownItemClasses = computed(() => {
  const classes = [
    'block', 'px-4', 'py-2', 'text-body-sm',
    'transition-colors', 'duration-200', 'w-full', 'text-left',
    'flex', 'items-center'
  ]
  
  if (props.theme === 'dark') {
    classes.push('text-neutral-300')
  } else {
    classes.push('text-neutral-700')
  }
  
  return classes.join(' ')
})

// ドロップダウンアイテムのアクティブクラス
const dropdownItemActiveClasses = computed(() => {
  if (props.theme === 'dark') {
    return 'bg-neutral-700 text-white'
  } else {
    return 'bg-neutral-100 text-neutral-900'
  }
})

// アクティブなアイテムかどうかの判定
const isActiveItem = (item) => {
  if (!item.url) return false
  
  // 完全一致
  if (route.path === item.url) return true
  
  // 子アイテムがある場合、子アイテムのいずれかがアクティブかチェック
  if (item.children && item.children.length > 0) {
    return item.children.some(child => route.path === child.url)
  }
  
  // パスの前方一致（ルートパス以外）
  if (item.url !== '/' && route.path.startsWith(item.url)) {
    return true
  }
  
  return false
}

// アイテムクリック時の処理
const handleItemClick = (item, event) => {
  emit('item-click', { item, event })
  
  // 外部リンクの場合の特別な処理
  if (item.external) {
    console.log(`External link clicked: ${item.url}`)
  }
}
</script>