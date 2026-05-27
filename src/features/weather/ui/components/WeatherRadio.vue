<template>
  <label class="radio-button">
    <p>{{ option.label }}</p>
    <input v-model="weather" :value="option.value" name="weather" type="radio" class="sr-only" />
  </label>
</template>

<script setup lang="ts">
  import { useWeather } from "../../composables/useWeather";
  import type { WeatherValue } from "../../constants/weather";

  defineProps<{ option: { value: WeatherValue; label: string } }>();

  const { weather } = useWeather();
</script>
