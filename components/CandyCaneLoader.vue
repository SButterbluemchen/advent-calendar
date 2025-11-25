<script setup lang="ts">
const initialValue = 10
const width = ref(initialValue)
const maxWidth = 100
let timer: number | undefined

onMounted(() => {
  timer = window.setInterval(() => {
    if (width.value + 2 > maxWidth) {
      width.value = initialValue
    }
    else {
      width.value = width.value + 2
    }
  }, 50)
})

onUnmounted(() => {
  if (timer !== undefined) {
    clearInterval(timer)
  }
})
</script>

<template>
  <div class="flex flex-col itms-center gap-2">
    <svg :width="300" :height="30" viewBox="0 0 100 10">
      <defs>
        <pattern id="diagonal-stripes" patternUnits="userSpaceOnUse" width="8" height="8" patternTransform="rotate(45)">
          <rect x="0" y="0" width="4" height="8" fill="red" />
          <rect x="4" y="0" width="4" height="8" fill="white" />
        </pattern>
      </defs>
      <rect x="0" y="2" :width="width" height="6" fill="url(#diagonal-stripes)" rx="3" />
    </svg>
    <p>{{ $t('loading') }}</p>
  </div>
</template>

<style scoped>

</style>
