<template>
  <div :class="['pl-4 space-y-6', flexSize]">
    <SceneSetting />
    <Divider size="h-1" color="bg-panel-text/80" />
    <WeatherSetting />
  </div>
</template>

<script setup lang="ts">
  import { WeatherSetting } from "@/features";

  import Divider from "./Divider.vue";
  import SceneSetting from "./SceneSetting.vue";

  defineProps<{
    flexSize: string;
  }>();
</script>
