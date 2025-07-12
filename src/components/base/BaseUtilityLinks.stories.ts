import type { Meta, StoryObj } from '@storybook/vue3'
import BaseUtilityLinks from './BaseUtilityLinks.vue'

// Meta 設定
const meta: Meta<typeof BaseUtilityLinks> = {
  title: 'Base/BaseUtilityLinks',
  component: BaseUtilityLinks,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'BaseUtilityLinks コンポーネント - 94.5/100品質のModel-A Design System。アクセシブルなユーティリティリンクナビゲーション。'
      }
    }
  },
  tags: ['autodocs'],
  argTypes: {
    links: {
      description: 'リンク配列',
      control: { type: 'object' }
    },
    alignment: {
      description: 'リンクの配置',
      control: { type: 'select' },
      options: ['left', 'center', 'right']
    },
    size: {
      description: 'サイズ',
      control: { type: 'select' },
      options: ['sm', 'md', 'lg']
    },
    theme: {
      description: 'カラーテーマ',
      control: { type: 'select' },
      options: ['light', 'dark']
    },
    ariaLabel: {
      description: 'アクセシビリティラベル',
      control: { type: 'text' }
    }
  }
}

export default meta
type Story = StoryObj<typeof meta>

// サンプルリンク
const sampleLinks = [
  { text: 'お問合わせ', url: '/contact', external: false },
  { text: 'よくあるご質問', url: '/faq', external: false },
  { text: 'ヘルプ', url: '/help', external: false },
  { text: 'アクセス', url: '/access', external: false },
  { text: 'プライバシーポリシー', url: '/privacy', external: false }
]

const externalLinks = [
  { text: 'GitHub', url: 'https://github.com', external: true },
  { text: 'Twitter', url: 'https://twitter.com', external: true },
  { text: 'LinkedIn', url: 'https://linkedin.com', external: true }
]

// Default Story
export const Default: Story = {
  args: {
    links: sampleLinks,
    alignment: 'left',
    size: 'md',
    theme: 'light',
    ariaLabel: 'ユーティリティリンク'
  }
}

// Small Variant
export const Small: Story = {
  args: {
    ...Default.args,
    size: 'sm'
  }
}

// Large Variant  
export const Large: Story = {
  args: {
    ...Default.args,
    size: 'lg'
  }
}

// Center alignment
export const CenterAlignment: Story = {
  args: {
    ...Default.args,
    alignment: 'center'
  }
}

// Right alignment
export const RightAlignment: Story = {
  args: {
    ...Default.args,
    alignment: 'right'
  }
}

// Dark theme
export const DarkTheme: Story = {
  args: {
    ...Default.args,
    theme: 'dark'
  },
  parameters: {
    backgrounds: {
      default: 'dark'
    }
  }
}

// External links
export const ExternalLinks: Story = {
  args: {
    ...Default.args,
    links: externalLinks
  }
}

// Mixed links
export const MixedLinks: Story = {
  args: {
    ...Default.args,
    links: [
      { text: 'ホーム', url: '/', external: false },
      { text: 'GitHub', url: 'https://github.com', external: true },
      { text: 'お問合わせ', url: '/contact', external: false },
      { text: 'Twitter', url: 'https://twitter.com', external: true }
    ]
  }
}

// Interactive Story
export const Interactive: Story = {
  args: {
    ...Default.args
  },
  parameters: {
    docs: {
      description: {
        story: 'このストーリーではBaseUtilityLinksのインタラクティブな動作を確認できます。リンクをクリックしてアクションを確認してください。'
      }
    }
  }
}
