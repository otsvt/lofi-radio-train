<template>
  <slot v-if="canOpenApp" />
  <section
    v-else
    class="fixed inset-0 z-50 p-4 flex-center bg-black/90 text-panel-text text-shadow-lg text-shadow-panel-text/40"
  >
    <div class="max-w-md space-y-4 text-center uppercase">
      <p class="text-3xl">Desktop only</p>
      <p class="text-xl opacity-80">This experience is not available on mobile devices.</p>
    </div>
  </section>
</template>

<script setup lang="ts">
  import { onMounted, ref } from "vue";

  const canOpenApp = ref(false);

  const screenQuery = "(min-width: 1280px)";
  let mediaQuery: MediaQueryList | null = null;

  const isTvDevice = () => {
    const userAgent = navigator.userAgent.toLowerCase();

    return /smart-tv|smarttv|tizen|webos|netcast|hbbtv|appletv|googletv|android tv|bravia|viera|aquos|hisense|roku|tv/.test(
      userAgent,
    );
  };

  const isMobileDevice = () => {
    const userAgent = navigator.userAgent.toLowerCase();

    return /mobi|android|iphone|ipad|ipod|tablet|phone/.test(userAgent);
  };

  const syncDevice = () => {
    if (isTvDevice()) {
      canOpenApp.value = true;
    } else {
      canOpenApp.value = !!mediaQuery?.matches && !isMobileDevice();
    }
  };

  onMounted(() => {
    mediaQuery = window.matchMedia(screenQuery);
    syncDevice();

    mediaQuery.addEventListener("change", syncDevice);
  });
</script>
