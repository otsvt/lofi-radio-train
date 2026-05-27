<template>
  <button
    :disabled="disabled"
    class="px-2.5 flex-center font-bold ring-panel-text/40 transition-shadow hover:ring-4 disabled:opacity-30"
  >
    {{ symbols }}
  </button>
</template>

<script setup lang="ts">
  defineProps<{
    symbols: string;
    disabled?: boolean;
  }>();
</script>
