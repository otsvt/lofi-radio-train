<template>
  <div class="flex items-center gap-x-4 text-2xl">
    <p class="uppercase">volume</p>
    <div class="flex items-center gap-x-4">
      <SettingButton symbols="<" @click="emit('decrease')" />
      <div class="flex items-end gap-x-2">
        <div
          v-for="vol in 10"
          :class="[
            'w-1.5 bg-panel-text/80 transition-all shadow-md shadow-panel-text/40',
            vol <= volumeLevel ? 'h-8' : 'h-3 opacity-30',
          ]"
        ></div>
      </div>
      <SettingButton symbols=">" @click="emit('increase')" />
    </div>
  </div>
</template>

<script setup lang="ts">
  import { computed } from "vue";
  import { SettingButton } from "@/shared/components/buttons/setting-button";

  const { volume } = defineProps<{ volume: number }>();

  const emit = defineEmits(["decrease", "increase"]);

  const volumeLevel = computed(() => {
    return volume * 10;
  });
</script>
