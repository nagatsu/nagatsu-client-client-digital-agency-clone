<template>
  <input
    type="date"
    :value="inputValue"
    @input="onInput"
    class="form-input"
  />
</template>

<script setup>
import { computed } from 'vue'
import dayjs from 'dayjs'

const props = defineProps({
  modelValue: { type: [String, Date], default: '' },
  format: { type: String, default: 'YYYY-MM-DD' }
})

const emit = defineEmits(['update:modelValue'])

const inputValue = computed(() => {
  if (!props.modelValue) return ''
  return dayjs(props.modelValue).format('YYYY-MM-DD')
})

const onInput = (e) => {
  const value = dayjs(e.target.value)
  emit('update:modelValue', value.format(props.format))
}
</script>
