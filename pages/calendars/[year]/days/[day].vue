<script setup lang="ts">
import DayFrame from '~/components/day/DayFrame.vue'
import DayPicture from '~/components/day/DayPicture.vue'
import { CONFIG } from '~/config/config'

definePageMeta({
  layout: 'day-layout',
})

const { public: { nasUrl, user } } = useRuntimeConfig()
const route = useRoute()
const { year, day } = route.params

const dayConfig = computed(() => CONFIG[user][year as string].days[day as string])

const dayUrl = computed(() => {
  const dayImage = dayConfig.value.picture!

  return `${nasUrl}/${user}/${year}/${dayImage}`
})

const dayUploadedVideo = computed(() => {
  const dayVideo = dayConfig.value.uploadedVideo!

  return `${nasUrl}/${user}/${year}/${dayVideo}`
})
</script>

<template>
  <article class="h-screen overflow-hidden grid grid-rows-[auto_auto] gap-2 min-w-3/4">
    <h3 class="text-4xl text-shadow-xs">
      {{ $t('calendar.day', { day }) }}
    </h3>
    <div class="min-h-0 flex justify-center items-center p-1 md:p-4 bg-white">
      <DayPicture v-if="dayConfig.picture" :url="dayUrl" />
      <DayFrame v-if="dayConfig.frameUrl" :url="dayConfig.frameUrl" />
      <DayVideo v-if="dayConfig.uploadedVideo" :url="dayUploadedVideo" />
    </div>
    <p class="text-2xl text-shadow-md/30 flex-shrink-0">
      {{ dayConfig.message }}
    </p>
  </article>
</template>

<style scoped>
</style>
