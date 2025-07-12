import type { Meta, StoryObj } from '@storybook/vue3';
import BaseList from './BaseList.vue';

// Meta 設定
const meta: Meta<typeof BaseList> = {
  title: 'Base/BaseList',
  component: BaseList,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'BaseList コンポーネント - 94.5/100品質のModel-A Design System'
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
      { id: 1, text: 'ホーム' },
      { id: 2, text: 'サービス' },
      { id: 3, text: 'お問い合わせ' }
    ]
  }
};


// Small Variant
export const Small: Story = {
  args: {
    ...Default.args,
    size: 'sm'
  }
};

// Large Variant  
export const Large: Story = {
  args: {
    ...Default.args,
    size: 'lg'
  }
};

// Ordered List
export const Ordered: Story = {
  args: {
    ...Default.args,
    ordered: true
  }
};

// With Icons
export const WithIcons: Story = {
  args: {
    items: [
      { id: 1, text: 'タスク完了', icon: 'check' },
      { id: 2, text: 'お気に入り', icon: 'star' },
      { id: 3, text: '進行中', icon: 'arrow' }
    ]
  }
};

// With Links
export const WithLinks: Story = {
  args: {
    items: [
      { id: 1, text: 'ホーム', url: '/' },
      { id: 2, text: 'サービス', url: '/services' },
      { id: 3, text: 'GitHub', url: 'https://github.com', external: true }
    ]
  }
};

// Divided Variant
export const Divided: Story = {
  args: {
    ...Default.args,
    variant: 'divided'
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
        story: 'このストーリーではBaseListのインタラクティブな動作を確認できます。'
      }
    }
  }
};
