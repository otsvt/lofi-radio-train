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
  import carriage from "@/shared/assets/main-backgrounds/carriage.png";

  const props = defineProps<{
    zIndex: string;
  }>();
</script>
