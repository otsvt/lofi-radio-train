<template>
  <div class="scene-track">
    <div
      v-for="layer in scene.layers"
      class="scene-layer animation-move"
      :key="layer.src"
      :style="{
        animationDuration: `${layer.duration}s`,
      }"
    >
      <img class="scene-frame" :src="layer.src" />
      <img class="scene-frame -ml-px" :src="layer.src" />
    </div>
  </div>
</template>

<script setup lang="ts">
  import type { SceneVariant } from "../../constants/scene";

  defineProps<{ scene: SceneVariant }>();
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
    animation-name: move;
    animation-timing-function: linear;
    animation-iteration-count: infinite;
  }
</style>
