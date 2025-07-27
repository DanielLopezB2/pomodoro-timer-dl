<template>
  <div class="my-10 flex flex-col items-center justify-center">
    <div class="mb-6">
      <h4 class="text-3xl font-black">Work!</h4>
    </div>
    <div
      class="relative h-64 w-64 rounded-full border-8 border-primary-400 flex items-center justify-center shadow-lg"
    >
      <div class="text-center">
        <p class="text-5xl font-bold">{{ formattedTime }}</p>
        <span class="text-sm">Pomodoro</span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  const time = ref(25 * 60);

  const formattedTime = computed(() => {
    const minutes = Math.floor(time.value / 60);
    const seconds = time.value % 60;
    return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
  });
</script>
