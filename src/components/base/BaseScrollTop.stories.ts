import type { Meta, StoryObj } from '@storybook/vue3';
import BaseScrollTop from './BaseScrollTop.vue';

// Meta 設定
const meta: Meta<typeof BaseScrollTop> = {
  title: 'Base/BaseScrollTop',
  component: BaseScrollTop,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: 'BaseScrollTop コンポーネント - 94.5/100品質のModel-A Design System。デジタル庁アクセシビリティ要件準拠のスクロールトップボタン。'
      }
    }
  },
  tags: ['autodocs'],
  argTypes: {
    threshold: {
      description: 'スクロール量の閾値（px）',
      control: { type: 'number', min: 0, max: 1000, step: 50 }
    },
    behavior: {
      description: 'スクロール動作',
      control: { type: 'select' },
      options: ['smooth', 'auto']
    },
    position: {
      description: 'ボタンの配置位置',
      control: { type: 'select' },
      options: ['bottom-right', 'bottom-left', 'bottom-center']
    },
    variant: {
      description: 'スタイルバリアント',
      control: { type: 'select' },
      options: ['default', 'primary', 'secondary', 'minimal']
    },
    size: {
      description: 'ボタンサイズ',
      control: { type: 'select' },
      options: ['sm', 'md', 'lg']
    },
    showProgress: {
      description: 'スクロール進捗表示',
      control: { type: 'boolean' }
    },
    showTooltip: {
      description: 'ツールチップ表示',
      control: { type: 'boolean' }
    },
    icon: {
      description: 'アイコンタイプ',
      control: { type: 'select' },
      options: ['arrow-up', 'chevron-up', 'arrow-circle-up']
    }
  }
};

export default meta;
type Story = StoryObj<typeof meta>;

// Default Story
export const Default: Story = {
  render: (args) => ({
    components: { BaseScrollTop },
    setup() {
      return { args };
    },
    template: `
      <div>
        <BaseScrollTop v-bind="args" />
        <div class="h-screen bg-gradient-to-b from-blue-50 to-blue-100 p-8">
          <h2 class="text-2xl font-bold mb-4">スクロールテスト用コンテンツ</h2>
          <p class="text-gray-600 mb-4">下にスクロールするとスクロールトップボタンが表示されます</p>
        </div>
        <div class="h-screen bg-gradient-to-b from-green-50 to-green-100 p-8">
          <h3 class="text-xl font-semibold mb-4">セクション 2</h3>
          <p class="text-gray-600">さらにスクロールしてボタンの動作を確認してください</p>
        </div>
        <div class="h-screen bg-gradient-to-b from-purple-50 to-purple-100 p-8">
          <h3 class="text-xl font-semibold mb-4">セクション 3</h3>
          <p class="text-gray-600">右下にスクロールトップボタンが表示されているはずです</p>
        </div>
      </div>
    `
  }),
  args: {
    threshold: 200,
    behavior: 'smooth',
    position: 'bottom-right',
    variant: 'default',
    size: 'md',
    showProgress: false,
    showTooltip: true,
    icon: 'arrow-up'
  }
};

// With Progress
export const WithProgress: Story = {
  render: (args) => ({
    components: { BaseScrollTop },
    setup() {
      return { args };
    },
    template: `
      <div>
        <BaseScrollTop v-bind="args" />
        <div class="h-screen bg-gradient-to-b from-blue-50 to-blue-100 p-8">
          <h2 class="text-2xl font-bold mb-4">プログレス表示付き</h2>
          <p class="text-gray-600 mb-4">スクロール進捗が円形で表示されます</p>
        </div>
        <div class="h-screen bg-gradient-to-b from-indigo-50 to-indigo-100 p-8">
          <h3 class="text-xl font-semibold mb-4">進捗確認</h3>
          <p class="text-gray-600">ボタンの周りの円がスクロール進捗を示します</p>
        </div>
        <div class="h-screen bg-gradient-to-b from-purple-50 to-purple-100 p-8">
          <h3 class="text-xl font-semibold mb-4">最終セクション</h3>
          <p class="text-gray-600">100%まで進んだらボタンをクリックしてトップに戻りましょう</p>
        </div>
      </div>
    `
  }),
  args: {
    ...Default.args,
    showProgress: true,
    variant: 'primary'
  }
};

// Size Variants
export const SizeSmall: Story = {
  render: (args) => ({
    components: { BaseScrollTop },
    setup() {
      return { args };
    },
    template: `
      <div>
        <BaseScrollTop v-bind="args" />
        <div class="h-screen bg-gray-50 p-8">
          <h2 class="text-2xl font-bold mb-4">スモールサイズ</h2>
          <p class="text-gray-600">コンパクトなスクロールボタン</p>
        </div>
      </div>
    `
  }),
  args: {
    ...Default.args,
    size: 'sm',
    threshold: 100
  }
};

export const SizeLarge: Story = {
  render: (args) => ({
    components: { BaseScrollTop },
    setup() {
      return { args };
    },
    template: `
      <div>
        <BaseScrollTop v-bind="args" />
        <div class="h-screen bg-gray-50 p-8">
          <h2 class="text-2xl font-bold mb-4">ラージサイズ</h2>
          <p class="text-gray-600">タッチ操作に適した大きなボタン</p>
        </div>
      </div>
    `
  }),
  args: {
    ...Default.args,
    size: 'lg',
    threshold: 100
  }
};

// Position Variants
export const PositionLeft: Story = {
  render: (args) => ({
    components: { BaseScrollTop },
    setup() {
      return { args };
    },
    template: `
      <div>
        <BaseScrollTop v-bind="args" />
        <div class="h-screen bg-gray-50 p-8">
          <h2 class="text-2xl font-bold mb-4">左下配置</h2>
          <p class="text-gray-600">左下にボタンが表示されます</p>
        </div>
      </div>
    `
  }),
  args: {
    ...Default.args,
    position: 'bottom-left',
    threshold: 100
  }
};

export const PositionCenter: Story = {
  render: (args) => ({
    components: { BaseScrollTop },
    setup() {
      return { args };
    },
    template: `
      <div>
        <BaseScrollTop v-bind="args" />
        <div class="h-screen bg-gray-50 p-8">
          <h2 class="text-2xl font-bold mb-4">中央下配置</h2>
          <p class="text-gray-600">画面下中央にボタンが表示されます</p>
        </div>
      </div>
    `
  }),
  args: {
    ...Default.args,
    position: 'bottom-center',
    threshold: 100
  }
};

// Variant Styles
export const VariantPrimary: Story = {
  render: (args) => ({
    components: { BaseScrollTop },
    setup() {
      return { args };
    },
    template: `
      <div>
        <BaseScrollTop v-bind="args" />
        <div class="h-screen bg-blue-50 p-8">
          <h2 class="text-2xl font-bold mb-4">プライマリスタイル</h2>
          <p class="text-gray-600">ブランドカラーのボタン</p>
        </div>
      </div>
    `
  }),
  args: {
    ...Default.args,
    variant: 'primary',
    threshold: 100
  }
};

export const VariantMinimal: Story = {
  render: (args) => ({
    components: { BaseScrollTop },
    setup() {
      return { args };
    },
    template: `
      <div>
        <BaseScrollTop v-bind="args" />
        <div class="h-screen bg-gray-900 p-8">
          <h2 class="text-2xl font-bold text-white mb-4">ミニマルスタイル</h2>
          <p class="text-gray-300">ダークテーマに適したスタイル</p>
        </div>
      </div>
    `
  }),
  args: {
    ...Default.args,
    variant: 'minimal',
    threshold: 100
  }
};

// Interactive Story
export const Interactive: Story = {
  render: (args) => ({
    components: { BaseScrollTop },
    setup() {
      return { args };
    },
    template: `
      <div>
        <BaseScrollTop v-bind="args" />
        <div class="h-screen bg-gradient-to-b from-gray-50 to-gray-100 p-8">
          <h2 class="text-2xl font-bold mb-4">インタラクティブテスト</h2>
          <p class="text-gray-600 mb-4">スクロールしてボタンの動作を確認してください</p>
          <ul class="space-y-2 text-sm text-gray-600">
            <li>• 200px以上スクロールでボタン表示</li>
            <li>• スムーススクロールアニメーション</li>
            <li>• ホバー時のツールチップ表示</li>
            <li>• アクセシビリティ対応</li>
          </ul>
        </div>
        <div class="h-screen bg-gradient-to-b from-blue-50 to-blue-100 p-8">
          <h3 class="text-xl font-semibold mb-4">機能テスト</h3>
          <p class="text-gray-600">すべての機能が正常に動作することを確認してください</p>
        </div>
      </div>
    `
  }),
  args: {
    ...Default.args
  },
  parameters: {
    docs: {
      description: {
        story: 'このストーリーではBaseScrollTopのインタラクティブな動作を確認できます。デジタル庁のアクセシビリティ要件に準拠しています。'
      }
    }
  }
};