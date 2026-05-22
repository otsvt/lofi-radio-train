<template>
  <div class="space-y-4">
    <p class="text-3xl uppercase">weather</p>
    <fieldset class="grid grid-cols-[auto_auto] gap-x-4 gap-y-2 items-center text-2xl uppercase">
      <p></p>
      <WeatherRadio :option="weatherOptions.off" />
      <p>rain</p>
      <div class="flex items-center gap-x-2">
        <WeatherRadio v-for="option in weatherOptions.rain" :key="option.value" :option="option" />
      </div>
      <p>snow</p>
      <div class="flex items-center gap-x-2">
        <WeatherRadio v-for="option in weatherOptions.snow" :key="option.value" :option="option" />
      </div>
    </fieldset>
  </div>
</template>

<script setup lang="ts">
  import { weatherOptions } from "../../constants/weather";

  import WeatherRadio from "./WeatherRadio.vue";
</script>
