<template>
  <div class="space-y-8">
    <!-- ページヘッダー -->
    <div class="text-center">
      <h1 class="text-3xl font-bold text-neutral-900 dark:text-dark-900 mb-4">
        管理画面コンポーネント
      </h1>
      <p class="text-lg text-neutral-600 dark:text-dark-700 max-w-3xl mx-auto">
        管理者向けの高度なコンポーネントライブラリです。
        ダッシュボード、データ管理、ユーザー管理、システム設定など、管理業務に必要な機能を提供します。
      </p>
    </div>

    <!-- ダッシュボード統計カード -->
    <div class="bg-white dark:bg-dark-100 rounded-lg shadow-md p-6">
      <h2 class="text-2xl font-semibold text-neutral-900 dark:text-dark-900 mb-6">ダッシュボード統計</h2>
      
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <!-- 総ユーザー数 -->
        <div class="bg-gradient-to-r from-primary-500 to-primary-600 rounded-lg p-6 text-white">
          <div class="flex items-center justify-between">
            <div>
              <p class="text-primary-100 text-sm font-medium">総ユーザー数</p>
              <p class="text-3xl font-bold">12,543</p>
              <p class="text-primary-200 text-sm mt-1">+5.2% from last month</p>
            </div>
            <div class="w-12 h-12 bg-primary-400 rounded-full flex items-center justify-center">
              <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
              </svg>
            </div>
          </div>
        </div>

        <!-- 今月の売上 -->
        <div class="bg-gradient-to-r from-success-500 to-success-600 rounded-lg p-6 text-white">
          <div class="flex items-center justify-between">
            <div>
              <p class="text-success-100 text-sm font-medium">今月の売上</p>
              <p class="text-3xl font-bold">¥1,234,567</p>
              <p class="text-success-200 text-sm mt-1">+12.8% from last month</p>
            </div>
            <div class="w-12 h-12 bg-success-400 rounded-full flex items-center justify-center">
              <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
              </svg>
            </div>
          </div>
        </div>

        <!-- 新規注文 -->
        <div class="bg-gradient-to-r from-warning-500 to-warning-600 rounded-lg p-6 text-white">
          <div class="flex items-center justify-between">
            <div>
              <p class="text-warning-100 text-sm font-medium">新規注文</p>
              <p class="text-3xl font-bold">89</p>
              <p class="text-warning-200 text-sm mt-1">+2 from yesterday</p>
            </div>
            <div class="w-12 h-12 bg-warning-400 rounded-full flex items-center justify-center">
              <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M7 4V2C7 1.45 7.45 1 8 1S9 1.55 9 2V4H15V2C15 1.45 15.45 1 16 1S17 1.55 17 2V4H20C21.1 4 22 4.9 22 6V20C22 21.1 21.1 22 20 22H4C2.9 22 2 21.1 2 20V6C2 4.9 2.9 4 4 4H7Z"/>
              </svg>
            </div>
          </div>
        </div>

        <!-- システム状態 -->
        <div class="bg-gradient-to-r from-info-500 to-info-600 rounded-lg p-6 text-white">
          <div class="flex items-center justify-between">
            <div>
              <p class="text-info-100 text-sm font-medium">システム稼働率</p>
              <p class="text-3xl font-bold">99.9%</p>
              <p class="text-info-200 text-sm mt-1">Last 30 days</p>
            </div>
            <div class="w-12 h-12 bg-info-400 rounded-full flex items-center justify-center">
              <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z"/>
              </svg>
            </div>
          </div>
        </div>
      </div>

      <!-- 簡易グラフエリア -->
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div class="border border-neutral-200 rounded-lg p-4">
          <h3 class="font-medium text-neutral-900 mb-4">売上推移 (月別)</h3>
          <div class="h-48 bg-neutral-50 rounded flex items-end justify-center space-x-2 p-4">
            <div class="w-8 bg-primary-500 rounded-t" style="height: 60%"></div>
            <div class="w-8 bg-primary-500 rounded-t" style="height: 70%"></div>
            <div class="w-8 bg-primary-500 rounded-t" style="height: 45%"></div>
            <div class="w-8 bg-primary-500 rounded-t" style="height: 80%"></div>
            <div class="w-8 bg-primary-500 rounded-t" style="height: 90%"></div>
            <div class="w-8 bg-primary-600 rounded-t" style="height: 100%"></div>
          </div>
        </div>

        <div class="border border-neutral-200 rounded-lg p-4">
          <h3 class="font-medium text-neutral-900 mb-4">ユーザー登録数 (日別)</h3>
          <div class="h-48 bg-neutral-50 dark:bg-dark-200 rounded flex items-end justify-center space-x-1 p-4">
            <div class="w-4 bg-success-500 rounded-t" style="height: 30%"></div>
            <div class="w-4 bg-success-500 rounded-t" style="height: 50%"></div>
            <div class="w-4 bg-success-500 rounded-t" style="height: 40%"></div>
            <div class="w-4 bg-success-500 rounded-t" style="height: 70%"></div>
            <div class="w-4 bg-success-500 rounded-t" style="height: 60%"></div>
            <div class="w-4 bg-success-500 rounded-t" style="height: 80%"></div>
            <div class="w-4 bg-success-600 rounded-t" style="height: 90%"></div>
          </div>
        </div>
      </div>
    </div>

    <!-- データテーブル（ユーザー管理） -->
    <div class="bg-white dark:bg-dark-100 rounded-lg shadow-md p-6">
      <div class="flex items-center justify-between mb-6">
        <h2 class="text-2xl font-semibold text-neutral-900 dark:text-dark-900">ユーザー管理</h2>
        <div class="flex items-center space-x-4">
          <div class="relative">
            <input 
              type="text" 
              placeholder="ユーザーを検索..." 
              class="pl-10 pr-4 py-2 border border-neutral-300 dark:border-dark-400 dark:bg-dark-200 dark:text-dark-900 rounded-md focus:ring-2 focus:ring-primary-500"
            />
            <svg class="w-4 h-4 text-neutral-400 absolute left-3 top-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
          <select class="px-3 py-2 border border-neutral-300 rounded-md focus:ring-2 focus:ring-primary-500">
            <option>全てのステータス</option>
            <option>アクティブ</option>
            <option>非アクティブ</option>
            <option>保留中</option>
          </select>
          <button class="bg-primary-500 hover:bg-primary-600 text-white px-4 py-2 rounded-md transition-colors">
            新規ユーザー追加
          </button>
        </div>
      </div>

      <!-- テーブルヘッダー -->
      <div class="overflow-x-auto">
        <table class="w-full">
          <thead class="bg-neutral-50 dark:bg-dark-200">
            <tr>
              <th class="px-6 py-3 text-left text-xs font-medium text-neutral-500 dark:text-dark-600 uppercase tracking-wider">
                <input type="checkbox" class="rounded border-neutral-300" />
              </th>
              <th class="px-6 py-3 text-left text-xs font-medium text-neutral-500 dark:text-dark-600 uppercase tracking-wider">
                ユーザー
              </th>
              <th class="px-6 py-3 text-left text-xs font-medium text-neutral-500 dark:text-dark-600 uppercase tracking-wider">
                ステータス
              </th>
              <th class="px-6 py-3 text-left text-xs font-medium text-neutral-500 dark:text-dark-600 uppercase tracking-wider">
                権限
              </th>
              <th class="px-6 py-3 text-left text-xs font-medium text-neutral-500 dark:text-dark-600 uppercase tracking-wider">
                最終ログイン
              </th>
              <th class="px-6 py-3 text-left text-xs font-medium text-neutral-500 dark:text-dark-600 uppercase tracking-wider">
                操作
              </th>
            </tr>
          </thead>
          <tbody class="bg-white dark:bg-dark-100 divide-y divide-neutral-200 dark:divide-dark-300">
            <tr class="hover:bg-neutral-50 dark:hover:bg-dark-200">
              <td class="px-6 py-4 whitespace-nowrap">
                <input type="checkbox" class="rounded border-neutral-300" />
              </td>
              <td class="px-6 py-4 whitespace-nowrap">
                <div class="flex items-center">
                  <img class="h-10 w-10 rounded-full object-cover" src="https://picsum.photos/40/40?random=10" alt="" />
                  <div class="ml-4">
                    <div class="text-sm font-medium text-neutral-900 dark:text-dark-900">田中太郎</div>
                    <div class="text-sm text-neutral-500 dark:text-dark-600">tanaka@example.com</div>
                  </div>
                </div>
              </td>
              <td class="px-6 py-4 whitespace-nowrap">
                <span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-success-100 text-success-800">
                  アクティブ
                </span>
              </td>
              <td class="px-6 py-4 whitespace-nowrap text-sm text-neutral-500 dark:text-dark-600">
                管理者
              </td>
              <td class="px-6 py-4 whitespace-nowrap text-sm text-neutral-500 dark:text-dark-600">
                2024-01-15 14:30
              </td>
              <td class="px-6 py-4 whitespace-nowrap text-sm font-medium">
                <div class="flex space-x-2">
                  <button class="text-primary-600 hover:text-primary-900">編集</button>
                  <button class="text-error-600 hover:text-error-900">削除</button>
                </div>
              </td>
            </tr>

            <tr class="hover:bg-neutral-50 dark:hover:bg-dark-200">
              <td class="px-6 py-4 whitespace-nowrap">
                <input type="checkbox" class="rounded border-neutral-300" />
              </td>
              <td class="px-6 py-4 whitespace-nowrap">
                <div class="flex items-center">
                  <img class="h-10 w-10 rounded-full object-cover" src="https://picsum.photos/40/40?random=11" alt="" />
                  <div class="ml-4">
                    <div class="text-sm font-medium text-neutral-900 dark:text-dark-900">佐藤花子</div>
                    <div class="text-sm text-neutral-500 dark:text-dark-600">sato@example.com</div>
                  </div>
                </div>
              </td>
              <td class="px-6 py-4 whitespace-nowrap">
                <span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-warning-100 text-warning-800">
                  保留中
                </span>
              </td>
              <td class="px-6 py-4 whitespace-nowrap text-sm text-neutral-500 dark:text-dark-600">
                一般ユーザー
              </td>
              <td class="px-6 py-4 whitespace-nowrap text-sm text-neutral-500 dark:text-dark-600">
                2024-01-14 09:15
              </td>
              <td class="px-6 py-4 whitespace-nowrap text-sm font-medium">
                <div class="flex space-x-2">
                  <button class="text-primary-600 hover:text-primary-900">編集</button>
                  <button class="text-error-600 hover:text-error-900">削除</button>
                </div>
              </td>
            </tr>

            <tr class="hover:bg-neutral-50 dark:hover:bg-dark-200">
              <td class="px-6 py-4 whitespace-nowrap">
                <input type="checkbox" class="rounded border-neutral-300" />
              </td>
              <td class="px-6 py-4 whitespace-nowrap">
                <div class="flex items-center">
                  <img class="h-10 w-10 rounded-full object-cover" src="https://picsum.photos/40/40?random=12" alt="" />
                  <div class="ml-4">
                    <div class="text-sm font-medium text-neutral-900 dark:text-dark-900">山田次郎</div>
                    <div class="text-sm text-neutral-500 dark:text-dark-600">yamada@example.com</div>
                  </div>
                </div>
              </td>
              <td class="px-6 py-4 whitespace-nowrap">
                <span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-error-100 text-error-800">
                  非アクティブ
                </span>
              </td>
              <td class="px-6 py-4 whitespace-nowrap text-sm text-neutral-500 dark:text-dark-600">
                一般ユーザー
              </td>
              <td class="px-6 py-4 whitespace-nowrap text-sm text-neutral-500 dark:text-dark-600">
                2024-01-10 16:45
              </td>
              <td class="px-6 py-4 whitespace-nowrap text-sm font-medium">
                <div class="flex space-x-2">
                  <button class="text-primary-600 hover:text-primary-900">編集</button>
                  <button class="text-error-600 hover:text-error-900">削除</button>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <!-- ページネーション -->
      <div class="flex items-center justify-between mt-6 pt-6 border-t border-neutral-200 dark:border-dark-300">
        <div class="text-sm text-neutral-500 dark:text-dark-600">
          101件中 1-10件を表示
        </div>
        <div class="flex space-x-2">
          <button class="px-3 py-1 border border-neutral-300 dark:border-dark-400 dark:text-dark-700 rounded text-sm hover:bg-neutral-50 dark:hover:bg-dark-200 disabled:opacity-50" disabled>
            前へ
          </button>
          <button class="px-3 py-1 bg-primary-500 text-white rounded text-sm">1</button>
          <button class="px-3 py-1 border border-neutral-300 dark:border-dark-400 dark:text-dark-700 rounded text-sm hover:bg-neutral-50 dark:hover:bg-dark-200">2</button>
          <button class="px-3 py-1 border border-neutral-300 dark:border-dark-400 dark:text-dark-700 rounded text-sm hover:bg-neutral-50 dark:hover:bg-dark-200">3</button>
          <span class="px-3 py-1 text-sm text-neutral-500">...</span>
          <button class="px-3 py-1 border border-neutral-300 dark:border-dark-400 dark:text-dark-700 rounded text-sm hover:bg-neutral-50 dark:hover:bg-dark-200">10</button>
          <button class="px-3 py-1 border border-neutral-300 dark:border-dark-400 dark:text-dark-700 rounded text-sm hover:bg-neutral-50 dark:hover:bg-dark-200">
            次へ
          </button>
        </div>
      </div>
    </div>

    <!-- コンテンツ管理 -->
    <div class="bg-white dark:bg-dark-100 rounded-lg shadow-md p-6">
      <div class="flex items-center justify-between mb-6">
        <h2 class="text-2xl font-semibold text-neutral-900 dark:text-dark-900">コンテンツ管理</h2>
        <div class="flex items-center space-x-4">
          <select class="px-3 py-2 border border-neutral-300 rounded-md focus:ring-2 focus:ring-primary-500">
            <option>全てのカテゴリ</option>
            <option>ブログ記事</option>
            <option>ニュース</option>
            <option>お知らせ</option>
          </select>
          <button class="bg-primary-500 hover:bg-primary-600 text-white px-4 py-2 rounded-md transition-colors">
            新規記事作成
          </button>
        </div>
      </div>

      <div class="space-y-4">
        <div class="border border-neutral-200 dark:border-dark-300 rounded-lg p-4 hover:border-primary-300 transition-colors">
          <div class="flex items-start justify-between">
            <div class="flex-1">
              <div class="flex items-center space-x-3 mb-2">
                <h3 class="font-medium text-neutral-900 dark:text-dark-900">新しいプロダクト機能の紹介</h3>
                <span class="px-2 py-1 bg-success-100 text-success-700 rounded text-xs font-medium">公開中</span>
                <span class="px-2 py-1 bg-primary-100 text-primary-700 rounded text-xs font-medium">ブログ</span>
              </div>
              <p class="text-sm text-neutral-600 dark:text-dark-700 mb-3">
                最新のプロダクト機能について詳しく解説した記事です。ユーザビリティの向上と新機能の活用方法について...
              </p>
              <div class="flex items-center space-x-4 text-xs text-neutral-500 dark:text-dark-600">
                <span>作成者: 田中編集長</span>
                <span>作成日: 2024-01-15</span>
                <span>最終更新: 2024-01-15 14:30</span>
                <span>👀 1,234 views</span>
              </div>
            </div>
            <div class="flex items-center space-x-2 ml-4">
              <button class="text-primary-600 hover:text-primary-900 text-sm font-medium">編集</button>
              <button class="text-warning-600 hover:text-warning-900 text-sm font-medium">下書き</button>
              <button class="text-error-600 hover:text-error-900 text-sm font-medium">削除</button>
            </div>
          </div>
        </div>

        <div class="border border-neutral-200 dark:border-dark-300 rounded-lg p-4 hover:border-primary-300 transition-colors">
          <div class="flex items-start justify-between">
            <div class="flex-1">
              <div class="flex items-center space-x-3 mb-2">
                <h3 class="font-medium text-neutral-900 dark:text-dark-900">システムメンテナンスのお知らせ</h3>
                <span class="px-2 py-1 bg-warning-100 text-warning-700 rounded text-xs font-medium">下書き</span>
                <span class="px-2 py-1 bg-warning-100 text-warning-700 rounded text-xs font-medium">お知らせ</span>
              </div>
              <p class="text-sm text-neutral-600 dark:text-dark-700 mb-3">
                定期メンテナンスについてのお知らせです。メンテナンス期間中はサービスの一部が利用できなくなります...
              </p>
              <div class="flex items-center space-x-4 text-xs text-neutral-500 dark:text-dark-600">
                <span>作成者: システム管理者</span>
                <span>作成日: 2024-01-14</span>
                <span>最終更新: 2024-01-14 18:00</span>
                <span>📅 公開予定: 2024-01-16</span>
              </div>
            </div>
            <div class="flex items-center space-x-2 ml-4">
              <button class="text-primary-600 hover:text-primary-900 text-sm font-medium">編集</button>
              <button class="text-success-600 hover:text-success-900 text-sm font-medium">公開</button>
              <button class="text-error-600 hover:text-error-900 text-sm font-medium">削除</button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- システム設定 -->
    <div class="bg-white dark:bg-dark-100 rounded-lg shadow-md p-6">
      <h2 class="text-2xl font-semibold text-neutral-900 dark:text-dark-900 mb-6">システム設定</h2>
      
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <!-- 一般設定 -->
        <div>
          <h3 class="font-medium text-neutral-900 dark:text-dark-900 mb-4">一般設定</h3>
          <div class="space-y-4">
            <div>
              <label class="block text-sm font-medium text-neutral-700 dark:text-dark-800 mb-2">サイト名</label>
              <input type="text" value="Nagatsu Mockup Template" class="w-full px-3 py-2 border border-neutral-300 dark:border-dark-400 dark:bg-dark-200 dark:text-dark-900 rounded-md focus:ring-2 focus:ring-primary-500" />
            </div>
            <div>
              <label class="block text-sm font-medium text-neutral-700 dark:text-dark-800 mb-2">サイト説明</label>
              <textarea rows="3" class="w-full px-3 py-2 border border-neutral-300 dark:border-dark-400 dark:bg-dark-200 dark:text-dark-900 rounded-md focus:ring-2 focus:ring-primary-500">高品質なプロトタイピングテンプレート</textarea>
            </div>
            <div>
              <label class="block text-sm font-medium text-neutral-700 dark:text-dark-800 mb-2">管理者メールアドレス</label>
              <input type="email" value="admin@example.com" class="w-full px-3 py-2 border border-neutral-300 dark:border-dark-400 dark:bg-dark-200 dark:text-dark-900 rounded-md focus:ring-2 focus:ring-primary-500" />
            </div>
          </div>
        </div>

        <!-- セキュリティ設定 -->
        <div>
          <h3 class="font-medium text-neutral-900 dark:text-dark-900 mb-4">セキュリティ設定</h3>
          <div class="space-y-4">
            <div class="flex items-center justify-between">
              <div>
                <p class="font-medium text-neutral-900 dark:text-dark-900">二段階認証</p>
                <p class="text-sm text-neutral-600 dark:text-dark-700">追加のセキュリティ層</p>
              </div>
              <label class="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" class="sr-only peer" checked />
                <div class="w-11 h-6 bg-neutral-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-neutral-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary-600"></div>
              </label>
            </div>
            
            <div class="flex items-center justify-between">
              <div>
                <p class="font-medium text-neutral-900 dark:text-dark-900">自動ログアウト</p>
                <p class="text-sm text-neutral-600 dark:text-dark-700">非アクティブ時の自動ログアウト</p>
              </div>
              <select class="px-3 py-2 border border-neutral-300 dark:border-dark-400 dark:bg-dark-200 dark:text-dark-900 rounded-md focus:ring-2 focus:ring-primary-500">
                <option>30分</option>
                <option>1時間</option>
                <option>2時間</option>
                <option>4時間</option>
              </select>
            </div>

            <div class="flex items-center justify-between">
              <div>
                <p class="font-medium text-neutral-900 dark:text-dark-900">アクセスログ</p>
                <p class="text-sm text-neutral-600 dark:text-dark-700">ユーザーアクセスの記録</p>
              </div>
              <label class="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" class="sr-only peer" checked />
                <div class="w-11 h-6 bg-neutral-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-neutral-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary-600"></div>
              </label>
            </div>
          </div>
        </div>
      </div>

      <div class="flex justify-end space-x-4 mt-8 pt-6 border-t border-neutral-200 dark:border-dark-300">
        <button class="px-4 py-2 border border-neutral-300 dark:border-dark-400 dark:text-dark-700 rounded-md hover:bg-neutral-50 dark:hover:bg-dark-200 transition-colors">
          キャンセル
        </button>
        <button class="px-4 py-2 bg-primary-500 hover:bg-primary-600 text-white rounded-md transition-colors">
          設定を保存
        </button>
      </div>
    </div>

    <!-- ログ・モニタリング -->
    <div class="bg-white dark:bg-dark-100 rounded-lg shadow-md p-6">
      <div class="flex items-center justify-between mb-6">
        <h2 class="text-2xl font-semibold text-neutral-900 dark:text-dark-900">ログ・モニタリング</h2>
        <div class="flex items-center space-x-4">
          <select class="px-3 py-2 border border-neutral-300 rounded-md focus:ring-2 focus:ring-primary-500">
            <option>今日</option>
            <option>昨日</option>
            <option>過去7日間</option>
            <option>過去30日間</option>
          </select>
          <button class="bg-success-500 hover:bg-success-600 text-white px-4 py-2 rounded-md transition-colors">
            ログをエクスポート
          </button>
        </div>
      </div>

      <!-- ログ統計 -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        <div class="border border-neutral-200 dark:border-dark-300 rounded-lg p-4 text-center">
          <div class="text-2xl font-bold text-success-600">1,234</div>
          <div class="text-sm text-neutral-600 dark:text-dark-700">成功リクエスト</div>
        </div>
        <div class="border border-neutral-200 dark:border-dark-300 rounded-lg p-4 text-center">
          <div class="text-2xl font-bold text-warning-600">56</div>
          <div class="text-sm text-neutral-600 dark:text-dark-700">警告</div>
        </div>
        <div class="border border-neutral-200 dark:border-dark-300 rounded-lg p-4 text-center">
          <div class="text-2xl font-bold text-error-600">12</div>
          <div class="text-sm text-neutral-600 dark:text-dark-700">エラー</div>
        </div>
      </div>

      <!-- ログエントリ -->
      <div class="space-y-2">
        <div class="flex items-center space-x-4 p-3 border border-neutral-200 dark:border-dark-300 rounded-lg">
          <div class="w-3 h-3 bg-success-500 rounded-full"></div>
          <div class="flex-1">
            <div class="flex items-center space-x-4">
              <span class="text-sm font-medium text-neutral-900 dark:text-dark-900">USER_LOGIN</span>
              <span class="text-sm text-neutral-600 dark:text-dark-700">田中太郎がログインしました</span>
              <span class="text-xs text-neutral-500 dark:text-dark-600">2024-01-15 14:30:25</span>
            </div>
          </div>
        </div>

        <div class="flex items-center space-x-4 p-3 border border-neutral-200 dark:border-dark-300 rounded-lg">
          <div class="w-3 h-3 bg-warning-500 rounded-full"></div>
          <div class="flex-1">
            <div class="flex items-center space-x-4">
              <span class="text-sm font-medium text-neutral-900 dark:text-dark-900">RATE_LIMIT</span>
              <span class="text-sm text-neutral-600 dark:text-dark-700">IP 192.168.1.100からの過度なリクエスト</span>
              <span class="text-xs text-neutral-500 dark:text-dark-600">2024-01-15 14:28:12</span>
            </div>
          </div>
        </div>

        <div class="flex items-center space-x-4 p-3 border border-neutral-200 dark:border-dark-300 rounded-lg">
          <div class="w-3 h-3 bg-error-500 rounded-full"></div>
          <div class="flex-1">
            <div class="flex items-center space-x-4">
              <span class="text-sm font-medium text-neutral-900 dark:text-dark-900">DATABASE_ERROR</span>
              <span class="text-sm text-neutral-600 dark:text-dark-700">データベース接続に失敗しました</span>
              <span class="text-xs text-neutral-500 dark:text-dark-600">2024-01-15 14:25:08</span>
            </div>
          </div>
        </div>

        <div class="flex items-center space-x-4 p-3 border border-neutral-200 dark:border-dark-300 rounded-lg">
          <div class="w-3 h-3 bg-success-500 rounded-full"></div>
          <div class="flex-1">
            <div class="flex items-center space-x-4">
              <span class="text-sm font-medium text-neutral-900 dark:text-dark-900">DATA_BACKUP</span>
              <span class="text-sm text-neutral-600 dark:text-dark-700">定期バックアップが完了しました</span>
              <span class="text-xs text-neutral-500 dark:text-dark-600">2024-01-15 14:00:00</span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- フォームビルダー -->
    <div class="bg-white dark:bg-dark-100 rounded-lg shadow-md p-6">
      <h2 class="text-2xl font-semibold text-neutral-900 dark:text-dark-900 mb-6">フォームビルダー</h2>
      
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <!-- フィールドライブラリ -->
        <div>
          <h3 class="font-medium text-neutral-900 dark:text-dark-900 mb-4">フィールドライブラリ</h3>
          <div class="space-y-2">
            <div class="p-3 border border-neutral-200 dark:border-dark-300 rounded-lg cursor-move hover:border-primary-300 transition-colors">
              <div class="flex items-center space-x-3">
                <svg class="w-5 h-5 text-neutral-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
                <span class="text-sm font-medium text-neutral-900 dark:text-dark-900">テキスト入力</span>
              </div>
            </div>
            
            <div class="p-3 border border-neutral-200 dark:border-dark-300 rounded-lg cursor-move hover:border-primary-300 transition-colors">
              <div class="flex items-center space-x-3">
                <svg class="w-5 h-5 text-neutral-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                <span class="text-sm font-medium text-neutral-900 dark:text-dark-900">テキストエリア</span>
              </div>
            </div>

            <div class="p-3 border border-neutral-200 dark:border-dark-300 rounded-lg cursor-move hover:border-primary-300 transition-colors">
              <div class="flex items-center space-x-3">
                <svg class="w-5 h-5 text-neutral-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                </svg>
                <span class="text-sm font-medium text-neutral-900 dark:text-dark-900">選択ボックス</span>
              </div>
            </div>

            <div class="p-3 border border-neutral-200 dark:border-dark-300 rounded-lg cursor-move hover:border-primary-300 transition-colors">
              <div class="flex items-center space-x-3">
                <svg class="w-5 h-5 text-neutral-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span class="text-sm font-medium text-neutral-900 dark:text-dark-900">チェックボックス</span>
              </div>
            </div>

            <div class="p-3 border border-neutral-200 dark:border-dark-300 rounded-lg cursor-move hover:border-primary-300 transition-colors">
              <div class="flex items-center space-x-3">
                <svg class="w-5 h-5 text-neutral-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12m-1 0a1 1 0 102 0 1 1 0 10-2 0" />
                </svg>
                <span class="text-sm font-medium text-neutral-900 dark:text-dark-900">ラジオボタン</span>
              </div>
            </div>
          </div>
        </div>

        <!-- フォームプレビュー -->
        <div>
          <h3 class="font-medium text-neutral-900 dark:text-dark-900 mb-4">フォームプレビュー</h3>
          <div class="border-2 border-dashed border-neutral-300 dark:border-dark-400 rounded-lg p-4 min-h-96">
            <div class="space-y-4">
              <div>
                <label class="block text-sm font-medium text-neutral-700 dark:text-dark-800 mb-2">お名前 *</label>
                <input type="text" class="w-full px-3 py-2 border border-neutral-300 dark:border-dark-400 dark:bg-dark-200 dark:text-dark-900 rounded-md focus:ring-2 focus:ring-primary-500" />
              </div>
              
              <div>
                <label class="block text-sm font-medium text-neutral-700 dark:text-dark-800 mb-2">メールアドレス *</label>
                <input type="email" class="w-full px-3 py-2 border border-neutral-300 dark:border-dark-400 dark:bg-dark-200 dark:text-dark-900 rounded-md focus:ring-2 focus:ring-primary-500" />
              </div>

              <div>
                <label class="block text-sm font-medium text-neutral-700 dark:text-dark-800 mb-2">お問い合わせ内容</label>
                <select class="w-full px-3 py-2 border border-neutral-300 dark:border-dark-400 dark:bg-dark-200 dark:text-dark-900 rounded-md focus:ring-2 focus:ring-primary-500">
                  <option>選択してください</option>
                  <option>サービスについて</option>
                  <option>料金について</option>
                  <option>技術的な質問</option>
                  <option>その他</option>
                </select>
              </div>

              <div>
                <label class="block text-sm font-medium text-neutral-700 dark:text-dark-800 mb-2">メッセージ</label>
                <textarea rows="4" class="w-full px-3 py-2 border border-neutral-300 dark:border-dark-400 dark:bg-dark-200 dark:text-dark-900 rounded-md focus:ring-2 focus:ring-primary-500"></textarea>
              </div>

              <div class="flex items-center">
                <input type="checkbox" class="rounded border-neutral-300 mr-2" />
                <span class="text-sm text-neutral-700 dark:text-dark-800">プライバシーポリシーに同意します</span>
              </div>
            </div>
          </div>
        </div>

        <!-- フィールド設定 -->
        <div>
          <h3 class="font-medium text-neutral-900 dark:text-dark-900 mb-4">フィールド設定</h3>
          <div class="space-y-4">
            <div>
              <label class="block text-sm font-medium text-neutral-700 dark:text-dark-800 mb-2">ラベル</label>
              <input type="text" value="お名前" class="w-full px-3 py-2 border border-neutral-300 dark:border-dark-400 dark:bg-dark-200 dark:text-dark-900 rounded-md focus:ring-2 focus:ring-primary-500" />
            </div>

            <div>
              <label class="block text-sm font-medium text-neutral-700 dark:text-dark-800 mb-2">プレースホルダー</label>
              <input type="text" value="名前を入力してください" class="w-full px-3 py-2 border border-neutral-300 dark:border-dark-400 dark:bg-dark-200 dark:text-dark-900 rounded-md focus:ring-2 focus:ring-primary-500" />
            </div>

            <div class="flex items-center">
              <input type="checkbox" class="rounded border-neutral-300 mr-2" checked />
              <span class="text-sm text-neutral-700 dark:text-dark-800">必須フィールド</span>
            </div>

            <div class="flex items-center">
              <input type="checkbox" class="rounded border-neutral-300 mr-2" />
              <span class="text-sm text-neutral-700 dark:text-dark-800">複数行対応</span>
            </div>

            <div>
              <label class="block text-sm font-medium text-neutral-700 dark:text-dark-800 mb-2">バリデーションルール</label>
              <select class="w-full px-3 py-2 border border-neutral-300 rounded-md focus:ring-2 focus:ring-primary-500">
                <option>なし</option>
                <option>メールアドレス</option>
                <option>電話番号</option>
                <option>URL</option>
                <option>数値</option>
                <option>日付</option>
              </select>
            </div>

            <div class="pt-4 space-y-2">
              <button class="w-full bg-primary-500 hover:bg-primary-600 text-white py-2 rounded-md transition-colors">
                フィールドを更新
              </button>
              <button class="w-full border border-error-300 text-error-600 hover:bg-error-50 py-2 rounded-md transition-colors">
                フィールドを削除
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