<template>
  <div :class="accordionClasses">
    <div
      v-for="(item, index) in items"
      :key="item.id || index"
      :class="itemClasses"
    >
      <Disclosure v-slot="{ open }" :default-open="item.defaultOpen">
        <!-- ヘッダー -->
        <DisclosureButton 
          :class="buttonClasses(open)"
          :aria-label="jdsCompliant ? `${item.title}を${open ? '閉じる' : '開く'}` : null"
        >
          <span class="flex-1 text-left">{{ item.title }}</span>
          
          <!-- アイコン -->
          <svg
            :class="iconClasses(open)"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
          </svg>
        </DisclosureButton>
        
        <!-- コンテンツ -->
        <transition
          enter-active-class="transition duration-200 ease-out"
          enter-from-class="transform scale-95 opacity-0"
          enter-to-class="transform scale-100 opacity-100"
          leave-active-class="transition duration-150 ease-in"
          leave-from-class="transform scale-100 opacity-100"
          leave-to-class="transform scale-95 opacity-0"
        >
          <DisclosurePanel :class="panelClasses">
            <!-- スロットコンテンツ -->
            <slot :name="`content-${index}`" :item="item" :index="index">
              <div v-if="item.content" v-html="item.content" />
            </slot>
          </DisclosurePanel>
        </transition>
      </Disclosure>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/vue'

const props = defineProps({
  // アコーディオンアイテム配列
  items: {
    type: Array,
    default: () => [],
    validator: (items) => {
      return items.every(item => 
        typeof item.title === 'string' && 
        (typeof item.content === 'string' || item.content === undefined)
      )
    }
  },
  
  // バリアント
  variant: {
    type: String,
    default: 'default',
    validator: (value) => ['default', 'bordered', 'minimal'].includes(value)
  },
  
  // サイズ
  size: {
    type: String,
    default: 'md',
    validator: (value) => ['sm', 'md', 'lg'].includes(value)
  },
  
  // 複数展開許可
  allowMultiple: {
    type: Boolean,
    default: true
  },
  
  // テーマ
  theme: {
    type: String,
    default: 'light',
    validator: (value) => ['light', 'dark'].includes(value)
  },
  
  // JDS準拠
  jdsCompliant: {
    type: Boolean,
    default: false
  }
})

const emit = defineEmits(['toggle', 'open', 'close'])

// アコーディオン全体のクラス
const accordionClasses = computed(() => {
  const classes = ['accordion']
  
  if (props.variant === 'bordered') {
    classes.push('border', 'border-neutral-200', 'dark:border-dark-300', 'rounded-lg', 'overflow-hidden')
  }
  
  return classes.join(' ')
})

// アイテムのクラス
const itemClasses = computed(() => {
  const classes = []
  
  if (props.variant === 'bordered') {
    classes.push('border-b', 'border-neutral-200', 'dark:border-dark-300', 'last:border-b-0')
  } else if (props.variant === 'default') {
    classes.push('border-b', 'border-neutral-200', 'dark:border-dark-300', 'last:border-b-0')
  }
  
  return classes.join(' ')
})

// ボタンのクラス
const buttonClasses = (open) => {
  const classes = [
    'flex', 'w-full', 'items-center', 'justify-between',
    'text-left', 'font-medium', 'transition-colors', 'duration-200',
    'focus:outline-none', 'focus:ring-2', 'focus:ring-offset-2'
  ]
  
  // サイズ
  switch (props.size) {
    case 'sm':
      classes.push('px-3', 'py-2', 'text-body-sm')
      break
    case 'lg':
      classes.push('px-6', 'py-4', 'text-body-lg')
      break
    default:
      classes.push('px-4', 'py-3', 'text-body-regular')
  }
  
  // テーマとオープン状態
  if (props.theme === 'dark') {
    if (open) {
      classes.push('bg-neutral-700', 'text-white')
    } else {
      classes.push('bg-neutral-800', 'text-neutral-300', 'hover:bg-neutral-700', 'hover:text-white')
    }
    classes.push('focus:ring-primary-400')
  } else {
    if (open) {
      classes.push('bg-primary-50', 'text-primary-900')
    } else {
      classes.push('bg-white', 'dark:bg-dark-100', 'text-neutral-900', 'dark:text-dark-900', 'hover:bg-neutral-50', 'dark:hover:bg-dark-200')
    }
    classes.push('focus:ring-primary-500')
  }
  
  return classes.join(' ')
}

// アイコンのクラス
const iconClasses = (open) => {
  const classes = [
    'h-5', 'w-5', 'transition-transform', 'duration-200',
    'text-neutral-500', 'dark:text-dark-500'
  ]
  
  if (open) {
    classes.push('transform', 'rotate-180')
  }
  
  return classes.join(' ')
}

// パネルのクラス
const panelClasses = computed(() => {
  const classes = ['accordion-panel']
  
  // サイズ
  switch (props.size) {
    case 'sm':
      classes.push('px-3', 'py-2')
      break
    case 'lg':
      classes.push('px-6', 'py-4')
      break
    default:
      classes.push('px-4', 'py-3')
  }
  
  // テーマ
  if (props.theme === 'dark') {
    classes.push('bg-neutral-800', 'text-neutral-300')
  } else {
    classes.push('bg-white', 'dark:bg-dark-100', 'text-neutral-700', 'dark:text-dark-700')
  }
  
  // バリアント
  if (props.variant === 'minimal') {
    classes.push('border-l-4', 'border-primary-500')
  }
  
  return classes.join(' ')
})
</script>

<style scoped>
.accordion-panel {
  @apply prose prose-sm max-w-none;
}

.dark .accordion-panel {
  @apply prose-invert;
}
</style>