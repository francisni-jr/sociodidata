<svelte:head>
  <title>DÚVIDAS</title>
</svelte:head>

<script type="text/javascript" charset="utf-8">
  import { ArrowRightIcon } from 'svelte-feather-icons'
	
</script>


<main class="mx-[2rem] mt-30 overflow-hidden relative max-w-[60vw] md:left-[30vw]">
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
		text-base">Por que francisni.xyz?</label>
        <div class="accordion-content bg-building text-base">
          <div class="min-h-0">
            Francisní é o meu nome, e o domínio .xyz é bastante utilizado por
            websites "diferenciados" com o intuito de ganhar destaque. Pode
            parecer um pouco eatranho, porem é bastate intuitivo!
          </div>
        </div>
      </div>
    </div>
  </section>
</main>