<script setup lang="ts">
import { usePreset } from '@primeuix/themes'
import { getCustomizedPreset } from '~/app.preset'
import { calendarVariables } from '~/utils/calendar.utils'

const currentYear = computed(() => new Date().getFullYear())
const backgroundImage = computed(() => {
  const url = calendarVariables[currentYear.value]?.backgroundUrl || ''
  return url ? `url(${url})` : ''
})

const style = computed(() => ({
  backgroundImage: backgroundImage.value,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
}))

usePreset(getCustomizedPreset(currentYear.value))

// Named slots are not supported in the default layout
const route = useRoute()
const title = computed(() => route.meta.title || '')
useHead({ title: title.value })
</script>

<template>
  <section class="app-container h-screen relative" :style="style">
    <AppDrawer />
    <article class="flex flex-col text-white items-center h-screen w-full p-10 md:p-20 text-center">
      <h2 class="text-white text-3xl md:text-4xl lg:text-6xl">
        {{ $t(title) }}
      </h2>
      <slot />
    </article>
  </section>
</template>
