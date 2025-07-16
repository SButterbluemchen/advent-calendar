<script setup lang="ts">
definePageMeta({
  layout: 'default',
  title: 'home.pageTitle',
})

const route = useRoute()
const title = computed(() => route.meta.title || '')
useHead({ title: title.value })
</script>

<template>
  <h1>{{ $t(title) }}</h1>
</template>
