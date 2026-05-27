<template>
  <div :class="['pr-4 space-y-6', flexSize]">
    <p class="text-3xl uppercase">now playing</p>
    <StationLabel :station="currentStation" />
    <div class="flex items-center gap-x-4">
      <MediaPlayerButton textSize="text-xl" symbols="[ << ]" @click="selectPrevStation" />
      <MediaPlayerButton textSize="w-[12ch] text-2xl" :symbols="playSymbols" @click="togglePlay" />
      <MediaPlayerButton textSize="text-xl" symbols="[ >> ]" @click="selectNextStation" />
    </div>
    <div class="flex items-center gap-x-4 text-2xl">
      <p class="uppercase">volume</p>
      <div class="flex items-center gap-x-4">
        <SettingButton symbols="<" @click="decreaseVolume" />
        <div class="flex items-end gap-x-2">
          <div
            v-for="volume in 10"
            :class="['w-1.5 bg-panel-text/80 transition-all', volume <= volumeLevel ? 'h-8' : 'h-3 opacity-30']"
          ></div>
        </div>
        <SettingButton symbols=">" @click="increaseVolume" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { computed } from "vue";
  import { SettingButton } from "@/shared/components/buttons/setting-button";

  import { useAudioPlayer } from "./composables/useAudioPlayer";

  import StationLabel from "./components/StationLabel.vue";
  import MediaPlayerButton from "./components/MediaPlayerButton.vue";

  defineProps<{
    flexSize: string;
  }>();

  const {
    currentStation,
    currentVolume,
    isPlaying,
    selectPrevStation,
    selectNextStation,
    togglePlay,
    decreaseVolume,
    increaseVolume,
  } = useAudioPlayer();

  const playSymbols = computed(() => {
    return isPlaying.value ? "[ PAUSE ]" : "[ PLAY ]";
  });

  const volumeLevel = computed(() => {
    return currentVolume.value * 10;
  });
</script>
