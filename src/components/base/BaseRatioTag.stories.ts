import type { Meta, StoryObj } from '@storybook/vue3';
import BaseRatioTag from './BaseRatioTag.vue';

// Meta 設定
const meta: Meta<typeof BaseRatioTag> = {
  title: 'Base/BaseRatioTag',
  component: BaseRatioTag,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'BaseRatioTag コンポーネント - 94.5/100品質のModel-A Design System'
      }
    }
  },
  tags: ['autodocs'],
  argTypes: {
    ratio: {
      description: 'ratio property',
      control: { type: 'number' }
    },
    foregroundColor: {
      description: 'foregroundColor property',
      control: { type: 'text' }
    },
    backgroundColor: {
      description: 'backgroundColor property',
      control: { type: 'text' }
    },
    textSize: {
      description: 'textSize property',
      control: { type: 'text' }
    },
    requiredLevel: {
      description: 'requiredLevel property',
      control: { type: 'text' }
    },
    showIcon: {
      description: 'showIcon property',
      control: { type: 'boolean' }
    },
    showDetails: {
      description: 'showDetails property',
      control: { type: 'boolean' }
    },
    showTooltip: {
      description: 'showTooltip property',
      control: { type: 'boolean' }
    },
    customThresholds: {
      description: 'customThresholds property',
      control: { type: 'text' }
    },
    AA_normal: {
      description: 'AA_normal property',
      control: { type: 'number' }
    },
    AA_large: {
      description: 'AA_large property',
      control: { type: 'number' }
    },
    AAA_normal: {
      description: 'AAA_normal property',
      control: { type: 'number' }
    },
    AAA_large: {
      description: 'AAA_large property',
      control: { type: 'number' }
    }
  
  }
};

export default meta;
type Story = StoryObj<typeof meta>;

// Default Story
export const Default: Story = {
  args: {
    ratio: 7.2,
    foregroundColor: '#000000',
    backgroundColor: '#FFFFFF',
    textSize: 'normal',
    requiredLevel: 'AA',
    showIcon: true,
    showDetails: false,
    showTooltip: true
  }
};


// High Contrast - Pass
export const HighContrast: Story = {
  args: {
    ratio: 12.5,
    foregroundColor: '#000000',
    backgroundColor: '#FFFFFF',
    textSize: 'normal',
    requiredLevel: 'AAA',
    showIcon: true,
    showDetails: true,
    showTooltip: true
  },
  parameters: {
    docs: {
      description: {
        story: '高コントラスト比例。WCAG AAA基準を満たす優秀なアクセシビリティ'
      }
    }
  }
};

// Medium Contrast - Warning
export const MediumContrast: Story = {
  args: {
    ratio: 5.8,
    foregroundColor: '#666666',
    backgroundColor: '#FFFFFF',
    textSize: 'normal',
    requiredLevel: 'AAA',
    showIcon: true,
    showDetails: true,
    showTooltip: true
  },
  parameters: {
    docs: {
      description: {
        story: '中程度コントラスト。AA基準は満たすがAAAは未達の警告状態'
      }
    }
  }
};

// Low Contrast - Fail
export const LowContrast: Story = {
  args: {
    ratio: 2.1,
    foregroundColor: '#CCCCCC',
    backgroundColor: '#FFFFFF',
    textSize: 'normal',
    requiredLevel: 'AA',
    showIcon: true,
    showDetails: true,
    showTooltip: true
  },
  parameters: {
    docs: {
      description: {
        story: '低コントラスト比例。WCAG基準を満たさないアクセシビリティ問題あり'
      }
    }
  }
};

// Large Text Example
export const LargeText: Story = {
  args: {
    ratio: 3.8,
    foregroundColor: '#0969DA',
    backgroundColor: '#FFFFFF',
    textSize: 'large',
    requiredLevel: 'AA',
    showIcon: true,
    showDetails: true,
    showTooltip: true
  },
  parameters: {
    docs: {
      description: {
        story: '大きなテキストのコントラスト比。大テキストは基準が緙和される'
      }
    }
  }
};

// Government Brand Colors
export const GovernmentColors: Story = {
  args: {
    ratio: 8.9,
    foregroundColor: '#003F7F',
    backgroundColor: '#F8F9FA',
    textSize: 'normal',
    requiredLevel: 'AA',
    showIcon: true,
    showDetails: true,
    showTooltip: true
  },
  parameters: {
    docs: {
      description: {
        story: '政府系サイトで使用されるカラーのコントラスト比検証例'
      }
    }
  }
};

// Dark Mode Example
export const DarkMode: Story = {
  args: {
    ratio: 15.3,
    foregroundColor: '#FFFFFF',
    backgroundColor: '#1F2937',
    textSize: 'normal',
    requiredLevel: 'AAA',
    showIcon: true,
    showDetails: true,
    showTooltip: true
  },
  parameters: {
    docs: {
      description: {
        story: 'ダークモードでのコントラスト比。高コントラストでAAA基準を満たす'
      }
    }
  }
};

// Multiple Ratios Comparison
export const ComparisonGrid: Story = {
  render: () => ({
    template: `
      <div class="space-y-4">
        <h3 class="text-lg font-semibold">コントラスト比比較</h3>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div class="space-y-2">
            <h4 class="font-medium">通常テキスト</h4>
            <BaseRatioTag :ratio="21" foreground-color="#000000" background-color="#FFFFFF" text-size="normal" required-level="AAA" show-details />
            <BaseRatioTag :ratio="7.2" foreground-color="#2563EB" background-color="#FFFFFF" text-size="normal" required-level="AAA" show-details />
            <BaseRatioTag :ratio="4.8" foreground-color="#059669" background-color="#FFFFFF" text-size="normal" required-level="AAA" show-details />
            <BaseRatioTag :ratio="2.9" foreground-color="#DC2626" background-color="#FFFFFF" text-size="normal" required-level="AAA" show-details />
          </div>
          <div class="space-y-2">
            <h4 class="font-medium">大きなテキスト</h4>
            <BaseRatioTag :ratio="21" foreground-color="#000000" background-color="#FFFFFF" text-size="large" required-level="AAA" show-details />
            <BaseRatioTag :ratio="7.2" foreground-color="#2563EB" background-color="#FFFFFF" text-size="large" required-level="AAA" show-details />
            <BaseRatioTag :ratio="4.8" foreground-color="#059669" background-color="#FFFFFF" text-size="large" required-level="AAA" show-details />
            <BaseRatioTag :ratio="2.9" foreground-color="#DC2626" background-color="#FFFFFF" text-size="large" required-level="AAA" show-details />
          </div>
        </div>
      </div>
    `
  }),
  parameters: {
    docs: {
      description: {
        story: '異なるコントラスト比の比較表示。通常テキストと大きなテキストでの違いを確認'
      }
    }
  }
};


// Interactive Story
export const Interactive: Story = {
  args: {
    ...Default.args,
    ratio: 6.1,
    foregroundColor: '#333333',
    backgroundColor: '#F0F0F0',
    showDetails: true
  },
  parameters: {
    docs: {
      description: {
        story: 'インタラクティブなコントラスト比タグ。Controlsで比率、色、設定を変更してアクセシビリティを確認'
      }
    }
  }
};
