<template>
  <div :class="['pl-4 space-y-6', flexSize]">
    <SceneSetting />
    <Divider size="h-1" color="bg-panel-text/80" />
    <WeatherSetting />
  </div>
</template>

<script setup lang="ts">
  import { SceneSetting } from "@/features/scenes";
  import { WeatherSetting } from "@/features/weather";
  import { Divider } from "@/shared/components/divider";

  defineProps<{
    flexSize: string;
  }>();
</script>
