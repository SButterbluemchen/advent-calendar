<script setup lang="ts">
import { ref } from 'vue'
import { CONFIG } from '~/config/config'

const props = defineProps<{
  showBackButton?: boolean
}>()

const { public: { nasUrl, user } } = useRuntimeConfig()

const avatarUrl = computed(() => {
  return `${nasUrl}/${user}/avatar.png`
})

const calendarYears = computed(() => {
  return CONFIG[user] ? Object.keys(CONFIG[user]).sort((a, b) => Number(b) - Number(a)) : []
})

const visible = ref(false)
</script>

<template>
  <div class="card flex absolute">
    <Drawer v-model:visible="visible">
      <template #container="{ closeCallback }">
        <div class="flex flex-col h-full">
          <div class="flex items-center justify-end px-6 pt-4 shrink-0">
            <span>
              <Button type="button" icon="pi pi-times" rounded outlined @click="closeCallback" />
            </span>
          </div>
          <div class="overflow-y-auto">
            <ul class="list-none p-4 m-0">
              <li>
                <ul class="list-none p-0 m-0 overflow-hidden">
                  <li v-for="calendarYear in calendarYears" :key="calendarYear">
                    <router-link
                      v-ripple
                      :to="`/calendars/${calendarYear}`"
                      class="flex items-center cursor-pointer p-4 rounded text-surface-0 hover:bg-surface-900 dark:text-surface-0 dark:hover:bg-surface-800 duration-150 transition-colors p-ripple"
                      @click="closeCallback"
                    >
                      <i class="pi pi-calendar mr-2" />
                      <span class="font-medium">{{ calendarYear }}</span>
                    </router-link>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
          <div class="mt-auto">
            <hr class="mb-4 mx-4 border-t border-0 border-surface-0 dark:border-surface-700">
            <p class="m-4 flex items-center p-4 gap-2 rounded text-surface-0 dark:text-surface-0 ">
              <NuxtImg width="40" height="40" class="rounded-full" :src="avatarUrl" alt="User Avatar" />
              <span class="font-bold capitalize">{{ user }}</span>
            </p>
          </div>
        </div>
      </template>
    </Drawer>
    <div class="flex flex-col">
      <Button data-testid="open-drawer-button" :class="[{ invisible: visible }]" icon="pi pi-bars" variant="outlined" class="top-3 start-2 mb-2" @click="visible = true" />
      <Button v-if="props.showBackButton" data-testid="open-drawer-button" icon="pi pi-arrow-left" variant="outlined" class="top-3 start-2" @click="$router.back()" />
    </div>
  </div>
</template>
