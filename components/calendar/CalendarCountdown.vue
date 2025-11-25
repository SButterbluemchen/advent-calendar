<script setup lang="ts">
import type { Timeout } from 'unenv/node/internal/timers/timeout'
import type { labelValue } from '~/models/general.interfaces'
import { onMounted, onUnmounted, ref } from 'vue'
import { calendarYears } from '~/utils/calendar.utils'

const emit = defineEmits<{
  (event: 'reached'): void
}>()

const targetDateCurrentYear = computed(() => new Date(new Date().getFullYear(), 11, 1))
const targetDateFromCalendar = computed(() =>
  calendarYears.value && calendarYears.value.length > 0
    ? new Date(calendarYears.value[0], 11, 1)
    : null,
)
const targetDate = ref(targetDateFromCalendar.value ? targetDateFromCalendar : targetDateCurrentYear.value)
const countdown = ref<labelValue[]>([])
const loading = ref<boolean>(true)

let timer: number | Timeout<any>

function updateCountdown(): void {
  const now = new Date().getTime()
  if (targetDate.value) {
    const distance = targetDate.value.getTime() - now

    if (distance <= 0) {
      emit('reached')
      countdown.value = []
      clearInterval(timer)
      return
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24))
    const hours = Math.floor((distance / (1000 * 60 * 60)) % 24)
    const minutes = Math.floor((distance / (1000 * 60)) % 60)
    const seconds = Math.floor((distance / 1000) % 60)

    countdown.value = [
      { value: days, label: 'days' },
      { value: hours, label: 'hours' },
      { value: minutes, label: 'minutes' },
      { value: seconds, label: 'seconds' },
    ]
    loading.value = false
  }
}

onMounted(() => {
  updateCountdown()
  timer = setInterval(updateCountdown, 1000)
})

onUnmounted(() => {
  clearInterval(timer)
})
</script>

<template>
  <div v-if="loading" class="mt-50">
    <CandyCaneLoader />
  </div>
  <div v-else class="flex flex-col gap-2 md:gap-4 items-center">
    <p v-if="countdown.length > 0" class="text-xl md:text-2xl lg:text-3xl text-center" data-testid="countdown-title">
      {{ $t('calendar.countdown.title') }}
    </p>
    <p v-else class="text-xl md:text-2xl lg:text-3xl text-center" data-testid="countdown-finished">
      {{ $t('calendar.countdown.finished') }}
    </p>
    <div class="grid grid-cols-2 md:grid-cols-4">
      <p v-for="{ value, label } in countdown" :key="label" class="m-1 md:m-3 p-4 min-w-20 md:min-w-30 lg:min-w-40 bg-black/40 rounded-lg flex flex-col gap-1 items-center">
        <span class="text-8xl">{{ value }}</span>
        <span class="text-xl">{{ $t(`calendar.countdown.${label}`) }}</span>
      </p>
    </div>
  </div>
</template>

<style scoped>
</style>
