<script setup lang="ts">
import DayFrame from '~/components/day/DayFrame.vue'
import DayPicture from '~/components/day/DayPicture.vue'
import { CONFIG } from '~/config/config'

const { public: { nasUrl, user } } = useRuntimeConfig()
const route = useRoute()
const { year, day } = route.params

const dayConfig = computed(() => CONFIG[user][year as string].days[day as string])

const dayUrl = computed(() => {
  const dayImage = dayConfig.value.picture!

  return `${nasUrl}/${user}/${year}/${dayImage}`
})
</script>

<template>
  <article class="h-screen overflow-hidden grid grid-rows-[auto_1fr_auto] min-w-3/4">
    <h3 class="text-4xl text-shadow-xs">
      {{ $t('calendar.day', { day }) }}
    </h3>
    <div class="min-h-0 flex justify-center items-center p-4">
      <DayPicture v-if="dayConfig.picture" :url="dayUrl" />
      <DayFrame v-if="dayConfig.frameUrl" :url="dayConfig.frameUrl" />
    </div>
    <p class="text-2xl text-shadow-xs flex-shrink-0">
      {{ dayConfig.message }}
    </p>
  </article>
</template>

<style scoped>
</style>
