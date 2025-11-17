<script>
  import { timerStore } from '../stores/timerStore';
  
  $: ({ timeRemaining, isRunning } = $timerStore);
  
  $: minutes = Math.floor(timeRemaining / 60);
  $: seconds = timeRemaining % 60;
  $: formattedTime = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
  $: isLowTime = timeRemaining < 60 && timeRemaining > 0;
  $: isTimeUp = timeRemaining === 0;
  
  function toggleTimer() {
    timerStore.toggle();
  }
  
  function resetTimer() {
    timerStore.reset();
  }
</script>

<div class="flex items-center gap-3 bg-slate-800/60 backdrop-blur-md rounded-2xl px-5 py-3 border border-slate-600/40 shadow-lg">
  <!-- Display del tiempo -->
  <div class="flex items-center gap-2">
    <svg class="w-5 h-5 text-slate-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
    </svg>
    <span 
      class="text-2xl font-bold tabular-nums transition-colors duration-300 {isTimeUp ? 'text-red-400 animate-pulse' : isLowTime ? 'text-orange-400' : 'text-slate-100'}"
    >
      {formattedTime}
    </span>
  </div>
  
  <!-- Botones de control -->
  <div class="flex items-center gap-2 border-l border-slate-600 pl-3">
    <button
      on:click={toggleTimer}
      class="group relative p-2 bg-gradient-to-br from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white rounded-xl transition-all duration-300 hover:scale-110 shadow-md hover:shadow-blue-500/50"
      title={isRunning ? 'Pausar' : 'Iniciar'}
    >
      {#if isRunning}
        <!-- Pause icon -->
        <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z"></path>
        </svg>
      {:else}
        <!-- Play icon -->
        <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M8 5v14l11-7z"></path>
        </svg>
      {/if}
    </button>
    
    <button
      on:click={resetTimer}
      class="group relative p-2 bg-gradient-to-br from-slate-600 to-slate-700 hover:from-slate-700 hover:to-slate-800 text-white rounded-xl transition-all duration-300 hover:scale-110 shadow-md hover:shadow-slate-500/50"
      title="Reiniciar"
    >
      <!-- Reset icon -->
      <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"></path>
      </svg>
    </button>
  </div>
</div>
