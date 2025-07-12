<template>
  <BaseCard :class="cardClasses" @click="handleCardClick">
    <!-- 記事画像エリア -->
    <div v-if="showImage && article.image" class="relative overflow-hidden">
      <BaseImage
        :src="article.image"
        :alt="article.title"
        :aspect-ratio="imageAspectRatio"
        :object-fit="imageObjectFit"
        :placeholder="!article.image"
        placeholder-text="記事画像"
        :clickable="clickable"
        size="full"
        rounded="none"
        class="transition-transform duration-200 group-hover:scale-105"
        @click="handleImageClick"
      />
      
      <!-- カテゴリバッジ -->
      <div v-if="article.category && showCategoryBadge" class="absolute top-3 left-3">
        <BaseBadge
          :text="article.category.name"
          :variant="getCategoryVariant(article.category)"
          size="sm"
        />
      </div>
      
      <!-- 読了時間 -->
      <div v-if="article.readTime && showReadTime" class="absolute top-3 right-3">
        <div class="bg-black bg-opacity-60 text-white text-xs px-2 py-1 rounded">
          {{ article.readTime }}分
        </div>
      </div>
      
      <!-- プレミアム記事マーク -->
      <div v-if="article.isPremium" class="absolute bottom-3 left-3">
        <BaseBadge
          text="PREMIUM"
          variant="warning"
          size="xs"
        />
      </div>
    </div>
    
    <!-- 記事情報エリア -->
    <div :class="contentClasses">
      <!-- カテゴリ（画像なしの場合） -->
      <div v-if="article.category && showCategory && (!showImage || !article.image)" class="mb-2">
        <span :class="categoryClasses">
          {{ article.category.name }}
        </span>
      </div>
      
      <!-- 記事タイトル -->
      <h3 :class="titleClasses">
        {{ article.title }}
      </h3>
      
      <!-- 記事抜粋 -->
      <p v-if="article.excerpt && showExcerpt" :class="excerptClasses">
        {{ truncatedExcerpt }}
      </p>
      
      <!-- タグ -->
      <div v-if="article.tags && showTags && article.tags.length > 0" class="mb-3">
        <div class="flex flex-wrap gap-1">
          <span
            v-for="tag in article.tags.slice(0, maxTagsShow)"
            :key="tag.id"
            :class="tagClasses"
          >
            #{{ tag.name }}
          </span>
          <span
            v-if="article.tags.length > maxTagsShow"
            class="text-xs text-neutral-500"
          >
            +{{ article.tags.length - maxTagsShow }}
          </span>
        </div>
      </div>
      
      <!-- メタ情報 -->
      <div :class="metaClasses">
        <!-- 著者情報 -->
        <div v-if="article.author && showAuthor" class="flex items-center">
          <BaseImage
            v-if="article.author.avatar"
            :src="article.author.avatar"
            :alt="article.author.name"
            size="xs"
            rounded="full"
            class="mr-2"
          />
          <span class="text-sm text-neutral-600">
            {{ article.author.name }}
          </span>
        </div>
        
        <!-- 公開日 -->
        <div v-if="article.publishedAt && showDate" class="flex items-center text-sm text-neutral-500">
          <BaseIcon name="Clock" size="xs" class="mr-1" />
          {{ formatDate(article.publishedAt) }}
        </div>
        
        <!-- 読了時間（コンテンツエリア） -->
        <div v-if="article.readTime && showReadTime && (!showImage || !article.image)" class="flex items-center text-sm text-neutral-500">
          <BaseIcon name="BookOpen" size="xs" class="mr-1" />
          {{ article.readTime }}分
        </div>
      </div>
      
      <!-- 統計情報 -->
      <div v-if="showStats" :class="statsClasses">
        <!-- ビュー数 -->
        <div v-if="article.viewCount" class="flex items-center text-sm text-neutral-500">
          <BaseIcon name="Eye" size="xs" class="mr-1" />
          {{ formatNumber(article.viewCount) }}
        </div>
        
        <!-- いいね数 -->
        <div v-if="article.likeCount" class="flex items-center text-sm text-neutral-500">
          <BaseIcon name="Heart" size="xs" class="mr-1" />
          {{ formatNumber(article.likeCount) }}
        </div>
        
        <!-- コメント数 -->
        <div v-if="article.commentCount" class="flex items-center text-sm text-neutral-500">
          <BaseIcon name="ChatBubbleLeft" size="xs" class="mr-1" />
          {{ formatNumber(article.commentCount) }}
        </div>
        
        <!-- シェア数 -->
        <div v-if="article.shareCount" class="flex items-center text-sm text-neutral-500">
          <BaseIcon name="Share" size="xs" class="mr-1" />
          {{ formatNumber(article.shareCount) }}
        </div>
      </div>
      
      <!-- アクションボタンエリア -->
      <div v-if="showActions" :class="actionsClasses">
        <!-- ブックマークボタン -->
        <button
          v-if="showBookmark"
          :class="bookmarkButtonClasses"
          @click.stop="toggleBookmark"
          :aria-label="isBookmarked ? 'ブックマークから削除' : 'ブックマークに追加'"
        >
          <BaseIcon
            name="Bookmark"
            size="sm"
            :color="isBookmarked ? 'primary' : 'neutral'"
            :class="{ 'fill-current': isBookmarked }"
          />
        </button>
        
        <!-- シェアボタン -->
        <button
          v-if="showShare"
          :class="shareButtonClasses"
          @click.stop="handleShare"
          aria-label="シェア"
        >
          <BaseIcon name="Share" size="sm" color="neutral" />
        </button>
        
        <!-- 続きを読むボタン -->
        <BaseButton
          v-if="showReadMore"
          variant="outline"
          size="sm"
          @click.stop="handleReadMore"
          class="flex-1"
        >
          続きを読む
        </BaseButton>
      </div>
    </div>
  </BaseCard>
</template>

<script setup>
import { ref, computed } from 'vue'
import BaseCard from '@/components/base/BaseCard.vue'
import BaseImage from '@/components/base/BaseImage.vue'
import BaseBadge from '@/components/base/BaseBadge.vue'
import BaseButton from '@/components/base/BaseButton.vue'
import BaseIcon from '@/components/base/BaseIcon.vue'

const props = defineProps({
  // 記事データ
  article: {
    type: Object,
    required: true
  },
  
  // 表示設定
  layout: {
    type: String,
    default: 'vertical',
    validator: value => ['vertical', 'horizontal', 'minimal'].includes(value)
  },
  
  // 画像表示
  showImage: {
    type: Boolean,
    default: true
  },
  
  // 画像アスペクト比
  imageAspectRatio: {
    type: String,
    default: '16:9'
  },
  
  // 画像フィット
  imageObjectFit: {
    type: String,
    default: 'cover'
  },
  
  // クリック可能
  clickable: {
    type: Boolean,
    default: true
  },
  
  // カテゴリ表示
  showCategory: {
    type: Boolean,
    default: true
  },
  
  // カテゴリバッジ表示
  showCategoryBadge: {
    type: Boolean,
    default: true
  },
  
  // 抜粋表示
  showExcerpt: {
    type: Boolean,
    default: true
  },
  
  // タグ表示
  showTags: {
    type: Boolean,
    default: true
  },
  
  // 最大タグ表示数
  maxTagsShow: {
    type: Number,
    default: 3
  },
  
  // 著者表示
  showAuthor: {
    type: Boolean,
    default: true
  },
  
  // 日付表示
  showDate: {
    type: Boolean,
    default: true
  },
  
  // 読了時間表示
  showReadTime: {
    type: Boolean,
    default: true
  },
  
  // 統計情報表示
  showStats: {
    type: Boolean,
    default: false
  },
  
  // アクション表示
  showActions: {
    type: Boolean,
    default: false
  },
  
  // ブックマーク表示
  showBookmark: {
    type: Boolean,
    default: true
  },
  
  // シェア表示
  showShare: {
    type: Boolean,
    default: true
  },
  
  // 続きを読むボタン表示
  showReadMore: {
    type: Boolean,
    default: false
  },
  
  // コンパクトモード
  compact: {
    type: Boolean,
    default: false
  },
  
  // 抜粋文字数制限
  excerptLimit: {
    type: Number,
    default: 120
  }
})

const emit = defineEmits([
  'click',
  'image-click',
  'bookmark-toggle',
  'share',
  'read-more'
])

// リアクティブデータ
const isBookmarked = ref(props.article.isBookmarked || false)

// 計算されたプロパティ
const cardClasses = computed(() => {
  const classes = ['article-card group cursor-pointer']
  
  if (props.layout === 'horizontal') {
    classes.push('flex')
  } else if (props.layout === 'minimal') {
    classes.push('minimal')
  }
  
  if (props.compact) {
    classes.push('compact')
  }
  
  return classes.join(' ')
})

const contentClasses = computed(() => {
  const classes = ['p-4']
  
  if (props.layout === 'horizontal') {
    classes.push('flex-1')
  }
  
  if (props.compact) {
    classes.push('p-3')
  }
  
  return classes.join(' ')
})

const titleClasses = computed(() => {
  const classes = ['font-semibold text-neutral-900 mb-2 hover:text-primary-600 transition-colors']
  
  if (props.compact || props.layout === 'minimal') {
    classes.push('text-base line-clamp-2')
  } else {
    classes.push('text-lg line-clamp-3')
  }
  
  return classes.join(' ')
})

const excerptClasses = computed(() => {
  const classes = ['text-neutral-600 mb-3']
  
  if (props.compact) {
    classes.push('text-sm line-clamp-2')
  } else {
    classes.push('text-base line-clamp-3')
  }
  
  return classes.join(' ')
})

const categoryClasses = computed(() => {
  return 'text-sm font-medium text-primary-600 uppercase tracking-wide'
})

const tagClasses = computed(() => {
  return 'text-xs text-neutral-500 hover:text-primary-600 cursor-pointer transition-colors'
})

const metaClasses = computed(() => {
  const classes = ['flex items-center justify-between mb-2']
  
  if (props.compact) {
    classes.push('flex-col items-start gap-1')
  } else {
    classes.push('flex-wrap gap-2')
  }
  
  return classes.join(' ')
})

const statsClasses = computed(() => {
  return 'flex items-center gap-4 mb-3 text-sm'
})

const actionsClasses = computed(() => {
  return 'flex items-center justify-between gap-2'
})

const bookmarkButtonClasses = computed(() => {
  return [
    'p-2 rounded-lg hover:bg-neutral-100',
    'transition-colors focus:outline-none focus:ring-2 focus:ring-primary-500'
  ].join(' ')
})

const shareButtonClasses = computed(() => {
  return [
    'p-2 rounded-lg hover:bg-neutral-100',
    'transition-colors focus:outline-none focus:ring-2 focus:ring-primary-500'
  ].join(' ')
})

const truncatedExcerpt = computed(() => {
  if (!props.article.excerpt) return ''
  if (props.article.excerpt.length <= props.excerptLimit) {
    return props.article.excerpt
  }
  return props.article.excerpt.substring(0, props.excerptLimit) + '...'
})

// メソッド
const handleCardClick = () => {
  if (props.clickable) {
    emit('click', props.article)
  }
}

const handleImageClick = () => {
  emit('image-click', props.article)
}

const toggleBookmark = () => {
  isBookmarked.value = !isBookmarked.value
  emit('bookmark-toggle', {
    article: props.article,
    isBookmarked: isBookmarked.value
  })
}

const handleShare = () => {
  emit('share', props.article)
}

const handleReadMore = () => {
  emit('read-more', props.article)
}

const formatDate = (date) => {
  return new Intl.DateTimeFormat('ja-JP', {
    year: 'numeric',
    month: 'short',
    day: 'numeric'
  }).format(new Date(date))
}

const formatNumber = (num) => {
  if (num >= 1000000) {
    return (num / 1000000).toFixed(1) + 'M'
  } else if (num >= 1000) {
    return (num / 1000).toFixed(1) + 'K'
  }
  return num.toString()
}

const getCategoryVariant = (category) => {
  // カテゴリに応じたバリアント決定ロジック
  const variants = ['primary', 'success', 'warning', 'info', 'error']
  const hash = category.name.split('').reduce((a, b) => {
    a = ((a << 5) - a) + b.charCodeAt(0)
    return a & a
  }, 0)
  return variants[Math.abs(hash) % variants.length]
}
</script>

<style scoped>
.article-card {
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.article-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.line-clamp-3 {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.minimal {
  /* ミニマルレイアウト用のスタイル */
}

.compact {
  /* コンパクトモード用のスタイル */
}
</style>