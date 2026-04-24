import { computed, ref, watch } from "vue";

type MoveZValues = 6 | 60;

const moveX = ref(0);
const moveY = ref(0);
const moveZ = ref<MoveZValues>(6);

const isZooming = ref(false);
const isZoomedIn = computed(() => moveZ.value === 60);

let zoomTimeout: ReturnType<typeof setTimeout> | null = null;

watch(moveZ, () => {
  isZooming.value = true;

  if (zoomTimeout) {
    clearTimeout(zoomTimeout);
  }

  zoomTimeout = setTimeout(() => {
    isZooming.value = false;
  }, 200);
});

window.addEventListener("mousemove", (event) => {
  moveX.value = (event.clientX - window.innerWidth / 2) * -0.0001;
  moveY.value = (event.clientY - window.innerHeight / 2) * -0.0005;
});

window.addEventListener("wheel", (event) => {
  if (event.deltaY < 0) {
    moveZ.value = 60;
  } else {
    moveZ.value = 6;
  }
});

export const useCameraMovement = () => {
  return { moveX, moveY, moveZ, isZooming, isZoomedIn };
};
