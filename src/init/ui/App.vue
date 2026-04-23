<template>
  <main class="relative h-svh overflow-hidden perspective-midrange">
    <div class="z-4 layer bg-center vision-shadow"></div>
    <div
      class="z-3 layer translate-z-2 transition-all"
      :class="isCloseToWindow ? 'bg-center' : 'bg-bottom'"
      :style="{ backgroundImage: `url(${leftLeg})`, transform: `rotateY(${moveX * 5}deg) rotateX(${moveY * 4}deg)` }"
    ></div>
    <div
      class="z-3 layer translate-z-2 transition-all"
      :class="isCloseToWindow ? 'bg-center' : 'bg-bottom'"
      :style="{ backgroundImage: `url(${rightLeg})`, transform: `rotateY(${moveX * 8}deg) rotateX(${moveY * 6}deg)` }"
    ></div>
    <div
      class="z-3 layer translate-z-2 transition-all"
      :class="isCloseToWindow ? 'bg-center' : 'bg-bottom'"
      :style="{ backgroundImage: `url(${bag})`, transform: `rotateY(${moveX * 0}deg) rotateX(${moveY * 0}deg)` }"
    ></div>
    <div
      class="z-3 layer translate-z-2 transition-all"
      :class="isCloseToWindow ? 'bg-center' : 'bg-bottom'"
      :style="{ backgroundImage: `url(${player})`, transform: `rotateY(${moveX * 0}deg) rotateX(${moveY * 0}deg)` }"
    ></div>
    <div
      class="z-2 layer bg-center transition-transform ease-out"
      :style="{
        backgroundImage: `url(${carriage})`,
        transform: `rotateY(${moveX}deg) rotateX(${moveY}deg) translateZ(${0.25 * moveZ}rem)`,
      }"
    ></div>
    <div
      class="z-1 scene translate-z-2 transition-all"
      :class="isZooming ? 'blur-xs scale-103' : ''"
      :style="{ transform: `rotateY(${moveY}deg) rotateX(${moveX}deg)` }"
    >
      <div class="layer bg-centerr" :style="{ backgroundImage: `url(${scene1})` }"></div>
    </div>
  </main>
</template>

<script setup lang="ts">
  import { computed, ref, watch } from "vue";
  import carriage from "@/shared/assets/main-backgrounds/carriage.png";
  import bag from "@/shared/assets/main-backgrounds/bag.png";
  import player from "@/shared/assets/main-backgrounds/player.png";
  import leftLeg from "@/shared/assets/main-backgrounds/left-leg.png";
  import rightLeg from "@/shared/assets/main-backgrounds/right-leg.png";

  import scene1 from "@/shared/assets/scenes/scene-1.png";

  const moveX = ref(0);
  const moveY = ref(0);
  const moveZ = ref(6);

  const isZooming = ref(false);

  const isCloseToWindow = computed(() => moveZ.value >= 50);

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
    isZooming.value = true;
    let blurTimeout = null;

    if (blurTimeout) {
      clearTimeout(blurTimeout);
    }

    blurTimeout = setTimeout(() => {
      isZooming.value = false;
    }, 200);
  });
</script>

<style scoped>
  .layer {
    position: absolute;
    inset: 0;
    background-repeat: no-repeat;
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
