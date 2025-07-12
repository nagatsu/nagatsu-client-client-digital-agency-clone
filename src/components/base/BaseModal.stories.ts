import type { Meta, StoryObj } from '@storybook/vue3';
import BaseModal from './BaseModal.vue';

// Meta 設定
const meta: Meta<typeof BaseModal> = {
  title: 'Base/BaseModal',
  component: BaseModal,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: `
# BaseModal

アクセシビリティを完全考慮したモーダルダイアログコンポーネント。
デジタル庁準拠デザインシステム（94.5/100品質）に基づく実装。

## 機能
- 6段階のサイズ展開（xs, sm, md, lg, xl, full）
- フォーカストラップ機能
- ESCキー・背景クリック閉じる
- body要素のスクロールロック
- teleport によるbodyレベル描画
- スムーズなアニメーション
- WCAG 2.1 AA準拠のアクセシビリティ
`
      }
    }
  },
  tags: ['autodocs'],
  argTypes: {
    modelValue: {
      description: 'モーダルの表示状態',
      control: { type: 'boolean' },
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' }
      }
    },
    title: {
      description: 'モーダルのタイトル',
      control: { type: 'text' },
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '' }
      }
    },
    size: {
      description: 'モーダルのサイズ',
      options: ['xs', 'sm', 'md', 'lg', 'xl', 'full'],
      control: { type: 'select' },
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'md' }
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
    closeOnBackdrop: {
      description: '背景クリックで閉じるか',
      control: { type: 'boolean' },
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'true' }
      }
    },
    closeOnEscape: {
      description: 'ESCキーで閉じるか',
      control: { type: 'boolean' },
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'true' }
      }
    },
    trapFocus: {
      description: 'フォーカストラップを有効にするか',
      control: { type: 'boolean' },
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'true' }
      }
    },
    noPadding: {
      description: 'ボディのパディングを削除するか',
      control: { type: 'boolean' },
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' }
      }
    },
    'update:modelValue': {
      description: 'モーダルの表示状態が変更された時に発火',
      action: 'update:modelValue',
      table: {
        category: 'Events',
        type: { summary: '(value: boolean) => void' }
      }
    },
    close: {
      description: 'モーダルが閉じられた時に発火',
      action: 'close',
      table: {
        category: 'Events',
        type: { summary: '() => void' }
      }
    },
    open: {
      description: 'モーダルが開かれた時に発火',
      action: 'open',
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
  render: () => ({
    components: { BaseModal },
    data() {
      return {
        isOpen: false
      };
    },
    template: `
      <div>
        <button
          @click="isOpen = true"
          class="px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors"
        >
          モーダルを開く
        </button>
        
        <BaseModal
          v-model="isOpen"
          title="基本的なモーダル"
        >
          <p class="mb-4">これは基本的なモーダルダイアログです。</p>
          <p>ESCキーまたは背景をクリックすると閉じることができます。</p>
          
          <template #footer>
            <button
              @click="isOpen = false"
              class="px-4 py-2 border border-neutral-300 rounded-lg hover:bg-neutral-50 transition-colors mr-2"
            >
              キャンセル
            </button>
            <button
              @click="isOpen = false"
              class="px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors"
            >
              OK
            </button>
          </template>
        </BaseModal>
      </div>
    `
  })
};

// サイズバリエーション
export const Sizes: Story = {
  render: () => ({
    components: { BaseModal },
    data() {
      return {
        openModal: ''
      };
    },
    template: `
      <div class="space-x-4">
        <button
          v-for="size in ['xs', 'sm', 'md', 'lg', 'xl', 'full']"
          :key="size"
          @click="openModal = size"
          class="px-3 py-2 bg-primary-600 text-white rounded hover:bg-primary-700 transition-colors"
        >
          {{ size.toUpperCase() }}
        </button>
        
        <BaseModal
          v-for="size in ['xs', 'sm', 'md', 'lg', 'xl', 'full']"
          :key="size"
          :model-value="openModal === size"
          @update:model-value="openModal = ''"
          :title="\`\${size.toUpperCase()}サイズのモーダル\`"
          :size="size"
        >
          <p>{{ size }}サイズのモーダルです。</p>
          <p v-if="size === 'full'">フルサイズモーダルは大量のコンテンツや複雑なフォームに適しています。</p>
          
          <template #footer>
            <button
              @click="openModal = ''"
              class="px-4 py-2 bg-neutral-500 text-white rounded hover:bg-neutral-600 transition-colors"
            >
              閉じる
            </button>
          </template>
        </BaseModal>
      </div>
    `
  }),
  parameters: {
    docs: {
      description: {
        story: '6つの異なるサイズのモーダル。コンテンツ量に応じて最適なサイズを選択できます。'
      }
    }
  }
};

// 確認ダイアログ
export const ConfirmDialog: Story = {
  render: () => ({
    components: { BaseModal },
    data() {
      return {
        showConfirm: false,
        result: ''
      };
    },
    methods: {
      handleConfirm() {
        this.result = '削除が実行されました';
        this.showConfirm = false;
      },
      handleCancel() {
        this.result = 'キャンセルされました';
        this.showConfirm = false;
      }
    },
    template: `
      <div>
        <button
          @click="showConfirm = true"
          class="px-4 py-2 bg-error-600 text-white rounded-lg hover:bg-error-700 transition-colors"
        >
          削除実行
        </button>
        
        <p v-if="result" class="mt-4 text-sm text-neutral-600">結果: {{ result }}</p>
        
        <BaseModal
          v-model="showConfirm"
          title="確認"
          size="sm"
          :close-on-backdrop="false"
        >
          <div class="flex items-center mb-4">
            <div class="w-10 h-10 bg-error-100 rounded-full flex items-center justify-center mr-4">
              <svg class="w-5 h-5 text-error-600" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clip-rule="evenodd" />
              </svg>
            </div>
            <div>
              <h4 class="font-medium">本当に削除しますか？</h4>
              <p class="text-sm text-neutral-600 mt-1">この操作は取り消すことができません。</p>
            </div>
          </div>
          
          <template #footer>
            <button
              @click="handleCancel"
              class="px-4 py-2 border border-neutral-300 rounded-lg hover:bg-neutral-50 transition-colors mr-2"
            >
              キャンセル
            </button>
            <button
              @click="handleConfirm"
              class="px-4 py-2 bg-error-600 text-white rounded-lg hover:bg-error-700 transition-colors"
            >
              削除する
            </button>
          </template>
        </BaseModal>
      </div>
    `
  }),
  parameters: {
    docs: {
      description: {
        story: '確認ダイアログの例。背景クリック無効化により、ユーザーに明確な選択を求めます。'
      }
    }
  }
};

// フォームモーダル
export const FormModal: Story = {
  render: () => ({
    components: { BaseModal },
    data() {
      return {
        showForm: false,
        formData: {
          name: '',
          email: '',
          message: ''
        },
        result: ''
      };
    },
    methods: {
      submitForm() {
        this.result = `送信完了: ${this.formData.name}さん`;
        this.showForm = false;
        this.formData = { name: '', email: '', message: '' };
      }
    },
    template: `
      <div>
        <button
          @click="showForm = true"
          class="px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors"
        >
          お問い合わせ
        </button>
        
        <p v-if="result" class="mt-4 text-sm text-success-600">{{ result }}</p>
        
        <BaseModal
          v-model="showForm"
          title="お問い合わせフォーム"
          size="lg"
        >
          <form @submit.prevent="submitForm" class="space-y-4">
            <div>
              <label class="block text-sm font-medium text-neutral-700 mb-1">お名前 *</label>
              <input
                v-model="formData.name"
                type="text"
                required
                class="w-full px-3 py-2 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
              >
            </div>
            
            <div>
              <label class="block text-sm font-medium text-neutral-700 mb-1">メールアドレス *</label>
              <input
                v-model="formData.email"
                type="email"
                required
                class="w-full px-3 py-2 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
              >
            </div>
            
            <div>
              <label class="block text-sm font-medium text-neutral-700 mb-1">お問い合わせ内容 *</label>
              <textarea
                v-model="formData.message"
                rows="4"
                required
                class="w-full px-3 py-2 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
              ></textarea>
            </div>
          </form>
          
          <template #footer>
            <button
              @click="showForm = false"
              type="button"
              class="px-4 py-2 border border-neutral-300 rounded-lg hover:bg-neutral-50 transition-colors mr-2"
            >
              キャンセル
            </button>
            <button
              @click="submitForm"
              type="submit"
              class="px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors"
            >
              送信
            </button>
          </template>
        </BaseModal>
      </div>
    `
  }),
  parameters: {
    docs: {
      description: {
        story: 'フォーム入力用のモーダル。フォーカストラップにより、キーボードナビゲーションが適切に動作します。'
      }
    }
  }
};

// 画像ギャラリー
export const ImageGallery: Story = {
  render: () => ({
    components: { BaseModal },
    data() {
      return {
        showGallery: false,
        images: [
          { id: 1, title: '自然風景', url: 'https://picsum.photos/800/600?random=1' },
          { id: 2, title: '都市景観', url: 'https://picsum.photos/800/600?random=2' },
          { id: 3, title: '建築物', url: 'https://picsum.photos/800/600?random=3' }
        ],
        currentImage: null
      };
    },
    methods: {
      openImage(image) {
        this.currentImage = image;
        this.showGallery = true;
      }
    },
    template: `
      <div>
        <div class="grid grid-cols-3 gap-4 mb-4">
          <div
            v-for="image in images"
            :key="image.id"
            @click="openImage(image)"
            class="aspect-square bg-neutral-200 rounded-lg cursor-pointer hover:opacity-80 transition-opacity flex items-center justify-center"
          >
            <span class="text-neutral-500 text-sm">{{ image.title }}</span>
          </div>
        </div>
        
        <BaseModal
          v-model="showGallery"
          :title="currentImage?.title"
          size="xl"
          no-padding
        >
          <div v-if="currentImage" class="text-center">
            <div class="aspect-video bg-neutral-100 flex items-center justify-center">
              <span class="text-neutral-500">{{ currentImage.title }} の画像</span>
            </div>
            <div class="p-6">
              <p class="text-neutral-600">画像の詳細情報やメタデータをここに表示できます。</p>
            </div>
          </div>
          
          <template #footer>
            <button
              @click="showGallery = false"
              class="px-4 py-2 bg-neutral-500 text-white rounded-lg hover:bg-neutral-600 transition-colors"
            >
              閉じる
            </button>
          </template>
        </BaseModal>
      </div>
    `
  }),
  parameters: {
    docs: {
      description: {
        story: '画像ギャラリー用のモーダル。noPaddingオプションで画像を枠いっぱいに表示できます。'
      }
    }
  }
};

// ステップ式ウィザード
export const WizardModal: Story = {
  render: () => ({
    components: { BaseModal },
    data() {
      return {
        showWizard: false,
        currentStep: 1,
        totalSteps: 3,
        wizardData: {
          step1: { name: '', email: '' },
          step2: { plan: '', features: [] },
          step3: { payment: '' }
        }
      };
    },
    computed: {
      stepTitle() {
        const titles = {
          1: 'ユーザー情報',
          2: 'プラン選択',
          3: '支払い方法'
        };
        return titles[this.currentStep];
      },
      canProceed() {
        switch (this.currentStep) {
          case 1: return this.wizardData.step1.name && this.wizardData.step1.email;
          case 2: return this.wizardData.step2.plan;
          case 3: return this.wizardData.step3.payment;
          default: return false;
        }
      }
    },
    methods: {
      nextStep() {
        if (this.currentStep < this.totalSteps) {
          this.currentStep++;
        }
      },
      prevStep() {
        if (this.currentStep > 1) {
          this.currentStep--;
        }
      },
      startWizard() {
        this.showWizard = true;
        this.currentStep = 1;
      },
      completeWizard() {
        alert('ウィザード完了！');
        this.showWizard = false;
      }
    },
    template: `
      <div>
        <button
          @click="startWizard"
          class="px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors"
        >
          セットアップウィザード開始
        </button>
        
        <BaseModal
          v-model="showWizard"
          :title="\`ステップ \${currentStep}/\${totalSteps}: \${stepTitle}\`"
          size="lg"
          :close-on-backdrop="false"
          :close-on-escape="false"
        >
          <!-- プログレスバー -->
          <div class="mb-6">
            <div class="flex justify-between text-xs text-neutral-600 mb-2">
              <span>進捗</span>
              <span>{{ Math.round((currentStep / totalSteps) * 100) }}%</span>
            </div>
            <div class="w-full bg-neutral-200 rounded-full h-2">
              <div
                class="bg-primary-600 h-2 rounded-full transition-all duration-300"
                :style="{ width: (currentStep / totalSteps) * 100 + '%' }"
              ></div>
            </div>
          </div>
          
          <!-- ステップ1: ユーザー情報 -->
          <div v-if="currentStep === 1" class="space-y-4">
            <div>
              <label class="block text-sm font-medium text-neutral-700 mb-1">お名前 *</label>
              <input
                v-model="wizardData.step1.name"
                type="text"
                class="w-full px-3 py-2 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500"
              >
            </div>
            <div>
              <label class="block text-sm font-medium text-neutral-700 mb-1">メールアドレス *</label>
              <input
                v-model="wizardData.step1.email"
                type="email"
                class="w-full px-3 py-2 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500"
              >
            </div>
          </div>
          
          <!-- ステップ2: プラン選択 -->
          <div v-if="currentStep === 2" class="space-y-4">
            <div class="space-y-3">
              <label class="flex items-center p-3 border rounded-lg cursor-pointer hover:bg-neutral-50">
                <input
                  v-model="wizardData.step2.plan"
                  type="radio"
                  value="basic"
                  class="mr-3"
                >
                <div>
                  <div class="font-medium">ベーシックプラン</div>
                  <div class="text-sm text-neutral-600">¥1,000/月</div>
                </div>
              </label>
              
              <label class="flex items-center p-3 border rounded-lg cursor-pointer hover:bg-neutral-50">
                <input
                  v-model="wizardData.step2.plan"
                  type="radio"
                  value="premium"
                  class="mr-3"
                >
                <div>
                  <div class="font-medium">プレミアムプラン</div>
                  <div class="text-sm text-neutral-600">¥2,980/月</div>
                </div>
              </label>
            </div>
          </div>
          
          <!-- ステップ3: 支払い方法 -->
          <div v-if="currentStep === 3" class="space-y-4">
            <div class="space-y-3">
              <label class="flex items-center p-3 border rounded-lg cursor-pointer hover:bg-neutral-50">
                <input
                  v-model="wizardData.step3.payment"
                  type="radio"
                  value="card"
                  class="mr-3"
                >
                <span>クレジットカード</span>
              </label>
              
              <label class="flex items-center p-3 border rounded-lg cursor-pointer hover:bg-neutral-50">
                <input
                  v-model="wizardData.step3.payment"
                  type="radio"
                  value="bank"
                  class="mr-3"
                >
                <span>銀行振込</span>
              </label>
            </div>
          </div>
          
          <template #footer>
            <button
              v-if="currentStep > 1"
              @click="prevStep"
              class="px-4 py-2 border border-neutral-300 rounded-lg hover:bg-neutral-50 transition-colors mr-2"
            >
              戻る
            </button>
            
            <button
              v-if="currentStep < totalSteps"
              @click="nextStep"
              :disabled="!canProceed"
              class="px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              次へ
            </button>
            
            <button
              v-if="currentStep === totalSteps"
              @click="completeWizard"
              :disabled="!canProceed"
              class="px-4 py-2 bg-success-600 text-white rounded-lg hover:bg-success-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              完了
            </button>
          </template>
        </BaseModal>
      </div>
    `
  }),
  parameters: {
    docs: {
      description: {
        story: 'ステップ式ウィザードの例。プログレスバーと段階的なフォーム入力で複雑な設定を簡単に。'
      }
    }
  }
};

// アクセシビリティデモ
export const AccessibilityDemo: Story = {
  render: () => ({
    components: { BaseModal },
    data() {
      return {
        showA11yModal: false
      };
    },
    template: `
      <div>
        <div class="mb-4 p-4 bg-blue-50 rounded-lg">
          <h3 class="font-medium text-blue-900 mb-2">アクセシビリティ機能</h3>
          <ul class="text-sm text-blue-800 space-y-1">
            <li>• フォーカストラップ: Tabキーでモーダル内要素のみに移動</li>
            <li>• ESCキー: モーダルを閉じる</li>
            <li>• ARIA属性: スクリーンリーダー対応</li>
            <li>• 初期フォーカス: モーダル表示時に最初の要素にフォーカス</li>
          </ul>
        </div>
        
        <button
          @click="showA11yModal = true"
          class="px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors"
        >
          アクセシビリティモーダルを開く
        </button>
        
        <BaseModal
          v-model="showA11yModal"
          title="アクセシビリティデモ"
          size="md"
        >
          <div class="space-y-4">
            <p>このモーダルは完全なアクセシビリティ対応を実装しています。</p>
            
            <div>
              <label class="block text-sm font-medium text-neutral-700 mb-1">フォーカス可能な入力</label>
              <input
                type="text"
                placeholder="Tabキーでフォーカス移動をテスト"
                class="w-full px-3 py-2 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500"
              >
            </div>
            
            <div>
              <label class="block text-sm font-medium text-neutral-700 mb-1">選択肢</label>
              <select class="w-full px-3 py-2 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500">
                <option>オプション1</option>
                <option>オプション2</option>
                <option>オプション3</option>
              </select>
            </div>
            
            <div class="flex gap-2">
              <button class="px-3 py-1 bg-neutral-200 text-neutral-700 rounded hover:bg-neutral-300 transition-colors">
                ボタン1
              </button>
              <button class="px-3 py-1 bg-neutral-200 text-neutral-700 rounded hover:bg-neutral-300 transition-colors">
                ボタン2
              </button>
            </div>
            
            <p class="text-sm text-neutral-600">
              Tabキーを押して要素間を移動し、Shift+Tabで逆方向に移動できます。
              ESCキーでモーダルを閉じることができます。
            </p>
          </div>
          
          <template #footer>
            <button
              @click="showA11yModal = false"
              class="px-4 py-2 bg-neutral-500 text-white rounded-lg hover:bg-neutral-600 transition-colors"
            >
              閉じる
            </button>
          </template>
        </BaseModal>
      </div>
    `
  }),
  parameters: {
    docs: {
      description: {
        story: 'アクセシビリティ機能のデモ。フォーカストラップ、ARIA属性、キーボードナビゲーションを確認できます。'
      }
    }
  }
};