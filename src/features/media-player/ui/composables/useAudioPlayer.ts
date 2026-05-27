import { computed, ref } from "vue";

import { radioStations } from "../constants/player";
import { useAudioSignal } from "./useAudioSignal";

const currentStationIndex = ref(0);
const currentVolume = ref(0.3);
const isPlaying = ref(false);

const currentStation = computed(() => {
  return radioStations[currentStationIndex.value];
});

const audio = new Audio();

audio.loop = true;
audio.volume = currentVolume.value;
audio.src = currentStation.value.src;

const { signalBars, prepareSignal, startSignal, stopSignal } = useAudioSignal(audio);

audio.addEventListener("play", () => {
  isPlaying.value = true;
  startSignal();
});

audio.addEventListener("pause", () => {
  isPlaying.value = false;
  stopSignal();
});

audio.addEventListener("volumechange", (event) => {
  const target = event.currentTarget as HTMLAudioElement;
  currentVolume.value = target.volume;
});

audio.addEventListener("ended", () => {
  isPlaying.value = false;
  stopSignal();
});

const play = async () => {
  try {
    await prepareSignal();
    await audio.play();
  } catch {
    isPlaying.value = false;
    stopSignal();
  }
};

const pause = () => {
  audio.pause();
};

const togglePlay = () => {
  if (isPlaying.value) {
    pause();
  } else {
    play();
  }
};

const changeStationByIndex = async (index: number) => {
  const wasPlaying = isPlaying.value;

  audio.pause();

  currentStationIndex.value = index;
  audio.src = currentStation.value.src;
  audio.currentTime = 0;
  audio.load();

  if (wasPlaying) {
    await play();
  }
};

const selectNextStation = () => {
  const nextIndex = currentStationIndex.value === radioStations.length - 1 ? 0 : currentStationIndex.value + 1;
  changeStationByIndex(nextIndex);
};

const selectPrevStation = () => {
  const prevIndex = currentStationIndex.value === 0 ? radioStations.length - 1 : currentStationIndex.value - 1;
  changeStationByIndex(prevIndex);
};

const increaseVolume = () => {
  audio.volume = Math.min(1, Number((audio.volume + 0.1).toFixed(1)));
};

const decreaseVolume = () => {
  audio.volume = Math.max(0, Number((audio.volume - 0.1).toFixed(1)));
};

export const useAudioPlayer = () => {
  return {
    currentStation,
    currentVolume,
    isPlaying,
    signalBars,
    togglePlay,
    selectNextStation,
    selectPrevStation,
    increaseVolume,
    decreaseVolume,
  };
};
