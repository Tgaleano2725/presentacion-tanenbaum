import { writable } from 'svelte/store';

function createTimerStore() {
  const INITIAL_TIME = 15 * 60; // 15 minutos en segundos
  
  const { subscribe, set, update } = writable({
    timeRemaining: INITIAL_TIME,
    isRunning: false,
    intervalId: null
  });

  let intervalId = null;

  return {
    subscribe,
    start: () => {
      update(state => {
        if (state.isRunning) return state;
        
        if (intervalId) clearInterval(intervalId);
        
        intervalId = setInterval(() => {
          update(s => {
            if (s.timeRemaining <= 0) {
              clearInterval(intervalId);
              return { ...s, timeRemaining: 0, isRunning: false };
            }
            return { ...s, timeRemaining: s.timeRemaining - 1 };
          });
        }, 1000);
        
        return { ...state, isRunning: true, intervalId };
      });
    },
    pause: () => {
      if (intervalId) {
        clearInterval(intervalId);
        intervalId = null;
      }
      update(state => ({ ...state, isRunning: false }));
    },
    reset: () => {
      if (intervalId) {
        clearInterval(intervalId);
        intervalId = null;
      }
      set({ timeRemaining: INITIAL_TIME, isRunning: false, intervalId: null });
    },
    toggle: () => {
      update(state => {
        if (state.isRunning) {
          if (intervalId) {
            clearInterval(intervalId);
            intervalId = null;
          }
          return { ...state, isRunning: false };
        } else {
          if (intervalId) clearInterval(intervalId);
          
          intervalId = setInterval(() => {
            update(s => {
              if (s.timeRemaining <= 0) {
                clearInterval(intervalId);
                return { ...s, timeRemaining: 0, isRunning: false };
              }
              return { ...s, timeRemaining: s.timeRemaining - 1 };
            });
          }, 1000);
          
          return { ...state, isRunning: true };
        }
      });
    }
  };
}

export const timerStore = createTimerStore();
