<template>
  <div
    :class="[layerClass, isHovered ? 'player-hovered' : 'player-waiting']"
    :style="{
      backgroundImage: `url(${player})`,
      transform: playerTransform,
    }"
  >
    <button
      class="player-hitbox"
      @mouseenter="isHovered = true"
      @mouseleave="isHovered = false"
      @click="openInterface"
    />
  </div>
</template>

<script setup lang="ts">
  import { computed, ref } from "vue";
  import { useInterface } from "@/interface";
  import { useCameraMovement } from "@/shared/composables";
  import { useFullscreen } from "@/shared/components/fullscreen";

  import player from "@/shared/assets/main-backgrounds/player.png";

  const { zIndex } = defineProps<{
    zIndex: string;
  }>();

  const { moveX, moveY, isZoomedIn: isCloseToWindow } = useCameraMovement();

  const { isFullscreen } = useFullscreen();

  const { isInterfaceOpen, openInterface } = useInterface();

  const isHovered = ref(false);

  const layerClass = computed(() => [
    "layer translate-z-2 transition-all ease-linear",
    zIndex,
    isFullscreen.value
      ? isCloseToWindow.value
        ? "bg-[center_calc(100%+5rem)]"
        : "bg-center"
      : isCloseToWindow.value
        ? "bg-center"
        : "bg-bottom",
  ]);

  const playerTransform = computed(() => {
    if (isInterfaceOpen.value) {
      return `translateX(-5rem) translateY(25vh)`;
    }

    return `rotateY(${moveX.value * 2}deg) rotateX(${moveY.value * 4}deg)`;
  });
</script>

<style scoped>
  .player-hitbox {
    position: absolute;
    left: calc(1110 / 1920 * 100%);
    top: calc(820 / 1080 * 100%);
    width: calc(360 / 1920 * 100%);
    height: calc(230 / 1080 * 100%);
  }

  .player-hovered {
    filter: drop-shadow(0 0 0.55rem rgba(255, 145, 38, 0.8)) brightness(1.4);
  }

  .player-waiting {
    animation: player-glow 10s ease-in-out infinite;
  }

  @keyframes player-glow {
    0%,
    70%,
    100% {
      filter: drop-shadow(0 0 0 rgba(255, 145, 38, 0)) brightness(1);
    }
    80% {
      filter: drop-shadow(0 0 0.45rem rgba(255, 145, 38, 0.6)) brightness(1.2);
    }
  }
</style>
