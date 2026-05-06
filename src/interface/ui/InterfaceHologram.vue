<template>
  <section v-if="isInterfaceOpen" :class="['absolute inset-0 flex-center', zIndex]">
    <div class="-translate-y-20 perspective-midrange">
      <div class="relative rotate-x-10 text-panel-text text-shadow-lg text-shadow-panel-text/40">
        <div
          :class="[
            'relative w-4xl aspect-video py-4 px-8 hologram-background',
            'before:absolute before:inset-0 before:pointer-events-none',
            'after:absolute after:inset-0 after:pointer-events-none',
          ]"
        >
          <header class="py-2 flex items-center justify-between gap-x-2 text-3xl">
            <h2 class="font-medium">LOFI RADIO</h2>
            <CloseButton
              class="transition-shadow hover:ring-2"
              iconClass="h-10 w-10 stroke-panel-text"
              @click="closeInterface"
            />
          </header>
          <div class="h-0.5 bg-panel-text hologram-line-shadow"></div>
          <div>
            <p>NOW PLAYING</p>
            <h3>Midnight Drive</h3>
            <span>The Lofi Club</span>
          </div>
        </div>
        <div class="absolute top-full left-1/2 -translate-x-1/2 h-16 w-[120%] hologram-projection"></div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
  import { useInterface } from "../composables/useInterface";

  import CloseButton from "./components/CloseButton.vue";

  defineProps<{
    zIndex: string;
  }>();

  const { isInterfaceOpen, closeInterface } = useInterface();
</script>

<style>
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

  .hologram-line-shadow {
    box-shadow: 0 0 12px rgba(255, 145, 38, 0.8);
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
</style>
