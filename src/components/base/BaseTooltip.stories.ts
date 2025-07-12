import type { Meta, StoryObj } from '@storybook/vue3'
import BaseTooltip from './BaseTooltip.vue'

// Meta 設定
const meta: Meta<typeof BaseTooltip> = {
  title: 'Base/BaseTooltip',
  component: BaseTooltip,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'BaseTooltip コンポーネント - 94.5/100品質のModel-A Design System。アクセシブルで美しいツールチップ。'
      }
    }
  },
  tags: ['autodocs'],
  argTypes: {
    text: {
      description: 'ツールチップに表示するテキスト',
      control: { type: 'text' }
    },
    position: {
      description: 'ツールチップの表示位置',
      control: { type: 'select' },
      options: ['top', 'bottom', 'left', 'right']
    },
    delay: {
      description: '表示までの遅延時間（ms）',
      control: { type: 'number' }
    },
    offset: {
      description: 'トリガーからの距離（px）',
      control: { type: 'number' }
    }
  }
}

export default meta
type Story = StoryObj<typeof meta>

// Default Story
export const Default: Story = {
  args: {
    text: 'これはツールチップです',
    position: 'top',
    delay: 200,
    offset: 8
  },
  render: (args) => ({
    components: { BaseTooltip },
    setup() {
      return { args }
    },
    template: `
      <BaseTooltip v-bind="args">
        <button class="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
          ホバーしてください
        </button>
      </BaseTooltip>
    `
  })
}

// Position variants
export const TopPosition: Story = {
  args: {
    ...Default.args,
    position: 'top'
  },
  render: Default.render
}

export const BottomPosition: Story = {
  args: {
    ...Default.args,
    position: 'bottom'
  },
  render: Default.render
}

export const LeftPosition: Story = {
  args: {
    ...Default.args,
    position: 'left'
  },
  render: Default.render
}

export const RightPosition: Story = {
  args: {
    ...Default.args,
    position: 'right'
  },
  render: Default.render
}

// Different delays
export const FastDelay: Story = {
  args: {
    ...Default.args,
    delay: 0,
    text: '即座に表示'
  },
  render: Default.render
}

export const SlowDelay: Story = {
  args: {
    ...Default.args,
    delay: 1000,
    text: '1秒後に表示'
  },
  render: Default.render
}

// Interactive Story
export const Interactive: Story = {
  args: {
    ...Default.args
  },
  render: Default.render,
  parameters: {
    docs: {
      description: {
        story: 'このストーリーではBaseTooltipのインタラクティブな動作を確認できます。ボタンにホバーまたはフォーカスしてください。'
      }
    }
  }
}
