import { ref } from "vue";

const moveX = ref(0);
const moveY = ref(0);
const moveZ = ref(6);

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
  return { moveX, moveY, moveZ };
};
