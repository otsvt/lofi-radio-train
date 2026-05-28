<template>
  <PovLayer v-for="layer in povLayers" v-bind="layer" />
</template>

<script setup lang="ts">
  import { computed } from "vue";
  import { useFullscreen } from "@/shared/components/fullscreen";
  import { useCameraMovement } from "@/shared/composables";

  import PovLayer from "./PovLayer.vue";

  import bag from "@/shared/assets/main-backgrounds/bag.png";
  import leftLeg from "@/shared/assets/main-backgrounds/left-leg.png";
  import rightLeg from "@/shared/assets/main-backgrounds/right-leg.png";

  const { zIndex } = defineProps<{
    zIndex: string;
  }>();

  const { moveX, moveY, isZoomedIn: isCloseToWindow } = useCameraMovement();

  const { isFullscreen } = useFullscreen();

  const povLayerClass = computed(() => [
    "layer translate-z-2 transition-all ease-linear",
    zIndex,
    isFullscreen.value
      ? isCloseToWindow.value
        ? "bg-[center_calc(100%+5rem)]"
        : "bg-center"
      : isCloseToWindow.value
        ? "bg-center"
        : "bg-bottom",
  ]);

  const povLayers = computed(() => [
    {
      image: leftLeg,
      layerClass: povLayerClass.value,
      transform: `rotateY(${moveX.value * 5}deg) rotateX(${moveY.value * 4}deg)`,
    },
    {
      image: rightLeg,
      layerClass: povLayerClass.value,
      transform: `rotateY(${moveX.value * 8}deg) rotateX(${moveY.value * 6}deg)`,
    },
    {
      image: bag,
      layerClass: povLayerClass.value,
      transform: `rotateY(${moveX.value * 2}deg) rotateX(${moveY.value * 4}deg)`,
    },
  ]);
</script>
