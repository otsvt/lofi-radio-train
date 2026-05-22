<template>
  <article
    :class="['scene translate-z-2 transition-all', zIndex, isZooming ? 'blur-xs scale-101' : '']"
    :style="{ transform: `rotateY(${moveY}deg) rotateX(${moveX}deg)` }"
  >
    <div class="scene-track">
      <div class="scene-layer animation-move-5">
        <img class="scene-frame" :src="layer5" />
        <img class="scene-frame" :src="layer5" />
      </div>
      <div class="scene-layer animation-move-4">
        <img class="scene-frame" :src="layer4" />
        <img class="scene-frame" :src="layer4" />
      </div>
      <div class="scene-layer animation-move-3">
        <img class="scene-frame" :src="layer3" />
        <img class="scene-frame" :src="layer3" />
      </div>
      <div class="scene-layer animation-move-2">
        <img class="scene-frame" :src="layer2" />
        <img class="scene-frame" :src="layer2" />
      </div>
      <div class="scene-layer animation-move-1">
        <img class="scene-frame" :src="layer1" />
        <img class="scene-frame" :src="layer1" />
      </div>
    </div>
  </article>
</template>

<script setup lang="ts">
  import { useCameraMovement } from "@/shared/composables";

  import layer1 from "@/shared/assets/scenes/1/scene-1-layer-1.png";
  import layer2 from "@/shared/assets/scenes/1/scene-1-layer-2.png";
  import layer3 from "@/shared/assets/scenes/1/scene-1-layer-3.png";
  import layer4 from "@/shared/assets/scenes/1/scene-1-layer-4.png";
  import layer5 from "@/shared/assets/scenes/1/scene-1-layer-5.png";

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

  /* .animation-move-1 {
    animation: move 20s linear infinite;
  }
  .animation-move-2 {
    animation: move 50s linear infinite;
  }
  .animation-move-3 {
    animation: move 250s linear infinite;
  }
  .animation-move-4 {
    animation: move 1000s linear infinite;
  }
  .animation-move-5 {
    animation: move 1200s linear infinite;
  } */
</style>
