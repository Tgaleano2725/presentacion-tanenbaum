<script>
  import { onMount, onDestroy } from 'svelte';
  
  let isActive = false;
  let cursorX = 0;
  let cursorY = 0;
  
  function handleMouseMove(event) {
    if (isActive) {
      cursorX = event.clientX;
      cursorY = event.clientY;
    }
  }
  
  function togglePointer() {
    isActive = !isActive;
  }
  
  onMount(() => {
    window.addEventListener('mousemove', handleMouseMove);
  });
  
  onDestroy(() => {
    window.removeEventListener('mousemove', handleMouseMove);
  });
</script>

<!-- Botón para activar/desactivar el señalador -->
<button
  on:click={togglePointer}
  class="fixed top-24 right-8 z-50 group"
  class:active={isActive}
  aria-label="Activar/desactivar puntero"
  title="Puntero láser (L)"
>
  <div class="relative">
    <!-- Glow effect -->
    <div class="absolute inset-0 bg-red-500/30 blur-xl rounded-full scale-0 group-hover:scale-150 transition-transform duration-500" class:scale-150={isActive}></div>
    
    <!-- Button container -->
    <div class="relative w-12 h-12 backdrop-blur-md border rounded-xl flex items-center justify-center shadow-xl transition-all duration-300"
         class:bg-red-500={isActive}
         class:bg-slate-900={!isActive}
         class:border-red-500={isActive}
         class:border-slate-700={!isActive}>
      <div class="absolute inset-0 bg-current opacity-20 rounded-xl" class:opacity-20={isActive} class:opacity-60={!isActive}></div>
      <svg class="w-6 h-6 transition-colors duration-300" 
           class:text-red-400={isActive}
           class:text-slate-400={!isActive}
           fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122"></path>
      </svg>
    </div>
    
    <!-- Indicator dot -->
    {#if isActive}
      <div class="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full animate-pulse shadow-lg shadow-red-500/50"></div>
    {/if}
  </div>
</button>

<!-- Cursor personalizado (puntero láser) -->
{#if isActive}
  <div 
    class="pointer-cursor"
    style="left: {cursorX}px; top: {cursorY}px;"
  >
    <!-- Punto central del láser -->
    <div class="laser-dot"></div>
    
    <!-- Anillos de expansión -->
    <div class="laser-ring laser-ring-1"></div>
    <div class="laser-ring laser-ring-2"></div>
    <div class="laser-ring laser-ring-3"></div>
  </div>
{/if}

<style>
  .pointer-cursor {
    position: fixed;
    pointer-events: none;
    z-index: 9999;
    transform: translate(-50%, -50%);
  }
  
  .laser-dot {
    position: absolute;
    width: 16px;
    height: 16px;
    background: radial-gradient(circle, rgba(239, 68, 68, 1) 0%, rgba(239, 68, 68, 0.8) 40%, rgba(239, 68, 68, 0) 70%);
    border-radius: 50%;
    box-shadow: 0 0 20px rgba(239, 68, 68, 0.8),
                0 0 40px rgba(239, 68, 68, 0.4);
    animation: pulse-laser 1.5s ease-in-out infinite;
  }
  
  .laser-ring {
    position: absolute;
    border: 2px solid rgba(239, 68, 68, 0.6);
    border-radius: 50%;
    animation: expand-ring 2s ease-out infinite;
  }
  
  .laser-ring-1 {
    width: 24px;
    height: 24px;
    top: -4px;
    left: -4px;
  }
  
  .laser-ring-2 {
    width: 32px;
    height: 32px;
    top: -8px;
    left: -8px;
    animation-delay: 0.3s;
  }
  
  .laser-ring-3 {
    width: 40px;
    height: 40px;
    top: -12px;
    left: -12px;
    animation-delay: 0.6s;
  }
  
  @keyframes pulse-laser {
    0%, 100% {
      transform: scale(1);
      opacity: 1;
    }
    50% {
      transform: scale(1.2);
      opacity: 0.8;
    }
  }
  
  @keyframes expand-ring {
    0% {
      transform: scale(0.5);
      opacity: 0.8;
    }
    100% {
      transform: scale(1.5);
      opacity: 0;
    }
  }
  
  button.active {
    animation: button-pulse 2s ease-in-out infinite;
  }
  
  @keyframes button-pulse {
    0%, 100% {
      transform: scale(1);
    }
    50% {
      transform: scale(1.05);
    }
  }
</style>
