<template>
  <div class="p-8 space-y-8">
    <h1 class="text-2xl font-bold mb-4">Image Component Test</h1>
    
    <!-- Test basic BaseImage -->
    <div class="bg-blue-100 p-4 rounded">
      <h2 class="font-semibold mb-2">BaseImage Test</h2>
      <BaseImage
        src="https://picsum.photos/200/200?random=1"
        alt="Test image"
        size="md"
        rounded="md"
      />
    </div>
    
    <!-- Test BaseCard -->
    <BaseCard>
      <div class="p-4">
        <h2 class="font-semibold mb-2">BaseCard Test</h2>
        <p>This card should be visible if BaseCard works.</p>
      </div>
    </BaseCard>
    
    <!-- Test other base components -->
    <div class="bg-green-100 p-4 rounded">
      <h2 class="font-semibold mb-2">Other Components Test</h2>
      <BaseButton @click="clicked = !clicked" class="mr-2">
        BaseButton {{ clicked ? '✅' : '❌' }}
      </BaseButton>
      <BaseBadge>BaseBadge</BaseBadge>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import BaseImage from '@/components/base/BaseImage.vue'
import BaseCard from '@/components/base/BaseCard.vue'
import BaseButton from '@/components/base/BaseButton.vue'
import BaseBadge from '@/components/base/BaseBadge.vue'

const clicked = ref(false)
</script>