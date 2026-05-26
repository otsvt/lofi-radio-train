import sleepEasyAmbient from "@/shared/audio/radio/sleep-easy-ambient.mp3";
import goodMornigAmbient from "@/shared/audio/radio/good-morning-ambient.mp3";

export type Statiion = {
  title: string;
  artist: string;
  src: string;
  license: "CC BY";
  source: "Free Music Archive";
};

export const radioStations: Statiion[] = [
  {
    title: "Sleep Easy Ambient",
    artist: "Ketsa",
    source: "Free Music Archive",
    license: "CC BY",
    src: sleepEasyAmbient,
  },
  {
    title: "Good Morning Ambient",
    artist: "Ketsa",
    source: "Free Music Archive",
    license: "CC BY",
    src: goodMornigAmbient,
  },
];
