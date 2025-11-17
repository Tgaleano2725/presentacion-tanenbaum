<script>
  import { fly, fade } from 'svelte/transition';
  import { cubicOut } from 'svelte/easing';
  
  let showModal = false;
  
  function openModal() {
    showModal = true;
  }
  
  function closeModal() {
    showModal = false;
  }
</script>

<!-- Botón de información -->
<button
  on:click={openModal}
  class="fixed bottom-8 left-8 z-50 group"
  aria-label="Información del proyecto"
  title="Acerca de"
>
  <div class="relative">
    <!-- Glow effect -->
    <div class="absolute inset-0 bg-blue-500/30 blur-xl rounded-full scale-0 group-hover:scale-150 transition-transform duration-500"></div>
    
    <!-- Button container -->
    <div class="relative w-14 h-14 bg-slate-900/60 backdrop-blur-md border border-slate-700/50 rounded-full flex items-center justify-center shadow-xl transition-all duration-300 group-hover:bg-slate-800/60 group-hover:border-blue-500/50 group-hover:scale-110">
      <svg class="w-7 h-7 text-slate-400 group-hover:text-blue-400 transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
      </svg>
    </div>
  </div>
</button>

<!-- Modal de información -->
{#if showModal}
  <div 
    class="fixed inset-0 bg-black/70 backdrop-blur-md z-50 flex items-center justify-center p-4"
    role="button"
    tabindex="0"
    on:click={closeModal}
    on:keydown={(e) => e.key === 'Escape' && closeModal()}
    transition:fade={{ duration: 200 }}
  >
    <div
      class="relative w-full max-w-2xl bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 border-2 border-blue-500/30 rounded-3xl shadow-2xl shadow-blue-500/20 overflow-hidden"
      on:click={(e) => e.stopPropagation()}
      on:keydown={(e) => e.stopPropagation()}
      role="dialog"
      aria-modal="true"
      tabindex="-1"
      transition:fly={{ y: -50, duration: 400, easing: cubicOut }}
    >
      <!-- Efectos decorativos -->
      <div class="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 blur-3xl rounded-full"></div>
      <div class="absolute bottom-0 left-0 w-64 h-64 bg-purple-500/10 blur-3xl rounded-full"></div>
      
      <!-- Header -->
      <div class="relative bg-slate-900/95 backdrop-blur-xl border-b border-slate-700/50 p-6">
        <div class="flex items-center justify-between">
          <div class="flex items-center gap-4">
            <div class="w-12 h-12 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-xl flex items-center justify-center border border-blue-500/30">
              <svg class="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
            </div>
            <div>
              <h3 class="text-2xl font-black bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Acerca de
              </h3>
              <p class="text-xs text-slate-400 uppercase tracking-wider">Información del proyecto</p>
            </div>
          </div>
          
          <button
            on:click={closeModal}
            class="w-10 h-10 bg-slate-800/80 backdrop-blur-md rounded-full flex items-center justify-center hover:bg-slate-700 transition-colors duration-300 group/close"
            aria-label="Cerrar"
          >
            <svg class="w-5 h-5 text-slate-400 group-hover/close:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </button>
        </div>
      </div>
      
      <!-- Content -->
      <div class="relative p-6 space-y-6 max-h-[70vh] overflow-y-auto">
        <!-- Propósito -->
        <div class="bg-slate-800/40 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-5 space-y-3">
          <div class="flex items-center gap-3">
            <div class="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500/20 to-purple-500/20 border border-blue-500/30 flex items-center justify-center">
              <svg class="w-4 h-4 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path>
              </svg>
            </div>
            <h4 class="text-lg font-bold text-slate-200">Propósito Educativo</h4>
          </div>
          <p class="text-sm text-slate-300 leading-relaxed">
            Este proyecto es una presentación interactiva desarrollada con fines académicos para la 
            <strong>Maestría en Gestión de Sistemas Informáticos</strong>, módulo de 
            <strong>Redes de Comunicación de Datos</strong>.
          </p>
        </div>

        <!-- Contenido -->
        <div class="bg-slate-800/40 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-5 space-y-3">
          <div class="flex items-center gap-3">
            <div class="w-8 h-8 rounded-lg bg-gradient-to-br from-purple-500/20 to-pink-500/20 border border-purple-500/30 flex items-center justify-center">
              <svg class="w-4 h-4 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
              </svg>
            </div>
            <h4 class="text-lg font-bold text-slate-200">Contenido Basado en</h4>
          </div>
          <p class="text-sm text-slate-300 leading-relaxed">
            <strong>Capítulo 2.7</strong> del libro <em>"Comunicaciones y Redes de Computadores"</em><br>
            <strong>Autores:</strong> Andrew S. Tanenbaum & David J. Wetherall<br>
            <strong>Editorial:</strong> Pearson Educación (2011)
          </p>
        </div>

        <!-- Desarrollador -->
        <div class="bg-slate-800/40 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-5 space-y-3">
          <div class="flex items-center gap-3">
            <div class="w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-500/20 to-blue-500/20 border border-cyan-500/30 flex items-center justify-center">
              <svg class="w-4 h-4 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
              </svg>
            </div>
            <h4 class="text-lg font-bold text-slate-200">Desarrollador</h4>
          </div>
          <p class="text-sm text-slate-300 leading-relaxed">
            <strong class="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Lic. Tobias González Galeano
            </strong><br>
            Estudiante de Maestría en Gestión de Sistemas Informáticos
          </p>
        </div>

        <!-- Tecnologías -->
        <div class="bg-slate-800/40 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-5 space-y-3">
          <div class="flex items-center gap-3">
            <div class="w-8 h-8 rounded-lg bg-gradient-to-br from-green-500/20 to-emerald-500/20 border border-green-500/30 flex items-center justify-center">
              <svg class="w-4 h-4 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path>
              </svg>
            </div>
            <h4 class="text-lg font-bold text-slate-200">Tecnologías</h4>
          </div>
          <div class="flex flex-wrap gap-2">
            <span class="px-3 py-1 bg-slate-700/50 border border-slate-600/50 rounded-full text-xs text-slate-300">Svelte 5</span>
            <span class="px-3 py-1 bg-slate-700/50 border border-slate-600/50 rounded-full text-xs text-slate-300">Vite 7</span>
            <span class="px-3 py-1 bg-slate-700/50 border border-slate-600/50 rounded-full text-xs text-slate-300">Tailwind CSS v4</span>
            <span class="px-3 py-1 bg-slate-700/50 border border-slate-600/50 rounded-full text-xs text-slate-300">Medium Zoom</span>
          </div>
        </div>

        <!-- Licencia -->
        <div class="bg-slate-800/40 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-5 space-y-3">
          <div class="flex items-center gap-3">
            <div class="w-8 h-8 rounded-lg bg-gradient-to-br from-yellow-500/20 to-orange-500/20 border border-yellow-500/30 flex items-center justify-center">
              <svg class="w-4 h-4 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
              </svg>
            </div>
            <h4 class="text-lg font-bold text-slate-200">Licencia</h4>
          </div>
          <p class="text-sm text-slate-300 leading-relaxed">
            Este proyecto está licenciado bajo la <strong>Licencia MIT</strong>. 
            Es de código abierto y puede ser usado, modificado y distribuido libremente 
            con fines educativos y comerciales.
          </p>
        </div>

        <!-- Términos de uso -->
        <div class="bg-blue-500/5 border border-blue-500/20 rounded-xl p-4">
          <div class="flex items-start gap-3">
            <svg class="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>
            <div class="text-xs text-slate-400 leading-relaxed space-y-1">
              <p><strong class="text-slate-300">Uso Educativo:</strong> El contenido está destinado exclusivamente para fines académicos y educativos.</p>
              <p><strong class="text-slate-300">Derechos de Autor:</strong> El contenido bibliográfico pertenece a sus respectivos autores. Esta es una interpretación educativa.</p>
              <p><strong class="text-slate-300">Sin Garantías:</strong> Este software se proporciona "tal cual", sin garantías de ningún tipo.</p>
            </div>
          </div>
        </div>

        <!-- Footer del modal -->
        <div class="text-center pt-4 border-t border-slate-700/30">
          <p class="text-xs text-slate-500">
            © 2025 Tobias González Galeano. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </div>
  </div>
{/if}
