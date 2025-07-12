<template>
  <nav :class="containerClasses" class="relative" role="navigation" :aria-label="ariaLabel">
    <div :class="menuBarClasses" class="flex items-center justify-between">
      <!-- メインメニュー項目 -->
      <ul class="flex items-center space-x-1" role="menubar">
        <li
          v-for="(item, index) in items"
          :key="`mega-menu-${index}`"
          class="relative"
          role="none"
        >
          <button
            :id="`menu-button-${index}`"
            :class="menuButtonClasses(item, index)"
            class="flex items-center px-4 py-2 text-sm font-medium transition-colors duration-200 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            :aria-expanded="openMenuIndex === index"
            :aria-haspopup="item.children && item.children.length > 0"
            role="menuitem"
            @click="toggleMenu(index)"
            @keydown="handleKeyDown($event, index)"
            @mouseenter="handleMouseEnter(index)"
            @mouseleave="handleMouseLeave(index)"
          >
            <!-- アイコン -->
            <component
              v-if="item.icon"
              :is="item.icon"
              :class="iconClasses"
              class="mr-2"
              aria-hidden="true"
            />
            
            {{ item.label }}
            
            <!-- 展開アイコン -->
            <ChevronDownIcon
              v-if="item.children && item.children.length > 0"
              :class="chevronClasses(index)"
              class="ml-1 w-4 h-4 transition-transform duration-200"
              aria-hidden="true"
            />
          </button>
          
          <!-- メガメニューパネル -->
          <Transition
            enter-active-class="transition ease-out duration-200"
            enter-from-class="opacity-0 translate-y-1"
            enter-to-class="opacity-100 translate-y-0"
            leave-active-class="transition ease-in duration-150"
            leave-from-class="opacity-100 translate-y-0"
            leave-to-class="opacity-0 translate-y-1"
          >
            <div
              v-if="openMenuIndex === index && item.children && item.children.length > 0"
              :class="panelClasses"
              class="absolute top-full left-0 z-50 mt-1 bg-white border border-gray-200 rounded-lg shadow-lg"
              role="menu"
              :aria-labelledby="`menu-button-${index}`"
              @mouseenter="handlePanelMouseEnter(index)"
              @mouseleave="handlePanelMouseLeave(index)"
            >
              <div :class="panelContentClasses" class="p-6">
                <!-- グリッドレイアウト -->
                <div
                  v-if="item.layout === 'grid'"
                  :class="gridClasses(item)"
                  class="grid gap-6"
                >
                  <div
                    v-for="(section, sectionIndex) in item.children"
                    :key="`section-${sectionIndex}`"
                    class="space-y-3"
                  >
                    <!-- セクションタイトル -->
                    <h3
                      v-if="section.title"
                      :class="sectionTitleClasses"
                      class="text-sm font-semibold text-gray-900 border-b border-gray-100 pb-2"
                    >
                      {{ section.title }}
                    </h3>
                    
                    <!-- セクション項目 -->
                    <ul class="space-y-2" role="none">
                      <li
                        v-for="(subItem, subIndex) in section.items"
                        :key="`sub-item-${subIndex}`"
                        role="none"
                      >
                        <component
                          :is="getLinkComponent(subItem)"
                          v-bind="getLinkProps(subItem)"
                          :class="subItemClasses(subItem)"
                          class="flex items-start p-2 text-sm rounded-md transition-colors duration-150 hover:bg-gray-50"
                          role="menuitem"
                          @click="handleSubItemClick(subItem, index)"
                        >
                          <!-- サブアイテムアイコン -->
                          <component
                            v-if="subItem.icon"
                            :is="subItem.icon"
                            :class="subIconClasses"
                            class="mt-0.5 mr-3 flex-shrink-0"
                            aria-hidden="true"
                          />
                          
                          <div>
                            <div :class="subItemLabelClasses" class="font-medium text-gray-900">
                              {{ subItem.label }}
                            </div>
                            <div
                              v-if="subItem.description"
                              :class="subItemDescriptionClasses"
                              class="text-gray-500"
                            >
                              {{ subItem.description }}
                            </div>
                          </div>
                        </component>
                      </li>
                    </ul>
                  </div>
                </div>
                
                <!-- リストレイアウト -->
                <div v-else-if="item.layout === 'list'" class="space-y-1">
                  <component
                    v-for="(listItem, listIndex) in item.children"
                    :key="`list-item-${listIndex}`"
                    :is="getLinkComponent(listItem)"
                    v-bind="getLinkProps(listItem)"
                    :class="listItemClasses(listItem)"
                    class="flex items-center px-3 py-2 text-sm rounded-md transition-colors duration-150 hover:bg-gray-50"
                    role="menuitem"
                    @click="handleSubItemClick(listItem, index)"
                  >
                    <component
                      v-if="listItem.icon"
                      :is="listItem.icon"
                      :class="iconClasses"
                      class="mr-3"
                      aria-hidden="true"
                    />
                    {{ listItem.label }}
                  </component>
                </div>
                
                <!-- カスタムレイアウト -->
                <div v-else-if="item.layout === 'custom'" class="space-y-4">
                  <slot :name="`menu-${index}`" :item="item" :close="() => closeMenu()" />
                </div>
              </div>
              
              <!-- フッター -->
              <div
                v-if="item.footer"
                :class="footerClasses"
                class="border-t border-gray-100 bg-gray-50 px-6 py-4 rounded-b-lg"
              >
                <component
                  :is="getLinkComponent(item.footer)"
                  v-bind="getLinkProps(item.footer)"
                  :class="footerLinkClasses"
                  class="inline-flex items-center text-sm font-medium text-blue-600 hover:text-blue-500"
                  @click="handleSubItemClick(item.footer, index)"
                >
                  {{ item.footer.label }}
                  <ArrowRightIcon class="ml-1 w-4 h-4" aria-hidden="true" />
                </component>
              </div>
            </div>
          </Transition>
        </li>
      </ul>
      
      <!-- 右側のアクション -->
      <div v-if="$slots.actions" class="flex items-center space-x-2">
        <slot name="actions" />
      </div>
    </div>
    
    <!-- オーバーレイ -->
    <Transition
      enter-active-class="transition-opacity ease-out duration-200"
      enter-from-class="opacity-0"
      enter-to-class="opacity-100"
      leave-active-class="transition-opacity ease-in duration-150"
      leave-from-class="opacity-100"
      leave-to-class="opacity-0"
    >
      <div
        v-if="openMenuIndex !== null && showOverlay"
        class="fixed inset-0 z-40 bg-black bg-opacity-25"
        @click="closeMenu()"
      />
    </Transition>
  </nav>
</template>

<script setup lang="ts">
import { computed, ref, onMounted, onUnmounted } from 'vue'

interface MenuItem {
  label: string
  href?: string
  to?: string | object
  icon?: string | object
  children?: MenuSection[] | MenuItem[]
  layout?: 'grid' | 'list' | 'custom'
  columns?: number
  footer?: MenuItem
}

interface MenuSection {
  title?: string
  items: SubMenuItem[]
}

interface SubMenuItem {
  label: string
  description?: string
  href?: string
  to?: string | object
  icon?: string | object
  disabled?: boolean
}

interface Props {
  items: MenuItem[]
  variant?: 'default' | 'minimal' | 'brand'
  size?: 'sm' | 'md' | 'lg'
  trigger?: 'hover' | 'click'
  showOverlay?: boolean
  closeOnClick?: boolean
  ariaLabel?: string
  maxWidth?: string
}

const props = withDefaults(defineProps<Props>(), {
  variant: 'default',
  size: 'md',
  trigger: 'hover',
  showOverlay: true,
  closeOnClick: true,
  ariaLabel: 'メインナビゲーション',
  maxWidth: '4xl'
})

const emit = defineEmits<{
  'item-click': [item: MenuItem | SubMenuItem]
  'menu-open': [index: number]
  'menu-close': [index: number]
}>()

// リアクティブな状態
const openMenuIndex = ref<number | null>(null)
const hoverTimeout = ref<number | null>(null)
const isHovering = ref(false)

// スタイルクラス
const containerClasses = computed(() => {
  const base = 'relative'
  
  const variants = {
    default: 'bg-white border-b border-gray-200',
    minimal: 'bg-transparent',
    brand: 'bg-blue-600 text-white'
  }
  
  return [base, variants[props.variant]]
})

const menuBarClasses = computed(() => {
  const base = 'flex items-center justify-between'
  
  const sizes = {
    sm: 'px-4 py-2',
    md: 'px-6 py-3',
    lg: 'px-8 py-4'
  }
  
  return [base, sizes[props.size]]
})

const menuButtonClasses = (item: MenuItem, index: number) => {
  const base = 'flex items-center px-4 py-2 text-sm font-medium transition-colors duration-200 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
  const isOpen = openMenuIndex.value === index
  
  const variants = {
    default: isOpen
      ? 'bg-gray-100 text-gray-900'
      : 'text-gray-700 hover:bg-gray-50 hover:text-gray-900',
    minimal: isOpen
      ? 'bg-gray-100 text-gray-900'
      : 'text-gray-600 hover:text-gray-900',
    brand: isOpen
      ? 'bg-blue-700 text-white'
      : 'text-blue-100 hover:bg-blue-500 hover:text-white'
  }
  
  return [base, variants[props.variant]]
}

const panelClasses = computed(() => {
  const base = 'absolute top-full left-0 z-50 mt-1 bg-white border border-gray-200 rounded-lg shadow-lg'
  
  const maxWidths = {
    'sm': 'max-w-sm',
    'md': 'max-w-md',
    'lg': 'max-w-lg',
    'xl': 'max-w-xl',
    '2xl': 'max-w-2xl',
    '3xl': 'max-w-3xl',
    '4xl': 'max-w-4xl',
    '5xl': 'max-w-5xl',
    '6xl': 'max-w-6xl',
    '7xl': 'max-w-7xl'
  }
  
  return [base, maxWidths[props.maxWidth as keyof typeof maxWidths] || 'max-w-4xl']
})

const panelContentClasses = computed(() => 'p-6')

const gridClasses = (item: MenuItem) => {
  const columns = item.columns || 3
  return `grid-cols-${Math.min(columns, 4)}`
}

const iconClasses = computed(() => {
  const sizes = {
    sm: 'w-4 h-4',
    md: 'w-5 h-5',
    lg: 'w-6 h-6'
  }
  
  return sizes[props.size]
})

const subIconClasses = computed(() => 'w-5 h-5 text-blue-500')

const chevronClasses = (index: number) => {
  const isOpen = openMenuIndex.value === index
  return isOpen ? 'transform rotate-180' : ''
}

const sectionTitleClasses = computed(() => 'text-sm font-semibold text-gray-900 border-b border-gray-100 pb-2')

const subItemClasses = (item: SubMenuItem) => {
  const base = 'flex items-start p-2 text-sm rounded-md transition-colors duration-150'
  const disabled = item.disabled ? 'opacity-50 cursor-not-allowed' : 'hover:bg-gray-50'
  
  return [base, disabled]
}

const subItemLabelClasses = computed(() => 'font-medium text-gray-900')
const subItemDescriptionClasses = computed(() => 'text-gray-500 text-xs mt-1')

const listItemClasses = (item: MenuItem | SubMenuItem) => {
  const base = 'flex items-center px-3 py-2 text-sm rounded-md transition-colors duration-150'
  const disabled = 'disabled' in item && item.disabled ? 'opacity-50 cursor-not-allowed' : 'hover:bg-gray-50'
  
  return [base, disabled]
}

const footerClasses = computed(() => 'border-t border-gray-100 bg-gray-50 px-6 py-4 rounded-b-lg')
const footerLinkClasses = computed(() => 'inline-flex items-center text-sm font-medium text-blue-600 hover:text-blue-500')

// イベントハンドラー
const toggleMenu = (index: number) => {
  if (props.trigger === 'click') {
    if (openMenuIndex.value === index) {
      closeMenu()
    } else {
      openMenu(index)
    }
  }
}

const openMenu = (index: number) => {
  openMenuIndex.value = index
  emit('menu-open', index)
}

const closeMenu = () => {
  if (openMenuIndex.value !== null) {
    const previousIndex = openMenuIndex.value
    openMenuIndex.value = null
    emit('menu-close', previousIndex)
  }
}

const handleMouseEnter = (index: number) => {
  if (props.trigger === 'hover') {
    isHovering.value = true
    if (hoverTimeout.value) {
      clearTimeout(hoverTimeout.value)
    }
    openMenu(index)
  }
}

const handleMouseLeave = (index: number) => {
  if (props.trigger === 'hover') {
    isHovering.value = false
    hoverTimeout.value = window.setTimeout(() => {
      if (!isHovering.value) {
        closeMenu()
      }
    }, 100)
  }
}

const handlePanelMouseEnter = (index: number) => {
  if (props.trigger === 'hover') {
    isHovering.value = true
    if (hoverTimeout.value) {
      clearTimeout(hoverTimeout.value)
    }
  }
}

const handlePanelMouseLeave = (index: number) => {
  if (props.trigger === 'hover') {
    isHovering.value = false
    hoverTimeout.value = window.setTimeout(() => {
      if (!isHovering.value) {
        closeMenu()
      }
    }, 100)
  }
}

const handleKeyDown = (event: KeyboardEvent, index: number) => {
  switch (event.key) {
    case 'Enter':
    case ' ':
      event.preventDefault()
      toggleMenu(index)
      break
    case 'Escape':
      closeMenu()
      break
    case 'ArrowDown':
      event.preventDefault()
      if (openMenuIndex.value !== index) {
        openMenu(index)
      }
      break
    case 'ArrowUp':
      event.preventDefault()
      closeMenu()
      break
  }
}

const handleSubItemClick = (item: MenuItem | SubMenuItem, menuIndex: number) => {
  emit('item-click', item)
  
  if (props.closeOnClick) {
    closeMenu()
  }
}

const getLinkComponent = (item: MenuItem | SubMenuItem) => {
  if ('to' in item && item.to) {
    return 'router-link'
  }
  if ('href' in item && item.href) {
    return 'a'
  }
  return 'button'
}

const getLinkProps = (item: MenuItem | SubMenuItem) => {
  if ('to' in item && item.to) {
    return { to: item.to }
  }
  if ('href' in item && item.href) {
    return { href: item.href }
  }
  return { type: 'button' }
}

// クリック外しでメニューを閉じる
const handleClickOutside = (event: Event) => {
  if (openMenuIndex.value !== null) {
    closeMenu()
  }
}

onMounted(() => {
  document.addEventListener('click', handleClickOutside)
})

onUnmounted(() => {
  document.removeEventListener('click', handleClickOutside)
  if (hoverTimeout.value) {
    clearTimeout(hoverTimeout.value)
  }
})
</script>