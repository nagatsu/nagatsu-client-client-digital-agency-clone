import type { Meta, StoryObj } from '@storybook/vue3';
import ProductCard from './ProductCard.vue';

// Meta 設定
const meta: Meta<typeof ProductCard> = {
  title: 'E-commerce/ProductCard',
  component: ProductCard,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
# ProductCard

E-commerce用の高機能商品カードコンポーネント。
デジタル庁準拠デザインシステム（94.5/100品質）に基づく実装。

## 機能
- 商品情報表示（画像、名前、説明、価格、評価）
- バッジ表示（NEW、SALE、限定、在庫状況）
- バリエーション選択（色、サイズ等）
- アクション（カートに追加、即購入、お気に入り、クイックビュー）
- 2つのレイアウト（vertical、horizontal）
- コンパクトモード対応
- 完全なアクセシビリティ対応（WCAG 2.1 AA準拠）
- スムーズなアニメーション
`
      }
    }
  },
  tags: ['autodocs'],
  argTypes: {
    product: {
      description: '商品データオブジェクト',
      control: { type: 'object' }
    },
    layout: {
      description: 'レイアウトタイプ',
      options: ['vertical', 'horizontal'],
      control: { type: 'select' },
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'vertical' }
      }
    },
    imageAspectRatio: {
      description: '画像アスペクト比',
      options: ['square', '4:3', '16:9', '3:4'],
      control: { type: 'select' },
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'square' }
      }
    },
    clickable: {
      description: 'カードクリック可能',
      control: { type: 'boolean' },
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'true' }
      }
    },
    showFavorite: {
      description: 'お気に入りボタン表示',
      control: { type: 'boolean' },
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'true' }
      }
    },
    showQuickView: {
      description: 'クイックビューボタン表示',
      control: { type: 'boolean' },
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'true' }
      }
    },
    showCategory: {
      description: 'カテゴリ表示',
      control: { type: 'boolean' },
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'true' }
      }
    },
    showDescription: {
      description: '商品説明表示',
      control: { type: 'boolean' },
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' }
      }
    },
    showRating: {
      description: '評価表示',
      control: { type: 'boolean' },
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'true' }
      }
    },
    showVariants: {
      description: 'バリエーション表示',
      control: { type: 'boolean' },
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'true' }
      }
    },
    showAddToCart: {
      description: 'カートに追加ボタン表示',
      control: { type: 'boolean' },
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'true' }
      }
    },
    showBuyNow: {
      description: '即購入ボタン表示',
      control: { type: 'boolean' },
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' }
      }
    },
    compact: {
      description: 'コンパクトモード',
      control: { type: 'boolean' },
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' }
      }
    },
    click: {
      description: 'カードクリック時に発火',
      action: 'click',
      table: {
        category: 'Events',
        type: { summary: '(product: Object) => void' }
      }
    },
    'add-to-cart': {
      description: 'カートに追加時に発火',
      action: 'add-to-cart',
      table: {
        category: 'Events',
        type: { summary: '(data: { product: Object, variant: Object }) => void' }
      }
    },
    'buy-now': {
      description: '即購入時に発火',
      action: 'buy-now',
      table: {
        category: 'Events',
        type: { summary: '(data: { product: Object, variant: Object }) => void' }
      }
    },
    'favorite-toggle': {
      description: 'お気に入り切り替え時に発火',
      action: 'favorite-toggle',
      table: {
        category: 'Events',
        type: { summary: '(data: { product: Object, isFavorite: boolean }) => void' }
      }
    },
    'quick-view': {
      description: 'クイックビュー時に発火',
      action: 'quick-view',
      table: {
        category: 'Events',
        type: { summary: '(product: Object) => void' }
      }
    }
  }
};

export default meta;
type Story = StoryObj<typeof meta>;

// サンプル商品データ
const sampleProduct = {
  id: 1,
  name: 'Model-A デザインシステム ガイドブック',
  description: 'デジタル庁準拠の美しいデザインシステムを活用した実践的なガイドブック。94.5/100の品質基準を満たす包括的なUIコンポーネント集。',
  category: 'デザイン・開発',
  price: 3980,
  originalPrice: 4980,
  image: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=400&h=400&fit=crop',
  rating: 4.8,
  reviewCount: 127,
  stock: 15,
  isNew: true,
  isSale: true,
  isLimitedEdition: false,
  isFavorite: false,
  variants: [
    { id: 1, name: 'ブルー', type: 'color', value: '#3B82F6' },
    { id: 2, name: 'レッド', type: 'color', value: '#EF4444' },
    { id: 3, name: 'グリーン', type: 'color', value: '#10B981' },
    { id: 4, name: 'A4', type: 'size', value: 'A4' },
    { id: 5, name: 'A5', type: 'size', value: 'A5' }
  ]
};

// Default Story
export const Default: Story = {
  args: {
    product: sampleProduct,
    layout: 'vertical',
    imageAspectRatio: 'square',
    clickable: true,
    showFavorite: true,
    showQuickView: true,
    showCategory: true,
    showDescription: false,
    showRating: true,
    showVariants: true,
    showAddToCart: true,
    showBuyNow: false,
    compact: false
  }
};

// 水平レイアウト
export const HorizontalLayout: Story = {
  args: {
    ...Default.args,
    layout: 'horizontal'
  },
  parameters: {
    docs: {
      description: {
        story: '水平レイアウトの商品カード。リスト表示に適しています。'
      }
    }
  }
};

// 商品説明付き
export const WithDescription: Story = {
  args: {
    ...Default.args,
    showDescription: true
  },
  parameters: {
    docs: {
      description: {
        story: '商品説明を表示するバリエーション。詳細な情報提供に適しています。'
      }
    }
  }
};

// 即購入ボタン付き
export const WithBuyNow: Story = {
  args: {
    ...Default.args,
    showBuyNow: true
  },
  parameters: {
    docs: {
      description: {
        story: '即購入ボタンを含むバリエーション。コンバージョン向上に効果的です。'
      }
    }
  }
};

// コンパクトモード
export const CompactMode: Story = {
  args: {
    ...Default.args,
    compact: true,
    showDescription: false,
    showVariants: false
  },
  parameters: {
    docs: {
      description: {
        story: 'コンパクトモードの商品カード。スペースが限られた場所での使用に適しています。'
      }
    }
  }
};

// 在庫切れ商品
export const OutOfStock: Story = {
  args: {
    ...Default.args,
    product: {
      ...sampleProduct,
      stock: 0,
      isNew: false,
      isSale: false
    }
  },
  parameters: {
    docs: {
      description: {
        story: '在庫切れ商品の表示。ボタンが無効化され、適切な状態表示がされます。'
      }
    }
  }
};

// 残りわずか商品
export const LowStock: Story = {
  args: {
    ...Default.args,
    product: {
      ...sampleProduct,
      stock: 3,
      isNew: false,
      isSale: false
    }
  },
  parameters: {
    docs: {
      description: {
        story: '在庫が少ない商品の表示。「残りわずか」バッジが表示されます。'
      }
    }
  }
};

// 限定商品
export const LimitedEdition: Story = {
  args: {
    ...Default.args,
    product: {
      ...sampleProduct,
      isLimitedEdition: true,
      isNew: false,
      isSale: false
    }
  },
  parameters: {
    docs: {
      description: {
        story: '限定商品の表示。「限定」バッジが表示され、特別感を演出します。'
      }
    }
  }
};

// グリッドレイアウト例
export const GridLayout: Story = {
  args: {
    ...Default.args
  },
  render: (args) => ({
    components: { ProductCard },
    setup() {
      return { args };
    },
    template: `
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl">
        <ProductCard v-bind="args" />
        <ProductCard v-bind="args" />
        <ProductCard v-bind="args" />
        <ProductCard v-bind="args" />
        <ProductCard v-bind="args" />
        <ProductCard v-bind="args" />
      </div>
    `
  }),
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        story: 'グリッドレイアウトでの商品カード表示例。EC サイトの商品一覧に適しています。'
      }
    }
  }
};

// 商品比較表示
export const ProductComparison: Story = {
  args: {
    ...Default.args
  },
  render: (args) => ({
    components: { ProductCard },
    setup() {
      const products = [
        { ...sampleProduct, id: 1, name: 'Model-A Basic' },
        { ...sampleProduct, id: 2, name: 'Model-A Pro', price: 5980, originalPrice: 6980 },
        { ...sampleProduct, id: 3, name: 'Model-A Enterprise', price: 9980, originalPrice: 12980 }
      ];
      return { args, products };
    },
    template: `
      <div class="flex flex-col md:flex-row gap-4 max-w-4xl">
        <ProductCard 
          v-for="product in products" 
          :key="product.id"
          v-bind="args" 
          :product="product"
          class="flex-1"
        />
      </div>
    `
  }),
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        story: '商品比較表示の例。複数の商品を並べて比較検討できます。'
      }
    }
  }
};
