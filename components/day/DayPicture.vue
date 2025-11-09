<script setup lang="ts">
const { url } = defineProps<{ url: string }>()
</script>

<template>
  <NuxtImg :src="url" />
</template>
