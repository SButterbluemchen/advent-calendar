<script setup lang="ts">
definePageMeta({
  layout: 'default',
  title: 'calendar.countdown.pageTitle',
})

const now = ref<Date>()
const eventDate = new Date(new Date().getFullYear(), 11, 1)
const loading = ref(true)
const showCalendar = ref(false)

onMounted(() => {
  now.value = new Date()
  loading.value = false
})

const isCalendar = computed(() => now.value && now.value >= eventDate)
</script>

<template>
  <div v-if="loading">
    CUSTOM LOADING
  </div>
  <div v-else-if="isCalendar || showCalendar">
    CalendarView
  </div>
  <div v-else class="flex justify-center items-center h-screen w-full">
    <CalendarCountdown @countdown-is-finished="showCalendar = true" />
  </div>
</template>
