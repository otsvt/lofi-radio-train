<template>
  <div class="space-y-4 uppercase">
    <p class="text-3xl">scene</p>
    <div class="flex items-center justify-between gap-x-4 text-2xl">
      <SettingButton symbols="<" @click="selectPrevScene" />
      <span>{{ selectedScene.label }}</span>
      <SettingButton symbols=">" @click="selectNextScene" />
    </div>
    <ActionButton class="mx-auto" label="[ apply ]" :disabled="isSelectedSame" @click="applySelectedScene" />
  </div>
</template>

<script setup lang="ts">
  import { computed, ref } from "vue";
  import { ActionButton } from "@/shared/components/buttons/action-button";
  import { SettingButton } from "@/shared/components/buttons/setting-button";

  const scenes = [
    {
      label: "night city",
    },
    {
      label: "mountains",
    },
  ];

  const sceneIndex = ref(0);
  const selectedSceneIndex = ref(sceneIndex.value);

  const selectedScene = computed(() => scenes[selectedSceneIndex.value]);
  const isSelectedSame = computed(() => {
    return sceneIndex.value === selectedSceneIndex.value;
  });

  const selectNextScene = () => {
    if (selectedSceneIndex.value === scenes.length - 1) {
      selectedSceneIndex.value = 0;
    } else {
      selectedSceneIndex.value += 1;
    }
  };

  const selectPrevScene = () => {
    if (selectedSceneIndex.value === 0) {
      selectedSceneIndex.value = scenes.length - 1;
    } else {
      selectedSceneIndex.value -= 1;
    }
  };

  const applySelectedScene = () => {
    sceneIndex.value = selectedSceneIndex.value;
  };
</script>
