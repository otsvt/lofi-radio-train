import { ref } from "vue";

const isInterfaceOpen = ref(false);

const openInterface = () => {
  isInterfaceOpen.value = true;
};
const closeInterface = () => {
  isInterfaceOpen.value = false;
};

export const useInterface = () => {
  return { isInterfaceOpen, openInterface, closeInterface };
};
