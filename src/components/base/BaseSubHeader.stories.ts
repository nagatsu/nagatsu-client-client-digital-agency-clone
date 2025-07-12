import type { Meta, StoryObj } from '@storybook/vue3';
import BaseSubHeader from './BaseSubHeader.vue';

// Meta 設定
const meta: Meta<typeof BaseSubHeader> = {
  title: 'Base/BaseSubHeader',
  component: BaseSubHeader,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'BaseSubHeader コンポーネント - 94.5/100品質のModel-A Design System'
      }
    }
  },
  tags: ['autodocs'],
  argTypes: {
    title: {
      description: 'title property',
      control: { type: 'text' }
    },
    subtitle: {
      description: 'subtitle property',
      control: { type: 'text' }
    },
    icon: {
      description: 'icon property',
      control: { type: 'text' }
    },
    status: {
      description: 'status property',
      control: { type: 'text' }
    },
    statusVariant: {
      description: 'statusVariant property',
      control: { type: 'text' }
    },
    statusIcon: {
      description: 'statusIcon property',
      control: { type: 'boolean' }
    },
    showBackButton: {
      description: 'showBackButton property',
      control: { type: 'boolean' }
    },
    backButtonText: {
      description: 'backButtonText property',
      control: { type: 'text' }
    },
    backButtonLabel: {
      description: 'backButtonLabel property',
      control: { type: 'text' }
    },
    backIcon: {
      description: 'backIcon property',
      control: { type: 'text' }
    },
    navigationItems: {
      description: 'navigationItems property',
      control: { type: 'text' }
    },
    showNavigation: {
      description: 'showNavigation property',
      control: { type: 'boolean' }
    },
    actions: {
      description: 'actions property',
      control: { type: 'text' }
    },
    showMobileMenu: {
      description: 'showMobileMenu property',
      control: { type: 'boolean' }
    },
    variant: {
      description: 'variant property',
      control: { type: 'text' }
    },
    size: {
      description: 'size property',
      control: { type: 'text' }
    },
    sticky: {
      description: 'sticky property',
      control: { type: 'boolean' }
    },
    maxWidth: {
      description: 'maxWidth property',
      control: { type: 'text' }
    }
  
  }
};

export default meta;
type Story = StoryObj<typeof meta>;

// Default Story
export const Default: Story = {
  args: {
    title: 'Page Title',
    subtitle: 'Page subtitle description',
    icon: null,
    status: 'Active',
    statusVariant: 'success',
    statusIcon: true,
    showBackButton: true,
    backButtonText: 'Back',
    backButtonLabel: 'Go back to previous page',
    backIcon: null,
    navigationItems: 'Default Value',
    showNavigation: true,
    actions: 'Default Value',
    showMobileMenu: true,
    variant: 'Default Value',
    size: 'Default Value',
    sticky: true,
    maxWidth: 'Default Value'
  
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
        story: 'このストーリーではBaseSubHeaderのインタラクティブな動作を確認できます。'
      }
    }
  }
};
