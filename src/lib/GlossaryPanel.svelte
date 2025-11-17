<script>
  import { glossaryStore } from '../stores/glossaryStore.js';
  import { fly, fade } from 'svelte/transition';
  import { cubicOut } from 'svelte/easing';
  
  /** @type {any} */
  let store;
  $: store = $glossaryStore;
</script>

{#if store && store.isOpen && store.selectedTerm}
  <!-- Backdrop -->
  <div 
    class="fixed inset-0 bg-black/60 backdrop-blur-md z-40 flex items-center justify-center p-4"
    role="button"
    tabindex="0"
    on:click={() => glossaryStore.close()}
    on:keydown={(e) => e.key === 'Escape' && glossaryStore.close()}
    transition:fade={{ duration: 200 }}
  >
    <!-- Modal centrado -->
    <div
      class="relative w-full max-w-lg bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 border-2 border-blue-500/30 rounded-3xl shadow-2xl shadow-blue-500/30 overflow-hidden"
      on:click={(e) => e.stopPropagation()}
      on:keydown={(e) => e.stopPropagation()}
      role="dialog"
      aria-modal="true"
      tabindex="-1"
      transition:fly={{ y: -50, duration: 400, easing: cubicOut }}
    >
      <!-- Efectos decorativos -->
      <div class="absolute top-0 right-0 w-40 h-40 bg-blue-500/20 blur-3xl rounded-full"></div>
      <div class="absolute bottom-0 left-0 w-40 h-40 bg-purple-500/20 blur-3xl rounded-full"></div>
      
      <!-- Header del modal -->
      <div class="relative bg-slate-900/95 backdrop-blur-xl border-b border-slate-700/50 p-6 flex items-start justify-between">
        <div class="flex-1">
          <h3 class="text-2xl font-black bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-2">
            {store.selectedTerm.id}
          </h3>
          <p class="text-xs text-slate-400 uppercase tracking-wider">Glosario de términos</p>
        </div>
        
        <button
          on:click={() => glossaryStore.close()}
          aria-label="Cerrar panel de glosario"
          class="flex-shrink-0 w-10 h-10 rounded-full bg-slate-800 hover:bg-slate-700 border border-slate-600 hover:border-blue-500/50 flex items-center justify-center transition-all duration-300 group"
        >
          <svg class="w-5 h-5 text-slate-400 group-hover:text-blue-400 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
          </svg>
        </button>
      </div>
      
      <!-- Contenido -->
      <div class="relative p-6 space-y-6 max-h-[70vh] overflow-y-auto">
        <!-- Card de significado -->
        <div class="relative bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-6 shadow-xl overflow-hidden group">
          <!-- Decorative elements -->
          <div class="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 blur-3xl rounded-full"></div>
          <div class="absolute bottom-0 left-0 w-32 h-32 bg-purple-500/10 blur-3xl rounded-full"></div>
          
          <div class="relative z-10">
            <div class="flex items-center gap-3 mb-4">
              <div class="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 border border-blue-500/30 flex items-center justify-center">
                <svg class="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path>
                </svg>
              </div>
              <h4 class="text-lg font-bold text-slate-200">Definición</h4>
            </div>
            
            <p class="text-slate-300 leading-relaxed text-base">
              {store.selectedTerm.significado}
            </p>
          </div>
          
          <!-- Bottom accent -->
          <div class="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 opacity-50"></div>
        </div>
        
        <!-- Info adicional -->
        <div class="bg-blue-500/5 border border-blue-500/20 rounded-xl p-4">
          <div class="flex items-start gap-3">
            <svg class="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>
            <p class="text-sm text-slate-400 leading-relaxed">
              Haz clic en cualquier término técnico resaltado en la presentación para ver su definición.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
{/if}
