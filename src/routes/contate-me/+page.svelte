<svelte:head>
  <title>CONTATAR</title>
  <meta name="description" content="Entre em contato comigo atravéz desta página">
  <meta name="keywords" content="FRANCISNÍ, CONTATAR, PÁGINA">
  <meta name="author" content="Francisní Gomes">
</svelte:head>

<script type="text/javascript" charset="utf-8">
  import { MailIcon, ExternalLinkIcon, InstagramIcon, LayoutIcon, UsersIcon,
  UserPlusIcon, HelpCircleIcon, GlobeIcon
  } from 'svelte-feather-icons'
	
</script>


<main class="mx-[2rem] mt-30 overflow-hidden relative max-w-[60vw] md:left-[30vw]">
  <section class="">
    <h1 class="text-3xl font-highlight text-elementary">PÁGINA DE CONTATO</h1>
    <p class="text-xl ">Aqui você pode acessar alguns dos meus meios de contato</p>
    <button class="p-5 mt-5 rounded-lg  text-base bg-action" type="submit"><a
    class="flex gap-5 items-center" href="mailto:francisnijr1.acc@gmail.com">Email <MailIcon/>
   </a></button>
       <button class="p-5 mt-5 rounded-lg  text-base bg-building" type="submit"><a
    class="flex gap-5 items-center"
    href="">Discord <ExternalLinkIcon/>
   </a></button>
          <button class="p-5 mt-5 rounded-lg  text-base bg-building" type="submit"><a
    class="flex gap-5 items-center"
    href="">Instagram <InstagramIcon/>
   </a></button>
  </section>
  <section class="mt-20">
    <h2 class="text-2xl font-header">Acesse os meios de contato
    disponíveis, então dite algum destes motivos:</h2>
        <ul class="mt-20 flex flex-col gap-5">
      <li class="flex items-center gap-5">
        <LayoutIcon size="30" /> 1. ESTRUTURA DO WEBSITE: Me ajude a melhorar o
        website dando dicas ou citando problemas
      </li>
            <li class="flex items-center gap-5">
        <UserPlusIcon size="30" /> 2. PARCERIA: Se
        quiser fazer alguma parceria ou colaborar com o projeto dite PARCERIA.
      </li>
            <li class="flex items-center gap-5">
        <HelpCircleIcon size="30" /> 3. DÚVIDA: Me envie sua dúvida e a
        colocarei na página de dúvidas com a resposta incluída!</li>
                    <li class="flex items-center gap-5">
        <GlobeIcon size="30" /> 4. OUTRO: Esteja livre para enviar qualquer
        outra coisa, desde que seja relevante o suficiente</li>
    </ul>
  </section>
</main>