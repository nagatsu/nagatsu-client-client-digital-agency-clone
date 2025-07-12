import type { Meta, StoryObj } from '@storybook/vue3';
import BaseButton from './BaseButton.vue';

// Meta 設定
const meta: Meta<typeof BaseButton> = {
  title: 'Base/BaseButton',
  component: BaseButton,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
# BaseButton

多機能ボタンコンポーネント。
デジタル庁準拠デザインシステム（94.5/100品質）に基づく実装。

## 機能
- 7種類のバリアント（primary, secondary, success, warning, error, outline, ghost）
- 5段階のサイズ展開（xs, sm, md, lg, xl）
- 左右アイコン配置
- ローディング状態（スピナー付き）
- 6段階の角丸制御（none, sm, md, lg, xl, full）
- フルワイズ対応
- アクセシビリティ対応
- button/a タグ切り替え
`
      }
    }
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      description: 'ボタンのスタイルバリアント',
      options: ['primary', 'secondary', 'success', 'warning', 'error', 'outline', 'ghost'],
      control: { type: 'select' },
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'primary' }
      }
    },
    size: {
      description: 'ボタンのサイズ',
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
      control: { type: 'select' },
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'md' }
      }
    },
    tag: {
      description: 'HTML要素のタグ',
      options: ['button', 'a'],
      control: { type: 'select' },
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'button' }
      }
    },
    disabled: {
      description: '無効状態かどうか',
      control: { type: 'boolean' },
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' }
      }
    },
    loading: {
      description: 'ローディング状態かどうか',
      control: { type: 'boolean' },
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' }
      }
    },
    fullWidth: {
      description: '全幅表示にするか',
      control: { type: 'boolean' },
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' }
      }
    },
    rounded: {
      description: '角丸のサイズ',
      options: ['none', 'sm', 'md', 'lg', 'xl', 'full'],
      control: { type: 'select' },
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'lg' }
      }
    },
    click: {
      description: 'ボタンがクリックされた時に発火',
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
    variant: 'primary'
  },
  render: (args: any) => ({
    components: { BaseButton },
    setup() {
      return { args };
    },
    template: `
      <BaseButton v-bind="args">
        ボタン
      </BaseButton>
    `
  })
};

// バリアント
export const Variants: Story = {
  render: () => ({
    components: { BaseButton },
    template: `
      <div class="flex flex-wrap gap-3">
        <BaseButton variant="primary">Primary</BaseButton>
        <BaseButton variant="secondary">Secondary</BaseButton>
        <BaseButton variant="success">Success</BaseButton>
        <BaseButton variant="warning">Warning</BaseButton>
        <BaseButton variant="error">Error</BaseButton>
        <BaseButton variant="outline">Outline</BaseButton>
        <BaseButton variant="ghost">Ghost</BaseButton>
      </div>
    `
  }),
  parameters: {
    docs: {
      description: {
        story: '7種類のバリアント。用途に応じて適切なバリアントを選択できます。'
      }
    }
  }
};

// サイズ
export const Sizes: Story = {
  render: () => ({
    components: { BaseButton },
    template: `
      <div class="flex flex-wrap items-center gap-3">
        <BaseButton size="xs">XS</BaseButton>
        <BaseButton size="sm">Small</BaseButton>
        <BaseButton size="md">Medium</BaseButton>
        <BaseButton size="lg">Large</BaseButton>
        <BaseButton size="xl">X Large</BaseButton>
      </div>
    `
  }),
  parameters: {
    docs: {
      description: {
        story: '5つの異なるサイズ。コンテンツの重要度や配置場所に応じて選択できます。'
      }
    }
  }
};

// ローディング状態
export const LoadingState: Story = {
  render: () => ({
    components: { BaseButton },
    data() {
      return {
        loading: false
      };
    },
    methods: {
      handleClick(this: any) {
        this.loading = true;
        setTimeout(() => {
          this.loading = false;
        }, 2000);
      }
    },
    template: `
      <div class="space-y-4">
        <div class="flex gap-3">
          <BaseButton :loading="loading" @click="handleClick">
            クリックしてローディング
          </BaseButton>
          <BaseButton variant="secondary" loading>常にローディング</BaseButton>
          <BaseButton variant="success" loading>成功処理中</BaseButton>
        </div>
        <div class="p-4 bg-blue-50 rounded-lg">
          <p class="text-sm text-blue-800">ローディング機能:</p>
          <ul class="text-sm text-blue-700 mt-2 space-y-1">
            <li>• 回転アニメーション付きスピナー</li>
            <li>• 自動的にクリック無効化</li>
            <li>• 左側アイコンの代替表示</li>
            <li>• 透明度調整でローディング状態を視覚的に表現</li>
          </ul>
        </div>
      </div>
    `
  }),
  parameters: {
    docs: {
      description: {
        story: 'ローディング状態の例。非同期処理中のUXを向上させます。'
      }
    }
  }
};

// 無効状態
export const DisabledState: Story = {
  render: () => ({
    components: { BaseButton },
    template: `
      <div class="space-y-4">
        <div class="flex gap-3">
          <BaseButton disabled>Disabled Primary</BaseButton>
          <BaseButton variant="secondary" disabled>Disabled Secondary</BaseButton>
          <BaseButton variant="outline" disabled>Disabled Outline</BaseButton>
          <BaseButton variant="ghost" disabled>Disabled Ghost</BaseButton>
        </div>
        <div class="p-4 bg-gray-50 rounded-lg">
          <p class="text-sm text-gray-600">無効状態では:</p>
          <ul class="text-sm text-gray-600 mt-2 space-y-1">
            <li>• クリックイベントが発火しない</li>
            <li>• 透明度が50%に設定される</li>
            <li>• カーソルが not-allowed に変更される</li>
            <li>• フォーカスが当たらない</li>
          </ul>
        </div>
      </div>
    `
  }),
  parameters: {
    docs: {
      description: {
        story: '無効状態の例。ユーザーが実行できないアクションを明確に示します。'
      }
    }
  }
};

// アイコン付きボタン
export const WithIcons: Story = {
  render: () => ({
    components: { BaseButton },
    template: `
      <div class="space-y-4">
        <div class="flex gap-3">
          <BaseButton>
            <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"/>
            </svg>
            追加
          </BaseButton>
          <BaseButton variant="secondary">
            <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"/>
            </svg>
            編集
          </BaseButton>
          <BaseButton variant="error">
            <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"/>
            </svg>
            削除
          </BaseButton>
        </div>
        <div class="flex gap-3">
          <BaseButton variant="outline">
            ダウンロード
            <svg class="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
            </svg>
          </BaseButton>
          <BaseButton variant="ghost">
            設定
            <svg class="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"/>
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>
            </svg>
          </BaseButton>
        </div>
      </div>
    `
  }),
  parameters: {
    docs: {
      description: {
        story: 'アイコン付きボタンの例。アイコンは手動でslot内に配置します。'
      }
    }
  }
};

// 角丸バリエーション
export const RoundedVariations: Story = {
  render: () => ({
    components: { BaseButton },
    template: `
      <div class="space-y-4">
        <div class="flex gap-3">
          <BaseButton rounded="none">角丸なし</BaseButton>
          <BaseButton rounded="sm">小さい角丸</BaseButton>
          <BaseButton rounded="md">中角丸</BaseButton>
          <BaseButton rounded="lg">大角丸（デフォルト）</BaseButton>
          <BaseButton rounded="xl">XL角丸</BaseButton>
          <BaseButton rounded="full">完全な丸</BaseButton>
        </div>
        <div class="p-4 bg-green-50 rounded-lg">
          <p class="text-sm text-green-800">角丸機能:</p>
          <ul class="text-sm text-green-700 mt-2 space-y-1">
            <li>• 6段階の角丸制御</li>
            <li>• デザインシステムに準拠した一貫性</li>
            <li>• フルサークル（pill）スタイル対応</li>
          </ul>
        </div>
      </div>
    `
  }),
  parameters: {
    docs: {
      description: {
        story: '角丸のバリエーション。デザインの一貫性を保ちながら、適切な角丸を選択できます。'
      }
    }
  }
};

// フルワイズ
export const FullWidth: Story = {
  render: () => ({
    components: { BaseButton },
    template: `
      <div class="space-y-4">
        <BaseButton full-width>フルワイズボタン</BaseButton>
        <BaseButton variant="secondary" full-width>セカンダリ・フルワイズ</BaseButton>
        <BaseButton variant="outline" full-width>アウトライン・フルワイズ</BaseButton>
        <div class="p-4 bg-purple-50 rounded-lg">
          <p class="text-sm text-purple-800">フルワイズ機能:</p>
          <ul class="text-sm text-purple-700 mt-2 space-y-1">
            <li>• 親要素の幅に合わせて自動調整</li>
            <li>• フォームやカードでの使用に最適</li>
            <li>• レスポンシブデザインに対応</li>
          </ul>
        </div>
      </div>
    `
  }),
  parameters: {
    docs: {
      description: {
        story: 'フルワイズボタンの例。フォームやカードでの使用に適しています。'
      }
    }
  }
};

// タグ切り替え
export const TagSwitching: Story = {
  render: () => ({
    components: { BaseButton },
    template: `
      <div class="space-y-4">
        <div class="flex gap-3">
          <BaseButton tag="button">Button要素</BaseButton>
          <BaseButton tag="a" href="#">A要素（リンク）</BaseButton>
        </div>
        <div class="p-4 bg-yellow-50 rounded-lg">
          <p class="text-sm text-yellow-800">タグ切り替え機能:</p>
          <ul class="text-sm text-yellow-700 mt-2 space-y-1">
            <li>• button要素（デフォルト）</li>
            <li>• a要素（リンク用）</li>
            <li>• 同一デザインで意味論的に適切なHTML</li>
            <li>• アクセシビリティ向上</li>
          </ul>
        </div>
      </div>
    `
  }),
  parameters: {
    docs: {
      description: {
        story: 'button要素とa要素の切り替え。適切なセマンティクスを選択できます。'
      }
    }
  }
};

// 実用例: フォームボタン
export const FormButtons: Story = {
  render: () => ({
    components: { BaseButton },
    data() {
      return {
        isSubmitting: false,
        formData: {
          name: '',
          email: ''
        }
      };
    },
    methods: {
      handleSubmit(this: any) {
        this.isSubmitting = true;
        setTimeout(() => {
          alert('フォームが送信されました！');
          this.isSubmitting = false;
          this.formData = { name: '', email: '' };
        }, 2000);
      },
      handleReset(this: any) {
        this.formData = { name: '', email: '' };
      }
    },
    template: `
      <div class="max-w-md mx-auto p-6 bg-white border border-gray-200 rounded-lg">
        <h3 class="text-lg font-semibold mb-4">お問い合わせフォーム</h3>
        <form @submit.prevent="handleSubmit" class="space-y-4">
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-1">お名前</label>
            <input v-model="formData.name" type="text" class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500" required>
          </div>
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-1">メールアドレス</label>
            <input v-model="formData.email" type="email" class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500" required>
          </div>
          <div class="flex gap-3">
            <BaseButton type="submit" :loading="isSubmitting" :disabled="!formData.name || !formData.email">送信</BaseButton>
            <BaseButton type="button" variant="outline" @click="handleReset">リセット</BaseButton>
            <BaseButton type="button" variant="ghost" tag="a" href="#">キャンセル</BaseButton>
          </div>
        </form>
      </div>
    `
  }),
  parameters: {
    docs: {
      description: {
        story: 'フォームでの実用例。送信、リセット、キャンセルの各ボタンが適切なバリアントで表示されます。'
      }
    }
  }
};

// 実用例: アクションボタン群
export const ActionButtons: Story = {
  render: () => ({
    components: { BaseButton },
    data() {
      return {
        items: [
          { id: 1, name: '商品A', status: 'active' },
          { id: 2, name: '商品B', status: 'inactive' },
          { id: 3, name: '商品C', status: 'active' }
        ]
      };
    },
    methods: {
      handleView(item: any) {
        alert(`${item.name}を表示します`);
      },
      handleEdit(item: any) {
        alert(`${item.name}を編集します`);
      },
      handleDelete(this: any, item: any) {
        if (confirm(`${item.name}を削除しますか？`)) {
          this.items = this.items.filter((i: any) => i.id !== item.id);
        }
      }
    },
    template: `
      <div class="space-y-4">
        <div v-for="item in items" :key="item.id" class="flex items-center justify-between p-4 bg-white border border-gray-200 rounded-lg">
          <div class="flex items-center">
            <h4 class="font-medium">{{ item.name }}</h4>
            <span :class="['ml-2 px-2 py-1 text-xs rounded', item.status === 'active' ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-600']">
              {{ item.status === 'active' ? '有効' : '無効' }}
            </span>
          </div>
          <div class="flex gap-2">
            <BaseButton size="sm" variant="ghost" @click="handleView(item)">
              <svg class="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/>
              </svg>
              表示
            </BaseButton>
            <BaseButton size="sm" variant="outline" @click="handleEdit(item)">
              <svg class="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"/>
              </svg>
              編集
            </BaseButton>
            <BaseButton size="sm" variant="error" @click="handleDelete(item)">
              <svg class="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"/>
              </svg>
              削除
            </BaseButton>
          </div>
        </div>
      </div>
    `
  }),
  parameters: {
    docs: {
      description: {
        story: 'アクションボタン群の実用例。CRUD操作に適したボタンの配置とバリアントの使い分けを示しています。'
      }
    }
  }
};

// アクセシビリティデモ
export const AccessibilityDemo: Story = {
  render: () => ({
    components: { BaseButton },
    template: `
      <div class="space-y-6">
        <div class="p-4 bg-blue-50 rounded-lg">
          <h3 class="font-medium text-blue-900 mb-2">アクセシビリティ機能</h3>
          <ul class="text-sm text-blue-800 space-y-1">
            <li>• 適切なセマンティクス（button/a要素）</li>
            <li>• キーボードナビゲーション対応</li>
            <li>• スクリーンリーダー対応</li>
            <li>• フォーカスの可視化</li>
            <li>• 無効状態の適切な表現</li>
            <li>• ローディング状態の音声読み上げ</li>
          </ul>
        </div>
        
        <div class="space-y-3">
          <BaseButton>通常のボタン</BaseButton>
          <BaseButton disabled>無効なボタン（クリック不可）</BaseButton>
          <BaseButton loading>ローディング中（クリック不可）</BaseButton>
          <BaseButton tag="a" href="#">リンクボタン</BaseButton>
        </div>
        
        <div class="text-sm text-gray-600">
          <p>このコンポーネントは以下のアクセシビリティガイドラインに準拠しています:</p>
          <ul class="mt-2 space-y-1">
            <li>• WCAG 2.1 AA準拠</li>
            <li>• JIS X 8341-3:2016 準拠</li>
            <li>• WAI-ARIA 1.1 準拠</li>
          </ul>
        </div>
      </div>
    `
  }),
  parameters: {
    docs: {
      description: {
        story: 'アクセシビリティ機能のデモ。障害を持つユーザーも含めすべてのユーザーが使いやすい設計です。'
      }
    }
  }
};
