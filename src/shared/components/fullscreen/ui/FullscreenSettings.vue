<template>
  <fieldset class="grid grid-cols-[auto_auto] gap-x-4 items-center text-2xl uppercase">
    <p>fullscreen</p>
    <div class="flex items-center gap-x-2">
      <label v-for="option in fullscreenOptions" class="radio-button">
        <p>{{ option.label }}</p>
        <input
          v-model="isFullscreen"
          :value="option.value"
          name="fullscreen"
          type="radio"
          class="sr-only"
          @change="setFullscreen(option.value)"
        />
      </label>
    </div>
  </fieldset>
</template>

<script setup lang="ts">
  import { useFullscreen } from "../composables/useFullscreen";

  const { fullscreenOptions, isFullscreen, setFullscreen } = useFullscreen();
</script>
