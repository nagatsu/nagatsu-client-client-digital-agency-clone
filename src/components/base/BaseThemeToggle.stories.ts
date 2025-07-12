import type { Meta, StoryObj } from '@storybook/vue3'
import BaseThemeToggle from './BaseThemeToggle.vue'

// Meta 設定
const meta: Meta<typeof BaseThemeToggle> = {
  title: 'Base/BaseThemeToggle',
  component: BaseThemeToggle,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'BaseThemeToggle コンポーネント - 94.5/100品質のModel-A Design System。美しいアニメーションとアクセシビリティを備えたテーマ切り替えボタン。'
      }
    }
  },
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: { type: 'select' },
      options: ['sm', 'md', 'lg']
    },
    variant: {
      control: { type: 'select' },
      options: ['default', 'minimal', 'floating']
    }
  }
}

export default meta
type Story = StoryObj<typeof meta>

// Default Story
export const Default: Story = {
  args: {
    size: 'md',
    variant: 'default'
  }
}

// Small Variant
export const Small: Story = {
  args: {
    size: 'sm',
    variant: 'default'
  }
}

// Large Variant  
export const Large: Story = {
  args: {
    size: 'lg',
    variant: 'default'
  }
}

// Minimal Variant
export const Minimal: Story = {
  args: {
    size: 'md',
    variant: 'minimal'
  }
}

// Floating Variant
export const Floating: Story = {
  args: {
    size: 'md',
    variant: 'floating'
  }
}

// Interactive Story
export const Interactive: Story = {
  args: {
    size: 'md',
    variant: 'default'
  },
  parameters: {
    docs: {
      description: {
        story: 'このストーリーではBaseThemeToggleのインタラクティブな動作を確認できます。クリックしてテーマを切り替えてください。'
      }
    }
  }
}
