<script setup lang="ts">
import { useRoute } from 'vue-router'
import Calendar from '~/components/calendar/Calendar.vue'
import PageLayout from '~/components/PageLayout.vue'
import { doesCalendarExist } from '~/utils/calendar.utils'
import { currentMonth, currentYear } from '~/utils/dates.utils'

const route = useRoute()
const doesCalendarFromUrlExist = computed(() => {
  const year = Number(route.params.year)
  return doesCalendarExist(year)
})

const isCurrentYear = computed(() => route.params.year === currentYear.value.toString())

const showCountdown = computed(() => {
  return isCurrentYear.value && currentMonth.value !== 12
})
</script>

<template>
  <PageLayout>
    <template #title>
      {{ `${$t('adventCalendar')} ${route.params.year}` }}
    </template>
    <article class="flex justify-center max-h-full max-w-full overflow-auto">
      <p v-if="!doesCalendarFromUrlExist" data-testid="error">
        Error
      </p>
      <article v-else>
        <div v-if="showCountdown" data-testid="countdown">
          <CalendarCountdown @reached="currentMonth = 12" />
        </div>
        <div v-else data-testid="calendar">
          <Calendar />
        </div>
      </article>
    </article>
  </PageLayout>
</template>
