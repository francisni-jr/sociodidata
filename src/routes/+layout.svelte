<script>
  import '../app.postcss';
	import { ChevronDownIcon, GridIcon, HashIcon, Navigation2Icon,
	GithubIcon,CoffeeIcon, InstagramIcon, XCircleIcon, HomeIcon, CopyIcon, InfoIcon,
	MoonIcon, HelpCircleIcon, HeartIcon, MapIcon, MessageCircleIcon, YoutubeIcon,
	CodeIcon} from 'svelte-feather-icons'
	
</script>


<div id="app-lay" class="h-full font-general text-onmain break-words
">
  <header class="h-20 z-40 w-full flex justify-end items-start fixed top-0 ">
    <nav class="w-full h-auto 
    ">
      <ul class="flex justify-between items-center ">
        <li class="ml-5">
          <div class="flex flex-row sm:gap-10">
            <div class="sm:w-full  sm:max-w-[18rem]">
              <input type="checkbox" id="sidebar-mobile-fixed" class="sidebar-state" />
              <label for="sidebar-mobile-fixed" class="sidebar-overlay"></label>
              <aside
                class="sidebar w-[30vw] pt-10 sidebar-fixed-left sidebar-mobile h-full justify-start max-sm:fixed max-sm:-translate-x-full">
                <section class="sidebar-title items-center ? flex flex-col">
                  <div class="avatar mx-auto ">
                    <img class=""
                      src="https://res.cloudinary.com/dt2se4cle/image/upload/v1700866708/favicon_base_rc8j6k.png"
                      alt="" />
                    
                  </div>
                  <span class="mt-5">francisni.xyz</span>
                </section>
                <section class="sidebar-content">
                  <div class="divider">
                    
                  </div>
                  <ul class="flex justify-around px-5 gap-5 flex-wrap">
                    <li class="flex justify-center p-5 rounded-lg bg-action items-center gap-5">
                      <a href="/">
                        <i class="text-base tooltip tooltip-click
                              tooltip-secondary tooltip-top" data-tooltip="home">
                          <HomeIcon size="30" />
                        </i>
                      </a>
                    </li>
                    <li class="flex justify-center p-5 rounded-lg bg-action items-center gap-5">
                      <a href="/sobre">
                        <i class="text-base tooltip tooltip-click
                              tooltip-secondary tooltip-top" data-tooltip="sobre">
                          <InfoIcon size="30" />
                        </i>
                      </a>
                    </li>
                    <li class="flex justify-center p-5 rounded-lg bg-action items-center gap-5">
                      <a href="/perguntas-frequentes">
                        <i class="text-base tooltip tooltip-click
                              tooltip-secondary tooltip-top" data-tooltip="dúvidas">
                          <HelpCircleIcon size="30" />
                        </i>
                      </a>
                    </li>
                    <li class="flex justify-center p-5 rounded-lg bg-action items-center gap-5">
                      <a href="/sitemap">
                        <i class="text-base tooltip tooltip-click
                              tooltip-secondary tooltip-top" data-tooltip="sitemap">
                          <MapIcon size="30" />
                        </i>
                      </a>
                    </li>
                    <li class="flex justify-center p-5 rounded-lg bg-action items-center gap-5">
                      <a href="/contate-me">
                        <i class="text-base tooltip tooltip-click
                              tooltip-secondary tooltip-top" data-tooltip="contatar">
                          <MessageCircleIcon size="30" />
                        </i>
                      </a>
                    </li>
                    <li class="flex justify-center p-5 rounded-lg bg-action items-center gap-5">
                      <a href="/youtube">
                        <i class="text-base tooltip tooltip-click
                              tooltip-secondary tooltip-top" data-tooltip="youtube">
                          <YoutubeIcon size="30" />
                        </i>
                      </a>
                    </li>
                  </ul>
                </section>
                <section class="sm:hidden sidebar-footer justify-end bg-gray-2 pt-2">
                  <div class="divider my-0"></div>
                  <ul class="flex w-full h-full justify-center items-center">
                    <li class="flex
                                                            text-action
                                                            justify-center p-5
                                                            rounded-lg bg
                                               rounded-lg items-center gap-5">
                      <a href="https://github.com/francisni-jr/francisni.xyz">
                        <i class=" tooltip tooltip-click
                              tooltip-secondary tooltip-top" data-tooltip="fonte">
                          <CodeIcon size="20" />
                        </i>
                      </a>
                    </li>
                                        <li class="flex
                                                            text-action
                                                            justify-center p-5
                                                            rounded-lg bg
                                               rounded-lg items-center gap-5">
                      <a href="https://github.com/francisni-jr/francisni.xyz">
                        <i class=" tooltip tooltip-click
                              tooltip-secondary tooltip-top" data-tooltip="fonte">
                          <MoonIcon size="20" />
                        </i>
                      </a>
                    </li>
                  </ul>
                </section>
              </aside>
            </div>
            <div class="flex w-full flex-col p-4">
              <div class="w-fit">
                <label style="transform: scale(.7)" for="sidebar-mobile-fixed" class="btn bg-action py-10
			rounded-full text-[#FFFFFF] shadow-lg sm:hidden">
                  <GridIcon size="40" />
                </label>
              </div>
            </div>
          </div>
        </li>
        <li class="">
          <label style="transform: scale(.7)" class="btn m-5 bg-action py-10 rounded-full text-[#FFFFFF]" for="modal-2">
            <CoffeeIcon size="40" />
          </label>
          
          <input class="modal-state" id="modal-2" type="checkbox" />
          <div class="modal w-screen">
            <label class="modal-overlay" for="modal-2"></label>
            <div class="modal-content flex py-5 flex-col bg-base gap-5 max-w-3xl">
              <label for="modal-2" class="btn btn-sm btn-circle absolute right-2
		top-2 bg-action rounded-full shadow-lg text-[#FFFFFF]">
                <XCircleIcon size="40" />
              </label>
              <h3 class="mt-25 text-elementary font-highlight text-2xl text-2xl ">Me pague um café 🤗</h3>
              
              <div class="text-building flex justify-between w-full items-center
              my-15">
                <div class="">
                  <b>Por PIX Chave Aleatória</b>
                  <p class="bg-building text-base p-5
                  rounded-lg">ed212dfb-c6e0-42c3-8f17-2328e0c0d8f6</p>
                </div>
              </div>
              
              
              <div class="text-building flex justify-start w-full items-center my-15">
                <div class="">
                  <b>Por Conta Bancária</b>
                  <p class="bg-building text-base p-5
                  rounded-lg flex flex-col">
                    <i>Agência: 0500</i>
                    <i>Conta: 026353750-3</i>
                  </p>
                </div>
              </div>
              <div class="text-building
                                                      flex justify-start w-full
                                                      items-center my-5">
                <div class="">
                  <b>Ou acesse o Link Iti</b>
                  <a target="_blank" href="https://iti.itau/receber-pix/?chargeId=5e23e33b-cf27-4382-aeb7-9a4de2d4c0a0"
                    class="bg-action text-base p-5
                  rounded-lg flex flex-col">
                    https://iti.itau/receber-pix/?chargeId=5e23e33b-cf27-4382-aeb7-9a4de2d4c0a0
                  </a>
                </div>
              </div>
            </div>
          </div>
        </li>
      </ul>
    </nav>
  </header>
  <div id="sky" class="w-screen sm:h-[30vh] h-[40vh] mt-20">
  </div>
  <slot />
  <footer class="w-screen mt-30 pt-20 h-[80vh] flex justify-end items-end">
    
  </footer>
</div>


<style type="text/css" media="all">
  #sky {
    background-image:
      url("https://res.cloudinary.com/dt2se4cle/image/upload/v1700866709/bg_elementary_sky_ykppg2.png");
    background-repeat: no-repeat;
    background-size: contain;
    background-position: 70% 20%;
  }
  
  footer {
    background-image:
      url("https://res.cloudinary.com/dt2se4cle/image/upload/v1700866709/bg_buildings_gfrert.png");
    background-repeat: no-repeat;
    background-size: cover;
  }
</style>