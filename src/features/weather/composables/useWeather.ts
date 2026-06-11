import { computed, ref } from "vue";

import { weatherVariants, type WeatherValue } from "../constants/weather";

const weather = ref<WeatherValue>("mediumSnow");

const weatherConfig = computed(() => {
  if (weather.value === "off") {
    return null;
  } else {
    return weatherVariants[weather.value];
  }
});

export const useWeather = () => {
  return { weather, weatherConfig };
};
