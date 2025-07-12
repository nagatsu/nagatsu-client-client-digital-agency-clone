<template>
  <div>
    <h1>Debug Page Works!</h1>
    <p>Current time: {{ time }}</p>
  </div>
</template>

<script>
export default {
  name: 'DebugPage',
  data() {
    return {
      time: new Date().toISOString()
    }
  }
}
</script>