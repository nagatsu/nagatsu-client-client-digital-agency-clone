<template>
  <div class="space-y-2">
    <label v-if="label" class="form-label">{{ label }}</label>
    <div
      class="flex flex-col items-center justify-center border-2 border-dashed rounded-md p-4 cursor-pointer"
      :class="{ 'border-primary-500 bg-primary-50': dragging }"
      @click="openDialog"
      @dragover.prevent="dragging = true"
      @dragleave.prevent="dragging = false"
      @drop.prevent="handleDrop"
    >
      <slot>ファイルを選択またはここにドロップ</slot>
      <input ref="fileInput" type="file" class="hidden" :multiple="multiple" @change="handleChange" />
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const props = defineProps({
  multiple: { type: Boolean, default: false },
  label: { type: String, default: '' }
})

const emit = defineEmits(['change'])

const fileInput = ref(null)
const dragging = ref(false)

const openDialog = () => {
  fileInput.value.click()
}

const handleChange = (e) => {
  const files = Array.from(e.target.files)
  emit('change', props.multiple ? files : files[0])
}

const handleDrop = (e) => {
  dragging.value = false
  const files = Array.from(e.dataTransfer.files)
  emit('change', props.multiple ? files : files[0])
}
</script>
