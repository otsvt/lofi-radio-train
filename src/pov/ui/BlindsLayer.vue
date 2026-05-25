<template>
  <div
    :class="['absolute inset-0 pointer-events-none transform-3d will-change-transform', zIndex]"
    :style="{
      transform: `translateY(${isSceneChanging ? '0%' : '-100%'})`,
      transition: `transform ${SCENE_CHANGING_TIMEOUT}ms ease-in-out`,
    }"
  >
    <div
      class="layer bg-top transition-transform ease-out"
      :style="{
        backgroundImage: `url(${blinds})`,
        transform: `rotateY(${moveX}deg) rotateX(${moveY}deg) translateZ(${0.25 * moveZ}rem)`,
      }"
    ></div>
  </div>
</template>

<script setup lang="ts">
  import { useScene } from "@/features/scenes";
  import { useCameraMovement } from "@/shared/composables";

  import blinds from "@/shared/assets/main-backgrounds/blinds.png";

  const { zIndex } = defineProps<{
    zIndex: string;
  }>();

  const { moveX, moveY, moveZ } = useCameraMovement();

  const { isSceneChanging, SCENE_CHANGING_TIMEOUT } = useScene();
</script>
