<template>
  <div :class="['space-y-6 pl-4', flexSize]">
    <div class="space-y-4">
      <p class="text-3xl uppercase">scene</p>
      <div class="flex items-center gap-x-4 text-2xl">
        <button class="px-2.5 flex-center font-bold ring-panel-text/40 transition-shadow hover:ring-4"><</button>
        <span class="uppercase">night city</span>
        <button class="px-2.5 flex-center font-bold ring-panel-text/40 transition-shadow hover:ring-4">></button>
      </div>
    </div>
    <Divider size="h-1" color="bg-panel-text/80" />
    <div>
      <p class="text-3xl uppercase">weather</p>
    </div>
  </div>
</template>

<script setup lang="ts">
  import Divider from "./Divider.vue";

  defineProps<{
    flexSize: string;
  }>();
</script>
