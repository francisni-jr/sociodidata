<svelte:head>
  <title>HOME</title>
  <meta name="description" content="O ponto de partida para este universo">
  <meta name="keywords" content="SOCIODIDATA, HOME, PÁGINA">
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
        class="font-highlight text-elementary text-3xl">SOCIODIDATA.XYZ</span></h1>
    <p class="text-xl">Um Website moderno e informativo! </p>
    
    <figure class="flex gap-5">
      <img class="w-[40vw] mt-20 p-5 rounded-lg"
        src="https://res.cloudinary.com/dt2se4cle/image/upload/v1706209905/undraw_product_iteration_kjok_weakhi.svg"
        alt="ilustração de reurso" />
    </figure>
    
    <ul class="mt-20 flex flex-col gap-5">
      <li class="flex gap-5">
        <CheckCircleIcon size="20" />Recursos gratuitos fácilmente acessíveis
      </li>
      <li class="flex gap-5">
        <CheckCircleIcon size="20" />Adquira
        autônomia nos estudos e na carreira
      </li>
      <li class="flex gap-5">
        <CheckCircleIcon size="20" />Adquira tecnicas de estudo avançadas
      </li>
      <li class="flex gap-5">
        <CheckCircleIcon size="20" /> Aumente muito o seu poder de
        decisão
      </li>
    </ul>
    <h3 class="text-2xl mt-20 mb-5 font-header">É tudo de graça e totalmente
      acessível... </h3>
    <div class="flex flex-wrap gap-5 w-[300px]">
      <button class="text-base bg-action p-5 rounded-lg" type="submit"><a class="Acesse o
      Canal do Youtube" href="https://youtube.com/@sociodidata">Acesse o
          Canal do Youtube</a></button>
      <br />
      <button class="text-base bg-action mb-5 p-5 rounded-lg"
      type="submit"><a class="" href="/sobre">Saiba Mais</a></button>
    </div>
  </section>
</main>