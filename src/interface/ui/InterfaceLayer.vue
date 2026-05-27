<template>
  <PovLayer v-bind="activePlayerLayer" />
</template>

<script setup lang="ts">
  import { computed } from "vue";
  import { PovLayer } from "@/pov";
  import { useFullscreen } from "@/shared/components/fullscreen";
  import { useCameraMovement } from "@/shared/composables";

  import { useInterface } from "../composables/useInterface";

  import activePlayer from "@/shared/assets/main-backgrounds/player-active.png";

  const { zIndex } = defineProps<{
    zIndex: string;
  }>();

  const { isZoomedIn: isCloseToWindow } = useCameraMovement();

  const { isFullscreen } = useFullscreen();

  const { isInterfaceOpen } = useInterface();

  const playerLayerClass = computed(() => [
    "layer translate-z-2 transition-all duration-500 ease-in-out",
    zIndex,
    isFullscreen.value
      ? isCloseToWindow.value
        ? "bg-[center_calc(100%+5rem)]"
        : "bg-center"
      : isCloseToWindow.value
        ? "bg-center"
        : "bg-bottom",
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
