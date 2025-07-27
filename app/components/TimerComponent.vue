<template>
  <div class="my-10 flex flex-col items-center justify-center">
    <div class="mb-6">
      <h4 class="text-3xl font-black capitalize">
        {{ phase }}
      </h4>
    </div>
    <div
      class="relative h-64 w-64 rounded-full border-8 border-primary-400 flex items-center justify-center shadow-lg transition-all ease-in-out"
      :class="phaseBorderClass"
    >
      <div class="text-center">
        <p class="text-5xl font-bold">{{ formattedTime }}</p>
        <span class="text-sm">Pomodoro</span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  const { formattedTime, phase } = usePomodoroTimer();

  const phaseBorderClass = computed(() => {
    switch (phase.value) {
      case 'work':
        return 'border-red-400';
      case 'rest':
        return 'border-primary-400';
      case 'longRest':
        return 'border-secondary-400';
      default:
        return 'border-gray-300';
    }
  });
</script>
