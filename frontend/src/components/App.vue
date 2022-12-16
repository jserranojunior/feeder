<script setup lang="ts">
  import ProdutosVue from "./Produtos.vue";
  import FabricaVue from "./Fabrica.vue";
  import gsap from "gsap";
  import { onMounted, ref } from "vue";
  const logo = ref(null);
  const card = ref(null);
  const afeeder = ref(null);

  onMounted(() => {
    /*   gsap.to(logo.value, {
        x: 100,       
        duration: 2,
    }); */
    gsap.fromTo(logo.value, { autoAlpha: 0 }, { autoAlpha: 1, duration: 3 });
    gsap.fromTo(afeeder.value, { autoAlpha: 0 }, { autoAlpha: 1, duration: 3 });

    gsap.fromTo(card.value, { x: -100 }, { x: 0, duration: 3 });
  });
</script>

<template>
  <div>
    <FabricaVue></FabricaVue>
    <ProdutosVue></ProdutosVue>
    <div class="drawer bg-base-200">
      <input id="my-drawer" type="checkbox" class="drawer-toggle" />
      <div class="drawer-content">
        <div class="navbar bg-base-100">
          <div class="flex-1 px-6">
            <img src="../assets/images/logo.png" width="60" alt="" />
          </div>
          <div class="flex-none">
            <ul class="menu menu-horizontal px-1">
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
        <!-- Page content here -->

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
            <div class="w-full md:w-1/2 text-white px-12 py-6 mx-auto px-auto">
              Mais de 200 máquinas de última geração, distribuidas em 15.000m²
              de área construída, em um terreno de 30.000m². <br /><br />Dentre
              o maquinário, injetoras, CNCs, prensas, máquinas e robôs de solda,
              dobrada de molas. Todas as máquinas possuem qualidade e eficácia
            </div>
          </div>

          <div class="flex flex-wrap justify-center mt-4 gap-2 px-12">
            <div class="card w-96 bg-base-100 shadow-xl px-auto" ref="card">
              <div class="card-body">
                <h2 class="card-title">Seja Bem-vindo à Feeder</h2>
                <p>
                  A Feeder Industrial Ltda. foi fundada em 1990, com sua
                  primeira sede no bairro da Vila Guilherme, São Paulo, visando
                  à fabricação de Molas e Artefatos metálicos e prestação de
                  serviços de mecânica. No início, com menos de 10 funcionários,
                  as máquinas utilizadas na produção eram todas confeccionadas
                  internamente. Algumas dessas máquinas continuam em operação
                  até hoje.
                </p>
              </div>
            </div>
            <div class="w-full md:w-1/2">
              <div
                class="card w-auto bg-base-100 shadow-xl px-auto"
                ref="afeeder"
              >
                <div class="card-body">
                  <img src="../assets/images/home/2.png" class="mx-auto mt-1" />
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
              <img src="../assets/images/produtos/1.png" class="mx-auto mt-1" />
            </div>
            <div class="w-full md:w-1/3 px-1">
              <img src="../assets/images/produtos/2.png" class="mx-auto mt-1" />
            </div>
            <div class="w-full md:w-1/3 px-1">
              <img src="../assets/images/produtos/3.png" class="mx-auto mt-1" />
            </div>
            <div class="w-full md:w-1/3 px-1">
              <img src="../assets/images/produtos/4.png" class="mx-auto mt-1" />
            </div>
            <div class="w-full md:w-1/3 px-1">
              <img src="../assets/images/produtos/5.png" class="mx-auto mt-1" />
            </div>
            <div class="w-full md:w-1/3 px-1">
              <img src="../assets/images/produtos/6.png" class="mx-auto mt-1" />
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
          <div class="flex gap-1 px-12 mt-6">
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
                              Eventos & Pesquisas, tem por objetivo reconhecer o
                              alto padrão de excelência e qualidade em serviços
                              e produtos de empresas e profissionais que atuam
                              com destaque e credibilidade gerando resultados
                              positivos no mercado globalizado.
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
                        <div class="flex justify-center px-1 mt-6 mx-auto mb-6">
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
                <div class="card-body p-4">
                  <span class="font-bold">Endereço:</span>R. Prof. João
                  Cavaleiro Salém, 310, Parque das Nacoes, Guarulhos, SP
                  <br /><span class="font-bold">Telefone:</span> (11) 2413-0070
                  <br /><span class="font-bold">Email:</span>
                  feeder@feeder.com.br
                </div>
              </div>
            </div>
            <div class="px0 md:px-6 py-6">
              <div>
                <iframe
                  class="w-full"
                  src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d5144.524769267864!2d-46.413535747911055!3d-23.43142374324372!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce89d86d79a521%3A0x187bf9bed7a1cc3!2sR.%20Prof.%20Jo%C3%A3o%20Cavaleiro%20Sal%C3%A9m%2C%20310%20-%20Parque%20das%20Nacoes%2C%20Guarulhos%20-%20SP%2C%2007243-580!5e0!3m2!1spt-BR!2sbr!4v1670944596928!5m2!1spt-BR!2sbr"
                  width="600"
                  height="200"
                  style="border: 0"
                  loading="lazy"
                  referrerpolicy="no-referrer-when-downgrade"
                ></iframe>
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
            <div class="w-full">
              <span class="footer-title">Sistema de gestão</span>
            </div>
            <div class="card w-24 bg-base-100 shadow-xl p-1">
              <div class="card-body p-1">
                <img
                  src="../assets/images/certificados/sistemadegestao.jpg"
                  class="mt-1"
                />
              </div>
            </div>
            <div class="card w-48 bg-base-100 shadow-xl p-1">
              <a href="">
                <div class="card-body p-1">
                  <img
                    src="../assets/images/certificados/duns.png"
                    class="mt-1"
                  />
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
