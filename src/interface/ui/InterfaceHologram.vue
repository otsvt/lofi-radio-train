<template>
  <Transition name="hologram-glitch">
    <section v-if="isShowingPanel" :class="['absolute inset-0 flex-center', zIndex]">
      <div
        :class="[
          'perspective-midrange transition-transform ease-in-out duration-500',
          isCloseToWindow ? '-translate-y-10 ' : '-translate-y-30',
        ]"
      >
        <div class="relative -rotate-x-8 text-panel-text text-shadow-lg text-shadow-panel-text/40">
          <div
            :class="[
              'relative w-4xl aspect-video py-4 px-8 flex flex-col hologram-background',
              'before:absolute before:inset-0 before:pointer-events-none',
              'after:absolute after:inset-0 after:pointer-events-none',
            ]"
          >
            <header class="py-2 flex items-center justify-between gap-x-2l">
              <h2 class="text-4xl uppercase">lofi radio train</h2>
              <div class="h-full flex gap-x-4">
                <GithubButton
                  class="transition-shadow hover:ring-2"
                  iconClass="h-10 w-10 stroke-panel-text"
                  @click="openGithub"
                />
                <Divider size="w-1" color="bg-panel-text/80" />
                <CloseButton
                  class="transition-shadow hover:ring-2"
                  iconClass="h-10 w-10 stroke-panel-text"
                  @click="closeInterface"
                />
              </div>
            </header>
            <Divider size="h-1" color="bg-panel-text/80" />
            <div class="grow py-4 flex">
              <MediaPlayer flexSize="flex-[55%]" />
              <Divider size="w-1" color="bg-panel-text/80" />
              <Settings flexSize="flex-[45%]" />
            </div>
          </div>
          <div class="absolute top-full left-1/2 -translate-x-1/2 h-16 w-[120%] hologram-projection"></div>
        </div>
      </div>
    </section>
  </Transition>
</template>

<script setup lang="ts">
  import { ref, watch } from "vue";
  import { MediaPlayer } from "@/features/media-player";
  import { useCameraMovement } from "@/shared/composables";
  import { Divider } from "@/shared/components/divider";
  import { CloseButton } from "@/shared/components/buttons/close-button";
  import { GithubButton } from "@/shared/components/buttons/github-button";

  import { useInterface } from "../composables/useInterface";

  import Settings from "./components/Settings.vue";

  defineProps<{
    zIndex: string;
  }>();

  const { isZoomedIn: isCloseToWindow } = useCameraMovement();

  const { isInterfaceOpen, closeInterface } = useInterface();

  const isShowingPanel = ref(false);

  const openGithub = () => {
    window.open("https://github.com/otsvt", "_blank");
  };

  watch(isInterfaceOpen, (val) => {
    if (val) {
      setTimeout(() => (isShowingPanel.value = val), 500);
    } else {
      isShowingPanel.value = val;
    }
  });
</script>

<style scoped>
  .hologram-background {
    border: 2px solid rgba(255, 145, 38, 0.9);
    background:
      repeating-linear-gradient(
        180deg,
        rgba(255, 154, 50, 0.08) 0,
        rgba(255, 154, 50, 0.08) 1px,
        transparent 1px,
        transparent 5px
      ),
      linear-gradient(180deg, rgba(255, 132, 24, 0.18), rgba(255, 132, 24, 0.06));
    box-shadow:
      0 0 8px rgba(255, 145, 38, 0.9),
      0 0 24px rgba(255, 105, 24, 0.55),
      inset 0 12px 24px rgba(255, 120, 24, 0.2);
    backdrop-filter: blur(12px);
  }

  .hologram-background::before {
    background: linear-gradient(90deg, transparent, rgba(255, 190, 110, 0.16), transparent);
  }

  .hologram-background::after {
    background: radial-gradient(circle at 50% 0%, rgba(255, 187, 101, 0.18), transparent 55%);
  }

  .hologram-projection {
    clip-path: polygon(8% 0, 92% 0, 50% 100%);
    background:
      repeating-linear-gradient(
        180deg,
        rgba(255, 145, 38, 0.08) 0,
        rgba(255, 145, 38, 0.08) 1px,
        transparent 1px,
        transparent 5px
      ),
      linear-gradient(180deg, rgba(255, 125, 24, 0.28), rgba(255, 125, 24, 0.02));
    filter: blur(0.2px);
    opacity: 0.6;
  }

  .hologram-glitch-enter-active {
    animation: hologram-glitch-in 0.2s linear;
  }

  .hologram-glitch-leave-active {
    animation: hologram-glitch-out 0.2s linear;
  }

  @keyframes hologram-glitch-in {
    0% {
      opacity: 0;
      filter: brightness(2) blur(6px);
      transform: scaleY(0.02) translateX(-18px);
      clip-path: inset(48% 0 48% 0);
    }

    12% {
      opacity: 1;
      filter: brightness(3) blur(2px);
      transform: scaleY(0.18) translateX(4px);
      clip-path: inset(38% 0 42% 0);
    }

    24% {
      opacity: 0.35;
      filter: brightness(1.8) blur(4px);
      transform: scaleY(0.35) translateX(-10px);
      clip-path: inset(24% 0 58% 0);
    }

    38% {
      opacity: 1;
      filter: brightness(2.8) blur(1px);
      transform: scaleY(0.65) translateX(8px);
      clip-path: inset(12% 0 24% 0);
    }

    55% {
      opacity: 0.7;
      filter: brightness(2.2) blur(2px);
      transform: scaleY(0.9) translateX(-4px);
      clip-path: inset(4% 0 12% 0);
    }

    72% {
      opacity: 1;
      filter: brightness(1.6) blur(0.5px);
      transform: scaleY(1.03) translateX(3px);
      clip-path: inset(0 0 0 0);
    }

    100% {
      opacity: 1;
      filter: brightness(1) blur(0);
      transform: scaleY(1) translateX(0);
      clip-path: inset(0 0 0 0);
    }
  }

  @keyframes hologram-glitch-out {
    0% {
      opacity: 1;
      filter: brightness(1) blur(0);
      transform: scaleY(1) translateX(0);
      clip-path: inset(0 0 0 0);
    }

    22% {
      opacity: 0.8;
      filter: brightness(2.2) blur(1px);
      transform: scaleY(0.85) translateX(-8px);
      clip-path: inset(8% 0 18% 0);
    }

    45% {
      opacity: 1;
      filter: brightness(3) blur(2px);
      transform: scaleY(0.45) translateX(12px);
      clip-path: inset(32% 0 28% 0);
    }

    68% {
      opacity: 0.35;
      filter: brightness(2) blur(4px);
      transform: scaleY(0.15) translateX(-14px);
      clip-path: inset(42% 0 44% 0);
    }

    100% {
      opacity: 0;
      filter: brightness(3) blur(8px);
      transform: scaleY(0.02) translateX(18px);
      clip-path: inset(50% 0 50% 0);
    }
  }
</style>
