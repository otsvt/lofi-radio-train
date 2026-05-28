import cityLayer1 from "@/shared/assets/scenes/night-city/layer-1.png";
import cityLayer2 from "@/shared/assets/scenes/night-city/layer-2.png";
import cityLayer3 from "@/shared/assets/scenes/night-city/layer-3.png";
import cityLayer4 from "@/shared/assets/scenes/night-city/layer-4.png";
import cityLayer5 from "@/shared/assets/scenes/night-city/layer-5.png";

import mountainsLayer1 from "@/shared/assets/scenes/mountains/layer-1.png";
import mountainsLayer2 from "@/shared/assets/scenes/mountains/layer-2.png";
import mountainsLayer3 from "@/shared/assets/scenes/mountains/layer-3.png";
import mountainsLayer4 from "@/shared/assets/scenes/mountains/layer-4.png";

import islandLayer2 from "@/shared/assets/scenes/island/layer-2.png";
import islandLayer3 from "@/shared/assets/scenes/island/layer-3.png";
import islandLayer4 from "@/shared/assets/scenes/island/layer-4.png";
import islandLayer5 from "@/shared/assets/scenes/island/layer-5.png";

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
    layers: [
      {
        src: mountainsLayer4,
        duration: 300,
      },
      {
        src: mountainsLayer3,
        duration: 180,
      },
      {
        src: mountainsLayer2,
        duration: 90,
      },
      {
        src: mountainsLayer1,
        duration: 50,
      },
    ],
  },
  {
    label: "island",
    layers: [
      {
        src: islandLayer5,
        duration: 300,
      },
      {
        src: islandLayer4,
        duration: 180,
      },
      {
        src: islandLayer3,
        duration: 90,
      },
      {
        src: islandLayer2,
        duration: 50,
      },
    ],
  },
];
