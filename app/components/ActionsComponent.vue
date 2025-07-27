<template>
  <div class="flex items-center justify-center gap-6">
    <UButton label="Start" size="lg" icon="i-lucide-circle-play" @click="start" />
    <UButton label="Stop" color="error" size="lg" icon="i-lucide-circle-pause" @click="pause" />
    <UButton
      label="Resume"
      color="secondary"
      size="lg"
      icon="i-lucide-fast-forward"
      @click="resume"
    />
    <UButton label="Reset" color="neutral" size="lg" icon="i-lucide-rotate-ccw" @click="reset" />
  </div>
</template>

<script setup lang="ts">
  const { start, pause, resume, reset } = usePomodoroTimer();
</script>
