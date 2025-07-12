<template>
  <div class="space-y-8">
    <!-- ヘッダー -->
    <div class="flex items-center justify-between">
      <div>
        <h1 class="text-4xl font-bold text-neutral-900 dark:text-dark-800 mb-2">
          基本コンポーネント
        </h1>
        <p class="text-lg text-neutral-600 dark:text-dark-600">
          ボタン、インプット、アラート、バッジ、カードなどの基本的なUIコンポーネント
        </p>
      </div>
      <a href="/components" class="border border-neutral-300 dark:border-dark-400 hover:border-neutral-400 dark:hover:border-dark-500 text-neutral-700 dark:text-dark-700 font-medium py-2 px-4 rounded-md transition-colors inline-flex items-center">
        <svg class="h-4 w-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
          <path fill-rule="evenodd" d="M7.707 14.707a1 1 0 01-1.414 0L3 11.414V13a1 1 0 11-2 0V9a1 1 0 011-1h4a1 1 0 110 2H4.414l3.293 3.293a1 1 0 010 1.414z" clip-rule="evenodd" />
        </svg>
        一覧に戻る
      </a>
    </div>
    
    <!-- ボタン -->
    <section class="space-y-6">
      <div class="bg-white dark:bg-dark-200 rounded-lg border border-neutral-200 dark:border-dark-300 p-6">
        <h3 class="text-2xl font-semibold text-neutral-900 dark:text-dark-800 mb-4">ボタンバリアント</h3>
        <p class="text-sm text-neutral-600 dark:text-dark-600 mb-6">
          デジタル庁デザインシステムに準拠したボタンバリアント。用途に応じて適切なバリアントを選択してください。
        </p>
        <div class="space-y-4">
          <div class="flex flex-wrap items-center gap-4">
            <button class="bg-primary-500 hover:bg-primary-600 text-white font-medium py-2 px-4 rounded-md transition-colors">Primary</button>
            <button class="bg-secondary-500 hover:bg-secondary-600 text-white font-medium py-2 px-4 rounded-md transition-colors">Secondary</button>
            <button class="bg-success-500 hover:bg-success-600 text-white font-medium py-2 px-4 rounded-md transition-colors">Success</button>
            <button class="bg-warning-500 hover:bg-warning-600 text-white font-medium py-2 px-4 rounded-md transition-colors">Warning</button>
            <button class="bg-error-500 hover:bg-error-600 text-white font-medium py-2 px-4 rounded-md transition-colors">Error</button>
            <button class="border border-neutral-300 dark:border-dark-400 hover:border-neutral-400 dark:hover:border-dark-500 text-neutral-700 dark:text-dark-700 font-medium py-2 px-4 rounded-md transition-colors">Outline</button>
            <button class="text-neutral-700 dark:text-dark-700 hover:text-neutral-900 dark:hover:text-dark-800 font-medium py-2 px-4 rounded-md transition-colors">Ghost</button>
          </div>
          <div class="text-sm text-neutral-600 dark:text-dark-600">
            <strong>Primary:</strong> メインアクション（最も目立つ） | 
            <strong>Secondary:</strong> セカンダリアクション | 
            <strong>Outline:</strong> 低優先度アクション | 
            <strong>Ghost:</strong> 最も控えめなアクション
          </div>
        </div>
      </div>
      
      <div class="bg-white dark:bg-dark-200 rounded-lg border border-neutral-200 dark:border-dark-300 p-6">
        <h3 class="text-2xl font-semibold text-neutral-900 dark:text-dark-800 mb-4">ボタンサイズ</h3>
        <p class="text-sm text-neutral-600 dark:text-dark-600 mb-6">
          5つのサイズが用意されており、コンテキストに応じて適切なサイズを選択できます。
        </p>
        <div class="space-y-4">
          <div class="flex flex-wrap items-center gap-4">
            <button class="bg-primary-500 hover:bg-primary-600 text-white font-medium py-1 px-2 rounded text-xs transition-colors">Extra Small</button>
            <button class="bg-primary-500 hover:bg-primary-600 text-white font-medium py-1.5 px-3 rounded-md text-sm transition-colors">Small</button>
            <button class="bg-primary-500 hover:bg-primary-600 text-white font-medium py-2 px-4 rounded-md transition-colors">Medium</button>
            <button class="bg-primary-500 hover:bg-primary-600 text-white font-medium py-3 px-6 rounded-md text-lg transition-colors">Large</button>
            <button class="bg-primary-500 hover:bg-primary-600 text-white font-medium py-4 px-8 rounded-lg text-xl transition-colors">Extra Large</button>
          </div>
          <div class="text-sm text-neutral-600 dark:text-dark-600">
            <strong>xs:</strong> 表内のアクション | 
            <strong>sm:</strong> サブアクション | 
            <strong>md:</strong> 標準 | 
            <strong>lg:</strong> 重要なアクション | 
            <strong>xl:</strong> ヒーローセクション
          </div>
        </div>
      </div>
      
      <div class="bg-white dark:bg-dark-200 rounded-lg border border-neutral-200 dark:border-dark-300 p-6">
        <h3 class="text-2xl font-semibold text-neutral-900 dark:text-dark-800 mb-4">ボタン状態</h3>
        <div class="space-y-4">
          <div class="flex flex-wrap items-center gap-4">
            <button class="bg-primary-500 hover:bg-primary-600 text-white font-medium py-2 px-4 rounded-md transition-colors">Normal</button>
            <button class="bg-primary-500 text-white font-medium py-2 px-4 rounded-md flex items-center" disabled>
              <svg class="animate-spin -ml-1 mr-3 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Loading
            </button>
            <button class="bg-neutral-300 dark:bg-dark-300 text-neutral-500 dark:text-dark-500 font-medium py-2 px-4 rounded-md cursor-not-allowed" disabled>Disabled</button>
            <button class="bg-primary-500 hover:bg-primary-600 text-white font-medium py-2 px-4 rounded-md transition-colors w-full">Full Width</button>
          </div>
        </div>
      </div>
    </section>
    
    <!-- インプット -->
    <section class="space-y-6">
      <div class="bg-white dark:bg-dark-200 rounded-lg border border-neutral-200 dark:border-dark-300 p-6">
        <h3 class="text-2xl font-semibold text-neutral-900 dark:text-dark-800 mb-4">テキストインプット</h3>
        <div class="space-y-4 max-w-md">
          <div>
            <label class="block text-sm font-medium text-neutral-700 dark:text-dark-700 mb-2">ラベル</label>
            <input type="text" placeholder="プレースホルダーテキスト" class="w-full px-3 py-2 border border-neutral-300 dark:border-dark-400 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-primary-500 dark:bg-dark-100 dark:text-dark-800" />
          </div>
          <div>
            <label class="block text-sm font-medium text-neutral-700 dark:text-dark-700 mb-2">メールアドレス</label>
            <input type="email" placeholder="example@domain.com" class="w-full px-3 py-2 border border-neutral-300 dark:border-dark-400 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-primary-500 dark:bg-dark-100 dark:text-dark-800" />
            <p class="text-xs text-neutral-500 dark:text-dark-500 mt-1">有効なメールアドレスを入力してください</p>
          </div>
          <div>
            <label class="block text-sm font-medium text-neutral-700 dark:text-dark-700 mb-2">パスワード</label>
            <input type="password" placeholder="パスワードを入力" class="w-full px-3 py-2 border border-neutral-300 dark:border-dark-400 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-primary-500 dark:bg-dark-100 dark:text-dark-800" />
          </div>
          <div>
            <label class="block text-sm font-medium text-neutral-700 dark:text-dark-700 mb-2">無効化</label>
            <input type="text" placeholder="無効化されています" value="無効化された値" class="w-full px-3 py-2 border border-neutral-200 dark:border-dark-300 rounded-md bg-neutral-50 dark:bg-dark-300 text-neutral-500 dark:text-dark-500 cursor-not-allowed" disabled />
          </div>
          <div>
            <label class="block text-sm font-medium text-neutral-700 dark:text-dark-700 mb-2">エラー例</label>
            <input type="text" placeholder="エラー状態" class="w-full px-3 py-2 border border-error-300 dark:border-error-400 rounded-md focus:ring-2 focus:ring-error-500 focus:border-error-500 dark:bg-dark-100 dark:text-dark-800" />
            <p class="text-xs text-error-600 dark:text-error-400 mt-1">このフィールドは必須です</p>
          </div>
        </div>
      </div>
      
      <div class="bg-white dark:bg-dark-200 rounded-lg border border-neutral-200 dark:border-dark-300 p-6">
        <h3 class="text-2xl font-semibold text-neutral-900 dark:text-dark-800 mb-4">テキストエリア</h3>
        <div class="max-w-md">
          <label class="block text-sm font-medium text-neutral-700 dark:text-dark-700 mb-2">メッセージ</label>
          <textarea rows="4" placeholder="こちらにメッセージを入力してください..." class="w-full px-3 py-2 border border-neutral-300 dark:border-dark-400 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-primary-500 dark:bg-dark-100 dark:text-dark-800"></textarea>
          <p class="text-xs text-neutral-500 dark:text-dark-500 mt-1">0 / 500</p>
        </div>
      </div>
    </section>
    
    <!-- アラート -->
    <section class="space-y-6">
      <div class="bg-white dark:bg-dark-200 rounded-lg border border-neutral-200 dark:border-dark-300 p-6">
        <h3 class="text-2xl font-semibold text-neutral-900 dark:text-dark-800 mb-4">アラート</h3>
        <div class="space-y-4">
          <div class="bg-info-50 border border-info-200 rounded-lg p-4">
            <div class="flex items-start">
              <svg class="w-5 h-5 text-info-600 mt-0.5 mr-3" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd" />
              </svg>
              <div>
                <h4 class="font-medium text-info-900">情報</h4>
                <p class="text-sm text-info-700 mt-1">これは情報アラートのサンプルです。重要な情報をユーザーに伝えるために使用します。</p>
              </div>
            </div>
          </div>
          <div class="bg-success-50 border border-success-200 rounded-lg p-4">
            <div class="flex items-start">
              <svg class="w-5 h-5 text-success-600 mt-0.5 mr-3" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
              </svg>
              <div>
                <h4 class="font-medium text-success-900">成功</h4>
                <p class="text-sm text-success-700 mt-1">操作が正常に完了しました。このメッセージはユーザーに成功を知らせます。</p>
              </div>
            </div>
          </div>
          <div class="bg-warning-50 border border-warning-200 rounded-lg p-4">
            <div class="flex items-start">
              <svg class="w-5 h-5 text-warning-600 mt-0.5 mr-3" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clip-rule="evenodd" />
              </svg>
              <div>
                <h4 class="font-medium text-warning-900">警告</h4>
                <p class="text-sm text-warning-700 mt-1">この操作には注意が必要です。続行する前に内容をご確認ください。</p>
              </div>
            </div>
          </div>
          <div class="bg-error-50 border border-error-200 rounded-lg p-4">
            <div class="flex items-start">
              <svg class="w-5 h-5 text-error-600 mt-0.5 mr-3" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clip-rule="evenodd" />
              </svg>
              <div>
                <h4 class="font-medium text-error-900">エラー</h4>
                <p class="text-sm text-error-700 mt-1">エラーが発生しました。再度お試しいただくか、サポートにお問い合わせください。</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    
    <!-- バッジ -->
    <section class="space-y-6">
      <div class="bg-white dark:bg-dark-200 rounded-lg border border-neutral-200 dark:border-dark-300 p-6">
        <h3 class="text-2xl font-semibold text-neutral-900 dark:text-dark-800 mb-4">バッジバリアント</h3>
        <div class="flex flex-wrap gap-2 mb-4">
          <span class="bg-neutral-100 text-neutral-800 text-sm font-medium py-1 px-3 rounded-full">Default</span>
          <span class="bg-primary-100 text-primary-800 text-sm font-medium py-1 px-3 rounded-full">Primary</span>
          <span class="bg-success-100 text-success-800 text-sm font-medium py-1 px-3 rounded-full">Success</span>
          <span class="bg-warning-100 text-warning-800 text-sm font-medium py-1 px-3 rounded-full">Warning</span>
          <span class="bg-error-100 text-error-800 text-sm font-medium py-1 px-3 rounded-full">Error</span>
          <span class="bg-info-100 text-info-800 text-sm font-medium py-1 px-3 rounded-full">Info</span>
          <span class="bg-neutral-100 text-neutral-800 text-sm font-medium py-1 px-3 rounded-full">Neutral</span>
        </div>
        
        <h4 class="text-base font-medium text-neutral-900 dark:text-dark-800 mb-3">スタイルバリエーション</h4>
        <div class="space-y-3">
          <div>
            <span class="text-sm font-medium text-neutral-700 dark:text-dark-700 block mb-2">フィルド（デフォルト）</span>
            <div class="flex flex-wrap gap-2">
              <span class="bg-primary-500 text-white text-sm font-medium py-1 px-3 rounded-full">Filled</span>
              <span class="bg-success-500 text-white text-sm font-medium py-1 px-3 rounded-full">Filled</span>
              <span class="bg-warning-500 text-white text-sm font-medium py-1 px-3 rounded-full">Filled</span>
            </div>
          </div>
          <div>
            <span class="text-sm font-medium text-neutral-700 dark:text-dark-700 block mb-2">アウトライン</span>
            <div class="flex flex-wrap gap-2">
              <span class="border border-primary-300 text-primary-700 text-sm font-medium py-1 px-3 rounded-full">Outline</span>
              <span class="border border-success-300 text-success-700 text-sm font-medium py-1 px-3 rounded-full">Outline</span>
              <span class="border border-warning-300 text-warning-700 text-sm font-medium py-1 px-3 rounded-full">Outline</span>
            </div>
          </div>
          <div>
            <span class="text-sm font-medium text-neutral-700 dark:text-dark-700 block mb-2">ソフト</span>
            <div class="flex flex-wrap gap-2">
              <span class="bg-primary-100 text-primary-800 text-sm font-medium py-1 px-3 rounded-full">Soft</span>
              <span class="bg-success-100 text-success-800 text-sm font-medium py-1 px-3 rounded-full">Soft</span>
              <span class="bg-warning-100 text-warning-800 text-sm font-medium py-1 px-3 rounded-full">Soft</span>
            </div>
          </div>
        </div>
      </div>
    </section>
    
    <!-- カード -->
    <section class="space-y-6">
      <div class="bg-white dark:bg-dark-200 rounded-lg border border-neutral-200 dark:border-dark-300 p-6">
        <h3 class="text-2xl font-semibold text-neutral-900 dark:text-dark-800 mb-4">カード</h3>
        
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div class="bg-white rounded-lg border border-neutral-200 p-4">
            <h4 class="text-xl font-semibold text-neutral-900 dark:text-dark-800 mb-2">基本カード</h4>
            <p class="text-neutral-600 dark:text-dark-600">
              これは基本的なカードコンポーネントです。コンテンツをグループ化し、視覚的に分離するために使用します。
            </p>
          </div>
          
          <div class="bg-white rounded-lg border border-neutral-200 p-4 hover:shadow-md transition-shadow">
            <div class="flex items-center justify-between mb-3">
              <h4 class="text-xl font-semibold text-neutral-900 dark:text-dark-800">ホバー効果付き</h4>
              <span class="bg-success-100 text-success-800 text-xs font-medium py-1 px-2 rounded-full">New</span>
            </div>
            <p class="text-neutral-600 mb-4">
              マウスホバー時にエレベーション効果が適用されます。
            </p>
            <button class="bg-primary-500 hover:bg-primary-600 text-white font-medium py-1.5 px-3 rounded-md text-sm transition-colors">詳細を見る</button>
          </div>
        </div>
      </div>
    </section>
    
    <!-- フォーム例 -->
    <section class="space-y-6">
      <div class="bg-white dark:bg-dark-200 rounded-lg border border-neutral-200 dark:border-dark-300 p-6">
        <h3 class="text-2xl font-semibold text-neutral-900 dark:text-dark-800 mb-4">サンプルフォーム</h3>
        <form class="space-y-4 max-w-md">
          <div>
            <label class="block text-sm font-medium text-neutral-700 dark:text-dark-700 mb-2">名前</label>
            <input type="text" placeholder="お名前を入力してください" class="w-full px-3 py-2 border border-neutral-300 dark:border-dark-400 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-primary-500 dark:bg-dark-100 dark:text-dark-800" required />
          </div>
          <div>
            <label class="block text-sm font-medium text-neutral-700 dark:text-dark-700 mb-2">メールアドレス</label>
            <input type="email" placeholder="example@domain.com" class="w-full px-3 py-2 border border-neutral-300 dark:border-dark-400 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-primary-500 dark:bg-dark-100 dark:text-dark-800" required />
          </div>
          <div>
            <label class="block text-sm font-medium text-neutral-700 dark:text-dark-700 mb-2">メッセージ</label>
            <textarea rows="3" placeholder="メッセージを入力してください" class="w-full px-3 py-2 border border-neutral-300 dark:border-dark-400 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-primary-500 dark:bg-dark-100 dark:text-dark-800"></textarea>
          </div>
          <div class="flex gap-3">
            <button type="button" class="border border-neutral-300 dark:border-dark-400 hover:border-neutral-400 dark:hover:border-dark-500 text-neutral-700 dark:text-dark-700 font-medium py-2 px-4 rounded-md transition-colors">キャンセル</button>
            <button type="submit" class="bg-primary-500 hover:bg-primary-600 text-white font-medium py-2 px-4 rounded-md transition-colors">送信</button>
          </div>
        </form>
      </div>
    </section>
  </div>
</template>

<script setup>
// Pure HTML/CSS implementation - no custom components
</script>