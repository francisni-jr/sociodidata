<svelte:head>
  <title>SOBRE</title>
  <meta name="description" content="Saiba mais sobre o projrto Sociodidata">
  <meta name="keywords" content="SOCIODIDATA, SOBRE, PÁGINA">
  <meta name="author" content="Francisní Gomes">
</svelte:head>

<script type="text/javascript" charset="utf-8">
  import { ChevronsUpIcon,
	ChevronsDownIcon, LayoutIcon, YoutubeIcon, UsersIcon, LayersIcon, CircleIcon} from 'svelte-feather-icons'
	
</script>


<main class="mx-[2rem] mt-20 overflow-hidden relative max-w-[60vw] md:left-[30vw]">
  <section class="mb-30">
    <div class="w-full flex flex-col justify-center mb-20
 text-elementary text-3xl font-highlight top-0">SOBRE O PROJETO </div>
    <h2 class="text-3xl font-header">
      Esse projeto foi desenvolvido a partir de <span class="text-2xl
    font-highlight text-elementary">02/2024</span>, em que têm como principais
      características:</h2>
    <ul class="mt-20 flex flex-col gap-5">
      <li class="flex items-center gap-5">
        <LayoutIcon size="30" /> Um website incrível e repleto de informações
        úteis e relevantes! https://sociodidata.xyz
      </li>
      <li class="flex items-center gap-5">
        <YoutubeIcon size="30" /> Acesse os vídeos diretamente pelo website, ou
        também acompanhe pelo próprio app do Youtube.
      </li>
      
      <li class="flex items-center gap-5">
        <LayersIcon size="30" /> E ainda muito mais features a desenvolver
        futuramente, indique-me na página de dúvidas
      </li>
    </ul>
    <div class="text-2xl rounded-lg p-5 mt-20 text-base bg-building">Essas características se
      encaixam bem em startups e embora esse projeto não seja empresarial, ele é
      bastante inovador e exótico, apresentando variáveis intuitivas e contruindo algo bem fértil e produtivo!</div>
  </section>
 
  <section class="flex gap-5 flex-wrap">
    <h2 class="text-3xl font-header">
  Vamos partir para o que interessa?</h2>
    <figure class="flex gap-5">
      <img class="w-[20vw] rounded-lg"
        src="https://res.cloudinary.com/dt2se4cle/image/upload/v1700866708/favicon_base_rc8j6k.png" alt="" />
      <figcaption>Os recursos oferecidos neste site estão em uma página única.
      Alguns dependem de outros para funcionar, porém a maioria é independente
      </figcaption>
    </figure>
    <div class="accordion-group mt-20 accordion-group-bordered">
      <div class="accordion">
        <input type="checkbox" id="toggle-1" class="accordion-toggle" />
        <label for="toggle-1" class="font-header accordion-title bg-action
		text-base">Como acesso os recursos ?</label>
        <div class="accordion-content bg-building text-base">
          <div class="min-h-0">Acesse os recursos  clicando no ícone <LayersIcon
          class="inline"
          size="15" />  disponível no menu principal</div>
        </div>
      </div>
       <div class="accordion">
        <input type="checkbox" id="toggle-2" class="accordion-toggle" />
        <label for="toggle-2" class="font-header accordion-title bg-action
		text-base">O principal recurso</label>
        <div class="accordion-content bg-building text-base">
          <div class="min-h-0">O principal recurso de fato é o Canal, e este com
          o Blog, trabalham juntos para manter um equilíbrio das informações
          mais relevantes</div>
        </div>
      </div>
    </div>
  </section>
</main>