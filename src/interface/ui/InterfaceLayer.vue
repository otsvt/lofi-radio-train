<template>
  <PovLayer v-bind="activePlayerLayer" />
</template>

<script setup lang="ts">
  import { computed } from "vue";
  import { PovLayer } from "@/pov";
  import { useInterface } from "../composables/useInterface";

  import activePlayer from "@/shared/assets/main-backgrounds/player-active.png";

  const { zIndex } = defineProps<{
    zIndex: string;
  }>();

  const { isInterfaceOpen } = useInterface();

  const playerLayerClass = computed(() => [
    "layer translate-z-2 transition-all duration-500 ease-in-out",
    zIndex,
    "bg-center",
  ]);

  const playerTransform = computed(() => {
    if (isInterfaceOpen.value) {
      return "translateY(0)";
    } else {
      return "translateY(100%)";
    }
  });

  const activePlayerLayer = computed(() => ({
    image: activePlayer,
    layerClass: playerLayerClass.value,
    transform: playerTransform.value,
  }));
</script>
