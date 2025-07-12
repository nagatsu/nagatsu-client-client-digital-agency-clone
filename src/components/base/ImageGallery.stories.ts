import type { Meta, StoryObj } from '@storybook/vue3'
import ImageGallery from './ImageGallery.vue'

const meta: Meta<typeof ImageGallery> = {
  title: 'Components/Base/ImageGallery',
  component: ImageGallery,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: `
グリッド、メイソンリー、カルーセル表示に対応した画像ギャラリーコンポーネント。

## 主な機能
- 3種類のレイアウト（グリッド、メイソンリー、カルーセル）
- ライトボックス機能
- キーボードナビゲーション
- レスポンシブ対応
- 検索・フィルター機能
- レイアウト切り替え
- カスタマイズ可能な表示設定
        `
      }
    }
  },
  argTypes: {
    images: {
      control: 'object',
      description: '画像データ配列'
    },
    title: {
      control: 'text',
      description: 'ギャラリータイトル'
    },
    description: {
      control: 'text',
      description: 'ギャラリー説明'
    },
    showHeader: {
      control: 'boolean',
      description: 'ヘッダー表示'
    },
    showControls: {
      control: 'boolean',
      description: 'コントロール表示'
    },
    showCaptions: {
      control: 'boolean',
      description: 'キャプション表示'
    },
    showIndicators: {
      control: 'boolean',
      description: 'インジケーター表示'
    },
    defaultLayout: {
      control: 'select',
      options: ['grid', 'masonry', 'carousel'],
      description: 'デフォルトレイアウト'
    },
    defaultColumns: {
      control: { type: 'range', min: 2, max: 6, step: 1 },
      description: 'デフォルトカラム数'
    },
    aspectRatio: {
      control: 'select',
      options: ['auto', 'square', '16:9', '4:3', '3:2', '21:9'],
      description: 'アスペクト比'
    },
    rounded: {
      control: 'select',
      options: ['none', 'sm', 'md', 'lg', 'xl', 'full'],
      description: '角丸'
    },
    objectFit: {
      control: 'select',
      options: ['cover', 'contain', 'fill', 'none', 'scale-down'],
      description: 'オブジェクトフィット'
    },
    lightbox: {
      control: 'boolean',
      description: 'ライトボックス機能'
    },
    lazyLoad: {
      control: 'boolean',
      description: '遅延読み込み'
    },
    itemsPerPage: {
      control: { type: 'number', min: 0, max: 20 },
      description: '1ページあたりの表示数（0=全て）'
    }
  }
}

export default meta
type Story = StoryObj<typeof ImageGallery>

// サンプル画像データ
const sampleImages = [
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
  },
  {
    id: 7,
    src: 'https://picsum.photos/400/380?random=7',
    alt: '美しい風景 7',
    caption: '古い街並み'
  },
  {
    id: 8,
    src: 'https://picsum.photos/400/450?random=8',
    alt: '美しい風景 8',
    caption: '川のせせらぎ'
  }
]

// 基本的なグリッドギャラリー
export const Default: Story = {
  args: {
    images: sampleImages,
    title: 'フォトギャラリー',
    description: 'レイアウト切り替え可能なギャラリーコンポーネント',
    showHeader: true,
    showControls: true,
    showCaptions: true,
    showIndicators: true,
    defaultLayout: 'grid',
    defaultColumns: 3,
    aspectRatio: 'square',
    rounded: 'lg',
    objectFit: 'cover',
    lightbox: true,
    lazyLoad: true,
    itemsPerPage: 0
  }
}

// メイソンリーレイアウト
export const MasonryLayout: Story = {
  args: {
    ...Default.args,
    defaultLayout: 'masonry',
    aspectRatio: 'auto',
    title: 'メイソンリーギャラリー',
    description: '高さが異なる画像を美しく配置します'
  }
}

// カルーセルレイアウト
export const CarouselLayout: Story = {
  args: {
    ...Default.args,
    defaultLayout: 'carousel',
    aspectRatio: '16:9',
    title: 'カルーセルギャラリー',
    description: '画像を一枚ずつスライド表示します'
  }
}

// ヘッダーなし・シンプル
export const Simple: Story = {
  args: {
    images: sampleImages.slice(0, 6),
    showHeader: false,
    showControls: false,
    showCaptions: false,
    defaultLayout: 'grid',
    defaultColumns: 3,
    aspectRatio: 'square',
    rounded: 'md',
    lightbox: true
  }
}

// 大きなグリッド
export const LargeGrid: Story = {
  args: {
    ...Default.args,
    defaultColumns: 2,
    aspectRatio: '16:9',
    title: '大きなグリッド',
    description: '2カラムの大きな画像表示'
  }
}

// 小さなグリッド
export const SmallGrid: Story = {
  args: {
    ...Default.args,
    defaultColumns: 5,
    aspectRatio: 'square',
    title: '小さなグリッド',
    description: '5カラムのコンパクト表示'
  }
}

// ライトボックスなし
export const NoLightbox: Story = {
  args: {
    ...Default.args,
    lightbox: false,
    title: 'ライトボックスなし',
    description: 'クリックしても拡大表示されません'
  }
}

// ページネーション付き
export const WithPagination: Story = {
  args: {
    ...Default.args,
    itemsPerPage: 6,
    title: 'ページネーション付き',
    description: '6枚ずつ表示するページネーション'
  }
}

// 円形画像
export const CircularImages: Story = {
  args: {
    images: sampleImages.slice(0, 6),
    showHeader: true,
    showControls: false,
    showCaptions: true,
    defaultLayout: 'grid',
    defaultColumns: 3,
    aspectRatio: 'square',
    rounded: 'full',
    title: '円形ギャラリー',
    description: '円形にクロップされた画像ギャラリー'
  }
}

// 大量の画像
export const ManyImages: Story = {
  args: {
    images: Array.from({ length: 24 }, (_, i) => ({
      id: i + 1,
      src: `https://picsum.photos/400/300?random=${i + 100}`,
      alt: `画像 ${i + 1}`,
      caption: `画像 ${i + 1} のキャプション`
    })),
    title: '大量画像ギャラリー',
    description: '24枚の画像を表示するギャラリー',
    showHeader: true,
    showControls: true,
    showCaptions: true,
    defaultLayout: 'grid',
    defaultColumns: 4,
    aspectRatio: 'square',
    rounded: 'lg'
  }
}

// レスポンシブテスト
export const ResponsiveTest: Story = {
  args: {
    ...Default.args,
    title: 'レスポンシブテスト',
    description: 'ブラウザサイズを変更してレスポンシブ動作を確認してください'
  },
  parameters: {
    viewport: {
      viewports: {
        mobile: {
          name: 'Mobile',
          styles: {
            width: '375px',
            height: '667px'
          }
        },
        tablet: {
          name: 'Tablet',
          styles: {
            width: '768px',
            height: '1024px'
          }
        },
        desktop: {
          name: 'Desktop',
          styles: {
            width: '1024px',
            height: '768px'
          }
        }
      }
    }
  }
}