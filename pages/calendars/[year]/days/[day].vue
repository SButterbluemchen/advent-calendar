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
  <h3>
    {{ $t('calendar.day', { day }) }}
  </h3>
  <div>
    <DayPicture v-if="dayConfig.picture" :url="dayUrl" />
    <DayFrame v-if="dayConfig.frameUrl" :url="dayConfig.frameUrl" />
  </div>
  <p>{{ dayConfig.message }}</p>
</template>

<style scoped>
</style>
