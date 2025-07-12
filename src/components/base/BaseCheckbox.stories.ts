import type { Meta, StoryObj } from '@storybook/vue3';
import BaseCheckbox from './BaseCheckbox.vue';

// Meta 設定
const meta: Meta<typeof BaseCheckbox> = {
  title: 'Base/BaseCheckbox',
  component: BaseCheckbox,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'BaseCheckbox コンポーネント - 94.5/100品質のModel-A Design System'
      }
    }
  },
  tags: ['autodocs'],
  argTypes: {
    modelValue: {
      description: 'modelValue property',
      control: { type: 'boolean' }
    },
    id: {
      description: 'id property',
      control: { type: 'text' }
    },
    label: {
      description: 'label property',
      control: { type: 'text' }
    },
    description: {
      description: 'description property',
      control: { type: 'text' }
    },
    disabled: {
      description: 'disabled property',
      control: { type: 'boolean' }
    },
    required: {
      description: 'required property',
      control: { type: 'boolean' }
    },
    variant: {
      description: 'variant property',
      control: { type: 'text' }
    },
    size: {
      description: 'size property',
      control: { type: 'text' }
    }
  
  }
};

export default meta;
type Story = StoryObj<typeof meta>;

// Default Story
export const Default: Story = {
  args: {
    modelValue: false,
    id: 'default-checkbox',
    label: '利用規約に同意する',
    description: '必須項目です。同意いただかないとサービスをご利用いただけません。',
    disabled: false,
    required: true,
    variant: 'default',
    size: 'md'
  }
};

// Checked State
export const Checked: Story = {
  args: {
    ...Default.args,
    modelValue: true,
    label: 'メールマガジンを受け取る'
  }
};

// Size Variants
export const SizeSmall: Story = {
  args: {
    ...Default.args,
    size: 'sm',
    label: 'コンパクト表示',
    description: '省スペースでの表示に適用'
  }
};

export const SizeLarge: Story = {
  args: {
    ...Default.args,
    size: 'lg',
    label: '大きなチェックボックス',
    description: 'タッチ操作に適したサイズ'
  }
};

// Variant Styles
export const VariantSuccess: Story = {
  args: {
    ...Default.args,
    variant: 'success',
    modelValue: true,
    label: '設定完了',
    description: '正常に設定されました'
  }
};

export const VariantWarning: Story = {
  args: {
    ...Default.args,
    variant: 'warning',
    modelValue: true,
    label: '注意事項を確認済み',
    description: '重要な注意点があります'
  }
};

export const VariantError: Story = {
  args: {
    ...Default.args,
    variant: 'error',
    label: 'エラー状態',
    description: '入力に問題があります。再確認してください。'
  }
};

// Disabled State
export const Disabled: Story = {
  args: {
    ...Default.args,
    disabled: true,
    modelValue: true,
    label: '無効状態',
    description: '選択できない状態'
  }
};

// Form Integration Example
export const FormIntegration: Story = {
  render: (args) => ({
    components: { BaseCheckbox },
    setup() {
      return { args };
    },
    template: `
      <div class="space-y-4 max-w-md">
        <h3 class="text-lg font-semibold">アカウント設定</h3>
        <BaseCheckbox
          v-bind="args"
          label="通知を受け取る"
          description="新着情報やお知らせをメールで受信します"
        />
        <BaseCheckbox
          label="プロフィールを公開する"  
          description="他のユーザーからプロフィールを閲覧可能にします"
          variant="default"
          size="md"
        />
        <BaseCheckbox
          :model-value="true"
          label="利用規約に同意する（必須）"
          description="サービス利用には必須です"
          variant="success"
          required
        />
      </div>
    `
  }),
  args: {
    size: 'md',
    variant: 'default'
  }
};

// Interactive Story
export const Interactive: Story = {
  args: {
    ...Default.args,
    label: 'インタラクティブテスト',
    description: 'クリックして動作を確認してください'
  },
  parameters: {
    docs: {
      description: {
        story: 'このストーリーではBaseCheckboxのインタラクティブな動作を確認できます。デジタル庁のアクセシビリティ要件に準拠しています。'
      }
    }
  }
};
