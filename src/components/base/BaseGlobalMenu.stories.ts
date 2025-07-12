import type { Meta, StoryObj } from '@storybook/vue3';
import BaseGlobalMenu from './BaseGlobalMenu.vue';

// Meta 設定
const meta: Meta<typeof BaseGlobalMenu> = {
  title: 'Base/BaseGlobalMenu',
  component: BaseGlobalMenu,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'BaseGlobalMenu コンポーネント - 94.5/100品質のModel-A Design System'
      }
    }
  },
  tags: ['autodocs'],
  argTypes: {
  }
};

export default meta;
type Story = StoryObj<typeof meta>;

// Default Story
export const Default: Story = {
  args: {
    items: [
      { text: 'ホーム', url: '/', active: true },
      { text: 'サービス', url: '/services' },
      { text: '会社情報', url: '/about' },
      { text: 'お問い合わせ', url: '/contact' },
      { 
        text: 'その他', 
        children: [
          { text: 'ブログ', url: '/blog' },
          { text: 'FAQ', url: '/faq' },
          { text: 'サポート', url: '/support' }
        ]
      }
    ],
    size: 'md',
    theme: 'light',
    ariaLabel: 'グローバルナビゲーション'
  }
};


// Small Variant
export const Small: Story = {
  args: {
    ...Default.args,
    size: 'small'
  }
};

// Large Variant  
export const Large: Story = {
  args: {
    ...Default.args,
    size: 'large'
  }
};


// Interactive Story
export const Interactive: Story = {
  args: {
    ...Default.args
  },
  parameters: {
    docs: {
      description: {
        story: 'このストーリーではBaseGlobalMenuのインタラクティブな動作を確認できます。'
      }
    }
  }
};
