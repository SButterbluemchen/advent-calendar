<script setup lang="ts">
import CandyCaneLoader from '~/components/CandyCaneLoader.vue'

definePageMeta({
  layout: 'default',
  title: 'adventCalendar',
})

const now = ref<Date>()
const eventDate = new Date(new Date().getFullYear(), 11, 1)
const loading = ref(true)
const showCalendar = ref(false)

const isCalendar = computed(() => now.value && now.value >= eventDate)

onMounted(() => {
  now.value = new Date()
  loading.value = false
})
</script>

<template>
  <article class="flex justify-center items-center h-screen w-full">
    <CandyCaneLoader
      v-if="loading"
    />
    <div v-else-if="isCalendar || showCalendar">
      CalendarView
    </div>
    <div v-else>
      <CalendarCountdown @countdown-is-finished="showCalendar = true" />
    </div>
  </article>
</template>
