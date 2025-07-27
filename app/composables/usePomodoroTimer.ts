import type { Phase } from '~/types/phase.type';
import type { Status } from '~/types/status.type';

let instance: ReturnType<typeof createPomodoroTimer> | null = null;

function createPomodoroTimer() {
  // Services
  const toast = useToast();

  // Store
  const configStore = useCustomTimerConfigStore();

  const workDuration = computed(() => configStore.workDuration * 60);
  const restDuration = computed(() => configStore.restDuration * 60);
  const longRestDuration = computed(() => configStore.longRestDuration * 60);

  // Variables

  const time = ref(workDuration.value);
  const status = ref<Status>('stopped');
  const phase = ref<Phase>('work');
  const pomodoroCount = ref(0);

  let intervalId: NodeJS.Timeout | null = null;

  // Computed
  const formattedTime = computed(() => {
    const minutes = Math.floor(time.value / 60);
    const seconds = time.value % 60;
    return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
  });

  // Functions
  function start() {
    if (status.value === 'running') return;

    status.value = 'running';
    if (intervalId) clearInterval(intervalId);

    intervalId = setInterval(() => {
      if (time.value > 0) {
        time.value--;
      } else {
        if (phase.value === 'work') {
          pomodoroCount.value++;
          phase.value = pomodoroCount.value % 4 === 0 ? 'longRest' : 'rest';
        } else {
          phase.value = 'work';
        }

        resetCurrentPhase();
        start();
      }
    }, 1000);
    toast.add({
      title: 'The timer has started',
      color: 'neutral',
    });
  }

  function pause() {
    if (status.value !== 'running') return;
    status.value = 'paused';
    if (intervalId) clearInterval(intervalId);
    toast.add({
      title: 'The timer is paused',
      color: 'error',
    });
  }

  function resume() {
    if (status.value !== 'paused') return;
    start();
  }

  function reset() {
    if (intervalId) clearInterval(intervalId);

    status.value = 'stopped';
    phase.value = 'work';
    pomodoroCount.value = 0;

    time.value = workDuration.value;

    toast.add({
      title: 'Timer was set correctly!',
      color: 'success',
    });
  }

  function resetCurrentPhase() {
    if (intervalId) clearInterval(intervalId);

    status.value = 'stopped';
    time.value =
      phase.value === 'work'
        ? workDuration.value
        : phase.value === 'rest'
        ? restDuration.value
        : longRestDuration.value;
  }

  function setPhase(newPhase: Phase) {
    phase.value = newPhase;
    reset();
  }

  onUnmounted(() => {
    if (intervalId) clearInterval(intervalId);
    configStore.$reset();
  });

  return {
    time,
    formattedTime,
    status,
    phase,
    workDuration,
    restDuration,
    longRestDuration,
    start,
    pause,
    resume,
    reset,
    setPhase,
  };
}

// Singleton wrapper
export const usePomodoroTimer = () => {
  if (!instance) {
    instance = createPomodoroTimer();
  }
  return instance;
};
