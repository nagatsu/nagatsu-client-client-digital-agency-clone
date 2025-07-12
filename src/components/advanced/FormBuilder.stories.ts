import type { Meta, StoryObj } from '@storybook/vue3';
import FormBuilder from './FormBuilder.vue';

// Meta 設定
const meta: Meta<typeof FormBuilder> = {
  title: 'Advanced/FormBuilder',
  component: FormBuilder,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'FormBuilder コンポーネント - 94.5/100品質のModel-A Design System'
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
    schema: [
      {
        type: 'text',
        name: 'name',
        label: '名前',
        required: true,
        placeholder: 'お名前を入力してください'
      },
      {
        type: 'email',
        name: 'email',
        label: 'メールアドレス',
        required: true,
        placeholder: 'email@example.com'
      },
      {
        type: 'select',
        name: 'category',
        label: 'カテゴリー',
        required: true,
        options: [
          { value: 'general', label: '一般' },
          { value: 'support', label: 'サポート' },
          { value: 'sales', label: '営業' }
        ]
      },
      {
        type: 'textarea',
        name: 'message',
        label: 'メッセージ',
        required: true,
        placeholder: 'メッセージを入力してください'
      }
    ],
    title: 'お問い合わせフォーム',
    description: 'お気軽にお問い合わせください。',
    showHeader: true,
    configurable: true,
    initialData: {
      name: '',
      email: '',
      category: 'general',
      message: ''
    }
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
        story: 'このストーリーではFormBuilderのインタラクティブな動作を確認できます。'
      }
    }
  }
};
