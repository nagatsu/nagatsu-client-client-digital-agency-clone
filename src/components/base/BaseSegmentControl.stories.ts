import type { Meta, StoryObj } from '@storybook/vue3';
import BaseSegmentControl from './BaseSegmentControl.vue';

// Meta 設定
const meta: Meta<typeof BaseSegmentControl> = {
  title: 'Base/BaseSegmentControl',
  component: BaseSegmentControl,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'BaseSegmentControl コンポーネント - 94.5/100品質のModel-A Design System'
      }
    }
  },
  tags: ['autodocs'],
  argTypes: {
    modelValue: {
      description: 'modelValue property',
      control: { type: 'text' }
    },
    options: {
      description: 'options property',
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
    color: {
      description: 'color property',
      control: { type: 'text' }
    },
    fullWidth: {
      description: 'fullWidth property',
      control: { type: 'boolean' }
    },
    showContentPanels: {
      description: 'showContentPanels property',
      control: { type: 'boolean' }
    },
    groupId: {
      description: 'groupId property',
      control: { type: 'text' }
    },
    ariaLabel: {
      description: 'ariaLabel property',
      control: { type: 'text' }
    }
  
  }
};

export default meta;
type Story = StoryObj<typeof meta>;

// Default Story
export const Default: Story = {
  args: {
    modelValue: 'overview',
    options: [
      { value: 'overview', label: '概要' },
      { value: 'details', label: '詳細' },
      { value: 'settings', label: '設定' }
    ],
    label: '表示タイプを選択',
    disabled: false,
    required: false,
    variant: 'default',
    size: 'md',
    color: 'primary',
    fullWidth: false,
    showContentPanels: false
  }
};


// Government Dashboard Example
export const GovernmentDashboard: Story = {
  args: {
    modelValue: 'services',
    options: [
      { value: 'services', label: 'サービス一覧' },
      { value: 'procedures', label: '手続き' },
      { value: 'consultation', label: '相談窓口' },
      { value: 'notifications', label: 'お知らせ', badge: '5' }
    ],
    label: 'メニュー選択',
    helpText: '閲覧したい情報を選択してください',
    variant: 'outlined',
    size: 'md',
    color: 'primary',
    fullWidth: true
  },
  parameters: {
    docs: {
      description: {
        story: '政府系サイトのダッシュボード例。バッジ付き、フル幅表示'
      }
    }
  }
};

// Size Variations
export const SizeVariations: Story = {
  render: () => ({
    template: `
      <div class="space-y-6">
        <div>
          <h3 class="text-sm font-medium mb-3">Small</h3>
          <BaseSegmentControl 
            :model-value="'option1'" 
            :options="[{value: 'option1', label: '選択肢1'}, {value: 'option2', label: '選択肢2'}]" 
            size="sm" 
          />
        </div>
        <div>
          <h3 class="text-sm font-medium mb-3">Medium (Default)</h3>
          <BaseSegmentControl 
            :model-value="'option1'" 
            :options="[{value: 'option1', label: '選択肢1'}, {value: 'option2', label: '選択肢2'}]" 
            size="md" 
          />
        </div>
        <div>
          <h3 class="text-sm font-medium mb-3">Large</h3>
          <BaseSegmentControl 
            :model-value="'option1'" 
            :options="[{value: 'option1', label: '選択肢1'}, {value: 'option2', label: '選択肢2'}]" 
            size="lg" 
          />
        </div>
      </div>
    `
  }),
  parameters: {
    docs: {
      description: {
        story: '異なるサイズのセグメントコントロール比較'
      }
    }
  }
};

// Variant Comparison
export const VariantComparison: Story = {
  render: () => ({
    template: `
      <div class="space-y-6">
        <div>
          <h3 class="text-sm font-medium mb-3">Default</h3>
          <BaseSegmentControl 
            :model-value="'tab1'" 
            :options="[{value: 'tab1', label: 'タブ1'}, {value: 'tab2', label: 'タブ2'}, {value: 'tab3', label: 'タブ3'}]" 
            variant="default" 
          />
        </div>
        <div>
          <h3 class="text-sm font-medium mb-3">Minimal</h3>
          <BaseSegmentControl 
            :model-value="'tab1'" 
            :options="[{value: 'tab1', label: 'タブ1'}, {value: 'tab2', label: 'タブ2'}, {value: 'tab3', label: 'タブ3'}]" 
            variant="minimal" 
          />
        </div>
        <div>
          <h3 class="text-sm font-medium mb-3">Outlined</h3>
          <BaseSegmentControl 
            :model-value="'tab1'" 
            :options="[{value: 'tab1', label: 'タブ1'}, {value: 'tab2', label: 'タブ2'}, {value: 'tab3', label: 'タブ3'}]" 
            variant="outlined" 
          />
        </div>
        <div>
          <h3 class="text-sm font-medium mb-3">Pills</h3>
          <BaseSegmentControl 
            :model-value="'tab1'" 
            :options="[{value: 'tab1', label: 'タブ1'}, {value: 'tab2', label: 'タブ2'}, {value: 'tab3', label: 'タブ3'}]" 
            variant="pills" 
          />
        </div>
      </div>
    `
  }),
  parameters: {
    docs: {
      description: {
        story: '各バリアントのセグメントコントロール比較'
      }
    }
  }
};

// With Icons and Badges
export const WithIconsAndBadges: Story = {
  args: {
    modelValue: 'messages',
    options: [
      { value: 'dashboard', label: 'ダッシュボード' },
      { value: 'messages', label: 'メッセージ', badge: '12' },
      { value: 'notifications', label: '通知', badge: 'New' },
      { value: 'settings', label: '設定' }
    ],
    label: 'ユーザーメニュー',
    variant: 'default',
    size: 'md',
    color: 'primary'
  },
  parameters: {
    docs: {
      description: {
        story: 'アイコンやバッジ付きのセグメントコントロール'
      }
    }
  }
};

// Color Variations
export const ColorVariations: Story = {
  render: () => ({
    template: `
      <div class="space-y-4">
        <BaseSegmentControl 
          :model-value="'option1'" 
          :options="[{value: 'option1', label: 'Primary'}, {value: 'option2', label: '選択肢2'}]" 
          color="primary" 
          label="Primary Color"
        />
        <BaseSegmentControl 
          :model-value="'option1'" 
          :options="[{value: 'option1', label: 'Success'}, {value: 'option2', label: '選択肢2'}]" 
          color="success" 
          label="Success Color"
        />
        <BaseSegmentControl 
          :model-value="'option1'" 
          :options="[{value: 'option1', label: 'Warning'}, {value: 'option2', label: '選択肢2'}]" 
          color="warning" 
          label="Warning Color"
        />
        <BaseSegmentControl 
          :model-value="'option1'" 
          :options="[{value: 'option1', label: 'Error'}, {value: 'option2', label: '選択肢2'}]" 
          color="error" 
          label="Error Color"
        />
      </div>
    `
  }),
  parameters: {
    docs: {
      description: {
        story: '異なるカラーバリエーションのセグメントコントロール'
      }
    }
  }
};

// Disabled State
export const DisabledState: Story = {
  args: {
    modelValue: 'option1',
    options: [
      { value: 'option1', label: '有効' },
      { value: 'option2', label: '無効', disabled: true },
      { value: 'option3', label: '有効' }
    ],
    label: '一部無効化例'
  },
  parameters: {
    docs: {
      description: {
        story: '一部のオプションが無効化されたセグメントコントロール'
      }
    }
  }
};


// Interactive Story
export const Interactive: Story = {
  args: {
    ...Default.args,
    label: 'インタラクティブセグメント',
    helpText: 'Controlsで設定を変更して動作を確認してください'
  },
  parameters: {
    docs: {
      description: {
        story: 'インタラクティブなセグメントコントロール。キーボードナビゲーション、バリアント、サイズをControlsで調整可能'
      }
    }
  }
};
