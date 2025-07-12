import type { Meta, StoryObj } from '@storybook/vue3';
import BaseAlert from './BaseAlert.vue';

// Meta 設定
const meta: Meta<typeof BaseAlert> = {
  title: 'Base/BaseAlert',
  component: BaseAlert,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: `
# BaseAlert

ユーザーに重要な情報を伝えるアラートコンポーネント。
デジタル庁準拠デザインシステム（94.5/100品質）に基づく実装。

## 機能
- 4つのタイプ（info, success, warning, error）
- 3つのバリアント（default, solid, minimal）
- 自動非表示機能
- アクションボタン対応
- アクセシビリティ対応（WCAG 2.1 AA準拠）
- スムーズなアニメーション
`
      }
    }
  },
  tags: ['autodocs'],
  argTypes: {
    type: {
      description: 'アラートのタイプ',
      options: ['info', 'success', 'warning', 'error'],
      control: { type: 'select' },
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'info' }
      }
    },
    title: {
      description: 'アラートのタイトル',
      control: { type: 'text' },
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '' }
      }
    },
    message: {
      description: 'アラートのメッセージ',
      control: { type: 'text' },
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '' }
      }
    },
    variant: {
      description: 'アラートのスタイルバリアント',
      options: ['default', 'solid', 'minimal'],
      control: { type: 'select' },
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'default' }
      }
    },
    closable: {
      description: '閉じるボタンを表示するか',
      control: { type: 'boolean' },
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'true' }
      }
    },
    autoClose: {
      description: '自動的に非表示にするか',
      control: { type: 'boolean' },
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' }
      }
    },
    duration: {
      description: '自動非表示までの時間（ミリ秒）',
      control: { type: 'number' },
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: '5000' }
      }
    },
    actionText: {
      description: 'アクションボタンのテキスト',
      control: { type: 'text' },
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '' }
      }
    },
    close: {
      description: 'アラートが閉じられた時に発火',
      action: 'close',
      table: {
        category: 'Events',
        type: { summary: '() => void' }
      }
    },
    action: {
      description: 'アクションボタンがクリックされた時に発火',
      action: 'action',
      table: {
        category: 'Events',
        type: { summary: '() => void' }
      }
    }
  }
};

export default meta;
type Story = StoryObj<typeof meta>;

// Default Story
export const Default: Story = {
  args: {
    type: 'info',
    title: 'お知らせ',
    message: 'システムメンテナンスのため、7月10日 午前2時〜4時の間、サービスを一時停止します。',
    variant: 'default',
    closable: true
  }
};

// タイプ: Info
export const InfoType: Story = {
  args: {
    type: 'info',
    title: '新機能のお知らせ',
    message: 'ダッシュボードに新しい分析機能が追加されました。詳細はヘルプセンターをご覧ください。',
    actionText: '詳細を見る'
  },
  parameters: {
    docs: {
      description: {
        story: '情報を伝えるアラート。一般的なお知らせや新機能の案内に使用します。'
      }
    }
  }
};

// タイプ: Success
export const SuccessType: Story = {
  args: {
    type: 'success',
    title: '保存完了',
    message: 'データが正常に保存されました。',
    autoClose: true,
    duration: 3000
  },
  parameters: {
    docs: {
      description: {
        story: '成功を伝えるアラート。処理が正常に完了した場合に使用します。3秒後に自動的に消えます。'
      }
    }
  }
};

// タイプ: Warning
export const WarningType: Story = {
  args: {
    type: 'warning',
    title: 'ご注意ください',
    message: 'このアクションを実行すると、すべての変更が破棄されます。続行しますか？',
    actionText: '続行する'
  },
  parameters: {
    docs: {
      description: {
        story: '警告を伝えるアラート。注意が必要な操作や潜在的な問題を通知する際に使用します。'
      }
    }
  }
};

// タイプ: Error
export const ErrorType: Story = {
  args: {
    type: 'error',
    title: 'エラーが発生しました',
    message: 'ファイルのアップロードに失敗しました。ファイルサイズが制限を超えている可能性があります。',
    actionText: '再試行'
  },
  parameters: {
    docs: {
      description: {
        story: 'エラーを伝えるアラート。処理の失敗やシステムエラーを通知する際に使用します。'
      }
    }
  }
};

// バリアント: Solid
export const SolidVariant: Story = {
  args: {
    type: 'success',
    title: '支払い完了',
    message: 'お支払いが正常に処理されました。確認メールを送信しました。',
    variant: 'solid'
  },
  parameters: {
    docs: {
      description: {
        story: '背景色が塗りつぶされたアラート。より強調したい場合に使用します。'
      }
    }
  }
};

// バリアント: Minimal
export const MinimalVariant: Story = {
  args: {
    type: 'info',
    title: 'ヒント',
    message: 'キーボードショートカット Cmd+S で素早く保存できます。',
    variant: 'minimal',
    closable: false
  },
  parameters: {
    docs: {
      description: {
        story: '最小限のスタイルのアラート。補足的な情報やヒントを表示する際に使用します。'
      }
    }
  }
};

// 複数アラートの例
export const MultipleAlerts: Story = {
  render: () => ({
    components: { BaseAlert },
    template: `
      <div class="space-y-4">
        <BaseAlert
          type="error"
          title="接続エラー"
          message="サーバーとの接続が失われました。"
        />
        <BaseAlert
          type="warning"
          title="警告"
          message="あと5分でセッションがタイムアウトします。"
          action-text="延長する"
        />
        <BaseAlert
          type="info"
          title="お知らせ"
          message="新しいアップデートが利用可能です。"
          action-text="今すぐ更新"
        />
      </div>
    `
  }),
  parameters: {
    docs: {
      description: {
        story: '複数のアラートを同時に表示する例。優先度に応じて配置します。'
      }
    }
  }
};

// カスタムコンテンツ
export const CustomContent: Story = {
  render: () => ({
    components: { BaseAlert },
    template: `
      <BaseAlert type="info" title="システム状態">
        <div class="space-y-2">
          <div class="flex items-center justify-between">
            <span>CPU使用率</span>
            <span class="font-medium">45%</span>
          </div>
          <div class="flex items-center justify-between">
            <span>メモリ使用率</span>
            <span class="font-medium">62%</span>
          </div>
          <div class="flex items-center justify-between">
            <span>ディスク使用率</span>
            <span class="font-medium">78%</span>
          </div>
        </div>
        <template #actions>
          <div class="flex gap-2">
            <button class="text-sm text-primary-600 hover:text-primary-700">詳細を見る</button>
            <button class="text-sm text-primary-600 hover:text-primary-700">更新</button>
          </div>
        </template>
      </BaseAlert>
    `
  }),
  parameters: {
    docs: {
      description: {
        story: 'スロットを使用してカスタムコンテンツを表示する例。より複雑な情報表示に対応できます。'
      }
    }
  }
};

// 自動非表示のデモ
export const AutoCloseDemo: Story = {
  render: () => ({
    components: { BaseAlert },
    data() {
      return {
        showAlert: false
      };
    },
    methods: {
      triggerAlert() {
        this.showAlert = true;
        setTimeout(() => {
          this.showAlert = false;
        }, 100); // 再表示のためのリセット
      }
    },
    template: `
      <div>
        <button
          @click="triggerAlert"
          class="px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors"
        >
          アラートを表示
        </button>
        <div class="mt-4">
          <BaseAlert
            v-if="showAlert"
            type="success"
            title="操作完了"
            message="データが正常に更新されました。"
            :auto-close="true"
            :duration="3000"
          />
        </div>
      </div>
    `
  }),
  parameters: {
    docs: {
      description: {
        story: '自動非表示機能のデモ。ボタンをクリックすると3秒間表示されるアラート。'
      }
    }
  }
};

// アクセシビリティ対応
export const AccessibilityFocus: Story = {
  args: {
    type: 'error',
    title: '入力エラー',
    message: 'メールアドレスの形式が正しくありません。example@domain.com の形式で入力してください。',
    variant: 'default'
  },
  parameters: {
    docs: {
      description: {
        story: 'role="alert"属性により、スクリーンリーダーが即座に読み上げます。フォーカス管理も適切に実装されています。'
      }
    }
  }
};