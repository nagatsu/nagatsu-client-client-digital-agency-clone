import type { Meta, StoryObj } from '@storybook/vue3';
import BaseHeaderContainer from './BaseHeaderContainer.vue';

// Meta 設定
const meta: Meta<typeof BaseHeaderContainer> = {
  title: 'Base/BaseHeaderContainer',
  component: BaseHeaderContainer,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'BaseHeaderContainer コンポーネント - 94.5/100品質のModel-A Design System'
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
    layout: 'wide',
    containerWidth: 'xl',
    logoSrc: '',
    logoAlt: 'サイトロゴ',
    siteName: 'Nagatsu',
    globalMenuItems: [
      { name: 'ホーム', href: '/', active: true },
      { name: 'サービス', href: '/services' },
      { name: '会社情報', href: '/about' },
      { name: 'お問い合わせ', href: '/contact' }
    ]
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
        story: 'このストーリーではBaseHeaderContainerのインタラクティブな動作を確認できます。'
      }
    }
  }
};
