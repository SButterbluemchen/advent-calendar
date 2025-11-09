<script setup lang="ts">
const { public: { nasUrl } } = useRuntimeConfig()

const myUrl = computed(() => {
  return `${nasUrl}/louise/2025/bg.png`
})
</script>

<template>
  <p>Photo</p>
  <NuxtImg :src="myUrl" />
</template>

<style scoped>
</style>
