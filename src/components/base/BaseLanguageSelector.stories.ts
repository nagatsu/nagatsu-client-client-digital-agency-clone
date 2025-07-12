import type { Meta, StoryObj } from '@storybook/vue3';
import BaseLanguageSelector from './BaseLanguageSelector.vue';

// Meta 設定
const meta: Meta<typeof BaseLanguageSelector> = {
  title: 'Base/BaseLanguageSelector',
  component: BaseLanguageSelector,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'BaseLanguageSelector コンポーネント - 94.5/100品質のModel-A Design System'
      }
    }
  },
  tags: ['autodocs'],
  argTypes: {
    modelValue: {
      description: 'modelValue property',
      control: { type: 'text' }
    },
    languages: {
      description: 'languages property',
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
    disabled: {
      description: 'disabled property',
      control: { type: 'boolean' }
    },
    required: {
      description: 'required property',
      control: { type: 'boolean' }
    },
    showFlag: {
      description: 'showFlag property',
      control: { type: 'boolean' }
    },
    showNativeName: {
      description: 'showNativeName property',
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
    selectId: {
      description: 'selectId property',
      control: { type: 'text' }
    },
    chevronIcon: {
      description: 'chevronIcon property',
      control: { type: 'text' }
    }
  
  }
};

export default meta;
type Story = StoryObj<typeof meta>;

// Default Story
export const Default: Story = {
  args: {
    modelValue: 'ja',
    label: 'サイトの言語を選択',
    helpText: '表示言語を変更できます',
    disabled: false,
    required: false,
    showFlag: true,
    showNativeName: true,
    variant: 'default',
    size: 'md'
  }
};


// Small Size
export const Small: Story = {
  args: {
    ...Default.args,
    size: 'sm',
    label: 'コンパクト言語選択'
  }
};

// Large Size  
export const Large: Story = {
  args: {
    ...Default.args,
    size: 'lg',
    label: '大型言語選択'
  }
};

// Government Site Example
export const GovernmentSite: Story = {
  args: {
    modelValue: 'ja',
    label: '言語 / Language',
    helpText: 'このサイトの表示言語を選択してください',
    required: true,
    showFlag: true,
    showNativeName: true,
    variant: 'outlined',
    size: 'md'
  },
  parameters: {
    docs: {
      description: {
        story: '政府系サイトでの言語選択例。必須項目としてマークされ、アクセシビリティを重視'
      }
    }
  }
};

// Minimal Style
export const Minimal: Story = {
  args: {
    modelValue: 'en',
    variant: 'minimal',
    showFlag: false,
    showNativeName: false,
    size: 'sm'
  },
  parameters: {
    docs: {
      description: {
        story: 'ミニマルスタイル。フラグなし、ネイティブ名なしでコンパクト表示'
      }
    }
  }
};

// Error State
export const WithError: Story = {
  args: {
    ...Default.args,
    errorMessage: '言語選択は必須です',
    required: true
  },
  parameters: {
    docs: {
      description: {
        story: 'エラー状態の言語選択。バリデーション失敗時の表示例'
      }
    }
  }
};

// Disabled State
export const Disabled: Story = {
  args: {
    ...Default.args,
    disabled: true,
    helpText: '現在言語変更は無効です'
  },
  parameters: {
    docs: {
      description: {
        story: '無効化された言語選択。設定変更不可時の表示'
      }
    }
  }
};

// Custom Languages
export const CustomLanguages: Story = {
  args: {
    modelValue: 'fr',
    label: 'Choose Language',
    languages: [
      { code: 'en', name: 'English', nativeName: 'English', flag: '🇺🇸' },
      { code: 'fr', name: 'French', nativeName: 'Français', flag: '🇫🇷' },
      { code: 'de', name: 'German', nativeName: 'Deutsch', flag: '🇩🇪' },
      { code: 'es', name: 'Spanish', nativeName: 'Español', flag: '🇪🇸' },
      { code: 'it', name: 'Italian', nativeName: 'Italiano', flag: '🇮🇹' }
    ],
    showFlag: true,
    showNativeName: true,
    variant: 'default',
    size: 'md'
  },
  parameters: {
    docs: {
      description: {
        story: 'カスタム言語リスト。ヨーロッパ言語での設定例'
      }
    }
  }
};


// Interactive Story
export const Interactive: Story = {
  args: {
    ...Default.args,
    label: 'インタラクティブ言語選択',
    helpText: 'このセレクターで言語を変更して動作を確認してください'
  },
  parameters: {
    docs: {
      description: {
        story: 'インタラクティブな言語選択。Controlsパネルで設定を変更して動作確認可能'
      }
    }
  }
};
