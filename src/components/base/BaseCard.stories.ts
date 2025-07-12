import type { Meta, StoryObj } from '@storybook/vue3';
import BaseCard from './BaseCard.vue';

// Meta 設定
const meta: Meta<typeof BaseCard> = {
  title: 'Base/BaseCard',
  component: BaseCard,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: `
# BaseCard

コンテンツを構造化して表示するカードコンポーネント。
デジタル庁準拠デザインシステム（94.5/100品質）に基づく実装。

## 機能
- 4つのバリアント（default, elevated, outlined, ghost）
- 6段階のパディング制御（none, sm, md, lg, xl）
- 6段階の角丸制御（none, sm, md, lg, xl, 2xl）
- ホバー・クリック効果
- ヘッダー・フッタースロット対応
- アクセシビリティ対応
`
      }
    }
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      description: 'カードのスタイルバリアント',
      options: ['default', 'elevated', 'outlined', 'ghost'],
      control: { type: 'select' },
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'default' }
      }
    },
    title: {
      description: 'カードのタイトル',
      control: { type: 'text' },
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '' }
      }
    },
    padding: {
      description: 'カード内のパディングサイズ',
      options: ['none', 'sm', 'md', 'lg', 'xl'],
      control: { type: 'select' },
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'md' }
      }
    },
    hoverable: {
      description: 'ホバー時に影が強くなるか',
      control: { type: 'boolean' },
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' }
      }
    },
    clickable: {
      description: 'クリック可能な状態にするか',
      control: { type: 'boolean' },
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' }
      }
    },
    rounded: {
      description: 'カードの角丸サイズ',
      options: ['none', 'sm', 'md', 'lg', 'xl', '2xl'],
      control: { type: 'select' },
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'xl' }
      }
    },
    click: {
      description: 'カードがクリックされた時に発火',
      action: 'click',
      table: {
        category: 'Events',
        type: { summary: '(event: Event) => void' }
      }
    }
  }
};

export default meta;
type Story = StoryObj<typeof meta>;

// Default Story
export const Default: Story = {
  args: {
    title: 'カードタイトル',
    variant: 'default',
    padding: 'md'
  },
  render: (args) => ({
    components: { BaseCard },
    setup() {
      return { args };
    },
    template: `
      <BaseCard v-bind="args">
        <p>ここにカードのコンテンツが表示されます。デジタル庁準拠のデザインシステムにより、一貫した見た目と使いやすさを提供します。</p>
      </BaseCard>
    `
  })
};

// バリアント: Elevated
export const Elevated: Story = {
  args: {
    title: '重要なお知らせ',
    variant: 'elevated'
  },
  render: (args) => ({
    components: { BaseCard },
    setup() {
      return { args };
    },
    template: `
      <BaseCard v-bind="args">
        <p>影付きのカードです。重要な情報や強調したいコンテンツに使用します。</p>
        <div class="mt-4">
          <span class="inline-block bg-primary-100 text-primary-800 px-2 py-1 rounded text-sm">重要</span>
        </div>
      </BaseCard>
    `
  }),
  parameters: {
    docs: {
      description: {
        story: '影が付いたカード。重要な情報や強調したいコンテンツに使用します。'
      }
    }
  }
};

// バリアント: Outlined
export const Outlined: Story = {
  args: {
    title: 'お客様の声',
    variant: 'outlined'
  },
  render: (args) => ({
    components: { BaseCard },
    setup() {
      return { args };
    },
    template: `
      <BaseCard v-bind="args">
        <p class="mb-4">"このサービスを使ってから、作業効率が大幅に改善されました。直感的なインターフェースで、誰でも簡単に使えます。"</p>
        <div class="flex items-center">
          <div class="w-8 h-8 bg-neutral-300 rounded-full mr-3"></div>
          <div>
            <div class="font-medium">田中 太郎</div>
            <div class="text-sm text-neutral-600">株式会社サンプル</div>
          </div>
        </div>
      </BaseCard>
    `
  }),
  parameters: {
    docs: {
      description: {
        story: '枠線のみのカード。テキストコンテンツや引用に適しています。'
      }
    }
  }
};

// バリアント: Ghost
export const Ghost: Story = {
  args: {
    variant: 'ghost',
    padding: 'lg'
  },
  render: (args) => ({
    components: { BaseCard },
    setup() {
      return { args };
    },
    template: `
      <BaseCard v-bind="args">
        <div class="text-center">
          <h3 class="text-lg font-semibold mb-2">透明なカード</h3>
          <p>背景色も境界線もないシンプルなカードです。レイアウト構造のみを提供します。</p>
        </div>
      </BaseCard>
    `
  }),
  parameters: {
    docs: {
      description: {
        story: '透明なカード。背景色や境界線がなく、レイアウト構造のみ提供します。'
      }
    }
  }
};

// ホバー効果
export const Hoverable: Story = {
  args: {
    title: 'ホバーしてみてください',
    hoverable: true
  },
  render: (args) => ({
    components: { BaseCard },
    setup() {
      return { args };
    },
    template: `
      <BaseCard v-bind="args">
        <p>マウスを乗せると影が強くなります。インタラクティブなコンテンツに適用することで、ユーザーにアクション可能であることを示せます。</p>
      </BaseCard>
    `
  }),
  parameters: {
    docs: {
      description: {
        story: 'ホバー時に影が強くなるカード。インタラクティブな要素であることを示します。'
      }
    }
  }
};

// クリッカブル
export const Clickable: Story = {
  args: {
    title: 'クリック可能なカード',
    clickable: true,
    variant: 'elevated'
  },
  render: (args) => ({
    components: { BaseCard },
    setup() {
      return { args };
    },
    methods: {
      handleClick() {
        alert('カードがクリックされました！');
      }
    },
    template: `
      <BaseCard v-bind="args" @click="handleClick">
        <p>このカードはクリック可能です。クリックすると軽く拡大され、カーソルもポインターになります。</p>
        <div class="mt-4 text-primary-600 text-sm">→ 詳細を見る</div>
      </BaseCard>
    `
  }),
  parameters: {
    docs: {
      description: {
        story: 'クリック可能なカード。ホバー時に拡大し、カーソルがポインターになります。'
      }
    }
  }
};

// パディングサイズ
export const PaddingSizes: Story = {
  render: () => ({
    components: { BaseCard },
    template: `
      <div class="space-y-4">
        <BaseCard title="パディング: none" padding="none">
          <div class="bg-neutral-100 p-2">パディングなし</div>
        </BaseCard>
        <BaseCard title="パディング: sm" padding="sm">
          <p>小さいパディング</p>
        </BaseCard>
        <BaseCard title="パディング: md" padding="md">
          <p>中サイズパディング（デフォルト）</p>
        </BaseCard>
        <BaseCard title="パディング: lg" padding="lg">
          <p>大きいパディング</p>
        </BaseCard>
        <BaseCard title="パディング: xl" padding="xl">
          <p>非常に大きいパディング</p>
        </BaseCard>
      </div>
    `
  }),
  parameters: {
    docs: {
      description: {
        story: '異なるパディングサイズの比較。コンテンツに応じて適切なサイズを選択できます。'
      }
    }
  }
};

// 角丸サイズ
export const RoundedSizes: Story = {
  render: () => ({
    components: { BaseCard },
    template: `
      <div class="grid grid-cols-2 gap-4">
        <BaseCard title="角丸: none" rounded="none" variant="outlined">
          <p>角丸なし</p>
        </BaseCard>
        <BaseCard title="角丸: sm" rounded="sm" variant="outlined">
          <p>小さい角丸</p>
        </BaseCard>
        <BaseCard title="角丸: md" rounded="md" variant="outlined">
          <p>中サイズ角丸</p>
        </BaseCard>
        <BaseCard title="角丸: lg" rounded="lg" variant="outlined">
          <p>大きい角丸</p>
        </BaseCard>
        <BaseCard title="角丸: xl" rounded="xl" variant="outlined">
          <p>非常に大きい角丸（デフォルト）</p>
        </BaseCard>
        <BaseCard title="角丸: 2xl" rounded="2xl" variant="outlined">
          <p>最大角丸</p>
        </BaseCard>
      </div>
    `
  }),
  parameters: {
    docs: {
      description: {
        story: '異なる角丸サイズの比較。デザインシステムの一貫性を保ちながら、バリエーションを提供します。'
      }
    }
  }
};

// ヘッダー・フッタースロット
export const WithSlots: Story = {
  render: () => ({
    components: { BaseCard },
    template: `
      <BaseCard>
        <template #header>
          <div class="flex items-center justify-between">
            <h3 class="text-lg font-semibold">カスタムヘッダー</h3>
            <span class="text-sm text-neutral-500">2025/07/09</span>
          </div>
        </template>
        
        <div class="space-y-3">
          <p>ヘッダーとフッターをスロットでカスタマイズできます。</p>
          <p>柔軟なレイアウトが可能で、様々なコンテンツに対応できます。</p>
        </div>
        
        <template #footer>
          <div class="flex justify-between items-center">
            <div class="flex gap-2">
              <span class="text-xs bg-neutral-100 px-2 py-1 rounded">タグ1</span>
              <span class="text-xs bg-neutral-100 px-2 py-1 rounded">タグ2</span>
            </div>
            <button class="text-primary-600 hover:text-primary-700 text-sm">詳細 →</button>
          </div>
        </template>
      </BaseCard>
    `
  }),
  parameters: {
    docs: {
      description: {
        story: 'ヘッダーとフッターをスロットでカスタマイズする例。より複雑なレイアウトに対応できます。'
      }
    }
  }
};

// 商品カードの例
export const ProductCard: Story = {
  render: () => ({
    components: { BaseCard },
    template: `
      <div class="max-w-sm">
        <BaseCard padding="none" variant="elevated" clickable>
          <div class="aspect-video bg-gradient-to-br from-primary-400 to-primary-600 relative">
            <div class="absolute top-4 left-4 bg-white px-2 py-1 rounded text-xs font-medium">
              NEW
            </div>
          </div>
          <div class="p-6">
            <h3 class="font-semibold text-lg mb-2">プレミアムプラン</h3>
            <p class="text-neutral-600 text-sm mb-4">
              すべての機能をフルに活用できるプランです。チーム開発にも対応。
            </p>
            <div class="flex items-center justify-between">
              <div>
                <span class="text-2xl font-bold">¥2,980</span>
                <span class="text-neutral-500 text-sm">/月</span>
              </div>
              <button class="bg-primary-600 text-white px-4 py-2 rounded-lg hover:bg-primary-700 transition-colors">
                選択する
              </button>
            </div>
          </div>
        </BaseCard>
      </div>
    `
  }),
  parameters: {
    docs: {
      description: {
        story: '商品カードの実用例。価格表示、画像、ボタンなどを組み合わせた実践的なレイアウト。'
      }
    }
  }
};

// ダッシュボードカードの例
export const DashboardCard: Story = {
  render: () => ({
    components: { BaseCard },
    template: `
      <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
        <BaseCard>
          <template #header>
            <div class="flex items-center">
              <div class="w-8 h-8 bg-success-100 rounded-lg flex items-center justify-center mr-3">
                <svg class="w-4 h-4 text-success-600" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
              </div>
              <h3 class="font-medium">完了タスク</h3>
            </div>
          </template>
          <div class="text-3xl font-bold">42</div>
          <div class="text-sm text-success-600 mt-1">+12% 先月比</div>
        </BaseCard>
        
        <BaseCard>
          <template #header>
            <div class="flex items-center">
              <div class="w-8 h-8 bg-warning-100 rounded-lg flex items-center justify-center mr-3">
                <svg class="w-4 h-4 text-warning-600" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 2L3 7v11a2 2 0 002 2h10a2 2 0 002-2V7l-7-5z"/>
                </svg>
              </div>
              <h3 class="font-medium">進行中</h3>
            </div>
          </template>
          <div class="text-3xl font-bold">17</div>
          <div class="text-sm text-warning-600 mt-1">期限迫る: 3件</div>
        </BaseCard>
        
        <BaseCard>
          <template #header>
            <div class="flex items-center">
              <div class="w-8 h-8 bg-error-100 rounded-lg flex items-center justify-center mr-3">
                <svg class="w-4 h-4 text-error-600" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"/>
                </svg>
              </div>
              <h3 class="font-medium">要対応</h3>
            </div>
          </template>
          <div class="text-3xl font-bold">8</div>
          <div class="text-sm text-error-600 mt-1">緊急: 2件</div>
        </BaseCard>
      </div>
    `
  }),
  parameters: {
    docs: {
      description: {
        story: 'ダッシュボードカードの実用例。統計情報やKPIの表示に適したレイアウト。'
      }
    }
  }
};

// 複合レイアウト
export const ComplexLayout: Story = {
  render: () => ({
    components: { BaseCard },
    template: `
      <div class="space-y-6">
        <BaseCard variant="elevated" padding="lg">
          <template #header>
            <h2 class="text-xl font-bold">プロジェクト概要</h2>
          </template>
          
          <div class="grid md:grid-cols-2 gap-6">
            <div>
              <h3 class="font-semibold mb-3">基本情報</h3>
              <div class="space-y-2">
                <div class="flex justify-between">
                  <span class="text-neutral-600">プロジェクト名</span>
                  <span class="font-medium">Model-A Design System</span>
                </div>
                <div class="flex justify-between">
                  <span class="text-neutral-600">開始日</span>
                  <span class="font-medium">2025年7月1日</span>
                </div>
                <div class="flex justify-between">
                  <span class="text-neutral-600">進捗率</span>
                  <span class="font-medium text-success-600">85%</span>
                </div>
              </div>
            </div>
            
            <div>
              <h3 class="font-semibold mb-3">チーム</h3>
              <div class="space-y-2">
                <div class="flex items-center">
                  <div class="w-6 h-6 bg-primary-500 rounded-full mr-2"></div>
                  <span class="text-sm">田中 (PM)</span>
                </div>
                <div class="flex items-center">
                  <div class="w-6 h-6 bg-success-500 rounded-full mr-2"></div>
                  <span class="text-sm">佐藤 (Designer)</span>
                </div>
                <div class="flex items-center">
                  <div class="w-6 h-6 bg-warning-500 rounded-full mr-2"></div>
                  <span class="text-sm">山田 (Developer)</span>
                </div>
              </div>
            </div>
          </div>
          
          <template #footer>
            <div class="flex gap-3">
              <button class="flex-1 bg-primary-600 text-white py-2 px-4 rounded-lg hover:bg-primary-700 transition-colors">
                詳細を見る
              </button>
              <button class="px-4 py-2 border border-neutral-300 rounded-lg hover:bg-neutral-50 transition-colors">
                編集
              </button>
            </div>
          </template>
        </BaseCard>
      </div>
    `
  }),
  parameters: {
    docs: {
      description: {
        story: '複雑なレイアウトの例。グリッド、リスト、ボタンなどを組み合わせた実用的なカード。'
      }
    }
  }
};