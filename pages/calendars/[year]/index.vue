<script setup lang="ts">
import { useRoute } from 'vue-router'
import Calendar from '~/components/calendar/Calendar.vue'
import { doesCalendarExist } from '~/utils/calendar.utils'
import { currentMonth, currentYear } from '~/utils/dates.utils'

const props = defineProps<{ year: number }>()
const { year: yearFromProps } = props

const route = useRoute()
const calculatedCurrentMonth = ref<number>(currentMonth.value)

const yearToDisplay = yearFromProps ?? Number(route.params.year)

const doesCalendarFromUrlExist = computed(() => {
  return doesCalendarExist(yearToDisplay)
})

const isCurrentYear = computed(() => yearToDisplay === currentYear.value)

const showCountdown = computed(() => {
  return isCurrentYear.value && calculatedCurrentMonth.value !== 12
})
</script>

<template>
  <h1 class="h1 text-center">
    {{ $t('adventCalendar', { year: yearToDisplay }) }}
  </h1>
  <article class="flex justify-center max-h-full max-w-full overflow-auto">
    <p v-if="!doesCalendarFromUrlExist" data-testid="error">
      Error
    </p>
    <article v-else>
      <div v-if="showCountdown" data-testid="countdown">
        <CalendarCountdown @reached="calculatedCurrentMonth = 12" />
      </div>
      <div v-else data-testid="calendar">
        <Calendar />
      </div>
    </article>
  </article>
</template>
