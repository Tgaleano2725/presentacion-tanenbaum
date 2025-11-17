import { writable } from 'svelte/store';
import data from '../data/slides.json';

function createPresentationStore() {
  const { slides, tituloPresentacion, descripcion } = data;
  const { subscribe, set, update } = writable({
    currentIndex: 0,
    slides,
    tituloPresentacion,
    descripcion
  });

  return {
    subscribe,
    nextSlide: () => update(state => {
      if (state.currentIndex < state.slides.length - 1) {
        return { ...state, currentIndex: state.currentIndex + 1 };
      }
      return state;
    }),
    prevSlide: () => update(state => {
      if (state.currentIndex > 0) {
        return { ...state, currentIndex: state.currentIndex - 1 };
      }
      return state;
    }),
    goToSlide: (index) => update(state => ({
      ...state,
      currentIndex: Math.max(0, Math.min(index, state.slides.length - 1))
    })),
    reset: () => set({
      currentIndex: 0,
      slides,
      tituloPresentacion,
      descripcion
    })
  };
}

export const presentationStore = createPresentationStore();
