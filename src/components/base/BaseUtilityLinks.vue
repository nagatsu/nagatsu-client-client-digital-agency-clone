<template>
  <nav :class="containerClasses" :aria-label="ariaLabel">
    <ul class="flex flex-wrap items-center gap-x-6 gap-y-2">
      <li v-for="(link, index) in links" :key="index">
        <component
          :is="link.external ? 'a' : 'router-link'"
          :to="link.external ? undefined : link.url"
          :href="link.external ? link.url : undefined"
          :target="link.external ? '_blank' : undefined"
          :rel="link.external ? 'noopener noreferrer' : undefined"
          :class="linkClasses"
          @click="handleLinkClick(link, $event)"
        >
          {{ link.text }}
          
          <!-- 外部リンクアイコン -->
          <svg
            v-if="link.external"
            class="inline-block w-3 h-3 ml-1"
            fill="currentColor"
            viewBox="0 0 20 20"
            aria-hidden="true"
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

const props = defineProps({
  // リンク配列
  links: {
    type: Array,
    default: () => [
      { text: 'お問合わせ', url: '/contact', external: false },
      { text: 'よくあるご質問', url: '/faq', external: false },
      { text: 'ヘルプ', url: '/help', external: false },
      { text: 'アクセス', url: '/access', external: false },
      { text: 'プライバシーポリシー', url: '/privacy', external: false }
    ],
    validator: (links) => {
      return links.every(link => 
        typeof link.text === 'string' && 
        typeof link.url === 'string' && 
        typeof link.external === 'boolean'
      )
    }
  },
  
  // 配置位置
  alignment: {
    type: String,
    default: 'left',
    validator: (value) => ['left', 'center', 'right'].includes(value)
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
    default: 'ユーティリティリンク'
  }
})

const emit = defineEmits(['link-click'])

// コンテナのクラス
const containerClasses = computed(() => {
  const classes = []
  
  // 配置
  switch (props.alignment) {
    case 'center':
      classes.push('text-center')
      break
    case 'right':
      classes.push('text-right')
      break
    default:
      classes.push('text-left')
  }
  
  return classes.join(' ')
})

// リンクのクラス
const linkClasses = computed(() => {
  const classes = ['inline-flex', 'items-center', 'transition-colors', 'duration-200']
  
  // サイズ
  switch (props.size) {
    case 'sm':
      classes.push('text-caption')
      break
    case 'lg':
      classes.push('text-body-lg')
      break
    default:
      classes.push('text-body-sm')
  }
  
  // テーマ
  if (props.theme === 'dark') {
    classes.push(
      'text-neutral-300',
      'hover:text-white',
      'focus:text-white',
      'focus:outline-none',
      'focus:ring-2',
      'focus:ring-primary-400',
      'focus:ring-offset-2',
      'focus:ring-offset-neutral-900'
    )
  } else {
    classes.push(
      'text-neutral-600',
      'hover:text-primary-600',
      'focus:text-primary-600',
      'focus:outline-none',
      'focus:ring-2',
      'focus:ring-primary-500',
      'focus:ring-offset-2'
    )
  }
  
  return classes.join(' ')
})

// リンククリック時の処理
const handleLinkClick = (link, event) => {
  emit('link-click', { link, event })
  
  // 外部リンクの場合の特別な処理
  if (link.external) {
    // アナリティクス等の追跡処理をここに追加可能
    console.log(`External link clicked: ${link.url}`)
  }
}
</script>