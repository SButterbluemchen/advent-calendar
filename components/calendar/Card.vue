<script setup lang="ts">
import { currentMonth, currentYear } from '~/utils/dates.utils'
import { appRoutes } from '~/utils/routes.utils'

const props = defineProps<{ day: number }>()
const { day } = props
const route = useRoute()

const isSameYear = computed(() => route.params.year === currentYear.value.toString())

const isDisabled = computed(() => isSameYear.value && Date.now() < new Date(currentYear.value, currentMonth.value - 1, day + 1).getTime())

function goToPage() {
  navigateTo({
    path: `/${appRoutes.CALENDARS}/${route.params.year}/${appRoutes.DAYS}/${day}`,
  })
}
</script>

<template>
  <p :data-testid="`calendar-card-${day}`" class="flex items-center justify-center font-bold border-1 rounded-lg bg-black/20 hover:scale-[1.03] duration-[0.3s] ease-in-out cursor-pointer w-[4rem] h-[4rem] text-xl sm:w-[5.5rem] sm:h-[5.5rem] sm:text-2xl md:border-3 lg:text-4xl lg:w-[7rem] lg:h-[7rem]" :class="{ 'opacity-50 bg-black/20 hover:cursor-default hover:scale-none': isDisabled }" @click="goToPage()">
    {{ day }}
  </p>
</template>
