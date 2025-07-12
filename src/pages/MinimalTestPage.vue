<template>
  <div class="p-8">
    <h1 class="text-2xl font-bold mb-4">最小限テストページ</h1>
    <p class="mb-4">このページが表示されればVueの基本機能は動作しています。</p>
    
    <!-- 最も基本的なコンポーネントのみ使用 -->
    <div class="border p-4 rounded mb-4">
      <h2 class="text-lg font-semibold mb-2">基本的なHTML要素</h2>
      <button class="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
        基本ボタン
      </button>
    </div>
    
    <div class="border p-4 rounded">
      <h2 class="text-lg font-semibold mb-2">現在時刻</h2>
      <p>{{ currentTime }}</p>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const currentTime = ref('')

onMounted(() => {
  currentTime.value = new Date().toLocaleString()
})
</script>