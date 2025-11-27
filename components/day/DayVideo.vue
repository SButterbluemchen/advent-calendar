<script setup lang="ts">
const { url } = defineProps<{ url: string }>()

const { t } = useI18n()
</script>

<template>
  <video
    class="w-full h-full justify-center border-0"
    controls
    :src="url"
    title="Video"
  >
    {{ t('calendar.videoFallback') }}
  </video>
</template>
