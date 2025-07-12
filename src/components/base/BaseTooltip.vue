<template>
  <div class="relative inline-block">
    <!-- トリガー要素 - GitHub Pages Deploy Trigger -->
    <div
      ref="trigger"
      @mouseenter="showTooltip"
      @mouseleave="hideTooltip"
      @focus="showTooltip"
      @blur="hideTooltip"
    >
      <slot />
    </div>

    <!-- ツールチップ -->
    <Transition
      enter-active-class="transition duration-200 ease-out"
      enter-from-class="opacity-0 scale-95"
      enter-to-class="opacity-100 scale-100"
      leave-active-class="transition duration-150 ease-in"
      leave-from-class="opacity-100 scale-100"
      leave-to-class="opacity-0 scale-95"
    >
      <div
        v-if="isVisible"
        ref="tooltip"
        :class="tooltipClasses"
        :style="tooltipStyle"
      >
        {{ text }}
        <!-- 矢印 -->
        <div
          :class="arrowClasses"
          :style="arrowStyle"
        />
      </div>
    </Transition>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'

interface Props {
  text: string
  position?: 'top' | 'bottom' | 'left' | 'right'
  delay?: number
  offset?: number
}

const props = withDefaults(defineProps<Props>(), {
  position: 'top',
  delay: 200,
  offset: 8
})

const isVisible = ref(false)
const trigger = ref<HTMLElement>()
const tooltip = ref<HTMLElement>()
let timeoutId: number | null = null

const showTooltip = () => {
  if (timeoutId) clearTimeout(timeoutId)
  timeoutId = window.setTimeout(() => {
    isVisible.value = true
  }, props.delay)
}

const hideTooltip = () => {
  if (timeoutId) clearTimeout(timeoutId)
  isVisible.value = false
}

const tooltipClasses = computed(() => [
  'absolute z-50 px-3 py-2 text-sm font-medium text-white bg-gray-900 rounded-lg shadow-sm dark:bg-gray-700',
  'whitespace-nowrap'
])

const tooltipStyle = computed(() => {
  const positions = {
    top: {
      bottom: '100%',
      left: '50%',
      transform: 'translateX(-50%)',
      marginBottom: `${props.offset}px`
    },
    bottom: {
      top: '100%',
      left: '50%',
      transform: 'translateX(-50%)',
      marginTop: `${props.offset}px`
    },
    left: {
      right: '100%',
      top: '50%',
      transform: 'translateY(-50%)',
      marginRight: `${props.offset}px`
    },
    right: {
      left: '100%',
      top: '50%',
      transform: 'translateY(-50%)',
      marginLeft: `${props.offset}px`
    }
  }
  
  return positions[props.position]
})

const arrowClasses = computed(() => [
  'absolute w-2 h-2 bg-gray-900 dark:bg-gray-700',
  'transform rotate-45'
])

const arrowStyle = computed(() => {
  const arrows = {
    top: {
      bottom: '-4px',
      left: '50%',
      transform: 'translateX(-50%) rotate(45deg)'
    },
    bottom: {
      top: '-4px',
      left: '50%',
      transform: 'translateX(-50%) rotate(45deg)'
    },
    left: {
      right: '-4px',
      top: '50%',
      transform: 'translateY(-50%) rotate(45deg)'
    },
    right: {
      left: '-4px',
      top: '50%',
      transform: 'translateY(-50%) rotate(45deg)'
    }
  }
  
  return arrows[props.position]
})
</script>