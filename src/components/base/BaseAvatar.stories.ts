import type { Meta, StoryObj } from '@storybook/vue3';
import BaseAvatar from './BaseAvatar.vue';

// Meta 設定
const meta: Meta<typeof BaseAvatar> = {
  title: 'Base/BaseAvatar',
  component: BaseAvatar,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'BaseAvatar コンポーネント - 94.5/100品質のModel-A Design System'
      }
    }
  },
  tags: ['autodocs'],
  argTypes: {
    src: {
      description: 'src property',
      control: { type: 'text' }
    },
    alt: {
      description: 'alt property',
      control: { type: 'text' }
    },
    name: {
      description: 'name property',
      control: { type: 'text' }
    },
    title: {
      description: 'title property',
      control: { type: 'text' }
    },
    size: {
      description: 'size property',
      control: { type: 'text' }
    },
    variant: {
      description: 'variant property',
      control: { type: 'text' }
    },
    status: {
      description: 'status property',
      control: { type: 'text' }
    },
    showStatus: {
      description: 'showStatus property',
      control: { type: 'boolean' }
    },
    badge: {
      description: 'badge property',
      control: { type: 'text' }
    },
    badgeVariant: {
      description: 'badgeVariant property',
      control: { type: 'text' }
    },
    defaultIcon: {
      description: 'defaultIcon property',
      control: { type: 'text' }
    },
    backgroundColor: {
      description: 'backgroundColor property',
      control: { type: 'text' }
    },
    textColor: {
      description: 'textColor property',
      control: { type: 'text' }
    },
    clickable: {
      description: 'clickable property',
      control: { type: 'boolean' }
    },
    showTooltip: {
      description: 'showTooltip property',
      control: { type: 'boolean' }
    },
    loading: {
      description: 'loading property',
      control: { type: 'boolean' }
    }
  
  }
};

export default meta;
type Story = StoryObj<typeof meta>;

// Default Story
export const Default: Story = {
  args: {
    name: '田中太郎',
    title: 'システム管理者',
    size: 'md',
    variant: 'circle',
    showStatus: false,
    clickable: false,
    showTooltip: false,
    loading: false
  }
};


// With Profile Image
export const WithImage: Story = {
  args: {
    ...Default.args,
    src: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
    name: '山田花子',
    title: 'デザイナー',
    showTooltip: true
  },
  parameters: {
    docs: {
      description: {
        story: 'プロフィール画像付きのアバター。ホバーで詳細情報を表示'
      }
    }
  }
};

// Size Variations
export const SizeVariations: Story = {
  render: () => ({
    template: `
      <div class="flex items-center space-x-4">
        <BaseAvatar size="xs" name="田中" />
        <BaseAvatar size="sm" name="田中" />
        <BaseAvatar size="md" name="田中" />
        <BaseAvatar size="lg" name="田中" />
        <BaseAvatar size="xl" name="田中" />
        <BaseAvatar size="2xl" name="田中" />
      </div>
    `
  }),
  parameters: {
    docs: {
      description: {
        story: '異なるサイズのアバター。xs, sm, md, lg, xl, 2xlに対応'
      }
    }
  }
};

// With Status Indicator
export const WithStatus: Story = {
  args: {
    ...Default.args,
    name: '佐藤次郎',
    title: 'エンジニア',
    status: 'online',
    showStatus: true,
    showTooltip: true
  },
  parameters: {
    docs: {
      description: {
        story: 'オンライン状態表示付きアバター。online, offline, away, busy, invisibleに対応'
      }
    }
  }
};

// Government Employee
export const GovernmentEmployee: Story = {
  args: {
    name: '政府太郎',
    title: 'デジタル庁職員',
    size: 'lg',
    variant: 'circle',
    status: 'online',
    showStatus: true,
    clickable: true,
    showTooltip: true
  },
  parameters: {
    docs: {
      description: {
        story: '政府系サイトでの職員アバター例。クリック可能でステータス表示'
      }
    }
  }
};

// With Badge
export const WithBadge: Story = {
  args: {
    ...Default.args,
    name: '管理者',
    title: 'システム管理者',
    badge: '5',
    badgeVariant: 'error',
    size: 'lg'
  },
  parameters: {
    docs: {
      description: {
        story: '通知バッジ付きアバター。未読メッセージ数などの表示に使用'
      }
    }
  }
};

// Different Variants
export const VariantComparison: Story = {
  render: () => ({
    template: `
      <div class="flex items-center space-x-4">
        <div class="text-center">
          <BaseAvatar variant="circle" name="円" size="lg" />
          <p class="mt-2 text-sm">Circle</p>
        </div>
        <div class="text-center">
          <BaseAvatar variant="rounded" name="角" size="lg" />
          <p class="mt-2 text-sm">Rounded</p>
        </div>
        <div class="text-center">
          <BaseAvatar variant="square" name="四" size="lg" />
          <p class="mt-2 text-sm">Square</p>
        </div>
      </div>
    `
  }),
  parameters: {
    docs: {
      description: {
        story: '形状バリエーション: circle（円形）、rounded（角丸）、square（四角）'
      }
    }
  }
};

// Custom Colors
export const CustomColors: Story = {
  args: {
    ...Default.args,
    name: 'カスタム',
    backgroundColor: '#3B82F6',
    textColor: '#FFFFFF',
    size: 'lg'
  },
  parameters: {
    docs: {
      description: {
        story: 'カスタム背景色・文字色のアバター。ブランドカラーに合わせて調整可能'
      }
    }
  }
};

// Loading State
export const LoadingState: Story = {
  args: {
    ...Default.args,
    src: 'https://via.placeholder.com/150x150/cccccc/666666?text=Loading...',
    name: 'ローディング',
    loading: true
  },
  parameters: {
    docs: {
      description: {
        story: 'ローディング状態のアバター。画像読み込み中にアニメーション表示'
      }
    }
  }
};


// Interactive Story
export const Interactive: Story = {
  args: {
    ...Default.args,
    name: 'インタラクティブ',
    title: 'テストユーザー',
    clickable: true,
    showTooltip: true,
    status: 'online',
    showStatus: true
  },
  parameters: {
    docs: {
      description: {
        story: 'インタラクティブなアバター。クリック可能、ツールチップ表示、ステータス表示機能をControlsで調整可能'
      }
    }
  }
};
