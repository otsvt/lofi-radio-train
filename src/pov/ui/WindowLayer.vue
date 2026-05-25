<template>
  <div
    :class="['layer bg-center transition-transform ease-out', zIndex]"
    :style="{
      backgroundImage: `url(${carriage})`,
      transform: `rotateY(${moveX}deg) rotateX(${moveY}deg) translateZ(${0.25 * moveZ}rem)`,
    }"
  ></div>
</template>

<script setup lang="ts">
  import { useCameraMovement } from "@/shared/composables";

  import carriage from "@/shared/assets/main-backgrounds/carriage.png";

  const props = defineProps<{
    zIndex: string;
  }>();

  const { moveX, moveY, moveZ } = useCameraMovement();
</script>
