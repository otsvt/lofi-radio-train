<template>
  <div :class="['rounded hologram-line-shadow', size, color]"></div>
</template>

<script setup lang="ts">
  defineProps<{
    size: string;
    color: string;
  }>();
</script>
