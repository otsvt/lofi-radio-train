<template>
  <main class="relative h-svh perspective-midrange overflow-hidden">
    <Scene zIndex="z-1" />
    <!-- <WeatherLayer zIndex="z-2" v-bind="weatherVariants.mediumSnow" /> -->
    <WindowLayer zIndex="z-3" />
    <PovLayersList zIndex="z-4" />
    <VisionShadow zIndex="z-5" />
    <InterfaceOnButton zIndex="z-6" />
    <VisionBlur zIndex="z-7" blur="backdrop-blur-xs" />
    <InterfaceLayer zIndex="z-8" />
    <InterfaceHologram zIndex="z-9" />
  </main>
</template>

<script setup lang="ts">
  import { PovLayersList, VisionBlur, VisionShadow, WindowLayer } from "@/pov";
  import { InterfaceHologram, InterfaceLayer, InterfaceOnButton } from "@/interface";
  import { Scene } from "@/scenes";
  import { WeatherLayer, weatherVariants } from "@/features";
</script>
