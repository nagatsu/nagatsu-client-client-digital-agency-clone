<template>
  <div class="space-y-8">
    <!-- ヘッダー -->
    <div class="flex items-center justify-between">
      <div>
        <h1 class="text-heading-1 font-bold text-neutral-900 mb-2">
          レイアウトコンポーネント
        </h1>
        <p class="text-heading-6 text-neutral-600">
          ヘッダーコンテナ、検索ボックス、アコーディオンなどのレイアウト関連コンポーネント
        </p>
      </div>
      <BaseButton variant="outline" @click="$router.push('/components')">
        <svg class="h-4 w-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
          <path fill-rule="evenodd" d="M7.707 14.707a1 1 0 01-1.414 0L3 11.414V13a1 1 0 11-2 0V9a1 1 0 011-1h4a1 1 0 110 2H4.414l3.293 3.293a1 1 0 010 1.414z" clip-rule="evenodd" />
        </svg>
        一覧に戻る
      </BaseButton>
    </div>
    
    <!-- ヘッダーコンテナ -->
    <section class="space-y-6">
      <BaseCard>
        <div class="p-6">
          <h3 class="text-heading-4 font-semibold text-neutral-900 mb-4">ヘッダーコンテナ</h3>
          <p class="text-body-sm text-neutral-600 mb-6">
            柔軟なヘッダーレイアウトを提供するコンテナ。ロゴ、メニュー、ユーティリティリンクを統合できます。
          </p>
          <div class="space-y-6">
            <div>
              <h4 class="text-body-regular font-medium mb-3">基本ヘッダー例</h4>
              <div class="border-2 border-dashed border-neutral-300 p-4 rounded-lg bg-neutral-50">
                <div class="flex items-center justify-between">
                  <div class="flex items-center space-x-3">
                    <div class="w-8 h-8 bg-primary-500 rounded"></div>
                    <span class="text-heading-6 font-semibold">サンプルサイト</span>
                  </div>
                  <nav class="flex space-x-4">
                    <a href="#" class="text-neutral-700 hover:text-primary-500">ホーム</a>
                    <a href="#" class="text-neutral-700 hover:text-primary-500">サービス</a>
                    <a href="#" class="text-neutral-700 hover:text-primary-500">お問い合わせ</a>
                  </nav>
                </div>
              </div>
            </div>
            <div>
              <h4 class="text-body-regular font-medium mb-3">ユーティリティリンク付き</h4>
              <div class="border-2 border-dashed border-neutral-300 rounded-lg bg-neutral-50">
                <div class="border-b border-neutral-200 p-2">
                  <div class="flex justify-end space-x-3 text-body-sm">
                    <a href="#" class="text-neutral-600 hover:text-primary-500">お問合わせ</a>
                    <a href="#" class="text-neutral-600 hover:text-primary-500">ヘルプ</a>
                    <a href="#" class="text-neutral-600 hover:text-primary-500">プライバシーポリシー</a>
                  </div>
                </div>
                <div class="p-4">
                  <div class="flex items-center justify-between">
                    <div class="flex items-center space-x-3">
                      <div class="w-10 h-10 bg-primary-500 rounded"></div>
                      <span class="text-heading-5 font-semibold">政府系サービス</span>
                    </div>
                    <nav class="flex space-x-6">
                      <a href="#" class="text-neutral-700 hover:text-primary-500 font-medium">ホーム</a>
                      <a href="#" class="text-neutral-700 hover:text-primary-500 font-medium">申請・手続き</a>
                      <a href="#" class="text-neutral-700 hover:text-primary-500 font-medium">お知らせ</a>
                    </nav>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </BaseCard>
    </section>
    
    <!-- 検索ボックス -->
    <section class="space-y-6">
      <BaseCard>
        <div class="p-6">
          <h3 class="text-heading-4 font-semibold text-neutral-900 mb-4">検索ボックス</h3>
          <p class="text-body-sm text-neutral-600 mb-6">
            候補表示とショートカット機能を備えた高機能な検索ボックス。サイト内検索に最適です。
          </p>
          <div class="space-y-6">
            <div>
              <h4 class="text-body-regular font-medium mb-3">小サイズ</h4>
              <div class="max-w-sm">
                <BaseInput 
                  placeholder="検索..." 
                  size="sm"
                />
              </div>
            </div>
            <div>
              <h4 class="text-body-regular font-medium mb-3">標準サイズ</h4>
              <div class="max-w-md">
                <BaseInput 
                  placeholder="サイト内を検索..." 
                />
              </div>
            </div>
            <div>
              <h4 class="text-body-regular font-medium mb-3">大サイズ</h4>
              <div class="max-w-lg">
                <BaseInput 
                  placeholder="何をお探しですか？" 
                  size="lg"
                />
              </div>
            </div>
          </div>
        </div>
      </BaseCard>
    </section>
    
    <!-- アコーディオン -->
    <section class="space-y-6">
      <BaseCard>
        <div class="p-6">
          <h3 class="text-heading-4 font-semibold text-neutral-900 mb-4">アコーディオン</h3>
          <p class="text-body-sm text-neutral-600 mb-6">
            展開・折りたたみ可能なコンテンツセクション。FAQや詳細情報の表示に適しています。
          </p>
          <div class="space-y-4">
            <div class="border border-neutral-200 rounded-lg">
              <div class="p-4 border-b border-neutral-200 bg-neutral-50">
                <div class="flex items-center justify-between">
                  <h5 class="text-body-regular font-medium">よくある質問 1</h5>
                  <svg class="h-5 w-5 text-neutral-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
                  </svg>
                </div>
              </div>
              <div class="p-4">
                <p class="text-body-sm text-neutral-600">
                  これは最初の質問に対する回答です。詳細な説明がここに入ります。デジタル庁デザインシステムに準拠したスタイリングが適用されています。
                </p>
              </div>
            </div>
            
            <div class="border border-neutral-200 rounded-lg">
              <div class="p-4 bg-neutral-50">
                <div class="flex items-center justify-between">
                  <h5 class="text-body-regular font-medium">よくある質問 2</h5>
                  <svg class="h-5 w-5 text-neutral-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd" />
                  </svg>
                </div>
              </div>
            </div>
            
            <div class="border border-neutral-200 rounded-lg">
              <div class="p-4 bg-neutral-50">
                <div class="flex items-center justify-between">
                  <h5 class="text-body-regular font-medium">よくある質問 3</h5>
                  <svg class="h-5 w-5 text-neutral-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </BaseCard>
    </section>

    <!-- BaseFooter -->
    <section class="space-y-6">
      <BaseCard>
        <div class="p-6">
          <h3 class="text-heading-4 font-semibold text-neutral-900 mb-4">フッター</h3>
          <p class="text-body-sm text-neutral-600 mb-6">
            包括的なフッターシステム。3つのバリアント（デフォルト、ミニマル、リッチ）に対応。
          </p>
          
          <!-- デフォルトフッター -->
          <div class="mb-8">
            <h4 class="text-body-regular font-medium mb-3">デフォルトフッター</h4>
            <div class="border-2 border-dashed border-neutral-300 rounded-lg overflow-hidden">
              <BaseFooter />
            </div>
          </div>

          <!-- ミニマルフッター -->
          <div class="mb-8">
            <h4 class="text-body-regular font-medium mb-3">ミニマルフッター</h4>
            <div class="border-2 border-dashed border-neutral-300 rounded-lg overflow-hidden">
              <BaseFooter variant="minimal" />
            </div>
          </div>

          <!-- リッチフッター -->
          <div class="mb-8">
            <h4 class="text-body-regular font-medium mb-3">リッチフッター（企業サイト向け）</h4>
            <div class="border-2 border-dashed border-neutral-300 rounded-lg overflow-hidden">
              <BaseFooter 
                variant="rich"
                :brand-info="{
                  name: 'Nagatsu Corporation',
                  logo: '🏢',
                  description: '次世代デザインシステムプラットフォームを提供'
                }"
                :menu-sections="[
                  {
                    title: 'サービス',
                    items: [
                      { label: 'デザインシステム', href: '#' },
                      { label: 'コンポーネント', href: '#' },
                      { label: 'API', href: '#' }
                    ]
                  },
                  {
                    title: '会社情報',
                    items: [
                      { label: '会社概要', href: '#' },
                      { label: '採用情報', href: '#' },
                      { label: 'ニュース', href: '#' }
                    ]
                  }
                ]"
                :contact-info="{
                  address: '東京都渋谷区xxx-x-x',
                  phone: '03-1234-5678',
                  email: 'contact@nagatsu.dev'
                }"
                :social-links="[
                  { type: 'twitter', url: '#' },
                  { type: 'github', url: '#' },
                  { type: 'linkedin', url: '#' }
                ]"
              />
            </div>
          </div>
        </div>
      </BaseCard>
    </section>
  </div>
</template>

<script setup>
import BaseButton from '@/components/base/BaseButton.vue'
import BaseCard from '@/components/base/BaseCard.vue'
import BaseFooter from '@/components/base/BaseFooter.vue'
import BaseInput from '@/components/base/BaseInput.vue'
</script>