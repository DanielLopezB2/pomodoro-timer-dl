<template>
  <div
    class="my-6 border border-primary-500/50 px-4 py-6 rounded-md w-full sm:max-w-xl md:max-w-3xl lg:max-w-4xl xl:w-[60rem] mx-auto"
  >
    <div class="flex flex-col items-center justify-center text-center">
      <p class="font-semibold text-primary-400 text-xl">Configure your timer</p>
      <span class="text-sm">The standard pomodoro configuration is set by default</span>
    </div>

    <UContainer class="mt-6">
      <UCollapsible>
        <UButton
          label="Configure"
          color="neutral"
          variant="subtle"
          trailing-icon="i-lucide-chevron-down"
          block
        />

        <template #content>
          <div
            class="mt-8 flex flex-col gap-6 md:flex-row md:items-center md:justify-center md:gap-10"
          >
            <div class="flex flex-col items-center gap-2">
              <p class="font-semibold text-center">Work time (min)</p>
              <UInputNumber v-model="workDuration" :min="1" :max="60" size="lg" />
            </div>

            <div class="flex flex-col items-center gap-2">
              <p class="font-semibold text-center">Rest time (min)</p>
              <UInputNumber v-model="restDuration" :min="1" :max="60" size="lg" />
            </div>

            <div class="flex flex-col items-center gap-2">
              <p class="font-semibold text-center">Longest rest time (min)</p>
              <UInputNumber v-model="longRestDuration" :min="1" :max="60" size="lg" />
            </div>

            <div class="flex flex-col items-center gap-2">
              <div class="h-[24px]" />
              <UButton label="Save" variant="outline" icon="i-lucide-save" @click="handleSave" />
            </div>
          </div>
        </template>
      </UCollapsible>
    </UContainer>
  </div>
</template>

<script setup lang="ts">
  const customTimerConfig = useCustomTimerConfigStore();
  const { resetAll } = usePomodoroTimer();

  const workDuration = computed({
    get: () => customTimerConfig.workDuration,
    set: val => customTimerConfig.setWorkDuration(val),
  });

  const restDuration = computed({
    get: () => customTimerConfig.restDuration,
    set: val => customTimerConfig.setRestDuration(val),
  });

  const longRestDuration = computed({
    get: () => customTimerConfig.longRestDuration,
    set: val => customTimerConfig.setLongRestDuration(val),
  });

  function handleSave() {
    resetAll();
  }
</script>
