<template>
  <div class="space-y-4 uppercase">
    <p class="text-3xl">scene</p>
    <div class="flex items-center justify-between gap-x-4 text-2xl">
      <SettingButton symbols="<" @click="selectPrevScene" />
      <span>{{ selectedScene.label }}</span>
      <SettingButton symbols=">" @click="selectNextScene" />
    </div>
    <ActionButton class="mx-auto" label="[ apply ]" :disabled="isApplyDisabled" @click="applySelectedScene" />
  </div>
</template>

<script setup lang="ts">
  import { onBeforeUnmount } from "vue";
  import { ActionButton } from "@/shared/components/buttons/action-button";
  import { SettingButton } from "@/shared/components/buttons/setting-button";

  import { useScene } from "../../composables/useScene";

  const { selectedScene, isApplyDisabled, selectPrevScene, selectNextScene, applySelectedScene, resetSelectedScene } =
    useScene();

  onBeforeUnmount(() => {
    resetSelectedScene();
  });
</script>
