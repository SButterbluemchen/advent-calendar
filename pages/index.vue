<script setup lang="ts">
import { DateTime } from 'luxon'

const currentYear = DateTime.now().year

navigateTo(`/calendars/${currentYear}`)
</script>
