<script>
  export let currentIndex;
  export let totalSlides;
  export let onPrev;
  export let onNext;
  
  $: progress = ((currentIndex + 1) / totalSlides) * 100;
  $: isFirstSlide = currentIndex === 0;
  $: isLastSlide = currentIndex === totalSlides - 1;
</script>

<footer class="relative bg-gradient-to-r from-slate-900/80 via-slate-800/80 to-slate-900/80 backdrop-blur-sm border-t border-slate-700/50 py-6 px-8 overflow-hidden shadow-lg">
  <!-- Animated background -->
  <div class="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-purple-500/5 to-pink-500/5"></div>
  
  <!-- Top decorative line -->
  <div class="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-400/30 to-transparent opacity-50"></div>
  
  <div class="max-w-4xl mx-auto relative z-10">
    <!-- Controles de navegación -->
    <div class="flex justify-between items-center mb-6">
      <button
        on:click={onPrev}
        disabled={isFirstSlide}
        class="group relative px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white font-bold rounded-full transition-all duration-300 disabled:from-gray-300 disabled:to-gray-400 disabled:text-gray-500 disabled:cursor-not-allowed shadow-lg shadow-blue-500/30 hover:shadow-blue-600/50 hover:scale-105 disabled:shadow-none disabled:scale-100 overflow-hidden"
      >
        <span class="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 ease-out"></span>
        <span class="relative flex items-center gap-2">
          <svg class="w-5 h-5 group-hover:-translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path>
          </svg>
          Anterior
        </span>
      </button>

      <div class="flex flex-col items-center gap-2">
        <span class="text-slate-200 font-bold text-lg">
          <span class="text-blue-400 text-2xl">{currentIndex + 1}</span>
          <span class="text-slate-500 mx-2">/</span>
          <span class="text-slate-300">{totalSlides}</span>
        </span>
        <span class="text-xs text-slate-400 tracking-widest uppercase">Diapositiva</span>
      </div>

      <button
        on:click={onNext}
        disabled={isLastSlide}
        class="group relative px-8 py-3 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-bold rounded-full transition-all duration-300 disabled:from-gray-300 disabled:to-gray-400 disabled:text-gray-500 disabled:cursor-not-allowed shadow-lg shadow-purple-500/30 hover:shadow-purple-600/50 hover:scale-105 disabled:shadow-none disabled:scale-100 overflow-hidden"
      >
        <span class="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 ease-out"></span>
        <span class="relative flex items-center gap-2">
          Siguiente
          <svg class="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
          </svg>
        </span>
      </button>
    </div>

    <!-- Barra de progreso mejorada -->
    <div class="relative w-full bg-slate-700/50 rounded-full h-3 overflow-hidden border border-slate-600/50 shadow-inner">
      <div
        class="absolute inset-y-0 left-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 transition-all duration-500 ease-out rounded-full shadow-lg shadow-blue-500/50"
        style="width: {progress}%"
      >
        <!-- Shimmer effect -->
        <div class="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shimmer"></div>
      </div>
      
      <!-- Progress indicator dots -->
      <div class="absolute inset-0 flex items-center justify-between px-1">
        {#each Array(totalSlides) as _, i}
          <div 
            class="w-1 h-1 rounded-full transition-all duration-300 {i <= currentIndex ? 'bg-white scale-150 shadow-lg shadow-blue-400/50' : 'bg-slate-500 scale-100'}"
          ></div>
        {/each}
      </div>
    </div>
    
    <!-- Developer credit -->
    <div class="mt-4 pt-4 border-t border-slate-700/30 text-center">
      <p class="text-xs text-slate-400">
        Desarrollado por 
        <span class="font-semibold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
          Lic. Tobias González Galeano
        </span>
      </p>
    </div>
  </div>
</footer>

<style>
  @keyframes shimmer {
    0% {
      transform: translateX(-100%);
    }
    100% {
      transform: translateX(100%);
    }
  }
  
  .animate-shimmer {
    animation: shimmer 2s infinite;
  }
</style>
