<script setup lang="ts">
import { usePreset } from '@primeuix/themes'
import { getCustomizedPreset } from '~/app.preset'
import { calendarVariables } from '~/utils/calendar.utils'

const currentYear = new Date().getFullYear()
const backgroundImage = computed(() => {
  const url = calendarVariables[currentYear].backgroundUrl || ''
  return url ? `url(${url})` : ''
})

const style = computed(() => ({
  backgroundImage: backgroundImage.value,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
}))

usePreset(getCustomizedPreset(currentYear))
</script>

<template>
  <section class="app-container h-screen" :style="style">
    <AppDrawer />
    <slot />
  </section>
</template>
