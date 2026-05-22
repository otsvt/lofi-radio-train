<template>
  <div class="space-y-4 uppercase">
    <p class="text-3xl">scene</p>
    <div class="flex items-center gap-x-4 text-2xl">
      <SettingButton symbols="<" />
      <span>{{ scene.label }}</span>
      <SettingButton symbols=">" />
    </div>
    <ActionButton class="mx-auto" label="[ apply ]" :disabled="true" />
  </div>
</template>

<script setup lang="ts">
  import { ref } from "vue";
  import { ActionButton } from "@/shared/components/buttons/action-button";
  import { SettingButton } from "@/shared/components/buttons/setting-button";

  const scenes = {
    nightCity: {
      label: "night city",
    },
  };

  const scene = ref(scenes.nightCity);
</script>
