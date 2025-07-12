<template>
  <div class="space-y-8">
    <!-- ページヘッダー -->
    <div class="text-center">
      <h1 class="text-heading-1 font-bold text-neutral-900 mb-4">
        画像コンポーネント
      </h1>
      <p class="text-heading-6 text-neutral-600 max-w-3xl mx-auto">
        プレースホルダー、遅延読み込み、ギャラリー、ヒーロー画像など、
        画像表示に特化したコンポーネントライブラリです。
      </p>
    </div>

    <!-- 目次 -->
    <BaseCard>
      <div class="p-6">
        <h2 class="text-heading-4 font-semibold text-neutral-900 mb-4">
          コンポーネント一覧
        </h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
          <BaseButton
            @click="scrollToSection('base-image')"
            variant="outline"
            size="sm"
            class="justify-start"
          >
            <BaseIcon name="Photo" size="sm" class="mr-2" />
            BaseImage
          </BaseButton>
          <BaseButton
            @click="scrollToSection('image-gallery')"
            variant="outline"
            size="sm"
            class="justify-start"
          >
            <BaseIcon name="Photo" size="sm" class="mr-2" />
            ImageGallery
          </BaseButton>
          <BaseButton
            @click="scrollToSection('hero-image')"
            variant="outline"
            size="sm"
            class="justify-start"
          >
            <BaseIcon name="RectangleStack" size="sm" class="mr-2" />
            HeroImage
          </BaseButton>
        </div>
      </div>
    </BaseCard>

    <!-- BaseImage コンポーネント -->
    <div id="base-image">
      <BaseCard>
        <div class="p-6">
          <div class="flex items-center justify-between mb-4">
            <h2 class="text-heading-4 font-semibold text-neutral-900">
              BaseImage
            </h2>
            <BaseBadge text="基本" variant="primary" />
          </div>
          <p class="text-body-sm text-neutral-600 mb-6">
            プレースホルダー、エラーハンドリング、遅延読み込み、バッジ表示など
            高機能な画像表示コンポーネントです。
          </p>

          <div class="space-y-6">
            <!-- 基本的な使用例 -->
            <div>
              <h3 class="text-heading-5 font-medium text-neutral-900 mb-3">基本的な使用例</h3>
              <div class="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                <BaseImage
                  src="https://picsum.photos/200/200?random=1"
                  alt="サンプル画像 1"
                  size="md"
                  rounded="lg"
                />
                <BaseImage
                  src="https://picsum.photos/200/200?random=2"
                  alt="サンプル画像 2"
                  size="md"
                  rounded="lg"
                  badge="新着"
                />
                <BaseImage
                  placeholder
                  placeholderText="プレースホルダー"
                  size="md"
                  rounded="lg"
                />
                <BaseImage
                  src="invalid-url"
                  fallbackSrc="https://picsum.photos/200/200?random=3"
                  alt="フォールバック例"
                  size="md"
                  rounded="lg"
                />
              </div>
            </div>

            <!-- アスペクト比の例 -->
            <div>
              <h3 class="text-heading-5 font-medium text-neutral-900 mb-3">アスペクト比</h3>
              <div class="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                <div>
                  <BaseImage
                    src="https://picsum.photos/400/400?random=4"
                    alt="正方形"
                    aspect-ratio="square"
                    size="full"
                    rounded="lg"
                  />
                  <p class="text-xs text-neutral-600 mt-2 text-center">Square (1:1)</p>
                </div>
                <div>
                  <BaseImage
                    src="https://picsum.photos/400/225?random=5"
                    alt="16:9"
                    aspect-ratio="16:9"
                    size="full"
                    rounded="lg"
                  />
                  <p class="text-xs text-neutral-600 mt-2 text-center">Video (16:9)</p>
                </div>
                <div>
                  <BaseImage
                    src="https://picsum.photos/400/300?random=6"
                    alt="4:3"
                    aspect-ratio="4:3"
                    size="full"
                    rounded="lg"
                  />
                  <p class="text-xs text-neutral-600 mt-2 text-center">Classic (4:3)</p>
                </div>
                <div>
                  <BaseImage
                    src="https://picsum.photos/400/267?random=7"
                    alt="3:2"
                    aspect-ratio="3:2"
                    size="full"
                    rounded="lg"
                  />
                  <p class="text-xs text-neutral-600 mt-2 text-center">Photo (3:2)</p>
                </div>
              </div>
            </div>

            <!-- サイズバリエーション -->
            <div>
              <h3 class="text-heading-5 font-medium text-neutral-900 mb-3">サイズバリエーション</h3>
              <div class="flex items-center gap-4 mb-4">
                <BaseImage
                  src="https://picsum.photos/200/200?random=8"
                  alt="XS サイズ"
                  size="xs"
                  rounded="lg"
                />
                <BaseImage
                  src="https://picsum.photos/200/200?random=9"
                  alt="SM サイズ"
                  size="sm"
                  rounded="lg"
                />
                <BaseImage
                  src="https://picsum.photos/200/200?random=10"
                  alt="MD サイズ"
                  size="md"
                  rounded="lg"
                />
                <BaseImage
                  src="https://picsum.photos/200/200?random=11"
                  alt="LG サイズ"
                  size="lg"
                  rounded="lg"
                />
              </div>
            </div>
          </div>
        </div>
      </BaseCard>
    </div>

    <!-- ImageGallery コンポーネント -->
    <div id="image-gallery">
      <BaseCard>
        <div class="p-6">
          <div class="flex items-center justify-between mb-4">
            <h2 class="text-heading-4 font-semibold text-neutral-900">
              ImageGallery
            </h2>
            <BaseBadge text="高機能" variant="success" />
          </div>
          <p class="text-body-sm text-neutral-600 mb-6">
            グリッド、メイソンリー、カルーセル表示に対応した画像ギャラリーコンポーネント。
            ライトボックス機能、フィルタリング、検索機能を搭載しています。
          </p>

          <div class="space-y-6">
            <!-- ギャラリー例 -->
            <div>
              <h3 class="text-heading-5 font-medium text-neutral-900 mb-3">ギャラリー表示</h3>
              <ImageGallery
                :images="galleryImages"
                title="サンプルギャラリー"
                description="レイアウト切り替え可能なギャラリーコンポーネント"
                :show-header="true"
                :show-controls="true"
                :show-captions="true"
                aspect-ratio="16:9"
                rounded="lg"
              />
            </div>
          </div>
        </div>
      </BaseCard>
    </div>

    <!-- HeroImage コンポーネント -->
    <div id="hero-image">
      <BaseCard>
        <div class="p-6">
          <div class="flex items-center justify-between mb-4">
            <h2 class="text-heading-4 font-semibold text-neutral-900">
              HeroImage
            </h2>
            <BaseBadge text="レイアウト" variant="warning" />
          </div>
          <p class="text-body-sm text-neutral-600 mb-6">
            背景画像や動画をサポートするヒーロー画像コンポーネント。
            オーバーレイ、タイトル、ボタンなどのコンテンツ表示機能付きです。
          </p>

          <div class="space-y-6">
            <div>
              <h3 class="text-heading-5 font-medium text-neutral-900 mb-3">基本的なヒーロー画像</h3>
              <HeroImage
                src="https://picsum.photos/1200/600?random=20"
                alt="ヒーロー画像例"
                height="lg"
                title="美しい風景"
                subtitle="自然の魅力を体験してください"
                :overlay="true"
                overlay-opacity="0.4"
                text-color="white"
                :primary-action="{
                  text: '詳細を見る',
                  variant: 'primary'
                }"
                :secondary-action="{
                  text: 'ギャラリー',
                  variant: 'outline'
                }"
                @action="handleHeroAction"
              />
            </div>

            <div>
              <h3 class="text-heading-5 font-medium text-neutral-900 mb-3">複数画像のスライドショー</h3>
              <HeroImage
                :images="heroImages"
                height="md"
                title="フォトスライドショー"
                subtitle="美しい瞬間をお楽しみください"
                :overlay="true"
                overlay-opacity="0.3"
                text-color="white"
                :auto-slide="true"
                :slide-interval="4000"
                :show-navigation="true"
                :show-arrows="true"
                @slide-change="handleSlideChange"
              />
            </div>

            <div>
              <h3 class="text-heading-5 font-medium text-neutral-900 mb-3">高さバリエーション</h3>
              <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                <HeroImage
                  src="https://picsum.photos/600/300?random=21"
                  alt="小さなヒーロー"
                  height="sm"
                  title="コンパクトヒーロー"
                  subtitle="小さなスペースに最適"
                  :overlay="true"
                  text-color="white"
                />
                <HeroImage
                  src="https://picsum.photos/600/400?random=22"
                  alt="中程度のヒーロー"
                  height="md"
                  title="標準ヒーロー"
                  subtitle="バランスの取れたサイズ"
                  :overlay="true"
                  text-color="white"
                />
              </div>
            </div>
          </div>
        </div>
      </BaseCard>
    </div>

    <!-- 技術仕様 -->
    <BaseCard>
      <div class="p-6">
        <h2 class="text-heading-4 font-semibold text-neutral-900 mb-4">
          技術仕様
        </h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <h3 class="text-heading-5 font-medium text-neutral-900 mb-2">BaseImage</h3>
            <ul class="text-body-sm text-neutral-600 space-y-1">
              <li>• プレースホルダー表示</li>
              <li>• 遅延読み込み対応</li>
              <li>• エラーハンドリング</li>
              <li>• フォールバック画像</li>
              <li>• バッジ・オーバーレイ表示</li>
              <li>• 6種類のアスペクト比</li>
              <li>• 6種類のサイズ</li>
            </ul>
          </div>
          <div>
            <h3 class="text-heading-5 font-medium text-neutral-900 mb-2">ImageGallery</h3>
            <ul class="text-body-sm text-neutral-600 space-y-1">
              <li>• 3種類のレイアウト</li>
              <li>• ライトボックス機能</li>
              <li>• キーボードナビゲーション</li>
              <li>• レスポンシブ対応</li>
              <li>• 検索・フィルター</li>
              <li>• ページネーション</li>
              <li>• カスタマイズ可能</li>
            </ul>
          </div>
          <div>
            <h3 class="text-heading-5 font-medium text-neutral-900 mb-2">HeroImage</h3>
            <ul class="text-body-sm text-neutral-600 space-y-1">
              <li>• 背景画像・動画対応</li>
              <li>• オーバーレイ効果</li>
              <li>• 複数画像スライド</li>
              <li>• 自動切り替え</li>
              <li>• CTA ボタン</li>
              <li>• 7種類の高さ設定</li>
              <li>• レスポンシブ対応</li>
            </ul>
          </div>
        </div>
      </div>
    </BaseCard>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import BaseCard from '@/components/base/BaseCard.vue'
import BaseBadge from '@/components/base/BaseBadge.vue'
import BaseButton from '@/components/base/BaseButton.vue'
import BaseIcon from '@/components/base/BaseIcon.vue'
import BaseImage from '@/components/base/BaseImage.vue'
import ImageGallery from '@/components/base/ImageGallery.vue'
import HeroImage from '@/components/base/HeroImage.vue'

// サンプルデータ
const galleryImages = ref([
  {
    id: 1,
    src: 'https://picsum.photos/400/300?random=1',
    alt: '美しい風景 1',
    caption: '山間の静寂な湖'
  },
  {
    id: 2,
    src: 'https://picsum.photos/400/500?random=2',
    alt: '美しい風景 2',
    caption: '都市の夜景'
  },
  {
    id: 3,
    src: 'https://picsum.photos/400/350?random=3',
    alt: '美しい風景 3',
    caption: '海辺の夕日'
  },
  {
    id: 4,
    src: 'https://picsum.photos/400/280?random=4',
    alt: '美しい風景 4',
    caption: '森の小径'
  },
  {
    id: 5,
    src: 'https://picsum.photos/400/400?random=5',
    alt: '美しい風景 5',
    caption: '花畑の広がり'
  },
  {
    id: 6,
    src: 'https://picsum.photos/400/320?random=6',
    alt: '美しい風景 6',
    caption: '雪山の頂上'
  }
])

const heroImages = ref([
  {
    src: 'https://picsum.photos/1200/600?random=10',
    alt: 'スライド 1'
  },
  {
    src: 'https://picsum.photos/1200/600?random=11',
    alt: 'スライド 2'
  },
  {
    src: 'https://picsum.photos/1200/600?random=12',
    alt: 'スライド 3'
  }
])

// メソッド
const scrollToSection = (sectionId) => {
  const element = document.getElementById(sectionId)
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' })
  }
}

const handleHeroAction = (event) => {
  console.log('Hero action:', event)
}

const handleSlideChange = (index) => {
  console.log('Slide changed to:', index)
}
</script>