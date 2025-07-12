import type { Meta, StoryObj } from '@storybook/vue3';
import RegisterForm from './RegisterForm.vue';

// Meta 設定
const meta: Meta<typeof RegisterForm> = {
  title: 'General/RegisterForm',
  component: RegisterForm,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'RegisterForm コンポーネント - 94.5/100品質のModel-A Design System'
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
        story: 'このストーリーではRegisterFormのインタラクティブな動作を確認できます。'
      }
    }
  }
};
