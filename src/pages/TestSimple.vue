<template>
  <div class="min-h-screen bg-gray-100 p-8">
    <div class="max-w-4xl mx-auto">
      <h1 class="text-4xl font-bold text-center mb-8 text-blue-600">
        🚀 Nagatsu Gateway UI - テスト成功！
      </h1>
      
      <div class="bg-white rounded-lg shadow-lg p-8 text-center">
        <h2 class="text-2xl font-semibold mb-4">
          Railway + Vue.js が正常に動作しています
        </h2>
        
        <p class="text-gray-600 mb-6">
          このページが表示されている場合、Vue Routerとアプリケーションは正常に動作しています。
        </p>
        
        <div class="grid grid-cols-2 gap-4 mb-6">
          <div class="bg-green-100 p-4 rounded">
            <h3 class="font-semibold text-green-800">✅ 動作確認済み</h3>
            <ul class="text-sm text-green-700 mt-2">
              <li>• Vue.js 3 アプリケーション</li>
              <li>• Vue Router ルーティング</li>
              <li>• TailwindCSS スタイリング</li>
              <li>• Railway デプロイメント</li>
            </ul>
          </div>
          
          <div class="bg-blue-100 p-4 rounded">
            <h3 class="font-semibold text-blue-800">🔧 次のステップ</h3>
            <ul class="text-sm text-blue-700 mt-2">
              <li>• LandingPage.vue デバッグ</li>
              <li>• コンポーネント読み込み修正</li>
              <li>• Gateway UI 復元</li>
            </ul>
          </div>
        </div>
        
        <button 
          @click="showAlert" 
          class="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded font-semibold"
        >
          Vue.js イベント テスト
        </button>
        
        <div v-if="alertShown" class="mt-4 p-4 bg-yellow-100 border border-yellow-400 rounded">
          🎉 Vue.js のリアクティビティが正常に動作しています！
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const alertShown = ref(false)

const showAlert = () => {
  alertShown.value = true
  setTimeout(() => {
    alertShown.value = false
  }, 3000)
}
</script>