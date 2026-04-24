<template>
  <main class="relative h-svh perspective-midrange overflow-hidden">
    <Scene zIndex="z-1" />
    <WeatherLayer zIndex="z-2" v-bind="weatherVariants.mediumSnow" />
    <WindowLayer zIndex="z-3" />
    <PovLayersList zIndex="z-4" />
    <VisionShadow zIndex="z-5" />
  </main>
</template>

<script setup lang="ts">
  import { PovLayersList, VisionShadow, WindowLayer } from "@/pov";
  import { Scene } from "@/scenes";
  import { WeatherLayer, weatherVariants } from "@/features";
</script>
