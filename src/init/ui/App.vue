<template>
  <main class="relative h-svh perspective-midrange overflow-hidden">
    <VisionShadow zIndex="z-4" />
    <PovLayersList zIndex="z-3" />
    <WindowLayer zIndex="z-2" />
    <div
      class="z-1 scene translate-z-2 transition-all"
      :class="isZooming ? 'blur-xs scale-101' : ''"
      :style="{ transform: `rotateY(${moveY}deg) rotateX(${moveX}deg)` }"
    >
      <div class="layer bg-center" :style="{ backgroundImage: `url(${scene1})` }"></div>
    </div>
  </main>
</template>

<script setup lang="ts">
  import { PovLayersList, VisionShadow, WindowLayer } from "@/pov";
  import { useCameraMovement } from "@/shared/composables";

  import scene1 from "@/shared/assets/scenes/scene-1.png";

  const { moveX, moveY, moveZ, isZooming } = useCameraMovement();
</script>
