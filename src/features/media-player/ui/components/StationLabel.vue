<template>
  <div class="space-y-2">
    <h3 class="text-2xl underline">{{ station.title }}</h3>
    <p class="text-xl">{{ station.artist }}</p>
  </div>
</template>

<script setup lang="ts">
  import { type Statiion } from "../constants/player";

  defineProps<{ station: Statiion }>();
</script>
