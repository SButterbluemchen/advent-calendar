<script setup lang="ts">
import { range, shuffle } from 'lodash-es'
import { markRaw } from 'vue'
import Card from '~/components/calendar/Card.vue'

const shuffledArray = markRaw(shuffle(range(1, 24)))
const days = ref(shuffledArray)
</script>

<template>
  <article class="grid p-1 grid-cols-3 gap-x-[1.25rem] gap-y-[0.75rem] sm:grid-cols-4 sm:gap-x-[3rem] sm:gap-y-[3rem] md:grid-cols-6 md:gap-x-[2rem] md:gap-y-[2rem] lg:grid-cols-6 lg:gap-y-[2rem] xl:gap-y-[3rem] xl:gap-x-[6rem]">
    <ClientOnly>
      <Card
        v-for="day in days" :key="day" :day="day"
      />
    </ClientOnly>
  </article>
</template>
