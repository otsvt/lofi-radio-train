<template>
  <main class="relative h-svh perspective-midrange overflow-hidden">
    <VisionShadow zIndex="z-4" />
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
      :class="isZooming ? 'blur-xs scale-101' : ''"
      :style="{ transform: `rotateY(${moveY}deg) rotateX(${moveX}deg)` }"
    >
      <div class="layer bg-center" :style="{ backgroundImage: `url(${scene1})` }"></div>
    </div>
  </main>
</template>

<script setup lang="ts">
  import { computed, ref, watch } from "vue";
  import { VisionShadow } from "@/pov";
  import { useCameraMovement } from "@/shared/composables";

  import carriage from "@/shared/assets/main-backgrounds/carriage.png";
  import bag from "@/shared/assets/main-backgrounds/bag.png";
  import player from "@/shared/assets/main-backgrounds/player.png";
  import leftLeg from "@/shared/assets/main-backgrounds/left-leg.png";
  import rightLeg from "@/shared/assets/main-backgrounds/right-leg.png";

  import scene1 from "@/shared/assets/scenes/scene-1.png";

  const { moveX, moveY, moveZ } = useCameraMovement();

  const isCloseToWindow = computed(() => moveZ.value === 60);

  const isZooming = ref(false);

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
