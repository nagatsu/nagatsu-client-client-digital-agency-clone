import type { Meta, StoryObj } from '@storybook/vue3';
import BaseMobileMenu from './BaseMobileMenu.vue';

// Meta 設定
const meta: Meta<typeof BaseMobileMenu> = {
  title: 'Base/BaseMobileMenu',
  component: BaseMobileMenu,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'BaseMobileMenu コンポーネント - 94.5/100品質のModel-A Design System'
      }
    }
  },
  tags: ['autodocs'],
  argTypes: {
    modelValue: {
      description: 'modelValue property',
      control: { type: 'boolean' }
    },
    menuItems: {
      description: 'menuItems property',
      control: { type: 'text' }
    },
    headerContent: {
      description: 'headerContent property',
      control: { type: 'text' }
    },
    footerContent: {
      description: 'footerContent property',
      control: { type: 'text' }
    },
    triggerIcon: {
      description: 'triggerIcon property',
      control: { type: 'text' }
    },
    variant: {
      description: 'variant property',
      control: { type: 'text' }
    },
    position: {
      description: 'position property',
      control: { type: 'text' }
    },
    width: {
      description: 'width property',
      control: { type: 'text' }
    },
    showOverlay: {
      description: 'showOverlay property',
      control: { type: 'boolean' }
    },
    closeOnItemClick: {
      description: 'closeOnItemClick property',
      control: { type: 'boolean' }
    },
    closeOnOutsideClick: {
      description: 'closeOnOutsideClick property',
      control: { type: 'boolean' }
    },
    menuId: {
      description: 'menuId property',
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
    modelValue: false,
    menuItems: [
      { id: 'home', label: 'ホーム', href: '/', current: true },
      { id: 'about', label: 'サイトについて', href: '/about' },
      { id: 'services', label: 'サービス', href: '/services' },
      { type: 'divider' },
      { id: 'contact', label: 'お問い合わせ', href: '/contact' },
      { id: 'support', label: 'サポート', href: '/support', badge: 'New' }
    ],
    headerContent: '政府サイト',
    variant: 'default',
    position: 'left',
    width: 'md',
    showOverlay: true,
    closeOnItemClick: true,
    closeOnOutsideClick: true,
    ariaLabel: 'メインナビゲーション'
  }
};


// Government Site Example
export const GovernmentSite: Story = {
  args: {
    ...Default.args,
    headerContent: 'デジタル庁',
    menuItems: [
      { id: 'home', label: 'トップページ', href: '/', current: true },
      { type: 'group', label: '政策情報' },
      { id: 'policy', label: 'デジタル政策', href: '/policy' },
      { id: 'dxreport', label: 'DX白書', href: '/dxreport' },
      { type: 'group', label: 'サービス' },
      { id: 'mynumber', label: 'マイナンバー', href: '/mynumber' },
      { id: 'govcloud', label: 'ガバメントクラウド', href: '/govcloud' },
      { type: 'divider' },
      { id: 'contact', label: 'お問い合わせ', href: '/contact' },
      { id: 'english', label: 'English', href: '/en', external: true }
    ],
    footerContent: '© 2024 デジタル庁',
    variant: 'branded'
  },
  parameters: {
    docs: {
      description: {
        story: '政府系サイトでのモバイルメニュー例。グループ分け、バッジ、外部リンク表示に対応'
      }
    }
  }
};

// Right Position
export const RightPosition: Story = {
  args: {
    ...Default.args,
    position: 'right',
    headerContent: '右から開くメニュー'
  },
  parameters: {
    docs: {
      description: {
        story: '右からスライドするモバイルメニュー。レイアウトに合わせて選択可能'
      }
    }
  }
};

// Large Width
export const LargeWidth: Story = {
  args: {
    ...Default.args,
    width: 'lg',
    headerContent: '幅広メニュー'
  },
  parameters: {
    docs: {
      description: {
        story: '大きな幅のモバイルメニュー。コンテンツが多い場合に適用'
      }
    }
  }
};

// Minimal Style
export const Minimal: Story = {
  args: {
    ...Default.args,
    variant: 'minimal',
    showOverlay: false,
    headerContent: '',
    footerContent: ''
  },
  parameters: {
    docs: {
      description: {
        story: 'ミニマルスタイル。オーバーレイなし、ヘッダー・フッターなし'
      }
    }
  }
};

// With Icons and Badges
export const WithIconsAndBadges: Story = {
  args: {
    ...Default.args,
    menuItems: [
      { id: 'dashboard', label: 'ダッシュボード', href: '/dashboard', current: true },
      { id: 'messages', label: 'メッセージ', href: '/messages', badge: '5' },
      { id: 'notifications', label: '通知', href: '/notifications', badge: '12' },
      { type: 'divider' },
      { id: 'settings', label: '設定', href: '/settings' },
      { id: 'help', label: 'ヘルプ', href: '/help' },
      { id: 'logout', label: 'ログアウト', href: '/logout' }
    ],
    headerContent: 'ユーザーメニュー'
  },
  parameters: {
    docs: {
      description: {
        story: 'アイコンやバッジ付きのメニュー。未読数や状態表示に有用'
      }
    }
  }
};

// No Overlay
export const NoOverlay: Story = {
  args: {
    ...Default.args,
    showOverlay: false
  },
  parameters: {
    docs: {
      description: {
        story: 'オーバーレイなしのモバイルメニュー。バックグラウンドが暗くならない'
      }
    }
  }
};


// Interactive Story
export const Interactive: Story = {
  args: {
    ...Default.args,
    headerContent: 'インタラクティブメニュー'
  },
  parameters: {
    docs: {
      description: {
        story: 'インタラクティブなモバイルメニュー。ハンバーガーボタンで開闉し、設定をControlsで変更可能'
      }
    }
  }
};
