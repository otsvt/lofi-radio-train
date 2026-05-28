<template>
  <main class="relative h-svh perspective-midrange overflow-hidden">
    <SceneLayer zIndex="z-1" />
    <WeatherLayer zIndex="z-2" v-if="weatherConfig" v-bind="weatherConfig" />
    <BlindsLayer zIndex="z-3" />
    <WindowLayer zIndex="z-4" />
    <PovLayersList zIndex="z-5" />
    <PlayerLayer zIndex="z-6" />
    <VisionShadow zIndex="z-7" />
    <VisionBlur zIndex="z-8" blur="backdrop-blur-xs" />
    <InterfaceLayer zIndex="z-9" />
    <InterfaceHologram zIndex="z-10" />
  </main>
</template>

<script setup lang="ts">
  import { BlindsLayer, PovLayersList, PlayerLayer, VisionBlur, VisionShadow, WindowLayer } from "@/pov";
  import { InterfaceHologram, InterfaceLayer } from "@/interface";
  import { SceneLayer } from "@/features/scenes";
  import { useWeather, WeatherLayer } from "@/features/weather";

  const { weatherConfig } = useWeather();
</script>
