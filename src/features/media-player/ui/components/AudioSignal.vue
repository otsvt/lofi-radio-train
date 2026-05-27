<template>
  <div class="flex h-8 items-end gap-x-2">
    <p
      v-for="bar in bars"
      class="w-1.5 bg-panel-text/80 shadow-[0_0_0.55rem] shadow-panel-text/80 transition-all"
      :style="{ height: `${bar}px` }"
    />
  </div>
</template>

<script setup lang="ts">
  defineProps<{
    bars: number[];
  }>();
</script>
