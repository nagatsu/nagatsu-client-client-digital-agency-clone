<template>
  <div class="container">
    <h1 class="title">
      CSS Test Page (No TailwindCSS)
    </h1>
    <p class="text">
      This page uses regular CSS classes, no TailwindCSS.
    </p>
    <button 
      class="button"
      @click="handleClick"
    >
      Click Me
    </button>
    <p v-if="clicked" class="success">
      Button was clicked at: {{ clickTime }}
    </p>
  </div>
</template>

<script>
export default {
  name: 'TailwindTestPage',
  data() {
    return {
      clicked: false,
      clickTime: ''
    }
  },
  methods: {
    handleClick() {
      this.clicked = true
      this.clickTime = new Date().toLocaleTimeString()
    }
  }
}
</script>

<style scoped>
.container {
  padding: 2rem;
  background-color: #f9fafb;
  min-height: 100vh;
}

.title {
  font-size: 1.875rem;
  font-weight: bold;
  color: #111827;
  margin-bottom: 1rem;
}

.text {
  color: #6b7280;
  margin-bottom: 1.5rem;
}

.button {
  background-color: #3b82f6;
  color: white;
  font-weight: bold;
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 0.375rem;
  cursor: pointer;
}

.button:hover {
  background-color: #1d4ed8;
}

.success {
  color: #059669;
  margin-top: 1rem;
}
</style>