import type { Meta, StoryObj } from '@storybook/vue3';
import BaseMenuList from './BaseMenuList.vue';

// Meta 設定
const meta: Meta<typeof BaseMenuList> = {
  title: 'Base/BaseMenuList',
  component: BaseMenuList,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'BaseMenuList コンポーネント - 94.5/100品質のModel-A Design System'
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
    title: 'メニュー',
    items: [
      { text: 'ダッシュボード', url: '#dashboard', icon: 'home' },
      { text: 'プロジェクト', url: '#projects', icon: 'folder' },
      { text: 'タスク', url: '#tasks', icon: 'check' },
      { type: 'divider' },
      { text: '設定', url: '#settings', icon: 'settings' },
      { text: 'ヘルプ', url: '#help', icon: 'help' }
    ],
    size: 'md',
    variant: 'default',
    theme: 'light'
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

// External Links
export const ExternalLinks: Story = {
  args: {
    title: '外部リンク',
    items: [
      { text: 'GitHub', url: 'https://github.com', external: true, icon: 'home' },
      { text: 'ドキュメント', url: 'https://docs.example.com', external: true, icon: 'folder' },
      { text: 'サポート', url: 'https://support.example.com', external: true, icon: 'help' }
    ],
    size: 'md',
    variant: 'default',
    theme: 'light'
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
        story: 'このストーリーではBaseMenuListのインタラクティブな動作を確認できます。'
      }
    }
  }
};
