<template>
  <footer 
    :class="footerClasses" 
    role="contentinfo"
    :aria-labelledby="jdsCompliant ? `${footerId}-label` : null"
  >
    <!-- JDS準拠時のフッター説明 -->
    <div 
      v-if="jdsCompliant && footerDescription"
      :id="`${footerId}-description`"
      class="sr-only"
    >
      {{ footerDescription }}
    </div>
    <!-- フッタメインコンテンツ -->
    <div class="container mx-auto px-4 py-12">
      <!-- フッタセクション群 -->
      <div :class="sectionsClasses">
        <!-- ブランドセクション -->
        <div v-if="showBrand" class="footer-section">
          <div class="mb-6">
            <!-- ロゴ -->
            <div v-if="logo || $slots.logo" class="mb-4">
              <slot name="logo">
                <img v-if="logo" :src="logo" :alt="brandName" class="h-8 w-auto" />
                <div v-else class="text-2xl font-bold text-gray-900 dark:text-white">
                  {{ brandName }}
                </div>
              </slot>
            </div>
            
            <!-- ブランド説明 -->
            <p v-if="description" class="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mb-4">
              {{ description }}
            </p>
            
            <!-- SNSリンク -->
            <div v-if="socialLinks.length > 0" class="flex gap-4">
              <a
                v-for="social in socialLinks"
                :key="social.platform"
                :href="social.url"
                :aria-label="`${social.platform}で${brandName}をフォロー`"
                :class="socialLinkClasses"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div v-html="getSocialIcon(social.platform)" class="w-5 h-5"></div>
              </a>
            </div>
          </div>
        </div>
        
        <!-- メニューセクション群 -->
        <div
          v-for="section in menuSections"
          :key="section.title"
          class="footer-section"
        >
          <h3 class="footer-section-title">{{ section.title }}</h3>
          <ul class="footer-menu">
            <li v-for="item in section.items" :key="item.text">
              <component
                :is="item.external ? 'a' : 'router-link'"
                :to="item.external ? undefined : item.url"
                :href="item.external ? item.url : undefined"
                :target="item.external ? '_blank' : undefined"
                :rel="item.external ? 'noopener noreferrer' : undefined"
                :class="menuItemClasses"
                @click="handleLinkClick(item, $event)"
              >
                {{ item.text }}
                <svg
                  v-if="item.external"
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
        </div>
        
        <!-- 連絡先セクション -->
        <div v-if="contactInfo && Object.keys(contactInfo).length > 0" class="footer-section">
          <h3 class="footer-section-title">お問い合わせ</h3>
          <div class="space-y-2 text-sm text-gray-600 dark:text-gray-300">
            <div v-if="contactInfo.address" class="flex items-start gap-2">
              <svg class="w-4 h-4 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd" />
              </svg>
              <span>{{ contactInfo.address }}</span>
            </div>
            <div v-if="contactInfo.phone" class="flex items-center gap-2">
              <svg class="w-4 h-4 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
              </svg>
              <a :href="`tel:${contactInfo.phone}`" class="hover:text-primary-600 dark:hover:text-primary-400">
                {{ contactInfo.phone }}
              </a>
            </div>
            <div v-if="contactInfo.email" class="flex items-center gap-2">
              <svg class="w-4 h-4 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
              </svg>
              <a :href="`mailto:${contactInfo.email}`" class="hover:text-primary-600 dark:hover:text-primary-400">
                {{ contactInfo.email }}
              </a>
            </div>
            <div v-if="contactInfo.hours" class="flex items-start gap-2">
              <svg class="w-4 h-4 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clip-rule="evenodd" />
              </svg>
              <span>{{ contactInfo.hours }}</span>
            </div>
          </div>
        </div>
        
        <!-- ニュースレターサインアップ -->
        <div v-if="showNewsletter" class="footer-section">
          <h3 class="footer-section-title">最新情報をお届け</h3>
          <p class="text-sm text-gray-600 dark:text-gray-300 mb-4">
            {{ newsletterDescription || 'メールアドレスを登録して、最新ニュースや更新情報をお受け取りください。' }}
          </p>
          <form @submit.prevent="handleNewsletterSubmit" class="flex gap-2">
            <input
              v-model="newsletterEmail"
              type="email"
              placeholder="メールアドレス"
              required
              class="flex-1 px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md text-sm bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            />
            <button
              type="submit"
              :disabled="newsletterLoading"
              class="px-4 py-2 bg-primary-600 text-white text-sm font-medium rounded-md hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              {{ newsletterLoading ? '送信中...' : '登録' }}
            </button>
          </form>
        </div>
      </div>
    </div>
    
    <!-- フッタボトム（著作権等） -->
    <div :class="bottomClasses">
      <div class="container mx-auto px-4 py-4">
        <div class="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <!-- 著作権 -->
          <div class="text-sm text-gray-500 dark:text-gray-400">
            <slot name="copyright">
              © {{ currentYear }} {{ brandName }}{{ copyrightText ? `. ${copyrightText}` : '. All rights reserved.' }}
            </slot>
          </div>
          
          <!-- 法的リンク -->
          <div v-if="legalLinks.length > 0" class="flex flex-wrap gap-4">
            <component
              v-for="link in legalLinks"
              :key="link.text"
              :is="link.external ? 'a' : 'router-link'"
              :to="link.external ? undefined : link.url"
              :href="link.external ? link.url : undefined"
              :target="link.external ? '_blank' : undefined"
              :rel="link.external ? 'noopener noreferrer' : undefined"
              class="text-sm text-gray-500 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
              @click="handleLinkClick(link, $event)"
            >
              {{ link.text }}
            </component>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'

interface MenuItem {
  text: string
  url: string
  external?: boolean
  badge?: string
}

interface MenuSection {
  title: string
  items: MenuItem[]
}

interface SocialLink {
  platform: string
  url: string
}

interface ContactInfo {
  address?: string
  phone?: string
  email?: string
  hours?: string
}

interface Props {
  brandName?: string
  logo?: string
  description?: string
  menuSections?: MenuSection[]
  contactInfo?: ContactInfo
  socialLinks?: SocialLink[]
  legalLinks?: MenuItem[]
  copyrightText?: string
  showBrand?: boolean
  showNewsletter?: boolean
  newsletterDescription?: string
  variant?: 'default' | 'minimal' | 'rich' | 'jds-default' | 'jds-minimal' | 'jds-rich'
  theme?: 'light' | 'dark' | 'auto'
  layout?: 'grid' | 'columns'
  
  // JDS準拠プロップス
  jdsCompliant?: boolean
  footerDescription?: string
  accessibilityStatement?: string
  sitemap?: string
  showJdsCompliance?: boolean
  organizationInfo?: {
    name: string
    address: string
    registrationNumber?: string
    establishedYear?: string
  }
}

const props = withDefaults(defineProps<Props>(), {
  brandName: 'Brand Name',
  menuSections: () => [
    {
      title: 'サービス',
      items: [
        { text: 'サービス一覧', url: '/services' },
        { text: '料金プラン', url: '/pricing' },
        { text: 'API', url: '/api', external: false },
        { text: 'ドキュメント', url: '/docs' }
      ]
    },
    {
      title: '会社情報',
      items: [
        { text: '会社概要', url: '/about' },
        { text: '採用情報', url: '/careers' },
        { text: 'ニュース', url: '/news' },
        { text: 'お問い合わせ', url: '/contact' }
      ]
    },
    {
      title: 'サポート',
      items: [
        { text: 'ヘルプセンター', url: '/help' },
        { text: 'よくある質問', url: '/faq' },
        { text: 'コミュニティ', url: '/community' },
        { text: 'ステータス', url: '/status', external: true }
      ]
    }
  ],
  contactInfo: () => ({}),
  socialLinks: () => [
    { platform: 'twitter', url: 'https://twitter.com' },
    { platform: 'facebook', url: 'https://facebook.com' },
    { platform: 'linkedin', url: 'https://linkedin.com' },
    { platform: 'github', url: 'https://github.com' }
  ],
  legalLinks: () => [
    { text: 'プライバシーポリシー', url: '/privacy' },
    { text: '利用規約', url: '/terms' },
    { text: 'Cookie設定', url: '/cookies' }
  ],
  showBrand: true,
  showNewsletter: true,
  variant: 'default',
  theme: 'light',
  layout: 'grid',
  
  // JDS準拠デフォルト値
  jdsCompliant: false,
  footerDescription: null,
  accessibilityStatement: null,
  sitemap: null,
  showJdsCompliance: false,
  organizationInfo: null
})

const emit = defineEmits<{
  'link-click': [{ link: MenuItem; event: Event }]
  'newsletter-submit': [{ email: string }]
}>()

// JDS準拠ID管理
import { generateId } from '@/utils/helpers'
const footerId = ref(generateId('footer'))

// リアクティブデータ
const newsletterEmail = ref('')
const newsletterLoading = ref(false)

// 計算されたプロパティ
const currentYear = computed(() => new Date().getFullYear())

const footerClasses = computed(() => {
  const classes = []
  
  if (props.jdsCompliant || props.variant.startsWith('jds-')) {
    // JDS準拠フッタースタイル
    classes.push(
      'jds-footer',
      'font-jds', 'text-jds-text',
      'border-t-2', 'border-gray-300'  // JDS推奨ボーダー
    )
    
    // JDS準拠バリアント
    if (props.variant === 'jds-minimal') {
      classes.push('bg-gray-50', 'py-jds-lg')
    } else if (props.variant === 'jds-rich') {
      classes.push('bg-gray-100', 'py-jds-xl')
    } else {
      // jds-default
      classes.push('bg-white', 'py-jds-lg')
    }
  } else {
    // 従来のスタイル
    const base = 'bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700'
    classes.push(base)
  }
  
  const variants = {
    default: '',
    minimal: 'bg-gray-50 dark:bg-gray-800',
    rich: 'bg-gradient-to-r from-gray-900 to-gray-800 text-white'
  }
  
  return [base, variants[props.variant]].filter(Boolean).join(' ')
})

const sectionsClasses = computed(() => {
  const base = 'grid gap-8'
  
  if (props.layout === 'columns') {
    return `${base} grid-cols-1 md:grid-cols-2 lg:grid-cols-4`
  }
  
  // Grid layout (default)
  const sectionCount = props.menuSections.length + (props.showBrand ? 1 : 0) + (props.contactInfo && Object.keys(props.contactInfo).length > 0 ? 1 : 0) + (props.showNewsletter ? 1 : 0)
  
  if (sectionCount <= 2) {
    return `${base} grid-cols-1 md:grid-cols-2`
  } else if (sectionCount <= 3) {
    return `${base} grid-cols-1 md:grid-cols-2 lg:grid-cols-3`
  } else if (sectionCount <= 4) {
    return `${base} grid-cols-1 md:grid-cols-2 lg:grid-cols-4`
  } else {
    return `${base} grid-cols-1 md:grid-cols-2 lg:grid-cols-5`
  }
})

const socialLinkClasses = computed(() => {
  const base = 'inline-flex items-center justify-center w-8 h-8 rounded-full transition-colors'
  
  if (props.variant === 'rich') {
    return `${base} text-gray-300 hover:text-white bg-gray-700 hover:bg-gray-600`
  }
  
  return `${base} text-gray-500 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 bg-gray-100 dark:bg-gray-700 hover:bg-primary-100 dark:hover:bg-gray-600`
})

const menuItemClasses = computed(() => {
  const base = 'inline-flex items-center text-sm transition-colors'
  
  if (props.variant === 'rich') {
    return `${base} text-gray-300 hover:text-white`
  }
  
  return `${base} text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400`
})

const bottomClasses = computed(() => {
  if (props.variant === 'rich') {
    return 'bg-gray-900 border-t border-gray-700'
  }
  
  return 'bg-gray-50 dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700'
})

// メソッド
const handleLinkClick = (link: MenuItem, event: Event) => {
  emit('link-click', { link, event })
}

const handleNewsletterSubmit = async () => {
  if (!newsletterEmail.value.trim()) return
  
  newsletterLoading.value = true
  
  try {
    emit('newsletter-submit', { email: newsletterEmail.value })
    newsletterEmail.value = ''
  } catch (error) {
    console.error('Newsletter submission error:', error)
  } finally {
    newsletterLoading.value = false
  }
}

const getSocialIcon = (platform: string) => {
  const icons = {
    twitter: `<svg fill="currentColor" viewBox="0 0 24 24"><path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"/></svg>`,
    facebook: `<svg fill="currentColor" viewBox="0 0 24 24"><path fill-rule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clip-rule="evenodd"/></svg>`,
    linkedin: `<svg fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>`,
    github: `<svg fill="currentColor" viewBox="0 0 24 24"><path fill-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clip-rule="evenodd"/></svg>`,
    instagram: `<svg fill="currentColor" viewBox="0 0 24 24"><path fill-rule="evenodd" d="M12.017 0C8.396 0 7.989.013 7.041.048 6.094.082 5.52.204 5.009.43a6.5 6.5 0 00-2.357 1.236A6.5 6.5 0 00.43 5.009c-.226.51-.348 1.085-.382 2.032C.013 7.989 0 8.396 0 12.017s.013 4.028.048 4.976c.034.947.156 1.522.382 2.032a6.5 6.5 0 001.236 2.357 6.5 6.5 0 002.357 1.236c.51.226 1.085.348 2.032.382C7.989 23.987 8.396 24 12.017 24s4.028-.013 4.976-.048c.947-.034 1.522-.156 2.032-.382a6.5 6.5 0 002.357-1.236A6.5 6.5 0 0022.618 19c.226-.51.348-1.085.382-2.032.035-.948.048-1.355.048-4.976s-.013-4.028-.048-4.976c-.034-.947-.156-1.522-.382-2.032a6.5 6.5 0 00-1.236-2.357A6.5 6.5 0 0019.025.43c-.51-.226-1.085-.348-2.032-.382C16.045.013 15.638 0 12.017 0zm0 2.158c3.556 0 3.983.013 5.385.048.847.034 1.308.158 1.615.263.406.158.695.347.999.651.304.304.493.593.651.999.105.307.229.768.263 1.615.035 1.402.048 1.829.048 5.385s-.013 3.983-.048 5.385c-.034.847-.158 1.308-.263 1.615a2.69 2.69 0 01-.651.999 2.69 2.69 0 01-.999.651c-.307.105-.768.229-1.615.263-1.402.035-1.829.048-5.385.048s-3.983-.013-5.385-.048c-.847-.034-1.308-.158-1.615-.263a2.69 2.69 0 01-.999-.651 2.69 2.69 0 01-.651-.999c-.105-.307-.229-.768-.263-1.615C2.171 15.983 2.158 15.556 2.158 12s.013-3.983.048-5.385c.034-.847.158-1.308.263-1.615.158-.406.347-.695.651-.999a2.69 2.69 0 01.999-.651c.307-.105.768-.229 1.615-.263C8.037 2.171 8.464 2.158 12.017 2.158zm0 3.676a6.17 6.17 0 100 12.341 6.17 6.17 0 000-12.341zm0 10.183a4.012 4.012 0 110-8.024 4.012 4.012 0 010 8.024zm7.87-10.418a1.44 1.44 0 11-2.88 0 1.44 1.44 0 012.88 0z" clip-rule="evenodd"/></svg>`,
    youtube: `<svg fill="currentColor" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>`
  }
  
  return icons[platform as keyof typeof icons] || icons.twitter
}
</script>

<style scoped>
.footer-section-title {
  @apply text-base font-semibold text-gray-900 dark:text-white mb-4;
}

.footer-menu {
  @apply space-y-2;
}

.footer-section {
  @apply space-y-4;
}
</style>