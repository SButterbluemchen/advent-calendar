<script setup lang="ts">
import { useRoute } from 'vue-router'
import PageLayout from '~/components/PageLayout.vue'
import { doesCalendarExist } from '~/utils/calendar.utils'

const route = useRoute()
const doesCalendarFromUrlExist = computed(() => {
  const year = Number(route.params.year)
  return doesCalendarExist(year)
})

const currentMonth = ref<number>(new Date().getMonth() + 1)
const currentYear = ref<number>(new Date().getFullYear())
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
    <article class="flex justify-center items-center h-full w-full">
      <p v-if="!doesCalendarFromUrlExist" data-testid="error">
        Error
      </p>
      <article v-else>
        <div v-if="showCountdown" data-testid="countdown">
          <CalendarCountdown @reached="currentMonth = 12" />
        </div>
        <div v-else data-testid="calendar">
          CalendarView
        </div>
      </article>
    </article>
  </PageLayout>
</template>
