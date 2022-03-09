<script lang="ts">
  import logoUrl from './logo.png';
</script>

<div class="flex h-screen xl:h-full bg-vanilla border-b-2 xl:border-b-0 border-r-0 xl:border-r-2 border-charcoal">
  <div>
    <div
      class="t-arrow absolute w-0 h-0 border-charcoal border-l-0 border-r-14 border-r-transparent border-t-8 md:border-r-26 md:border-r-transparent md:border-t-14 lg:border-r-32 lg:border-r-transparent lg:border-t-14 xl:border-r-26 xl:border-r-transparent xl:border-t-15 2xl:border-r-28 2xl:border-r-transparent 2xl:border-t-16"
    />
    <div
      class="absolute bg-vanilla
       rounded-full w-32 md:w-48 lg:w-1/5 xl:w-56 t-w-22 mt-1 md:mt-4 lg:mt-3 xl:mt-4 ml-1 md:ml-4 lg:ml-3 xl:ml-4 "
    >
      <img src={logoUrl} alt="Tykto logo" />
      <h3 class="text-anthology-sans text-2xl sm:text-3xl lg:text-4xl hidden">Tykto</h3>
    </div>
  </div>
  <div class="flex flex-1 justify-center items-center xl:items-end 3xl:items-center 2xl:mb-10 3xl:mb-0">
    <div class="flex flex-col justify-center text-5xl sm:text-6xl md:text-7xl xl:text-8xl font-anthologys w-3/4 space-y-5 md:space-y-10">
      <div class="space-x-1 sm:space-x-5 md:space-x-6">
        <span>Hello</span>
        <code class="text-berry">:)</code>
      </div>
      <p class="leading-tight md:leading-snug lg:leading-tight xl:lg:leading-none">We specialise in business apps</p>
    </div>
  </div>
</div>
