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
</script>

<template>
  <div class="h-dvh overflow-hidden grid grid-rows-[auto_1fr]">
    <h1 class="h1 text-center">
      {{ $t('calendar.day', { day }) }}
    </h1>

    <article class="min-h-0 flex flex-col p-4">
      <div class="flex-1 min-h-0 relative">
        <DayPicture
            v-if="dayConfig.picture"
            :url="dayUrl"
            class="absolute inset-0 w-full h-full object-contain"
        />
        <DayFrame
            v-if="dayConfig.frameUrl"
            :url="dayConfig.frameUrl"
            class="absolute inset-0 w-full h-full"
        />
      </div>

      <p class="text-center text-2xl text-shadow-xs flex-shrink-0">
        {{ dayConfig.message }}
      </p>
    </article>
  </div>
</template>
