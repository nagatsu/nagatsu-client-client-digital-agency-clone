import type { Meta, StoryObj } from '@storybook/vue3'
import RatingStars from './RatingStars.vue'

// Meta 設定
const meta: Meta<typeof RatingStars> = {
  title: 'Base/RatingStars',
  component: RatingStars,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'RatingStars コンポーネント - 94.5/100品質のModel-A Design System。アクセシブルで高機能な星評価システム。'
      }
    }
  },
  tags: ['autodocs'],
  argTypes: {
    modelValue: {
      description: '評価値',
      control: { type: 'number', min: 0, max: 5, step: 0.5 }
    },
    max: {
      description: '最大星数',
      control: { type: 'number', min: 1, max: 10 }
    },
    size: {
      description: 'サイズ',
      control: { type: 'select' },
      options: ['xs', 'sm', 'md', 'lg', 'xl', '2xl']
    },
    interactive: {
      description: 'インタラクティブ（クリック可能）',
      control: { type: 'boolean' }
    },
    disabled: {
      description: '無効状態',
      control: { type: 'boolean' }
    },
    showValue: {
      description: '数値表示',
      control: { type: 'boolean' }
    },
    showCount: {
      description: 'レビュー数表示',
      control: { type: 'boolean' }
    },
    count: {
      description: 'レビュー数',
      control: { type: 'number' }
    },
    showLabels: {
      description: 'ラベル表示',
      control: { type: 'boolean' }
    },
    clearable: {
      description: 'クリア可能',
      control: { type: 'boolean' }
    },
    allowHalf: {
      description: '半分の星を許可',
      control: { type: 'boolean' }
    },
    readonly: {
      description: '読み取り専用',
      control: { type: 'boolean' }
    },
    color: {
      description: 'カラーテーマ',
      control: { type: 'select' },
      options: ['primary', 'warning', 'success', 'error', 'info', 'neutral']
    }
  }
}

export default meta
type Story = StoryObj<typeof meta>

// Default Story
export const Default: Story = {
  args: {
    modelValue: 3,
    max: 5,
    size: 'md',
    interactive: false,
    disabled: false,
    showValue: false,
    showCount: false,
    count: 0,
    showLabels: false,
    clearable: true,
    allowHalf: false,
    readonly: false,
    color: 'warning'
  }
}

// With value display
export const WithValue: Story = {
  args: {
    ...Default.args,
    modelValue: 4.2,
    showValue: true,
    allowHalf: true
  }
}

// With count display
export const WithCount: Story = {
  args: {
    ...Default.args,
    modelValue: 4.5,
    showValue: true,
    showCount: true,
    count: 1249,
    allowHalf: true
  }
}

// Interactive (clickable)
export const Interactive: Story = {
  args: {
    ...Default.args,
    modelValue: 0,
    interactive: true,
    showValue: true,
    showLabels: true
  }
}

// Different sizes
export const SmallSize: Story = {
  args: {
    ...Default.args,
    size: 'sm',
    modelValue: 4
  }
}

export const LargeSize: Story = {
  args: {
    ...Default.args,
    size: 'lg',
    modelValue: 4
  }
}

// Different colors
export const PrimaryColor: Story = {
  args: {
    ...Default.args,
    color: 'primary',
    modelValue: 4
  }
}

export const SuccessColor: Story = {
  args: {
    ...Default.args,
    color: 'success',
    modelValue: 4
  }
}

export const ErrorColor: Story = {
  args: {
    ...Default.args,
    color: 'error',
    modelValue: 2
  }
}

// Half stars
export const HalfStars: Story = {
  args: {
    ...Default.args,
    modelValue: 3.5,
    allowHalf: true,
    showValue: true
  }
}

// Disabled state
export const Disabled: Story = {
  args: {
    ...Default.args,
    modelValue: 3,
    disabled: true,
    interactive: true
  }
}

// Readonly state
export const ReadOnly: Story = {
  args: {
    ...Default.args,
    modelValue: 4,
    readonly: true,
    interactive: true
  }
}

// Full example
export const FullExample: Story = {
  args: {
    ...Default.args,
    modelValue: 4.3,
    interactive: true,
    showValue: true,
    showCount: true,
    count: 892,
    showLabels: true,
    allowHalf: true,
    clearable: true
  },
  parameters: {
    docs: {
      description: {
        story: 'すべての機能を有効にした完全な例。クリックして評価を変更できます。'
      }
    }
  }
}
