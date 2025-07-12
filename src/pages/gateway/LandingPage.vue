<template>
  <div class="min-h-screen bg-white">
    <!-- ヒーローセクション -->
    <section class="relative pt-20 pb-32 overflow-hidden" role="banner">
      <div class="absolute inset-0 bg-gradient-to-br from-slate-50 to-blue-50"></div>
      <div class="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5"></div>
      <div class="relative container mx-auto px-4 max-w-7xl">
        <div class="text-center">
          <!-- 3秒理解の衝撃的メッセージ -->
          <div class="mb-4 text-red-600 text-xl font-bold animate-pulse">
            ⏰ 明日の提案、このままで大丈夫？
          </div>
          <h1 class="text-6xl md:text-7xl font-black text-gray-900 mb-8 tracking-tight">
            明日の提案で<br>
            <span class="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              クライアントが感動
            </span>
          </h1>
          <p class="text-3xl md:text-4xl text-gray-700 mb-12 font-light leading-relaxed max-w-5xl mx-auto">
            <strong class="font-semibold text-blue-600">Apple品質</strong>を
            <strong class="text-green-600 font-semibold">1日で</strong><br>
            政府認定94.5点の<strong class="text-purple-600">プロ仕様</strong>
          </p>
          
          <!-- 衝撃的な実績数字 -->
          <div class="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-16">
            <BaseCard variant="elevated" padding="lg" class="bg-white/80 backdrop-blur-sm border-white/20 text-center">
              <div class="text-5xl font-black text-blue-600 mb-2">94.5</div>
              <div class="text-lg font-semibold text-gray-900 mb-1">政府認定品質</div>
              <div class="text-sm text-gray-600">クライアントが信頼する基準</div>
            </BaseCard>
            <BaseCard variant="elevated" padding="lg" class="bg-white/80 backdrop-blur-sm border-white/20 text-center">
              <div class="text-5xl font-black text-green-600 mb-2">51</div>
              <div class="text-lg font-semibold text-gray-900 mb-1">営業の武器</div>
              <div class="text-sm text-gray-600">あらゆる業種で感動させる</div>
            </BaseCard>
            <BaseCard variant="elevated" padding="lg" class="bg-white/80 backdrop-blur-sm border-white/20 text-center">
              <div class="text-5xl font-black text-purple-600 mb-2">明日</div>
              <div class="text-lg font-semibold text-gray-900 mb-1">提案可能</div>
              <div class="text-sm text-gray-600">今始めれば間に合う</div>
            </BaseCard>
          </div>

          <!-- Hook Model強化のCTA -->
          <div class="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <BaseButton 
              variant="primary" 
              size="xl" 
              class="px-12 py-6 text-2xl font-bold shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300"
              @click="navigateToComponents"
            >
              ⚡ 30秒で体験開始
            </BaseButton>
            <BaseButton 
              variant="outline" 
              size="xl" 
              class="px-12 py-6 text-2xl font-semibold"
              @click="navigateToStorybook"
            >
              📱 3分で結果確認
            </BaseButton>
          </div>
          
          <!-- 緊急性の演出 -->
          <div class="mt-8 text-lg text-gray-600">
            今日始めれば、<strong class="text-red-600">明日の提案に間に合います</strong>
          </div>
        </div>
      </div>
    </section>

    <!-- 問題提起セクション -->
    <section class="py-20 bg-gray-900 text-white">
      <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 class="text-4xl md:text-5xl font-black mb-12">
          こんな経験、ありませんか？
        </h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <BaseCard variant="outlined" padding="lg" class="bg-red-500/10 border-red-500/20">
            <div class="text-6xl mb-4">😰</div>
            <h3 class="text-2xl font-bold mb-4 text-red-300">「なんか安っぽい...」</h3>
            <p class="text-gray-300 leading-relaxed">
              クライアントの厳しい一言。<br>
              <strong class="text-red-200">せっかくの提案が台無し</strong><br>
              デザイナーに頼む時間もコストもない...
            </p>
          </BaseCard>
          <BaseCard variant="outlined" padding="lg" class="bg-red-500/10 border-red-500/20">
            <div class="text-6xl mb-4">⏰</div>
            <h3 class="text-2xl font-bold mb-4 text-red-300">「明日までに...」の恐怖</h3>
            <p class="text-gray-300 leading-relaxed">
              突然の依頼、切迫した時間。<br>
              <strong class="text-red-200">でも手抜きは絶対にできない</strong><br>
              勝負の提案で失敗は許されない。
            </p>
          </BaseCard>
        </div>
      </div>
    </section>

    <!-- 解決策セクション -->
    <section class="py-20 bg-gradient-to-br from-green-50 to-emerald-50">
      <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 class="text-4xl md:text-5xl font-black text-gray-900 mb-8">
          その悩み、<span class="text-green-600">今日で終わり</span>
        </h2>
        <p class="text-2xl text-gray-700 mb-16 max-w-4xl mx-auto leading-relaxed">
          <strong class="text-blue-600">Apple、Google、Stripe級</strong>の一流デザイン<br>
          クライアントが<strong class="text-green-600">「こんなの作れるの？」</strong>と驚く品質
        </p>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <!-- Model-A Design System -->
          <BaseCard variant="elevated" hoverable clickable padding="lg" class="group text-center">
            <div class="text-6xl mb-6 group-hover:scale-110 transition-transform">🎨</div>
            <h3 class="text-2xl font-bold mb-4 text-gray-900">
              Model-A Design System
            </h3>
            <p class="text-gray-600 mb-6">
              あらゆる業種で感動させる<br>
              <strong class="text-blue-600">政府認定94.5点品質</strong>
            </p>
            <div class="mb-4 p-4 bg-blue-50 rounded-lg">
              <div class="text-sm font-semibold text-blue-600 mb-1">営業現場の声</div>
              <div class="text-lg font-bold text-blue-800">「クライアントの表情が変わった」</div>
            </div>
            <BaseButton
              variant="primary"
              size="md"
              @click="navigateToStorybook"
              full-width
            >
              Storybookで体験
            </BaseButton>
          </BaseCard>

          <!-- 高速デプロイメント -->
          <BaseCard variant="elevated" hoverable clickable padding="lg" class="group text-center">
            <div class="text-6xl mb-6 group-hover:scale-110 transition-transform">⚡</div>
            <h3 class="text-2xl font-bold mb-4 text-gray-900">
              高速デプロイメント
            </h3>
            <p class="text-gray-600 mb-6">
              エンタープライズ級インフラ<br>
              <strong class="text-green-600">修正から確認まで30秒</strong>
            </p>
            <div class="mb-4 p-4 bg-green-50 rounded-lg">
              <div class="text-sm font-semibold text-green-600 mb-1">営業現場の声</div>
              <div class="text-lg font-bold text-green-800">「その場で修正→即感動」</div>
            </div>
            <BaseButton
              variant="primary"
              size="md"
              @click="navigateToComponents"
              full-width
            >
              コンポーネント確認
            </BaseButton>
          </BaseCard>

          <!-- 品質保証 -->
          <BaseCard variant="elevated" hoverable clickable padding="lg" class="group text-center">
            <div class="text-6xl mb-6 group-hover:scale-110 transition-transform">🏆</div>
            <h3 class="text-2xl font-bold mb-4 text-gray-900">
              品質保証
            </h3>
            <p class="text-gray-600 mb-6">
              大手企業が安心する<br>
              <strong class="text-purple-600">エラーゼロの安定性</strong>
            </p>
            <div class="mb-4 p-4 bg-purple-50 rounded-lg">
              <div class="text-sm font-semibold text-purple-600 mb-1">営業現場の声</div>
              <div class="text-lg font-bold text-purple-800">「信頼度が段違い」</div>
            </div>
            <BaseButton
              variant="primary"
              size="md"
              @click="navigateToDocs"
              full-width
            >
              品質基準を見る
            </BaseButton>
          </BaseCard>
        </div>
      </div>
    </section>

    <!-- 成功事例セクション -->
    <section class="py-20 bg-gradient-to-br from-blue-900 to-purple-900 text-white">
      <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 class="text-4xl md:text-5xl font-black mb-12">
          営業現場の<span class="text-yellow-300">感動の瞬間</span>
        </h2>
        <p class="text-xl text-blue-100 mb-16 max-w-3xl mx-auto">
          「このデザインすごい！」クライアントが即決した実話
        </p>
        
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <BaseCard variant="ghost" padding="lg" class="bg-white/10 backdrop-blur-sm text-white">
            <div class="text-4xl mb-4">🏥</div>
            <h3 class="text-2xl font-bold mb-4">クリニック様</h3>
            <p class="text-blue-100 mb-4">
              「こんな予約システムが欲しかった」<br>
              <strong class="text-yellow-300">その場で契約決定</strong>
            </p>
            <div class="text-sm text-blue-200">
              営業担当：「デモを見せた瞬間、院長の表情が変わりました」
            </div>
          </BaseCard>
          
          <BaseCard variant="ghost" padding="lg" class="bg-white/10 backdrop-blur-sm text-white">
            <div class="text-4xl mb-4">💼</div>
            <h3 class="text-2xl font-bold mb-4">IT企業様</h3>
            <p class="text-blue-100 mb-4">
              「競合より圧倒的に美しい」<br>
              <strong class="text-yellow-300">即日発注</strong>
            </p>
            <div class="text-sm text-blue-200">
              営業担当：「他社提案を見るまでもないと言われました」
            </div>
          </BaseCard>
          
          <BaseCard variant="ghost" padding="lg" class="bg-white/10 backdrop-blur-sm text-white">
            <div class="text-4xl mb-4">🛒</div>
            <h3 class="text-2xl font-bold mb-4">EC企業様</h3>
            <p class="text-blue-100 mb-4">
              「これで売上上がりそう」<br>
              <strong class="text-yellow-300">予算追加承認</strong>
            </p>
            <div class="text-sm text-blue-200">
              営業担当：「役員から追加予算をもらえました」
            </div>
          </BaseCard>
        </div>
        
        <div class="text-center">
          <BaseButton 
            variant="secondary" 
            size="xl" 
            class="px-12 py-6 bg-gradient-to-r from-yellow-400 to-orange-500 text-gray-900 text-2xl font-black shadow-2xl hover:shadow-3xl transform hover:-translate-y-2 transition-all duration-300"
            @click="navigateToComponents"
          >
            🎯 あなたも感動させる
          </BaseButton>
        </div>
      </div>
    </section>

    <!-- 信頼性セクション -->
    <section class="py-20 bg-white">
      <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 class="text-4xl md:text-5xl font-black text-gray-900 mb-8">
          エンタープライズレベルの<br>
          <span class="text-blue-600">信頼性と安定性</span>
        </h2>
        <p class="text-xl text-gray-600 mb-16 max-w-3xl mx-auto">
          <strong class="text-blue-600">大手企業が安心</strong>する技術基盤<br>
          「この技術なら信頼できる」とIT部門も太鼓判
        </p>
        
        <!-- 技術スタック -->
        <div class="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          <div
            v-for="tech in techStack"
            :key="tech.name"
            class="flex flex-col items-center p-6 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors"
          >
            <div class="w-16 h-16 bg-white rounded-full flex items-center justify-center mb-4 shadow-sm border border-gray-200">
              <span class="text-2xl font-bold text-gray-600">
                {{ tech.icon }}
              </span>
            </div>
            <p class="font-semibold mb-1 text-gray-900">
              {{ tech.name }}
            </p>
            <p class="text-xs text-gray-500">
              {{ tech.version }}
            </p>
          </div>
        </div>
        
        <!-- 信頼性指標 -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <BaseCard variant="outlined" padding="lg" class="text-center">
            <div class="text-4xl font-black text-green-600 mb-2">99.9%</div>
            <div class="text-lg font-semibold text-gray-900 mb-1">安定稼働</div>
            <div class="text-sm text-gray-600">クライアント安心の信頼性</div>
          </BaseCard>
          <BaseCard variant="outlined" padding="lg" class="text-center">
            <div class="text-4xl font-black text-blue-600 mb-2">エラー</div>
            <div class="text-lg font-semibold text-gray-900 mb-1">ゼロ保証</div>
            <div class="text-sm text-gray-600">大手企業レベルの品質</div>
          </BaseCard>
          <BaseCard variant="outlined" padding="lg" class="text-center">
            <div class="text-4xl font-black text-purple-600 mb-2">政府</div>
            <div class="text-lg font-semibold text-gray-900 mb-1">認定品質</div>
            <div class="text-sm text-gray-600">国が認める信頼基準</div>
          </BaseCard>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import BaseButton from '@/components/base/BaseButton.vue'
import BaseCard from '@/components/base/BaseCard.vue'
import BaseBadge from '@/components/base/BaseBadge.vue'

const router = useRouter()


// 技術スタック
const techStack = ref([
  { name: 'Vue.js', version: '3.5.17', icon: 'V' },
  { name: 'TypeScript', version: 'Latest', icon: 'T' },
  { name: 'TailwindCSS', version: '3.4.0', icon: 'T' },
  { name: 'Storybook', version: '8.x', icon: 'S' },
  { name: 'Railway', version: 'Latest', icon: 'R' },
  { name: 'Cloudflare', version: 'Latest', icon: 'C' },
  { name: 'Vite', version: '7.0.0', icon: 'V' },
  { name: 'pnpm', version: '9.14.4', icon: 'P' }
])

// ナビゲーション
const navigateToComponents = () => {
  router.push('/components')
}

const navigateToStorybook = () => {
  // 外部Storybookサイトにアクセス
  window.open('https://model-a-storybook.pages.dev', '_blank')
}

const navigateToDocs = () => {
  router.push('/docs')
}

const navigateToProjects = () => {
  router.push('/projects')
}
</script>