export const currentMonth = computed<number>(() => new Date().getMonth() + 1)
export const currentYear = computed<number>(() => new Date().getFullYear())
