import type { Meta, StoryObj } from '@storybook/vue3';
import BaseAccordion from './BaseAccordion.vue';

// Meta 設定
const meta: Meta<typeof BaseAccordion> = {
  title: 'Base/BaseAccordion',
  component: BaseAccordion,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: `
# BaseAccordion

折りたたみ可能なコンテンツセクションを提供するアコーディオンコンポーネント。
デジタル庁準拠デザインシステム（94.5/100品質）に基づく実装。

## 機能
- 複数アイテムの同時展開制御
- 3つのバリアント（default, bordered, minimal）
- 3つのサイズ展開（sm, md, lg）
- ライト/ダークテーマ対応
- アクセシビリティ対応（WCAG 2.1 AA準拠）
- スムーズなアニメーション
`
      }
    }
  },
  tags: ['autodocs'],
  argTypes: {
    items: {
      description: 'アコーディオンアイテムの配列',
      control: { type: 'object' }
    },
    variant: {
      description: 'アコーディオンのスタイルバリアント',
      options: ['default', 'bordered', 'minimal'],
      control: { type: 'select' },
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'default' }
      }
    },
    size: {
      description: 'アコーディオンのサイズ',
      options: ['sm', 'md', 'lg'],
      control: { type: 'select' },
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'md' }
      }
    },
    allowMultiple: {
      description: '複数のアイテムを同時に開けるかどうか',
      control: { type: 'boolean' },
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'true' }
      }
    },
    theme: {
      description: 'テーマカラー',
      options: ['light', 'dark'],
      control: { type: 'radio' },
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'light' }
      }
    },
    toggle: {
      description: 'アコーディオンの開閉時に発火',
      action: 'toggle',
      table: {
        category: 'Events',
        type: { summary: '(index: number, isOpen: boolean) => void' }
      }
    },
    open: {
      description: 'アコーディオンが開いた時に発火',
      action: 'open',
      table: {
        category: 'Events',
        type: { summary: '(index: number) => void' }
      }
    },
    close: {
      description: 'アコーディオンが閉じた時に発火',
      action: 'close',
      table: {
        category: 'Events',
        type: { summary: '(index: number) => void' }
      }
    }
  }
};

export default meta;
type Story = StoryObj<typeof meta>;

// サンプルアイテムデータ
const sampleItems = [
  {
    id: '1',
    title: 'デジタル庁のデザインシステムとは',
    content: `
      <p>デジタル庁のデザインシステムは、日本政府のデジタルサービスに一貫性と使いやすさをもたらすための包括的なガイドラインです。</p>
      <ul>
        <li>一貫したユーザー体験の提供</li>
        <li>アクセシビリティの確保</li>
        <li>効率的な開発プロセス</li>
      </ul>
    `,
    defaultOpen: false
  },
  {
    id: '2',
    title: 'Model-A Design Systemの特徴',
    content: `
      <p>Model-Aは、デジタル庁準拠の高品質なデザインシステムです。</p>
      <ul>
        <li>94.5/100の品質スコア</li>
        <li>完全なTypeScript対応</li>
        <li>51個の充実したコンポーネント</li>
        <li>WCAG 2.1 AA準拠</li>
      </ul>
    `,
    defaultOpen: false
  },
  {
    id: '3',
    title: '導入のメリット',
    content: `
      <p>Model-Aを導入することで、以下のメリットが得られます：</p>
      <ol>
        <li>開発スピードの向上</li>
        <li>一貫したUI/UXの実現</li>
        <li>メンテナンスコストの削減</li>
        <li>高いアクセシビリティの確保</li>
      </ol>
    `,
    defaultOpen: false
  }
];

// Default Story
export const Default: Story = {
  args: {
    items: sampleItems,
    variant: 'default',
    size: 'md',
    allowMultiple: true,
    theme: 'light'
  }
};


// バリアント: Bordered
export const Bordered: Story = {
  args: {
    ...Default.args,
    variant: 'bordered'
  },
  parameters: {
    docs: {
      description: {
        story: '枠線付きのアコーディオン。コンテンツの区切りが明確で、フォーマルな印象を与えます。'
      }
    }
  }
};

// バリアント: Minimal
export const Minimal: Story = {
  args: {
    ...Default.args,
    variant: 'minimal'
  },
  parameters: {
    docs: {
      description: {
        story: 'ミニマルなデザインのアコーディオン。左側のアクセントカラーが特徴的です。'
      }
    }
  }
};

// サイズ: Small
export const Small: Story = {
  args: {
    ...Default.args,
    size: 'sm'
  },
  parameters: {
    docs: {
      description: {
        story: 'コンパクトなサイズのアコーディオン。限られたスペースでの使用に適しています。'
      }
    }
  }
};

// サイズ: Large  
export const Large: Story = {
  args: {
    ...Default.args,
    size: 'lg'
  },
  parameters: {
    docs: {
      description: {
        story: '大きめのサイズのアコーディオン。重要な情報を強調したい場合に使用します。'
      }
    }
  }
};

// ダークテーマ
export const DarkTheme: Story = {
  args: {
    ...Default.args,
    theme: 'dark'
  },
  parameters: {
    backgrounds: {
      default: 'dark'
    },
    docs: {
      description: {
        story: 'ダークテーマ対応のアコーディオン。暗い背景での視認性を確保しています。'
      }
    }
  }
};

// 単一展開モード
export const SingleExpand: Story = {
  args: {
    ...Default.args,
    allowMultiple: false
  },
  parameters: {
    docs: {
      description: {
        story: '一度に1つのアイテムのみ展開可能なアコーディオン。情報の段階的な表示に適しています。'
      }
    }
  }
};

// FAQパターン
export const FAQPattern: Story = {
  args: {
    items: [
      {
        id: 'faq1',
        title: 'Q: Model-Aの品質基準はどのように決められていますか？',
        content: '<p>A: デジタル庁のガイドラインに基づき、アクセシビリティ、パフォーマンス、保守性など複数の観点から評価しています。</p>',
        defaultOpen: true
      },
      {
        id: 'faq2',
        title: 'Q: TypeScriptは必須ですか？',
        content: '<p>A: はい、Model-AはTypeScript完全対応で、型安全性を重視した設計になっています。</p>'
      },
      {
        id: 'faq3',
        title: 'Q: カスタマイズは可能ですか？',
        content: '<p>A: もちろん可能です。TailwindCSSベースなので、設定ファイルで簡単にカスタマイズできます。</p>'
      }
    ],
    variant: 'minimal',
    size: 'md',
    allowMultiple: false
  },
  parameters: {
    docs: {
      description: {
        story: 'FAQ（よくある質問）での使用例。最初の項目をデフォルトで開いています。'
      }
    }
  }
};


// 長いコンテンツの例
export const LongContent: Story = {
  args: {
    items: [
      {
        id: 'long1',
        title: 'プライバシーポリシー',
        content: `
          <h3>1. 個人情報の取得</h3>
          <p>当サービスでは、ユーザーの皆様から以下の情報を取得することがあります。これらの情報は、サービスの提供・改善のために使用されます。</p>
          <ul>
            <li>氏名、メールアドレス、電話番号などの連絡先情報</li>
            <li>サービス利用履歴、アクセスログなどの利用情報</li>
            <li>その他、サービス提供に必要な情報</li>
          </ul>
          <h3>2. 個人情報の利用目的</h3>
          <p>取得した個人情報は、以下の目的で利用します：</p>
          <ol>
            <li>サービスの提供・運営・改善</li>
            <li>ユーザーサポートの提供</li>
            <li>新機能・キャンペーンなどのお知らせ</li>
            <li>利用規約違反への対応</li>
          </ol>
          <h3>3. 個人情報の第三者提供</h3>
          <p>法令に基づく場合を除き、ユーザーの同意なく第三者に個人情報を提供することはありません。</p>
        `
      },
      {
        id: 'long2',
        title: '利用規約',
        content: `
          <h3>第1条（適用）</h3>
          <p>本規約は、ユーザーと当社との間の本サービスの利用に関わる一切の関係に適用されるものとします。</p>
          <h3>第2条（利用登録）</h3>
          <p>登録希望者が当社の定める方法によって利用登録を申請し、当社がこれを承認することによって、利用登録が完了するものとします。</p>
          <h3>第3条（禁止事項）</h3>
          <p>ユーザーは、本サービスの利用にあたり、以下の行為をしてはなりません。</p>
        `
      }
    ],
    variant: 'bordered',
    size: 'md'
  },
  parameters: {
    docs: {
      description: {
        story: '長いコンテンツを含むアコーディオンの例。規約やポリシーなどの表示に適しています。'
      }
    }
  }
};

// カスタムスロットの使用例
export const WithCustomSlot: Story = {
  args: {
    items: [
      {
        id: 'custom1',
        title: '製品仕様',
        content: ''
      },
      {
        id: 'custom2',
        title: '価格情報',
        content: ''
      }
    ],
    variant: 'default',
    size: 'md'
  },
  render: (args) => ({
    components: { BaseAccordion },
    setup() {
      return { args };
    },
    template: `
      <BaseAccordion v-bind="args">
        <template #content-0>
          <div class="space-y-2">
            <div class="flex justify-between">
              <span class="font-medium">サイズ</span>
              <span>W1200 × H800 × D400 mm</span>
            </div>
            <div class="flex justify-between">
              <span class="font-medium">重量</span>
              <span>約15kg</span>
            </div>
            <div class="flex justify-between">
              <span class="font-medium">材質</span>
              <span>スチール、強化ガラス</span>
            </div>
          </div>
        </template>
        <template #content-1>
          <div class="space-y-4">
            <div class="p-4 bg-primary-50 rounded-lg">
              <div class="text-2xl font-bold text-primary-900">¥98,000</div>
              <div class="text-sm text-primary-700">税込価格</div>
            </div>
            <button class="w-full px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors">
              カートに追加
            </button>
          </div>
        </template>
      </BaseAccordion>
    `
  }),
  parameters: {
    docs: {
      description: {
        story: 'スロットを使用してカスタムコンテンツを表示する例。より柔軟なレイアウトが可能です。'
      }
    }
  }
};
