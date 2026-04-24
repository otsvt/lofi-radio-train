<template>
  <main class="relative h-svh perspective-midrange overflow-hidden">
    <Scene zIndex="z-1" />
    <WindowLayer zIndex="z-2" />
    <PovLayersList zIndex="z-3" />
    <VisionShadow zIndex="z-4" />
  </main>
</template>

<script setup lang="ts">
  import { PovLayersList, VisionShadow, WindowLayer } from "@/pov";
  import { Scene } from "@/scenes";
</script>
