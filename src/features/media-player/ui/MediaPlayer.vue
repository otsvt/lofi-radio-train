<template>
  <div :class="['pr-4 space-y-6', flexSize]">
    <p class="text-3xl uppercase">now playing</p>
    <StationLabel :station="currentStation" />
    <AudioSignal :bars="signalBars" />
    <div class="flex items-center gap-x-4">
      <MediaPlayerButton textSize="text-xl" symbols="[ << ]" @click="selectPrevStation" />
      <MediaPlayerButton textSize="w-[12ch] text-2xl" :symbols="playSymbols" @click="togglePlay" />
      <MediaPlayerButton textSize="text-xl" symbols="[ >> ]" @click="selectNextStation" />
    </div>
    <VolumeSetting :volume="currentVolume" @decrease="decreaseVolume" @increase="increaseVolume" />
    <FullscreenSettings />
  </div>
</template>

<script setup lang="ts">
  import { computed } from "vue";
  import { FullscreenSettings } from "@/shared/components/fullscreen";

  import { useAudioPlayer } from "./composables/useAudioPlayer";

  import StationLabel from "./components/StationLabel.vue";
  import MediaPlayerButton from "./components/MediaPlayerButton.vue";
  import VolumeSetting from "./components/VolumeSetting.vue";
  import AudioSignal from "./components/AudioSignal.vue";

  defineProps<{
    flexSize: string;
  }>();

  const {
    currentStation,
    currentVolume,
    isPlaying,
    signalBars,
    selectPrevStation,
    selectNextStation,
    togglePlay,
    decreaseVolume,
    increaseVolume,
  } = useAudioPlayer();

  const playSymbols = computed(() => {
    return isPlaying.value ? "[ PAUSE ]" : "[ PLAY ]";
  });
</script>
