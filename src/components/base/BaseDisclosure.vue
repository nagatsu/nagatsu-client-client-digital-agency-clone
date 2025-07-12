<template>
  <div :class="containerClasses" class="space-y-1">
    <button
      :id="buttonId"
      :class="buttonClasses"
      class="flex w-full items-center justify-between rounded-lg px-4 py-3 text-left text-sm font-medium transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
      :aria-expanded="isOpen"
      :aria-controls="panelId"
      :disabled="disabled"
      @click="toggleDisclosure"
      @keydown="handleKeyDown"
    >
      <!-- アイコン (左側) -->
      <div class="flex items-center">
        <component
          v-if="icon"
          :is="icon"
          :class="iconClasses"
          class="mr-3 flex-shrink-0"
          aria-hidden="true"
        />
        
        <div>
          <div :class="titleClasses" class="font-medium">
            {{ title }}
          </div>
          <div
            v-if="description"
            :class="descriptionClasses"
            class="text-xs text-gray-500 mt-1"
          >
            {{ description }}
          </div>
        </div>
      </div>
      
      <!-- 展開アイコン (右側) -->
      <svg
        :class="chevronClasses"
        class="h-5 w-5 flex-shrink-0 transition-transform duration-200"
        aria-hidden="true"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
      </svg>
    </button>
    
    <!-- パネル -->
    <Transition
      enter-active-class="transition duration-200 ease-out"
      enter-from-class="transform scale-95 opacity-0"
      enter-to-class="transform scale-100 opacity-100"
      leave-active-class="transition duration-150 ease-in"
      leave-from-class="transform scale-100 opacity-100"
      leave-to-class="transform scale-95 opacity-0"
    >
      <div
        v-if="isOpen"
        :id="panelId"
        :class="panelClasses"
        class="px-4 pb-3 pt-1"
        role="region"
        :aria-labelledby="buttonId"
      >
        <div :class="contentClasses">
          <!-- デフォルトスロットコンテンツ -->
          <slot />
          
          <!-- アクションスロット -->
          <div v-if="$slots.actions" class="mt-4 flex gap-2">
            <slot name="actions" />
          </div>
          
          <!-- リンクリスト -->
          <ul v-if="links && links.length > 0" class="mt-3 space-y-2">
            <li v-for="(link, index) in links" :key="`link-${index}`">
              <component
                :is="getLinkComponent(link)"
                v-bind="getLinkProps(link)"
                :class="linkClasses(link)"
                class="block rounded-md px-3 py-2 text-sm transition-colors duration-150 hover:bg-gray-50"
                @click="handleLinkClick(link)"
              >
                <component
                  v-if="link.icon"
                  :is="link.icon"
                  class="mr-2 h-4 w-4 inline-block"
                  aria-hidden="true"
                />
                {{ link.label }}
                <span
                  v-if="link.description"
                  class="block text-xs text-gray-500 mt-1"
                >
                  {{ link.description }}
                </span>
              </component>
            </li>
          </ul>
        </div>
      </div>
    </Transition>
  </div>
</template>

<script setup lang="ts">
import { computed, ref, nextTick } from 'vue'

interface DisclosureLink {
  label: string
  href?: string
  to?: string | object
  icon?: string | object
  description?: string
  disabled?: boolean
}

interface Props {
  title: string
  description?: string
  icon?: string | object
  chevronIcon?: string | object
  variant?: 'default' | 'minimal' | 'card' | 'outlined'
  size?: 'sm' | 'md' | 'lg'
  disabled?: boolean
  defaultOpen?: boolean
  links?: DisclosureLink[]
  maxHeight?: string
  closeOnLinkClick?: boolean
  buttonId?: string
  panelId?: string
}

const props = withDefaults(defineProps<Props>(), {
  variant: 'default',
  size: 'md',
  disabled: false,
  defaultOpen: false,
  maxHeight: 'none',
  closeOnLinkClick: false,
  buttonId: () => `disclosure-button-${Math.random().toString(36).substr(2, 9)}`,
  panelId: () => `disclosure-panel-${Math.random().toString(36).substr(2, 9)}`
})

const emit = defineEmits<{
  'toggle': [open: boolean]
  'open': []
  'close': []
  'link-click': [link: DisclosureLink]
}>()

// リアクティブな状態
const isOpen = ref(props.defaultOpen)

// スタイルクラス
const containerClasses = computed(() => {
  const base = 'space-y-1'
  
  const variants = {
    default: '',
    minimal: '',
    card: 'bg-white rounded-lg shadow-sm border border-gray-200',
    outlined: 'border border-gray-300 rounded-lg'
  }
  
  return [base, variants[props.variant]]
})

const buttonClasses = computed(() => {
  const base = 'flex w-full items-center justify-between px-4 py-3 text-left text-sm font-medium transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500'
  
  const variants = {
    default: isOpen.value
      ? 'bg-gray-100 text-gray-900 rounded-lg'
      : 'text-gray-700 hover:bg-gray-50 rounded-lg',
    minimal: isOpen.value
      ? 'text-gray-900'
      : 'text-gray-600 hover:text-gray-900',
    card: isOpen.value
      ? 'bg-gray-50 text-gray-900 rounded-t-lg'
      : 'text-gray-700 hover:bg-gray-50 rounded-lg',
    outlined: isOpen.value
      ? 'bg-gray-50 text-gray-900 rounded-t-lg'
      : 'text-gray-700 hover:bg-gray-50 rounded-lg'
  }
  
  const sizes = {
    sm: 'px-3 py-2 text-xs',
    md: 'px-4 py-3 text-sm',
    lg: 'px-5 py-4 text-base'
  }
  
  const disabled = props.disabled ? 'opacity-50 cursor-not-allowed' : ''
  
  return [base, variants[props.variant], sizes[props.size], disabled]
})

const panelClasses = computed(() => {
  const base = 'px-4 pb-3 pt-1'
  
  const variants = {
    default: '',
    minimal: 'pl-0',
    card: 'border-t border-gray-100',
    outlined: 'border-t border-gray-300'
  }
  
  const sizes = {
    sm: 'px-3 pb-2 pt-1',
    md: 'px-4 pb-3 pt-1',
    lg: 'px-5 pb-4 pt-2'
  }
  
  return [base, variants[props.variant], sizes[props.size]]
})

const contentClasses = computed(() => {
  const base = ''
  
  const maxHeight = props.maxHeight !== 'none' ? `max-h-${props.maxHeight} overflow-y-auto` : ''
  
  return [base, maxHeight]
})

const titleClasses = computed(() => {
  const sizes = {
    sm: 'text-xs font-medium',
    md: 'text-sm font-medium',
    lg: 'text-base font-medium'
  }
  
  return sizes[props.size]
})

const descriptionClasses = computed(() => {
  const sizes = {
    sm: 'text-xs',
    md: 'text-xs',
    lg: 'text-sm'
  }
  
  return [sizes[props.size], 'text-gray-500 mt-1']
})

const iconClasses = computed(() => {
  const sizes = {
    sm: 'h-4 w-4',
    md: 'h-5 w-5',
    lg: 'h-6 w-6'
  }
  
  return [sizes[props.size], 'text-gray-400']
})

const chevronClasses = computed(() => {
  const rotation = isOpen.value ? 'rotate-180' : 'rotate-0'
  return ['h-5 w-5 flex-shrink-0 transition-transform duration-200 text-gray-400', rotation]
})

// アイコンは直接SVGで実装済み

// リンククラス
const linkClasses = (link: DisclosureLink) => {
  const base = 'block rounded-md px-3 py-2 text-sm transition-colors duration-150'
  const disabled = link.disabled ? 'opacity-50 cursor-not-allowed' : 'hover:bg-gray-50'
  
  return [base, disabled]
}

// イベントハンドラー
const toggleDisclosure = () => {
  if (props.disabled) return
  
  isOpen.value = !isOpen.value
  emit('toggle', isOpen.value)
  
  if (isOpen.value) {
    emit('open')
  } else {
    emit('close')
  }
}

const handleKeyDown = (event: KeyboardEvent) => {
  if (props.disabled) return
  
  switch (event.key) {
    case 'Enter':
    case ' ':
      event.preventDefault()
      toggleDisclosure()
      break
    case 'Escape':
      if (isOpen.value) {
        isOpen.value = false
        emit('toggle', false)
        emit('close')
      }
      break
  }
}

const handleLinkClick = (link: DisclosureLink) => {
  if (link.disabled) return
  
  emit('link-click', link)
  
  if (props.closeOnLinkClick) {
    isOpen.value = false
    emit('toggle', false)
    emit('close')
  }
}

// リンクコンポーネント決定
const getLinkComponent = (link: DisclosureLink) => {
  if (link.disabled) {
    return 'span'
  }
  
  if (link.to) {
    return 'router-link'
  }
  
  if (link.href) {
    return 'a'
  }
  
  return 'button'
}

// リンクプロップス
const getLinkProps = (link: DisclosureLink) => {
  if (link.disabled) {
    return {}
  }
  
  if (link.to) {
    return { to: link.to }
  }
  
  if (link.href) {
    return { href: link.href }
  }
  
  return { type: 'button' }
}

// 外部からの制御用メソッド
const open = () => {
  if (!props.disabled && !isOpen.value) {
    toggleDisclosure()
  }
}

const close = () => {
  if (!props.disabled && isOpen.value) {
    toggleDisclosure()
  }
}

// 外部からアクセス可能にする
defineExpose({
  open,
  close,
  isOpen: computed(() => isOpen.value)
})
</script>