<template>
  <div class="min-h-screen bg-white">
    <!-- ヘッダー -->
    <header class="bg-white border-b border-gray-200">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between items-center py-4">
          <!-- ロゴ -->
          <div class="flex items-center">
            <div class="w-10 h-10 bg-blue-600 rounded flex items-center justify-center mr-3">
              <span class="text-white font-bold text-lg">デ</span>
            </div>
            <h1 class="text-xl font-bold text-gray-900">デジタル庁</h1>
          </div>
          
          <!-- ナビゲーション -->
          <nav class="hidden md:flex space-x-8">
            <a href="#" class="text-gray-700 hover:text-blue-600 font-medium">政策・制度</a>
            <a href="#" class="text-gray-700 hover:text-blue-600 font-medium">組織・体制</a>
            <a href="#" class="text-gray-700 hover:text-blue-600 font-medium">取組・事業</a>
            <a href="#" class="text-gray-700 hover:text-blue-600 font-medium">デジタル社会の実現</a>
          </nav>
          
          <!-- 検索・メニュー -->
          <div class="flex items-center space-x-4">
            <button class="text-gray-600 hover:text-gray-900">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
              </svg>
            </button>
            <button class="md:hidden text-gray-600 hover:text-gray-900">
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>

    <!-- メインコンテンツ -->
    <main>
      <!-- ヒーローセクション -->
      <section class="bg-gradient-to-b from-blue-50 to-white py-16">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="text-center">
            <h1 class="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              デジタル社会の実現に向けた<br>
              政府の司令塔機能
            </h1>
            <p class="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              誰一人取り残されない、人に優しいデジタル化を目指し、<br>
              国民や事業者のニーズに応える質の高いサービスの提供を推進します。
            </p>
            <div class="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#" class="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-8 rounded-md transition-colors inline-flex items-center justify-center">
                重要な取組を見る
              </a>
              <a href="#" class="border border-blue-600 text-blue-600 hover:bg-blue-50 font-medium py-3 px-8 rounded-md transition-colors inline-flex items-center justify-center">
                デジタル庁について
              </a>
            </div>
          </div>
        </div>
      </section>

      <!-- 重要なお知らせ -->
      <section class="py-12 bg-white">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 class="text-2xl font-bold text-gray-900 mb-8">重要なお知らせ</h2>
          <div class="space-y-4">
            <div class="border-l-4 border-red-500 bg-red-50 p-4">
              <div class="flex">
                <div class="flex-shrink-0">
                  <svg class="h-5 w-5 text-red-400" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clip-rule="evenodd" />
                  </svg>
                </div>
                <div class="ml-3">
                  <p class="text-sm text-red-700">
                    <span class="font-medium">緊急</span>
                    マイナンバーカード申請システムの一時停止について（2024年7月12日）
                  </p>
                </div>
              </div>
            </div>
            
            <div class="border border-gray-200 rounded-lg p-4 hover:bg-gray-50 transition-colors">
              <div class="flex justify-between items-start">
                <div>
                  <span class="inline-block bg-blue-100 text-blue-800 text-xs font-medium px-2 py-1 rounded mb-2">
                    新着
                  </span>
                  <h3 class="text-lg font-medium text-gray-900 mb-2">
                    デジタル原則に照らした規制の一括見直しプランの改定について
                  </h3>
                  <p class="text-gray-600 text-sm">
                    デジタル時代に適した規制へと見直すため、デジタル原則に照らした規制の一括見直しプランを改定しました。
                  </p>
                </div>
                <span class="text-sm text-gray-500 ml-4">2024.07.10</span>
              </div>
            </div>

            <div class="border border-gray-200 rounded-lg p-4 hover:bg-gray-50 transition-colors">
              <div class="flex justify-between items-start">
                <div>
                  <span class="inline-block bg-green-100 text-green-800 text-xs font-medium px-2 py-1 rounded mb-2">
                    制度
                  </span>
                  <h3 class="text-lg font-medium text-gray-900 mb-2">
                    地方公共団体DX推進計画の更新について
                  </h3>
                  <p class="text-gray-600 text-sm">
                    地方公共団体におけるDXの推進を図るため、地方公共団体DX推進計画を更新しました。
                  </p>
                </div>
                <span class="text-sm text-gray-500 ml-4">2024.07.08</span>
              </div>
            </div>
          </div>
          
          <div class="text-center mt-8">
            <a href="#" class="text-blue-600 hover:text-blue-700 font-medium">
              お知らせ一覧を見る →
            </a>
          </div>
        </div>
      </section>

      <!-- 主要な取組 -->
      <section class="py-12 bg-gray-50">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 class="text-2xl font-bold text-gray-900 mb-8">主要な取組</h2>
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div class="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow">
              <div class="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <svg class="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
              </div>
              <h3 class="text-lg font-semibold text-gray-900 mb-2">
                マイナンバーカード
              </h3>
              <p class="text-gray-600 text-sm mb-4">
                安全・便利なデジタル社会の基盤となるマイナンバーカードの普及促進
              </p>
              <a href="#" class="text-blue-600 hover:text-blue-700 text-sm font-medium">
                詳細を見る →
              </a>
            </div>

            <div class="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow">
              <div class="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                <svg class="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path>
                </svg>
              </div>
              <h3 class="text-lg font-semibold text-gray-900 mb-2">
                行政のデジタル化
              </h3>
              <p class="text-gray-600 text-sm mb-4">
                国民の利便性向上と行政運営の効率化を目指した各種手続きのデジタル化
              </p>
              <a href="#" class="text-blue-600 hover:text-blue-700 text-sm font-medium">
                詳細を見る →
              </a>
            </div>

            <div class="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow">
              <div class="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                <svg class="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path>
                </svg>
              </div>
              <h3 class="text-lg font-semibold text-gray-900 mb-2">
                デジタル人材の育成
              </h3>
              <p class="text-gray-600 text-sm mb-4">
                デジタル社会を支える人材の育成と国民のデジタルリテラシー向上
              </p>
              <a href="#" class="text-blue-600 hover:text-blue-700 text-sm font-medium">
                詳細を見る →
              </a>
            </div>
          </div>
        </div>
      </section>

      <!-- 統計・データ -->
      <section class="py-12 bg-white">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 class="text-2xl font-bold text-gray-900 mb-8">デジタル化の進捗</h2>
          <div class="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div class="text-center">
              <div class="text-3xl font-bold text-blue-600 mb-2">92.3%</div>
              <div class="text-sm text-gray-600">マイナンバーカード<br>交付率</div>
            </div>
            <div class="text-center">
              <div class="text-3xl font-bold text-green-600 mb-2">1,850</div>
              <div class="text-sm text-gray-600">デジタル化済み<br>手続き数</div>
            </div>
            <div class="text-center">
              <div class="text-3xl font-bold text-purple-600 mb-2">78%</div>
              <div class="text-sm text-gray-600">地方自治体<br>DX対応率</div>
            </div>
            <div class="text-center">
              <div class="text-3xl font-bold text-orange-600 mb-2">65万</div>
              <div class="text-sm text-gray-600">デジタル人材<br>育成数（累計）</div>
            </div>
          </div>
        </div>
      </section>
    </main>

    <!-- フッター -->
    <footer class="bg-gray-900 text-white py-12">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div class="flex items-center mb-4">
              <div class="w-8 h-8 bg-blue-600 rounded flex items-center justify-center mr-2">
                <span class="text-white font-bold text-sm">デ</span>
              </div>
              <span class="font-bold">デジタル庁</span>
            </div>
            <p class="text-gray-400 text-sm">
              誰一人取り残されない、人に優しいデジタル化を推進
            </p>
          </div>
          
          <div>
            <h3 class="font-semibold mb-4">政策・制度</h3>
            <ul class="space-y-2 text-sm text-gray-400">
              <li><a href="#" class="hover:text-white">デジタル社会形成基本法</a></li>
              <li><a href="#" class="hover:text-white">デジタル原則</a></li>
              <li><a href="#" class="hover:text-white">重点計画</a></li>
            </ul>
          </div>
          
          <div>
            <h3 class="font-semibold mb-4">組織・体制</h3>
            <ul class="space-y-2 text-sm text-gray-400">
              <li><a href="#" class="hover:text-white">組織概要</a></li>
              <li><a href="#" class="hover:text-white">幹部紹介</a></li>
              <li><a href="#" class="hover:text-white">採用情報</a></li>
            </ul>
          </div>
          
          <div>
            <h3 class="font-semibold mb-4">お問い合わせ</h3>
            <ul class="space-y-2 text-sm text-gray-400">
              <li><a href="#" class="hover:text-white">よくあるご質問</a></li>
              <li><a href="#" class="hover:text-white">お問い合わせフォーム</a></li>
              <li><a href="#" class="hover:text-white">報道・取材について</a></li>
            </ul>
          </div>
        </div>
        
        <div class="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p class="text-gray-400 text-sm">
            © 2024 Digital Agency. All rights reserved.
          </p>
          <div class="flex space-x-6 mt-4 md:mt-0">
            <a href="#" class="text-gray-400 hover:text-white text-sm">プライバシーポリシー</a>
            <a href="#" class="text-gray-400 hover:text-white text-sm">サイトマップ</a>
            <a href="#" class="text-gray-400 hover:text-white text-sm">アクセシビリティ</a>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup>
// デジタル庁サイトクローン - JDS準拠Model-Aコンポーネント検証用
// 政府系サイトの権威性・信頼性・アクセシビリティ要求への適合性を実証
</script>

<style scoped>
/* JDS準拠の政府系デザイン実装 */
.bg-gradient-to-b {
  background: linear-gradient(to bottom, #eff6ff, #ffffff);
}
</style>