<template>
  <div :class="['space-y-6', flexSize]">
    <p class="text-3xl">NOW PLAYING</p>
    <div class="space-y-2">
      <h3 class="text-2xl underline">Midnight Drive</h3>
      <p class="text-xl">The Lofi Club</p>
    </div>
    <div class="flex items-center gap-x-4">
      <MediaPlayerButton textSize="text-xl" symbols="[ << ]" />
      <MediaPlayerButton textSize="w-[12ch] text-2xl" :symbols="playSymbols" @click="togglePlayerStatus" />
      <MediaPlayerButton textSize="text-xl" symbols="[ >> ]" />
    </div>
  </div>
</template>

<script setup lang="ts">
  import { computed, ref } from "vue";

  import MediaPlayerButton from "./MediaPlayerButton.vue";

  defineProps<{
    flexSize: string;
  }>();

  type PlayerStatus = "playing" | "pause";

  const playerStatus = ref<PlayerStatus>("pause");

  const playSymbols = computed(() => {
    return playerStatus.value === "playing" ? "[ PAUSE ]" : "[ PLAY ]";
  });

  const togglePlayerStatus = () => {
    playerStatus.value = playerStatus.value === "playing" ? "pause" : "playing";
  };
</script>
