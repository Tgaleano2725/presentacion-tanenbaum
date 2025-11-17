<script>
  import { presentationStore } from './stores/presentationStore';
  import { useKeyboardNavigation } from './lib/useKeyboardNavigation';
  import Header from './lib/Header.svelte';
  import Slide from './lib/Slide.svelte';
  import Footer from './lib/Footer.svelte';
  import GlossaryPanel from './lib/GlossaryPanel.svelte';
  import Pointer from './lib/Pointer.svelte';
  import InfoPanel from './lib/InfoPanel.svelte';

  // Store subscription
  $: ({ currentIndex, slides, tituloPresentacion, descripcion } = $presentationStore);
  $: currentSlide = slides[currentIndex];

  // Keyboard navigation
  useKeyboardNavigation(
    () => presentationStore.nextSlide(),
    () => presentationStore.prevSlide()
  );
</script>

<main class="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-slate-100 flex flex-col relative overflow-hidden">
  <!-- Animated background effects -->
  <div class="absolute inset-0 overflow-hidden pointer-events-none">
    <!-- Gradient orbs -->
    <div class="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-float"></div>
    <div class="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-float-delayed"></div>
    <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-pink-500/5 rounded-full blur-3xl animate-pulse-slow"></div>
    
    <!-- Grid pattern -->
    <div class="absolute inset-0 opacity-[0.02]" style="background-image: repeating-linear-gradient(0deg, #3b82f6 0px, transparent 1px, transparent 50px), repeating-linear-gradient(90deg, #3b82f6 0px, transparent 1px, transparent 50px);"></div>
    
    <!-- Scan line effect -->
    <div class="absolute inset-0 bg-gradient-to-b from-transparent via-blue-500/5 to-transparent h-32 animate-scan"></div>
  </div>

  <div class="relative z-10 flex flex-col min-h-screen">
    <Header title={tituloPresentacion} description={descripcion} />

    <!-- Zona central - Diapositiva -->
    <div class="flex-1 flex items-center justify-center p-8 relative">
      <!-- Botón Anterior -->
      <button
        on:click={() => presentationStore.prevSlide()}
        disabled={currentIndex === 0}
        class="absolute left-4 top-1/2 -translate-y-1/2 z-20 group disabled:opacity-30 disabled:cursor-not-allowed"
        aria-label="Diapositiva anterior"
      >
        <div class="relative">
          <!-- Glow effect -->
          <div class="absolute inset-0 bg-blue-500/20 blur-xl rounded-full scale-0 group-hover:scale-150 group-disabled:scale-0 transition-transform duration-500"></div>
          
          <!-- Button container -->
          <div class="relative w-14 h-14 bg-slate-900/40 backdrop-blur-md border border-slate-700/50 rounded-full flex items-center justify-center group-hover:bg-slate-800/60 group-hover:border-blue-500/50 group-hover:scale-110 group-active:scale-95 transition-all duration-300 shadow-xl shadow-black/20">
            <svg class="w-6 h-6 text-slate-400 group-hover:text-blue-400 transition-colors duration-300 nav-arrow-left" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M15 19l-7-7 7-7"></path>
            </svg>
          </div>
        </div>
      </button>

      <!-- Botón Siguiente -->
      <button
        on:click={() => presentationStore.nextSlide()}
        disabled={currentIndex === slides.length - 1}
        class="absolute right-4 top-1/2 -translate-y-1/2 z-20 group disabled:opacity-30 disabled:cursor-not-allowed"
        aria-label="Siguiente diapositiva"
      >
        <div class="relative">
          <!-- Glow effect -->
          <div class="absolute inset-0 bg-purple-500/20 blur-xl rounded-full scale-0 group-hover:scale-150 group-disabled:scale-0 transition-transform duration-500"></div>
          
          <!-- Button container -->
          <div class="relative w-14 h-14 bg-slate-900/40 backdrop-blur-md border border-slate-700/50 rounded-full flex items-center justify-center group-hover:bg-slate-800/60 group-hover:border-purple-500/50 group-hover:scale-110 group-active:scale-95 transition-all duration-300 shadow-xl shadow-black/20">
            <svg class="w-6 h-6 text-slate-400 group-hover:text-purple-400 transition-colors duration-300 nav-arrow-right" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M9 5l7 7-7 7"></path>
            </svg>
          </div>
        </div>
      </button>

      <div class="w-full max-w-5xl">
        {#key currentIndex}
          <Slide slide={currentSlide} />
        {/key}
      </div>
    </div>

    <Footer
      currentIndex={currentIndex}
      totalSlides={slides.length}
      onPrev={() => presentationStore.prevSlide()}
      onNext={() => presentationStore.nextSlide()}
    />
  </div>
</main>

<style>
  @keyframes float {
    0%, 100% {
      transform: translateY(0) translateX(0);
    }
    50% {
      transform: translateY(-20px) translateX(10px);
    }
  }
  
  @keyframes float-delayed {
    0%, 100% {
      transform: translateY(0) translateX(0);
    }
    50% {
      transform: translateY(20px) translateX(-10px);
    }
  }
  
  @keyframes scan {
    0% {
      transform: translateY(-100%);
    }
    100% {
      transform: translateY(100vh);
    }
  }
  
  @keyframes pulse-slow {
    0%, 100% {
      opacity: 0.3;
    }
    50% {
      opacity: 0.6;
    }
  }
  
  .animate-float {
    animation: float 8s ease-in-out infinite;
  }
  
  .animate-float-delayed {
    animation: float-delayed 10s ease-in-out infinite;
  }
  
  .animate-scan {
    animation: scan 8s linear infinite;
  }
  
  .animate-pulse-slow {
    animation: pulse-slow 4s ease-in-out infinite;
  }
  
  @keyframes navArrowLeft {
    0%, 100% {
      transform: translateX(0);
    }
    50% {
      transform: translateX(-4px);
    }
  }
  
  @keyframes navArrowRight {
    0%, 100% {
      transform: translateX(0);
    }
    50% {
      transform: translateX(4px);
    }
  }
  
  :global(.nav-arrow-left) {
    animation: navArrowLeft 1.5s ease-in-out infinite;
  }
  
  :global(.nav-arrow-right) {
    animation: navArrowRight 1.5s ease-in-out infinite;
  }
  
  :global(body) {
    overflow: hidden;
  }
</style>

<!-- Glossary Panel -->
<GlossaryPanel />

<!-- Pointer Tool -->
<Pointer />

<!-- Info Panel -->
<InfoPanel />
