<template>
  <div v-if="isInterfaceOpen" :class="['layer flex-center', zIndex]">
    <article class="-translate-y-20 w-200 h-100 border-2 backdrop-blur">Panel</article>
    <button @click="closeInterface">Close</button>
  </div>
</template>

<script setup lang="ts">
  import { useInterface } from "../composables/useInterface";

  const { zIndex } = defineProps<{
    zIndex: string;
  }>();

  const { isInterfaceOpen, closeInterface } = useInterface();
</script>
