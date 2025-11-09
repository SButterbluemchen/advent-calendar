<script setup lang="ts">
const { url } = defineProps<{ url: string }>()
</script>

<template>
  <div class="jigsaw-container">
    <iframe
      class="col-12"
      allowFullScreen="true"
      :src="url"
      title="Jigsaw Puzzle"
    >Puzzle of the day
    </iframe>
  </div>
</template>

<style lang="scss" scoped>
.jigsaw-container {
  text-align: center;

  iframe {
    width: 100%;
    height: 600px;
    max-height: 90vh;
    border: none;
  }
}
</style>
