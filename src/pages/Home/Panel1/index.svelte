<script lang="ts">
  import logoUrl from './logo.png';
</script>

<div class="flex h-screen xl:h-full t-bg-vanilla-light border-b-2 xl:border-b-0 border-r-0 xl:border-r-2 t-border-charcoal">
  <div>
    <div class="t-arrow absolute" />
    <div
      class="absolute t-bg-vanilla-light rounded-full w-32 md:w-48 lg:w-1/5 xl:w-56 t-w-22 mt-1 md:mt-4 lg:mt-3 xl:mt-5 t-2xl:mt-8 ml-1 md:ml-4 lg:ml-3 xl:ml-5 ">
      <img src={logoUrl} alt="Tykto logo" />
      <h3 class="t-text-sans text-2xl sm:text-3xl lg:text-4xl hidden">Tykto</h3>
    </div>
  </div>
  <div class="flex flex-1 justify-center items-center">
    <div class="flex flex-col justify-center lg:justify-end text-5xl t-text-7xl t-text-8xl t-text-10xl t-text-sans w-3/4 t-h-80">
      <div class="space-x-5"><span>Hello</span> <code class="t-text-purple">:)</code></div>
      <p class="t-lh-tight">We specialise in business apps</p>
    </div>
  </div>
</div>
