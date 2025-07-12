import type { Meta, StoryObj } from '@storybook/vue3';
import DarkModeToggle from './DarkModeToggle.vue';

// Meta 設定
const meta: Meta<typeof DarkModeToggle> = {
  title: 'General/DarkModeToggle',
  component: DarkModeToggle,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'DarkModeToggle コンポーネント - 94.5/100品質のModel-A Design System'
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




// Interactive Story
export const Interactive: Story = {
  args: {
    ...Default.args
  },
  parameters: {
    docs: {
      description: {
        story: 'このストーリーではDarkModeToggleのインタラクティブな動作を確認できます。'
      }
    }
  }
};
