<script>
  import Timer from './Timer.svelte';
  
  export let title;
  export let description;
</script>

<header class="relative bg-gradient-to-r from-slate-900/80 via-slate-800/80 to-slate-900/80 backdrop-blur-sm border-b border-slate-700/50 py-6 px-8 overflow-hidden shadow-lg">
  <!-- Animated background effect -->
  <div class="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-purple-500/5 to-pink-500/5 animate-pulse"></div>
  
  <!-- Decorative lines -->
  <div class="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-400/30 to-transparent opacity-50"></div>
  <div class="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-400/30 to-transparent opacity-50"></div>
  
  <div class="relative z-10 max-w-7xl mx-auto">
    <div class="flex items-start justify-between gap-6">
      <div class="flex-1">
        <h1 class="text-3xl md:text-4xl font-black bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-2">
          {title}
        </h1>
        <p class="text-slate-300 text-sm md:text-base font-light tracking-wide">
          {description}
        </p>
      </div>
      
      <Timer />
    </div>
  </div>
  
  <!-- Corner accents -->
  <div class="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-500/20 to-transparent rounded-bl-full"></div>
  <div class="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-purple-500/20 to-transparent rounded-tr-full"></div>
</header>
