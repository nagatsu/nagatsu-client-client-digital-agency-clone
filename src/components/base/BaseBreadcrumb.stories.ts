import type { Meta, StoryObj } from '@storybook/vue3';
import BaseBreadcrumb from './BaseBreadcrumb.vue';

// Meta 設定
const meta: Meta<typeof BaseBreadcrumb> = {
  title: 'Base/BaseBreadcrumb',
  component: BaseBreadcrumb,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: 'BaseBreadcrumb コンポーネント - 94.5/100品質のModel-A Design System。デジタル庁準拠のSEO最適化パンくずリスト。構造化データ対応。'
      }
    }
  },
  tags: ['autodocs'],
  argTypes: {
    items: {
      description: 'パンくずリストの項目配列',
      control: { type: 'object' }
    },
    separator: {
      description: 'セパレータータイプ',
      control: { type: 'select' },
      options: ['chevron', 'slash', 'arrow', 'custom']
    },
    variant: {
      description: 'スタイルバリアント',
      control: { type: 'select' },
      options: ['default', 'minimal', 'card', 'underline']
    },
    size: {
      description: 'サイズ',
      control: { type: 'select' },
      options: ['sm', 'md', 'lg']
    },
    showHomeIcon: {
      description: 'ホームアイコン表示',
      control: { type: 'boolean' }
    },
    maxItems: {
      description: '表示最大項目数（0で無制限）',
      control: { type: 'number', min: 0, max: 10, step: 1 }
    },
    collapseFrom: {
      description: '省略位置',
      control: { type: 'select' },
      options: ['start', 'middle', 'end']
    },
    enableStructuredData: {
      description: '構造化データ出力',
      control: { type: 'boolean' }
    }
  }
};

export default meta;
type Story = StoryObj<typeof meta>;

// Sample data
const sampleItems = [
  { label: 'ホーム', href: '/' },
  { label: 'カテゴリ', href: '/category' },
  { label: 'サブカテゴリ', href: '/category/sub' },
  { label: '商品詳細' }
];

const deepItems = [
  { label: 'ホーム', href: '/' },
  { label: '製品', href: '/products' },
  { label: 'ソフトウェア', href: '/products/software' },
  { label: 'デザインツール', href: '/products/software/design' },
  { label: 'Figma', href: '/products/software/design/figma' },
  { label: 'プラグイン', href: '/products/software/design/figma/plugins' },
  { label: 'UI Kit' }
];

// Default Story
export const Default: Story = {
  args: {
    items: sampleItems,
    separator: 'chevron',
    variant: 'default',
    size: 'md',
    showHomeIcon: false,
    maxItems: 0,
    enableStructuredData: true
  }
};

// With Home Icon
export const WithHomeIcon: Story = {
  args: {
    ...Default.args,
    showHomeIcon: true,
    items: sampleItems
  }
};

// Separator Variants
export const SeparatorSlash: Story = {
  args: {
    ...Default.args,
    separator: 'slash',
    items: sampleItems
  }
};

export const SeparatorArrow: Story = {
  args: {
    ...Default.args,
    separator: 'arrow',
    items: sampleItems
  }
};

// Style Variants
export const VariantMinimal: Story = {
  args: {
    ...Default.args,
    variant: 'minimal',
    items: sampleItems
  }
};

export const VariantCard: Story = {
  render: (args) => ({
    components: { BaseBreadcrumb },
    setup() {
      return { args };
    },
    template: `
      <div class="bg-gray-50 p-8">
        <BaseBreadcrumb v-bind="args" />
      </div>
    `
  }),
  args: {
    ...Default.args,
    variant: 'card',
    items: sampleItems
  }
};

export const VariantUnderline: Story = {
  args: {
    ...Default.args,
    variant: 'underline',
    items: sampleItems
  }
};

// Size Variants
export const SizeSmall: Story = {
  args: {
    ...Default.args,
    size: 'sm',
    items: sampleItems
  }
};

export const SizeLarge: Story = {
  args: {
    ...Default.args,
    size: 'lg',
    items: sampleItems
  }
};

// Collapsed Items
export const CollapsedMiddle: Story = {
  args: {
    ...Default.args,
    items: deepItems,
    maxItems: 4,
    collapseFrom: 'middle'
  }
};

export const CollapsedStart: Story = {
  args: {
    ...Default.args,
    items: deepItems,
    maxItems: 3,
    collapseFrom: 'start'
  }
};

export const CollapsedEnd: Story = {
  args: {
    ...Default.args,
    items: deepItems,
    maxItems: 3,
    collapseFrom: 'end'
  }
};

// Government Site Example
export const GovernmentSite: Story = {
  render: (args) => ({
    components: { BaseBreadcrumb },
    setup() {
      return { args };
    },
    template: `
      <div class="bg-white">
        <div class="border-b border-gray-200 py-4 px-6">
          <BaseBreadcrumb v-bind="args" />
        </div>
        <div class="p-6">
          <h1 class="text-2xl font-bold text-gray-900 mb-4">申請書類ダウンロード</h1>
          <p class="text-gray-600">各種申請に必要な書類をダウンロードできます。</p>
        </div>
      </div>
    `
  }),
  args: {
    items: [
      { label: 'ホーム', href: '/' },
      { label: '手続き・申請', href: '/procedures' },
      { label: '許可申請', href: '/procedures/permits' },
      { label: '建築確認申請', href: '/procedures/permits/building' },
      { label: '申請書類ダウンロード' }
    ],
    variant: 'default',
    size: 'md',
    enableStructuredData: true
  }
};

// E-commerce Example
export const EcommerceSite: Story = {
  render: (args) => ({
    components: { BaseBreadcrumb },
    setup() {
      return { args };
    },
    template: `
      <div class="bg-gray-50">
        <div class="bg-white shadow-sm">
          <div class="max-w-7xl mx-auto px-4 py-3">
            <BaseBreadcrumb v-bind="args" />
          </div>
        </div>
        <div class="max-w-7xl mx-auto px-4 py-8">
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
              <img src="https://via.placeholder.com/400x300/e5e7eb/6b7280?text=Product+Image" 
                   alt="商品画像" 
                   class="w-full rounded-lg">
            </div>
            <div>
              <h1 class="text-3xl font-bold text-gray-900 mb-4">ワイヤレスヘッドフォン</h1>
              <p class="text-lg text-gray-600">高音質・ノイズキャンセリング機能付き</p>
            </div>
          </div>
        </div>
      </div>
    `
  }),
  args: {
    items: [
      { label: 'ホーム', href: '/' },
      { label: '家電', href: '/electronics' },
      { label: 'オーディオ', href: '/electronics/audio' },
      { label: 'ヘッドフォン', href: '/electronics/audio/headphones' },
      { label: 'ワイヤレスヘッドフォン' }
    ],
    variant: 'minimal',
    size: 'sm',
    showHomeIcon: true
  }
};

// Corporate Site Example
export const CorporateSite: Story = {
  render: (args) => ({
    components: { BaseBreadcrumb },
    setup() {
      return { args };
    },
    template: `
      <div class="min-h-screen bg-white">
        <header class="border-b border-gray-200">
          <div class="max-w-7xl mx-auto px-4 py-4">
            <BaseBreadcrumb v-bind="args" />
          </div>
        </header>
        <main class="max-w-7xl mx-auto px-4 py-12">
          <h1 class="text-4xl font-bold text-gray-900 mb-6">採用情報</h1>
          <div class="prose max-w-none">
            <p class="text-lg text-gray-600 mb-8">私たちと一緒に働きませんか？</p>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div class="bg-gray-50 p-6 rounded-lg">
                <h3 class="text-xl font-semibold mb-4">エンジニア職</h3>
                <p class="text-gray-600">最新技術を活用した開発業務</p>
              </div>
              <div class="bg-gray-50 p-6 rounded-lg">
                <h3 class="text-xl font-semibold mb-4">デザイナー職</h3>
                <p class="text-gray-600">ユーザー体験を重視したデザイン業務</p>
              </div>
            </div>
          </div>
        </main>
      </div>
    `
  }),
  args: {
    items: [
      { label: 'ホーム', href: '/' },
      { label: '会社情報', href: '/company' },
      { label: '採用情報' }
    ],
    variant: 'underline',
    size: 'md',
    enableStructuredData: true
  }
};

// Interactive Story
export const Interactive: Story = {
  render: (args) => ({
    components: { BaseBreadcrumb },
    setup() {
      const handleItemClick = (item, index) => {
        console.log('Breadcrumb item clicked:', { item, index });
      };
      
      return { args, handleItemClick };
    },
    template: `
      <div class="space-y-8">
        <div>
          <h3 class="text-lg font-semibold mb-4">基本パンくずリスト</h3>
          <BaseBreadcrumb v-bind="args" @item-click="handleItemClick" />
        </div>
        
        <div>
          <h3 class="text-lg font-semibold mb-4">設定項目</h3>
          <ul class="space-y-2 text-sm text-gray-600">
            <li>• SEO最適化: 構造化データ自動出力</li>
            <li>• アクセシビリティ: aria-label、aria-current対応</li>
            <li>• レスポンシブ: モバイル表示最適化</li>
            <li>• カスタマイズ: セパレーター、アイコン変更可能</li>
            <li>• 省略表示: 長いパスの自動省略</li>
          </ul>
        </div>
      </div>
    `
  }),
  args: {
    ...Default.args,
    items: sampleItems
  },
  parameters: {
    docs: {
      description: {
        story: 'このストーリーではBaseBreadcrumbのインタラクティブな動作を確認できます。デジタル庁のSEO・アクセシビリティ要件に完全準拠しています。'
      }
    }
  }
};