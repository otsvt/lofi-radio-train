<template>
  <StartButton v-if="!isInterfaceOpen" :class="['interface-button-position', zIndex]" @click="openInterface" />
</template>

<script setup lang="ts">
  import { useInterface } from "../composables/useInterface";
  import { StartButton } from "@/shared/components/buttons";

  const { zIndex } = defineProps<{
    zIndex: string;
  }>();

  const { isInterfaceOpen, openInterface } = useInterface();
</script>
