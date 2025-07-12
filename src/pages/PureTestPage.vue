<template>
  <div style="padding: 20px; font-family: Arial, sans-serif;">
    <h1 style="color: #333; font-size: 24px;">Pure Test Page</h1>
    <p style="color: #666; font-size: 16px;">
      This page uses no TailwindCSS, no external components, no stores.
      Pure HTML and inline CSS only.
    </p>
    <button 
      style="background: #007bff; color: white; padding: 10px 20px; border: none; border-radius: 4px; cursor: pointer;"
      @click="handleClick"
    >
      Click Me
    </button>
    <p v-if="clicked" style="color: green; margin-top: 10px;">
      Button was clicked at: {{ clickTime }}
    </p>
  </div>
</template>

<script>
export default {
  name: 'PureTestPage',
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