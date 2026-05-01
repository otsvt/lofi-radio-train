<template>
  <StartButton :class="['start-button-position', startButtonZIndex]" />
</template>

<script setup lang="ts">
  import { computed } from "vue";
  import { StartButton } from "@/shared/components/buttons";

  const { zIndex } = defineProps<{
    zIndex: string;
  }>();

  const startButtonZIndex = computed(() => zIndex);
</script>
