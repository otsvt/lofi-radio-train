import { computed, ref } from "vue";

import { radioStations } from "../constants/player";

const currentStationIndex = ref(0);
const currentVolume = ref(0.7);
const isPlaying = ref(false);

const currentStation = computed(() => {
  return radioStations[currentStationIndex.value];
});

const audio = new Audio(currentStation.value.src);

audio.loop = true;
audio.volume = currentVolume.value;

audio.addEventListener("play", () => {
  isPlaying.value = true;
});

audio.addEventListener("pause", () => {
  isPlaying.value = false;
});

audio.addEventListener("volumechange", (event) => {
  const target = event.currentTarget as HTMLAudioElement;
  currentVolume.value = target.volume;
});

audio.addEventListener("ended", () => {
  isPlaying.value = false;
});

const play = async () => {
  try {
    await audio.play();
  } catch {
    isPlaying.value = false;
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
  if (currentVolume.value === 1) {
    return;
  } else {
    audio.volume = Number((audio.volume + 0.1).toFixed(1));
  }
};

const decreaseVolume = () => {
  if (currentVolume.value === 0) {
    return;
  } else {
    audio.volume = Number((audio.volume - 0.1).toFixed(1));
  }
};

export const useAudioPlayer = () => {
  return {
    currentStation,
    currentVolume,
    isPlaying,
    togglePlay,
    selectNextStation,
    selectPrevStation,
    increaseVolume,
    decreaseVolume,
  };
};
