<template>
  <div class="space-y-4">
    <p class="text-3xl uppercase">scene</p>
    <div class="flex items-center gap-x-4 text-2xl">
      <SettingButton symbols="<" />
      <span class="uppercase">night city</span>
      <SettingButton symbols=">" />
    </div>
  </div>
</template>

<script setup lang="ts">
  import SettingButton from "./SettingButton.vue";
</script>
