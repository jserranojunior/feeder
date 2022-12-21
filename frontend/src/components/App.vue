<script setup lang="ts">
  import ProdutosVue from "./Produtos.vue";
  import FabricaVue from "./Fabrica.vue";
  import gsap from "gsap";
  import { onMounted, ref } from "vue";

  const logo = ref(null);
  const card = ref(null);
  const afeeder = ref(null);
  const smooth = ref(null);

  onMounted(() => {
    /*   gsap.to(logo.value, {
        x: 100,       
        duration: 2,
    }); */
    gsap.fromTo(logo.value, { autoAlpha: 0 }, { autoAlpha: 1, duration: 3 });
    gsap.fromTo(afeeder.value, { autoAlpha: 0 }, { autoAlpha: 1, duration: 3 });

    gsap.fromTo(card.value, { x: -100 }, { x: 0, duration: 3 });

    // create the smooth scroller FIRST!
  });
</script>

<template>
  <div>
    <FabricaVue></FabricaVue>
    <ProdutosVue></ProdutosVue>
    <div class="drawer bg-base-200" ref="smooth" id="smooth-wrapper">
      <input type="checkbox" class="drawer-toggle" id="smooth-content" />
      <div class="drawer-content">
        <div class="content px-0 md:px-0 lg:px-0 2xl:px-24 bg-white">
          <div>
            <div class="navbar bg-base-100">
              <div class="navbar-start w-auto">
                <div class="hidden lg:flex w-full px-6">
                  <img src="../assets/images/logo.png" width="80" alt="" />
                </div>
                <div class="dropdown text-center mx-auto">
                  <label
                    tabindex="0"
                    class="btn btn-primary text-gray-100 lg:hidden ml-auto"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M4 6h16M4 12h8m-8 6h16"
                      />
                    </svg>
                  </label>
                  <ul
                    tabindex="0"
                    class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
                  >
                    <li><a>Home</a></li>
                    <li><a href="#sobre">Sobre</a></li>
                    <li><a href="#infraestrutura">Infraestrutura</a></li>
                    <li><a href="#clientes">Clientes</a></li>
                    <li><a href="#certificados">Certificados</a></li>
                    <li><a href="#premios">Prêmios</a></li>

                    <li><a href="#contato">Contato</a></li>
                  </ul>
                </div>
              </div>
              <div class="navbar-end hidden lg:flex w-full">
                <ul class="menu menu-horizontal px-1">
                  <li><a>Home</a></li>
                  <li><a href="#sobre" data-speed="0.5">Sobre</a></li>
                  <li><a href="#infraestrutura">Infraestrutura</a></li>
                  <li><a href="#clientes">Clientes</a></li>
                  <li><a href="#certificados">Certificados</a></li>
                  <li><a href="#premios">Prêmios</a></li>

                  <li><a href="#contato">Contato</a></li>
                </ul>
              </div>
            </div>
          </div>
          <section id="sobre">
            <div
              class="bg-gradient-to-r from-primary via-green-500 to-blue-400 flex flex-wrap mt-1"
            >
              <div class="w-full md:w-1/2">
                <img
                  ref="logo"
                  src="../assets/images/home/1.png"
                  class="w-full md:w-1/2 mx-auto"
                />
              </div>
              <div
                class="w-full md:w-1/2 text-white px-12 py-6 mx-auto px-auto"
              >
                Mais de 200 máquinas de última geração, distribuidas em 15.000m²
                de área construída, em um terreno de 30.000m².
                <br /><br />Dentre o maquinário, injetoras, CNCs, prensas,
                máquinas e robôs de solda, dobrada de molas. Todas as máquinas
                possuem qualidade e eficácia
              </div>
            </div>

            <div class="flex flex-wrap justify-center mt-4 gap-2 px-12">
              <div class="card w-96 bg-base-100 shadow-xl px-auto" ref="card">
                <div class="card-body">
                  <h2 class="card-title">Seja Bem-vindo à Feeder</h2>
                  <p>
                    A Feeder Industrial Ltda. foi fundada em 1990, com sua
                    primeira sede no bairro da Vila Guilherme, São Paulo,
                    visando à fabricação de Molas e Artefatos metálicos e
                    prestação de serviços de mecânica. No início, com menos de
                    10 funcionários, as máquinas utilizadas na produção eram
                    todas confeccionadas internamente. Algumas dessas máquinas
                    continuam em operação até hoje.
                  </p>
                </div>
              </div>
              <div class="w-full md:w-1/2">
                <div
                  class="card w-auto bg-base-100 shadow-xl px-auto"
                  ref="afeeder"
                >
                  <div class="card-body">
                    <img
                      src="../assets/images/home/2.png"
                      class="mx-auto mt-1"
                    />
                  </div>
                </div>
              </div>

              <!-- <div class="card w-1/2 bg-base-100 shadow-xl  px-auto" ref="card">
  <div class="card-body">
    <h2 class="card-title">A Feeder</h2>
    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially </p>
    
  </div>
</div> -->
            </div>
          </section>
          <section id="infraestrutura">
            <div class="py-4 px-8 mt-4 text-center">
              <span
                class="text-xl font-bold border-t border-b py-4 border-green-800 text-green-800"
                >Super infraestrutura, agilidade, flexibilidade</span
              >
            </div>

            <div class="flex flex-wrap mt-3 px-12 justify-center">
              <div class="w-full md:w-1/3 mx-auto px-6">
                <img src="../assets/images/home/7.png" class="mx-auto" />
              </div>
              <div class="w-full md:w-1/3 mx-auto px-6">
                <img src="../assets/images/home/8.png" class="mx-auto" />
              </div>
              <div class="w-full md:w-1/3 mx-auto px-6">
                <img src="../assets/images/home/9.png" class="mx-auto" />
              </div>
            </div>

            <div class="flex flex-wrap mt-3 px-12 gap-1">
              <div class="w-full md:w-2/3 mx-auto">
                <img src="../assets/images/home/3.png" class="mx-auto" />
              </div>
              <div class="w-full md:w-2/3 mx-auto">
                <img src="../assets/images/home/10.png" class="mx-auto" />
              </div>
            </div>

            <div class="flex mt-1 justify-end">
              <div class="mt-4 mx-auto">
                <label for="my-modal-fabrica" class="btn">Veja Mais</label>
              </div>
            </div>
          </section>
          <section id="produtos">
            <div class="py-4 px-8 mt-4 text-center">
              <span
                class="text-xl font-bold border-t border-b py-4 border-green-800 text-green-800"
                >Tecnologia, qualidade e comprometimento</span
              >
            </div>
            <div class="flex flex-wrap px-12 mt-6">
              <div class="w-full md:w-1/3 px-1">
                <img
                  src="../assets/images/produtos/1.png"
                  class="mx-auto mt-1"
                />
              </div>
              <div class="w-full md:w-1/3 px-1">
                <img
                  src="../assets/images/produtos/2.png"
                  class="mx-auto mt-1"
                />
              </div>
              <div class="w-full md:w-1/3 px-1">
                <img
                  src="../assets/images/produtos/3.png"
                  class="mx-auto mt-1"
                />
              </div>
              <div class="w-full md:w-1/3 px-1">
                <img
                  src="../assets/images/produtos/4.png"
                  class="mx-auto mt-1"
                />
              </div>
              <div class="w-full md:w-1/3 px-1">
                <img
                  src="../assets/images/produtos/5.png"
                  class="mx-auto mt-1"
                />
              </div>
              <div class="w-full md:w-1/3 px-1">
                <img
                  src="../assets/images/produtos/6.png"
                  class="mx-auto mt-1"
                />
              </div>
            </div>

            <div class="flex mt-1 justify-end">
              <div class="mt-4 mr-12">
                <label for="my-modal-produtos" class="btn">Mais Produtos</label>
              </div>
            </div>
          </section>
          <section id="clientes" class="mt-6">
            <div class="py-4 px-8 mt-4 text-center">
              <span
                class="text-xl font-bold border-t border-b py-4 border-green-800 text-green-800"
                >Alguns de nossos clientes</span
              >
            </div>
            <div class="flex gap-1 px-12 mt-6 bg-gray-100 py-4">
              <div class="w-2/3 mx-auto px-1">
                <img src="../assets/images/home/5.png" class="mx-auto" />
              </div>
            </div>
          </section>
          <section id="certificados" class="mt-6">
            <div class="py-4 px-8 mt-4 text-center">
              <span
                class="text-xl font-bold border-t border-b py-4 border-green-800 text-green-800"
                >Certificados</span
              >
            </div>

            <div
              class="flex flex-wrap px-12 justify-center bg-gradient-to-r from-primary via-green-500 to-blue-400 mt-6 mb-6 pb-6"
            >
              <div class="w-full px-2">
                <div class="card md:w-1/3 bg-base-100 shadow-xl mt-6 mx-auto">
                  <figure class="p-1">
                    <img
                      src="../assets/images/home/4.png"
                      alt="Shoes"
                      class="rounded-xl"
                    />
                  </figure>
                </div>
              </div>
              <div class="w-full md:w-1/3 px-4">
                <div class="card bg-base-100 shadow-xl mt-6 mx-auto">
                  <figure class="p-1">
                    <img
                      src="../assets/images/certificados/7863ts.jpg"
                      alt="Shoes"
                      class="rounded-xl w-1/3"
                    />
                  </figure>
                  <div class="card-body items-center text-center p-4">
                    <h2 class="card-title">
                      Certificação IATF 16949 <br />
                      TÜV SÜD
                    </h2>
                    <p>
                      A IATF 16949 especifica os requisitos de um sistema de
                      gestão de qualidade para a produção automotiva.
                    </p>
                  </div>
                </div>
              </div>
              <div class="w-full md:w-1/3 px-4">
                <div class="card bg-base-100 shadow-xl mt-6 mx-auto">
                  <figure class="p-1">
                    <img
                      src="../assets/images/certificados/160qsb.jpg"
                      alt="Shoes"
                      class="rounded-xl w-1/2"
                    />
                  </figure>
                  <div class="card-body items-center text-center p-4">
                    <h2 class="card-title">
                      Certificação QSB<br />
                      Quality System Basics
                    </h2>
                    <p>
                      Este certificado atesta que a empresa encontra-se em
                      conformidade com os requisitos do QSB FIAT CHRYSLER.
                    </p>
                  </div>
                </div>
              </div>
              <div class="w-full md:w-1/3 px-4">
                <div class="card bg-base-100 shadow-xl mt-6 mx-auto">
                  <figure class="p-1">
                    <img
                      src="../assets/images/certificados/1789iso.jpg"
                      alt="Shoes"
                      class="rounded-xl w-1/3"
                    />
                  </figure>
                  <div class="card-body items-center text-center p-4">
                    <h2 class="card-title">
                      Certificated of conformit<br />
                      NBR ISO 9001:2008
                    </h2>
                    <p>
                      ISO 9001:2008 é uma norma internacional que fornece
                      requisitos para o Sistema de Gestão da Qualidade (SGQ) das
                      organizações.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section id="premios">
            <div class="py-4 mt-4 text-center">
              <span
                class="text-xl font-bold border-t border-b py-4 border-green-800 text-green-800"
                >Prêmios</span
              >
            </div>
            <div class="flex flex-wrap px-12 mb-6">
              <div class="w-full md:w-1/2 mt-6">
                <div class="flex flex-wrap justify-center px-4">
                  <div class="card w-auto bg-base-100 shadow-xl px-auto mt-1">
                    <div class="card-body p-0 py-4">
                      <h2 class="text-xl font-bold text-center">
                        O.P.B - Top of Quality Brazil
                      </h2>
                      <div class="flex flex-wrap justify-between">
                        <div class="w-1/2">
                          <img
                            src="../assets/images/premios/p01.png"
                            class="mx-auto mt-1"
                          />
                        </div>
                        <div class="w-1/2">
                          <img
                            src="../assets/images/premios/p02.png"
                            class="mx-auto mt-1"
                          />
                        </div>
                        <div class="w-full px-4 pt-1">
                          <div
                            class="card w-auto shadow-xl px-auto mt-1 bg-gradient-to-r from-primary via-green-500 to-blue-400"
                          >
                            <div class="card-body text-white py-2">
                              <p>
                                O prêmio Top of Quality Brazil, segundo a Cia.
                                Eventos & Pesquisas, tem por objetivo reconhecer
                                o alto padrão de excelência e qualidade em
                                serviços e produtos de empresas e profissionais
                                que atuam com destaque e credibilidade gerando
                                resultados positivos no mercado globalizado.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="w-full md:w-1/2 mt-6">
                <div class="flex flex-wrap justify-center px-4">
                  <div
                    class="card w-auto bg-base-100 shadow-xl px-auto mt-1 py-0"
                  >
                    <div class="card-body py-0 px-4">
                      <div class="flex flex-wrap">
                        <div class="w-full mx-auto text-center">
                          <h2 class="text-xl font-bold text-center">
                            Qualitas Fiat Chrysle
                          </h2>
                        </div>
                        <div class="w-full md:w-1/3">
                          <div
                            class="flex justify-center px-1 mt-6 mx-auto mb-6"
                          >
                            <div class="w-10/12 px-1 mb-6">
                              <img
                                src="../assets/images/premios/07.png"
                                class="mt-1"
                              />
                            </div>
                          </div>
                        </div>
                        <div class="w-full md:w-2/3 my-auto">
                          <br />
                          <div
                            class="card w-auto shadow-xl px-auto mt-1 bg-gradient-to-r from-primary via-green-500 to-blue-400"
                          >
                            <div class="card-body text-white text-lg">
                              <p>
                                O prêmio destaca os fornecedores que obtiveram o
                                melhor desempenho em qualidade, inovação,
                                competitividade e nível de serviço.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section id="contato">
            <div class="py-4 px-8 mt-4 text-center">
              <span
                class="text-xl font-bold border-t border-b py-4 border-green-800 text-green-800"
                >Contato</span
              >
            </div>

            <div
              class="flex flex-wrap justify-between px-12 mt-6 py-6 bg-gray-500"
            >
              <div class="w-full md:w-1/2 px:0 md:px-6 py-4">
                <div class="card bg-white shadow-xl mx-auto">
                  <div class="card-body p-2 text-center">
                    <div>
                      <span class="font-bold">Endereço: </span>
                      <br />
                      <a
                        href="https://maps.google.com/maps?ll=-23.432199,-46.411828&z=15&t=m&hl=pt-BR&gl=BR&mapclient=embed&q=R.%20Prof.%20Jo%C3%A3o%20Cavaleiro%20Sal%C3%A9m%2C%20310%20-%20Parque%20das%20Nacoes%20Guarulhos%20-%20SP%2007243-580"
                        target="_blank"
                      >
                        <div class="text-center w-auto px-12">
                          <div
                            class="bg-green-400 rounded-lg hover:bg-green-500"
                          >
                            <span class="">
                              R. Prof. João Cavaleiro Salém, 310, <br />Parque
                              das Nacoes, Guarulhos, SP
                            </span>
                          </div>
                        </div></a
                      >
                      <br /><br /><span class="font-bold">Telefone: </span> (11)
                      2413-0070 <br /><br /><span class="font-bold"
                        >Email:
                      </span>

                      <a href="mailto:feeder@feeder.com.br"
                        >feeder@feeder.com.br
                        <br />
                        <div class="mx-auto justify-center text-center">
                          <button class="btn btn-sm btn-secondary mt-2">
                            Entre em contato
                          </button>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div class="w-full md:w-1/2 px:0 md:px-6 py-4">
                <div class="card bg-white shadow-xl mx-auto">
                  <div class="card-body p-2">
                    <iframe
                      class="w-full"
                      src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d5144.524769267864!2d-46.413535747911055!3d-23.43142374324372!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce89d86d79a521%3A0x187bf9bed7a1cc3!2sR.%20Prof.%20Jo%C3%A3o%20Cavaleiro%20Sal%C3%A9m%2C%20310%20-%20Parque%20das%20Nacoes%2C%20Guarulhos%20-%20SP%2C%2007243-580!5e0!3m2!1spt-BR!2sbr!4v1670944596928!5m2!1spt-BR!2sbr"
                      height="210"
                      style="border: 0"
                      loading="lazy"
                      referrerpolicy="no-referrer-when-downgrade"
                    ></iframe>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <footer
            class="footer px-12 md:px-40 py-6 bg-neutral text-neutral-content align-center justify-between"
          >
            <div class="my-auto px-">
              <img src="../assets/images/logo.png" width="60" alt="" />

              <p>
                Feeder Industria LTDA<br />Copyright © 2022 - Todos os direitos
                reservados
              </p>
            </div>
            <div class="flex flex-wrap">
              <div class="w-full justify-center mx-auto text-center">
                <span class="footer-title text-center">Sistema de gestão</span>
              </div>
              <div class="card w-24 mx-auto bg-base-100 shadow-xl p-1">
                <div class="card-body p-1">
                  <img
                    src="../assets/images/certificados/sistemadegestao.jpg"
                    class="mt-1"
                  />
                </div>
              </div>
            </div>
            <div class="flex flex-wrap">
              <div class="w-full">
                <span class="footer-title"> D&B D-U-N-S® Registered™</span>
              </div>

              <div class="card w-32 bg-base-100 shadow-xl p-1">
                <a
                  href="https://profiles.dunsregistered.com/TPBRBasicProfileENG.aspx?ListArea=900&SealkeyQ=B353583085517#"
                  target="_blank"
                >
                  <div class="card-body p-1 flex">
                    <div class="w-full">
                      <img
                        src="../assets/images/certificados/duns.png"
                        class="mt-1"
                        style="border-width: 0px"
                      />
                    </div>
                  </div>
                </a>
              </div>
              <div class="card w-24 bg-base-100 shadow-xl p-1">
                <a
                  href="https://profiles.dunsregistered.com/TPBRBasicProfileENG.aspx?ListArea=900&SealkeyQ=B353583085517#"
                  target="_blank"
                >
                  <div class="card-body p-1 flex">
                    <div class="w-full">
                      <img
                        id="Image1"
                        src="data:image/jpeg;base64,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"
                        style="border-width: 0px; width: 80px"
                      />
                    </div>
                  </div>
                </a>
              </div>
            </div>
            <div>
              <span class="footer-title">Social</span>
              <div class="grid grid-flow-col gap-4">
                <iframe
                  src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FFeederIndustrial&tabs&width=340&height=130&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId"
                  width="340"
                  height="130"
                  style="border: none; overflow: hidden"
                  scrolling="no"
                  frameborder="0"
                  allowfullscreen="true"
                  allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                ></iframe>
              </div>
            </div>
          </footer>
        </div>
      </div>
      <div class="drawer-side">
        <label for="my-drawer" class="drawer-overlay"></label>
        <ul class="menu p-4 w-80 bg-base-100 text-base-content">
          <!-- Sidebar content here -->
        </ul>
      </div>
      <!-- Drawer -->
    </div>
  </div>
</template>
