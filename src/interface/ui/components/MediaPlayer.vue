<template>
  <div :class="['space-y-6', flexSize]">
    <p class="text-3xl">NOW PLAYING</p>
    <div class="space-y-2">
      <h3 class="text-2xl underline">Midnight Drive</h3>
      <p class="text-xl">The Lofi Club</p>
    </div>
  </div>
</template>

<script setup lang="ts">
  defineProps<{
    flexSize: string;
  }>();
</script>
