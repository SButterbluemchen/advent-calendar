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
  <article class="flex flex-col gap-4">
    <div class="relative">
      <h3 class="text-4xl text-shadow-xs">
        {{ $t('calendar.day', { day }) }}
      </h3>
      <div class="absolute top-4 left-1 flex gap-2 items-center">
        <i class="pi pi-arrow-left" />
        <span>{{ $t('back') }}</span>
      </div>
    </div>
    <div>
      <DayPicture v-if="dayConfig.picture" :url="dayUrl" />
      <DayFrame v-if="dayConfig.frameUrl" :url="dayConfig.frameUrl" />
    </div>
    <p class="text-2xl text-shadow-xs">
      {{ dayConfig.message }}
    </p>
  </article>
</template>

<style scoped>
</style>
