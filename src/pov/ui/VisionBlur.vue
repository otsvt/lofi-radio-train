<template>
  <div v-if="isInterfaceOpen" :class="['layer bg-center pointer-events-none', zIndex, blur]"></div>
</template>

<script setup lang="ts">
  import { useInterface } from "@/interface";

  const props = defineProps<{
    zIndex: string;
    blur: string;
  }>();

  const { isInterfaceOpen } = useInterface();
</script>
