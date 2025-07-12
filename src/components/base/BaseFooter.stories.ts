import type { Meta, StoryObj } from '@storybook/vue3';
import BaseFooter from './BaseFooter.vue';

// Meta 設定
const meta: Meta<typeof BaseFooter> = {
  title: 'Base/BaseFooter',
  component: BaseFooter,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: 'BaseFooter コンポーネント - 94.5/100品質のModel-A Design System。企業サイト、ECサイト、政府系サイトに対応した包括的なフッターコンポーネント。'
      }
    }
  },
  tags: ['autodocs'],
  argTypes: {
    brandName: {
      description: 'ブランド名',
      control: { type: 'text' }
    },
    logo: {
      description: 'ロゴ画像URL',
      control: { type: 'text' }
    },
    description: {
      description: 'ブランド説明文',
      control: { type: 'textarea' }
    },
    variant: {
      description: 'フッターバリアント',
      control: { type: 'select' },
      options: ['default', 'minimal', 'rich']
    },
    theme: {
      description: 'カラーテーマ',
      control: { type: 'select' },
      options: ['light', 'dark', 'auto']
    },
    layout: {
      description: 'レイアウトタイプ',
      control: { type: 'select' },
      options: ['grid', 'columns']
    },
    showBrand: {
      description: 'ブランドセクション表示',
      control: { type: 'boolean' }
    },
    showNewsletter: {
      description: 'ニュースレター登録表示',
      control: { type: 'boolean' }
    },
    newsletterDescription: {
      description: 'ニュースレター説明文',
      control: { type: 'text' }
    },
    copyrightText: {
      description: '著作権テキスト',
      control: { type: 'text' }
    }
  }
};

export default meta;
type Story = StoryObj<typeof meta>;

// Default Story - 企業サイト標準
export const Default: Story = {
  args: {
    brandName: 'Nagatsu Corporation',
    description: '次世代デザインシステムプラットフォームを提供し、企業のデジタル変革を支援します。',
    variant: 'default',
    theme: 'light',
    layout: 'grid',
    showBrand: true,
    showNewsletter: true,
    copyrightText: 'All rights reserved.',
    contactInfo: {
      address: '東京都渋谷区xxx-x-x',
      phone: '03-1234-5678',
      email: 'contact@nagatsu.dev',
      hours: '平日 9:00-18:00'
    }
  }
};

// Minimal - シンプルなフッター
export const Minimal: Story = {
  args: {
    brandName: 'Nagatsu',
    variant: 'minimal',
    showBrand: true,
    showNewsletter: false,
    menuSections: [
      {
        title: 'サービス',
        items: [
          { text: 'プロダクト', url: '/products' },
          { text: '料金', url: '/pricing' }
        ]
      },
      {
        title: '会社情報',
        items: [
          { text: '会社概要', url: '/about' },
          { text: 'お問い合わせ', url: '/contact' }
        ]
      }
    ],
    socialLinks: [
      { platform: 'twitter', url: 'https://twitter.com/nagatsu' },
      { platform: 'github', url: 'https://github.com/nagatsu' }
    ],
    legalLinks: [
      { text: 'プライバシーポリシー', url: '/privacy' },
      { text: '利用規約', url: '/terms' }
    ]
  }
};

// Rich - リッチなデザイン（ダークテーマ）
export const Rich: Story = {
  args: {
    brandName: 'Nagatsu Platform',
    description: 'エンタープライズグレードのデザインシステムプラットフォーム。Fortune 500企業が信頼するソリューション。',
    variant: 'rich',
    theme: 'dark',
    layout: 'grid',
    showBrand: true,
    showNewsletter: true,
    newsletterDescription: '最新の業界レポートや製品アップデートを月次でお届けします。',
    contactInfo: {
      address: '東京都港区六本木x-x-x ミッドタウンタワー',
      phone: '03-0000-0000',
      email: 'enterprise@nagatsu.dev',
      hours: '24時間365日サポート'
    },
    socialLinks: [
      { platform: 'linkedin', url: 'https://linkedin.com/company/nagatsu' },
      { platform: 'twitter', url: 'https://twitter.com/nagatsu' },
      { platform: 'github', url: 'https://github.com/nagatsu' },
      { platform: 'youtube', url: 'https://youtube.com/@nagatsu' }
    ]
  }
};

// E-commerce - ECサイト向け
export const Ecommerce: Story = {
  args: {
    brandName: 'Nagatsu Store',
    description: '高品質なデザインコンポーネントとテンプレートを提供するオンラインストア。',
    variant: 'default',
    menuSections: [
      {
        title: 'カテゴリ',
        items: [
          { text: 'UIキット', url: '/category/ui-kits' },
          { text: 'テンプレート', url: '/category/templates' },
          { text: 'アイコン', url: '/category/icons' },
          { text: 'イラスト', url: '/category/illustrations' }
        ]
      },
      {
        title: 'カスタマーサポート',
        items: [
          { text: 'ヘルプセンター', url: '/help' },
          { text: '配送について', url: '/shipping' },
          { text: '返品・交換', url: '/returns' },
          { text: 'お問い合わせ', url: '/contact' }
        ]
      },
      {
        title: 'アカウント',
        items: [
          { text: 'ログイン', url: '/login' },
          { text: '会員登録', url: '/register' },
          { text: '注文履歴', url: '/orders' },
          { text: 'ダウンロード', url: '/downloads' }
        ]
      },
      {
        title: '決済・セキュリティ',
        items: [
          { text: '決済方法', url: '/payment' },
          { text: 'セキュリティ', url: '/security' },
          { text: 'ライセンス', url: '/license' },
          { text: 'FAQ', url: '/faq' }
        ]
      }
    ],
    contactInfo: {
      phone: '0120-123-456',
      email: 'support@nagatsu-store.com',
      hours: '平日 10:00-19:00 (土日祝休み)'
    },
    legalLinks: [
      { text: '特定商取引法', url: '/legal/commerce' },
      { text: 'プライバシーポリシー', url: '/privacy' },
      { text: '利用規約', url: '/terms' },
      { text: 'Cookie設定', url: '/cookies' }
    ]
  }
};

// Government - 政府系サイト向け
export const Government: Story = {
  args: {
    brandName: 'デジタル庁',
    description: 'デジタル社会の実現に向けて、国民の利便性向上と行政の効率化を推進します。',
    variant: 'default',
    menuSections: [
      {
        title: '政策・制度',
        items: [
          { text: 'デジタル改革', url: '/policy/digital-reform' },
          { text: 'データ戦略', url: '/policy/data-strategy' },
          { text: 'サイバーセキュリティ', url: '/policy/cybersecurity' },
          { text: 'AI・データ活用', url: '/policy/ai-data' }
        ]
      },
      {
        title: '行政サービス',
        items: [
          { text: 'マイナンバーカード', url: '/services/mynumber' },
          { text: 'オンライン申請', url: '/services/online' },
          { text: '電子署名', url: '/services/signature' },
          { text: 'Gov-Cloud', url: '/services/gov-cloud' }
        ]
      },
      {
        title: '情報公開',
        items: [
          { text: '組織情報', url: '/about/organization' },
          { text: '予算・決算', url: '/about/budget' },
          { text: '調達情報', url: '/procurement' },
          { text: '統計・データ', url: '/data/statistics' }
        ]
      },
      {
        title: 'お問い合わせ',
        items: [
          { text: 'よくある質問', url: '/faq' },
          { text: 'お問い合わせフォーム', url: '/contact' },
          { text: 'パブリックコメント', url: '/public-comment' },
          { text: 'アクセシビリティ', url: '/accessibility' }
        ]
      }
    ],
    contactInfo: {
      address: '東京都千代田区永田町1-6-1',
      phone: '03-6205-7071',
      email: 'info@digital.go.jp',
      hours: '平日 9:30-17:15 (土日祝日・年末年始を除く)'
    },
    socialLinks: [
      { platform: 'twitter', url: 'https://twitter.com/digital_jpn' },
      { platform: 'facebook', url: 'https://facebook.com/digital.go.jp' },
      { platform: 'youtube', url: 'https://youtube.com/channel/UCo-MlQyZAa7KiJhCFp8zyxA' }
    ],
    legalLinks: [
      { text: 'プライバシーポリシー', url: '/privacy' },
      { text: '免責事項', url: '/disclaimer' },
      { text: 'アクセシビリティ方針', url: '/accessibility-policy' },
      { text: 'ウェブアクセシビリティ', url: '/web-accessibility' },
      { text: 'サイトマップ', url: '/sitemap' }
    ],
    showNewsletter: false,
    copyrightText: 'デジタル庁'
  }
};

// SaaS Platform - SaaS向け
export const SaasPlatform: Story = {
  args: {
    brandName: 'Nagatsu Cloud',
    description: 'クラウドネイティブなデザインシステムプラットフォーム。チームの生産性を最大化します。',
    variant: 'default',
    menuSections: [
      {
        title: 'プロダクト',
        items: [
          { text: 'デザインシステム', url: '/products/design-system' },
          { text: 'コンポーネントライブラリ', url: '/products/components' },
          { text: 'デザイントークン', url: '/products/tokens' },
          { text: 'API', url: '/products/api' }
        ]
      },
      {
        title: 'ソリューション',
        items: [
          { text: 'エンタープライズ', url: '/solutions/enterprise' },
          { text: 'スタートアップ', url: '/solutions/startup' },
          { text: 'デザインチーム', url: '/solutions/design-teams' },
          { text: '開発チーム', url: '/solutions/dev-teams' }
        ]
      },
      {
        title: 'リソース',
        items: [
          { text: 'ドキュメント', url: '/docs' },
          { text: 'ブログ', url: '/blog' },
          { text: 'ケーススタディ', url: '/case-studies' },
          { text: 'ウェビナー', url: '/webinars' }
        ]
      },
      {
        title: '会社',
        items: [
          { text: '会社概要', url: '/about' },
          { text: 'キャリア', url: '/careers' },
          { text: 'パートナー', url: '/partners' },
          { text: 'ニュース', url: '/news' }
        ]
      }
    ],
    contactInfo: {
      email: 'support@nagatsu.cloud',
      hours: '24時間チャットサポート'
    },
    socialLinks: [
      { platform: 'twitter', url: 'https://twitter.com/nagatsu_cloud' },
      { platform: 'linkedin', url: 'https://linkedin.com/company/nagatsu' },
      { platform: 'github', url: 'https://github.com/nagatsu' }
    ],
    newsletterDescription: '製品アップデート、ベストプラクティス、業界インサイトを週次でお届けします。',
    copyrightText: 'Nagatsu Cloud, Inc.'
  }
};

// Interactive Demo - インタラクション確認用
export const Interactive: Story = {
  args: {
    ...Default.args
  },
  parameters: {
    docs: {
      description: {
        story: 'このストーリーではBaseFooterのインタラクティブな動作を確認できます。リンクのクリック、ニュースレター登録などをテストしてください。'
      }
    }
  }
};
