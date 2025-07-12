<template>
  <div class="p-8 space-y-8">
    <h1 class="text-2xl font-bold mb-4">Gallery Components Test</h1>
    
    <!-- Test basic components first -->
    <div class="bg-green-100 p-4 rounded">
      <h2 class="font-semibold mb-2">Basic Components (Should Work)</h2>
      <BaseButton @click="clicked = !clicked" class="mr-2">
        Click Test {{ clicked ? '✅' : '❌' }}
      </BaseButton>
      <p>Current time: {{ new Date().toLocaleTimeString() }}</p>
    </div>

    <!-- Test ImageGallery -->
    <div class="bg-yellow-100 p-4 rounded">
      <h2 class="font-semibold mb-2">ImageGallery Test</h2>
      <p class="mb-4">Testing if ImageGallery component loads...</p>
      <ImageGallery
        :images="testImages"
        :columns="2"
        :gap="4"
        :lightbox="false"
      />
    </div>

    <!-- Test HeroImage -->
    <div class="bg-blue-100 p-4 rounded">
      <h2 class="font-semibold mb-2">HeroImage Test</h2>
      <p class="mb-4">Testing if HeroImage component loads...</p>
      <HeroImage
        src="https://picsum.photos/800/400?random=1"
        alt="Test hero image"
        height="md"
        overlay="gradient"
        :actions="[]"
      />
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import BaseButton from '@/components/base/BaseButton.vue'
import ImageGallery from '@/components/base/ImageGallery.vue'
import HeroImage from '@/components/base/HeroImage.vue'

const clicked = ref(false)

const testImages = ref([
  {
    src: 'https://picsum.photos/300/200?random=1',
    alt: 'Test 1',
    caption: 'Test Image 1'
  },
  {
    src: 'https://picsum.photos/300/200?random=2', 
    alt: 'Test 2',
    caption: 'Test Image 2'
  }
])
</script>