import { ref } from "vue";

const BARS_COUNT = 28;
const MIN_BAR_HEIGHT = 6;
const MAX_BAR_HEIGHT = 32;
const SMOOTHING = 0.25;

const createSilentBars = () => {
  return Array.from({ length: BARS_COUNT }, () => MIN_BAR_HEIGHT);
};

export const useAudioSignal = (audio: HTMLAudioElement) => {
  const signalBars = ref(createSilentBars());

  let audioContext: AudioContext | null = null;
  let analyser: AnalyserNode | null = null;
  let source: MediaElementAudioSourceNode | null = null;
  let frequencyData: Uint8Array<ArrayBuffer> | null = null;
  let animationFrameId: number | null = null;

  let currentHeights = createSilentBars();

  const setupSignal = () => {
    if (audioContext && analyser && source && frequencyData) {
      return;
    }

    audioContext = new AudioContext();

    analyser = audioContext.createAnalyser();
    analyser.fftSize = 128;
    analyser.smoothingTimeConstant = 0.85;

    source = audioContext.createMediaElementSource(audio);
    source.connect(analyser);
    analyser.connect(audioContext.destination);

    frequencyData = new Uint8Array(analyser.frequencyBinCount);
  };

  const prepareSignal = async () => {
    setupSignal();

    if (audioContext?.state === "suspended") {
      await audioContext.resume();
    }
  };

  const updateSignal = () => {
    if (!analyser || !frequencyData) {
      return;
    }

    analyser.getByteFrequencyData(frequencyData);

    const step = Math.floor(frequencyData.length / BARS_COUNT);

    const nextHeights = Array.from({ length: BARS_COUNT }, (_, barIndex) => {
      const start = barIndex * step;
      const end = start + step;

      let sum = 0;

      for (let i = start; i < end; i++) {
        sum += frequencyData?.[i] ?? 0;
      }

      const average = sum / step;
      const normalized = Math.pow(average / 255, 0.7);

      return MIN_BAR_HEIGHT + normalized * (MAX_BAR_HEIGHT - MIN_BAR_HEIGHT);
    });

    currentHeights = currentHeights.map((height, index) => {
      return height + (nextHeights[index] - height) * SMOOTHING;
    });

    signalBars.value = currentHeights.map((height) => Math.round(height));

    animationFrameId = requestAnimationFrame(updateSignal);
  };

  const startSignal = () => {
    if (animationFrameId !== null) {
      return;
    }

    updateSignal();
  };

  const stopSignal = () => {
    if (animationFrameId !== null) {
      cancelAnimationFrame(animationFrameId);
      animationFrameId = null;
    }

    currentHeights = createSilentBars();
    signalBars.value = createSilentBars();
  };

  return {
    signalBars,
    prepareSignal,
    startSignal,
    stopSignal,
  };
};
