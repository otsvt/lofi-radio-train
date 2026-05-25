import cityLayer1 from "@/shared/assets/scenes/1/scene-1-layer-1.png";
import cityLayer2 from "@/shared/assets/scenes/1/scene-1-layer-2.png";
import cityLayer3 from "@/shared/assets/scenes/1/scene-1-layer-3.png";
import cityLayer4 from "@/shared/assets/scenes/1/scene-1-layer-4.png";
import cityLayer5 from "@/shared/assets/scenes/1/scene-1-layer-5.png";

export type SceneVariant = {
  label: string;
  layers: { src: string; duration: number }[];
};

export const sceneVariants: SceneVariant[] = [
  {
    label: "night city",
    layers: [
      {
        src: cityLayer5,
        duration: 1200,
      },
      {
        src: cityLayer4,
        duration: 1000,
      },
      {
        src: cityLayer3,
        duration: 250,
      },
      {
        src: cityLayer2,
        duration: 50,
      },
      {
        src: cityLayer1,
        duration: 20,
      },
    ],
  },
  {
    label: "mountains",
    layers: [],
  },
];
