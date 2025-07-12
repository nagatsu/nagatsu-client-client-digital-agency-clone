import type { Meta, StoryObj } from '@storybook/vue3';
import BaseTextarea from './BaseTextarea.vue';

// Meta 設定
const meta: Meta<typeof BaseTextarea> = {
  title: 'Base/BaseTextarea',
  component: BaseTextarea,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'BaseTextarea コンポーネント - 94.5/100品質のModel-A Design System'
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
        story: 'このストーリーではBaseTextareaのインタラクティブな動作を確認できます。'
      }
    }
  }
};
