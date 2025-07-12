import type { Meta, StoryObj } from '@storybook/vue3';
import BaseRadioButton from './BaseRadioButton.vue';

// Meta 設定
const meta: Meta<typeof BaseRadioButton> = {
  title: 'Base/BaseRadioButton',
  component: BaseRadioButton,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'BaseRadioButton コンポーネント - 94.5/100品質のModel-A Design System'
      }
    }
  },
  tags: ['autodocs'],
  argTypes: {
    modelValue: {
      description: 'modelValue property',
      control: { type: 'text' }
    },
    name: {
      description: 'name property',
      control: { type: 'text' }
    },
    options: {
      description: 'options property',
      control: { type: 'text' }
    },
    id: {
      description: 'id property',
      control: { type: 'text' }
    },
    groupLabel: {
      description: 'groupLabel property',
      control: { type: 'text' }
    },
    groupDescription: {
      description: 'groupDescription property',
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
    },
    layout: {
      description: 'layout property',
      control: { type: 'text' }
    }
  
  }
};

export default meta;
type Story = StoryObj<typeof meta>;

// Default Story
export const Default: Story = {
  args: {
    modelValue: 'option1',
    name: 'payment-method',
    options: [
      { value: 'credit', label: 'クレジットカード', description: 'Visa、MasterCard、JCB対応' },
      { value: 'bank', label: '銀行振込', description: '3営業日以内にお振込ください' },
      { value: 'convenience', label: 'コンビニ決済', description: '手数料150円' }
    ],
    groupLabel: 'お支払い方法',
    groupDescription: 'ご希望のお支払い方法を選択してください',
    disabled: false,
    required: true,
    variant: 'default',
    size: 'md',
    layout: 'vertical'
  }
};

// Horizontal Layout
export const HorizontalLayout: Story = {
  args: {
    ...Default.args,
    layout: 'horizontal',
    options: [
      { value: 'yes', label: 'はい' },
      { value: 'no', label: 'いいえ' }
    ],
    groupLabel: 'メールマガジンを受け取りますか？'
  }
};

// Size Variants
export const SizeSmall: Story = {
  args: {
    ...Default.args,
    size: 'sm',
    options: [
      { value: 'sm1', label: 'コンパクト選択肢1' },
      { value: 'sm2', label: 'コンパクト選択肢2' }
    ],
    groupLabel: 'コンパクト表示'
  }
};

export const SizeLarge: Story = {
  args: {
    ...Default.args,
    size: 'lg',
    options: [
      { value: 'lg1', label: '大きな選択肢1', description: 'タッチ操作に適したサイズ' },
      { value: 'lg2', label: '大きな選択肢2', description: 'アクセシビリティ向上' }
    ],
    groupLabel: '大きな表示'
  }
};

// Variant Styles
export const VariantSuccess: Story = {
  args: {
    ...Default.args,
    variant: 'success',
    modelValue: 'completed',
    options: [
      { value: 'completed', label: '完了', description: '作業が正常に完了しました' },
      { value: 'pending', label: '保留', description: '後で確認が必要です' }
    ],
    groupLabel: '作業状況'
  }
};

export const VariantWarning: Story = {
  args: {
    ...Default.args,
    variant: 'warning',
    options: [
      { value: 'proceed', label: '続行する', description: '注意して進めてください' },
      { value: 'cancel', label: 'キャンセル', description: '安全に中止します' }
    ],
    groupLabel: '警告：重要な操作'
  }
};

export const VariantError: Story = {
  args: {
    ...Default.args,
    variant: 'error',
    options: [
      { value: 'retry', label: '再試行', description: 'もう一度お試しください' },
      { value: 'skip', label: 'スキップ', description: 'この手順を飛ばします' }
    ],
    groupLabel: 'エラーが発生しました'
  }
};

// Disabled State
export const Disabled: Story = {
  args: {
    ...Default.args,
    disabled: true,
    modelValue: 'disabled-option',
    options: [
      { value: 'disabled-option', label: '無効な選択肢' },
      { value: 'another', label: 'その他の選択肢' }
    ],
    groupLabel: '無効状態'
  }
};

// Partial Disabled Options
export const PartialDisabled: Story = {
  args: {
    ...Default.args,
    options: [
      { value: 'available', label: '利用可能', description: 'すぐにご利用いただけます' },
      { value: 'maintenance', label: 'メンテナンス中', description: '現在ご利用いただけません', disabled: true },
      { value: 'premium', label: 'プレミアム限定', description: 'アップグレードが必要', disabled: true }
    ],
    groupLabel: 'サービス選択'
  }
};

// Form Integration Example
export const FormIntegration: Story = {
  render: (args) => ({
    components: { BaseRadioButton },
    setup() {
      return { args };
    },
    template: `
      <div class="space-y-6 max-w-lg">
        <h3 class="text-lg font-semibold">ユーザー登録フォーム</h3>
        
        <BaseRadioButton
          name="gender"
          :options="[
            { value: 'male', label: '男性' },
            { value: 'female', label: '女性' },
            { value: 'other', label: 'その他' },
            { value: 'prefer-not-to-say', label: '回答しない' }
          ]"
          group-label="性別"
          group-description="任意項目です"
          variant="default"
          size="md"
        />
        
        <BaseRadioButton
          name="notification"
          :options="[
            { value: 'email', label: 'メール通知', description: '重要なお知らせをメールで受信' },
            { value: 'sms', label: 'SMS通知', description: '緊急時のみSMSで受信' },
            { value: 'none', label: '通知なし', description: '通知を受け取らない' }
          ]"
          group-label="通知設定"
          required
          variant="default"
          size="md"
        />
      </div>
    `
  }),
  args: {}
};

// Interactive Story
export const Interactive: Story = {
  args: {
    ...Default.args,
    groupLabel: 'インタラクティブテスト',
    groupDescription: '選択肢をクリックして動作を確認してください'
  },
  parameters: {
    docs: {
      description: {
        story: 'このストーリーではBaseRadioButtonのインタラクティブな動作を確認できます。デジタル庁のアクセシビリティ要件（JIS X 8341-3:2016）に準拠しています。'
      }
    }
  }
};
