import { writable } from 'svelte/store';

function createGlossaryStore() {
  const store = writable({
    selectedTerm: null,
    isOpen: false
  });

  return {
    subscribe: store.subscribe,
    openTerm: (term) => store.update(state => ({ selectedTerm: term, isOpen: true })),
    close: () => store.update(state => ({ ...state, isOpen: false })),
    reset: () => store.set({ selectedTerm: null, isOpen: false })
  };
}

export const glossaryStore = createGlossaryStore();
