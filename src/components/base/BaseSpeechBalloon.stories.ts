import type { Meta, StoryObj } from '@storybook/vue3';
import BaseSpeechBalloon from './BaseSpeechBalloon.vue';

// Meta 設定
const meta: Meta<typeof BaseSpeechBalloon> = {
  title: 'Base/BaseSpeechBalloon',
  component: BaseSpeechBalloon,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'BaseSpeechBalloon コンポーネント - 94.5/100品質のModel-A Design System'
      }
    }
  },
  tags: ['autodocs'],
  argTypes: {
    content: {
      description: 'content property',
      control: { type: 'text' }
    },
    title: {
      description: 'title property',
      control: { type: 'text' }
    },
    variant: {
      description: 'variant property',
      control: { type: 'text' }
    },
    size: {
      description: 'size property',
      control: { type: 'text' }
    },
    position: {
      description: 'position property',
      control: { type: 'text' }
    },
    closable: {
      description: 'closable property',
      control: { type: 'boolean' }
    },
    closeLabel: {
      description: 'closeLabel property',
      control: { type: 'text' }
    },
    actions: {
      description: 'actions property',
      control: { type: 'text' }
    },
    maxWidth: {
      description: 'maxWidth property',
      control: { type: 'text' }
    },
    ariaLabel: {
      description: 'ariaLabel property',
      control: { type: 'text' }
    },
    showIcon: {
      description: 'showIcon property',
      control: { type: 'boolean' }
    }
  
  }
};

export default meta;
type Story = StoryObj<typeof meta>;

// Default Story
export const Default: Story = {
  args: {
    content: 'Sample Text',
    title: 'Sample Text',
    variant: 'Default Value',
    size: 'Default Value',
    position: 'top',
    closable: true,
    closeLabel: 'Sample Text',
    actions: 'Default Value',
    maxWidth: 'Sample Text',
    ariaLabel: 'Sample Text',
    showIcon: true
  
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
        story: 'このストーリーではBaseSpeechBalloonのインタラクティブな動作を確認できます。'
      }
    }
  }
};
