<template>
  <canvas ref="canvasRef" :class="['layer pointer-events-none', zIndex]"></canvas>
</template>

<script setup lang="ts">
  import { onMounted, onUnmounted, ref, watch } from "vue";

  type WeatherType = "rain" | "snow";
  type Bucket = 0 | 1 | 2;

  type Particle = {
    x: number;
    y: number;
    speedX: number;
    speedY: number;
    length: number;
    radius: number;
    opacityBucket: Bucket;
  };

  const props = defineProps<{
    type: WeatherType;
    intensity: number;
    speed: number;
    wind: number;
    opacity: number;
    zIndex: string;
  }>();

  const canvasRef = ref<HTMLCanvasElement | null>(null);

  let ctx: CanvasRenderingContext2D | null = null;
  let width = 0;
  let height = 0;
  let animationFrameId = 0;
  let particles: Particle[] = [];

  const random = (min: number, max: number) => Math.random() * (max - min) + min;

  const getOpacityBucket = (): Bucket => {
    const value = Math.random();

    if (value < 0.45) return 0;
    if (value < 0.8) return 1;

    return 2;
  };

  const getBucketOpacity = (bucket: Bucket) => {
    const maxOpacity = Math.max(props.opacity, 0.05);

    if (bucket === 0) return maxOpacity * 0.35;
    if (bucket === 1) return maxOpacity * 0.65;

    return maxOpacity;
  };

  const createRainParticle = (randomY = true): Particle => ({
    x: random(0, width),
    y: randomY ? random(-height, height) : random(-120, -20),
    speedX: props.wind + random(-0.15, 0.15),
    speedY: random(10, 18) * props.speed,
    length: random(16, 34),
    radius: random(0.7, 1.2),
    opacityBucket: getOpacityBucket(),
  });

  const createSnowParticle = (randomY = true): Particle => ({
    x: random(0, width),
    y: randomY ? random(-height, height) : random(-80, -20),
    speedX: props.wind + random(-0.35, 0.35),
    speedY: random(0.7, 2) * props.speed,
    length: 0,
    radius: random(1, 3.2),
    opacityBucket: getOpacityBucket(),
  });

  const createParticle = (randomY = true) => {
    return props.type === "snow" ? createSnowParticle(randomY) : createRainParticle(randomY);
  };

  const buildParticles = () => {
    particles = Array.from({ length: props.intensity }, () => createParticle(true));
  };

  const resizeCanvas = () => {
    const canvas = canvasRef.value;
    if (!canvas) return;

    const dpr = Math.min(window.devicePixelRatio || 1, 1.5);

    width = window.innerWidth;
    height = window.innerHeight;

    canvas.width = width * dpr;
    canvas.height = height * dpr;
    canvas.style.width = `${width}px`;
    canvas.style.height = `${height}px`;

    ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;

    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

    buildParticles();
  };

  const resetParticle = (particle: Particle) => {
    const next = createParticle(false);

    particle.x = random(0, width);
    particle.y = next.y;
    particle.speedX = next.speedX;
    particle.speedY = next.speedY;
    particle.length = next.length;
    particle.radius = next.radius;
    particle.opacityBucket = next.opacityBucket;
  };

  const updateParticles = () => {
    for (const particle of particles) {
      particle.x += particle.speedX;
      particle.y += particle.speedY;

      if (particle.y > height + 60 || particle.x < -80 || particle.x > width + 80) {
        resetParticle(particle);
      }
    }
  };

  const drawRainBucket = (bucket: Bucket) => {
    if (!ctx) return;

    ctx.beginPath();
    ctx.strokeStyle = `rgba(210, 225, 255, ${getBucketOpacity(bucket)})`;
    ctx.lineWidth = bucket === 2 ? 1.2 : 0.8;

    for (const particle of particles) {
      if (particle.opacityBucket !== bucket) continue;

      ctx.moveTo(particle.x, particle.y);
      ctx.lineTo(particle.x - particle.speedX * 2.2, particle.y - particle.length);
    }

    ctx.stroke();
  };

  const drawSnowBucket = (bucket: Bucket) => {
    if (!ctx) return;

    ctx.beginPath();
    ctx.fillStyle = `rgba(255, 255, 255, ${getBucketOpacity(bucket)})`;

    for (const particle of particles) {
      if (particle.opacityBucket !== bucket) continue;

      ctx.moveTo(particle.x + particle.radius, particle.y);
      ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
    }

    ctx.fill();
  };

  const drawRain = () => {
    drawRainBucket(0);
    drawRainBucket(1);
    drawRainBucket(2);
  };

  const drawSnow = () => {
    drawSnowBucket(0);
    drawSnowBucket(1);
    drawSnowBucket(2);
  };

  const animate = () => {
    if (!ctx) return;

    ctx.clearRect(0, 0, width, height);

    updateParticles();

    if (props.type === "snow") {
      drawSnow();
    } else {
      drawRain();
    }

    animationFrameId = requestAnimationFrame(animate);
  };

  const handleResize = () => {
    resizeCanvas();
  };

  watch(
    () => [props.type, props.intensity, props.speed, props.wind, props.opacity],
    () => {
      buildParticles();
    },
  );

  onMounted(() => {
    resizeCanvas();
    animate();
    window.addEventListener("resize", handleResize);
  });

  onUnmounted(() => {
    cancelAnimationFrame(animationFrameId);
    window.removeEventListener("resize", handleResize);
  });
</script>
