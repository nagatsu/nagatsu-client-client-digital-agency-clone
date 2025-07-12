<template>
  <div class="image-gallery">
    <!-- ヘッダー -->
    <div v-if="showHeader" class="mb-6">
      <h3 v-if="title" class="text-heading-5 font-semibold text-neutral-900 mb-2">
        {{ title }}
      </h3>
      <p v-if="description" class="text-body-sm text-neutral-600">
        {{ description }}
      </p>
    </div>

    <!-- ギャラリーコントロール -->
    <div v-if="showControls" class="flex items-center justify-between mb-4">
      <div class="flex items-center gap-2">
        <!-- レイアウト切り替え -->
        <div class="flex items-center border border-neutral-300 rounded-lg">
          <button
            :class="[
              'px-3 py-2 text-sm transition-colors',
              layout === 'grid' 
                ? 'bg-primary-100 text-primary-700' 
                : 'text-neutral-600 hover:text-neutral-900'
            ]"
            @click="layout = 'grid'"
          >
            <BaseIcon name="Squares2X2" size="sm" />
          </button>
          <button
            :class="[
              'px-3 py-2 text-sm transition-colors',
              layout === 'masonry' 
                ? 'bg-primary-100 text-primary-700' 
                : 'text-neutral-600 hover:text-neutral-900'
            ]"
            @click="layout = 'masonry'"
          >
            <BaseIcon name="Square2Stack" size="sm" />
          </button>
          <button
            :class="[
              'px-3 py-2 text-sm transition-colors',
              layout === 'carousel' 
                ? 'bg-primary-100 text-primary-700' 
                : 'text-neutral-600 hover:text-neutral-900'
            ]"
            @click="layout = 'carousel'"
          >
            <BaseIcon name="QueueList" size="sm" />
          </button>
        </div>

        <!-- グリッドサイズ調整 -->
        <div v-if="layout === 'grid'" class="flex items-center gap-2 ml-4">
          <BaseIcon name="ViewColumns" size="sm" color="neutral" />
          <input
            v-model="gridColumns"
            type="range"
            min="2"
            max="6"
            class="w-20"
          />
          <span class="text-sm text-neutral-600">{{ gridColumns }}列</span>
        </div>
      </div>

      <!-- 統計情報 -->
      <div class="text-sm text-neutral-600">
        {{ visibleImages.length }} / {{ images.length }} 枚
      </div>
    </div>

    <!-- ギャラリー表示エリア -->
    <div :class="galleryClasses">
      <!-- グリッドレイアウト -->
      <template v-if="layout === 'grid'">
        <div
          v-for="(image, index) in visibleImages"
          :key="image.id || index"
          class="group cursor-pointer"
          @click="openLightbox(index)"
        >
          <BaseImage
            :src="image.src"
            :alt="image.alt || `画像 ${index + 1}`"
            :aspect-ratio="aspectRatio"
            :rounded="rounded"
            :object-fit="objectFit"
            clickable
            class="transition-transform duration-200 group-hover:scale-105"
          />
          <div v-if="showCaptions && image.caption" class="mt-2 text-sm text-neutral-600">
            {{ image.caption }}
          </div>
        </div>
      </template>

      <!-- メイソンリーレイアウト -->
      <template v-if="layout === 'masonry'">
        <div
          v-for="(image, index) in visibleImages"
          :key="image.id || index"
          class="group cursor-pointer break-inside-avoid mb-4"
          @click="openLightbox(index)"
        >
          <BaseImage
            :src="image.src"
            :alt="image.alt || `画像 ${index + 1}`"
            aspect-ratio="auto"
            :rounded="rounded"
            :object-fit="objectFit"
            size="full"
            clickable
            class="transition-transform duration-200 group-hover:scale-105"
          />
          <div v-if="showCaptions && image.caption" class="mt-2 text-sm text-neutral-600 px-1">
            {{ image.caption }}
          </div>
        </div>
      </template>

      <!-- カルーセルレイアウト -->
      <template v-if="layout === 'carousel'">
        <div class="relative overflow-hidden">
          <div
            class="flex transition-transform duration-300 ease-in-out"
            :style="{ transform: `translateX(-${currentSlide * 100}%)` }"
          >
            <div
              v-for="(image, index) in visibleImages"
              :key="image.id || index"
              class="w-full flex-shrink-0"
            >
              <BaseImage
                :src="image.src"
                :alt="image.alt || `画像 ${index + 1}`"
                :aspect-ratio="aspectRatio"
                :rounded="rounded"
                :object-fit="objectFit"
                size="full"
                clickable
                @click="openLightbox(index)"
              />
              <div v-if="showCaptions && image.caption" class="mt-2 text-center text-sm text-neutral-600">
                {{ image.caption }}
              </div>
            </div>
          </div>

          <!-- カルーセルナビゲーション -->
          <button
            v-if="visibleImages.length > 1"
            class="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-80 hover:bg-opacity-100 rounded-full p-2 shadow-lg transition-all"
            @click="previousSlide"
          >
            <BaseIcon name="ChevronLeft" size="md" />
          </button>
          <button
            v-if="visibleImages.length > 1"
            class="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-80 hover:bg-opacity-100 rounded-full p-2 shadow-lg transition-all"
            @click="nextSlide"
          >
            <BaseIcon name="ChevronRight" size="md" />
          </button>

          <!-- インジケーター -->
          <div v-if="showIndicators && visibleImages.length > 1" class="flex justify-center mt-4 gap-2">
            <button
              v-for="(_, index) in visibleImages"
              :key="index"
              :class="[
                'w-2 h-2 rounded-full transition-colors',
                index === currentSlide ? 'bg-primary-600' : 'bg-neutral-300'
              ]"
              @click="currentSlide = index"
            />
          </div>
        </div>
      </template>
    </div>

    <!-- 空の状態 -->
    <div v-if="visibleImages.length === 0" class="text-center py-12">
      <BaseIcon name="Photo" size="2xl" color="neutral" class="mx-auto mb-4" />
      <h3 class="text-heading-5 font-medium text-neutral-900 mb-2">
        画像がありません
      </h3>
      <p class="text-body-sm text-neutral-600">
        画像を追加してギャラリーを表示してください。
      </p>
    </div>

    <!-- ライトボックス -->
    <div
      v-if="lightboxOpen"
      class="fixed inset-0 z-50 bg-black bg-opacity-90 flex items-center justify-center"
      @click="closeLightbox"
      @keydown.esc="closeLightbox"
    >
      <div class="relative max-w-4xl max-h-4xl w-full h-full flex items-center justify-center p-4">
        <!-- 画像 -->
        <img
          :src="currentImage.src"
          :alt="currentImage.alt"
          class="max-w-full max-h-full object-contain"
          @click.stop
        />

        <!-- ナビゲーション -->
        <button
          v-if="visibleImages.length > 1"
          class="absolute left-4 top-1/2 transform -translate-y-1/2 text-white hover:text-neutral-300 transition-colors"
          @click.stop="previousLightboxImage"
        >
          <BaseIcon name="ChevronLeft" size="xl" />
        </button>
        <button
          v-if="visibleImages.length > 1"
          class="absolute right-4 top-1/2 transform -translate-y-1/2 text-white hover:text-neutral-300 transition-colors"
          @click.stop="nextLightboxImage"
        >
          <BaseIcon name="ChevronRight" size="xl" />
        </button>

        <!-- 閉じるボタン -->
        <button
          class="absolute top-4 right-4 text-white hover:text-neutral-300 transition-colors"
          @click="closeLightbox"
        >
          <BaseIcon name="X" size="xl" />
        </button>

        <!-- 画像情報 -->
        <div v-if="currentImage.caption" class="absolute bottom-4 left-4 right-4 text-center text-white">
          <p class="text-lg">{{ currentImage.caption }}</p>
          <p class="text-sm text-neutral-300">{{ currentLightboxIndex + 1 }} / {{ visibleImages.length }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, watch, onMounted, onUnmounted } from 'vue'
import BaseImage from './BaseImage.vue'
import BaseIcon from './BaseIcon.vue'

const props = defineProps({
  // 画像データ
  images: {
    type: Array,
    required: true
  },
  
  // 基本設定
  title: {
    type: String,
    default: ''
  },
  
  description: {
    type: String,
    default: ''
  },
  
  // 表示制御
  showHeader: {
    type: Boolean,
    default: false
  },
  
  showControls: {
    type: Boolean,
    default: true
  },
  
  showCaptions: {
    type: Boolean,
    default: true
  },
  
  showIndicators: {
    type: Boolean,
    default: true
  },
  
  // レイアウト設定
  defaultLayout: {
    type: String,
    default: 'grid',
    validator: value => ['grid', 'masonry', 'carousel'].includes(value)
  },
  
  defaultColumns: {
    type: Number,
    default: 3
  },
  
  // 画像設定
  aspectRatio: {
    type: String,
    default: 'square'
  },
  
  rounded: {
    type: String,
    default: 'lg'
  },
  
  objectFit: {
    type: String,
    default: 'cover'
  },
  
  // ライトボックス
  lightbox: {
    type: Boolean,
    default: true
  },
  
  // 遅延読み込み
  lazyLoad: {
    type: Boolean,
    default: true
  },
  
  // 1ページあたりの表示数
  itemsPerPage: {
    type: Number,
    default: 0 // 0 = 全て表示
  }
})

const emit = defineEmits(['imageClick', 'layoutChange'])

// リアクティブデータ
const layout = ref(props.defaultLayout)
const gridColumns = ref(props.defaultColumns)
const currentSlide = ref(0)
const lightboxOpen = ref(false)
const currentLightboxIndex = ref(0)
const currentPage = ref(1)

// 計算されたプロパティ
const galleryClasses = computed(() => {
  const classes = []
  
  switch (layout.value) {
    case 'grid':
      classes.push('grid gap-4')
      const responsiveClasses = {
        2: 'grid-cols-2',
        3: 'grid-cols-2 md:grid-cols-3',
        4: 'grid-cols-2 md:grid-cols-3 lg:grid-cols-4',
        5: 'grid-cols-2 md:grid-cols-3 lg:grid-cols-5',
        6: 'grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6'
      }
      classes.push(responsiveClasses[gridColumns.value] || responsiveClasses[3])
      break
      
    case 'masonry':
      classes.push('columns-2 md:columns-3 lg:columns-4 gap-4')
      break
      
    case 'carousel':
      classes.push('relative')
      break
  }
  
  return classes.join(' ')
})

const visibleImages = computed(() => {
  if (props.itemsPerPage === 0) {
    return props.images
  }
  
  const start = (currentPage.value - 1) * props.itemsPerPage
  const end = start + props.itemsPerPage
  return props.images.slice(start, end)
})

const currentImage = computed(() => {
  return visibleImages.value[currentLightboxIndex.value] || {}
})

// メソッド
const openLightbox = (index) => {
  if (props.lightbox) {
    currentLightboxIndex.value = index
    lightboxOpen.value = true
    document.body.style.overflow = 'hidden'
  }
  emit('imageClick', visibleImages.value[index], index)
}

const closeLightbox = () => {
  lightboxOpen.value = false
  document.body.style.overflow = ''
}

const nextSlide = () => {
  if (currentSlide.value < visibleImages.value.length - 1) {
    currentSlide.value++
  } else {
    currentSlide.value = 0
  }
}

const previousSlide = () => {
  if (currentSlide.value > 0) {
    currentSlide.value--
  } else {
    currentSlide.value = visibleImages.value.length - 1
  }
}

const nextLightboxImage = () => {
  if (currentLightboxIndex.value < visibleImages.value.length - 1) {
    currentLightboxIndex.value++
  } else {
    currentLightboxIndex.value = 0
  }
}

const previousLightboxImage = () => {
  if (currentLightboxIndex.value > 0) {
    currentLightboxIndex.value--
  } else {
    currentLightboxIndex.value = visibleImages.value.length - 1
  }
}

// キーボードナビゲーション
const handleKeydown = (event) => {
  if (lightboxOpen.value) {
    switch (event.key) {
      case 'Escape':
        closeLightbox()
        break
      case 'ArrowLeft':
        previousLightboxImage()
        break
      case 'ArrowRight':
        nextLightboxImage()
        break
    }
  }
}

// ウォッチャー
watch(layout, (newLayout) => {
  emit('layoutChange', newLayout)
  currentSlide.value = 0
})

// ライフサイクル
onMounted(() => {
  document.addEventListener('keydown', handleKeydown)
})

onUnmounted(() => {
  document.removeEventListener('keydown', handleKeydown)
  document.body.style.overflow = ''
})
</script>

<style scoped>
/* メイソンリーレイアウトのサポート */
.columns-2 {
  column-count: 2;
}

.columns-3 {
  column-count: 3;
}

.columns-4 {
  column-count: 4;
}

.break-inside-avoid {
  break-inside: avoid;
}

/* ライトボックスのスムーズなアニメーション */
.image-gallery {
  position: relative;
}

/* カルーセルのスタイル調整 */
@media (max-width: 768px) {
  .columns-3 {
    column-count: 2;
  }
  
  .columns-4 {
    column-count: 2;
  }
}
</style>