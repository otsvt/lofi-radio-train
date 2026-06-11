export const weatherVariants = {
  lightRain: {
    type: "rain",
    intensity: 550,
    speed: 1.75,
    wind: -0.7,
    opacity: 0.2,
    travelSpeed: -3.5,
  },
  mediumRain: {
    type: "rain",
    intensity: 900,
    speed: 1.9,
    wind: 0.9,
    opacity: 0.25,
    travelSpeed: -4.5,
  },
  heavyRain: {
    type: "rain",
    intensity: 1550,
    speed: 2.1,
    wind: 1.5,
    opacity: 0.32,
    travelSpeed: -5.5,
  },
  lightSnow: {
    type: "snow",
    intensity: 790,
    speed: 2,
    wind: -0.5,
    opacity: 0.3,
    travelSpeed: -1.5,
  },
  mediumSnow: {
    type: "snow",
    intensity: 1350,
    speed: 2.45,
    wind: -0.86,
    opacity: 0.4,
    travelSpeed: -1.9,
  },
  heavySnow: {
    type: "snow",
    intensity: 2510,
    speed: 2.7,
    wind: -1.1,
    opacity: 0.48,
    travelSpeed: -2.3,
  },
} as const;

export const weatherOptions = {
  off: {
    value: "off",
    label: "off",
  },
  rain: [
    { value: "lightRain", label: "light" },
    { value: "mediumRain", label: "medium" },
    { value: "heavyRain", label: "heavy" },
  ],
  snow: [
    { value: "lightSnow", label: "light" },
    { value: "mediumSnow", label: "medium" },
    { value: "heavySnow", label: "heavy" },
  ],
} as const;

export type WeatherValue = keyof typeof weatherVariants | "off";
