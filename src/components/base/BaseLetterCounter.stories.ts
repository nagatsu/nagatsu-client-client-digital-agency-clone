import type { Meta, StoryObj } from '@storybook/vue3';
import BaseLetterCounter from './BaseLetterCounter.vue';

// Meta 設定
const meta: Meta<typeof BaseLetterCounter> = {
  title: 'Base/BaseLetterCounter',
  component: BaseLetterCounter,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'BaseLetterCounter コンポーネント - 94.5/100品質のModel-A Design System'
      }
    }
  },
  tags: ['autodocs'],
  argTypes: {
    modelValue: {
      description: 'modelValue property',
      control: { type: 'text' }
    },
    label: {
      description: 'label property',
      control: { type: 'text' }
    },
    helpText: {
      description: 'helpText property',
      control: { type: 'text' }
    },
    errorMessage: {
      description: 'errorMessage property',
      control: { type: 'text' }
    },
    placeholder: {
      description: 'placeholder property',
      control: { type: 'text' }
    },
    maxLength: {
      description: 'maxLength property',
      control: { type: 'number' }
    },
    disabled: {
      description: 'disabled property',
      control: { type: 'boolean' }
    },
    readonly: {
      description: 'readonly property',
      control: { type: 'boolean' }
    },
    required: {
      description: 'required property',
      control: { type: 'boolean' }
    },
    multiline: {
      description: 'multiline property',
      control: { type: 'boolean' }
    },
    rows: {
      description: 'rows property',
      control: { type: 'number' }
    },
    inputType: {
      description: 'inputType property',
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
    inputId: {
      description: 'inputId property',
      control: { type: 'text' }
    },
    warningThreshold: {
      description: 'warningThreshold property',
      control: { type: 'number' }
    }
  
  }
};

export default meta;
type Story = StoryObj<typeof meta>;

// Default Story
export const Default: Story = {
  args: {
    modelValue: '',
    label: 'お問い合わせ内容',
    helpText: '内容を入力してください。文字数制限があります。',
    placeholder: 'ご意見・ご質問をお聞かせください',
    maxLength: 200,
    disabled: false,
    readonly: false,
    required: true,
    multiline: false,
    inputType: 'text',
    variant: 'default',
    size: 'md',
    warningThreshold: 0.8
  }
};


// Small Size
export const Small: Story = {
  args: {
    ...Default.args,
    size: 'sm',
    label: 'コメント（小）',
    maxLength: 100
  }
};

// Large Size  
export const Large: Story = {
  args: {
    ...Default.args,
    size: 'lg',
    label: '詳細コメント（大）',
    maxLength: 500
  }
};

// Multiline Textarea
export const Multiline: Story = {
  args: {
    ...Default.args,
    multiline: true,
    rows: 4,
    label: '詳細なご意見',
    placeholder: 'ご意見やご要望を詳しくお聞かせください...',
    maxLength: 500,
    helpText: '最大500文字まで入力できます。'
  },
  parameters: {
    docs: {
      description: {
        story: '複数行入力対応。テキストエリアでの長文入力に適用'
      }
    }
  }
};

// Government Form Example
export const GovernmentForm: Story = {
  args: {
    modelValue: '',
    label: 'パブリックコメント',
    helpText: '政策に関するご意見をお聞かせください。文字数制限にご注意ください。',
    placeholder: '政策への意見・提案を入力してください',
    maxLength: 300,
    required: true,
    multiline: true,
    rows: 5,
    variant: 'outlined',
    size: 'md',
    warningThreshold: 0.7
  },
  parameters: {
    docs: {
      description: {
        story: '政府系サイトでのパブリックコメント入力例。アクセシビリティを重視'
      }
    }
  }
};

// Warning State
export const WithWarning: Story = {
  args: {
    ...Default.args,
    modelValue: 'これは文字数制限の警告状態をテストするためのサンプルテキストです。あと少しで制限に達します。さらに文字を追加していくと警告が表示されます。',
    maxLength: 200,
    warningThreshold: 0.8
  },
  parameters: {
    docs: {
      description: {
        story: '文字数制限警告状態。制限の80%に達すると警告色に変化'
      }
    }
  }
};

// Error State
export const WithError: Story = {
  args: {
    ...Default.args,
    errorMessage: '入力内容に問題があります。確認してください。',
    modelValue: 'エラー状態のサンプル'
  },
  parameters: {
    docs: {
      description: {
        story: 'エラー状態の文字数カウンター。バリデーション失敗時の表示'
      }
    }
  }
};

// Disabled State
export const Disabled: Story = {
  args: {
    ...Default.args,
    disabled: true,
    modelValue: '無効化された入力フィールド',
    helpText: '現在入力は無効です'
  },
  parameters: {
    docs: {
      description: {
        story: '無効化された状態。入力不可時の表示'
      }
    }
  }
};

// Readonly State
export const Readonly: Story = {
  args: {
    ...Default.args,
    readonly: true,
    modelValue: '読み取り専用のテキスト',
    helpText: 'この内容は変更できません'
  },
  parameters: {
    docs: {
      description: {
        story: '読み取り専用状態。確認用途での表示'
      }
    }
  }
};

// Email Input
export const EmailType: Story = {
  args: {
    ...Default.args,
    inputType: 'email',
    label: 'メールアドレス',
    placeholder: 'example@domain.com',
    maxLength: 100,
    helpText: '有効なメールアドレスを入力してください'
  },
  parameters: {
    docs: {
      description: {
        story: 'メール入力専用。入力タイプを email に設定'
      }
    }
  }
};


// Interactive Story
export const Interactive: Story = {
  args: {
    ...Default.args,
    label: 'インタラクティブ文字数カウンター',
    helpText: 'この入力フィールドで文字数カウンター機能を確認してください'
  },
  parameters: {
    docs: {
      description: {
        story: 'インタラクティブな文字数カウンター。Controlsパネルで設定変更可能'
      }
    }
  }
};
