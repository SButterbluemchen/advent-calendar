<script setup lang="ts">
import PageLayout from '~/components/PageLayout.vue'
import YearPage from '~/pages/calendars/[year]/index.vue'

const { public: { user } } = useRuntimeConfig()

const capitalizedName = user ? `${user.charAt(0).toUpperCase() + user.slice(1)}` : ''
</script>

<template>
  <PageLayout>
    <template #title>
      <h2>{{ $t('home.pageTitle', { name: capitalizedName }) }}</h2>
    </template>
    <YearPage :year="2025" />
  </PageLayout>
</template>
