<template>
  <div class="space-y-8">
    <!-- ページヘッダー -->
    <div class="text-center">
      <h1 class="text-3xl font-bold text-neutral-900 dark:text-dark-900 mb-4">
        メディア向けコンポーネント
      </h1>
      <p class="text-lg text-neutral-600 dark:text-dark-700 max-w-3xl mx-auto">
        ニュースサイト、ブログ、メディアプラットフォーム向けに特化したコンポーネントライブラリです。
        記事表示、メディアプレイヤー、コメントシステムなど、コンテンツ配信に必要な機能を提供します。
      </p>
    </div>

    <!-- ニュース記事リスト -->
    <div class="bg-white dark:bg-dark-100 rounded-lg shadow-md p-6">
      <h2 class="text-2xl font-semibold text-neutral-900 dark:text-dark-900 mb-6">ニュース記事リスト</h2>
      
      <!-- フィルター -->
      <div class="flex flex-wrap gap-4 mb-6">
        <select class="px-3 py-2 border border-neutral-300 dark:border-dark-400 rounded-md focus:ring-2 focus:ring-primary-500 dark:bg-dark-200 dark:text-dark-900">
          <option>すべてのカテゴリ</option>
          <option>政治</option>
          <option>経済</option>
          <option>技術</option>
          <option>スポーツ</option>
          <option>エンターテイメント</option>
        </select>
        <input type="date" class="px-3 py-2 border border-neutral-300 dark:border-dark-400 rounded-md focus:ring-2 focus:ring-primary-500 dark:bg-dark-200 dark:text-dark-900" />
        <input type="text" placeholder="記事を検索..." class="px-3 py-2 border border-neutral-300 dark:border-dark-400 rounded-md focus:ring-2 focus:ring-primary-500 dark:bg-dark-200 dark:text-dark-900" />
      </div>

      <!-- 記事リスト -->
      <div class="space-y-6">
        <!-- メイン記事 -->
        <article class="border-b border-neutral-200 dark:border-dark-300 pb-6">
          <div class="flex flex-col lg:flex-row gap-6">
            <img src="https://picsum.photos/400/250?random=41" alt="メイン記事" class="lg:w-1/3 h-48 lg:h-auto object-cover rounded-lg" />
            <div class="flex-1">
              <div class="flex items-center space-x-2 mb-2">
                <span class="bg-error-100 text-error-700 px-2 py-1 rounded text-sm font-medium">速報</span>
                <span class="bg-primary-100 text-primary-700 px-2 py-1 rounded text-sm font-medium">政治</span>
                <span class="text-sm text-neutral-500 dark:text-dark-600">2024年1月15日 14:30</span>
              </div>
              <h3 class="text-xl font-bold text-neutral-900 dark:text-dark-900 mb-3 hover:text-primary-600 cursor-pointer">
                重要な政治ニュースのヘッドラインがここに表示されます
              </h3>
              <p class="text-neutral-700 dark:text-dark-800 mb-4">
                記事の要約や抜粋がここに表示されます。読者が興味を持つような魅力的な内容を短時間で伝える重要な部分です。続きを読みたくなるような工夫が必要です...
              </p>
              <div class="flex items-center justify-between">
                <div class="flex items-center space-x-4">
                  <div class="flex items-center space-x-2">
                    <div class="w-8 h-8 bg-neutral-300 rounded-full flex items-center justify-center">
                      <span class="text-sm font-medium">田</span>
                    </div>
                    <span class="text-sm text-neutral-600 dark:text-dark-700">田中記者</span>
                  </div>
                  <div class="flex items-center space-x-4 text-sm text-neutral-500 dark:text-dark-600">
                    <span>👀 1,234 views</span>
                    <span>💬 56 comments</span>
                    <span>❤️ 89 likes</span>
                  </div>
                </div>
                <button class="text-primary-600 hover:text-primary-700 font-medium">続きを読む →</button>
              </div>
            </div>
          </div>
        </article>

        <!-- サブ記事 -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <article class="border border-neutral-200 dark:border-dark-300 rounded-lg overflow-hidden hover:shadow-md transition-shadow">
            <img src="https://picsum.photos/300/180?random=42" alt="記事2" class="w-full h-40 object-cover" />
            <div class="p-4">
              <div class="flex items-center space-x-2 mb-2">
                <span class="bg-success-100 text-success-700 px-2 py-1 rounded text-xs font-medium">経済</span>
                <span class="text-xs text-neutral-500 dark:text-dark-600">1時間前</span>
              </div>
              <h4 class="font-semibold text-neutral-900 dark:text-dark-900 mb-2 hover:text-primary-600 cursor-pointer">
                経済関連のニュースタイトル
              </h4>
              <p class="text-sm text-neutral-600 dark:text-dark-700 mb-3">記事の概要がここに表示されます...</p>
              <div class="flex items-center justify-between text-xs text-neutral-500 dark:text-dark-600">
                <span>佐藤記者</span>
                <div class="flex space-x-2">
                  <span>👀 456</span>
                  <span>💬 12</span>
                </div>
              </div>
            </div>
          </article>

          <article class="border border-neutral-200 dark:border-dark-300 rounded-lg overflow-hidden hover:shadow-md transition-shadow">
            <img src="https://picsum.photos/300/180?random=43" alt="記事3" class="w-full h-40 object-cover" />
            <div class="p-4">
              <div class="flex items-center space-x-2 mb-2">
                <span class="bg-info-100 text-info-700 px-2 py-1 rounded text-xs font-medium">技術</span>
                <span class="text-xs text-neutral-500 dark:text-dark-600">3時間前</span>
              </div>
              <h4 class="font-semibold text-neutral-900 dark:text-dark-900 mb-2 hover:text-primary-600 cursor-pointer">
                最新技術動向についての記事
              </h4>
              <p class="text-sm text-neutral-600 dark:text-dark-700 mb-3">新しい技術に関する詳細な分析...</p>
              <div class="flex items-center justify-between text-xs text-neutral-500 dark:text-dark-600">
                <span>山田記者</span>
                <div class="flex space-x-2">
                  <span>👀 789</span>
                  <span>💬 34</span>
                </div>
              </div>
            </div>
          </article>

          <article class="border border-neutral-200 dark:border-dark-300 rounded-lg overflow-hidden hover:shadow-md transition-shadow">
            <img src="https://picsum.photos/300/180?random=44" alt="記事4" class="w-full h-40 object-cover" />
            <div class="p-4">
              <div class="flex items-center space-x-2 mb-2">
                <span class="bg-warning-100 text-warning-700 px-2 py-1 rounded text-xs font-medium">スポーツ</span>
                <span class="text-xs text-neutral-500 dark:text-dark-600">5時間前</span>
              </div>
              <h4 class="font-semibold text-neutral-900 dark:text-dark-900 mb-2 hover:text-primary-600 cursor-pointer">
                スポーツの最新試合結果
              </h4>
              <p class="text-sm text-neutral-600 dark:text-dark-700 mb-3">試合のハイライトと詳細な解説...</p>
              <div class="flex items-center justify-between text-xs text-neutral-500 dark:text-dark-600">
                <span>鈴木記者</span>
                <div class="flex space-x-2">
                  <span>👀 1,024</span>
                  <span>💬 67</span>
                </div>
              </div>
            </div>
          </article>
        </div>
      </div>
    </div>

    <!-- ブログポスト -->
    <div class="bg-white dark:bg-dark-100 rounded-lg shadow-md p-6">
      <h2 class="text-2xl font-semibold text-neutral-900 dark:text-dark-900 mb-6">ブログポスト</h2>
      
      <div class="space-y-8">
        <article class="border-b border-neutral-200 dark:border-dark-300 pb-8">
          <img src="https://picsum.photos/800/300?random=45" alt="ブログ記事" class="w-full h-64 object-cover rounded-lg mb-6" />
          
          <div class="flex items-center space-x-4 mb-4">
            <div class="flex items-center space-x-3">
              <img src="https://picsum.photos/40/40?random=50" alt="著者" class="w-10 h-10 rounded-full object-cover" />
              <div>
                <h4 class="font-medium text-neutral-900 dark:text-dark-900">山田ブロガー</h4>
                <p class="text-sm text-neutral-600 dark:text-dark-700">テクノロジーライター</p>
              </div>
            </div>
            <div class="flex items-center space-x-4 text-sm text-neutral-500 dark:text-dark-600">
              <span>2024年1月15日</span>
              <span>読了時間: 5分</span>
            </div>
          </div>

          <h3 class="text-2xl font-bold text-neutral-900 dark:text-dark-900 mb-4 hover:text-primary-600 cursor-pointer">
            現代のウェブ開発における最新トレンドと将来展望
          </h3>
          
          <div class="flex flex-wrap gap-2 mb-4">
            <span class="bg-primary-100 text-primary-700 px-3 py-1 rounded-full text-sm">#ウェブ開発</span>
            <span class="bg-primary-100 text-primary-700 px-3 py-1 rounded-full text-sm">#JavaScript</span>
            <span class="bg-primary-100 text-primary-700 px-3 py-1 rounded-full text-sm">#React</span>
            <span class="bg-primary-100 text-primary-700 px-3 py-1 rounded-full text-sm">#Vue</span>
          </div>

          <p class="text-neutral-700 dark:text-dark-800 mb-6 leading-relaxed">
            現代のウェブ開発は急速に進化しており、新しいフレームワークやツールが次々と登場しています。
            この記事では、2024年に注目すべき技術トレンドと、それらが開発者にもたらす影響について詳しく解説します。
            フロントエンド、バックエンド、DevOpsの各分野における最新動向を網羅的に紹介...
          </p>

          <div class="flex items-center justify-between">
            <div class="flex items-center space-x-6 text-sm text-neutral-600 dark:text-dark-700">
              <button class="flex items-center space-x-2 hover:text-primary-600">
                <span>❤️</span>
                <span>234 likes</span>
              </button>
              <button class="flex items-center space-x-2 hover:text-primary-600">
                <span>💬</span>
                <span>45 comments</span>
              </button>
              <button class="flex items-center space-x-2 hover:text-primary-600">
                <span>🔗</span>
                <span>Share</span>
              </button>
            </div>
            <button class="bg-primary-500 hover:bg-primary-600 text-white px-4 py-2 rounded-md transition-colors">
              続きを読む
            </button>
          </div>
        </article>
      </div>
    </div>

    <!-- メディアプレイヤー -->
    <div class="bg-white dark:bg-dark-100 rounded-lg shadow-md p-6">
      <h2 class="text-2xl font-semibold text-neutral-900 dark:text-dark-900 mb-6">メディアプレイヤー</h2>
      
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <!-- 動画プレイヤー -->
        <div>
          <h3 class="font-medium text-neutral-900 dark:text-dark-900 mb-4">動画プレイヤー</h3>
          <div class="bg-black rounded-lg overflow-hidden">
            <div class="aspect-video bg-neutral-800 flex items-center justify-center relative">
              <img src="https://picsum.photos/560/315?random=46" alt="動画サムネイル" class="w-full h-full object-cover" />
              <div class="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                <button class="w-16 h-16 bg-white bg-opacity-90 rounded-full flex items-center justify-center hover:bg-opacity-100 transition-opacity">
                  <svg class="w-6 h-6 text-neutral-800 ml-1" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z"/>
                  </svg>
                </button>
              </div>
            </div>
            <div class="bg-neutral-900 text-white p-4">
              <div class="flex items-center justify-between mb-2">
                <h4 class="font-medium">重要なニュース解説動画</h4>
                <span class="text-sm text-neutral-300">12:34</span>
              </div>
              <div class="flex items-center space-x-4">
                <button class="hover:text-primary-400">
                  <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z"/>
                  </svg>
                </button>
                <button class="hover:text-primary-400">
                  <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"/>
                  </svg>
                </button>
                <div class="flex-1 bg-neutral-700 rounded-full h-1">
                  <div class="bg-primary-500 h-1 rounded-full" style="width: 35%"></div>
                </div>
                <button class="hover:text-primary-400">
                  <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z"/>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>

        <!-- 音声プレイヤー -->
        <div>
          <h3 class="font-medium text-neutral-900 dark:text-dark-900 mb-4">音声プレイヤー</h3>
          <div class="space-y-4">
            <div class="border border-neutral-200 dark:border-dark-300 rounded-lg p-4">
              <div class="flex items-center space-x-4">
                <img src="https://picsum.photos/60/60?random=47" alt="ポッドキャスト" class="w-15 h-15 rounded object-cover" />
                <div class="flex-1">
                  <h4 class="font-medium text-neutral-900 dark:text-dark-900">技術トーク #15</h4>
                  <p class="text-sm text-neutral-600 dark:text-dark-700">最新のフロントエンド動向について</p>
                  <div class="flex items-center space-x-2 mt-2">
                    <button class="w-8 h-8 bg-primary-500 rounded-full flex items-center justify-center text-white hover:bg-primary-600">
                      <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z"/>
                      </svg>
                    </button>
                    <div class="flex-1 bg-neutral-200 rounded-full h-2">
                      <div class="bg-primary-500 h-2 rounded-full" style="width: 45%"></div>
                    </div>
                    <span class="text-sm text-neutral-500 dark:text-dark-600">25:47</span>
                  </div>
                </div>
              </div>
            </div>

            <div class="border border-neutral-200 dark:border-dark-300 rounded-lg p-4">
              <div class="flex items-center space-x-4">
                <img src="https://picsum.photos/60/60?random=48" alt="ポッドキャスト" class="w-15 h-15 rounded object-cover" />
                <div class="flex-1">
                  <h4 class="font-medium text-neutral-900 dark:text-dark-900">デザイン思考 #08</h4>
                  <p class="text-sm text-neutral-600 dark:text-dark-700">ユーザーエクスペリエンスの基本</p>
                  <div class="flex items-center space-x-2 mt-2">
                    <button class="w-8 h-8 bg-neutral-300 rounded-full flex items-center justify-center text-neutral-600 hover:bg-neutral-400">
                      <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z"/>
                      </svg>
                    </button>
                    <div class="flex-1 bg-neutral-200 rounded-full h-2">
                      <div class="bg-neutral-400 h-2 rounded-full" style="width: 0%"></div>
                    </div>
                    <span class="text-sm text-neutral-500 dark:text-dark-600">32:15</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- コメントシステム -->
    <div class="bg-white dark:bg-dark-100 rounded-lg shadow-md p-6">
      <h2 class="text-2xl font-semibold text-neutral-900 dark:text-dark-900 mb-6">コメントシステム</h2>
      
      <!-- コメント投稿フォーム -->
      <div class="mb-8 p-4 bg-neutral-50 dark:bg-dark-200 rounded-lg">
        <h3 class="font-medium text-neutral-900 dark:text-dark-900 mb-4">コメントを投稿</h3>
        <div class="space-y-4">
          <textarea rows="3" placeholder="コメントを入力してください..." class="w-full px-3 py-2 border border-neutral-300 dark:border-dark-400 dark:bg-dark-100 dark:text-dark-900 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-primary-500"></textarea>
          <div class="flex items-center justify-between">
            <div class="flex items-center space-x-4 text-sm text-neutral-600">
              <label class="flex items-center">
                <input type="checkbox" class="mr-2" />
                通知を受け取る
              </label>
            </div>
            <button class="bg-primary-500 hover:bg-primary-600 text-white font-medium py-2 px-4 rounded-md transition-colors">
              投稿する
            </button>
          </div>
        </div>
      </div>

      <!-- コメント一覧 -->
      <div class="space-y-6">
        <div class="flex space-x-4">
          <img src="https://picsum.photos/40/40?random=51" alt="ユーザー" class="w-10 h-10 rounded-full object-cover" />
          <div class="flex-1">
            <div class="flex items-center space-x-2 mb-2">
              <h4 class="font-medium text-neutral-900 dark:text-dark-900">田中太郎</h4>
              <span class="text-sm text-neutral-500 dark:text-dark-600">2時間前</span>
            </div>
            <p class="text-neutral-700 dark:text-dark-800 mb-3">
              とても興味深い記事でした。特にフロントエンドの動向については、
              実際の開発現場でも感じている変化と一致していて参考になりました。
            </p>
            <div class="flex items-center space-x-4 text-sm text-neutral-600">
              <button class="hover:text-primary-600">👍 12</button>
              <button class="hover:text-primary-600">👎 1</button>
              <button class="hover:text-primary-600">返信</button>
            </div>
            
            <!-- 返信 -->
            <div class="mt-4 ml-6 pl-4 border-l-2 border-neutral-200 dark:border-dark-300">
              <div class="flex space-x-3">
                <img src="https://picsum.photos/32/32?random=52" alt="ユーザー" class="w-8 h-8 rounded-full object-cover" />
                <div class="flex-1">
                  <div class="flex items-center space-x-2 mb-1">
                    <h5 class="font-medium text-neutral-900 dark:text-dark-900 text-sm">山田花子</h5>
                    <span class="text-xs text-neutral-500 dark:text-dark-600">1時間前</span>
                  </div>
                  <p class="text-sm text-neutral-700 dark:text-dark-800 mb-2">
                    同感です！特にReactの新機能については注目していました。
                  </p>
                  <div class="flex items-center space-x-3 text-xs text-neutral-600">
                    <button class="hover:text-primary-600">👍 5</button>
                    <button class="hover:text-primary-600">返信</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="flex space-x-4">
          <img src="https://picsum.photos/40/40?random=53" alt="ユーザー" class="w-10 h-10 rounded-full object-cover" />
          <div class="flex-1">
            <div class="flex items-center space-x-2 mb-2">
              <h4 class="font-medium text-neutral-900 dark:text-dark-900">佐藤次郎</h4>
              <span class="text-sm text-neutral-500 dark:text-dark-600">3時間前</span>
            </div>
            <p class="text-neutral-700 dark:text-dark-800 mb-3">
              記事の内容は素晴らしいのですが、もう少し具体的な実装例があると
              より理解しやすかったかもしれません。続編を期待しています！
            </p>
            <div class="flex items-center space-x-4 text-sm text-neutral-600">
              <button class="hover:text-primary-600">👍 8</button>
              <button class="hover:text-primary-600">👎 0</button>
              <button class="hover:text-primary-600">返信</button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- ニュースレター登録 -->
    <div class="bg-white dark:bg-dark-100 rounded-lg shadow-md p-6">
      <h2 class="text-2xl font-semibold text-neutral-900 dark:text-dark-900 mb-6">ニュースレター登録</h2>
      
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div>
          <h3 class="font-medium text-neutral-900 dark:text-dark-900 mb-4">最新情報をお届け</h3>
          <p class="text-neutral-600 dark:text-dark-700 mb-6">
            技術トレンド、業界ニュース、専門記事などの最新情報を週1回メールでお届けします。
            購読は無料で、いつでも配信停止できます。
          </p>
          
          <form class="space-y-4">
            <div>
              <label class="block text-sm font-medium text-neutral-700 dark:text-dark-800 mb-2">メールアドレス</label>
              <input type="email" placeholder="your@email.com" class="w-full px-3 py-2 border border-neutral-300 dark:border-dark-400 dark:bg-dark-200 dark:text-dark-900 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-primary-500" />
            </div>
            <div>
              <label class="block text-sm font-medium text-neutral-700 dark:text-dark-800 mb-2">興味のあるトピック</label>
              <div class="space-y-2">
                <label class="flex items-center">
                  <input type="checkbox" class="mr-2" checked />
                  <span class="text-sm text-neutral-700 dark:text-dark-800">技術トレンド</span>
                </label>
                <label class="flex items-center">
                  <input type="checkbox" class="mr-2" />
                  <span class="text-sm text-neutral-700 dark:text-dark-800">業界ニュース</span>
                </label>
                <label class="flex items-center">
                  <input type="checkbox" class="mr-2" />
                  <span class="text-sm text-neutral-700 dark:text-dark-800">チュートリアル</span>
                </label>
                <label class="flex items-center">
                  <input type="checkbox" class="mr-2" />
                  <span class="text-sm text-neutral-700 dark:text-dark-800">イベント情報</span>
                </label>
              </div>
            </div>
            <button type="submit" class="w-full bg-primary-500 hover:bg-primary-600 text-white font-medium py-2 rounded-md transition-colors">
              登録する
            </button>
          </form>
        </div>

        <div>
          <h3 class="font-medium text-neutral-900 dark:text-dark-900 mb-4">ソーシャルメディア</h3>
          <p class="text-neutral-600 dark:text-dark-700 mb-6">
            各プラットフォームでも最新情報を配信しています。フォローしてお見逃しなく！
          </p>
          
          <div class="space-y-3">
            <div class="flex items-center justify-between p-3 border border-neutral-200 dark:border-dark-300 rounded-lg hover:border-primary-300 transition-colors">
              <div class="flex items-center space-x-3">
                <div class="w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center">
                  <span class="text-white font-bold">T</span>
                </div>
                <div>
                  <h4 class="font-medium text-neutral-900 dark:text-dark-900">Twitter</h4>
                  <p class="text-sm text-neutral-600 dark:text-dark-700">@tech_media_jp</p>
                </div>
              </div>
              <button class="bg-blue-500 text-white px-4 py-2 rounded text-sm hover:bg-blue-600 transition-colors">
                フォロー
              </button>
            </div>

            <div class="flex items-center justify-between p-3 border border-neutral-200 dark:border-dark-300 rounded-lg hover:border-primary-300 transition-colors">
              <div class="flex items-center space-x-3">
                <div class="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                  <span class="text-white font-bold">f</span>
                </div>
                <div>
                  <h4 class="font-medium text-neutral-900 dark:text-dark-900">Facebook</h4>
                  <p class="text-sm text-neutral-600 dark:text-dark-700">TechMediaJP</p>
                </div>
              </div>
              <button class="bg-blue-600 text-white px-4 py-2 rounded text-sm hover:bg-blue-700 transition-colors">
                いいね
              </button>
            </div>

            <div class="flex items-center justify-between p-3 border border-neutral-200 dark:border-dark-300 rounded-lg hover:border-primary-300 transition-colors">
              <div class="flex items-center space-x-3">
                <div class="w-10 h-10 bg-red-500 rounded-lg flex items-center justify-center">
                  <span class="text-white font-bold">Y</span>
                </div>
                <div>
                  <h4 class="font-medium text-neutral-900 dark:text-dark-900">YouTube</h4>
                  <p class="text-sm text-neutral-600 dark:text-dark-700">TechMediaChannel</p>
                </div>
              </div>
              <button class="bg-red-500 text-white px-4 py-2 rounded text-sm hover:bg-red-600 transition-colors">
                登録
              </button>
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