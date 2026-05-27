import { ref } from "vue";

const fullscreenOptions = [
  {
    label: "on",
    value: true,
  },
  {
    label: "off",
    value: false,
  },
];

const isFullscreen = ref(false);

const syncFullscreen = () => {
  isFullscreen.value = !!document.fullscreenElement;
};

const enterFullscreen = async () => {
  await document.documentElement.requestFullscreen();
  syncFullscreen();
};

const exitFullscreen = async () => {
  if (!document.fullscreenElement) {
    return;
  }

  await document.exitFullscreen();
  syncFullscreen();
};

const setFullscreen = async (value: boolean) => {
  if (value) {
    await enterFullscreen();
  } else {
    await exitFullscreen();
  }
};

document.addEventListener("fullscreenchange", syncFullscreen);

export const useFullscreen = () => {
  return {
    fullscreenOptions,
    isFullscreen,
    setFullscreen,
  };
};
