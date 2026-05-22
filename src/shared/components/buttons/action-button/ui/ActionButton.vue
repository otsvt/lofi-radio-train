<template>
  <button
    class="px-2 flex-center text-2xl font-bold uppercase transition-opacity hover:opacity-80 disabled:opacity-30"
    :disabled="disabled"
  >
    {{ label }}
  </button>
</template>

<script setup lang="ts">
  defineProps<{ disabled?: boolean; label: string }>();
</script>
