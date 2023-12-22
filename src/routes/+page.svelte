<svelte:head>
  <title>HOME</title>
  <meta name="description" content="O ponto de partida para este universo">
  <meta name="keywords" content="FRANCISNÍ, HOME, PÁGINA">
  <meta name="author" content="Francisní Gomes">
</svelte:head>


<script type="text/javascript" charset="utf-8">
  import HomeLoader from '../loaders/HomeLoader.svelte'
  import { PlayIcon, SearchIcon, ArrowUpIcon, ArrowDownIcon, GithubIcon,
  InstagramIcon, FastForwardIcon, ChevronsDownIcon, SunriseIcon, ZoomInIcon,
  CheckCircleIcon, ChevronsUpIcon } from 'svelte-feather-icons'
</script>




<main class="mx-[2rem] overflow-hidden relative max-w-[60vw] md:left-[30vw]">
  <section class="">
    <h1 class="text-6xl text-building font-header flex  mt-20"><span
        class="font-highlight text-elementary text-3xl">FRANCISNI.XYZ</span></h1>
    <p class="text-xl">Um Website moderno e informativo! </p>
    <ul class="mt-20 flex flex-col gap-5">
      <li class="flex gap-5">
        <CheckCircleIcon size="20" />Aprenda das mais variadas
        maneiras
      </li>
      <li class="flex gap-5">
        <CheckCircleIcon size="20" />Adquira
        autônomia nos estudos e na carreira
      </li>
      <li class="flex gap-5">
        <CheckCircleIcon size="20" />Adquira tecnicas de estudo avançadas
      </li>
      <li class="flex gap-5">
        <CheckCircleIcon size="20" />Acesse a mídia e cursos
        direto no site
      </li>
    </ul>
    <h3 class="text-2xl mt-20 mb-5 font-header">É tudo de graça e totalmente
      acessível... </h3>
    <div class="flex flex-wrap gap-5 w-[300px]">
      <button class="text-base mb-5 bg-action p-5 rounded-lg" type="submit"><a class="Acesse o
      Canal do Youtube" href="https://youtube.com/@francisni">Acesse o
          Canal do Youtube</a></button>
      <br />
      <button class="text-base bg-building mb-5 p-5 rounded-lg" type="submit">Acesse os
        Cursos em Vídeo</button>
      <br />
      <button class="text-base bg-building mb-5 p-5 rounded-lg" type="submit">
        Acesse o Blog Oficial</button>
    </div>
  </section>
  <section class="mt-ls p-ls mt-30">
    <h2 class="text-3xl font-highlight text-elementary py-5">INTRODUZA-SE | APRENDA A
    APRENDER COMIGO</h2>
    <div class="relative h-0 overflow-hidden max-w- w-full" style="padding-bottom: 56.25%">
      <iframe src="https://ytlink" frameborder="0" allowfullscreen
        class="absolute rounded-lg top-0 left-0 w-full h-full"></iframe>
    </div>
    <!--<div class="p-5 flex flex-col gap-5 text-base bg-building mt-10 rounded-lg">-->
    <!--  <h3 class="text-2xl font-header" >Descrição</h3>-->
    <!--  <p>Gostou do vídeo?</p>-->
    <!--</div>-->
  </section>
</main>