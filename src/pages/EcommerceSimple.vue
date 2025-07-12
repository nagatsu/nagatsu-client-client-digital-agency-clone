<template>
  <div class="space-y-8">
    <!-- ページヘッダー -->
    <div class="text-center">
      <h1 class="text-3xl font-bold text-neutral-900 dark:text-dark-800 mb-4">
        ECサイト向けコンポーネント
      </h1>
      <p class="text-lg text-neutral-600 dark:text-dark-600 max-w-3xl mx-auto">
        商品カード、価格表示、評価システムなど、ECサイト構築に特化したコンポーネント集です。
      </p>
    </div>

    <!-- 商品カードのサンプル -->
    <div class="bg-white dark:bg-dark-200 rounded-lg shadow-md p-6">
      <h2 class="text-2xl font-semibold text-neutral-900 dark:text-dark-800 mb-6">商品カード</h2>
      
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <!-- 商品カード 1 -->
        <div class="bg-white dark:bg-dark-200 rounded-lg border border-neutral-200 dark:border-dark-300 overflow-hidden hover:shadow-md transition-shadow">
          <img 
            src="https://picsum.photos/300/200?random=1" 
            alt="商品 1"
            class="w-full h-48 object-cover"
          />
          <div class="p-4">
            <h3 class="font-semibold text-neutral-900 dark:text-dark-800 mb-2">サンプル商品 1</h3>
            <div class="flex items-center mb-2">
              <div class="flex text-yellow-400">
                ★★★★☆
              </div>
              <span class="text-sm text-neutral-600 dark:text-dark-600 ml-2">(4.0)</span>
            </div>
            <div class="flex items-center justify-between">
              <span class="text-xl font-bold text-primary-600">¥2,980</span>
              <button class="bg-primary-500 text-white px-4 py-2 rounded hover:bg-primary-600 transition-colors">
                カートに追加
              </button>
            </div>
          </div>
        </div>

        <!-- 商品カード 2 -->
        <div class="bg-white dark:bg-dark-200 rounded-lg border border-neutral-200 dark:border-dark-300 overflow-hidden hover:shadow-md transition-shadow">
          <img 
            src="https://picsum.photos/300/200?random=2" 
            alt="商品 2"
            class="w-full h-48 object-cover"
          />
          <div class="p-4">
            <h3 class="font-semibold text-neutral-900 dark:text-dark-800 mb-2">サンプル商品 2</h3>
            <div class="flex items-center mb-2">
              <div class="flex text-yellow-400">
                ★★★★★
              </div>
              <span class="text-sm text-neutral-600 dark:text-dark-600 ml-2">(5.0)</span>
            </div>
            <div class="flex items-center justify-between">
              <div>
                <span class="text-sm text-neutral-500 dark:text-dark-500 line-through">¥3,980</span>
                <span class="text-xl font-bold text-error-600 ml-2">¥2,480</span>
              </div>
              <button class="bg-primary-500 text-white px-4 py-2 rounded hover:bg-primary-600 transition-colors">
                カートに追加
              </button>
            </div>
          </div>
        </div>

        <!-- 商品カード 3 -->
        <div class="bg-white dark:bg-dark-200 rounded-lg border border-neutral-200 dark:border-dark-300 overflow-hidden hover:shadow-md transition-shadow">
          <img 
            src="https://picsum.photos/300/200?random=3" 
            alt="商品 3"
            class="w-full h-48 object-cover"
          />
          <div class="p-4">
            <h3 class="font-semibold text-neutral-900 dark:text-dark-800 mb-2">サンプル商品 3</h3>
            <div class="flex items-center mb-2">
              <div class="flex text-yellow-400">
                ★★★☆☆
              </div>
              <span class="text-sm text-neutral-600 dark:text-dark-600 ml-2">(3.5)</span>
            </div>
            <div class="flex items-center justify-between">
              <span class="text-xl font-bold text-primary-600">¥1,980</span>
              <button class="bg-primary-500 text-white px-4 py-2 rounded hover:bg-primary-600 transition-colors">
                カートに追加
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- 価格表示のサンプル -->
    <div class="bg-white dark:bg-dark-200 rounded-lg shadow-md p-6">
      <h2 class="text-2xl font-semibold text-neutral-900 dark:text-dark-800 mb-6">価格表示パターン</h2>
      
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div class="text-center p-4 border border-neutral-200 rounded-lg">
          <h3 class="font-medium text-neutral-900 mb-2">通常価格</h3>
          <div class="text-2xl font-bold text-primary-600">¥2,980</div>
          <div class="text-sm text-neutral-600 mt-1">税込</div>
        </div>
        
        <div class="text-center p-4 border border-neutral-200 rounded-lg">
          <h3 class="font-medium text-neutral-900 mb-2">セール価格</h3>
          <div class="text-sm text-neutral-500 dark:text-dark-500 line-through">¥3,980</div>
          <div class="text-2xl font-bold text-error-600">¥2,480</div>
          <div class="text-sm text-neutral-600 mt-1">38% OFF</div>
        </div>
        
        <div class="text-center p-4 border border-neutral-200 rounded-lg">
          <h3 class="font-medium text-neutral-900 mb-2">送料込み</h3>
          <div class="text-2xl font-bold text-primary-600">¥2,980</div>
          <div class="text-sm text-success-600 mt-1">送料無料</div>
        </div>
        
        <div class="text-center p-4 border border-neutral-200 rounded-lg">
          <h3 class="font-medium text-neutral-900 mb-2">定期購入</h3>
          <div class="text-2xl font-bold text-primary-600">¥2,680</div>
          <div class="text-sm text-neutral-600 mt-1">10% OFF</div>
        </div>
      </div>
    </div>

    <!-- ショッピングカート関連 -->
    <div class="bg-white dark:bg-dark-200 rounded-lg shadow-md p-6">
      <h2 class="text-2xl font-semibold text-neutral-900 dark:text-dark-800 mb-6">ショッピングカート</h2>
      
      <!-- カートアイテム表示 -->
      <div class="space-y-4 mb-6">
        <div class="flex items-center justify-between p-4 border border-neutral-200 rounded-lg">
          <div class="flex items-center space-x-4">
            <img src="https://picsum.photos/80/80?random=21" alt="商品" class="w-16 h-16 object-cover rounded" />
            <div>
              <h4 class="font-medium text-neutral-900">サンプル商品 1</h4>
              <p class="text-sm text-neutral-600">カラー: ブラック, サイズ: M</p>
              <div class="flex items-center mt-1">
                <span class="text-yellow-400">★★★★☆</span>
                <span class="text-sm text-neutral-600 ml-1">(4.2)</span>
              </div>
            </div>
          </div>
          <div class="flex items-center space-x-4">
            <div class="flex items-center border border-neutral-300 rounded">
              <button class="px-3 py-1 hover:bg-neutral-100">−</button>
              <span class="px-3 py-1 border-x border-neutral-300">2</span>
              <button class="px-3 py-1 hover:bg-neutral-100">+</button>
            </div>
            <div class="text-right">
              <div class="font-bold text-primary-600">¥5,960</div>
              <div class="text-sm text-neutral-500">¥2,980 × 2</div>
            </div>
            <button class="text-error-600 hover:text-error-700">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
              </svg>
            </button>
          </div>
        </div>

        <div class="flex items-center justify-between p-4 border border-neutral-200 rounded-lg">
          <div class="flex items-center space-x-4">
            <img src="https://picsum.photos/80/80?random=22" alt="商品" class="w-16 h-16 object-cover rounded" />
            <div>
              <h4 class="font-medium text-neutral-900">サンプル商品 2</h4>
              <p class="text-sm text-neutral-600">カラー: ホワイト</p>
              <div class="flex items-center mt-1">
                <span class="text-yellow-400">★★★★★</span>
                <span class="text-sm text-neutral-600 ml-1">(4.8)</span>
              </div>
            </div>
          </div>
          <div class="flex items-center space-x-4">
            <div class="flex items-center border border-neutral-300 rounded">
              <button class="px-3 py-1 hover:bg-neutral-100">−</button>
              <span class="px-3 py-1 border-x border-neutral-300">1</span>
              <button class="px-3 py-1 hover:bg-neutral-100">+</button>
            </div>
            <div class="text-right">
              <div class="font-bold text-primary-600">¥2,480</div>
              <div class="text-sm text-error-600">20% OFF</div>
            </div>
            <button class="text-error-600 hover:text-error-700">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      <!-- カート合計 -->
      <div class="border-t border-neutral-200 pt-4">
        <div class="space-y-2 mb-4">
          <div class="flex justify-between text-neutral-600">
            <span>小計 (3点)</span>
            <span>¥8,440</span>
          </div>
          <div class="flex justify-between text-neutral-600">
            <span>送料</span>
            <span class="text-success-600">無料</span>
          </div>
          <div class="flex justify-between text-neutral-600">
            <span>消費税</span>
            <span>¥844</span>
          </div>
        </div>
        <div class="flex justify-between items-center text-lg font-bold border-t border-neutral-200 pt-4">
          <span>合計</span>
          <span class="text-primary-600">¥9,284</span>
        </div>
        <button class="w-full mt-4 bg-primary-500 hover:bg-primary-600 text-white font-medium py-3 rounded-lg transition-colors">
          レジに進む
        </button>
      </div>
    </div>

    <!-- 決済フォーム -->
    <div class="bg-white dark:bg-dark-200 rounded-lg shadow-md p-6">
      <h2 class="text-2xl font-semibold text-neutral-900 dark:text-dark-800 mb-6">決済情報</h2>
      
      <!-- 決済方法選択 -->
      <div class="mb-6">
        <h3 class="font-medium text-neutral-900 mb-3">決済方法</h3>
        <div class="space-y-2">
          <label class="flex items-center p-3 border border-neutral-200 rounded-lg cursor-pointer hover:bg-neutral-50">
            <input type="radio" name="payment" value="credit" class="mr-3" checked />
            <div class="flex items-center">
              <svg class="w-6 h-6 text-neutral-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
              </svg>
              <span>クレジットカード</span>
            </div>
          </label>
          <label class="flex items-center p-3 border border-neutral-200 rounded-lg cursor-pointer hover:bg-neutral-50">
            <input type="radio" name="payment" value="bank" class="mr-3" />
            <div class="flex items-center">
              <svg class="w-6 h-6 text-neutral-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z" />
              </svg>
              <span>銀行振込</span>
            </div>
          </label>
          <label class="flex items-center p-3 border border-neutral-200 rounded-lg cursor-pointer hover:bg-neutral-50">
            <input type="radio" name="payment" value="paypal" class="mr-3" />
            <div class="flex items-center">
              <svg class="w-6 h-6 text-neutral-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
              </svg>
              <span>PayPal</span>
            </div>
          </label>
        </div>
      </div>

      <!-- クレジットカード情報 -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label class="block text-sm font-medium text-neutral-700 mb-2">カード番号</label>
          <input type="text" placeholder="1234 5678 9012 3456" class="w-full px-3 py-2 border border-neutral-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-primary-500" />
        </div>
        <div>
          <label class="block text-sm font-medium text-neutral-700 mb-2">有効期限</label>
          <input type="text" placeholder="MM/YY" class="w-full px-3 py-2 border border-neutral-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-primary-500" />
        </div>
        <div>
          <label class="block text-sm font-medium text-neutral-700 mb-2">カード名義</label>
          <input type="text" placeholder="TARO YAMADA" class="w-full px-3 py-2 border border-neutral-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-primary-500" />
        </div>
        <div>
          <label class="block text-sm font-medium text-neutral-700 mb-2">セキュリティコード</label>
          <input type="text" placeholder="123" class="w-full px-3 py-2 border border-neutral-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-primary-500" />
        </div>
      </div>

      <button class="w-full mt-6 bg-success-500 hover:bg-success-600 text-white font-medium py-3 rounded-lg transition-colors">
        ¥9,284 で購入する
      </button>
    </div>

    <!-- レビュー・評価システム -->
    <div class="bg-white dark:bg-dark-200 rounded-lg shadow-md p-6">
      <h2 class="text-2xl font-semibold text-neutral-900 dark:text-dark-800 mb-6">レビュー・評価</h2>
      
      <!-- 評価統計 -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div class="text-center">
          <div class="text-4xl font-bold text-neutral-900 mb-2">4.3</div>
          <div class="flex justify-center mb-2">
            <span class="text-yellow-400 text-xl">★★★★☆</span>
          </div>
          <div class="text-sm text-neutral-600">127件のレビュー</div>
        </div>
        <div class="space-y-2">
          <div class="flex items-center">
            <span class="w-8 text-sm">5★</span>
            <div class="flex-1 bg-neutral-200 rounded-full h-2 mx-2">
              <div class="bg-yellow-400 h-2 rounded-full" style="width: 60%"></div>
            </div>
            <span class="text-sm text-neutral-600">76</span>
          </div>
          <div class="flex items-center">
            <span class="w-8 text-sm">4★</span>
            <div class="flex-1 bg-neutral-200 rounded-full h-2 mx-2">
              <div class="bg-yellow-400 h-2 rounded-full" style="width: 25%"></div>
            </div>
            <span class="text-sm text-neutral-600">32</span>
          </div>
          <div class="flex items-center">
            <span class="w-8 text-sm">3★</span>
            <div class="flex-1 bg-neutral-200 rounded-full h-2 mx-2">
              <div class="bg-yellow-400 h-2 rounded-full" style="width: 10%"></div>
            </div>
            <span class="text-sm text-neutral-600">13</span>
          </div>
          <div class="flex items-center">
            <span class="w-8 text-sm">2★</span>
            <div class="flex-1 bg-neutral-200 rounded-full h-2 mx-2">
              <div class="bg-yellow-400 h-2 rounded-full" style="width: 3%"></div>
            </div>
            <span class="text-sm text-neutral-600">4</span>
          </div>
          <div class="flex items-center">
            <span class="w-8 text-sm">1★</span>
            <div class="flex-1 bg-neutral-200 rounded-full h-2 mx-2">
              <div class="bg-yellow-400 h-2 rounded-full" style="width: 2%"></div>
            </div>
            <span class="text-sm text-neutral-600">2</span>
          </div>
        </div>
      </div>

      <!-- 個別レビュー -->
      <div class="space-y-6">
        <div class="border-b border-neutral-200 pb-6">
          <div class="flex items-start space-x-4">
            <div class="w-10 h-10 bg-neutral-300 rounded-full flex items-center justify-center">
              <span class="text-sm font-medium">田</span>
            </div>
            <div class="flex-1">
              <div class="flex items-center mb-2">
                <span class="font-medium mr-2">田中太郎</span>
                <span class="text-yellow-400">★★★★★</span>
                <span class="text-sm text-neutral-500 ml-2">2024年1月15日</span>
              </div>
              <p class="text-neutral-700 mb-2">とても満足しています。品質も良く、配送も早かったです。リピート購入を検討しています。</p>
              <div class="flex items-center space-x-4 text-sm text-neutral-500">
                <button class="hover:text-primary-600">役に立った (12)</button>
                <button class="hover:text-primary-600">返信</button>
              </div>
            </div>
          </div>
        </div>

        <div class="border-b border-neutral-200 pb-6">
          <div class="flex items-start space-x-4">
            <div class="w-10 h-10 bg-neutral-300 rounded-full flex items-center justify-center">
              <span class="text-sm font-medium">佐</span>
            </div>
            <div class="flex-1">
              <div class="flex items-center mb-2">
                <span class="font-medium mr-2">佐藤花子</span>
                <span class="text-yellow-400">★★★★☆</span>
                <span class="text-sm text-neutral-500 ml-2">2024年1月10日</span>
              </div>
              <p class="text-neutral-700 mb-2">想像していたより少し小さかったですが、デザインは気に入っています。価格も手頃で良い買い物でした。</p>
              <div class="flex items-center space-x-4 text-sm text-neutral-500">
                <button class="hover:text-primary-600">役に立った (8)</button>
                <button class="hover:text-primary-600">返信</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- レビュー投稿フォーム -->
      <div class="mt-8 p-4 bg-neutral-50 rounded-lg">
        <h3 class="font-medium text-neutral-900 mb-4">レビューを投稿</h3>
        <div class="space-y-4">
          <div>
            <label class="block text-sm font-medium text-neutral-700 mb-2">評価</label>
            <div class="flex space-x-1">
              <button class="text-2xl text-yellow-400">★</button>
              <button class="text-2xl text-yellow-400">★</button>
              <button class="text-2xl text-yellow-400">★</button>
              <button class="text-2xl text-yellow-400">★</button>
              <button class="text-2xl text-neutral-300">★</button>
            </div>
          </div>
          <div>
            <label class="block text-sm font-medium text-neutral-700 mb-2">コメント</label>
            <textarea rows="3" placeholder="商品の感想をお聞かせください..." class="w-full px-3 py-2 border border-neutral-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-primary-500"></textarea>
          </div>
          <button class="bg-primary-500 hover:bg-primary-600 text-white font-medium py-2 px-4 rounded-md transition-colors">
            レビューを投稿
          </button>
        </div>
      </div>
    </div>

    <!-- 商品詳細関連 -->
    <div class="bg-white dark:bg-dark-200 rounded-lg shadow-md p-6">
      <h2 class="text-2xl font-semibold text-neutral-900 dark:text-dark-800 mb-6">商品詳細ページ</h2>
      
      <!-- 商品画像ギャラリー -->
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
        <div>
          <h3 class="font-medium text-neutral-900 mb-4">商品画像ギャラリー</h3>
          <div class="space-y-4">
            <!-- メイン画像 -->
            <div class="aspect-square bg-neutral-100 rounded-lg overflow-hidden">
              <img src="https://picsum.photos/400/400?random=31" alt="メイン商品画像" class="w-full h-full object-cover" />
            </div>
            <!-- サムネイル -->
            <div class="grid grid-cols-4 gap-2">
              <img src="https://picsum.photos/100/100?random=31" alt="商品画像1" class="aspect-square object-cover rounded border-2 border-primary-500" />
              <img src="https://picsum.photos/100/100?random=32" alt="商品画像2" class="aspect-square object-cover rounded border border-neutral-200 hover:border-primary-300 cursor-pointer" />
              <img src="https://picsum.photos/100/100?random=33" alt="商品画像3" class="aspect-square object-cover rounded border border-neutral-200 hover:border-primary-300 cursor-pointer" />
              <img src="https://picsum.photos/100/100?random=34" alt="商品画像4" class="aspect-square object-cover rounded border border-neutral-200 hover:border-primary-300 cursor-pointer" />
            </div>
          </div>
        </div>

        <!-- 商品情報 -->
        <div>
          <h3 class="font-medium text-neutral-900 mb-4">商品情報</h3>
          <div class="space-y-6">
            <div>
              <h4 class="text-xl font-semibold text-neutral-900 mb-2">プレミアム商品サンプル</h4>
              <div class="flex items-center mb-4">
                <span class="text-yellow-400 text-lg">★★★★☆</span>
                <span class="text-sm text-neutral-600 dark:text-dark-600 ml-2">(4.3) 127件のレビュー</span>
              </div>
              <div class="flex items-baseline space-x-2 mb-4">
                <span class="text-2xl font-bold text-primary-600">¥2,980</span>
                <span class="text-lg text-neutral-500 line-through">¥3,980</span>
                <span class="bg-error-100 text-error-700 px-2 py-1 rounded text-sm font-medium">25% OFF</span>
              </div>
            </div>

            <!-- 商品オプション -->
            <div class="space-y-4">
              <div>
                <label class="block text-sm font-medium text-neutral-700 mb-2">カラー</label>
                <div class="flex space-x-2">
                  <button class="w-8 h-8 bg-black rounded-full border-2 border-primary-500"></button>
                  <button class="w-8 h-8 bg-white rounded-full border border-neutral-300 hover:border-primary-300"></button>
                  <button class="w-8 h-8 bg-red-500 rounded-full border border-neutral-300 hover:border-primary-300"></button>
                  <button class="w-8 h-8 bg-blue-500 rounded-full border border-neutral-300 hover:border-primary-300"></button>
                </div>
              </div>

              <div>
                <label class="block text-sm font-medium text-neutral-700 mb-2">サイズ</label>
                <div class="grid grid-cols-4 gap-2">
                  <button class="py-2 border border-neutral-300 rounded text-center hover:border-primary-500">XS</button>
                  <button class="py-2 border border-neutral-300 rounded text-center hover:border-primary-500">S</button>
                  <button class="py-2 border-2 border-primary-500 bg-primary-50 rounded text-center">M</button>
                  <button class="py-2 border border-neutral-300 rounded text-center hover:border-primary-500">L</button>
                </div>
              </div>

              <div>
                <label class="block text-sm font-medium text-neutral-700 mb-2">数量</label>
                <div class="flex items-center space-x-3">
                  <div class="flex items-center border border-neutral-300 rounded">
                    <button class="px-3 py-2 hover:bg-neutral-100">−</button>
                    <span class="px-4 py-2 border-x border-neutral-300">1</span>
                    <button class="px-3 py-2 hover:bg-neutral-100">+</button>
                  </div>
                  <span class="text-sm text-neutral-600">在庫: 15個</span>
                </div>
              </div>
            </div>

            <!-- アクションボタン -->
            <div class="space-y-3">
              <button class="w-full bg-primary-500 hover:bg-primary-600 text-white font-medium py-3 rounded-lg transition-colors">
                カートに追加
              </button>
              <button class="w-full border border-neutral-300 hover:border-primary-300 text-neutral-700 font-medium py-3 rounded-lg transition-colors">
                お気に入りに追加
              </button>
            </div>
          </div>
        </div>
      </div>

      <!-- 商品仕様 -->
      <div class="border-t border-neutral-200 pt-6">
        <h3 class="font-medium text-neutral-900 mb-4">商品仕様</h3>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div class="space-y-3">
            <div class="flex justify-between py-2 border-b border-neutral-100">
              <span class="text-neutral-600 dark:text-dark-600">素材</span>
              <span class="font-medium">コットン100%</span>
            </div>
            <div class="flex justify-between py-2 border-b border-neutral-100">
              <span class="text-neutral-600 dark:text-dark-600">重量</span>
              <span class="font-medium">250g</span>
            </div>
            <div class="flex justify-between py-2 border-b border-neutral-100">
              <span class="text-neutral-600 dark:text-dark-600">サイズ</span>
              <span class="font-medium">S/M/L/XL</span>
            </div>
            <div class="flex justify-between py-2 border-b border-neutral-100">
              <span class="text-neutral-600 dark:text-dark-600">カラー</span>
              <span class="font-medium">4色展開</span>
            </div>
          </div>
          <div class="space-y-3">
            <div class="flex justify-between py-2 border-b border-neutral-100">
              <span class="text-neutral-600 dark:text-dark-600">製造国</span>
              <span class="font-medium">日本</span>
            </div>
            <div class="flex justify-between py-2 border-b border-neutral-100">
              <span class="text-neutral-600 dark:text-dark-600">洗濯方法</span>
              <span class="font-medium">手洗い可</span>
            </div>
            <div class="flex justify-between py-2 border-b border-neutral-100">
              <span class="text-neutral-600 dark:text-dark-600">保証期間</span>
              <span class="font-medium">1年間</span>
            </div>
            <div class="flex justify-between py-2 border-b border-neutral-100">
              <span class="text-neutral-600 dark:text-dark-600">配送</span>
              <span class="font-medium">全国送料無料</span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- ユーザーアカウント関連 -->
    <div class="bg-white dark:bg-dark-200 rounded-lg shadow-md p-6">
      <h2 class="text-2xl font-semibold text-neutral-900 dark:text-dark-800 mb-6">ユーザーアカウント</h2>
      
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <!-- ログインフォーム -->
        <div>
          <h3 class="font-medium text-neutral-900 mb-4">ログイン</h3>
          <form class="space-y-4">
            <div>
              <label class="block text-sm font-medium text-neutral-700 mb-2">メールアドレス</label>
              <input type="email" placeholder="your@email.com" class="w-full px-3 py-2 border border-neutral-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-primary-500" />
            </div>
            <div>
              <label class="block text-sm font-medium text-neutral-700 mb-2">パスワード</label>
              <input type="password" placeholder="••••••••" class="w-full px-3 py-2 border border-neutral-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-primary-500" />
            </div>
            <div class="flex items-center justify-between">
              <label class="flex items-center">
                <input type="checkbox" class="mr-2" />
                <span class="text-sm text-neutral-600">ログイン状態を保持</span>
              </label>
              <a href="#" class="text-sm text-primary-600 hover:text-primary-700">パスワードを忘れた方</a>
            </div>
            <button type="submit" class="w-full bg-primary-500 hover:bg-primary-600 text-white font-medium py-2 rounded-md transition-colors">
              ログイン
            </button>
          </form>
        </div>

        <!-- 会員登録フォーム -->
        <div>
          <h3 class="font-medium text-neutral-900 mb-4">新規会員登録</h3>
          <form class="space-y-4">
            <div>
              <label class="block text-sm font-medium text-neutral-700 mb-2">お名前</label>
              <input type="text" placeholder="山田 太郎" class="w-full px-3 py-2 border border-neutral-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-primary-500" />
            </div>
            <div>
              <label class="block text-sm font-medium text-neutral-700 mb-2">メールアドレス</label>
              <input type="email" placeholder="your@email.com" class="w-full px-3 py-2 border border-neutral-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-primary-500" />
            </div>
            <div>
              <label class="block text-sm font-medium text-neutral-700 mb-2">パスワード</label>
              <input type="password" placeholder="••••••••" class="w-full px-3 py-2 border border-neutral-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-primary-500" />
            </div>
            <div>
              <label class="block text-sm font-medium text-neutral-700 mb-2">パスワード確認</label>
              <input type="password" placeholder="••••••••" class="w-full px-3 py-2 border border-neutral-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-primary-500" />
            </div>
            <div class="flex items-center">
              <input type="checkbox" class="mr-2" />
              <span class="text-sm text-neutral-600">利用規約とプライバシーポリシーに同意します</span>
            </div>
            <button type="submit" class="w-full bg-success-500 hover:bg-success-600 text-white font-medium py-2 rounded-md transition-colors">
              会員登録
            </button>
          </form>
        </div>
      </div>

      <!-- ユーザープロフィール -->
      <div class="mt-8 pt-8 border-t border-neutral-200">
        <h3 class="font-medium text-neutral-900 mb-4">ユーザープロフィール</h3>
        <div class="bg-neutral-50 rounded-lg p-6">
          <div class="flex items-center space-x-4 mb-6">
            <div class="w-16 h-16 bg-neutral-300 rounded-full flex items-center justify-center">
              <span class="text-xl font-medium text-neutral-600">山</span>
            </div>
            <div>
              <h4 class="font-medium text-neutral-900">山田 太郎</h4>
              <p class="text-sm text-neutral-600">yamada@example.com</p>
              <div class="flex items-center mt-1">
                <span class="bg-primary-100 text-primary-700 px-2 py-1 rounded text-xs font-medium">プレミアム会員</span>
              </div>
            </div>
          </div>
          
          <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div class="text-center p-4 bg-white rounded-lg">
              <div class="text-2xl font-bold text-primary-600">23</div>
              <div class="text-sm text-neutral-600">購入回数</div>
            </div>
            <div class="text-center p-4 bg-white rounded-lg">
              <div class="text-2xl font-bold text-success-600">¥145,670</div>
              <div class="text-sm text-neutral-600">累計購入金額</div>
            </div>
            <div class="text-center p-4 bg-white rounded-lg">
              <div class="text-2xl font-bold text-warning-600">2,340pt</div>
              <div class="text-sm text-neutral-600">保有ポイント</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
// Pure HTML/CSS implementation - no custom components
</script>