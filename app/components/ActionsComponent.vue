<template>
  <div class="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 flex-wrap">
    <UButton label="Start" size="lg" icon="i-lucide-circle-play" @click="start" />
    <UButton label="Stop" color="error" size="lg" icon="i-lucide-circle-pause" @click="pause" />
    <UButton
      label="Resume"
      color="secondary"
      size="lg"
      icon="i-lucide-fast-forward"
      @click="resume"
    />
    <UButton label="Reset" color="neutral" size="lg" icon="i-lucide-rotate-ccw" @click="resetAll" />
  </div>
</template>

<script setup lang="ts">
  const { start, pause, resume, resetAll } = usePomodoroTimer();
</script>
