<template>
  <div class="p-8">
    <h1 class="text-2xl font-bold mb-4">Simple Test Page</h1>
    <p class="mb-4">This is a basic test to see if pages render correctly in Chrome/Safari.</p>
    
    <!-- Test basic HTML -->
    <div class="bg-blue-100 p-4 rounded mb-4">
      <p>Basic HTML with TailwindCSS works!</p>
    </div>
    
    <!-- Test BaseCard if it exists -->
    <div class="bg-green-100 p-4 rounded mb-4">
      <h2 class="font-semibold mb-2">Component Test</h2>
      <p>Time: {{ new Date().toLocaleTimeString() }}</p>
      <button @click="clicked = !clicked" class="bg-blue-500 text-white px-4 py-2 rounded mt-2">
        Click me! {{ clicked ? '✅' : '❌' }}
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const clicked = ref(false)
</script>