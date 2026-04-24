<template>
  <article
    :class="['scene translate-z-2 transition-all', zIndex, isZooming ? 'blur-xs scale-101' : '']"
    :style="{ transform: `rotateY(${moveY}deg) rotateX(${moveX}deg)` }"
  >
    <div class="scene-track">
      <div class="scene-layer animation-move">
        <div class="scene-frame" :style="{ backgroundImage: `url(${scene1})` }"></div>
        <div class="scene-frame" :style="{ backgroundImage: `url(${scene1})` }"></div>
      </div>
    </div>
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

<style scoped>
  @keyframes move {
    from {
      transform: translateX(0);
    }

    to {
      transform: translateX(-50%);
    }
  }

  .animation-move {
    animation: move 60s linear infinite;
  }
</style>
