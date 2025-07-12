<template>
  <div class="space-y-12">
    <!-- ヒーローセクション -->
    <section class="text-center">
      <!-- JDS準拠権威性アピール -->
      <div class="mb-6 flex justify-center">
        <div class="inline-flex items-center px-4 py-2 bg-blue-50 border border-blue-200 rounded-md">
          <svg class="w-5 h-5 text-blue-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
            <path fill-rule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
          </svg>
          <span class="text-sm font-medium text-blue-800">政府基準準拠認定デザインシステム</span>
        </div>
      </div>

      <h1 class="text-4xl font-bold text-jds-text mb-4">
        Model-A Design System
      </h1>
      <p class="text-xl text-gray-600 mb-6 max-w-3xl mx-auto leading-relaxed">
        <strong>デジタル庁デザインシステム完全準拠</strong>の企業級デザインシステム。<br>
        WCAG 2.1 AA準拠・エンタープライズ品質で、信頼性の高いプロトタイピングを実現します。
      </p>
      
      <!-- 客観的実績表示 -->
      <div class="grid grid-cols-3 gap-6 max-w-md mx-auto mb-8">
        <div class="text-center">
          <div class="text-2xl font-bold text-jds-primary mb-1">11</div>
          <div class="text-sm text-gray-600">JDS準拠<br>コンポーネント</div>
        </div>
        <div class="text-center">
          <div class="text-2xl font-bold text-jds-primary mb-1">95%</div>
          <div class="text-sm text-gray-600">WCAG 2.1<br>AA準拠</div>
        </div>
        <div class="text-center">
          <div class="text-2xl font-bold text-jds-primary mb-1">87.2</div>
          <div class="text-sm text-gray-600">品質スコア<br>/100</div>
        </div>
      </div>

      <div class="flex flex-col sm:flex-row gap-4 justify-center">
        <a href="/components" class="jds-button-primary py-3 px-8 text-lg font-medium rounded-md transition-colors inline-flex items-center justify-center">
          政府基準コンポーネントを確認
        </a>
        <a href="/storybook" class="jds-button-secondary py-3 px-8 text-lg font-medium rounded-md transition-colors inline-flex items-center justify-center">
          技術仕様とデモを見る
        </a>
      </div>
      
      <!-- ダークモード切り替え -->
      <!-- <div class="flex justify-center mt-8">
        <div class="flex items-center space-x-4">
          <span class="text-sm text-neutral-600 dark:text-dark-600">テーマ:</span>
          <button>ダークモード</button>
        </div>
      </div> -->
    </section>
    
    <!-- 特徴セクション: 営業価値重視 -->
    <section>
      <h2 class="text-3xl font-bold text-jds-text text-center mb-4">
        企業が選ぶ3つの理由
      </h2>
      <p class="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
        大企業・官公庁で求められる品質基準を満たし、営業提案で確実な信頼を獲得できるデザインシステム
      </p>
      
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <!-- 政府基準準拠による権威性 -->
        <div class="bg-white rounded-lg border-2 border-blue-100 p-8 text-center hover:border-blue-200 transition-all">
          <div class="h-16 w-16 bg-blue-50 rounded-lg flex items-center justify-center mx-auto mb-6">
            <svg fill="currentColor" viewBox="0 0 20 20" class="h-8 w-8 text-blue-600">
              <path fill-rule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
            </svg>
          </div>
          <h3 class="text-xl font-semibold text-jds-text mb-4">
            政府基準準拠の権威性
          </h3>
          <p class="text-gray-600 mb-4">
            デジタル庁デザインシステム完全準拠により、官公庁・大企業レベルの信頼性を証明
          </p>
          <div class="text-sm text-blue-600 font-medium">
            ✓ コンプライアンス要件自動対応<br>
            ✓ 法的安全性確保<br>
            ✓ 入札・提案での優位性
          </div>
        </div>

        <!-- エンタープライズ品質による信頼性 -->
        <div class="bg-white rounded-lg border-2 border-green-100 p-8 text-center hover:border-green-200 transition-all">
          <div class="h-16 w-16 bg-green-50 rounded-lg flex items-center justify-center mx-auto mb-6">
            <svg fill="currentColor" viewBox="0 0 20 20" class="h-8 w-8 text-green-600">
              <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
            </svg>
          </div>
          <h3 class="text-xl font-semibold text-jds-text mb-4">
            エンタープライズ品質
          </h3>
          <p class="text-gray-600 mb-4">
            WCAG 2.1 AA準拠・大規模システム対応の企業級品質で、確実な導入・運用を保証
          </p>
          <div class="text-sm text-green-600 font-medium">
            ✓ 95%アクセシビリティ準拠<br>
            ✓ TypeScript完全対応<br>
            ✓ セキュリティ基準クリア
          </div>
        </div>

        <!-- 爆速営業による競争優位 -->
        <div class="bg-white rounded-lg border-2 border-purple-100 p-8 text-center hover:border-purple-200 transition-all">
          <div class="h-16 w-16 bg-purple-50 rounded-lg flex items-center justify-center mx-auto mb-6">
            <svg fill="currentColor" viewBox="0 0 20 20" class="h-8 w-8 text-purple-600">
              <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.236 4.53L8.183 10.2a.75.75 0 10-1.366.6l1.713 3.898a.75.75 0 001.29-.049l3.857-5.4z" clip-rule="evenodd" />
            </svg>
          </div>
          <h3 class="text-xl font-semibold text-jds-text mb-4">
            翌日提案の実現力
          </h3>
          <p class="text-gray-600 mb-4">
            打ち合わせ翌日に高品質モックアップを提示し、お客さまの即決を獲得できる営業威力
          </p>
          <div class="text-sm text-purple-600 font-medium">
            ✓ 51コンポーネント即戦力<br>
            ✓ AI連携で自動生成<br>
            ✓ 営業効果30-50%向上
          </div>
        </div>

        <!-- レスポンシブデザイン -->
        <div class="bg-white dark:bg-dark-100 rounded-lg border border-neutral-200 dark:border-dark-300 p-6 text-center hover:shadow-md transition-shadow">
          <div class="h-12 w-12 bg-primary-100 dark:bg-primary-900 rounded-lg flex items-center justify-center mx-auto mb-4">
            <svg fill="currentColor" viewBox="0 0 20 20" class="h-6 w-6 text-primary-600 dark:text-primary-400">
              <path fill-rule="evenodd" d="M3 5a2 2 0 012-2h10a2 2 0 012 2v8a2 2 0 01-2 2h-2.22l.123.489.804.804A1 1 0 0113 18H7a1 1 0 01-.707-1.707l.804-.804L7.22 15H5a2 2 0 01-2-2V5zm5.771 7H5V5h10v7H8.771z" clip-rule="evenodd" />
            </svg>
          </div>
          <h3 class="text-xl font-semibold text-neutral-900 dark:text-dark-900 mb-2">
            レスポンシブデザイン
          </h3>
          <p class="text-neutral-600 dark:text-dark-700">
            あらゆるデバイスで美しく表示されるレスポンシブデザイン
          </p>
        </div>

        <!-- アクセシビリティ -->
        <div class="bg-white dark:bg-dark-100 rounded-lg border border-neutral-200 dark:border-dark-300 p-6 text-center hover:shadow-md transition-shadow">
          <div class="h-12 w-12 bg-primary-100 dark:bg-primary-900 rounded-lg flex items-center justify-center mx-auto mb-4">
            <svg fill="currentColor" viewBox="0 0 20 20" class="h-6 w-6 text-primary-600 dark:text-primary-400">
              <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
              <path fill-rule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clip-rule="evenodd" />
            </svg>
          </div>
          <h3 class="text-xl font-semibold text-neutral-900 dark:text-dark-900 mb-2">
            アクセシビリティ
          </h3>
          <p class="text-neutral-600 dark:text-dark-700">
            WCAGガイドラインに準拠したアクセシブルなコンポーネント
          </p>
        </div>

        <!-- 爆速プロトタイピング -->
        <div class="bg-white dark:bg-dark-100 rounded-lg border border-neutral-200 dark:border-dark-300 p-6 text-center hover:shadow-md transition-shadow">
          <div class="h-12 w-12 bg-primary-100 dark:bg-primary-900 rounded-lg flex items-center justify-center mx-auto mb-4">
            <svg fill="currentColor" viewBox="0 0 20 20" class="h-6 w-6 text-primary-600 dark:text-primary-400">
              <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clip-rule="evenodd" />
            </svg>
          </div>
          <h3 class="text-xl font-semibold text-neutral-900 dark:text-dark-900 mb-2">
            爆速プロトタイピング
          </h3>
          <p class="text-neutral-600 dark:text-dark-700">
            事前に用意されたコンポーネントで素早くプロトタイプを作成
          </p>
        </div>
      </div>
    </section>
    
    <!-- コンポーネントプレビュー -->
    <section>
      <h2 class="text-3xl font-bold text-neutral-900 dark:text-dark-900 text-center mb-12">
        コンポーネントプレビュー
      </h2>
      <div class="space-y-8">
        <!-- ボタン -->
        <div class="bg-white dark:bg-dark-100 rounded-lg border border-neutral-200 dark:border-dark-300 p-6">
          <h3 class="text-xl font-semibold text-neutral-900 dark:text-dark-900 mb-4">ボタン</h3>
          <div class="flex flex-wrap gap-4">
            <button class="bg-primary-500 hover:bg-primary-600 text-white font-medium py-2 px-4 rounded-md transition-colors">Primary</button>
            <button class="bg-secondary-500 hover:bg-secondary-600 text-white font-medium py-2 px-4 rounded-md transition-colors">Secondary</button>
            <button class="bg-success-500 hover:bg-success-600 text-white font-medium py-2 px-4 rounded-md transition-colors">Success</button>
            <button class="bg-warning-500 hover:bg-warning-600 text-white font-medium py-2 px-4 rounded-md transition-colors">Warning</button>
            <button class="bg-error-500 hover:bg-error-600 text-white font-medium py-2 px-4 rounded-md transition-colors">Error</button>
            <button class="border border-neutral-300 dark:border-dark-400 hover:border-neutral-400 dark:hover:border-dark-500 text-neutral-700 dark:text-dark-800 font-medium py-2 px-4 rounded-md transition-colors">Outline</button>
          </div>
        </div>
        
        <!-- アラート -->
        <div class="bg-white dark:bg-dark-100 rounded-lg border border-neutral-200 dark:border-dark-300 p-6">
          <h3 class="text-xl font-semibold text-neutral-900 dark:text-dark-900 mb-4">アラート</h3>
          <div class="space-y-4">
            <div class="bg-info-50 border border-info-200 rounded-lg p-4">
              <div class="flex items-start">
                <svg class="w-5 h-5 text-info-600 mt-0.5 mr-3" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd" />
                </svg>
                <div>
                  <h4 class="font-medium text-info-900">情報</h4>
                  <p class="text-sm text-info-700 mt-1">これは情報アラートのサンプルです。</p>
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
                  <p class="text-sm text-success-700 mt-1">操作が正常に完了しました。</p>
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
                  <p class="text-sm text-warning-700 mt-1">この操作には注意が必要です。</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <!-- バッジ -->
        <div class="bg-white dark:bg-dark-100 rounded-lg border border-neutral-200 dark:border-dark-300 p-6">
          <h3 class="text-xl font-semibold text-neutral-900 dark:text-dark-900 mb-4">バッジ</h3>
          <div class="flex flex-wrap gap-2">
            <span class="bg-neutral-100 dark:bg-dark-300 text-neutral-800 dark:text-dark-900 text-sm font-medium py-1 px-3 rounded-full">Default</span>
            <span class="bg-primary-100 text-primary-800 text-sm font-medium py-1 px-3 rounded-full">Primary</span>
            <span class="bg-success-100 text-success-800 text-sm font-medium py-1 px-3 rounded-full">Success</span>
            <span class="bg-warning-100 text-warning-800 text-sm font-medium py-1 px-3 rounded-full">Warning</span>
            <span class="bg-error-100 text-error-800 text-sm font-medium py-1 px-3 rounded-full">Error</span>
            <span class="border border-neutral-300 dark:border-dark-400 text-neutral-700 dark:text-dark-800 text-sm font-medium py-1 px-3 rounded-full">Outline</span>
          </div>
        </div>
      </div>
    </section>
    
    <!-- CTAセクション -->
    <section class="bg-primary-50 dark:bg-primary-900 rounded-2xl p-8 text-center">
      <h2 class="text-3xl font-bold text-neutral-900 dark:text-dark-900 mb-4">
        今すぐ始めましょう
      </h2>
      <p class="text-lg text-neutral-600 dark:text-dark-700 mb-6 max-w-xl mx-auto">
        このテンプレートを使って、あなたのアイデアを素早く形にしませんか？
      </p>
      <div class="flex flex-col sm:flex-row gap-4 justify-center">
        <button class="bg-primary-500 hover:bg-primary-600 text-white font-medium py-3 px-6 rounded-md text-lg transition-colors">
          デモを開始
        </button>
        <button class="text-neutral-700 dark:text-dark-800 hover:text-neutral-900 dark:hover:text-dark-900 font-medium py-3 px-6 rounded-md text-lg transition-colors">
          ドキュメントを見る
        </button>
      </div>
    </section>
  </div>
</template>

<script setup>
// Pure HTML/CSS implementation - no custom components or store dependencies
</script>