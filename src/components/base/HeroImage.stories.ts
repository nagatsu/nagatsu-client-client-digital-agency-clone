import type { Meta, StoryObj } from '@storybook/vue3'
import HeroImage from './HeroImage.vue'

const meta: Meta<typeof HeroImage> = {
  title: 'Components/Base/HeroImage',
  component: HeroImage,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: `
背景画像や動画をサポートするヒーロー画像コンポーネント。

## 主な機能
- 背景画像・動画対応
- オーバーレイ効果
- 複数画像スライドショー
- 自動切り替え機能
- CTA ボタン表示
- 7種類の高さ設定
- スクロールインジケーター
- レスポンシブ対応
        `
      }
    }
  },
  argTypes: {
    src: {
      control: 'text',
      description: '画像URL（単一画像の場合）'
    },
    images: {
      control: 'object',
      description: '複数画像配列'
    },
    alt: {
      control: 'text',
      description: '代替テキスト'
    },
    height: {
      control: 'select',
      options: ['sm', 'md', 'lg', 'xl', '2xl', 'screen', 'auto'],
      description: '高さ設定'
    },
    objectFit: {
      control: 'select',
      options: ['cover', 'contain', 'fill', 'none', 'scale-down'],
      description: 'オブジェクトフィット'
    },
    placeholder: {
      control: 'boolean',
      description: 'プレースホルダー表示'
    },
    placeholderText: {
      control: 'text',
      description: 'プレースホルダーテキスト'
    },
    overlay: {
      control: 'boolean',
      description: 'オーバーレイ表示'
    },
    overlayOpacity: {
      control: { type: 'range', min: 0, max: 1, step: 0.1 },
      description: 'オーバーレイ透明度'
    },
    overlayColor: {
      control: 'select',
      options: ['black', 'white', 'primary', 'neutral'],
      description: 'オーバーレイ色'
    },
    title: {
      control: 'text',
      description: 'タイトル'
    },
    subtitle: {
      control: 'text',
      description: 'サブタイトル'
    },
    textColor: {
      control: 'select',
      options: ['white', 'black', 'neutral'],
      description: 'テキスト色'
    },
    textAlign: {
      control: 'select',
      options: ['left', 'center', 'right'],
      description: 'テキスト配置'
    },
    primaryAction: {
      control: 'object',
      description: 'プライマリボタン設定'
    },
    secondaryAction: {
      control: 'object',
      description: 'セカンダリボタン設定'
    },
    showActions: {
      control: 'boolean',
      description: 'ボタン表示'
    },
    showScrollIndicator: {
      control: 'boolean',
      description: 'スクロールインジケーター表示'
    },
    showNavigation: {
      control: 'boolean',
      description: 'ナビゲーション表示'
    },
    showArrows: {
      control: 'boolean',
      description: '矢印ナビゲーション表示'
    },
    isVideo: {
      control: 'boolean',
      description: '動画モード'
    },
    autoplay: {
      control: 'boolean',
      description: '動画自動再生'
    },
    loop: {
      control: 'boolean',
      description: '動画ループ'
    },
    muted: {
      control: 'boolean',
      description: '動画ミュート'
    },
    poster: {
      control: 'text',
      description: '動画ポスター画像'
    },
    autoSlide: {
      control: 'boolean',
      description: '自動スライド'
    },
    slideInterval: {
      control: { type: 'number', min: 1000, max: 10000, step: 500 },
      description: 'スライド間隔（ms）'
    },
    contentPosition: {
      control: 'select',
      options: ['top', 'center', 'bottom'],
      description: 'コンテンツ配置'
    },
    contentMaxWidth: {
      control: 'select',
      options: ['sm', 'md', 'lg', 'xl', '2xl', '3xl', '4xl', '5xl', '6xl', '7xl'],
      description: 'コンテンツ最大幅'
    }
  }
}

export default meta
type Story = StoryObj<typeof HeroImage>

// 基本的なヒーロー画像
export const Default: Story = {
  args: {
    src: 'https://picsum.photos/1200/600?random=1',
    alt: 'ヒーロー画像',
    height: 'lg',
    title: '美しい風景',
    subtitle: '自然の魅力を体験してください',
    overlay: true,
    overlayOpacity: 0.4,
    overlayColor: 'black',
    textColor: 'white',
    textAlign: 'center',
    primaryAction: {
      text: '詳細を見る',
      variant: 'primary'
    },
    secondaryAction: {
      text: 'ギャラリー',
      variant: 'outline'
    },
    showActions: true,
    showScrollIndicator: false,
    contentPosition: 'center',
    contentMaxWidth: '4xl'
  }
}

// シンプルなヒーロー
export const Simple: Story = {
  args: {
    src: 'https://picsum.photos/1200/400?random=2',
    alt: 'シンプルヒーロー',
    height: 'md',
    title: 'シンプルなヒーロー',
    overlay: true,
    overlayOpacity: 0.3,
    textColor: 'white',
    showActions: false
  }
}

// フルスクリーンヒーロー
export const Fullscreen: Story = {
  args: {
    src: 'https://picsum.photos/1920/1080?random=3',
    alt: 'フルスクリーンヒーロー',
    height: 'screen',
    title: 'Welcome to Our Site',
    subtitle: 'Discover amazing experiences',
    overlay: true,
    overlayOpacity: 0.5,
    textColor: 'white',
    primaryAction: {
      text: 'Get Started',
      variant: 'primary',
      size: 'lg'
    },
    secondaryAction: {
      text: 'Learn More',
      variant: 'outline',
      size: 'lg'
    },
    showScrollIndicator: true,
    contentMaxWidth: '6xl'
  }
}

// 高さバリエーション
export const HeightVariations: Story = {
  render: () => ({
    components: { HeroImage },
    template: `
      <div class="space-y-4">
        <div>
          <h3 class="text-lg font-semibold mb-2">Small (sm)</h3>
          <HeroImage
            src="https://picsum.photos/1200/300?random=4"
            height="sm"
            title="小さなヒーロー"
            subtitle="コンパクトなサイズ"
            :overlay="true"
            text-color="white"
          />
        </div>
        <div>
          <h3 class="text-lg font-semibold mb-2">Medium (md)</h3>
          <HeroImage
            src="https://picsum.photos/1200/400?random=5"
            height="md"
            title="中程度のヒーロー"
            subtitle="標準的なサイズ"
            :overlay="true"
            text-color="white"
          />
        </div>
        <div>
          <h3 class="text-lg font-semibold mb-2">Large (lg)</h3>
          <HeroImage
            src="https://picsum.photos/1200/500?random=6"
            height="lg"
            title="大きなヒーロー"
            subtitle="インパクトのあるサイズ"
            :overlay="true"
            text-color="white"
          />
        </div>
      </div>
    `
  })
}

// スライドショー
export const Slideshow: Story = {
  args: {
    images: [
      {
        src: 'https://picsum.photos/1200/600?random=7',
        alt: 'スライド 1'
      },
      {
        src: 'https://picsum.photos/1200/600?random=8',
        alt: 'スライド 2'
      },
      {
        src: 'https://picsum.photos/1200/600?random=9',
        alt: 'スライド 3'
      },
      {
        src: 'https://picsum.photos/1200/600?random=10',
        alt: 'スライド 4'
      }
    ],
    height: 'lg',
    title: 'フォトスライドショー',
    subtitle: '美しい瞬間をお楽しみください',
    overlay: true,
    overlayOpacity: 0.3,
    textColor: 'white',
    autoSlide: true,
    slideInterval: 4000,
    showNavigation: true,
    showArrows: true,
    primaryAction: {
      text: 'もっと見る',
      variant: 'primary'
    }
  }
}

// 手動スライドショー
export const ManualSlideshow: Story = {
  args: {
    ...Slideshow.args,
    autoSlide: false,
    title: '手動スライドショー',
    subtitle: '矢印やドットで操作してください'
  }
}

// テキスト配置バリエーション
export const TextAlignments: Story = {
  render: () => ({
    components: { HeroImage },
    template: `
      <div class="space-y-4">
        <div>
          <h3 class="text-lg font-semibold mb-2">Left Aligned</h3>
          <HeroImage
            src="https://picsum.photos/1200/300?random=11"
            height="sm"
            title="左寄せタイトル"
            subtitle="左に配置されたテキスト"
            text-align="left"
            :overlay="true"
            text-color="white"
          />
        </div>
        <div>
          <h3 class="text-lg font-semibold mb-2">Center Aligned</h3>
          <HeroImage
            src="https://picsum.photos/1200/300?random=12"
            height="sm"
            title="中央寄せタイトル"
            subtitle="中央に配置されたテキスト"
            text-align="center"
            :overlay="true"
            text-color="white"
          />
        </div>
        <div>
          <h3 class="text-lg font-semibold mb-2">Right Aligned</h3>
          <HeroImage
            src="https://picsum.photos/1200/300?random=13"
            height="sm"
            title="右寄せタイトル"
            subtitle="右に配置されたテキスト"
            text-align="right"
            :overlay="true"
            text-color="white"
          />
        </div>
      </div>
    `
  })
}

// オーバーレイバリエーション
export const OverlayVariations: Story = {
  render: () => ({
    components: { HeroImage },
    template: `
      <div class="space-y-4">
        <div>
          <h3 class="text-lg font-semibold mb-2">No Overlay</h3>
          <HeroImage
            src="https://picsum.photos/1200/300?random=14"
            height="sm"
            title="オーバーレイなし"
            subtitle="背景画像そのまま"
            :overlay="false"
            text-color="white"
          />
        </div>
        <div>
          <h3 class="text-lg font-semibold mb-2">Light Overlay</h3>
          <HeroImage
            src="https://picsum.photos/1200/300?random=15"
            height="sm"
            title="薄いオーバーレイ"
            subtitle="透明度20%"
            :overlay="true"
            :overlay-opacity="0.2"
            text-color="white"
          />
        </div>
        <div>
          <h3 class="text-lg font-semibold mb-2">Dark Overlay</h3>
          <HeroImage
            src="https://picsum.photos/1200/300?random=16"
            height="sm"
            title="濃いオーバーレイ"
            subtitle="透明度70%"
            :overlay="true"
            :overlay-opacity="0.7"
            text-color="white"
          />
        </div>
      </div>
    `
  })
}

// プレースホルダー
export const Placeholder: Story = {
  args: {
    placeholder: true,
    placeholderText: 'ヒーロー画像',
    height: 'lg',
    title: 'プレースホルダーヒーロー',
    subtitle: '画像が読み込まれるまでの表示',
    textColor: 'neutral',
    primaryAction: {
      text: 'アクション',
      variant: 'primary'
    }
  }
}

// 動画背景（注：実際の動画は表示されませんが、設定例として）
export const VideoBackground: Story = {
  args: {
    src: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
    isVideo: true,
    autoplay: true,
    loop: true,
    muted: true,
    poster: 'https://picsum.photos/1200/600?random=17',
    height: 'lg',
    title: '動画背景ヒーロー',
    subtitle: '動的な背景でインパクトを',
    overlay: true,
    overlayOpacity: 0.4,
    textColor: 'white',
    primaryAction: {
      text: '動画を見る',
      variant: 'primary'
    }
  }
}

// カスタムスロット
export const CustomContent: Story = {
  render: () => ({
    components: { HeroImage },
    template: `
      <HeroImage
        src="https://picsum.photos/1200/600?random=18"
        height="lg"
        :overlay="true"
        :overlay-opacity="0.5"
      >
        <div class="text-center text-white">
          <h1 class="text-6xl font-bold mb-4">Custom Content</h1>
          <p class="text-xl mb-8">スロットを使用したカスタムコンテンツ</p>
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <button class="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg">
              カスタムボタン 1
            </button>
            <button class="bg-transparent border-2 border-white text-white hover:bg-white hover:text-black px-6 py-3 rounded-lg">
              カスタムボタン 2
            </button>
          </div>
        </div>
      </HeroImage>
    `
  })
}