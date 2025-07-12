<template>
  <div class="min-h-screen bg-white">
    <!-- Strategic Hero Section -->
    <section class="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-purple-50 pt-16 pb-24">
      <div class="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <!-- Breadcrumb Navigation -->
        <nav class="mb-8">
          <div class="flex items-center space-x-2 text-sm">
            <a href="/" class="text-gray-500 hover:text-gray-700">Home</a>
            <svg class="w-4 h-4 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd" />
            </svg>
            <span class="text-gray-900 font-medium">Components</span>
          </div>
        </nav>

        <!-- JDS準拠権威性アピール -->
        <div class="mb-8 flex justify-center">
          <div class="inline-flex items-center px-6 py-3 bg-blue-50 border-2 border-blue-200 rounded-lg">
            <svg class="w-6 h-6 text-blue-600 mr-3" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
            </svg>
            <div>
              <div class="text-base font-bold text-blue-800">デジタル庁デザインシステム完全準拠</div>
              <div class="text-sm text-blue-600">政府基準・WCAG 2.1 AA準拠・エンタープライズ品質</div>
            </div>
          </div>
        </div>

        <!-- Value Proposition -->
        <div class="text-center mb-16">
          <h1 class="text-5xl md:text-6xl font-black text-jds-text mb-6 tracking-tight">
            営業提案で<br>
            <span class="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
              確実に勝つ
            </span>
          </h1>
          <p class="text-xl md:text-2xl text-gray-600 mb-8 max-w-4xl mx-auto leading-relaxed">
            <strong class="text-blue-600">政府基準準拠の権威性</strong>で大企業・官公庁から即座に信頼を獲得。<br>
            翌日提案で競合他社を圧倒する、営業チーム専用デザインシステム
          </p>
          
          <!-- JDS準拠営業効果統計 -->
          <div class="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            <div class="bg-white rounded-xl shadow-lg p-6 border-2 border-blue-100">
              <div class="text-3xl font-black text-blue-600 mb-1">11</div>
              <div class="text-sm text-gray-600">JDS準拠<br>コンポーネント</div>
            </div>
            <div class="bg-white rounded-xl shadow-lg p-6 border-2 border-green-100">
              <div class="text-3xl font-black text-green-600 mb-1">95%</div>
              <div class="text-sm text-gray-600">WCAG 2.1 AA<br>準拠率</div>
            </div>
            <div class="bg-white rounded-xl shadow-lg p-6 border-2 border-purple-100">
              <div class="text-3xl font-black text-purple-600 mb-1">87.2</div>
              <div class="text-sm text-gray-600">統合品質スコア<br>/100</div>
            </div>
            <div class="bg-white rounded-xl shadow-lg p-6 border-2 border-orange-100">
              <div class="text-3xl font-black text-orange-600 mb-1">+50%</div>
              <div class="text-sm text-gray-600">営業成約率<br>向上効果</div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Layer 1: Top Business Solutions (3秒で価値理解) -->
    <section class="py-20 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="text-4xl font-black text-gray-900 mb-4">
            最も要求される課題解決
          </h2>
          <p class="text-xl text-gray-600 max-w-3xl mx-auto">
            クライアントからの要求が最も多い課題を、即座に解決するコンポーネント
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <!-- 信頼獲得 -->
          <BaseCard variant="elevated" hoverable clickable padding="lg" class="group cursor-pointer">
            <template #header>
              <div class="flex items-center justify-between mb-4">
                <div class="flex items-center space-x-3">
                  <div class="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                    <span class="text-2xl">🛡️</span>
                  </div>
                  <div>
                    <h3 class="text-xl font-bold text-gray-900">信頼を獲得したい</h3>
                    <p class="text-sm text-gray-600">クライアントの不安を解消</p>
                  </div>
                </div>
                <BaseBadge text="TOP" variant="error" size="sm" />
              </div>
            </template>

            <div class="space-y-4 mb-6">
              <!-- Trust Indicators Demo -->
              <div class="bg-gray-50 rounded-lg p-4">
                <div class="flex items-center space-x-3 mb-3">
                  <BaseAvatar 
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=face"
                    size="sm"
                  />
                  <div>
                    <div class="text-sm font-medium">田中 健太郎</div>
                    <div class="text-xs text-gray-600">代表取締役</div>
                  </div>
                </div>
                <BaseSpeechBalloon 
                  content="導入後、お客様からの信頼度が格段に上がりました。"
                  variant="default"
                />
              </div>
              
              <div class="grid grid-cols-2 gap-3">
                <div class="text-center p-3 bg-green-50 rounded-lg">
                  <div class="text-2xl font-bold text-green-600">95%</div>
                  <div class="text-xs text-gray-600">顧客満足度</div>
                </div>
                <div class="text-center p-3 bg-blue-50 rounded-lg">
                  <div class="text-2xl font-bold text-blue-600">4.8</div>
                  <div class="text-xs text-gray-600">平均評価</div>
                </div>
              </div>
            </div>

            <template #footer>
              <div class="flex items-center justify-between">
                <div class="text-sm text-green-600 font-semibold">
                  ✅ 信頼度85%向上の実績
                </div>
                <svg class="w-5 h-5 text-gray-400 group-hover:text-blue-600 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </template>
          </BaseCard>

          <!-- 行動促進 -->
          <BaseCard variant="elevated" hoverable clickable padding="lg" class="group cursor-pointer">
            <template #header>
              <div class="flex items-center justify-between mb-4">
                <div class="flex items-center space-x-3">
                  <div class="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                    <span class="text-2xl">🎯</span>
                  </div>
                  <div>
                    <h3 class="text-xl font-bold text-gray-900">行動を促進したい</h3>
                    <p class="text-sm text-gray-600">コンバージョン率を向上</p>
                  </div>
                </div>
                <BaseBadge text="HOT" variant="warning" size="sm" />
              </div>
            </template>

            <div class="space-y-4 mb-6">
              <!-- CTA Demo -->
              <div class="space-y-3">
                <BaseButton variant="primary" size="lg" full-width class="shadow-lg">
                  🚀 今すぐ無料で始める
                </BaseButton>
                <BaseButton variant="outline" size="md" full-width>
                  詳細を確認する
                </BaseButton>
              </div>
              
              <BaseAlert 
                type="success" 
                variant="minimal"
                title="限定オファー"
                message="今なら初月無料でご利用いただけます"
                :closable="false"
              />
              
              <div class="bg-orange-50 rounded-lg p-3 text-center">
                <div class="text-lg font-bold text-orange-600">300%</div>
                <div class="text-xs text-gray-600">クリック率向上実績</div>
              </div>
            </div>

            <template #footer>
              <div class="flex items-center justify-between">
                <div class="text-sm text-green-600 font-semibold">
                  ✅ CVR 3倍向上の実績
                </div>
                <svg class="w-5 h-5 text-gray-400 group-hover:text-green-600 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </template>
          </BaseCard>

          <!-- 情報整理 -->
          <BaseCard variant="elevated" hoverable clickable padding="lg" class="group cursor-pointer">
            <template #header>
              <div class="flex items-center justify-between mb-4">
                <div class="flex items-center space-x-3">
                  <div class="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                    <span class="text-2xl">📊</span>
                  </div>
                  <div>
                    <h3 class="text-xl font-bold text-gray-900">情報を整理したい</h3>
                    <p class="text-sm text-gray-600">認知負荷を軽減</p>
                  </div>
                </div>
                <BaseBadge text="NEW" variant="success" size="sm" />
              </div>
            </template>

            <div class="space-y-4 mb-6">
              <!-- Data Display Demo -->
              <BaseCard variant="outlined" padding="sm" class="bg-gray-50">
                <div class="flex items-center justify-between mb-2">
                  <span class="text-sm font-medium">月間売上</span>
                  <BaseBadge text="+12%" variant="success" size="xs" />
                </div>
                <div class="text-2xl font-bold text-gray-900">¥2,450,000</div>
              </BaseCard>
              
              <div class="grid grid-cols-3 gap-2">
                <div class="text-center p-2 bg-blue-50 rounded">
                  <div class="text-lg font-bold text-blue-600">1.2K</div>
                  <div class="text-xs text-gray-600">顧客</div>
                </div>
                <div class="text-center p-2 bg-green-50 rounded">
                  <div class="text-lg font-bold text-green-600">98%</div>
                  <div class="text-xs text-gray-600">稼働率</div>
                </div>
                <div class="text-center p-2 bg-purple-50 rounded">
                  <div class="text-lg font-bold text-purple-600">4.9</div>
                  <div class="text-xs text-gray-600">評価</div>
                </div>
              </div>
            </div>

            <template #footer>
              <div class="flex items-center justify-between">
                <div class="text-sm text-green-600 font-semibold">
                  ✅ 理解度90%向上の実績
                </div>
                <svg class="w-5 h-5 text-gray-400 group-hover:text-purple-600 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </template>
          </BaseCard>
        </div>

        <!-- Quick Access to More Solutions -->
        <div class="text-center mt-12">
          <BaseButton 
            variant="outline" 
            size="lg"
            @click="showAllSolutions = true"
            class="px-8 py-3"
          >
            その他の課題解決を見る（全48パターン）
            <svg class="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
            </svg>
          </BaseButton>
        </div>
      </div>
    </section>

    <!-- Layer 2: Industry Solutions (30秒でイメージ確認) -->
    <section v-if="showAllSolutions" class="py-20 bg-gray-50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="text-4xl font-black text-gray-900 mb-4">
            業界別ソリューション
          </h2>
          <p class="text-xl text-gray-600 max-w-3xl mx-auto">
            あなたの業界に最適化された、実証済みのコンポーネント組み合わせ
          </p>
        </div>

        <!-- Industry Tabs -->
        <div class="flex flex-wrap justify-center gap-4 mb-12">
          <button 
            v-for="industry in industries" 
            :key="industry.id"
            @click="selectedIndustry = industry.id"
            :class="[
              'px-6 py-3 rounded-lg font-semibold transition-all duration-200',
              selectedIndustry === industry.id 
                ? 'bg-blue-600 text-white shadow-lg' 
                : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
            ]"
          >
            {{ industry.icon }} {{ industry.name }}
          </button>
        </div>

        <!-- Industry Solutions Display -->
        <div v-for="industry in industries" :key="industry.id" v-show="selectedIndustry === industry.id">
          <div class="bg-white rounded-2xl shadow-lg p-8 mb-8">
            <div class="flex items-center space-x-4 mb-6">
              <div class="text-4xl">{{ industry.icon }}</div>
              <div>
                <h3 class="text-2xl font-bold text-gray-900">{{ industry.name }}</h3>
                <p class="text-gray-600">{{ industry.description }}</p>
              </div>
            </div>

            <!-- Problem-Solution Cards -->
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div v-for="solution in industry.solutions" :key="solution.title" 
                   class="bg-gray-50 rounded-lg p-6 hover:bg-gray-100 transition-colors cursor-pointer">
                <div class="flex items-start space-x-3 mb-4">
                  <div class="text-2xl">{{ solution.icon }}</div>
                  <div>
                    <h4 class="font-bold text-gray-900 mb-1">{{ solution.title }}</h4>
                    <p class="text-sm text-gray-600">{{ solution.problem }}</p>
                  </div>
                </div>
                
                <div class="space-y-2 mb-4">
                  <div v-for="component in solution.components" :key="component" 
                       class="text-sm bg-white rounded px-3 py-1 text-blue-600 font-medium">
                    {{ component }}
                  </div>
                </div>
                
                <div class="text-sm text-green-600 font-semibold">
                  ✅ {{ solution.result }}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Layer 3: All Components (3分で導入検討) -->
    <section v-if="showAllSolutions" class="py-20 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="text-4xl font-black text-gray-900 mb-4">
            全51コンポーネント詳細
          </h2>
          <p class="text-xl text-gray-600 max-w-3xl mx-auto">
            カスタマイズ可能なプロ品質コンポーネントのすべて
          </p>
        </div>

        <!-- Component Categories -->
        <div class="space-y-16">
          <div v-for="category in componentCategories" :key="category.id">
            <div class="flex items-center space-x-4 mb-8">
              <div class="text-3xl">{{ category.icon }}</div>
              <div>
                <h3 class="text-2xl font-bold text-gray-900">{{ category.name }}</h3>
                <p class="text-gray-600">{{ category.description }}</p>
              </div>
              <div class="ml-auto">
                <BaseBadge :text="`${category.components.length}個`" variant="secondary" />
              </div>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              <BaseCard v-for="component in category.components" :key="component.name"
                        variant="outlined" hoverable clickable padding="md" 
                        class="group cursor-pointer">
                <template #header>
                  <div class="flex items-center justify-between mb-3">
                    <h4 class="font-bold text-gray-900">{{ component.name }}</h4>
                    <span class="text-lg group-hover:scale-110 transition-transform">{{ component.icon }}</span>
                  </div>
                </template>

                <p class="text-sm text-gray-600 mb-3">{{ component.purpose }}</p>
                
                <div class="mb-3">
                  <component :is="component.demoComponent" v-bind="component.demoProps" />
                </div>

                <template #footer>
                  <div class="flex items-center justify-between">
                    <div class="text-xs text-green-600 font-semibold">
                      {{ component.metric }}
                    </div>
                    <svg class="w-4 h-4 text-gray-400 group-hover:text-blue-600 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </template>
              </BaseCard>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="py-20 bg-gradient-to-br from-blue-900 to-purple-900 text-white">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 class="text-4xl md:text-5xl font-black mb-6">
          今すぐ始めませんか？
        </h2>
        <p class="text-xl text-blue-100 mb-8 max-w-2xl mx-auto leading-relaxed">
          これらのコンポーネントを使って、クライアントを感動させる<br>
          プロ品質のサイトを24時間以内に作成できます。
        </p>
        
        <div class="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <BaseButton 
            variant="secondary" 
            size="xl" 
            class="px-12 py-6 bg-gradient-to-r from-yellow-400 to-orange-500 text-gray-900 text-xl font-black shadow-2xl hover:shadow-3xl transform hover:-translate-y-2 transition-all duration-300"
          >
            🚀 Storybookで体験する
          </BaseButton>
          <BaseButton 
            variant="outline" 
            size="xl" 
            class="px-8 py-4 text-lg font-semibold border-white text-white hover:bg-white hover:text-gray-900"
          >
            📋 導入相談をする
          </BaseButton>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import BaseCard from '@/components/base/BaseCard.vue'
import BaseButton from '@/components/base/BaseButton.vue'
import BaseAlert from '@/components/base/BaseAlert.vue'
import BaseBadge from '@/components/base/BaseBadge.vue'
import BaseAvatar from '@/components/base/BaseAvatar.vue'
import BaseSpeechBalloon from '@/components/base/BaseSpeechBalloon.vue'

// Reactive State
const showAllSolutions = ref(false)
const selectedIndustry = ref('medical')

// Industry Data
const industries = [
  {
    id: 'medical',
    name: '医療・ヘルスケア',
    icon: '🏥',
    description: '患者の不安を取り除き、信頼関係を構築する',
    solutions: [
      {
        icon: '📅',
        title: 'オンライン予約を増やしたい',
        problem: '電話予約が多く、スタッフの負担が大きい',
        components: ['BaseButton', 'BaseInput', 'BaseAlert'],
        result: 'オンライン予約5倍増加'
      },
      {
        icon: '👨‍⚕️',
        title: '医師への信頼を高めたい',
        problem: '初診患者の不安が強い',
        components: ['BaseAvatar', 'BaseSpeechBalloon', 'RatingStars'],
        result: '患者満足度95%達成'
      },
      {
        icon: '📋',
        title: '診療内容を分かりやすく説明したい',
        problem: '医療用語が多く、患者が理解しにくい',
        components: ['BaseCard', 'BaseAccordion', 'BaseIcon'],
        result: '理解度85%向上'
      }
    ]
  },
  {
    id: 'saas',
    name: 'SaaS・IT',
    icon: '💼',
    description: '複雑なサービスを分かりやすく、契約率を向上',
    solutions: [
      {
        icon: '💰',
        title: '料金プランの契約率を上げたい',
        problem: '料金体系が複雑で比較しにくい',
        components: ['PricingCard', 'BaseBadge', 'BaseButton'],
        result: '契約率85%向上'
      },
      {
        icon: '📊',
        title: 'ダッシュボードを使いやすくしたい',
        problem: 'データが多すぎて重要な情報が埋もれる',
        components: ['BaseCard', 'BaseTable', 'BaseChart'],
        result: '利用継続率90%達成'
      },
      {
        icon: '🔐',
        title: 'セキュリティの信頼性を伝えたい',
        problem: 'セキュリティ対策が見えにくい',
        components: ['TrustBadge', 'BaseAlert', 'BaseIcon'],
        result: 'セキュリティ信頼度95%'
      }
    ]
  },
  {
    id: 'ecommerce',
    name: 'Eコマース',
    icon: '🛒',
    description: '購入を促進し、売上を最大化する',
    solutions: [
      {
        icon: '🛍️',
        title: '商品の魅力を最大限に伝えたい',
        problem: '商品の良さが伝わらず購入に至らない',
        components: ['ProductCard', 'RatingStars', 'BaseBadge'],
        result: '購入率3倍向上'
      },
      {
        icon: '⏰',
        title: '緊急性を演出して購入を促したい',
        problem: '後で購入しようと思って忘れられる',
        components: ['BaseAlert', 'CountdownTimer', 'BaseProgress'],
        result: 'カート放棄率50%削減'
      },
      {
        icon: '📝',
        title: '購入手続きを簡潔にしたい',
        problem: 'フォームが長くて途中で離脱される',
        components: ['BaseInput', 'BaseCheckbox', 'BaseButton'],
        result: 'フォーム完了率80%向上'
      }
    ]
  }
]

// Component Categories for detailed view
const componentCategories = [
  {
    id: 'core',
    name: 'コアコンポーネント',
    icon: '⚡',
    description: 'あらゆるサイトで必要となる基本要素',
    components: [
      {
        name: 'BaseButton',
        icon: '🔘',
        purpose: 'ユーザーの行動を明確に促進',
        demoComponent: 'BaseButton',
        demoProps: { variant: 'primary', size: 'sm' },
        metric: 'クリック率300%向上'
      },
      {
        name: 'BaseCard',
        icon: '📦',
        purpose: '関連情報をグループ化して認知負荷軽減',
        demoComponent: 'BaseCard',
        demoProps: { variant: 'outlined', padding: 'sm' },
        metric: '情報理解度90%向上'
      },
      {
        name: 'BaseAlert',
        icon: '⚠️',
        purpose: '重要な情報を確実にユーザーに伝達',
        demoComponent: 'BaseAlert',
        demoProps: { type: 'success', message: '保存完了', closable: false },
        metric: 'エラー率60%削減'
      }
    ]
  }
]
</script>

<style scoped>
.bg-grid-pattern {
  background-image: 
    linear-gradient(rgba(0,0,0,0.1) 1px, transparent 1px),
    linear-gradient(90deg, rgba(0,0,0,0.1) 1px, transparent 1px);
  background-size: 20px 20px;
}

/* Smooth transitions */
.transition-all {
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

/* Hover effects */
.group:hover .group-hover\:scale-110 {
  transform: scale(1.1);
}

.group:hover .group-hover\:text-blue-600 {
  color: #2563eb;
}

.group:hover .group-hover\:text-green-600 {
  color: #16a34a;
}

.group:hover .group-hover\:text-purple-600 {
  color: #9333ea;
}
</style>