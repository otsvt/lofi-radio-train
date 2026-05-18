<template>
  <div class="space-y-4">
    <p class="text-3xl uppercase">weather</p>
    <fieldset class="flex flex-col gap-y-2 items-start text-2xl uppercase">
      <label class="setting-legend">
        <p>off</p>
        <input value="off" name="weather" type="radio" class="sr-only" />
      </label>
      <label class="setting-legend">
        <p>rain</p>
        <input value="rain" name="weather" type="radio" class="sr-only" />
      </label>
    </fieldset>
  </div>
</template>

<script setup lang="ts"></script>
