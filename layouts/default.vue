<script setup lang="ts">
import { usePreset } from '@primeuix/themes'
import { getCustomizedPreset } from '~/app.preset'

const { public: { nasUrl, user } } = useRuntimeConfig()
const route = useRoute()
const currentYear = new Date().getFullYear()
const yearFromUrl = computed(() => Number(route.params.year))

const backgroundImage = computed(() => {
  return `url(${nasUrl}/${user}/${yearFromUrl.value}/background.jpg)`
})

const style = computed(() => ({
  backgroundImage: backgroundImage.value,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
}))

watch(() => route, () => {
  usePreset(getCustomizedPreset(yearFromUrl.value || currentYear))
}, { immediate: true })
</script>

<template>
  <section class="h-screen bg-cover bg-center bg-fixed" :style="style">
    <AppDrawer />
    <main class="flex flex-col text-white items-center h-screen w-full p-6 md:p-10 text-center">
      <slot />
    </main>
  </section>
</template>
