import type { Meta, StoryObj } from '@storybook/vue3'
import MaturityScorePanel from './MaturityScorePanel.vue'

const meta: Meta<typeof MaturityScorePanel> = {
  title: 'Analytics/MaturityScorePanel',
  component: MaturityScorePanel,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: `
# MaturityScorePanel

Model-A デザインシステムの成熟度をリアルタイムで監視・表示するパネルコンポーネント。

## 機能

- **4次元評価**: 情報設計・コンポーネント活用・感情設計・ビジネス価値
- **リアルタイム監視**: 自動更新による継続的な品質チェック
- **改善提案**: 弱点の自動検出と具体的な改善案提示
- **レポート出力**: JSON形式での詳細分析結果ダウンロード

## 使用場面

- Storybook内での品質監視
- 開発チームのダッシュボード
- プロジェクト品質レビュー
- クライアント向け品質報告
        `
      }
    }
  },
  argTypes: {
    autoRefresh: {
      control: 'boolean',
      description: '自動更新の有効/無効'
    },
    refreshInterval: {
      control: { type: 'number', min: 5000, max: 300000, step: 5000 },
      description: '自動更新間隔（ミリ秒）'
    }
  },
  tags: ['autodocs']
}

export default meta
type Story = StoryObj<typeof meta>

// デフォルトストーリー
export const Default: Story = {
  args: {
    autoRefresh: true,
    refreshInterval: 30000
  }
}

// 高スコア状態
export const HighMaturity: Story = {
  args: {
    autoRefresh: false
  },
  render: (args) => ({
    components: { MaturityScorePanel },
    setup() {
      // 高スコアデータをシミュレーション
      const highMaturityData = {
        overall: 94,
        dimensions: {
          informationArchitecture: {
            hierarchy: 95,
            flow: 92,
            context: 94,
            purposeClarity: 96
          },
          componentUtilization: {
            coverage: 90,
            purposeClarity: 95,
            richnessLevel: 92,
            combination: 94
          },
          emotionalDesign: {
            consistency: 96,
            journey: 94,
            impact: 92,
            cultural: 95
          },
          businessValue: {
            persuasiveness: 92,
            differentiation: 95,
            actionability: 90,
            measurability: 88
          }
        },
        level: 'Master',
        recommendations: [
          'コンポーネント測定指標をさらに強化してください',
          'リッチネスレベル3の新パターンを開発してください'
        ],
        timestamp: new Date()
      }
      
      return { args, highMaturityData }
    },
    template: `
      <div class="max-w-2xl">
        <MaturityScorePanel v-bind="args" />
      </div>
    `
  })
}

// 低スコア状態（改善が必要）
export const LowMaturity: Story = {
  args: {
    autoRefresh: false
  },
  render: (args) => ({
    components: { MaturityScorePanel },
    setup() {
      return { args }
    },
    template: `
      <div class="max-w-2xl">
        <MaturityScorePanel v-bind="args" />
      </div>
    `
  })
}

// 自動更新無効
export const ManualRefresh: Story = {
  args: {
    autoRefresh: false,
    refreshInterval: 0
  }
}

// 高頻度更新
export const HighFrequencyRefresh: Story = {
  args: {
    autoRefresh: true,
    refreshInterval: 5000
  }
}

// レスポンシブ表示
export const ResponsiveLayout: Story = {
  args: {
    autoRefresh: false
  },
  render: (args) => ({
    components: { MaturityScorePanel },
    setup() {
      return { args }
    },
    template: `
      <div class="space-y-4">
        <!-- デスクトップ表示 -->
        <div class="mb-4">
          <h3 class="text-lg font-semibold mb-2">デスクトップ表示</h3>
          <div class="max-w-4xl">
            <MaturityScorePanel v-bind="args" />
          </div>
        </div>
        
        <!-- タブレット表示 -->
        <div class="mb-4">
          <h3 class="text-lg font-semibold mb-2">タブレット表示</h3>
          <div class="max-w-2xl">
            <MaturityScorePanel v-bind="args" />
          </div>
        </div>
        
        <!-- モバイル表示 -->
        <div>
          <h3 class="text-lg font-semibold mb-2">モバイル表示</h3>
          <div class="max-w-sm">
            <MaturityScorePanel v-bind="args" />
          </div>
        </div>
      </div>
    `
  })
}

// ダークモード対応
export const DarkMode: Story = {
  args: {
    autoRefresh: false
  },
  render: (args) => ({
    components: { MaturityScorePanel },
    setup() {
      return { args }
    },
    template: `
      <div class="dark bg-gray-900 p-6 rounded-lg">
        <MaturityScorePanel v-bind="args" class="dark:bg-gray-800 dark:border-gray-700" />
      </div>
    `
  })
}

// 複数パネル表示（比較用）
export const MultipleScores: Story = {
  render: () => ({
    components: { MaturityScorePanel },
    template: `
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div>
          <h3 class="text-lg font-semibold mb-4">プロジェクトA</h3>
          <MaturityScorePanel :auto-refresh="false" />
        </div>
        <div>
          <h3 class="text-lg font-semibold mb-4">プロジェクトB</h3>
          <MaturityScorePanel :auto-refresh="false" />
        </div>
      </div>
    `
  })
}

// インタラクション重視
export const InteractionFocus: Story = {
  args: {
    autoRefresh: false
  },
  render: (args) => ({
    components: { MaturityScorePanel },
    setup() {
      return { args }
    },
    template: `
      <div class="max-w-2xl space-y-4">
        <div class="bg-blue-50 border border-blue-200 rounded-lg p-4">
          <h3 class="text-blue-800 font-semibold mb-2">💡 使い方</h3>
          <ul class="text-blue-700 text-sm space-y-1">
            <li>• 「再分析」ボタンで最新スコアを取得</li>
            <li>• 「レポート」ボタンで詳細データをダウンロード</li>
            <li>• 各次元の詳細メトリクスで弱点を特定</li>
            <li>• 改善提案を参考に品質向上を実践</li>
          </ul>
        </div>
        <MaturityScorePanel v-bind="args" />
      </div>
    `
  })
}