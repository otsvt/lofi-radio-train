<template>
  <article
    :class="['scene translate-z-2 transition-all', zIndex, isZooming ? 'blur-xs scale-101' : '']"
    :style="{ transform: `rotateY(${moveY}deg) rotateX(${moveX}deg)` }"
  >
    <SceneTrack :scene="currentScene" />
  </article>
</template>

<script setup lang="ts">
  import { useCameraMovement } from "@/shared/composables";

  import { useScene } from "../composables/useScene";

  import SceneTrack from "./components/SceneTrack.vue";

  const props = defineProps<{
    zIndex: string;
  }>();

  const { moveX, moveY, isZooming } = useCameraMovement();

  const { currentScene } = useScene();
</script>
