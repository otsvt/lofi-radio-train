<template>
  <div
    :class="layerClass"
    :style="{
      backgroundImage: `url(${image})`,
      transform,
    }"
  ></div>
</template>

<script setup lang="ts">
  defineProps<{
    image: string;
    transform: string;
    layerClass: string[];
  }>();
</script>
