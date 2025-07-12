<template>
  <div class="space-y-8">
    <!-- ページヘッダー -->
    <div class="text-center">
      <h1 class="text-3xl font-bold text-neutral-900 dark:text-dark-900 mb-4">
        ECサイト向けコンポーネント
      </h1>
      <p class="text-lg text-neutral-600 dark:text-dark-700 max-w-3xl mx-auto">
        オンラインショップ構築に特化したコンポーネントライブラリです。
        商品表示、価格管理、評価システムなど、ECサイトに必要な機能を提供します。
      </p>
    </div>

    <!-- 目次 -->
    <div class="bg-white dark:bg-dark-100 rounded-lg shadow-md p-6">
      <h2 class="text-2xl font-semibold text-neutral-900 dark:text-dark-900 mb-4">
        コンポーネント一覧
      </h2>
      <div class="grid grid-cols-1 md:grid-cols-4 gap-4">
        <button
          class="flex items-center justify-start px-4 py-2 border border-neutral-300 dark:border-dark-400 text-neutral-700 dark:text-dark-800 rounded-md hover:bg-neutral-50 dark:hover:bg-dark-200 transition-colors"
          onclick="document.getElementById('rating-stars').scrollIntoView({behavior: 'smooth'})"
        >
          <span class="mr-2">⭐</span>
          RatingStars
        </button>
        <button
          class="flex items-center justify-start px-4 py-2 border border-neutral-300 dark:border-dark-400 text-neutral-700 dark:text-dark-800 rounded-md hover:bg-neutral-50 dark:hover:bg-dark-200 transition-colors"
          onclick="document.getElementById('price-display').scrollIntoView({behavior: 'smooth'})"
        >
          <span class="mr-2">💰</span>
          PriceDisplay
        </button>
        <button
          class="flex items-center justify-start px-4 py-2 border border-neutral-300 dark:border-dark-400 text-neutral-700 dark:text-dark-800 rounded-md hover:bg-neutral-50 dark:hover:bg-dark-200 transition-colors"
          onclick="document.getElementById('product-card').scrollIntoView({behavior: 'smooth'})"
        >
          <span class="mr-2">🛍️</span>
          ProductCard
        </button>
        <button
          class="flex items-center justify-start px-4 py-2 border border-neutral-300 dark:border-dark-400 text-neutral-700 dark:text-dark-800 rounded-md hover:bg-neutral-50 dark:hover:bg-dark-200 transition-colors"
          onclick="document.getElementById('article-card').scrollIntoView({behavior: 'smooth'})"
        >
          <span class="mr-2">📄</span>
          ArticleCard
        </button>
      </div>
    </div>

    <!-- RatingStars コンポーネント -->
    <div id="rating-stars">
      <div class="bg-white dark:bg-dark-100 rounded-lg shadow-md p-6">
        <div class="flex items-center justify-between mb-4">
          <h2 class="text-2xl font-semibold text-neutral-900 dark:text-dark-900">
            RatingStars
          </h2>
          <span class="bg-warning-100 text-warning-700 px-3 py-1 rounded-full text-sm font-medium">評価</span>
        </div>
        <p class="text-neutral-600 dark:text-dark-700 mb-6">
          星による評価表示・入力コンポーネント。表示モードとインタラクティブモードに対応。
        </p>

        <div class="space-y-6">
          <!-- 表示モード -->
          <div>
            <h3 class="text-xl font-medium text-neutral-900 dark:text-dark-900 mb-3">表示モード</h3>
            <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
              <div class="p-4 border border-neutral-200 dark:border-dark-300 rounded-lg">
                <p class="text-sm font-medium text-neutral-700 dark:text-dark-800 mb-2">基本表示</p>
                <div class="flex items-center space-x-1">
                  <div class="flex">
                    <span class="text-yellow-400">★★★★</span><span class="text-yellow-400">☆</span>
                  </div>
                  <span class="text-sm text-neutral-600 dark:text-dark-700 ml-2">4.5 (127件)</span>
                </div>
              </div>
              <div class="p-4 border border-neutral-200 dark:border-dark-300 rounded-lg">
                <p class="text-sm font-medium text-neutral-700 dark:text-dark-800 mb-2">数値表示付き</p>
                <div class="flex items-center space-x-1">
                  <div class="flex">
                    <span class="text-yellow-400">★★★</span><span class="text-yellow-400">☆☆</span>
                  </div>
                  <span class="text-sm text-neutral-600 dark:text-dark-700 ml-2">3.8 (45件)</span>
                </div>
              </div>
              <div class="p-4 border border-neutral-200 dark:border-dark-300 rounded-lg">
                <p class="text-sm font-medium text-neutral-700 dark:text-dark-800 mb-2">大きなサイズ</p>
                <div class="flex items-center space-x-1">
                  <div class="flex text-lg">
                    <span class="text-yellow-400">★★★★★</span>
                  </div>
                  <span class="text-sm text-neutral-600 dark:text-dark-700 ml-2">5.0 (892件)</span>
                </div>
              </div>
            </div>
          </div>

          <!-- インタラクティブモード -->
          <div>
            <h3 class="text-xl font-medium text-neutral-900 dark:text-dark-900 mb-3">インタラクティブモード</h3>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div class="p-4 border border-neutral-200 dark:border-dark-300 rounded-lg">
                <p class="text-sm font-medium text-neutral-700 dark:text-dark-800 mb-2">評価入力</p>
                <div class="flex items-center space-x-1">
                  <div class="flex cursor-pointer">
                    <span class="text-yellow-400 hover:text-yellow-500">★★★</span><span class="text-gray-300 hover:text-yellow-400">☆☆</span>
                  </div>
                  <span class="text-sm text-neutral-600 dark:text-dark-700 ml-2">3.0</span>
                </div>
                <p class="text-xs text-neutral-500 dark:text-dark-600 mt-2">現在の評価: 3.0</p>
              </div>
              <div class="p-4 border border-neutral-200 dark:border-dark-300 rounded-lg">
                <p class="text-sm font-medium text-neutral-700 dark:text-dark-800 mb-2">ラベル付き</p>
                <div class="flex items-center space-x-1">
                  <div class="flex cursor-pointer">
                    <span class="text-yellow-400 hover:text-yellow-500">★★★★</span><span class="text-gray-300 hover:text-yellow-400">☆</span>
                  </div>
                  <span class="text-sm text-neutral-600 dark:text-dark-700 ml-2">良い</span>
                </div>
                <p class="text-xs text-neutral-500 dark:text-dark-600 mt-2">現在の評価: 4.0</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- PriceDisplay コンポーネント -->
    <div id="price-display">
      <div class="bg-white dark:bg-dark-100 rounded-lg shadow-md p-6">
        <div class="flex items-center justify-between mb-4">
          <h2 class="text-2xl font-semibold text-neutral-900 dark:text-dark-900">
            PriceDisplay
          </h2>
          <span class="bg-primary-100 text-primary-700 px-3 py-1 rounded-full text-sm font-medium">価格表示</span>
        </div>
        <p class="text-neutral-600 dark:text-dark-700 mb-6">
          価格表示に特化したコンポーネント。割引、税込み、送料、ポイントなど包括的な価格情報を提供。
        </p>

        <div class="space-y-6">
          <!-- 基本価格表示 -->
          <div>
            <h3 class="text-xl font-medium text-neutral-900 dark:text-dark-900 mb-3">基本価格表示</h3>
            <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
              <div class="p-4 border border-neutral-200 dark:border-dark-300 rounded-lg">
                <p class="text-sm font-medium text-neutral-700 dark:text-dark-800 mb-2">通常価格</p>
                <div class="text-2xl font-bold text-neutral-900 dark:text-dark-900">¥2,980</div>
              </div>
              <div class="p-4 border border-neutral-200 dark:border-dark-300 rounded-lg">
                <p class="text-sm font-medium text-neutral-700 dark:text-dark-800 mb-2">セール価格</p>
                <div class="flex items-center space-x-2">
                  <span class="text-2xl font-bold text-error-600">¥1,980</span>
                  <span class="text-sm text-neutral-500 dark:text-dark-600 line-through">¥2,980</span>
                  <span class="bg-error-100 text-error-700 px-2 py-1 rounded text-xs font-medium">33% OFF</span>
                </div>
              </div>
              <div class="p-4 border border-neutral-200 dark:border-dark-300 rounded-lg">
                <p class="text-sm font-medium text-neutral-700 dark:text-dark-800 mb-2">高額商品</p>
                <div class="text-3xl font-bold text-primary-600">¥89,800</div>
              </div>
            </div>
          </div>

          <!-- 詳細情報付き表示 -->
          <div>
            <h3 class="text-xl font-medium text-neutral-900 dark:text-dark-900 mb-3">詳細情報付き</h3>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div class="p-4 border border-neutral-200 dark:border-dark-300 rounded-lg">
                <p class="text-sm font-medium text-neutral-700 dark:text-dark-800 mb-2">税込み・送料込み</p>
                <div class="text-2xl font-bold text-neutral-900 dark:text-dark-900 mb-2">¥3,200</div>
                <div class="space-y-1 text-sm text-neutral-600 dark:text-dark-700">
                  <div>税込み価格</div>
                  <div class="text-success-600">送料無料</div>
                </div>
              </div>
              <div class="p-4 border border-neutral-200 dark:border-dark-300 rounded-lg">
                <p class="text-sm font-medium text-neutral-700 dark:text-dark-800 mb-2">ポイント表示</p>
                <div class="text-2xl font-bold text-neutral-900 dark:text-dark-900 mb-2">¥4,980</div>
                <div class="text-sm text-warning-600">
                  249ポイント獲得 (5%)
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- ProductCard コンポーネント -->
    <div id="product-card">
      <div class="bg-white dark:bg-dark-100 rounded-lg shadow-md p-6">
        <div class="flex items-center justify-between mb-4">
          <h2 class="text-2xl font-semibold text-neutral-900 dark:text-dark-900">
            ProductCard
          </h2>
          <span class="bg-success-100 text-success-700 px-3 py-1 rounded-full text-sm font-medium">商品カード</span>
        </div>
        <p class="text-neutral-600 dark:text-dark-700 mb-6">
          ECサイトの商品表示に特化したカードコンポーネント。画像、価格、評価、カート機能を統合。
        </p>

        <div class="space-y-6">
          <!-- 基本的な商品カード -->
          <div>
            <h3 class="text-xl font-medium text-neutral-900 dark:text-dark-900 mb-3">基本的な商品カード</h3>
            <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
              <!-- 商品カード 1 -->
              <div class="border border-neutral-200 dark:border-dark-300 rounded-lg overflow-hidden hover:shadow-md transition-shadow">
                <img src="https://picsum.photos/300/300?random=1" alt="商品1" class="w-full h-48 object-cover" />
                <div class="p-4">
                  <div class="flex items-center space-x-2 mb-2">
                    <span class="bg-error-100 text-error-700 px-2 py-1 rounded text-xs font-medium">NEW</span>
                    <span class="bg-warning-100 text-warning-700 px-2 py-1 rounded text-xs font-medium">SALE</span>
                  </div>
                  <h3 class="font-semibold text-neutral-900 dark:text-dark-900 mb-2">プレミアムコーヒー豆</h3>
                  <p class="text-sm text-neutral-600 dark:text-dark-700 mb-3">厳選されたアラビカ種100%使用。深煎りで芳醇な香り。</p>
                  <div class="flex items-center space-x-1 mb-2">
                    <span class="text-yellow-400">★★★★</span><span class="text-yellow-400">☆</span>
                    <span class="text-sm text-neutral-600 dark:text-dark-700 ml-1">4.5 (127)</span>
                  </div>
                  <div class="flex items-center justify-between mb-3">
                    <div class="flex items-center space-x-2">
                      <span class="text-xl font-bold text-error-600">¥1,980</span>
                      <span class="text-sm text-neutral-500 dark:text-dark-600 line-through">¥2,980</span>
                    </div>
                    <span class="text-sm text-neutral-600 dark:text-dark-700">在庫: 15</span>
                  </div>
                  <button class="w-full bg-primary-500 hover:bg-primary-600 text-white py-2 rounded-md transition-colors">
                    カートに追加
                  </button>
                </div>
              </div>

              <!-- 商品カード 2 -->
              <div class="border border-neutral-200 dark:border-dark-300 rounded-lg overflow-hidden hover:shadow-md transition-shadow">
                <img src="https://picsum.photos/300/300?random=2" alt="商品2" class="w-full h-48 object-cover" />
                <div class="p-4">
                  <div class="flex items-center space-x-2 mb-2">
                    <span class="bg-info-100 text-info-700 px-2 py-1 rounded text-xs font-medium">限定版</span>
                  </div>
                  <h3 class="font-semibold text-neutral-900 dark:text-dark-900 mb-2">有機緑茶セット</h3>
                  <p class="text-sm text-neutral-600 dark:text-dark-700 mb-3">無農薬栽培の有機緑茶。健康志向の方におすすめ。</p>
                  <div class="flex items-center space-x-1 mb-2">
                    <span class="text-yellow-400">★★★★★</span>
                    <span class="text-sm text-neutral-600 dark:text-dark-700 ml-1">4.8 (89)</span>
                  </div>
                  <div class="flex items-center justify-between mb-3">
                    <span class="text-xl font-bold text-neutral-900 dark:text-dark-900">¥3,200</span>
                    <span class="text-sm text-warning-600">在庫: 3</span>
                  </div>
                  <button class="w-full bg-primary-500 hover:bg-primary-600 text-white py-2 rounded-md transition-colors">
                    カートに追加
                  </button>
                </div>
              </div>

              <!-- 商品カード 3 -->
              <div class="border border-neutral-200 dark:border-dark-300 rounded-lg overflow-hidden hover:shadow-md transition-shadow opacity-75">
                <img src="https://picsum.photos/300/300?random=3" alt="商品3" class="w-full h-48 object-cover" />
                <div class="p-4">
                  <div class="flex items-center space-x-2 mb-2">
                    <span class="bg-neutral-100 text-neutral-600 px-2 py-1 rounded text-xs font-medium">売り切れ</span>
                  </div>
                  <h3 class="font-semibold text-neutral-900 dark:text-dark-900 mb-2">アートプリントセット</h3>
                  <p class="text-sm text-neutral-600 dark:text-dark-700 mb-3">モダンデザインの壁アート3点セット。</p>
                  <div class="flex items-center space-x-1 mb-2">
                    <span class="text-yellow-400">★★★★</span><span class="text-gray-300">☆</span>
                    <span class="text-sm text-neutral-600 dark:text-dark-700 ml-1">4.2 (34)</span>
                  </div>
                  <div class="flex items-center justify-between mb-3">
                    <span class="text-xl font-bold text-neutral-900 dark:text-dark-900">¥8,900</span>
                    <span class="text-sm text-error-600">在庫切れ</span>
                  </div>
                  <button class="w-full bg-neutral-300 text-neutral-500 py-2 rounded-md cursor-not-allowed" disabled>
                    売り切れ
                  </button>
                </div>
              </div>
            </div>
          </div>

          <!-- コンパクトモード -->
          <div>
            <h3 class="text-xl font-medium text-neutral-900 dark:text-dark-900 mb-3">コンパクトモード</h3>
            <div class="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">
              <div class="border border-neutral-200 dark:border-dark-300 rounded-lg overflow-hidden hover:shadow-md transition-shadow">
                <img src="https://picsum.photos/200/150?random=4" alt="商品4" class="w-full h-32 object-cover" />
                <div class="p-3">
                  <h4 class="font-medium text-neutral-900 dark:text-dark-900 mb-1 text-sm">ワイヤレスイヤホン</h4>
                  <div class="flex items-center space-x-1 mb-1">
                    <span class="text-yellow-400 text-sm">★★★★</span><span class="text-gray-300">☆</span>
                  </div>
                  <div class="text-lg font-bold text-neutral-900 dark:text-dark-900">¥12,800</div>
                </div>
              </div>
              <div class="border border-neutral-200 dark:border-dark-300 rounded-lg overflow-hidden hover:shadow-md transition-shadow">
                <img src="https://picsum.photos/200/150?random=5" alt="商品5" class="w-full h-32 object-cover" />
                <div class="p-3">
                  <h4 class="font-medium text-neutral-900 dark:text-dark-900 mb-1 text-sm">キャンドルセット</h4>
                  <div class="flex items-center space-x-1 mb-1">
                    <span class="text-yellow-400 text-sm">★★★★</span><span class="text-yellow-400">★</span>
                  </div>
                  <div class="text-lg font-bold text-neutral-900 dark:text-dark-900">¥2,400</div>
                </div>
              </div>
              <div class="border border-neutral-200 dark:border-dark-300 rounded-lg overflow-hidden hover:shadow-md transition-shadow">
                <img src="https://picsum.photos/200/150?random=6" alt="商品6" class="w-full h-32 object-cover" />
                <div class="p-3">
                  <h4 class="font-medium text-neutral-900 dark:text-dark-900 mb-1 text-sm">レザーバッグ</h4>
                  <div class="flex items-center space-x-1 mb-1">
                    <span class="text-yellow-400 text-sm">★★★★</span><span class="text-yellow-400">★</span>
                  </div>
                  <div class="text-lg font-bold text-neutral-900 dark:text-dark-900">¥19,800</div>
                </div>
              </div>
              <div class="border border-neutral-200 dark:border-dark-300 rounded-lg overflow-hidden hover:shadow-md transition-shadow">
                <img src="https://picsum.photos/200/150?random=7" alt="商品7" class="w-full h-32 object-cover" />
                <div class="p-3">
                  <h4 class="font-medium text-neutral-900 dark:text-dark-900 mb-1 text-sm">植物の種セット</h4>
                  <div class="flex items-center space-x-1 mb-1">
                    <span class="text-yellow-400 text-sm">★★★★</span><span class="text-gray-300">☆</span>
                  </div>
                  <div class="text-lg font-bold text-neutral-900 dark:text-dark-900">¥1,200</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- ArticleCard コンポーネント -->
    <div id="article-card">
      <div class="bg-white dark:bg-dark-100 rounded-lg shadow-md p-6">
        <div class="flex items-center justify-between mb-4">
          <h2 class="text-2xl font-semibold text-neutral-900 dark:text-dark-900">
            ArticleCard
          </h2>
          <span class="bg-info-100 text-info-700 px-3 py-1 rounded-full text-sm font-medium">記事カード</span>
        </div>
        <p class="text-neutral-600 dark:text-dark-700 mb-6">
          ブログ記事や商品レビューの表示に適したカードコンポーネント。
        </p>

        <div class="space-y-6">
          <!-- 記事カード例 -->
          <div>
            <h3 class="text-xl font-medium text-neutral-900 dark:text-dark-900 mb-3">記事カード例</h3>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <!-- 記事カード 1 -->
              <div class="border border-neutral-200 dark:border-dark-300 rounded-lg overflow-hidden hover:shadow-md transition-shadow cursor-pointer">
                <img src="https://picsum.photos/400/250?random=10" alt="記事1" class="w-full h-48 object-cover" />
                <div class="p-4">
                  <div class="flex items-center space-x-2 mb-2">
                    <span class="bg-primary-100 text-primary-700 px-2 py-1 rounded text-xs font-medium">レビュー</span>
                    <span class="text-xs text-neutral-500 dark:text-dark-600">2024-01-15</span>
                  </div>
                  <h3 class="font-semibold text-neutral-900 dark:text-dark-900 mb-2">2024年版コーヒー豆の選び方ガイド</h3>
                  <p class="text-sm text-neutral-600 dark:text-dark-700 mb-3">
                    美味しいコーヒーを淹れるための豆選びから保存方法まで、専門家が徹底解説します...
                  </p>
                  <div class="flex items-center justify-between text-sm text-neutral-500 dark:text-dark-600">
                    <span>田中 太郎</span>
                    <div class="flex space-x-4">
                      <span>読了時間: 5分</span>
                      <span>#コーヒー</span>
                    </div>
                  </div>
                </div>
              </div>

              <!-- 記事カード 2 -->
              <div class="border border-neutral-200 dark:border-dark-300 rounded-lg overflow-hidden hover:shadow-md transition-shadow cursor-pointer">
                <img src="https://picsum.photos/400/250?random=11" alt="記事2" class="w-full h-48 object-cover" />
                <div class="p-4">
                  <div class="flex items-center space-x-2 mb-2">
                    <span class="bg-success-100 text-success-700 px-2 py-1 rounded text-xs font-medium">ライフスタイル</span>
                    <span class="text-xs text-neutral-500 dark:text-dark-600">2024-01-12</span>
                  </div>
                  <h3 class="font-semibold text-neutral-900 dark:text-dark-900 mb-2">持続可能なライフスタイルのススメ</h3>
                  <p class="text-sm text-neutral-600 dark:text-dark-700 mb-3">
                    環境に優しい商品選びから、日常生活でできるエコ活動まで。今日から始められる...
                  </p>
                  <div class="flex items-center justify-between text-sm text-neutral-500 dark:text-dark-600">
                    <span>佐藤 花子</span>
                    <div class="flex space-x-4">
                      <span>読了時間: 8分</span>
                      <span>#エコ</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- 技術仕様 -->
    <div class="bg-white dark:bg-dark-100 rounded-lg shadow-md p-6">
      <h2 class="text-2xl font-semibold text-neutral-900 dark:text-dark-900 mb-4">
        技術仕様
      </h2>
      <div class="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div>
          <h3 class="text-lg font-medium text-neutral-900 dark:text-dark-900 mb-2">RatingStars</h3>
          <ul class="text-sm text-neutral-600 dark:text-dark-700 space-y-1">
            <li>• 表示・入力両対応</li>
            <li>• 5段階評価</li>
            <li>• レビュー数表示</li>
            <li>• カスタムラベル</li>
            <li>• 6種類のサイズ</li>
            <li>• 色テーマ対応</li>
          </ul>
        </div>
        <div>
          <h3 class="text-lg font-medium text-neutral-900 dark:text-dark-900 mb-2">PriceDisplay</h3>
          <ul class="text-sm text-neutral-600 dark:text-dark-700 space-y-1">
            <li>• 通貨フォーマット</li>
            <li>• 割引表示</li>
            <li>• 税込み・税抜き表示</li>
            <li>• 送料情報</li>
            <li>• ポイント表示</li>
            <li>• 6種類のサイズ</li>
          </ul>
        </div>
        <div>
          <h3 class="text-lg font-medium text-neutral-900 dark:text-dark-900 mb-2">ProductCard</h3>
          <ul class="text-sm text-neutral-600 dark:text-dark-700 space-y-1">
            <li>• 商品画像表示</li>
            <li>• 価格・評価統合</li>
            <li>• カート機能</li>
            <li>• バリエーション選択</li>
            <li>• お気に入り機能</li>
            <li>• レスポンシブ対応</li>
          </ul>
        </div>
        <div>
          <h3 class="text-lg font-medium text-neutral-900 dark:text-dark-900 mb-2">ArticleCard</h3>
          <ul class="text-sm text-neutral-600 dark:text-dark-700 space-y-1">
            <li>• サムネイル表示</li>
            <li>• タイトル・抜粋</li>
            <li>• 投稿日時</li>
            <li>• カテゴリ表示</li>
            <li>• 著者情報</li>
            <li>• タグ対応</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
// Pure HTML/CSS implementation - no custom components
</script>