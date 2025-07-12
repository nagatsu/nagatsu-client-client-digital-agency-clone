<template>
  <div class="space-y-8">
    <!-- ページヘッダー -->
    <div class="text-center">
      <h1 class="text-3xl font-bold text-neutral-900 dark:text-dark-800 mb-4">
        アイコンライブラリ
      </h1>
      <p class="text-lg text-neutral-600 dark:text-dark-600 max-w-3xl mx-auto">
        Heroiconsベースのアイコンセット。モックアップ用に主要なアイコンを表示します。
      </p>
    </div>

    <!-- BaseIcon システム -->
    <div class="bg-white dark:bg-dark-200 rounded-lg shadow-md p-6">
      <h2 class="text-2xl font-semibold text-neutral-900 dark:text-dark-800 mb-6">BaseIcon - 統一アイコンシステム</h2>
      
      <div class="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
        <div>
          <h3 class="text-sm font-medium text-neutral-700 mb-3">サイズバリエーション</h3>
          <div class="flex items-center gap-4">
            <BaseIcon name="home" size="sm" />
            <BaseIcon name="home" size="md" />
            <BaseIcon name="home" size="lg" />
            <BaseIcon name="home" size="xl" />
          </div>
        </div>
        
        <div>
          <h3 class="text-sm font-medium text-neutral-700 mb-3">カラーバリエーション</h3>
          <div class="flex items-center gap-3">
            <BaseIcon name="star" class="text-yellow-500" />
            <BaseIcon name="heart" class="text-red-500" />
            <BaseIcon name="check" class="text-green-500" />
            <BaseIcon name="info" class="text-blue-500" />
          </div>
        </div>
        
        <div>
          <h3 class="text-sm font-medium text-neutral-700 mb-3">タイプバリエーション</h3>
          <div class="flex items-center gap-3">
            <BaseIcon name="shopping-cart" type="outline" />
            <BaseIcon name="shopping-cart" type="solid" />
          </div>
        </div>
        
        <div>
          <h3 class="text-sm font-medium text-neutral-700 mb-3">インタラクティブ</h3>
          <div class="flex items-center gap-3">
            <BaseIcon name="bell" class="hover:text-primary-500 cursor-pointer transition-colors" />
            <BaseIcon name="mail" class="hover:text-primary-500 cursor-pointer transition-colors" />
            <BaseIcon name="settings" class="hover:text-primary-500 cursor-pointer transition-colors" />
          </div>
        </div>
      </div>
      
      <div class="border-t pt-6">
        <h3 class="text-sm font-medium text-neutral-700 mb-4">利用可能なアイコン一覧</h3>
        <div class="space-y-6">
          <!-- ナビゲーション -->
          <div>
            <h4 class="text-sm font-semibold text-neutral-700 mb-3">ナビゲーション</h4>
            <div class="grid grid-cols-6 md:grid-cols-10 lg:grid-cols-12 gap-3">
              <div class="text-center">
                <BaseIcon name="home" size="lg" class="mb-1" />
                <span class="text-xs text-neutral-600">home</span>
              </div>
              <div class="text-center">
                <BaseIcon name="search" size="lg" class="mb-1" />
                <span class="text-xs text-neutral-600">search</span>
              </div>
              <div class="text-center">
                <BaseIcon name="menu" size="lg" class="mb-1" />
                <span class="text-xs text-neutral-600">menu</span>
              </div>
              <div class="text-center">
                <BaseIcon name="arrow-left" size="lg" class="mb-1" />
                <span class="text-xs text-neutral-600">arrow-left</span>
              </div>
              <div class="text-center">
                <BaseIcon name="arrow-right" size="lg" class="mb-1" />
                <span class="text-xs text-neutral-600">arrow-right</span>
              </div>
              <div class="text-center">
                <BaseIcon name="arrow-up" size="lg" class="mb-1" />
                <span class="text-xs text-neutral-600">arrow-up</span>
              </div>
              <div class="text-center">
                <BaseIcon name="arrow-down" size="lg" class="mb-1" />
                <span class="text-xs text-neutral-600">arrow-down</span>
              </div>
              <div class="text-center">
                <BaseIcon name="chevron-left" size="lg" class="mb-1" />
                <span class="text-xs text-neutral-600">chevron-left</span>
              </div>
              <div class="text-center">
                <BaseIcon name="chevron-right" size="lg" class="mb-1" />
                <span class="text-xs text-neutral-600">chevron-right</span>
              </div>
              <div class="text-center">
                <BaseIcon name="chevron-up" size="lg" class="mb-1" />
                <span class="text-xs text-neutral-600">chevron-up</span>
              </div>
              <div class="text-center">
                <BaseIcon name="chevron-down" size="lg" class="mb-1" />
                <span class="text-xs text-neutral-600">chevron-down</span>
              </div>
            </div>
          </div>

          <!-- ユーザー -->
          <div>
            <h4 class="text-sm font-semibold text-neutral-700 mb-3">ユーザー</h4>
            <div class="grid grid-cols-6 md:grid-cols-10 lg:grid-cols-12 gap-3">
              <div class="text-center">
                <BaseIcon name="user" size="lg" class="mb-1" />
                <span class="text-xs text-neutral-600">user</span>
              </div>
              <div class="text-center">
                <BaseIcon name="user-group" size="lg" class="mb-1" />
                <span class="text-xs text-neutral-600">user-group</span>
              </div>
              <div class="text-center">
                <BaseIcon name="user-plus" size="lg" class="mb-1" />
                <span class="text-xs text-neutral-600">user-plus</span>
              </div>
              <div class="text-center">
                <BaseIcon name="user-minus" size="lg" class="mb-1" />
                <span class="text-xs text-neutral-600">user-minus</span>
              </div>
            </div>
          </div>

          <!-- アクション -->
          <div>
            <h4 class="text-sm font-semibold text-neutral-700 mb-3">アクション</h4>
            <div class="grid grid-cols-6 md:grid-cols-10 lg:grid-cols-12 gap-3">
              <div class="text-center">
                <BaseIcon name="settings" size="lg" class="mb-1" />
                <span class="text-xs text-neutral-600">settings</span>
              </div>
              <div class="text-center">
                <BaseIcon name="edit" size="lg" class="mb-1" />
                <span class="text-xs text-neutral-600">edit</span>
              </div>
              <div class="text-center">
                <BaseIcon name="trash" size="lg" class="mb-1" />
                <span class="text-xs text-neutral-600">trash</span>
              </div>
              <div class="text-center">
                <BaseIcon name="plus" size="lg" class="mb-1" />
                <span class="text-xs text-neutral-600">plus</span>
              </div>
              <div class="text-center">
                <BaseIcon name="minus" size="lg" class="mb-1" />
                <span class="text-xs text-neutral-600">minus</span>
              </div>
              <div class="text-center">
                <BaseIcon name="x" size="lg" class="mb-1" />
                <span class="text-xs text-neutral-600">x</span>
              </div>
            </div>
          </div>

          <!-- Eコマース -->
          <div>
            <h4 class="text-sm font-semibold text-neutral-700 mb-3">Eコマース</h4>
            <div class="grid grid-cols-6 md:grid-cols-10 lg:grid-cols-12 gap-3">
              <div class="text-center">
                <BaseIcon name="shopping-cart" size="lg" class="mb-1" />
                <span class="text-xs text-neutral-600">shopping-cart</span>
              </div>
              <div class="text-center">
                <BaseIcon name="shopping-bag" size="lg" class="mb-1" />
                <span class="text-xs text-neutral-600">shopping-bag</span>
              </div>
              <div class="text-center">
                <BaseIcon name="credit-card" size="lg" class="mb-1" />
                <span class="text-xs text-neutral-600">credit-card</span>
              </div>
              <div class="text-center">
                <BaseIcon name="gift" size="lg" class="mb-1" />
                <span class="text-xs text-neutral-600">gift</span>
              </div>
            </div>
          </div>

          <!-- ソーシャル -->
          <div>
            <h4 class="text-sm font-semibold text-neutral-700 mb-3">ソーシャル</h4>
            <div class="grid grid-cols-6 md:grid-cols-10 lg:grid-cols-12 gap-3">
              <div class="text-center">
                <BaseIcon name="heart" size="lg" class="mb-1" />
                <span class="text-xs text-neutral-600">heart</span>
              </div>
              <div class="text-center">
                <BaseIcon name="star" size="lg" class="mb-1" />
                <span class="text-xs text-neutral-600">star</span>
              </div>
              <div class="text-center">
                <BaseIcon name="chat-bubble" size="lg" class="mb-1" />
                <span class="text-xs text-neutral-600">chat-bubble</span>
              </div>
              <div class="text-center">
                <BaseIcon name="share" size="lg" class="mb-1" />
                <span class="text-xs text-neutral-600">share</span>
              </div>
            </div>
          </div>

          <!-- 通知・情報 -->
          <div>
            <h4 class="text-sm font-semibold text-neutral-700 mb-3">通知・情報</h4>
            <div class="grid grid-cols-6 md:grid-cols-10 lg:grid-cols-12 gap-3">
              <div class="text-center">
                <BaseIcon name="bell" size="lg" class="mb-1" />
                <span class="text-xs text-neutral-600">bell</span>
              </div>
              <div class="text-center">
                <BaseIcon name="mail" size="lg" class="mb-1" />
                <span class="text-xs text-neutral-600">mail</span>
              </div>
              <div class="text-center">
                <BaseIcon name="mail-open" size="lg" class="mb-1" />
                <span class="text-xs text-neutral-600">mail-open</span>
              </div>
              <div class="text-center">
                <BaseIcon name="info" size="lg" class="mb-1" />
                <span class="text-xs text-neutral-600">info</span>
              </div>
              <div class="text-center">
                <BaseIcon name="exclamation" size="lg" class="mb-1" />
                <span class="text-xs text-neutral-600">exclamation</span>
              </div>
            </div>
          </div>

          <!-- 時間・日付 -->
          <div>
            <h4 class="text-sm font-semibold text-neutral-700 mb-3">時間・日付</h4>
            <div class="grid grid-cols-6 md:grid-cols-10 lg:grid-cols-12 gap-3">
              <div class="text-center">
                <BaseIcon name="calendar" size="lg" class="mb-1" />
                <span class="text-xs text-neutral-600">calendar</span>
              </div>
              <div class="text-center">
                <BaseIcon name="clock" size="lg" class="mb-1" />
                <span class="text-xs text-neutral-600">clock</span>
              </div>
            </div>
          </div>

          <!-- ファイル・ドキュメント -->
          <div>
            <h4 class="text-sm font-semibold text-neutral-700 mb-3">ファイル・ドキュメント</h4>
            <div class="grid grid-cols-6 md:grid-cols-10 lg:grid-cols-12 gap-3">
              <div class="text-center">
                <BaseIcon name="document" size="lg" class="mb-1" />
                <span class="text-xs text-neutral-600">document</span>
              </div>
              <div class="text-center">
                <BaseIcon name="document-text" size="lg" class="mb-1" />
                <span class="text-xs text-neutral-600">document-text</span>
              </div>
              <div class="text-center">
                <BaseIcon name="folder" size="lg" class="mb-1" />
                <span class="text-xs text-neutral-600">folder</span>
              </div>
              <div class="text-center">
                <BaseIcon name="folder-open" size="lg" class="mb-1" />
                <span class="text-xs text-neutral-600">folder-open</span>
              </div>
              <div class="text-center">
                <BaseIcon name="photo" size="lg" class="mb-1" />
                <span class="text-xs text-neutral-600">photo</span>
              </div>
            </div>
          </div>

          <!-- データ・操作 -->
          <div>
            <h4 class="text-sm font-semibold text-neutral-700 mb-3">データ・操作</h4>
            <div class="grid grid-cols-6 md:grid-cols-10 lg:grid-cols-12 gap-3">
              <div class="text-center">
                <BaseIcon name="download" size="lg" class="mb-1" />
                <span class="text-xs text-neutral-600">download</span>
              </div>
              <div class="text-center">
                <BaseIcon name="upload" size="lg" class="mb-1" />
                <span class="text-xs text-neutral-600">upload</span>
              </div>
              <div class="text-center">
                <BaseIcon name="refresh" size="lg" class="mb-1" />
                <span class="text-xs text-neutral-600">refresh</span>
              </div>
            </div>
          </div>

          <!-- ステータス -->
          <div>
            <h4 class="text-sm font-semibold text-neutral-700 mb-3">ステータス</h4>
            <div class="grid grid-cols-6 md:grid-cols-10 lg:grid-cols-12 gap-3">
              <div class="text-center">
                <BaseIcon name="check" size="lg" class="mb-1" />
                <span class="text-xs text-neutral-600">check</span>
              </div>
              <div class="text-center">
                <BaseIcon name="x-circle" size="lg" class="mb-1" />
                <span class="text-xs text-neutral-600">x-circle</span>
              </div>
              <div class="text-center">
                <BaseIcon name="check-circle" size="lg" class="mb-1" />
                <span class="text-xs text-neutral-600">check-circle</span>
              </div>
              <div class="text-center">
                <BaseIcon name="exclamation-circle" size="lg" class="mb-1" />
                <span class="text-xs text-neutral-600">exclamation-circle</span>
              </div>
            </div>
          </div>

          <!-- その他 -->
          <div>
            <h4 class="text-sm font-semibold text-neutral-700 mb-3">その他</h4>
            <div class="grid grid-cols-6 md:grid-cols-10 lg:grid-cols-12 gap-3">
              <div class="text-center">
                <BaseIcon name="eye" size="lg" class="mb-1" />
                <span class="text-xs text-neutral-600">eye</span>
              </div>
              <div class="text-center">
                <BaseIcon name="eye-slash" size="lg" class="mb-1" />
                <span class="text-xs text-neutral-600">eye-slash</span>
              </div>
              <div class="text-center">
                <BaseIcon name="lock" size="lg" class="mb-1" />
                <span class="text-xs text-neutral-600">lock</span>
              </div>
              <div class="text-center">
                <BaseIcon name="lock-open" size="lg" class="mb-1" />
                <span class="text-xs text-neutral-600">lock-open</span>
              </div>
              <div class="text-center">
                <BaseIcon name="link" size="lg" class="mb-1" />
                <span class="text-xs text-neutral-600">link</span>
              </div>
              <div class="text-center">
                <BaseIcon name="globe" size="lg" class="mb-1" />
                <span class="text-xs text-neutral-600">globe</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script setup>
import BaseIcon from '@/components/base/BaseIcon.vue'
</script>