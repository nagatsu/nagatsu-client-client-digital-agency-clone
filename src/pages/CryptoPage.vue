<template>
  <div class="space-y-8">
    <!-- ページヘッダー -->
    <div class="text-center">
      <h1 class="text-3xl font-bold text-neutral-900 dark:text-dark-900 mb-4">
        Web3・クリプト向けコンポーネント
      </h1>
      <p class="text-lg text-neutral-600 dark:text-dark-700 max-w-3xl mx-auto">
        暗号通貨取引、DeFi、NFT、ウォレット接続など、Web3エコシステムに特化したコンポーネントライブラリです。
        リアルタイムなデータ表示とスムースな取引体験を提供します。
      </p>
    </div>

    <!-- マーケット概要 -->
    <div class="bg-white dark:bg-dark-100 rounded-lg shadow-md p-6">
      <h2 class="text-2xl font-semibold text-neutral-900 dark:text-dark-900 mb-6">マーケット概要</h2>
      
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <!-- マーケットキャップ -->
        <div class="bg-gradient-to-r from-primary-500 to-primary-600 rounded-lg p-6 text-white">
          <div class="flex items-center justify-between">
            <div>
              <p class="text-primary-100 text-sm font-medium">マーケットキャップ</p>
              <p class="text-3xl font-bold">$2.1T</p>
              <p class="text-primary-200 text-sm mt-1">+3.2% 24h</p>
            </div>
            <div class="w-12 h-12 bg-primary-400 rounded-full flex items-center justify-center">
              <span class="text-2xl">🌍</span>
            </div>
          </div>
        </div>

        <!-- 24時間出来高 -->
        <div class="bg-gradient-to-r from-success-500 to-success-600 rounded-lg p-6 text-white">
          <div class="flex items-center justify-between">
            <div>
              <p class="text-success-100 text-sm font-medium">24h出来高</p>
              <p class="text-3xl font-bold">$89B</p>
              <p class="text-success-200 text-sm mt-1">+12.8% 24h</p>
            </div>
            <div class="w-12 h-12 bg-success-400 rounded-full flex items-center justify-center">
              <span class="text-2xl">📊</span>
            </div>
          </div>
        </div>

        <!-- ビットコイン ドミナンス -->
        <div class="bg-gradient-to-r from-warning-500 to-warning-600 rounded-lg p-6 text-white">
          <div class="flex items-center justify-between">
            <div>
              <p class="text-warning-100 text-sm font-medium">BTC ドミナンス</p>
              <p class="text-3xl font-bold">42.8%</p>
              <p class="text-warning-200 text-sm mt-1">-0.5% 24h</p>
            </div>
            <div class="w-12 h-12 bg-warning-400 rounded-full flex items-center justify-center">
              <span class="text-2xl">₿</span>
            </div>
          </div>
        </div>

        <!-- アクティブトレーダー -->
        <div class="bg-gradient-to-r from-info-500 to-info-600 rounded-lg p-6 text-white">
          <div class="flex items-center justify-between">
            <div>
              <p class="text-info-100 text-sm font-medium">アクティブトレーダー</p>
              <p class="text-3xl font-bold">1.2M</p>
              <p class="text-info-200 text-sm mt-1">+5.6% 24h</p>
            </div>
            <div class="w-12 h-12 bg-info-400 rounded-full flex items-center justify-center">
              <span class="text-2xl">👥</span>
            </div>
          </div>
        </div>
      </div>

      <!-- トレンディングコイン -->
      <div>
        <h3 class="font-medium text-neutral-900 dark:text-dark-900 mb-4">🔥 トレンディングコイン</h3>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div class="flex items-center space-x-3 p-3 border border-neutral-200 dark:border-dark-300 rounded-lg hover:border-primary-300 transition-colors">
            <div class="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold">₿</div>
            <div class="flex-1">
              <div class="font-medium text-neutral-900 dark:text-dark-900">Bitcoin</div>
              <div class="text-sm text-neutral-600 dark:text-dark-700">BTC</div>
            </div>
            <div class="text-right">
              <div class="font-bold text-success-600">+8.5%</div>
              <div class="text-sm text-neutral-600 dark:text-dark-700">$67,234</div>
            </div>
          </div>

          <div class="flex items-center space-x-3 p-3 border border-neutral-200 dark:border-dark-300 rounded-lg hover:border-primary-300 transition-colors">
            <div class="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold">Ξ</div>
            <div class="flex-1">
              <div class="font-medium text-neutral-900 dark:text-dark-900">Ethereum</div>
              <div class="text-sm text-neutral-600 dark:text-dark-700">ETH</div>
            </div>
            <div class="text-right">
              <div class="font-bold text-success-600">+12.3%</div>
              <div class="text-sm text-neutral-600 dark:text-dark-700">$3,456</div>
            </div>
          </div>

          <div class="flex items-center space-x-3 p-3 border border-neutral-200 dark:border-dark-300 rounded-lg hover:border-primary-300 transition-colors">
            <div class="w-10 h-10 bg-yellow-500 rounded-full flex items-center justify-center text-white font-bold">⭐</div>
            <div class="flex-1">
              <div class="font-medium text-neutral-900 dark:text-dark-900">Solana</div>
              <div class="text-sm text-neutral-600 dark:text-dark-700">SOL</div>
            </div>
            <div class="text-right">
              <div class="font-bold text-success-600">+25.7%</div>
              <div class="text-sm text-neutral-600 dark:text-dark-700">$198</div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- 価格チャート -->
    <div class="bg-white dark:bg-dark-100 rounded-lg shadow-md p-6">
      <div class="flex items-center justify-between mb-6">
        <h2 class="text-2xl font-semibold text-neutral-900 dark:text-dark-900">価格チャート</h2>
        <div class="flex items-center space-x-4">
          <select class="px-3 py-2 border border-neutral-300 dark:border-dark-400 dark:bg-dark-200 dark:text-dark-900 rounded-md focus:ring-2 focus:ring-primary-500">
            <option>Bitcoin (BTC)</option>
            <option>Ethereum (ETH)</option>
            <option>Solana (SOL)</option>
            <option>Cardano (ADA)</option>
          </select>
          <div class="flex bg-neutral-100 dark:bg-dark-200 rounded-lg p-1">
            <button class="px-3 py-1 bg-primary-500 text-white rounded text-sm">1H</button>
            <button class="px-3 py-1 text-neutral-600 dark:text-dark-700 rounded text-sm hover:bg-neutral-200 dark:hover:bg-dark-300">24H</button>
            <button class="px-3 py-1 text-neutral-600 dark:text-dark-700 rounded text-sm hover:bg-neutral-200 dark:hover:bg-dark-300">7D</button>
            <button class="px-3 py-1 text-neutral-600 dark:text-dark-700 rounded text-sm hover:bg-neutral-200 dark:hover:bg-dark-300">30D</button>
            <button class="px-3 py-1 text-neutral-600 dark:text-dark-700 rounded text-sm hover:bg-neutral-200 dark:hover:bg-dark-300">1Y</button>
          </div>
        </div>
      </div>

      <!-- 現在価格表示 -->
      <div class="flex items-center space-x-6 mb-6">
        <div>
          <div class="text-3xl font-bold text-neutral-900 dark:text-dark-900">$67,234.56</div>
          <div class="flex items-center space-x-2 mt-1">
            <span class="text-success-600 font-medium">+$3,456.78 (+5.43%)</span>
            <span class="text-sm text-neutral-500 dark:text-dark-600">24h</span>
          </div>
        </div>
        <div class="flex items-center space-x-4 text-sm">
          <div>
            <span class="text-neutral-600 dark:text-dark-700">高値: </span>
            <span class="font-medium text-neutral-900 dark:text-dark-900">$68,123</span>
          </div>
          <div>
            <span class="text-neutral-600 dark:text-dark-700">安値: </span>
            <span class="font-medium text-neutral-900 dark:text-dark-900">$65,890</span>
          </div>
          <div>
            <span class="text-neutral-600 dark:text-dark-700">出来高: </span>
            <span class="font-medium text-neutral-900 dark:text-dark-900">$12.4B</span>
          </div>
        </div>
      </div>

      <!-- 簡易チャート -->
      <div class="h-64 bg-neutral-50 dark:bg-dark-200 rounded-lg flex items-end justify-center p-4 relative">
        <!-- 価格線グラフ (SVG風表現) -->
        <div class="absolute inset-4 flex items-end space-x-1">
          <div class="w-2 bg-success-500 rounded-t" style="height: 30%"></div>
          <div class="w-2 bg-success-500 rounded-t" style="height: 45%"></div>
          <div class="w-2 bg-success-500 rounded-t" style="height: 35%"></div>
          <div class="w-2 bg-success-500 rounded-t" style="height: 60%"></div>
          <div class="w-2 bg-success-500 rounded-t" style="height: 55%"></div>
          <div class="w-2 bg-success-500 rounded-t" style="height: 70%"></div>
          <div class="w-2 bg-success-500 rounded-t" style="height: 85%"></div>
          <div class="w-2 bg-success-500 rounded-t" style="height: 80%"></div>
          <div class="w-2 bg-success-500 rounded-t" style="height: 95%"></div>
          <div class="w-2 bg-success-600 rounded-t" style="height: 100%"></div>
        </div>
        <!-- リアルタイム点滅効果 -->
        <div class="absolute top-4 right-4 flex items-center space-x-2">
          <div class="w-2 h-2 bg-success-500 rounded-full animate-pulse"></div>
          <span class="text-sm text-success-600 font-medium">LIVE</span>
        </div>
      </div>
    </div>

    <!-- ウォレット接続 -->
    <div class="bg-white dark:bg-dark-100 rounded-lg shadow-md p-6">
      <h2 class="text-2xl font-semibold text-neutral-900 dark:text-dark-900 mb-6">ウォレット接続</h2>
      
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <!-- MetaMask -->
        <div class="border border-neutral-200 dark:border-dark-300 rounded-lg p-6 hover:border-primary-300 transition-colors cursor-pointer">
          <div class="flex items-center space-x-4 mb-4">
            <div class="w-12 h-12 bg-orange-500 rounded-lg flex items-center justify-center">
              <span class="text-white font-bold text-lg">🦊</span>
            </div>
            <div>
              <h3 class="font-medium text-neutral-900 dark:text-dark-900">MetaMask</h3>
              <p class="text-sm text-neutral-600 dark:text-dark-700">最も人気のブラウザウォレット</p>
            </div>
          </div>
          <button class="w-full bg-orange-500 hover:bg-orange-600 text-white py-2 rounded-md transition-colors">
            MetaMaskに接続
          </button>
        </div>

        <!-- WalletConnect -->
        <div class="border border-neutral-200 dark:border-dark-300 rounded-lg p-6 hover:border-primary-300 transition-colors cursor-pointer">
          <div class="flex items-center space-x-4 mb-4">
            <div class="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center">
              <span class="text-white font-bold text-lg">🔗</span>
            </div>
            <div>
              <h3 class="font-medium text-neutral-900 dark:text-dark-900">WalletConnect</h3>
              <p class="text-sm text-neutral-600 dark:text-dark-700">モバイルウォレット対応</p>
            </div>
          </div>
          <button class="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-md transition-colors">
            WalletConnectで接続
          </button>
        </div>

        <!-- Coinbase Wallet -->
        <div class="border border-neutral-200 dark:border-dark-300 rounded-lg p-6 hover:border-primary-300 transition-colors cursor-pointer">
          <div class="flex items-center space-x-4 mb-4">
            <div class="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
              <span class="text-white font-bold text-lg">🏦</span>
            </div>
            <div>
              <h3 class="font-medium text-neutral-900 dark:text-dark-900">Coinbase Wallet</h3>
              <p class="text-sm text-neutral-600 dark:text-dark-700">セキュアな取引所ウォレット</p>
            </div>
          </div>
          <button class="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-md transition-colors">
            Coinbaseに接続
          </button>
        </div>
      </div>

      <!-- 接続状態表示 -->
      <div class="mt-6 p-4 bg-success-50 dark:bg-success-900 border border-success-200 dark:border-success-700 rounded-lg">
        <div class="flex items-center space-x-3">
          <div class="w-8 h-8 bg-success-500 rounded-full flex items-center justify-center">
            <span class="text-white text-sm">✓</span>
          </div>
          <div>
            <div class="font-medium text-success-800 dark:text-success-200">ウォレット接続済み</div>
            <div class="text-sm text-success-600 dark:text-success-300">0x1234...5678 (MetaMask)</div>
          </div>
          <button class="ml-auto text-success-600 dark:text-success-300 hover:text-success-700 dark:hover:text-success-400 text-sm font-medium">
            切断
          </button>
        </div>
      </div>
    </div>

    <!-- 取引フォーム -->
    <div class="bg-white dark:bg-dark-100 rounded-lg shadow-md p-6">
      <h2 class="text-2xl font-semibold text-neutral-900 dark:text-dark-900 mb-6">スポット取引</h2>
      
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <!-- 買い注文 -->
        <div>
          <div class="flex space-x-2 mb-4">
            <button class="flex-1 py-2 bg-success-500 text-white rounded-md font-medium">買い</button>
            <button class="flex-1 py-2 border border-neutral-300 dark:border-dark-400 text-neutral-600 dark:text-dark-700 rounded-md font-medium hover:bg-neutral-50 dark:hover:bg-dark-200">売り</button>
          </div>

          <div class="space-y-4">
            <div>
              <label class="block text-sm font-medium text-neutral-700 dark:text-dark-800 mb-2">注文タイプ</label>
              <select class="w-full px-3 py-2 border border-neutral-300 dark:border-dark-400 dark:bg-dark-200 dark:text-dark-900 rounded-md focus:ring-2 focus:ring-primary-500">
                <option>成行注文</option>
                <option>指値注文</option>
                <option>逆指値注文</option>
              </select>
            </div>

            <div>
              <label class="block text-sm font-medium text-neutral-700 dark:text-dark-800 mb-2">価格</label>
              <div class="relative">
                <input type="text" value="67,234.56" class="w-full px-3 py-2 pr-12 border border-neutral-300 dark:border-dark-400 dark:bg-dark-200 dark:text-dark-900 rounded-md focus:ring-2 focus:ring-primary-500" />
                <span class="absolute right-3 top-2 text-neutral-500 dark:text-dark-600">USD</span>
              </div>
            </div>

            <div>
              <label class="block text-sm font-medium text-neutral-700 dark:text-dark-800 mb-2">数量</label>
              <div class="relative">
                <input type="text" placeholder="0.00" class="w-full px-3 py-2 pr-12 border border-neutral-300 dark:border-dark-400 dark:bg-dark-200 dark:text-dark-900 rounded-md focus:ring-2 focus:ring-primary-500" />
                <span class="absolute right-3 top-2 text-neutral-500 dark:text-dark-600">BTC</span>
              </div>
              <div class="flex space-x-2 mt-2">
                <button class="px-3 py-1 text-xs border border-neutral-300 dark:border-dark-400 dark:text-dark-700 rounded hover:bg-neutral-50 dark:hover:bg-dark-200">25%</button>
                <button class="px-3 py-1 text-xs border border-neutral-300 dark:border-dark-400 dark:text-dark-700 rounded hover:bg-neutral-50 dark:hover:bg-dark-200">50%</button>
                <button class="px-3 py-1 text-xs border border-neutral-300 dark:border-dark-400 dark:text-dark-700 rounded hover:bg-neutral-50 dark:hover:bg-dark-200">75%</button>
                <button class="px-3 py-1 text-xs border border-neutral-300 dark:border-dark-400 dark:text-dark-700 rounded hover:bg-neutral-50 dark:hover:bg-dark-200">100%</button>
              </div>
            </div>

            <div>
              <label class="block text-sm font-medium text-neutral-700 dark:text-dark-800 mb-2">合計</label>
              <div class="relative">
                <input type="text" value="0.00" class="w-full px-3 py-2 pr-12 border border-neutral-300 dark:border-dark-400 rounded-md bg-neutral-50 dark:bg-dark-300 dark:text-dark-900" readonly />
                <span class="absolute right-3 top-2 text-neutral-500 dark:text-dark-600">USD</span>
              </div>
            </div>

            <!-- 手数料・スリッページ設定 -->
            <div class="border-t border-neutral-200 dark:border-dark-300 pt-4">
              <div class="flex items-center justify-between mb-2">
                <span class="text-sm text-neutral-600 dark:text-dark-700">取引手数料</span>
                <span class="text-sm font-medium text-neutral-900 dark:text-dark-900">0.1% (~$6.72)</span>
              </div>
              <div class="flex items-center justify-between mb-2">
                <span class="text-sm text-neutral-600 dark:text-dark-700">スリッページ許容範囲</span>
                <div class="flex space-x-1">
                  <button class="px-2 py-1 text-xs bg-primary-500 text-white rounded">0.5%</button>
                  <button class="px-2 py-1 text-xs border border-neutral-300 rounded hover:bg-neutral-50">1.0%</button>
                  <button class="px-2 py-1 text-xs border border-neutral-300 rounded hover:bg-neutral-50">3.0%</button>
                </div>
              </div>
            </div>

            <button class="w-full bg-success-500 hover:bg-success-600 text-white py-3 rounded-md font-medium transition-colors">
              BTC を購入
            </button>
          </div>
        </div>

        <!-- オーダーブック -->
        <div>
          <h3 class="font-medium text-neutral-900 dark:text-dark-900 mb-4">オーダーブック</h3>
          
          <div class="space-y-1 mb-4">
            <div class="text-xs text-neutral-500 dark:text-dark-600 grid grid-cols-3 gap-2 px-2">
              <span>価格(USD)</span>
              <span class="text-right">数量(BTC)</span>
              <span class="text-right">合計</span>
            </div>

            <!-- 売り注文 -->
            <div class="space-y-1">
              <div class="grid grid-cols-3 gap-2 px-2 py-1 text-xs hover:bg-error-50 dark:hover:bg-error-900 cursor-pointer">
                <span class="text-error-600 font-medium">67,456.12</span>
                <span class="text-right text-neutral-900 dark:text-dark-900">0.1234</span>
                <span class="text-right text-neutral-900 dark:text-dark-900">$8,325</span>
              </div>
              <div class="grid grid-cols-3 gap-2 px-2 py-1 text-xs hover:bg-error-50 cursor-pointer">
                <span class="text-error-600 font-medium">67,345.67</span>
                <span class="text-right">0.2567</span>
                <span class="text-right">$17,289</span>
              </div>
              <div class="grid grid-cols-3 gap-2 px-2 py-1 text-xs hover:bg-error-50 cursor-pointer">
                <span class="text-error-600 font-medium">67,289.34</span>
                <span class="text-right">0.4521</span>
                <span class="text-right">$30,427</span>
              </div>
            </div>

            <!-- 現在価格 -->
            <div class="flex items-center justify-center py-2 border-y border-neutral-200 dark:border-dark-300">
              <span class="text-lg font-bold text-success-600">67,234.56</span>
              <span class="ml-2 text-sm text-success-600">↗ $67,234.56</span>
            </div>

            <!-- 買い注文 -->
            <div class="space-y-1">
              <div class="grid grid-cols-3 gap-2 px-2 py-1 text-xs hover:bg-success-50 dark:hover:bg-success-900 cursor-pointer">
                <span class="text-success-600 font-medium">67,123.45</span>
                <span class="text-right text-neutral-900 dark:text-dark-900">0.3456</span>
                <span class="text-right text-neutral-900 dark:text-dark-900">$23,189</span>
              </div>
              <div class="grid grid-cols-3 gap-2 px-2 py-1 text-xs hover:bg-success-50 cursor-pointer">
                <span class="text-success-600 font-medium">67,098.21</span>
                <span class="text-right">0.6789</span>
                <span class="text-right">$45,534</span>
              </div>
              <div class="grid grid-cols-3 gap-2 px-2 py-1 text-xs hover:bg-success-50 cursor-pointer">
                <span class="text-success-600 font-medium">67,012.87</span>
                <span class="text-right">1.2345</span>
                <span class="text-right">$82,746</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- ポートフォリオ -->
    <div class="bg-white dark:bg-dark-100 rounded-lg shadow-md p-6">
      <div class="flex items-center justify-between mb-6">
        <h2 class="text-2xl font-semibold text-neutral-900 dark:text-dark-900">ポートフォリオ</h2>
        <div class="flex items-center space-x-4">
          <span class="text-sm text-neutral-600 dark:text-dark-700">総資産価値</span>
          <span class="text-2xl font-bold text-neutral-900 dark:text-dark-900">$125,678.90</span>
          <span class="text-success-600 font-medium">+$12,345 (+10.9%)</span>
        </div>
      </div>

      <!-- 資産配分チャート -->
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
        <div class="lg:col-span-1">
          <h3 class="font-medium text-neutral-900 dark:text-dark-900 mb-4">資産配分</h3>
          <div class="relative w-48 h-48 mx-auto">
            <!-- 簡易円グラフ -->
            <div class="w-full h-full rounded-full border-8 border-neutral-200 relative">
              <div class="absolute inset-0 rounded-full" style="background: conic-gradient(#f59e0b 0deg 144deg, #3b82f6 144deg 216deg, #8b5cf6 216deg 288deg, #10b981 288deg 360deg)"></div>
              <div class="absolute inset-4 bg-white dark:bg-dark-100 rounded-full flex items-center justify-center">
                <div class="text-center">
                  <div class="text-lg font-bold">100%</div>
                  <div class="text-xs text-neutral-600 dark:text-dark-700">配分</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="lg:col-span-2">
          <h3 class="font-medium text-neutral-900 dark:text-dark-900 mb-4">保有資産</h3>
          <div class="space-y-3">
            <div class="flex items-center justify-between p-3 border border-neutral-200 dark:border-dark-300 rounded-lg">
              <div class="flex items-center space-x-3">
                <div class="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center text-white text-sm font-bold">₿</div>
                <div>
                  <div class="font-medium text-neutral-900 dark:text-dark-900">Bitcoin</div>
                  <div class="text-sm text-neutral-600 dark:text-dark-700">1.2345 BTC</div>
                </div>
              </div>
              <div class="text-right">
                <div class="font-bold text-neutral-900 dark:text-dark-900">$82,967.23</div>
                <div class="text-sm text-success-600">+8.5%</div>
              </div>
              <div class="text-right">
                <div class="text-sm text-neutral-600 dark:text-dark-700">66%</div>
              </div>
            </div>

            <div class="flex items-center justify-between p-3 border border-neutral-200 dark:border-dark-300 rounded-lg">
              <div class="flex items-center space-x-3">
                <div class="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white text-sm font-bold">Ξ</div>
                <div>
                  <div class="font-medium text-neutral-900 dark:text-dark-900">Ethereum</div>
                  <div class="text-sm text-neutral-600 dark:text-dark-700">8.7654 ETH</div>
                </div>
              </div>
              <div class="text-right">
                <div class="font-bold text-neutral-900 dark:text-dark-900">$30,289.45</div>
                <div class="text-sm text-success-600">+12.3%</div>
              </div>
              <div class="text-right">
                <div class="text-sm text-neutral-600 dark:text-dark-700">24%</div>
              </div>
            </div>

            <div class="flex items-center justify-between p-3 border border-neutral-200 dark:border-dark-300 rounded-lg">
              <div class="flex items-center space-x-3">
                <div class="w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center text-white text-sm font-bold">⭐</div>
                <div>
                  <div class="font-medium text-neutral-900 dark:text-dark-900">Solana</div>
                  <div class="text-sm text-neutral-600 dark:text-dark-700">65.432 SOL</div>
                </div>
              </div>
              <div class="text-right">
                <div class="font-bold text-neutral-900 dark:text-dark-900">$12,422.22</div>
                <div class="text-sm text-success-600">+25.7%</div>
              </div>
              <div class="text-right">
                <div class="text-sm text-neutral-600 dark:text-dark-700">10%</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- DeFi・ステーキング -->
    <div class="bg-white dark:bg-dark-100 rounded-lg shadow-md p-6">
      <h2 class="text-2xl font-semibold text-neutral-900 dark:text-dark-900 mb-6">DeFi・ステーキング</h2>
      
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <!-- ステーキング -->
        <div>
          <h3 class="font-medium text-neutral-900 dark:text-dark-900 mb-4">ステーキング</h3>
          <div class="space-y-4">
            <div class="border border-neutral-200 dark:border-dark-300 rounded-lg p-4">
              <div class="flex items-center justify-between mb-3">
                <div class="flex items-center space-x-3">
                  <div class="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white text-sm font-bold">Ξ</div>
                  <div>
                    <div class="font-medium text-neutral-900 dark:text-dark-900">Ethereum 2.0</div>
                    <div class="text-sm text-neutral-600 dark:text-dark-700">ETH ステーキング</div>
                  </div>
                </div>
                <div class="text-right">
                  <div class="font-bold text-success-600">4.2% APR</div>
                  <div class="text-sm text-neutral-600 dark:text-dark-700">年利</div>
                </div>
              </div>
              <div class="space-y-2">
                <div class="flex justify-between text-sm">
                  <span class="text-neutral-600 dark:text-dark-700">ステーキング済み</span>
                  <span class="font-medium text-neutral-900 dark:text-dark-900">5.0 ETH</span>
                </div>
                <div class="flex justify-between text-sm">
                  <span class="text-neutral-600 dark:text-dark-700">獲得予想報酬</span>
                  <span class="font-medium text-success-600">0.21 ETH/年</span>
                </div>
                <div class="flex justify-between text-sm">
                  <span class="text-neutral-600 dark:text-dark-700">ロック期間</span>
                  <span class="font-medium text-neutral-900 dark:text-dark-900">制限なし</span>
                </div>
              </div>
              <button class="w-full mt-4 bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-md transition-colors">
                ステーキング開始
              </button>
            </div>

            <div class="border border-neutral-200 dark:border-dark-300 rounded-lg p-4">
              <div class="flex items-center justify-between mb-3">
                <div class="flex items-center space-x-3">
                  <div class="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center text-white text-sm font-bold">●</div>
                  <div>
                    <div class="font-medium text-neutral-900 dark:text-dark-900">Cardano</div>
                    <div class="text-sm text-neutral-600 dark:text-dark-700">ADA ステーキング</div>
                  </div>
                </div>
                <div class="text-right">
                  <div class="font-bold text-success-600">5.5% APR</div>
                  <div class="text-sm text-neutral-600 dark:text-dark-700">年利</div>
                </div>
              </div>
              <button class="w-full bg-purple-500 hover:bg-purple-600 text-white py-2 rounded-md transition-colors">
                ステーキング開始
              </button>
            </div>
          </div>
        </div>

        <!-- 流動性プール -->
        <div>
          <h3 class="font-medium text-neutral-900 dark:text-dark-900 mb-4">流動性プール</h3>
          <div class="space-y-4">
            <div class="border border-neutral-200 dark:border-dark-300 rounded-lg p-4">
              <div class="flex items-center justify-between mb-3">
                <div>
                  <div class="font-medium text-neutral-900 dark:text-dark-900">ETH/USDC</div>
                  <div class="text-sm text-neutral-600 dark:text-dark-700">Uniswap V3</div>
                </div>
                <div class="text-right">
                  <div class="font-bold text-success-600">12.5% APR</div>
                  <div class="text-sm text-neutral-600 dark:text-dark-700">年利</div>
                </div>
              </div>
              <div class="space-y-2">
                <div class="flex justify-between text-sm">
                  <span class="text-neutral-600 dark:text-dark-700">提供済み流動性</span>
                  <span class="font-medium text-neutral-900 dark:text-dark-900">$10,000</span>
                </div>
                <div class="flex justify-between text-sm">
                  <span class="text-neutral-600 dark:text-dark-700">獲得手数料</span>
                  <span class="font-medium text-success-600">$142.30</span>
                </div>
                <div class="flex justify-between text-sm">
                  <span class="text-neutral-600 dark:text-dark-700">IL (非永続的損失)</span>
                  <span class="font-medium text-warning-600">-2.1%</span>
                </div>
              </div>
              <button class="w-full mt-4 bg-pink-500 hover:bg-pink-600 text-white py-2 rounded-md transition-colors">
                流動性を追加
              </button>
            </div>

            <div class="border border-neutral-200 dark:border-dark-300 rounded-lg p-4">
              <div class="flex items-center justify-between mb-3">
                <div>
                  <div class="font-medium text-neutral-900 dark:text-dark-900">BTC/ETH</div>
                  <div class="text-sm text-neutral-600 dark:text-dark-700">SushiSwap</div>
                </div>
                <div class="text-right">
                  <div class="font-bold text-success-600">8.9% APR</div>
                  <div class="text-sm text-neutral-600 dark:text-dark-700">年利</div>
                </div>
              </div>
              <button class="w-full bg-pink-500 hover:bg-pink-600 text-white py-2 rounded-md transition-colors">
                流動性を追加
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- ニュース・アラート -->
    <div class="bg-white dark:bg-dark-100 rounded-lg shadow-md p-6">
      <h2 class="text-2xl font-semibold text-neutral-900 dark:text-dark-900 mb-6">ニュース・アラート</h2>
      
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <!-- 最新ニュース -->
        <div>
          <h3 class="font-medium text-neutral-900 dark:text-dark-900 mb-4">最新ニュース</h3>
          <div class="space-y-4">
            <div class="border border-neutral-200 dark:border-dark-300 rounded-lg p-4 hover:border-primary-300 transition-colors">
              <div class="flex items-start space-x-3">
                <div class="w-2 h-2 bg-error-500 rounded-full mt-2"></div>
                <div class="flex-1">
                  <h4 class="font-medium text-neutral-900 dark:text-dark-900 mb-1">ビットコインが新高値を更新</h4>
                  <p class="text-sm text-neutral-600 dark:text-dark-700 mb-2">
                    機関投資家の大量購入により、ビットコインが史上最高値の$68,000を突破しました...
                  </p>
                  <div class="flex items-center space-x-4 text-xs text-neutral-500 dark:text-dark-600">
                    <span>2時間前</span>
                    <span>CoinDesk</span>
                    <span class="text-error-600">価格影響: 高</span>
                  </div>
                </div>
              </div>
            </div>

            <div class="border border-neutral-200 dark:border-dark-300 rounded-lg p-4 hover:border-primary-300 transition-colors">
              <div class="flex items-start space-x-3">
                <div class="w-2 h-2 bg-warning-500 rounded-full mt-2"></div>
                <div class="flex-1">
                  <h4 class="font-medium text-neutral-900 dark:text-dark-900 mb-1">Fed利上げ決定でクリプト市場が反応</h4>
                  <p class="text-sm text-neutral-600 dark:text-dark-700 mb-2">
                    米連邦準備制度理事会の利上げ決定を受け、暗号通貨市場全体が下落傾向を示しています...
                  </p>
                  <div class="flex items-center space-x-4 text-xs text-neutral-500 dark:text-dark-600">
                    <span>4時間前</span>
                    <span>Reuters</span>
                    <span class="text-warning-600">価格影響: 中</span>
                  </div>
                </div>
              </div>
            </div>

            <div class="border border-neutral-200 dark:border-dark-300 rounded-lg p-4 hover:border-primary-300 transition-colors">
              <div class="flex items-start space-x-3">
                <div class="w-2 h-2 bg-success-500 rounded-full mt-2"></div>
                <div class="flex-1">
                  <h4 class="font-medium text-neutral-900 dark:text-dark-900 mb-1">イーサリアムのアップグレード完了</h4>
                  <p class="text-sm text-neutral-600 dark:text-dark-700 mb-2">
                    イーサリアムの最新アップグレードが正常に完了し、ネットワーク効率が大幅に向上しました...
                  </p>
                  <div class="flex items-center space-x-4 text-xs text-neutral-500 dark:text-dark-600">
                    <span>6時間前</span>
                    <span>CoinTelegraph</span>
                    <span class="text-success-600">価格影響: 低</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- 価格アラート -->
        <div>
          <h3 class="font-medium text-neutral-900 dark:text-dark-900 mb-4">価格アラート設定</h3>
          <div class="space-y-4">
            <!-- アラート作成フォーム -->
            <div class="border border-neutral-200 dark:border-dark-300 rounded-lg p-4">
              <h4 class="font-medium text-neutral-900 dark:text-dark-900 mb-3">新規アラート作成</h4>
              <div class="space-y-3">
                <div>
                  <select class="w-full px-3 py-2 border border-neutral-300 dark:border-dark-400 dark:bg-dark-200 dark:text-dark-900 rounded-md focus:ring-2 focus:ring-primary-500">
                    <option>Bitcoin (BTC)</option>
                    <option>Ethereum (ETH)</option>
                    <option>Solana (SOL)</option>
                  </select>
                </div>
                <div class="grid grid-cols-2 gap-3">
                  <select class="px-3 py-2 border border-neutral-300 dark:border-dark-400 dark:bg-dark-200 dark:text-dark-900 rounded-md focus:ring-2 focus:ring-primary-500">
                    <option>価格が上昇</option>
                    <option>価格が下落</option>
                  </select>
                  <input type="text" placeholder="$65,000" class="px-3 py-2 border border-neutral-300 dark:border-dark-400 dark:bg-dark-200 dark:text-dark-900 rounded-md focus:ring-2 focus:ring-primary-500" />
                </div>
                <button class="w-full bg-primary-500 hover:bg-primary-600 text-white py-2 rounded-md transition-colors">
                  アラートを設定
                </button>
              </div>
            </div>

            <!-- 既存アラート -->
            <div class="space-y-3">
              <div class="flex items-center justify-between p-3 border border-neutral-200 dark:border-dark-300 rounded-lg">
                <div class="flex items-center space-x-3">
                  <div class="w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center text-white text-xs">₿</div>
                  <div>
                    <div class="font-medium text-neutral-900 dark:text-dark-900">BTC > $70,000</div>
                    <div class="text-sm text-neutral-600 dark:text-dark-700">アクティブ</div>
                  </div>
                </div>
                <button class="text-error-600 hover:text-error-700 text-sm">削除</button>
              </div>

              <div class="flex items-center justify-between p-3 border border-neutral-200 dark:border-dark-300 rounded-lg">
                <div class="flex items-center space-x-3">
                  <div class="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs">Ξ</div>
                  <div>
                    <div class="font-medium text-neutral-900 dark:text-dark-900">ETH < $3,000</div>
                    <div class="text-sm text-neutral-600 dark:text-dark-700">アクティブ</div>
                  </div>
                </div>
                <button class="text-error-600 hover:text-error-700 text-sm">削除</button>
              </div>
            </div>

            <!-- ソーシャルセンチメント -->
            <div class="border border-neutral-200 dark:border-dark-300 rounded-lg p-4">
              <h4 class="font-medium text-neutral-900 dark:text-dark-900 mb-3">ソーシャルセンチメント</h4>
              <div class="space-y-3">
                <div class="flex items-center justify-between">
                  <span class="text-sm text-neutral-700 dark:text-dark-800">Bitcoin (BTC)</span>
                  <div class="flex items-center space-x-2">
                    <div class="w-16 h-2 bg-neutral-200 dark:bg-dark-300 rounded-full">
                      <div class="w-12 h-2 bg-success-500 rounded-full"></div>
                    </div>
                    <span class="text-sm text-success-600 font-medium">75%</span>
                  </div>
                </div>
                <div class="flex items-center justify-between">
                  <span class="text-sm text-neutral-700 dark:text-dark-800">Ethereum (ETH)</span>
                  <div class="flex items-center space-x-2">
                    <div class="w-16 h-2 bg-neutral-200 dark:bg-dark-300 rounded-full">
                      <div class="w-10 h-2 bg-warning-500 rounded-full"></div>
                    </div>
                    <span class="text-sm text-warning-600 font-medium">62%</span>
                  </div>
                </div>
                <div class="flex items-center justify-between">
                  <span class="text-sm text-neutral-700 dark:text-dark-800">Solana (SOL)</span>
                  <div class="flex items-center space-x-2">
                    <div class="w-16 h-2 bg-neutral-200 dark:bg-dark-300 rounded-full">
                      <div class="w-14 h-2 bg-success-500 rounded-full"></div>
                    </div>
                    <span class="text-sm text-success-600 font-medium">85%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- NFTマーケットプレイス -->
    <div class="bg-white dark:bg-dark-100 rounded-lg shadow-md p-6">
      <h2 class="text-2xl font-semibold text-neutral-900 dark:text-dark-900 mb-6">NFTマーケットプレイス</h2>
      
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <!-- NFT 1 -->
        <div class="border border-neutral-200 dark:border-dark-300 rounded-lg overflow-hidden hover:shadow-md transition-shadow">
          <div class="aspect-square bg-gradient-to-br from-purple-400 to-pink-500 flex items-center justify-center">
            <span class="text-white text-6xl">🎨</span>
          </div>
          <div class="p-4">
            <h3 class="font-medium text-neutral-900 dark:text-dark-900 mb-2">Crypto Art #1234</h3>
            <p class="text-sm text-neutral-600 dark:text-dark-700 mb-3">Abstract Digital Collection</p>
            <div class="flex items-center justify-between mb-3">
              <div>
                <div class="text-sm text-neutral-600 dark:text-dark-700">現在価格</div>
                <div class="font-bold text-neutral-900 dark:text-dark-900">2.5 ETH</div>
              </div>
              <div class="text-right">
                <div class="text-sm text-neutral-600 dark:text-dark-700">最高入札</div>
                <div class="font-bold text-neutral-900 dark:text-dark-900">2.3 ETH</div>
              </div>
            </div>
            <button class="w-full bg-purple-500 hover:bg-purple-600 text-white py-2 rounded-md transition-colors">
              入札する
            </button>
          </div>
        </div>

        <!-- NFT 2 -->
        <div class="border border-neutral-200 dark:border-dark-300 rounded-lg overflow-hidden hover:shadow-md transition-shadow">
          <div class="aspect-square bg-gradient-to-br from-blue-400 to-green-500 flex items-center justify-center">
            <span class="text-white text-6xl">🌈</span>
          </div>
          <div class="p-4">
            <h3 class="font-medium text-neutral-900 dark:text-dark-900 mb-2">Rainbow Genesis</h3>
            <p class="text-sm text-neutral-600 dark:text-dark-700 mb-3">Unique Color Series</p>
            <div class="flex items-center justify-between mb-3">
              <div>
                <div class="text-sm text-neutral-600 dark:text-dark-700">現在価格</div>
                <div class="font-bold text-neutral-900 dark:text-dark-900">1.8 ETH</div>
              </div>
              <div class="text-right">
                <div class="text-sm text-neutral-600 dark:text-dark-700">最高入札</div>
                <div class="font-bold text-neutral-900 dark:text-dark-900">1.7 ETH</div>
              </div>
            </div>
            <button class="w-full bg-purple-500 hover:bg-purple-600 text-white py-2 rounded-md transition-colors">
              入札する
            </button>
          </div>
        </div>

        <!-- NFT 3 -->
        <div class="border border-neutral-200 dark:border-dark-300 rounded-lg overflow-hidden hover:shadow-md transition-shadow">
          <div class="aspect-square bg-gradient-to-br from-orange-400 to-red-500 flex items-center justify-center">
            <span class="text-white text-6xl">🔥</span>
          </div>
          <div class="p-4">
            <h3 class="font-medium text-neutral-900 dark:text-dark-900 mb-2">Fire Element</h3>
            <p class="text-sm text-neutral-600 dark:text-dark-700 mb-3">Elemental Collection</p>
            <div class="flex items-center justify-between mb-3">
              <div>
                <div class="text-sm text-neutral-600 dark:text-dark-700">現在価格</div>
                <div class="font-bold text-neutral-900 dark:text-dark-900">3.2 ETH</div>
              </div>
              <div class="text-right">
                <div class="text-sm text-neutral-600 dark:text-dark-700">最高入札</div>
                <div class="font-bold text-neutral-900 dark:text-dark-900">3.0 ETH</div>
              </div>
            </div>
            <button class="w-full bg-purple-500 hover:bg-purple-600 text-white py-2 rounded-md transition-colors">
              入札する
            </button>
          </div>
        </div>

        <!-- NFT 4 -->
        <div class="border border-neutral-200 dark:border-dark-300 rounded-lg overflow-hidden hover:shadow-md transition-shadow">
          <div class="aspect-square bg-gradient-to-br from-indigo-400 to-purple-500 flex items-center justify-center">
            <span class="text-white text-6xl">⭐</span>
          </div>
          <div class="p-4">
            <h3 class="font-medium text-neutral-900 dark:text-dark-900 mb-2">Cosmic Star</h3>
            <p class="text-sm text-neutral-600 dark:text-dark-700 mb-3">Space Adventure Series</p>
            <div class="flex items-center justify-between mb-3">
              <div>
                <div class="text-sm text-neutral-600 dark:text-dark-700">現在価格</div>
                <div class="font-bold text-neutral-900 dark:text-dark-900">4.7 ETH</div>
              </div>
              <div class="text-right">
                <div class="text-sm text-neutral-600 dark:text-dark-700">最高入札</div>
                <div class="font-bold text-neutral-900 dark:text-dark-900">4.5 ETH</div>
              </div>
            </div>
            <button class="w-full bg-purple-500 hover:bg-purple-600 text-white py-2 rounded-md transition-colors">
              入札する
            </button>
          </div>
        </div>
      </div>

      <!-- NFT統計 -->
      <div class="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
        <div class="text-center p-4 border border-neutral-200 dark:border-dark-300 rounded-lg">
          <div class="text-2xl font-bold text-neutral-900 dark:text-dark-900">12,456</div>
          <div class="text-sm text-neutral-600 dark:text-dark-700">総NFT数</div>
        </div>
        <div class="text-center p-4 border border-neutral-200 dark:border-dark-300 rounded-lg">
          <div class="text-2xl font-bold text-neutral-900 dark:text-dark-900">3,678 ETH</div>
          <div class="text-sm text-neutral-600 dark:text-dark-700">総取引量</div>
        </div>
        <div class="text-center p-4 border border-neutral-200 dark:border-dark-300 rounded-lg">
          <div class="text-2xl font-bold text-neutral-900 dark:text-dark-900">1,234</div>
          <div class="text-sm text-neutral-600 dark:text-dark-700">アクティブトレーダー</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
// Pure HTML/CSS implementation - no custom components
</script>