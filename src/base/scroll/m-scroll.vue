<template>
  <div ref="rootRef">
    <slot></slot>
  </div>
</template>

<script setup>
  import useScroll from './use-scroll.js'
  import { ref } from 'vue'

  const rootRef = ref(null)
  const scroll = ref(null)
  const props = defineProps({
    click: { 
      type: Boolean,
      default: true
    },
    probeType: {
      type: Number,
      default: 0
    }
  })
  const emit = defineEmits(['scroll'])
  scroll.value = useScroll(rootRef, props, emit)

</script>
