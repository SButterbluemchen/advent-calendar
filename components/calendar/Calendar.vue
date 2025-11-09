<script setup lang="ts">
import Card from '~/components/calendar/Card.vue'
import { shuffledDays } from '~/utils/calendar.utils'
</script>

<template>
  <article class="grid p-1 grid-cols-3 gap-x-[1.25rem] gap-y-[0.75rem] sm:grid-cols-4 sm:gap-x-[3rem] sm:gap-y-[3rem] lg:grid-cols-6 lg:gap-y-[3rem] xl:gap-x-[6rem]">
    <Card
      v-for="day in shuffledDays" :key="day" :day="day"
    />
  </article>
</template>
