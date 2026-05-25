import { computed, ref } from "vue";

import { sceneVariants } from "../constants/scene";

const currentSceneIndex = ref(0);
const selectedSceneIndex = ref(currentSceneIndex.value);

const currentScene = computed(() => sceneVariants[currentSceneIndex.value]);
const selectedScene = computed(() => sceneVariants[selectedSceneIndex.value]);
const isSelectedSame = computed(() => {
  return currentSceneIndex.value === selectedSceneIndex.value;
});

const selectNextScene = () => {
  if (selectedSceneIndex.value === sceneVariants.length - 1) {
    selectedSceneIndex.value = 0;
  } else {
    selectedSceneIndex.value += 1;
  }
};

const selectPrevScene = () => {
  if (selectedSceneIndex.value === 0) {
    selectedSceneIndex.value = sceneVariants.length - 1;
  } else {
    selectedSceneIndex.value -= 1;
  }
};

const applySelectedScene = () => {
  currentSceneIndex.value = selectedSceneIndex.value;
};

const resetSelectedScene = () => {
  selectedSceneIndex.value = currentSceneIndex.value;
};

export const useScene = () => {
  return {
    currentScene,
    selectedScene,
    isSelectedSame,
    selectNextScene,
    selectPrevScene,
    applySelectedScene,
    resetSelectedScene,
  };
};
