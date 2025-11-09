<script setup lang="ts">
import { CONFIG } from '~/config/config'

const { public: { nasUrl, user } } = useRuntimeConfig()

const route = useRoute()

const { year, day } = route.params

const myUrl = computed(() => {
  const dayConfig = CONFIG[user][year as string].days[day as string]

  const dayImage = dayConfig.picture!

  const url = `${nasUrl}/${user}/${year}/${dayImage}`

  return url
})
</script>

<template>
  <p>Photo</p>
  <NuxtImg :src="myUrl" />
</template>

<style scoped>
</style>
