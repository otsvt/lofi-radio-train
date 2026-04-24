<template>
  <div :class="['layer bg-center pointer-events-none vision-shadow', zIndex]"></div>
</template>

<script setup lang="ts">
  const props = defineProps<{
    zIndex: string;
  }>();
</script>

<style scoped>
  .vision-shadow {
    background: radial-gradient(
      ellipse at center,
      rgba(0, 0, 0, 0) 50%,
      rgba(0, 0, 0, 0.15) 65%,
      rgba(0, 0, 0, 0.25) 80%,
      rgba(0, 0, 0, 0.65) 100%
    );
  }
</style>
