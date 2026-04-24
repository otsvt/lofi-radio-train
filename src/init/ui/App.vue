<template>
  <main class="relative h-svh perspective-midrange overflow-hidden">
    <Scene zIndex="z-1" />
    <WeatherLayer zIndex="z-2" v-bind="weatherPresets.lightSnow" />
    <WindowLayer zIndex="z-3" />
    <PovLayersList zIndex="z-4" />
    <VisionShadow zIndex="z-5" />
  </main>
</template>

<script setup lang="ts">
  import { PovLayersList, VisionShadow, WindowLayer } from "@/pov";
  import { Scene } from "@/scenes";
  import { WeatherLayer } from "@/features";

  const weatherPresets = {
    lightRain: {
      type: "rain",
      intensity: 450,
      speed: 1.4,
      wind: -2.2,
      opacity: 0.2,
    },
    mediumRain: {
      type: "rain",
      intensity: 850,
      speed: 1.8,
      wind: -2.4,
      opacity: 0.3,
    },
    heavyRain: {
      type: "rain",
      intensity: 1300,
      speed: 2.25,
      wind: -2.6,
      opacity: 0.38,
    },
    lightSnow: {
      type: "snow",
      intensity: 460,
      speed: 1.3,
      wind: -0.3,
      opacity: 0.28,
    },
    mediumSnow: {
      type: "snow",
      intensity: 820,
      speed: 2.45,
      wind: -0.7,
      opacity: 0.38,
    },
    heavySnow: {
      type: "snow",
      intensity: 1620,
      speed: 2.8,
      wind: -1.1,
      opacity: 0.48,
    },
  } as const;
</script>
