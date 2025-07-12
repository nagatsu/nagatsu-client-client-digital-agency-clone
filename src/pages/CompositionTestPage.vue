<template>
  <div>
    <h1>Composition API Test</h1>
    <p>Counter: {{ count }}</p>
    <button @click="increment">Increment</button>
    <p>Current time: {{ currentTime }}</p>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const count = ref(0)
const currentTime = ref('')

const increment = () => {
  count.value++
}

onMounted(() => {
  currentTime.value = new Date().toISOString()
})
</script>