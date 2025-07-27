import { defineStore } from 'pinia';

export const useCustomTimerConfigStore = defineStore('customTimerConfig', {
  state: () => ({
    workDuration: 25,
    restDuration: 5,
    longRestDuration: 15,
  }),
  actions: {
    setWorkDuration(minutes: number) {
      this.workDuration = minutes;
    },
    setRestDuration(minutes: number) {
      this.restDuration = minutes;
    },
    setLongRestDuration(minutes: number) {
      this.longRestDuration = minutes;
    },
    resetDefaults() {
      this.workDuration = 25;
      this.restDuration = 5;
      this.longRestDuration = 15;
    },
  },
  persist: true,
});
