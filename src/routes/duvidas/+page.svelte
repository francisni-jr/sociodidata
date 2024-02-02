<svelte:head>
  <title>DÚVIDAS</title>
  <meta name="description" content="Tire suas principais dúvidas nesta página">
  <meta name="keywords" content="SOCIODIDATA, DÚVIDAS, PÁGINA">
  <meta name="author" content="Francisní Gomes">
</svelte:head>

<script type="text/javascript" charset="utf-8">
  import { ArrowRightIcon } from 'svelte-feather-icons'
	
</script>


<main class="mx-[2rem] mt-20 overflow-hidden relative max-w-[60vw] md:left-[30vw]">
  <section class="">
    <h1 class="text-3xl font-highlight text-elementary">PÁGINA DE DÚVIDAS</h1>
    <p class="text-xl ">Aqui estão as principais dúvidas percebidas pelos usuários</p>
    <button class="p-5 mt-5 rounded-lg  text-base bg-action" type="submit"><a
    class="flex gap-5 items-center" href="/contate-me">Me
    envie a sua <ArrowRightIcon/>
   </a></button>
  </section>
  <section class="mt-20">
        <div class="accordion-group mt-20 accordion-group-bordered">
      <div class="accordion">
        <input type="checkbox" id="toggle-1" class="accordion-toggle" />
        <label for="toggle-1" class="font-header accordion-title bg-action
		text-base">Por que Sociodidata?</label>
        <div class="accordion-content bg-building text-base">
          <div class="min-h-0">
            A palavra Sociodidata pode ter dois ou mais significados. Ambos
            fazem sentido para o projeto. Primeiramente 'socio' pode significar
            algo que esteja associado + 'didata' é alguém ou algo que instrui,
            sendo assim "Associado a instrução" é o significado mais convincente
            para este nome.
          </div>
        </div>
      </div>
    </div>
  </section>
</main>