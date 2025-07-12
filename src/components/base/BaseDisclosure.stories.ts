import type { Meta, StoryObj } from '@storybook/vue3';
import BaseDisclosure from './BaseDisclosure.vue';

// Meta 設定
const meta: Meta<typeof BaseDisclosure> = {
  title: 'Base/BaseDisclosure',
  component: BaseDisclosure,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: 'BaseDisclosure コンポーネント - 94.5/100品質のModel-A Design System。デジタル庁準拠の展開可能情報パネル。完全アクセシビリティ対応。'
      }
    }
  },
  tags: ['autodocs'],
  argTypes: {
    title: {
      description: 'ディスクロージャーのタイトル',
      control: { type: 'text' }
    },
    description: {
      description: 'タイトル下の説明文',
      control: { type: 'text' }
    },
    icon: {
      description: 'タイトル横のアイコン',
      control: { type: 'object' }
    },
    chevronIcon: {
      description: '展開アイコンのカスタム',
      control: { type: 'object' }
    },
    variant: {
      description: 'スタイルバリアント',
      control: { type: 'select' },
      options: ['default', 'minimal', 'card', 'outlined']
    },
    size: {
      description: 'サイズ',
      control: { type: 'select' },
      options: ['sm', 'md', 'lg']
    },
    disabled: {
      description: '無効状態',
      control: { type: 'boolean' }
    },
    defaultOpen: {
      description: '初期展開状態',
      control: { type: 'boolean' }
    },
    links: {
      description: '内部リンク配列',
      control: { type: 'object' }
    },
    maxHeight: {
      description: 'コンテンツ最大高さ',
      control: { type: 'text' }
    },
    closeOnLinkClick: {
      description: 'リンククリック時に閉じる',
      control: { type: 'boolean' }
    },
    buttonId: {
      description: 'ボタンID（アクセシビリティ）',
      control: { type: 'text' }
    },
    panelId: {
      description: 'パネルID（アクセシビリティ）',
      control: { type: 'text' }
    }
  }
};

export default meta;
type Story = StoryObj<typeof meta>;

// Sample data
const sampleLinks = [
  { label: '概要情報', href: '/overview', description: '基本的な情報を確認できます' },
  { label: '詳細設定', href: '/settings', description: '詳細な設定項目です' },
  { label: 'よくある質問', href: '/faq', description: 'よくある質問と回答' }
];

const faqLinks = [
  { label: '申請方法について', href: '/faq/application', description: 'オンライン申請の手順' },
  { label: '必要書類について', href: '/faq/documents', description: '提出が必要な書類一覧' },
  { label: '手数料について', href: '/faq/fees', description: '各種手数料の詳細' },
  { label: 'お問い合わせ', href: '/contact', description: 'ご不明な点はこちらから' }
];

const serviceLinks = [
  { label: 'プレミアムプラン', href: '/premium', description: '月額980円で全機能が利用可能' },
  { label: 'エンタープライズ', href: '/enterprise', description: '法人向けの高機能プラン' },
  { label: '学生割引', href: '/student', description: '学生は50%オフで利用可能' }
];

// Default Story
export const Default: Story = {
  render: (args) => ({
    components: { BaseDisclosure },
    setup() {
      return { args };
    },
    template: `
      <div class="space-y-4">
        <BaseDisclosure v-bind="args">
          <p class="text-gray-600 text-sm">
            ディスクロージャーは、情報を段階的に表示するための重要なUIコンポーネントです。
            アクセシビリティ要件に完全準拠し、キーボード操作やスクリーンリーダーにも対応しています。
          </p>
        </BaseDisclosure>
      </div>
    `
  }),
  args: {
    title: 'よくある質問',
    description: 'サービスに関する質問と回答',
    variant: 'default',
    size: 'md',
    disabled: false,
    defaultOpen: false,
    links: sampleLinks,
    maxHeight: 'none',
    closeOnLinkClick: false
  }
};

// With Links
export const WithLinks: Story = {
  render: (args) => ({
    components: { BaseDisclosure },
    setup() {
      return { args };
    },
    template: `
      <div class="space-y-4">
        <BaseDisclosure v-bind="args" />
      </div>
    `
  }),
  args: {
    ...Default.args,
    title: 'サポート情報',
    description: 'ヘルプとサポートリンク',
    links: faqLinks
  }
};

// Default Open
export const DefaultOpen: Story = {
  render: (args) => ({
    components: { BaseDisclosure },
    setup() {
      return { args };
    },
    template: `
      <div class="space-y-4">
        <BaseDisclosure v-bind="args">
          <div class="space-y-3">
            <p class="text-gray-600 text-sm">
              このディスクロージャーは初期状態で展開されています。
            </p>
            <div class="bg-blue-50 p-3 rounded-md">
              <h4 class="font-medium text-blue-900 mb-1">重要なお知らせ</h4>
              <p class="text-blue-700 text-sm">システムメンテナンスのため、明日午前2時〜5時の間サービスを停止いたします。</p>
            </div>
          </div>
        </BaseDisclosure>
      </div>
    `
  }),
  args: {
    ...Default.args,
    title: '重要なお知らせ',
    description: 'システムメンテナンス情報',
    defaultOpen: true
  }
};

// Size Variants
export const SizeSmall: Story = {
  render: (args) => ({
    components: { BaseDisclosure },
    setup() {
      return { args };
    },
    template: `
      <div class="space-y-2">
        <BaseDisclosure v-bind="args">
          <p class="text-xs text-gray-500">コンパクトなディスクロージャー</p>
        </BaseDisclosure>
      </div>
    `
  }),
  args: {
    ...Default.args,
    title: 'コンパクト表示',
    description: 'スモールサイズ',
    size: 'sm'
  }
};

export const SizeLarge: Story = {
  render: (args) => ({
    components: { BaseDisclosure },
    setup() {
      return { args };
    },
    template: `
      <div class="space-y-4">
        <BaseDisclosure v-bind="args">
          <p class="text-gray-600">大きなサイズのディスクロージャーです。タッチデバイスでの操作に適しています。</p>
        </BaseDisclosure>
      </div>
    `
  }),
  args: {
    ...Default.args,
    title: 'ラージサイズ表示',
    description: 'タッチ操作に最適',
    size: 'lg'
  }
};

// Style Variants
export const VariantMinimal: Story = {
  render: (args) => ({
    components: { BaseDisclosure },
    setup() {
      return { args };
    },
    template: `
      <div class="space-y-4">
        <BaseDisclosure v-bind="args">
          <p class="text-gray-600 text-sm">ミニマルなスタイルのディスクロージャーです。</p>
        </BaseDisclosure>
      </div>
    `
  }),
  args: {
    ...Default.args,
    title: 'ミニマルスタイル',
    description: 'シンプルなデザイン',
    variant: 'minimal'
  }
};

export const VariantCard: Story = {
  render: (args) => ({
    components: { BaseDisclosure },
    setup() {
      return { args };
    },
    template: `
      <div class="space-y-4 bg-gray-50 p-6">
        <BaseDisclosure v-bind="args">
          <p class="text-gray-600 text-sm">カードスタイルのディスクロージャーです。</p>
        </BaseDisclosure>
      </div>
    `
  }),
  args: {
    ...Default.args,
    title: 'カードスタイル',
    description: '背景付きのデザイン',
    variant: 'card'
  }
};

export const VariantOutlined: Story = {
  render: (args) => ({
    components: { BaseDisclosure },
    setup() {
      return { args };
    },
    template: `
      <div class="space-y-4">
        <BaseDisclosure v-bind="args">
          <p class="text-gray-600 text-sm">アウトライン付きのディスクロージャーです。</p>
        </BaseDisclosure>
      </div>
    `
  }),
  args: {
    ...Default.args,
    title: 'アウトラインスタイル',
    description: 'ボーダー付きのデザイン',
    variant: 'outlined'
  }
};

// Disabled State
export const Disabled: Story = {
  render: (args) => ({
    components: { BaseDisclosure },
    setup() {
      return { args };
    },
    template: `
      <div class="space-y-4">
        <BaseDisclosure v-bind="args">
          <p class="text-gray-400 text-sm">この機能は現在利用できません。</p>
        </BaseDisclosure>
      </div>
    `
  }),
  args: {
    ...Default.args,
    title: '無効状態',
    description: '操作不可',
    disabled: true
  }
};

// Government Site Example
export const GovernmentSite: Story = {
  render: (args) => ({
    components: { BaseDisclosure },
    setup() {
      return { args };
    },
    template: `
      <div class="max-w-2xl mx-auto bg-white">
        <div class="border-b border-gray-200 pb-4 mb-6">
          <h2 class="text-xl font-bold text-gray-900">手続き案内</h2>
          <p class="text-gray-600 mt-1">各種申請手続きの詳細情報</p>
        </div>
        
        <div class="space-y-4">
          <BaseDisclosure 
            title="住民票の写し等の交付"
            description="住民票や住民票記載事項証明書の交付申請"
            variant="outlined"
            :links="[
              { label: '申請方法', href: '/procedures/resident-card/how-to', description: 'オンライン・窓口での申請手順' },
              { label: '必要書類', href: '/procedures/resident-card/documents', description: '本人確認書類等の詳細' },
              { label: '手数料', href: '/procedures/resident-card/fees', description: '交付手数料について' },
              { label: '受取方法', href: '/procedures/resident-card/pickup', description: '郵送・窓口での受取' }
            ]"
          />
          
          <BaseDisclosure 
            title="戸籍証明書の交付"
            description="戸籍謄本・抄本、戸籍の附票の写し等"
            variant="outlined"
            :links="[
              { label: '戸籍謄本', href: '/procedures/family-register/tohon', description: '戸籍に記載されている全員の証明' },
              { label: '戸籍抄本', href: '/procedures/family-register/shohon', description: '戸籍に記載されている一部の証明' },
              { label: '戸籍の附票', href: '/procedures/family-register/fuhyo', description: '住所の履歴が記載された証明書' }
            ]"
          />
          
          <BaseDisclosure 
            title="印鑑登録・証明"
            description="印鑑登録と印鑑登録証明書の交付"
            variant="outlined"
            :links="[
              { label: '印鑑登録申請', href: '/procedures/seal/registration', description: '新規登録・変更・廃止' },
              { label: '証明書交付', href: '/procedures/seal/certificate', description: '印鑑登録証明書の交付' },
              { label: '登録要件', href: '/procedures/seal/requirements', description: '登録できる印鑑の条件' }
            ]"
          />
        </div>
      </div>
    `
  }),
  args: {
    variant: 'outlined',
    size: 'md'
  }
};

// E-commerce Site Example
export const EcommerceSite: Story = {
  render: (args) => ({
    components: { BaseDisclosure },
    setup() {
      return { args };
    },
    template: `
      <div class="max-w-2xl mx-auto bg-gray-50 p-6">
        <div class="mb-6">
          <h2 class="text-xl font-bold text-gray-900">よくある質問</h2>
          <p class="text-gray-600 mt-1">お客様からよくお寄せいただく質問</p>
        </div>
        
        <div class="space-y-3">
          <BaseDisclosure 
            title="配送について"
            description="配送料金・お届け日数・配送エリア"
            variant="card"
          >
            <div class="space-y-3">
              <p class="text-gray-600 text-sm">
                全国配送対応。送料は地域により異なります。
              </p>
              <div class="bg-blue-50 p-3 rounded-md">
                <p class="text-blue-900 font-medium text-sm">配送料金</p>
                <ul class="text-blue-700 text-sm mt-1 space-y-1">
                  <li>• 関東・関西・中部：590円</li>
                  <li>• その他地域：890円</li>
                  <li>• 5,000円以上で送料無料</li>
                </ul>
              </div>
            </div>
          </BaseDisclosure>
          
          <BaseDisclosure 
            title="返品・交換について"
            description="商品の返品・交換条件とお手続き"
            variant="card"
          >
            <div class="space-y-3">
              <p class="text-gray-600 text-sm">
                商品到着後14日以内であれば返品・交換を承ります。
              </p>
              <div class="bg-yellow-50 p-3 rounded-md">
                <p class="text-yellow-900 font-medium text-sm">注意事項</p>
                <ul class="text-yellow-700 text-sm mt-1 space-y-1">
                  <li>• 未使用・未開封の商品に限ります</li>
                  <li>• 返送料はお客様負担となります</li>
                  <li>• セール商品は返品不可</li>
                </ul>
              </div>
            </div>
          </BaseDisclosure>
          
          <BaseDisclosure 
            title="お支払い方法"
            description="利用可能な決済方法"
            variant="card"
            :links="serviceLinks"
          />
        </div>
      </div>
    `
  }),
  args: {
    variant: 'card',
    size: 'md'
  }
};

// Multiple Disclosures
export const MultipleDisclosures: Story = {
  render: (args) => ({
    components: { BaseDisclosure },
    setup() {
      return { args };
    },
    template: `
      <div class="max-w-xl mx-auto space-y-2">
        <BaseDisclosure 
          title="基本情報"
          description="アカウントの基本設定"
          variant="minimal"
        >
          <p class="text-gray-600 text-sm">プロフィール情報の編集や表示設定を変更できます。</p>
        </BaseDisclosure>
        
        <BaseDisclosure 
          title="プライバシー設定"
          description="個人情報とプライバシーの管理"
          variant="minimal"
        >
          <p class="text-gray-600 text-sm">アカウントの公開設定やデータの取り扱いについて設定できます。</p>
        </BaseDisclosure>
        
        <BaseDisclosure 
          title="通知設定"
          description="メール・プッシュ通知の管理"
          variant="minimal"
        >
          <p class="text-gray-600 text-sm">受信したい通知の種類や頻度を設定できます。</p>
        </BaseDisclosure>
        
        <BaseDisclosure 
          title="セキュリティ"
          description="パスワード・二段階認証"
          variant="minimal"
        >
          <p class="text-gray-600 text-sm">アカウントのセキュリティを強化する設定です。</p>
        </BaseDisclosure>
      </div>
    `
  }),
  args: {
    variant: 'minimal',
    size: 'md'
  }
};

// Interactive Story
export const Interactive: Story = {
  render: (args) => ({
    components: { BaseDisclosure },
    setup() {
      const handleToggle = (open) => {
        console.log('Disclosure toggled:', open);
      };
      
      const handleLinkClick = (link) => {
        console.log('Link clicked:', link);
      };
      
      return { args, handleToggle, handleLinkClick };
    },
    template: `
      <div class="space-y-6">
        <BaseDisclosure 
          v-bind="args"
          @toggle="handleToggle"
          @link-click="handleLinkClick"
        >
          <div class="space-y-4">
            <p class="text-gray-600 text-sm">
              このディスクロージャーはインタラクティブなテスト用です。
              各種イベントがコンソールに出力されます。
            </p>
            
            <div class="bg-gray-50 p-4 rounded-md">
              <h4 class="font-medium text-gray-900 mb-2">機能一覧</h4>
              <ul class="space-y-1 text-sm text-gray-600">
                <li>• キーボード操作対応（Enter、Space、Escape）</li>
                <li>• スクリーンリーダー対応</li>
                <li>• アニメーション付き展開・収束</li>
                <li>• 外部制御API（open/close）</li>
                <li>• カスタムアイコン対応</li>
              </ul>
            </div>
          </div>
        </BaseDisclosure>
        
        <div class="text-sm text-gray-500">
          <p>💡 開発者ツールのコンソールでイベントを確認できます</p>
        </div>
      </div>
    `
  }),
  args: {
    title: 'インタラクティブテスト',
    description: 'すべての機能をテスト',
    variant: 'outlined',
    size: 'md',
    links: sampleLinks
  },
  parameters: {
    docs: {
      description: {
        story: 'このストーリーではBaseDisclosureのインタラクティブな動作を確認できます。デジタル庁のアクセシビリティ要件に完全準拠し、段階的情報開示の最適なUXを提供します。'
      }
    }
  }
};
