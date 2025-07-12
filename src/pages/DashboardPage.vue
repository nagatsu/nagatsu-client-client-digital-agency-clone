<template>
  <div class="space-y-8">
    <!-- ヘッダー -->
    <div class="flex justify-between items-center">
      <div>
        <h1 class="text-heading-1 font-bold text-neutral-900">
          ダッシュボード
        </h1>
        <p class="text-heading-6 text-neutral-600 mt-2">
          おかえりなさい、{{ appStore.user?.name || 'ゲスト' }}さん
        </p>
      </div>
      <div class="flex space-x-4">
        <BaseButton variant="outline" @click="refreshData">
          更新
        </BaseButton>
        <BaseButton variant="primary" @click="createNew">
          新規作成
        </BaseButton>
      </div>
    </div>
    
    <!-- 統計カード -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      <BaseCard v-for="stat in stats" :key="stat.title" class="text-center">
        <div class="mb-4">
          <div :class="stat.iconClass" class="h-12 w-12 rounded-lg flex items-center justify-center mx-auto mb-3">
            <component :is="stat.icon" class="h-6 w-6 text-white" />
          </div>
          <h3 class="text-heading-3 font-bold text-neutral-900">{{ stat.value }}</h3>
          <p class="text-body-sm text-neutral-600">{{ stat.title }}</p>
        </div>
        <div class="flex items-center justify-center text-body-xs">
          <span :class="stat.changeClass">{{ stat.change }}</span>
          <span class="text-neutral-500 ml-1">前月比</span>
        </div>
      </BaseCard>
    </div>
    
    <!-- コンテンツエリア -->
    <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
      <!-- メインコンテンツ -->
      <div class="lg:col-span-2 space-y-6">
        <!-- 最近のアクティビティ -->
        <BaseCard>
          <div class="flex items-center justify-between mb-6">
            <h3 class="text-heading-4 font-semibold text-neutral-900">最近のアクティビティ</h3>
            <BaseButton size="sm" variant="ghost">すべて見る</BaseButton>
          </div>
          <div class="space-y-4">
            <div v-for="activity in activities" :key="activity.id" class="flex items-start space-x-4 p-4 rounded-lg bg-neutral-50">
              <div :class="activity.iconClass" class="h-10 w-10 rounded-full flex items-center justify-center flex-shrink-0">
                <component :is="activity.icon" class="h-5 w-5 text-white" />
              </div>
              <div class="flex-1 min-w-0">
                <p class="text-body-regular text-neutral-900">{{ activity.title }}</p>
                <p class="text-body-sm text-neutral-600">{{ activity.description }}</p>
                <p class="text-body-xs text-neutral-500 mt-1">{{ activity.time }}</p>
              </div>
              <BaseBadge :text="activity.status" :variant="activity.statusVariant" size="sm" />
            </div>
          </div>
        </BaseCard>
        
        <!-- プロジェクト一覧 -->
        <BaseCard>
          <div class="flex items-center justify-between mb-6">
            <h3 class="text-heading-4 font-semibold text-neutral-900">プロジェクト</h3>
            <BaseButton size="sm" variant="primary">新規プロジェクト</BaseButton>
          </div>
          <div class="space-y-4">
            <div v-for="project in projects" :key="project.id" class="border border-neutral-200 rounded-lg p-4 hover:border-primary-300 transition-colors">
              <div class="flex items-start justify-between">
                <div class="flex-1">
                  <h4 class="text-heading-6 font-semibold text-neutral-900 mb-2">{{ project.name }}</h4>
                  <p class="text-body-sm text-neutral-600 mb-3">{{ project.description }}</p>
                  <div class="flex items-center space-x-4 text-body-xs text-neutral-500">
                    <span>進捗率: {{ project.progress }}%</span>
                    <span>期限: {{ project.deadline }}</span>
                    <span>メンバー: {{ project.members }}人</span>
                  </div>
                </div>
                <div class="flex flex-col items-end space-y-2">
                  <BaseBadge :text="project.status" :variant="project.statusVariant" />
                  <div class="flex space-x-2">
                    <BaseButton size="xs" variant="ghost">編集</BaseButton>
                    <BaseButton size="xs" variant="ghost">詳細</BaseButton>
                  </div>
                </div>
              </div>
              <div class="mt-4">
                <div class="w-full bg-neutral-200 rounded-full h-2">
                  <div 
                    class="bg-primary-500 h-2 rounded-full transition-all duration-300" 
                    :style="{ width: project.progress + '%' }"
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </BaseCard>
      </div>
      
      <!-- サイドバー -->
      <div class="space-y-6">
        <!-- クイックアクション -->
        <BaseCard>
          <h3 class="text-heading-5 font-semibold text-neutral-900 mb-4">クイックアクション</h3>
          <div class="space-y-3">
            <BaseButton 
              v-for="action in quickActions" 
              :key="action.label"
              :variant="action.variant" 
              size="sm" 
              class="w-full justify-start"
              @click="action.action"
            >
              <component :is="action.icon" class="h-4 w-4 mr-2" />
              {{ action.label }}
            </BaseButton>
          </div>
        </BaseCard>
        
        <!-- 通知 -->
        <BaseCard>
          <h3 class="text-heading-5 font-semibold text-neutral-900 mb-4">通知</h3>
          <div class="space-y-3">
            <div v-for="notification in notifications" :key="notification.id" class="p-3 border border-neutral-200 rounded-lg">
              <div class="flex items-start space-x-3">
                <div :class="notification.iconClass" class="h-8 w-8 rounded-full flex items-center justify-center flex-shrink-0">
                  <component :is="notification.icon" class="h-4 w-4 text-white" />
                </div>
                <div class="flex-1 min-w-0">
                  <p class="text-body-sm font-medium text-neutral-900">{{ notification.title }}</p>
                  <p class="text-body-xs text-neutral-600">{{ notification.message }}</p>
                  <p class="text-body-xs text-neutral-500 mt-1">{{ notification.time }}</p>
                </div>
              </div>
            </div>
          </div>
        </BaseCard>
        
        <!-- カレンダー -->
        <BaseCard>
          <h3 class="text-heading-5 font-semibold text-neutral-900 mb-4">今日のスケジュール</h3>
          <div class="space-y-3">
            <div v-for="event in todayEvents" :key="event.id" class="flex items-center space-x-3 p-2 rounded bg-neutral-50">
              <div class="w-3 h-3 rounded-full" :class="event.color"></div>
              <div class="flex-1">
                <p class="text-body-sm font-medium text-neutral-900">{{ event.title }}</p>
                <p class="text-body-xs text-neutral-600">{{ event.time }}</p>
              </div>
            </div>
          </div>
        </BaseCard>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useAppStore } from '@/stores/app'
import BaseCard from '@/components/base/BaseCard.vue'
import BaseButton from '@/components/base/BaseButton.vue'
import BaseBadge from '@/components/base/BaseBadge.vue'

const appStore = useAppStore()

// 統計データ
const stats = ref([
  {
    title: '総プロジェクト数',
    value: '24',
    change: '+12%',
    changeClass: 'text-success-600',
    iconClass: 'bg-primary-500',
    icon: {
      template: `<svg fill="currentColor" viewBox="0 0 20 20">
        <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zm0 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V8zm0 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1v-2z" />
      </svg>`
    }
  },
  {
    title: 'アクティブユーザー',
    value: '1,234',
    change: '+5%',
    changeClass: 'text-success-600',
    iconClass: 'bg-success-500',
    icon: {
      template: `<svg fill="currentColor" viewBox="0 0 20 20">
        <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
      </svg>`
    }
  },
  {
    title: '今月の売上',
    value: '¥12.5M',
    change: '+8%',
    changeClass: 'text-success-600',
    iconClass: 'bg-warning-500',
    icon: {
      template: `<svg fill="currentColor" viewBox="0 0 20 20">
        <path d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z" />
        <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z" clip-rule="evenodd" />
      </svg>`
    }
  },
  {
    title: 'タスク完了率',
    value: '89%',
    change: '-2%',
    changeClass: 'text-error-600',
    iconClass: 'bg-info-500',
    icon: {
      template: `<svg fill="currentColor" viewBox="0 0 20 20">
        <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
      </svg>`
    }
  }
])

// アクティビティデータ
const activities = ref([
  {
    id: 1,
    title: '新しいプロジェクトが作成されました',
    description: 'AIチャットボットプロジェクトが開始されました',
    time: '2時間前',
    status: '新規',
    statusVariant: 'success',
    iconClass: 'bg-primary-500',
    icon: {
      template: `<svg fill="currentColor" viewBox="0 0 20 20">
        <path fill-rule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clip-rule="evenodd" />
      </svg>`
    }
  },
  {
    id: 2,
    title: 'タスクが完了しました',
    description: 'デザインシステムのアップデートが完了',
    time: '4時間前',
    status: '完了',
    statusVariant: 'success',
    iconClass: 'bg-success-500',
    icon: {
      template: `<svg fill="currentColor" viewBox="0 0 20 20">
        <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
      </svg>`
    }
  },
  {
    id: 3,
    title: 'チームメンバーが参加しました',
    description: '新しいデベロッパーがチームに加わりました',
    time: '1日前',
    status: '更新',
    statusVariant: 'info',
    iconClass: 'bg-info-500',
    icon: {
      template: `<svg fill="currentColor" viewBox="0 0 20 20">
        <path d="M8 9a3 3 0 100-6 3 3 0 000 6zM8 11a6 6 0 016 6H2a6 6 0 016-6zM16 7a1 1 0 10-2 0v1h-1a1 1 0 100 2h1v1a1 1 0 102 0v-1h1a1 1 0 100-2h-1V7z" />
      </svg>`
    }
  }
])

// プロジェクトデータ
const projects = ref([
  {
    id: 1,
    name: 'AIチャットボット',
    description: '高性能なAIチャットボットシステムの開発',
    progress: 75,
    deadline: '2024/12/31',
    members: 5,
    status: '進行中',
    statusVariant: 'primary'
  },
  {
    id: 2,
    name: 'モバイルアプリ',
    description: 'クロスプラットフォームモバイルアプリの開発',
    progress: 45,
    deadline: '2025/02/15',
    members: 3,
    status: '遅延',
    statusVariant: 'warning'
  },
  {
    id: 3,
    name: 'データ分析ツール',
    description: 'リアルタイムデータ分析ダッシュボード',
    progress: 90,
    deadline: '2024/11/30',
    members: 2,
    status: 'ほぼ完成',
    statusVariant: 'success'
  }
])

// クイックアクション
const quickActions = ref([
  {
    label: '新しいプロジェクト',
    variant: 'primary',
    icon: {
      template: `<svg fill="currentColor" viewBox="0 0 20 20">
        <path fill-rule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clip-rule="evenodd" />
      </svg>`
    },
    action: () => createNew()
  },
  {
    label: 'チームを招待',
    variant: 'outline',
    icon: {
      template: `<svg fill="currentColor" viewBox="0 0 20 20">
        <path d="M8 9a3 3 0 100-6 3 3 0 000 6zM8 11a6 6 0 016 6H2a6 6 0 016-6zM16 7a1 1 0 10-2 0v1h-1a1 1 0 100 2h1v1a1 1 0 102 0v-1h1a1 1 0 100-2h-1V7z" />
      </svg>`
    },
    action: () => inviteTeam()
  },
  {
    label: 'レポートを作成',
    variant: 'outline',
    icon: {
      template: `<svg fill="currentColor" viewBox="0 0 20 20">
        <path fill-rule="evenodd" d="M4 4a2 2 0 012-2h8a2 2 0 012 2v12a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 0v12h8V4H6z" clip-rule="evenodd" />
      </svg>`
    },
    action: () => createReport()
  },
  {
    label: '設定',
    variant: 'ghost',
    icon: {
      template: `<svg fill="currentColor" viewBox="0 0 20 20">
        <path fill-rule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clip-rule="evenodd" />
      </svg>`
    },
    action: () => openSettings()
  }
])

// 通知データ
const notifications = ref([
  {
    id: 1,
    title: 'システムメンテナンス',
    message: '今夜23:00-24:00にメンテナンスを実施します',
    time: '30分前',
    iconClass: 'bg-warning-500',
    icon: {
      template: `<svg fill="currentColor" viewBox="0 0 20 20">
        <path fill-rule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clip-rule="evenodd" />
      </svg>`
    }
  },
  {
    id: 2,
    title: 'バックアップ完了',
    message: 'データベースのバックアップが正常に完了しました',
    time: '2時間前',
    iconClass: 'bg-success-500',
    icon: {
      template: `<svg fill="currentColor" viewBox="0 0 20 20">
        <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
      </svg>`
    }
  }
])

// 今日のイベント
const todayEvents = ref([
  {
    id: 1,
    title: 'チームミーティング',
    time: '10:00-11:00',
    color: 'bg-primary-500'
  },
  {
    id: 2,
    title: 'プロジェクトレビュー',
    time: '14:00-15:30',
    color: 'bg-success-500'
  },
  {
    id: 3,
    title: 'クライアントプレゼン',
    time: '16:00-17:00',
    color: 'bg-warning-500'
  }
])

// アクション関数
const refreshData = () => {
  appStore.addNotification({
    type: 'info',
    title: 'データを更新中',
    message: '最新のデータを取得しています...',
    duration: 3000
  })
}

const createNew = () => {
  appStore.addNotification({
    type: 'success',
    title: '新規作成',
    message: '新しいプロジェクトの作成を開始します。'
  })
}

const inviteTeam = () => {
  appStore.addNotification({
    type: 'info',
    title: 'チーム招待',
    message: 'チームメンバーの招待メールを送信しました。'
  })
}

const createReport = () => {
  appStore.addNotification({
    type: 'info',
    title: 'レポート作成',
    message: 'レポートの作成を開始します。'
  })
}

const openSettings = () => {
  appStore.addNotification({
    type: 'info',
    title: '設定',
    message: '設定ページを開きます。'
  })
}
</script>