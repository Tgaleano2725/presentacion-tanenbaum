<script>
  import { fly, scale, fade } from 'svelte/transition';
  import { cubicOut } from 'svelte/easing';
  import { onMount } from 'svelte';
  import mediumZoom from 'medium-zoom';
  import { glossaryStore } from '../stores/glossaryStore.js';
  import glossaryData from '../data/glosarios_terminos.json';
  
  export let slide;
  
  // Función para resaltar términos del glosario
  function highlightGlossaryTerms(text) {
    let result = text;
    glossaryData.forEach(term => {
      const regex = new RegExp(`\\b(${term.id})\\b`, 'gi');
      result = result.replace(regex, `<span class="glossary-term" data-term-id="${term.id}">$1</span>`);
    });
    return result;
  }
  
  function handleTermClick(event) {
    if (event.target.classList.contains('glossary-term')) {
      const termId = event.target.dataset.termId;
      const term = glossaryData.find(t => t.id === termId);
      if (term) {
        glossaryStore.openTerm(term);
      }
    }
  }
  
  $: hasImage = slide.imagen !== null;
  $: imageUrl = hasImage ? new URL(`../assets/${slide.imagen}`, import.meta.url).href : null;
  $: hasVideo = slide.video !== null;
  $: videoUrl = hasVideo ? new URL(`../assets/video/${slide.video}`, import.meta.url).href : null;
  const defaultCaptionsUrl = new URL('../assets/video/captions/default.vtt', import.meta.url).href;
  
  let imageElement;
  let showVideoModal = false;
  let videoElement;
  
  function openVideoModal() {
    showVideoModal = true;
  }
  
  function closeVideoModal() {
    showVideoModal = false;
    if (videoElement) {
      videoElement.pause();
      videoElement.currentTime = 0;
    }
  }
  
  onMount(() => {
    if (imageElement) {
      const zoom = mediumZoom(imageElement, {
        margin: 24,
        background: 'rgba(15, 23, 42, 0.95)',
        scrollOffset: 0,
      });
      
      return () => {
        zoom.detach();
      };
    }
  });
</script>

<div
  class="relative bg-slate-900/90 backdrop-blur-xl border border-slate-700/50 rounded-3xl shadow-2xl shadow-black/40 p-8 md:p-12 overflow-hidden group hover:border-slate-600 hover:shadow-blue-500/20 transition-all duration-500"
  in:fly={{ y: 30, duration: 600, delay: 200, easing: cubicOut }}
  out:scale={{ duration: 300, easing: cubicOut }}
>
  <!-- Animated gradient overlay -->
  <div class="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
  
  <!-- Grid pattern background -->
  <div class="absolute inset-0 opacity-[0.03]" style="background-image: repeating-linear-gradient(0deg, #3b82f6 0px, transparent 1px, transparent 40px), repeating-linear-gradient(90deg, #3b82f6 0px, transparent 1px, transparent 40px);"></div>
  
  <!-- Glowing corners -->
  <div class="absolute top-0 left-0 w-20 h-20 bg-blue-500/20 blur-2xl rounded-full -translate-x-10 -translate-y-10 group-hover:scale-150 transition-transform duration-700"></div>
  <div class="absolute bottom-0 right-0 w-20 h-20 bg-purple-500/20 blur-2xl rounded-full translate-x-10 translate-y-10 group-hover:scale-150 transition-transform duration-700"></div>
  
  <!-- Top accent line -->
  <div class="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-blue-400 to-transparent opacity-50"></div>
  
  <div class="relative z-10">
    <!-- Icono decorativo basado en el contenido -->
    <div class="flex items-start gap-4 mb-6">
      <!-- Botón de Animación (Video) -->
      {#if hasVideo}
        <button
          on:click={openVideoModal}
          class="absolute top-4 right-4 z-20 group/video"
          aria-label="Ver animación"
        >
          <div class="relative">
            <!-- Animated border glow -->
            <div class="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 opacity-75 blur-sm animate-border-glow"></div>
            <div class="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 opacity-0 group-hover/video:opacity-100 blur-md animate-border-glow transition-opacity duration-300"></div>
            
            <!-- Button container -->
            <div class="relative px-4 py-2 bg-slate-900/90 backdrop-blur-md rounded-xl border-2 border-transparent flex items-center gap-2 group-hover/video:bg-slate-800/90 transition-all duration-300">
              <svg class="w-5 h-5 text-purple-400 group-hover/video:text-pink-400 transition-colors duration-300" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z"></path>
              </svg>
              <span class="text-sm font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">Animación</span>
            </div>
          </div>
        </button>
      {/if}
      <div class="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-2xl flex items-center justify-center border border-blue-500/30 shadow-lg shadow-blue-500/20">
        {#if slide.title.toLowerCase().includes('estructura') || slide.title.toLowerCase().includes('arquitectura')}
          <svg class="w-7 h-7 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"></path>
          </svg>
        {:else if slide.title.toLowerCase().includes('generación') || slide.title.toLowerCase().includes('1g') || slide.title.toLowerCase().includes('2g') || slide.title.toLowerCase().includes('3g') || slide.title.toLowerCase().includes('4g') || slide.title.toLowerCase().includes('5g')}
          <svg class="w-7 h-7 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
          </svg>
        {:else if slide.title.toLowerCase().includes('red') || slide.title.toLowerCase().includes('celular') || slide.title.toLowerCase().includes('frecuencias')}
          <svg class="w-7 h-7 text-pink-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0"></path>
          </svg>
        {:else if slide.title.toLowerCase().includes('conclusión') || slide.title.toLowerCase().includes('reflexión')}
          <svg class="w-7 h-7 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
          </svg>
        {:else if slide.title.toLowerCase().includes('desafío') || slide.title.toLowerCase().includes('problema')}
          <svg class="w-7 h-7 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path>
          </svg>
        {:else}
          <svg class="w-7 h-7 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
          </svg>
        {/if}
      </div>
      
      <h2 class="flex-1 text-2xl md:text-4xl font-black bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent leading-tight">
        {slide.title}
      </h2>
    </div>
    
    <!-- Contenido principal con imagen (si existe) -->
    <div class="flex flex-col {hasImage ? 'md:flex-row' : ''} gap-6">
      <!-- Lista de bullets -->
      <ul class="space-y-4 text-slate-200 text-base md:text-xl {hasImage ? 'md:flex-1' : ''}">
        {#each slide.bullets as bullet, i}
          <li 
            class="flex items-start gap-4 group/item hover:translate-x-2 transition-transform duration-300"
            style="animation: slideIn 0.5s ease-out {i * 0.1}s both;"
          >
            <svg 
              class="flex-shrink-0 w-6 h-6 mt-1 text-blue-400 group-hover/item:text-purple-400 transition-all duration-300 group-hover/item:scale-110 arrow-bounce" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
              style="animation-delay: {i * 0.1}s;"
            >
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6"></path>
            </svg>
            <span 
              class="leading-relaxed font-light"
              role="button"
              tabindex="0"
              on:click={handleTermClick}
              on:keydown={(e) => (e.key === 'Enter' || e.key === ' ') && handleTermClick(e)}
            >{@html highlightGlossaryTerms(bullet)}</span>
          </li>
        {/each}
      </ul>
      
      <!-- Imagen (si existe) -->
      {#if hasImage}
        <div class="md:w-1/2 flex-shrink-0 relative z-20">
          <div class="relative rounded-2xl overflow-hidden border-2 border-slate-700/50 shadow-xl shadow-blue-500/10 hover:border-blue-500/50 transition-all duration-500 group/image bg-slate-800/80">
            <img 
              bind:this={imageElement}
              src={imageUrl} 
              alt={slide.title}
              class="w-full h-auto object-contain cursor-zoom-in relative z-30"
              style="animation: imageReveal 0.8s ease-out 0.3s both; min-height: 200px;"
            />
            <div class="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent opacity-0 group-hover/image:opacity-100 transition-opacity duration-500 pointer-events-none z-40"></div>
          </div>
        </div>
      {/if}
    </div>
  </div>
  
  <!-- Bottom accent line -->
  <div class="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-purple-400 to-transparent opacity-50"></div>
</div>

<!-- Modal de Video -->
{#if showVideoModal && hasVideo}
  <div 
    class="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
    role="button"
    tabindex="0"
    on:click={closeVideoModal}
    on:keydown={(e) => e.key === 'Escape' && closeVideoModal()}
    transition:fade={{ duration: 200 }}
  >
    <div
      class="relative w-full max-w-4xl bg-slate-900 rounded-2xl overflow-hidden shadow-2xl border-2 border-purple-500/30"
      on:click={(e) => e.stopPropagation()}
      on:keydown={(e) => e.stopPropagation()}
      role="dialog"
      aria-modal="true"
      tabindex="-1"
      transition:scale={{ duration: 300, easing: cubicOut }}
    >
      <!-- Close button -->
      <button
        on:click={closeVideoModal}
        class="absolute top-4 right-4 z-10 w-10 h-10 bg-slate-800/80 backdrop-blur-md rounded-full flex items-center justify-center hover:bg-slate-700 transition-colors duration-300 group"
        aria-label="Cerrar video"
      >
        <svg class="w-5 h-5 text-slate-400 group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
        </svg>
      </button>
      
      <!-- Video player -->
      <video
        bind:this={videoElement}
        src={videoUrl}
        class="w-full h-auto"
        controls
        autoplay
      >
        <track
          kind="captions"
          src={defaultCaptionsUrl}
          srclang="es"
          label="Subtítulos en español"
          default
        />
        Tu navegador no soporta el elemento de video.
      </video>
    </div>
  </div>
{/if}

<style>
  @keyframes slideIn {
    from {
      opacity: 0;
      transform: translateX(-20px);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }
  
  @keyframes imageReveal {
    from {
      opacity: 0;
      transform: scale(0.95) translateY(10px);
    }
    to {
      opacity: 1;
      transform: scale(1) translateY(0);
    }
  }
  
  .arrow-bounce {
    animation: arrowBounce 2s ease-in-out infinite;
  }
  
  @keyframes arrowBounce {
    0%, 100% {
      transform: translateX(0);
    }
    50% {
      transform: translateX(5px);
    }
  }
  
  :global(.glossary-term) {
    color: rgb(96, 165, 250);
    font-weight: 600;
    cursor: pointer;
    text-decoration: underline;
    text-decoration-color: rgba(96, 165, 250, 0.3);
    text-underline-offset: 3px;
    transition: all 0.3s ease;
    border-radius: 3px;
    padding: 0 2px;
  }
  
  :global(.glossary-term:hover) {
    color: rgb(167, 139, 250);
    text-decoration-color: rgba(167, 139, 250, 0.6);
    background: rgba(96, 165, 250, 0.1);
  }
  
  @keyframes border-glow {
    0%, 100% {
      opacity: 0.75;
      transform: scale(1);
    }
    50% {
      opacity: 1;
      transform: scale(1.05);
    }
  }
  
  .animate-border-glow {
    animation: border-glow 2s ease-in-out infinite;
  }
</style>
