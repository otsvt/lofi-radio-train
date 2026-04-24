<template>
  <article
    :class="['scene translate-z-2 transition-all', zIndex, isZooming ? 'blur-xs scale-101' : '']"
    :style="{ transform: `rotateY(${moveY}deg) rotateX(${moveX}deg)` }"
  >
    <div class="layer bg-center" :style="{ backgroundImage: `url(${scene1})` }"></div>
  </article>
</template>

<script setup lang="ts">
  import { useCameraMovement } from "@/shared/composables";

  import scene1 from "@/shared/assets/scenes/scene-1.png";
  const props = defineProps<{
    zIndex: string;
  }>();

  const { moveX, moveY, isZooming } = useCameraMovement();
</script>
