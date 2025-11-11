<script setup lang="ts">
const { url } = defineProps<{ url: string }>()
</script>

<template>
  <iframe
    class="w-full h-full justify-center border-0"
    allowFullScreen="true"
    :src="url"
    title="Jigsaw Puzzle"
  >Puzzle of the day
  </iframe>
</template>
