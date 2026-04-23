<template>
  <main class="relative h-svh overflow-hidden perspective-midrange">
    <div class="z-4 layer vision-shadow"></div>
    <div
      class="z-3 layer translate-z-2"
      :style="{ backgroundImage: `url(${leftLeg})`, transform: `rotateY(${moveX * 5}deg) rotateX(${moveY * 4}deg)` }"
    ></div>
    <div
      class="z-3 layer translate-z-2"
      :style="{ backgroundImage: `url(${rightLeg})`, transform: `rotateY(${moveX * 8}deg) rotateX(${moveY * 6}deg)` }"
    ></div>
    <div
      class="z-2 layer transition-transform ease-out"
      :style="{
        backgroundImage: `url(${carriage})`,
        transform: `rotateY(${moveX}deg) rotateX(${moveY}deg) translateZ(${0.25 * moveZ}rem)`,
      }"
    ></div>
    <div
      class="z-1 scene translate-z-2 transition-all"
      :class="sceneBlur ? 'blur-xs scale-105' : ''"
      :style="{ transform: `rotateY(${moveY}deg) rotateX(${moveX}deg)` }"
    >
      <div class="layer" :style="{ backgroundImage: `url(${scene1})` }"></div>
    </div>
  </main>
</template>

<script setup lang="ts">
  import { ref, watch } from "vue";
  import carriage from "@/shared/assets/main-backgrounds/carriage.png";
  import leftLeg from "@/shared/assets/main-backgrounds/left-leg.png";
  import rightLeg from "@/shared/assets/main-backgrounds/right-leg.png";
  import scene1 from "@/shared/assets/scenes/scene-1.png";

  const moveX = ref(0);
  const moveY = ref(0);
  const moveZ = ref(6);

  const sceneBlur = ref(false);

  window.addEventListener("mousemove", (event) => {
    moveX.value = (event.clientX - window.innerWidth / 2) * -0.0001;
    moveY.value = (event.clientY - window.innerHeight / 2) * -0.0005;
  });

  window.addEventListener("wheel", (event) => {
    if (event.deltaY < 0) {
      moveZ.value = Math.min(moveZ.value + 10, 60);
    } else {
      moveZ.value = Math.max(6, moveZ.value - 10);
    }
  });

  watch(moveZ, () => {
    sceneBlur.value = true;
    let blurTimeout = null;

    if (blurTimeout) {
      clearTimeout(blurTimeout);
    }

    blurTimeout = setTimeout(() => {
      sceneBlur.value = false;
    }, 500);
  });
</script>

<style scoped>
  .layer {
    position: absolute;
    inset: 0;
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    will-change: transform;
  }

  .scene {
    position: absolute;
    inset: 0;
    will-change: transform;
  }

  .vision-shadow {
    pointer-events: none;
    background: radial-gradient(
      ellipse at center,
      rgba(0, 0, 0, 0) 50%,
      rgba(0, 0, 0, 0.15) 65%,
      rgba(0, 0, 0, 0.25) 80%,
      rgba(0, 0, 0, 0.65) 100%
    );
  }
</style>
