<template>
  <div class="my-10 flex flex-col items-center justify-center px-4 text-center">
    <div class="mb-6">
      <h4 class="text-2xl sm:text-3xl md:text-4xl font-black capitalize">
        {{ phase }}
      </h4>
    </div>
    <div
      class="relative flex items-center justify-center rounded-full border-8 border-primary-400 shadow-lg transition-all ease-in-out"
      :class="[phaseBorderClass, 'w-48 h-48 sm:w-60 sm:h-60 md:w-72 md:h-72']"
    >
      <div class="text-center">
        <p class="text-4xl sm:text-5xl font-bold">{{ formattedTime }}</p>
        <span class="text-xs sm:text-sm">
          Work sessions completed:
          <span class="font-semibold">{{ workSessionCount }}</span>
        </span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  const { formattedTime, phase, workSessionCount } = usePomodoroTimer();

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
