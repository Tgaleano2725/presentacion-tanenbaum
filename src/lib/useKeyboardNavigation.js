import { onMount, onDestroy } from 'svelte';

export function useKeyboardNavigation(onNext, onPrev) {
  function handleKeydown(event) {
    if (event.key === 'ArrowRight') {
      onNext();
    } else if (event.key === 'ArrowLeft') {
      onPrev();
    }
  }

  onMount(() => {
    window.addEventListener('keydown', handleKeydown);
  });

  onDestroy(() => {
    window.removeEventListener('keydown', handleKeydown);
  });
}
