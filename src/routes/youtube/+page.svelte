<svelte:head>
  <title>YOUTUBE</title>
  <meta name="description" content="Blog e Canal. Tudo em um só lugar">
  <meta name="keywords" content="FRANCISNÍ, YOUTUBE, PÁGINA">
  <meta name="author" content="Francisní Gomes">
</svelte:head>

<script type="text/javascript" charset="utf-8">
  import { ArrowUpIcon, ArrowDownIcon , CalendarIcon, ClockIcon, BookOpenIcon,
  FilterIcon } from 'svelte-feather-icons'
	
</script>


<main class="mx-[2rem] mt-20 overflow-hidden relative max-w-[60vw] md:left-[30vw]">
    <section class="mb-30">
    <h1 class="text-6xl text-building font-header flex"><span
        class="font-highlight text-elementary text-3xl">YOUTUBE</span></h1>
    <p class="text-xl">Blog e Canal tudo em um só lugar</p>
    <div class="text-2xl rounded-lg p-5 mb-10 mt-20 text-base bg-building">Esse é o
    MEU CANAL DO YOUTUBE só que bem mais detalhado e informativo. Videos, Descrições, Blog, Iframes, e muito mais...</div>
        <div class="flex flex-col gap-5 w-[300px]">
           <span class="text-1xl flex gap-[5px] items-start
       "><CalendarIcon class="translate-y-[2px]" size="15" />Data de Publicação</span>
           <span class="text-1xl flex gap-[5px] items-start
       "><ClockIcon class="translate-y-[2px]" size="15" />Tempo de Exibição do
       Vídeo</span>
        <span class="text-1xl flex gap-[5px] items-start
       "><BookOpenIcon class="translate-y-[2px]" size="15" />Tempo Médio de
       Leitura</span>
        <span class="text-1xl flex gap-[5px] items-start
       "><FilterIcon class="translate-y-[2px]" size="15" />Categoria da
       Publicação</span>
    </div>
    <div class="links mt-30">
      <span class="text-building flex gap-[px] items-start opacity-[.8]"
      ><ArrowUpIcon size="15" />mais recente</span>
      <div class="p-5 flex flex-wrap gap-5 w-full h-auto">
               <a style="box-shadow: 0 0 10px grey;" class="
        rounded-xl w-full p-5 w-auto border bg-action border-action"
        href="/youtube/melhores-apps-de-produtividade-2024">
               <figure class="flex flex-col ">
      <img class="mb-5  rounded-lg"
        src="https://res.cloudinary.com/dt2se4cle/image/upload/v17037966/CapaPost1_ewgxom.png"
        alt="" />
        <p class="text-elementary text-2xl font-highlight">Melhores Apps de Produtividade 2024</p>
      <figcaption class="text-base mt-5" >
       <span class="text-1xl flex gap-[5px] items-start
       "><CalendarIcon class="translate-y-[2px]" size="15" />29/12/2023</span>
        <span class="text-1xl flex gap-[5px] items-start
       "><ClockIcon class="translate-y-[2px]" size="15" />02:21</span>
        <span class="text-1xl flex gap-[5px] items-start
       "><BookOpenIcon class="translate-y-[2px]" size="15" />5 min</span>
        <span class="text-1xl flex gap-[5px] items-start
       "><FilterIcon class="translate-y-[2px]" size="15" />Aplicativos</span>
      </figcaption>
    </figure>
        </a>
        
        
      </div>
       <span class="text-building flex gap-[px] items-center opacity-[.8]"
      ><ArrowDownIcon size="15" />mais antigo</span>
    </div>
  </section>
</main>