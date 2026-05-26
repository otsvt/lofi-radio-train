import { computed, ref } from "vue";

import { sceneVariants } from "../constants/scene";

const SCENE_CHANGING_TIMEOUT = 500;

const currentSceneIndex = ref(0);
const selectedSceneIndex = ref(currentSceneIndex.value);

const isSceneChanging = ref(false);

const currentScene = computed(() => sceneVariants[currentSceneIndex.value]);
const selectedScene = computed(() => sceneVariants[selectedSceneIndex.value]);

const isApplyDisabled = computed(() => {
  return currentSceneIndex.value === selectedSceneIndex.value || isSceneChanging.value;
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
  if (isSceneChanging.value) {
    return;
  }

  isSceneChanging.value = true;

  setTimeout(() => {
    currentSceneIndex.value = selectedSceneIndex.value;
  }, SCENE_CHANGING_TIMEOUT);
  setTimeout(() => {
    isSceneChanging.value = false;
  }, SCENE_CHANGING_TIMEOUT * 4);
};

const resetSelectedScene = () => {
  if (isApplyDisabled.value) {
    return;
  }

  selectedSceneIndex.value = currentSceneIndex.value;
};

export const useScene = () => {
  return {
    SCENE_CHANGING_TIMEOUT,
    currentScene,
    selectedScene,
    isSceneChanging,
    isApplyDisabled,
    selectNextScene,
    selectPrevScene,
    applySelectedScene,
    resetSelectedScene,
  };
};
