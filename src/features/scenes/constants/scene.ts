import cityLayer1 from "@/shared/assets/scenes/night-city/layer-1.png";
import cityLayer2 from "@/shared/assets/scenes/night-city/layer-2.png";
import cityLayer3 from "@/shared/assets/scenes/night-city/layer-3.png";
import cityLayer4 from "@/shared/assets/scenes/night-city/layer-4.png";
import cityLayer5 from "@/shared/assets/scenes/night-city/layer-5.png";

import mountainsLayer1 from "@/shared/assets/scenes/mountains/layer-1.png";
import mountainsLayer2 from "@/shared/assets/scenes/mountains/layer-2.png";
import mountainsLayer3 from "@/shared/assets/scenes/mountains/layer-3.png";
import mountainsLayer4 from "@/shared/assets/scenes/mountains/layer-4.png";

import islandLayer1 from "@/shared/assets/scenes/island/layer-1.png";
import islandLayer2 from "@/shared/assets/scenes/island/layer-2.png";
import islandLayer3 from "@/shared/assets/scenes/island/layer-3.png";
import islandLayer4 from "@/shared/assets/scenes/island/layer-4.png";

import winterVillageLayer1 from "@/shared/assets/scenes/winter-village/layer-1.png";
import winterVillageLayer2 from "@/shared/assets/scenes/winter-village/layer-2.png";
import winterVillageLayer3 from "@/shared/assets/scenes/winter-village/layer-3.png";
import winterVillageLayer4 from "@/shared/assets/scenes/winter-village/layer-4.png";

import cyberPunkCityLayer1 from "@/shared/assets/scenes/cyberpunk-city/layer-1.png";
import cyberPunkCityLayer2 from "@/shared/assets/scenes/cyberpunk-city/layer-2.png";
import cyberPunkCityLayer3 from "@/shared/assets/scenes/cyberpunk-city/layer-3.png";
import cyberPunkCityLayer4 from "@/shared/assets/scenes/cyberpunk-city/layer-4.png";

import lonelyMotelLayer1 from "@/shared/assets/scenes/lonely-motel/layer-1.png";
import lonelyMotelLayer2 from "@/shared/assets/scenes/lonely-motel/layer-2.png";
import lonelyMotelLayer3 from "@/shared/assets/scenes/lonely-motel/layer-3.png";

import wildWestLayer1 from "@/shared/assets/scenes/wild-west/layer-1.png";
import wildWestLayer2 from "@/shared/assets/scenes/wild-west/layer-2.png";
import wildWestLayer3 from "@/shared/assets/scenes/wild-west/layer-3.png";
import wildWestLayer4 from "@/shared/assets/scenes/wild-west/layer-4.png";

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
        duration: 900,
      },
      {
        src: cityLayer3,
        duration: 240,
      },
      {
        src: cityLayer2,
        duration: 70,
      },
      {
        src: cityLayer1,
        duration: 35,
      },
    ],
  },
  {
    label: "mountains",
    layers: [
      {
        src: mountainsLayer4,
        duration: 270,
      },
      {
        src: mountainsLayer3,
        duration: 150,
      },
      {
        src: mountainsLayer2,
        duration: 70,
      },
      {
        src: mountainsLayer1,
        duration: 30,
      },
    ],
  },
  {
    label: "island",
    layers: [
      {
        src: islandLayer4,
        duration: 300,
      },
      {
        src: islandLayer3,
        duration: 180,
      },
      {
        src: islandLayer2,
        duration: 90,
      },
      {
        src: islandLayer1,
        duration: 50,
      },
    ],
  },
  {
    label: "winter village",
    layers: [
      {
        src: winterVillageLayer4,
        duration: 500,
      },
      {
        src: winterVillageLayer3,
        duration: 320,
      },
      {
        src: winterVillageLayer2,
        duration: 150,
      },
      {
        src: winterVillageLayer1,
        duration: 70,
      },
    ],
  },
  {
    label: "cyberpunk city",
    layers: [
      {
        src: cyberPunkCityLayer4,
        duration: 440,
      },
      {
        src: cyberPunkCityLayer3,
        duration: 150,
      },
      {
        src: cyberPunkCityLayer2,
        duration: 70,
      },
      {
        src: cyberPunkCityLayer1,
        duration: 30,
      },
    ],
  },
  {
    label: "lonely motel",
    layers: [
      {
        src: lonelyMotelLayer3,
        duration: 190,
      },
      {
        src: lonelyMotelLayer2,
        duration: 120,
      },
      {
        src: lonelyMotelLayer1,
        duration: 40,
      },
    ],
  },
  {
    label: "wild west",
    layers: [
      {
        src: wildWestLayer4,
        duration: 219,
      },
      {
        src: wildWestLayer3,
        duration: 90,
      },
      {
        src: wildWestLayer2,
        duration: 50,
      },
      {
        src: wildWestLayer1,
        duration: 35,
      },
    ],
  },
];
