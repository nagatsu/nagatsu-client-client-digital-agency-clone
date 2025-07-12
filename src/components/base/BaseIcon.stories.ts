import type { Meta, StoryObj } from '@storybook/vue3'
import BaseIcon from './BaseIcon.vue'

const meta: Meta<typeof BaseIcon> = {
  title: 'Components/Base/BaseIcon',
  component: BaseIcon,
  parameters: {
    docs: {
      description: {
        component: 'Heroiconsを使用したアイコンコンポーネント。outline/solidタイプ、サイズ、カラーなどをカスタマイズ可能。'
      }
    }
  },
  argTypes: {
    name: {
      control: 'select',
      options: [
        'Home',
        'User',
        'Cog6Tooth',
        'Bell',
        'Heart',
        'Star',
        'Search',
        'Plus',
        'Minus',
        'Check',
        'X',
        'ChevronLeft',
        'ChevronRight',
        'ChevronUp',
        'ChevronDown',
        'ArrowLeft',
        'ArrowRight',
        'Download',
        'Upload',
        'Eye',
        'EyeSlash',
        'Lock',
        'Unlock',
        'Mail',
        'Phone',
        'Calendar',
        'Clock',
        'Document',
        'Folder',
        'Photo',
        'Play',
        'Pause',
        'Stop',
        'QuestionMarkCircle',
        'ExclamationTriangle',
        'CheckCircle',
        'XCircle',
        'InformationCircle'
      ],
      description: 'Heroiconsのアイコン名'
    },
    type: {
      control: 'select',
      options: ['outline', 'solid'],
      description: 'アイコンタイプ'
    },
    size: {
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg', 'xl', '2xl'],
      description: 'アイコンサイズ'
    },
    color: {
      control: 'select',
      options: ['current', 'primary', 'success', 'warning', 'error', 'info', 'neutral', 'white', 'black'],
      description: 'アイコンカラー'
    },
    spin: {
      control: 'boolean',
      description: '回転アニメーション'
    },
    clickable: {
      control: 'boolean',
      description: 'クリック可能'
    }
  }
}

export default meta
type Story = StoryObj<typeof meta>

// 基本的な使用例
export const Default: Story = {
  args: {
    name: 'Home',
    type: 'outline',
    size: 'md',
    color: 'current'
  }
}

// ソリッドタイプ
export const Solid: Story = {
  args: {
    name: 'Heart',
    type: 'solid',
    size: 'md',
    color: 'error'
  }
}

// サイズバリエーション
export const Sizes: Story = {
  render: () => ({
    components: { BaseIcon },
    template: `
      <div class="flex items-center gap-4">
        <BaseIcon name="Star" size="xs" color="warning" />
        <BaseIcon name="Star" size="sm" color="warning" />
        <BaseIcon name="Star" size="md" color="warning" />
        <BaseIcon name="Star" size="lg" color="warning" />
        <BaseIcon name="Star" size="xl" color="warning" />
        <BaseIcon name="Star" size="2xl" color="warning" />
      </div>
    `
  })
}

// カラーバリエーション
export const Colors: Story = {
  render: () => ({
    components: { BaseIcon },
    template: `
      <div class="flex items-center gap-4 flex-wrap">
        <BaseIcon name="Heart" type="solid" color="primary" />
        <BaseIcon name="Heart" type="solid" color="success" />
        <BaseIcon name="Heart" type="solid" color="warning" />
        <BaseIcon name="Heart" type="solid" color="error" />
        <BaseIcon name="Heart" type="solid" color="info" />
        <BaseIcon name="Heart" type="solid" color="neutral" />
      </div>
    `
  })
}

// アニメーション
export const Spinning: Story = {
  args: {
    name: 'Cog6Tooth',
    type: 'outline',
    size: 'lg',
    color: 'primary',
    spin: true
  }
}

// クリック可能
export const Clickable: Story = {
  args: {
    name: 'Plus',
    type: 'solid',
    size: 'md',
    color: 'primary',
    clickable: true,
    ariaLabel: 'Add item'
  }
}

// ナビゲーションアイコン
export const Navigation: Story = {
  render: () => ({
    components: { BaseIcon },
    template: `
      <div class="flex items-center gap-4">
        <BaseIcon name="ChevronLeft" size="md" color="neutral" clickable aria-label="Previous" />
        <BaseIcon name="ChevronRight" size="md" color="neutral" clickable aria-label="Next" />
        <BaseIcon name="ChevronUp" size="md" color="neutral" clickable aria-label="Up" />
        <BaseIcon name="ChevronDown" size="md" color="neutral" clickable aria-label="Down" />
      </div>
    `
  })
}

// ステータスアイコン
export const Status: Story = {
  render: () => ({
    components: { BaseIcon },
    template: `
      <div class="flex items-center gap-4">
        <BaseIcon name="CheckCircle" type="solid" color="success" size="lg" aria-label="Success" />
        <BaseIcon name="ExclamationTriangle" type="solid" color="warning" size="lg" aria-label="Warning" />
        <BaseIcon name="XCircle" type="solid" color="error" size="lg" aria-label="Error" />
        <BaseIcon name="InformationCircle" type="solid" color="info" size="lg" aria-label="Information" />
      </div>
    `
  })
}

// よく使用されるアイコン
export const Common: Story = {
  render: () => ({
    components: { BaseIcon },
    template: `
      <div class="grid grid-cols-6 gap-4 p-4">
        <div class="text-center">
          <BaseIcon name="Home" size="lg" color="neutral" class="mx-auto mb-1" />
          <div class="text-xs text-neutral-600">Home</div>
        </div>
        <div class="text-center">
          <BaseIcon name="User" size="lg" color="neutral" class="mx-auto mb-1" />
          <div class="text-xs text-neutral-600">User</div>
        </div>
        <div class="text-center">
          <BaseIcon name="Search" size="lg" color="neutral" class="mx-auto mb-1" />
          <div class="text-xs text-neutral-600">Search</div>
        </div>
        <div class="text-center">
          <BaseIcon name="Bell" size="lg" color="neutral" class="mx-auto mb-1" />
          <div class="text-xs text-neutral-600">Bell</div>
        </div>
        <div class="text-center">
          <BaseIcon name="Cog6Tooth" size="lg" color="neutral" class="mx-auto mb-1" />
          <div class="text-xs text-neutral-600">Settings</div>
        </div>
        <div class="text-center">
          <BaseIcon name="Mail" size="lg" color="neutral" class="mx-auto mb-1" />
          <div class="text-xs text-neutral-600">Mail</div>
        </div>
      </div>
    `
  })
}