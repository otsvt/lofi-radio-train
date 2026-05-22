import { computed, ref } from "vue";

import { weatherVariants, type WeatherValue } from "../constants/weather";

const weather = ref<WeatherValue>("off");

const weatherConfig = computed(() => {
  if (weather.value === "off") {
    return null;
  }

  return weatherVariants[weather.value];
});

const changeWeather = (value: WeatherValue) => {
  weather.value = value;
};

export const useWeather = () => {
  return { weather, weatherConfig, changeWeather };
};
