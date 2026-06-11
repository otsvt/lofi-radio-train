<template>
  <div v-if="!isLoaded" :class="['layer flex-center pointer-events-none', zIndex]">
    <div
      :class="[
        'absolute top-0 h-1/2 w-full bg-black transition-transform will-change-transform',
        isOpening ? '-translate-y-full' : 'translate-y-0',
      ]"
      :style="{ transitionDuration: `${TRANSITION_DURATION}ms` }"
    ></div>
    <div
      :class="[
        'absolute bottom-0 h-1/2 w-full bg-black transition-transform will-change-transform',
        isOpening ? 'translate-y-full' : 'translate-y-0',
      ]"
      :style="{ transitionDuration: `${TRANSITION_DURATION}ms` }"
    ></div>

    <p
      :class="[
        'relative text-panel-text text-shadow-lg text-shadow-panel-text/40 text-3xl uppercase transition-opacity',
        isOpening ? 'opacity-0' : 'opacity-100',
      ]"
      :style="{ transitionDuration: `${TRANSITION_DURATION}ms` }"
    >
      Loading
    </p>
  </div>
</template>

<script setup lang="ts">
  import { onMounted, ref } from "vue";

  defineProps<{
    zIndex: string;
  }>();

  const TRANSITION_DURATION = 750;

  const isOpening = ref(false);
  const isLoaded = ref(false);

  const startOpening = () => {
    isOpening.value = true;

    setTimeout(() => {
      isLoaded.value = true;
    }, TRANSITION_DURATION * 1.1);
  };

  onMounted(() => {
    if (document.readyState === "complete") {
      requestAnimationFrame(() => {
        startOpening();
      });
    } else {
      window.addEventListener("load", startOpening, { once: true });
    }
  });
</script>
