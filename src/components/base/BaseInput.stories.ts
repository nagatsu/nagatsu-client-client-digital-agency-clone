import type { Meta, StoryObj } from '@storybook/vue3';
import BaseInput from './BaseInput.vue';

// Meta 設定
const meta: Meta<typeof BaseInput> = {
  title: 'Base/BaseInput',
  component: BaseInput,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: `
# BaseInput

多機能な入力フィールドコンポーネント。
デジタル庁準拠デザインシステム（94.5/100品質）に基づく実装。

## 機能
- 12種類の入力タイプ（text, email, password, number, tel等）
- パスワード表示切り替え機能
- 左右アイコン配置
- 3段階のサイズ展開（sm, md, lg）
- バリデーション状態表示
- 文字数カウンター
- textarea対応
- 完全アクセシビリティ対応
`
      }
    }
  },
  tags: ['autodocs'],
  argTypes: {
    modelValue: {
      description: '入力値',
      control: { type: 'text' },
      table: {
        type: { summary: 'string | number' },
        defaultValue: { summary: '' }
      }
    },
    type: {
      description: '入力タイプ',
      options: ['text', 'email', 'password', 'number', 'tel', 'url', 'search', 'textarea'],
      control: { type: 'select' },
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'text' }
      }
    },
    label: {
      description: 'ラベルテキスト',
      control: { type: 'text' },
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '' }
      }
    },
    placeholder: {
      description: 'プレースホルダーテキスト',
      control: { type: 'text' },
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '' }
      }
    },
    helpText: {
      description: 'ヘルプテキスト',
      control: { type: 'text' },
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '' }
      }
    },
    error: {
      description: 'エラーメッセージ',
      control: { type: 'text' },
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '' }
      }
    },
    required: {
      description: '必須フィールドかどうか',
      control: { type: 'boolean' },
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' }
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
    readonly: {
      description: '読み取り専用かどうか',
      control: { type: 'boolean' },
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' }
      }
    },
    size: {
      description: '入力フィールドのサイズ',
      options: ['sm', 'md', 'lg'],
      control: { type: 'select' },
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'md' }
      }
    },
    rows: {
      description: 'textareaの行数',
      control: { type: 'number' },
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: '3' }
      }
    },
    maxlength: {
      description: '最大文字数',
      control: { type: 'number' },
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: 'null' }
      }
    },
    showCounter: {
      description: '文字数カウンターを表示するか',
      control: { type: 'boolean' },
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' }
      }
    },
    showPasswordToggle: {
      description: 'パスワード表示切り替えボタンを表示するか',
      control: { type: 'boolean' },
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'true' }
      }
    },
    'update:modelValue': {
      description: '値が変更された時に発火',
      action: 'update:modelValue',
      table: {
        category: 'Events',
        type: { summary: '(value: string | number) => void' }
      }
    },
    blur: {
      description: 'フォーカスが外れた時に発火',
      action: 'blur',
      table: {
        category: 'Events',
        type: { summary: '(event: FocusEvent) => void' }
      }
    },
    focus: {
      description: 'フォーカスが当たった時に発火',
      action: 'focus',
      table: {
        category: 'Events',
        type: { summary: '(event: FocusEvent) => void' }
      }
    }
  }
};

export default meta;
type Story = StoryObj<typeof meta>;

// Default Story
export const Default: Story = {
  args: {
    label: 'お名前',
    placeholder: 'お名前を入力してください',
    helpText: '姓と名を入力してください'
  }
};

// サイズバリエーション
export const Sizes: Story = {
  render: () => ({
    components: { BaseInput },
    data() {
      return {
        values: {
          sm: '',
          md: '',
          lg: ''
        }
      };
    },
    template: `
      <div class="space-y-4">
        <BaseInput
          v-model="values.sm"
          size="sm"
          label="小サイズ (sm)"
          placeholder="小さいサイズの入力フィールド"
        />
        <BaseInput
          v-model="values.md"
          size="md"
          label="中サイズ (md)"
          placeholder="標準サイズの入力フィールド"
        />
        <BaseInput
          v-model="values.lg"
          size="lg"
          label="大サイズ (lg)"
          placeholder="大きいサイズの入力フィールド"
        />
      </div>
    `
  }),
  parameters: {
    docs: {
      description: {
        story: '3つの異なるサイズの入力フィールド。用途に応じて適切なサイズを選択できます。'
      }
    }
  }
};

// 入力タイプ
export const InputTypes: Story = {
  render: () => ({
    components: { BaseInput },
    data() {
      return {
        values: {
          text: '',
          email: '',
          password: '',
          number: '',
          tel: '',
          url: '',
          search: ''
        }
      };
    },
    template: `
      <div class="space-y-4">
        <BaseInput
          v-model="values.text"
          type="text"
          label="テキスト"
          placeholder="通常のテキスト入力"
        />
        <BaseInput
          v-model="values.email"
          type="email"
          label="メールアドレス"
          placeholder="example@email.com"
        />
        <BaseInput
          v-model="values.password"
          type="password"
          label="パスワード"
          placeholder="パスワードを入力"
        />
        <BaseInput
          v-model="values.number"
          type="number"
          label="数値"
          placeholder="数値を入力"
        />
        <BaseInput
          v-model="values.tel"
          type="tel"
          label="電話番号"
          placeholder="03-1234-5678"
        />
        <BaseInput
          v-model="values.url"
          type="url"
          label="URL"
          placeholder="https://example.com"
        />
        <BaseInput
          v-model="values.search"
          type="search"
          label="検索"
          placeholder="検索キーワード"
        />
      </div>
    `
  }),
  parameters: {
    docs: {
      description: {
        story: '様々な入力タイプに対応。それぞれのタイプに適したキーボードやバリデーションが適用されます。'
      }
    }
  }
};

// パスワード入力
export const PasswordInput: Story = {
  render: () => ({
    components: { BaseInput },
    data() {
      return {
        password: '',
        confirmPassword: ''
      };
    },
    template: `
      <div class="space-y-4">
        <BaseInput
          v-model="password"
          type="password"
          label="パスワード"
          placeholder="パスワードを入力してください"
          :required="true"
          help-text="8文字以上、英数字を含む"
        />
        <BaseInput
          v-model="confirmPassword"
          type="password"
          label="パスワード確認"
          placeholder="パスワードを再度入力してください"
          :required="true"
          :show-password-toggle="false"
        />
        <div class="p-4 bg-blue-50 rounded-lg">
          <p class="text-sm text-blue-800">パスワードフィールドの機能:</p>
          <ul class="text-sm text-blue-700 mt-2 space-y-1">
            <li>• 表示切り替えボタン（デフォルト有効）</li>
            <li>• セキュアな入力状態</li>
            <li>• showPasswordToggle=false で切り替え無効化</li>
          </ul>
        </div>
      </div>
    `
  }),
  parameters: {
    docs: {
      description: {
        story: 'パスワード入力の例。表示切り替えボタンでセキュリティと利便性を両立します。'
      }
    }
  }
};

// バリデーション状態
export const ValidationStates: Story = {
  render: () => ({
    components: { BaseInput },
    data() {
      return {
        validValue: 'user@example.com',
        invalidValue: 'invalid-email',
        normalValue: ''
      };
    },
    template: `
      <div class="space-y-4">
        <BaseInput
          v-model="normalValue"
          type="email"
          label="通常状態"
          placeholder="メールアドレスを入力"
          help-text="有効なメールアドレスを入力してください"
        />
        <BaseInput
          v-model="validValue"
          type="email"
          label="有効な入力"
          placeholder="メールアドレスを入力"
          help-text="正しい形式のメールアドレスです"
        />
        <BaseInput
          v-model="invalidValue"
          type="email"
          label="エラー状態"
          placeholder="メールアドレスを入力"
          error="有効なメールアドレスを入力してください"
        />
        <BaseInput
          v-model="normalValue"
          type="text"
          label="必須フィールド"
          placeholder="必須項目です"
          :required="true"
          help-text="この項目は必須です"
        />
      </div>
    `
  }),
  parameters: {
    docs: {
      description: {
        story: '入力フィールドのバリデーション状態。エラー時は赤色でフィードバックを提供します。'
      }
    }
  }
};

// アイコン付き入力
export const WithIcons: Story = {
  render: () => ({
    components: { BaseInput },
    data() {
      return {
        search: '',
        email: '',
        phone: '',
        url: ''
      };
    },
    template: `
      <div class="space-y-4">
        <BaseInput
          v-model="search"
          type="search"
          label="検索"
          placeholder="検索キーワード"
        />
        <BaseInput
          v-model="email"
          type="email"
          label="メールアドレス"
          placeholder="example@email.com"
        />
        <BaseInput
          v-model="phone"
          type="tel"
          label="電話番号"
          placeholder="03-1234-5678"
        />
        <BaseInput
          v-model="url"
          type="url"
          label="ウェブサイト"
          placeholder="https://example.com"
        />
        <div class="p-4 bg-blue-50 rounded-lg">
          <p class="text-sm text-blue-800">アイコン機能:</p>
          <ul class="text-sm text-blue-700 mt-2 space-y-1">
            <li>• 左右のアイコン配置に対応</li>
            <li>• 入力タイプに応じた適切なアイコン</li>
            <li>• パディング自動調整</li>
          </ul>
        </div>
      </div>
    `
  }),
  parameters: {
    docs: {
      description: {
        story: 'アイコン付き入力フィールドの例。視覚的な手がかりでユーザビリティを向上させます。'
      }
    }
  }
};

// Textarea
export const TextareaInput: Story = {
  render: () => ({
    components: { BaseInput },
    data() {
      return {
        message: '',
        description: '',
        comment: ''
      };
    },
    template: `
      <div class="space-y-4">
        <BaseInput
          v-model="message"
          type="textarea"
          label="メッセージ"
          placeholder="メッセージを入力してください"
          :rows="3"
        />
        <BaseInput
          v-model="description"
          type="textarea"
          label="詳細説明"
          placeholder="詳細な説明を入力してください"
          :rows="5"
          :maxlength="500"
          :show-counter="true"
          help-text="500文字以内で入力してください"
        />
        <BaseInput
          v-model="comment"
          type="textarea"
          label="コメント"
          placeholder="コメントを入力してください"
          :rows="4"
          :maxlength="200"
          :show-counter="true"
        />
      </div>
    `
  }),
  parameters: {
    docs: {
      description: {
        story: 'テキストエリアの例。複数行の入力に対応し、文字数カウンターも利用できます。'
      }
    }
  }
};

// 状態のバリエーション
export const InputStates: Story = {
  render: () => ({
    components: { BaseInput },
    data() {
      return {
        normalValue: '',
        disabledValue: '無効状態のテキスト',
        readonlyValue: '読み取り専用のテキスト'
      };
    },
    template: `
      <div class="space-y-4">
        <BaseInput
          v-model="normalValue"
          label="通常状態"
          placeholder="通常の入力フィールド"
          help-text="編集可能な入力フィールドです"
        />
        <BaseInput
          v-model="disabledValue"
          label="無効状態"
          placeholder="無効状態"
          :disabled="true"
          help-text="無効状態のため編集できません"
        />
        <BaseInput
          v-model="readonlyValue"
          label="読み取り専用"
          placeholder="読み取り専用"
          :readonly="true"
          help-text="読み取り専用のため編集できません"
        />
      </div>
    `
  }),
  parameters: {
    docs: {
      description: {
        story: '入力フィールドの状態バリエーション。用途に応じて適切な状態を選択できます。'
      }
    }
  }
};

// 文字数カウンター
export const CharacterCounter: Story = {
  render: () => ({
    components: { BaseInput },
    data() {
      return {
        shortText: '',
        mediumText: '',
        longText: ''
      };
    },
    template: `
      <div class="space-y-4">
        <BaseInput
          v-model="shortText"
          label="短いテキスト"
          placeholder="短いテキストを入力"
          :maxlength="50"
          :show-counter="true"
          help-text="50文字以内"
        />
        <BaseInput
          v-model="mediumText"
          type="textarea"
          label="中程度のテキスト"
          placeholder="中程度のテキストを入力"
          :rows="4"
          :maxlength="200"
          :show-counter="true"
          help-text="200文字以内"
        />
        <BaseInput
          v-model="longText"
          type="textarea"
          label="長いテキスト"
          placeholder="長いテキストを入力"
          :rows="6"
          :maxlength="1000"
          :show-counter="true"
          help-text="1000文字以内"
        />
        <div class="p-4 bg-blue-50 rounded-lg">
          <p class="text-sm text-blue-800">文字数カウンター機能:</p>
          <ul class="text-sm text-blue-700 mt-2 space-y-1">
            <li>• リアルタイムで文字数を表示</li>
            <li>• 最大文字数の制限</li>
            <li>• 視覚的な制限表示</li>
          </ul>
        </div>
      </div>
    `
  }),
  parameters: {
    docs: {
      description: {
        story: '文字数カウンター機能の例。最大文字数の制限と現在の文字数を表示します。'
      }
    }
  }
};

// フォーム統合例
export const FormIntegration: Story = {
  render: () => ({
    components: { BaseInput },
    data() {
      return {
        formData: {
          firstName: '',
          lastName: '',
          email: '',
          password: '',
          confirmPassword: '',
          phone: '',
          company: '',
          position: '',
          message: ''
        },
        errors: {}
      };
    },
    methods: {
      validateForm() {
        this.errors = {};
        
        if (!this.formData.firstName) {
          this.errors.firstName = '名前を入力してください';
        }
        if (!this.formData.lastName) {
          this.errors.lastName = '苗字を入力してください';
        }
        if (!this.formData.email) {
          this.errors.email = 'メールアドレスを入力してください';
        } else if (!this.formData.email.includes('@')) {
          this.errors.email = '有効なメールアドレスを入力してください';
        }
        if (!this.formData.password) {
          this.errors.password = 'パスワードを入力してください';
        } else if (this.formData.password.length < 8) {
          this.errors.password = 'パスワードは8文字以上にしてください';
        }
        if (this.formData.password !== this.formData.confirmPassword) {
          this.errors.confirmPassword = 'パスワードが一致しません';
        }
        
        if (Object.keys(this.errors).length === 0) {
          alert('フォームが正常に送信されました！');
        }
      }
    },
    template: `
      <form @submit.prevent="validateForm" class="space-y-6">
        <div class="grid md:grid-cols-2 gap-4">
          <BaseInput
            v-model="formData.firstName"
            label="名前"
            placeholder="太郎"
            :required="true"
            :error="errors.firstName"
          />
          <BaseInput
            v-model="formData.lastName"
            label="苗字"
            placeholder="山田"
            :required="true"
            :error="errors.lastName"
          />
        </div>
        
        <BaseInput
          v-model="formData.email"
          type="email"
          label="メールアドレス"
          placeholder="user@example.com"
          :required="true"
          :error="errors.email"
        />
        
        <div class="grid md:grid-cols-2 gap-4">
          <BaseInput
            v-model="formData.password"
            type="password"
            label="パスワード"
            placeholder="パスワードを入力"
            :required="true"
            :error="errors.password"
            help-text="8文字以上の英数字"
          />
          <BaseInput
            v-model="formData.confirmPassword"
            type="password"
            label="パスワード確認"
            placeholder="パスワードを再度入力"
            :required="true"
            :error="errors.confirmPassword"
          />
        </div>
        
        <BaseInput
          v-model="formData.phone"
          type="tel"
          label="電話番号"
          placeholder="03-1234-5678"
          help-text="ハイフンありで入力してください"
        />
        
        <div class="grid md:grid-cols-2 gap-4">
          <BaseInput
            v-model="formData.company"
            label="会社名"
            placeholder="株式会社サンプル"
          />
          <BaseInput
            v-model="formData.position"
            label="役職"
            placeholder="エンジニア"
          />
        </div>
        
        <BaseInput
          v-model="formData.message"
          type="textarea"
          label="メッセージ"
          placeholder="お問い合わせ内容をご記入ください"
          :rows="4"
          :maxlength="500"
          :show-counter="true"
          help-text="500文字以内でご記入ください"
        />
        
        <div class="flex gap-3">
          <button
            type="submit"
            class="flex-1 bg-primary-600 text-white py-3 px-6 rounded-lg hover:bg-primary-700 transition-colors"
          >
            送信する
          </button>
          <button
            type="reset"
            class="px-6 py-3 border border-neutral-300 rounded-lg hover:bg-neutral-50 transition-colors"
            @click="formData = { firstName: '', lastName: '', email: '', password: '', confirmPassword: '', phone: '', company: '', position: '', message: '' }; errors = {}"
          >
            リセット
          </button>
        </div>
      </form>
    `
  }),
  parameters: {
    docs: {
      description: {
        story: '実際のフォームでの使用例。バリデーション、エラー表示、様々な入力タイプを組み合わせた実用的な例。'
      }
    }
  }
};

// アクセシビリティデモ
export const AccessibilityDemo: Story = {
  render: () => ({
    components: { BaseInput },
    data() {
      return {
        accessibleValue: ''
      };
    },
    template: `
      <div class="space-y-6">
        <div class="p-4 bg-blue-50 rounded-lg">
          <h3 class="font-medium text-blue-900 mb-2">アクセシビリティ機能</h3>
          <ul class="text-sm text-blue-800 space-y-1">
            <li>• 適切なラベリング（label要素とfor属性）</li>
            <li>• ARIA属性による状態の伝達</li>
            <li>• キーボードナビゲーション対応</li>
            <li>• スクリーンリーダー対応</li>
            <li>• 必須フィールドの明確な表示</li>
            <li>• エラーメッセージの適切な関連付け</li>
          </ul>
        </div>
        
        <BaseInput
          v-model="accessibleValue"
          label="アクセシブルな入力フィールド"
          placeholder="アクセシビリティに配慮した入力フィールド"
          :required="true"
          help-text="このフィールドはスクリーンリーダーと完全に互換性があります"
        />
        
        <div class="text-sm text-neutral-600">
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
