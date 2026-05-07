<template>
  <button
    :class="[
      'py-2 px-4 flex-center border font-bold border-panel-text ring-panel-text/40 transition-shadow hover:ring-4',
      textSize,
    ]"
  >
    {{ symbols }}
  </button>
</template>

<script setup lang="ts">
  defineProps<{
    textSize: string;
    symbols: string;
  }>();
</script>
