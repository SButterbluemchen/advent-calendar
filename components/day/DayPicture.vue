<script setup lang="ts">
const { url } = defineProps<{ url: string }>()
</script>

<template>
  <NuxtImg :src="url" class="max-w-full max-h-full object-contain" />
</template>
