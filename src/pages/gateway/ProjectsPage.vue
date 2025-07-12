<template>
  <div class="min-h-screen bg-neutral-50">
    <!-- ヘッダー -->
    <section class="bg-white border-b">
      <div class="container mx-auto px-4 py-12">
        <div class="max-w-4xl mx-auto text-center">
          <h2
            level="1"
            class="text-4xl font-bold mb-4"
          >
            プロジェクト一覧
          </h2>
          <p
            size="lg"
            class="text-neutral-600 mb-8 max-w-2xl mx-auto"
          >
            Model-Aデザインシステムを活用した実際のプロジェクト事例<br>
            営業ディレクターが翌日にお客さんをビビらせる品質のモックアップ
          </p>
        </div>
      </div>
    </section>

    <!-- フィルター -->
    <section class="py-8 bg-white border-b">
      <div class="container mx-auto px-4">
        <div class="max-w-6xl mx-auto">
          <div class="flex flex-wrap gap-4 items-center justify-between">
            <div class="flex flex-wrap gap-2">
              <BaseButton
                v-for="filter in filters"
                :key="filter.id"
                :variant="activeFilter === filter.id ? 'primary' : 'outline'"
                size="sm"
                @click="setActiveFilter(filter.id)"
              >
                {{ filter.name }}
                <BaseBadge
                  v-if="filter.count"
                  variant="secondary"
                  size="sm"
                  class="ml-2"
                >
                  {{ filter.count }}
                </BaseBadge>
              </BaseButton>
            </div>
            <div class="flex items-center gap-4">
              <BaseButton
                variant="primary"
                size="sm"
                @click="createNewProject"
              >
                新規プロジェクト作成
              </BaseButton>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- プロジェクト一覧 -->
    <section class="py-16">
      <div class="container mx-auto px-4">
        <div class="max-w-6xl mx-auto">
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <BaseCard
              v-for="project in filteredProjects"
              :key="project.id"
              class="overflow-hidden hover:shadow-lg transition-shadow"
            >
              <!-- プロジェクト画像 -->
              <div class="aspect-video bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center relative">
                <BaseBadge
                  :variant="getStatusVariant(project.status)"
                  class="absolute top-4 right-4"
                >
                  {{ getStatusText(project.status) }}
                </BaseBadge>
                <div class="text-center">
                  <div class="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4">
                    <span class="text-2xl">{{ project.icon }}</span>
                  </div>
                  <p class="text-sm text-neutral-600">
                    {{ project.type }}
                  </p>
                </div>
              </div>

              <!-- プロジェクト情報 -->
              <div class="p-6">
                <div class="flex items-start justify-between mb-4">
                  <div>
                    <h2 level="3" class="text-lg font-bold mb-1">
                      {{ project.title }}
                    </h2>
                    <p class="text-sm text-neutral-600">
                      {{ project.client }}
                    </p>
                  </div>
                  <div class="flex items-center gap-2">
                    <BaseBadge
                      variant="info"
                      size="sm"
                    >
                      {{ project.components }}個
                    </BaseBadge>
                  </div>
                </div>

                <p class="text-neutral-600 mb-4 text-sm">
                  {{ project.description }}
                </p>

                <!-- 技術スタック -->
                <div class="mb-4">
                  <p class="text-xs text-neutral-500 mb-2">
                    技術スタック
                  </p>
                  <div class="flex flex-wrap gap-1">
                    <BaseBadge
                      v-for="tech in project.techStack"
                      :key="tech"
                      variant="neutral"
                      size="xs"
                    >
                      {{ tech }}
                    </BaseBadge>
                  </div>
                </div>

                <!-- メトリクス -->
                <div class="grid grid-cols-3 gap-4 mb-6 py-3 border-t border-neutral-100">
                  <div class="text-center">
                    <div class="text-lg font-bold text-green-600">
                      {{ project.metrics.quality }}
                    </div>
                    <p class="text-xs text-neutral-500">
                      品質スコア
                    </p>
                  </div>
                  <div class="text-center">
                    <div class="text-lg font-bold text-blue-600">
                      {{ project.metrics.speed }}
                    </div>
                    <p class="text-xs text-neutral-500">
                      開発速度
                    </p>
                  </div>
                  <div class="text-center">
                    <div class="text-lg font-bold text-purple-600">
                      {{ project.metrics.deployment }}
                    </div>
                    <p class="text-xs text-neutral-500">
                      デプロイ時間
                    </p>
                  </div>
                </div>

                <!-- アクション -->
                <div class="flex items-center justify-between">
                  <p class="text-xs text-neutral-500">
                    {{ project.date }}
                  </p>
                  <div class="flex gap-2">
                    <BaseButton
                      variant="outline"
                      size="xs"
                      @click="viewProject(project)"
                    >
                      詳細
                    </BaseButton>
                    <BaseButton
                      variant="primary"
                      size="xs"
                      @click="openProject(project)"
                    >
                      開く
                    </BaseButton>
                  </div>
                </div>
              </div>
            </BaseCard>
          </div>
        </div>
      </div>
    </section>

    <!-- 統計情報 -->
    <section class="py-16 bg-white">
      <div class="container mx-auto px-4">
        <div class="max-w-6xl mx-auto">
          <h2
            level="2"
            class="text-3xl font-bold text-center mb-12"
          >
            プロジェクト統計
          </h2>
          
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div class="text-center">
              <div class="text-3xl font-bold text-blue-600 mb-2">{{ stats.total }}</div>
              <p class="text-neutral-600">総プロジェクト数</p>
            </div>
            <div class="text-center">
              <div class="text-3xl font-bold text-green-600 mb-2">{{ stats.completed }}</div>
              <p class="text-neutral-600">完了プロジェクト</p>
            </div>
            <div class="text-center">
              <div class="text-3xl font-bold text-orange-600 mb-2">{{ stats.inProgress }}</div>
              <p class="text-neutral-600">進行中プロジェクト</p>
            </div>
            <div class="text-center">
              <div class="text-3xl font-bold text-purple-600 mb-2">{{ stats.avgQuality }}</div>
              <p class="text-neutral-600">平均品質スコア</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'
import BaseButton from '@/components/base/BaseButton.vue'
import BaseCard from '@/components/base/BaseCard.vue'
import BaseBadge from '@/components/base/BaseBadge.vue'

const router = useRouter()

// フィルター
const filters = ref([
  { id: 'all', name: 'すべて', count: 12 },
  { id: 'completed', name: '完了', count: 8 },
  { id: 'in_progress', name: '進行中', count: 3 },
  { id: 'planning', name: '計画中', count: 1 }
])

const activeFilter = ref('all')

// プロジェクト一覧
const projects = ref([
  {
    id: 1,
    title: 'Model-A Storybook',
    client: 'Internal',
    description: 'デザインシステムのコンポーネントライブラリ。51コンポーネントの完全なドキュメント化。',
    type: 'Design System',
    icon: '📚',
    status: 'completed',
    components: 51,
    techStack: ['Vue.js', 'Storybook', 'TypeScript', 'TailwindCSS'],
    metrics: {
      quality: '94.5',
      speed: '30秒',
      deployment: '2分'
    },
    date: '2025-07-09'
  },
  {
    id: 2,
    title: 'Drugstore Enhanced',
    client: 'ドラッグストア A社',
    description: 'ドラッグストア向けECサイトのモックアップ。商品カタログ、カート機能、決済フローを実装。',
    type: 'E-commerce',
    icon: '🛒',
    status: 'completed',
    components: 28,
    techStack: ['Vue.js', 'Pinia', 'TypeScript', 'TailwindCSS'],
    metrics: {
      quality: '92.3',
      speed: '45秒',
      deployment: '3分'
    },
    date: '2025-07-06'
  },
  {
    id: 3,
    title: 'Beautiful Design System',
    client: 'Internal',
    description: 'デザインシステムのプラットフォーム実装。デザイントークンの管理とコンポーネント生成。',
    type: 'Platform',
    icon: '🎨',
    status: 'in_progress',
    components: 35,
    techStack: ['Vue.js', 'Vite', 'TypeScript', 'TailwindCSS'],
    metrics: {
      quality: '96.1',
      speed: '25秒',
      deployment: '1分'
    },
    date: '2025-07-07'
  },
  {
    id: 4,
    title: 'Corporate Dashboard',
    client: 'B社',
    description: '企業向けダッシュボード。売上分析、顧客管理、レポート生成機能を含む。',
    type: 'Dashboard',
    icon: '📊',
    status: 'completed',
    components: 22,
    techStack: ['Vue.js', 'Chart.js', 'TypeScript', 'TailwindCSS'],
    metrics: {
      quality: '91.8',
      speed: '40秒',
      deployment: '4分'
    },
    date: '2025-07-05'
  },
  {
    id: 5,
    title: 'Healthcare Portal',
    client: 'C医療法人',
    description: '医療機関向けポータルサイト。予約システム、患者管理、診察記録を統合。',
    type: 'Healthcare',
    icon: '🏥',
    status: 'in_progress',
    components: 31,
    techStack: ['Vue.js', 'Pinia', 'TypeScript', 'TailwindCSS'],
    metrics: {
      quality: '93.7',
      speed: '35秒',
      deployment: '2分'
    },
    date: '2025-07-04'
  },
  {
    id: 6,
    title: 'Finance App',
    client: 'D金融会社',
    description: '金融サービスのモバイルアプリ。資産管理、取引履歴、投資分析機能。',
    type: 'Finance',
    icon: '💰',
    status: 'planning',
    components: 18,
    techStack: ['Vue.js', 'Pinia', 'TypeScript', 'TailwindCSS'],
    metrics: {
      quality: '95.2',
      speed: '30秒',
      deployment: '2分'
    },
    date: '2025-07-03'
  }
])

// 統計情報
const stats = ref({
  total: 12,
  completed: 8,
  inProgress: 3,
  avgQuality: '93.8'
})

// 計算プロパティ
const filteredProjects = computed(() => {
  if (activeFilter.value === 'all') {
    return projects.value
  }
  return projects.value.filter(project => project.status === activeFilter.value)
})

// メソッド
const setActiveFilter = (filterId) => {
  activeFilter.value = filterId
}

const getStatusVariant = (status) => {
  switch (status) {
    case 'completed': return 'success'
    case 'in_progress': return 'warning'
    case 'planning': return 'info'
    default: return 'neutral'
  }
}

const getStatusText = (status) => {
  switch (status) {
    case 'completed': return '完了'
    case 'in_progress': return '進行中'
    case 'planning': return '計画中'
    default: return '不明'
  }
}

const createNewProject = () => {
  router.push('/projects/new')
}

const viewProject = (project) => {
  router.push(`/projects/${project.id}`)
}

const openProject = (project) => {
  // プロジェクトのライブURLを開く
  window.open(`https://${project.title.toLowerCase().replace(/\s+/g, '-')}.pages.dev`, '_blank')
}
</script>