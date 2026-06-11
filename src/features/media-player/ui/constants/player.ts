import sleepEasyAmbient from "@/shared/audio/radio/sleep-easy-ambient.mp3";
import goodMorningAmbient from "@/shared/audio/radio/good-morning-ambient.mp3";
import lofiChillHipHop from "@/shared/audio/radio/lofi-chill-hip-hop.mp3";
import lofiSoulHipHop from "@/shared/audio/radio/lofi-soul-hip-hop.mp3";
import minimalistPiano from "@/shared/audio/radio/minimalist-piano.mp3";

export type Station = {
  title: string;
  artist: string;
  src: string;
  license: "CC BY";
  source?: "Free Music Archive";
};

export const radioStations: Station[] = [
  {
    title: "Minimalist Piano",
    artist: "Ketsa",
    license: "CC BY",
    src: minimalistPiano,
  },
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
    src: goodMorningAmbient,
  },
  {
    title: "Lofi Soul Hip Hop",
    artist: "Ketsa",
    license: "CC BY",
    src: lofiSoulHipHop,
  },
  {
    title: "Lofi Chill Hip Hop",
    artist: "Ketsa",
    license: "CC BY",
    src: lofiChillHipHop,
  },
];
