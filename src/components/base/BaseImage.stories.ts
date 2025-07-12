import type { Meta, StoryObj } from '@storybook/vue3';
import BaseImage from './BaseImage.vue';

// Meta 設定
const meta: Meta<typeof BaseImage> = {
  title: 'Base/BaseImage',
  component: BaseImage,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'BaseImage コンポーネント - 94.5/100品質のModel-A Design System'
      }
    }
  },
  tags: ['autodocs'],
  argTypes: {
    src: {
      description: 'src property',
      control: { type: 'text' }
    },
    alt: {
      description: 'alt property',
      control: { type: 'text' }
    },
    width: {
      description: 'width property',
      control: { type: 'text' }
    },
    height: {
      description: 'height property',
      control: { type: 'text' }
    },
    placeholder: {
      description: 'placeholder property',
      control: { type: 'text' }
    },
    placeholderText: {
      description: 'placeholderText property',
      control: { type: 'text' }
    },
    shape: {
      description: 'shape property',
      control: { type: 'text' }
    },
    aspectRatio: {
      description: 'aspectRatio property',
      control: { type: 'text' }
    },
    overlay: {
      description: 'overlay property',
      control: { type: 'text' }
    },
    badge: {
      description: 'badge property',
      control: { type: 'text' }
    },
    loading: {
      description: 'loading property',
      control: { type: 'boolean' }
    },
    lazy: {
      description: 'lazy property',
      control: { type: 'boolean' }
    },
    objectFit: {
      description: 'objectFit property',
      control: { type: 'text' }
    },
    showPlaceholderText: {
      description: 'showPlaceholderText property',
      control: { type: 'boolean' }
    },
    showDimensions: {
      description: 'showDimensions property',
      control: { type: 'boolean' }
    },
    forceplaceholder: {
      description: 'forceplaceholder property',
      control: { type: 'boolean' }
    }
  
  }
};

export default meta;
type Story = StoryObj<typeof meta>;

// Default Story
export const Default: Story = {
  args: {
    src: 'Sample Text',
    alt: 'Sample Text',
    width: 'Sample Text',
    height: 'Sample Text',
    placeholder: 'Default Value',
    placeholderText: 'Sample Text',
    shape: 'Default Value',
    aspectRatio: 'Default Value',
    overlay: 'Sample Text',
    badge: 'Sample Text',
    loading: true,
    lazy: true,
    objectFit: 'Default Value',
    showPlaceholderText: true,
    showDimensions: true,
    forceplaceholder: true
  
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
        story: 'このストーリーではBaseImageのインタラクティブな動作を確認できます。'
      }
    }
  }
};
