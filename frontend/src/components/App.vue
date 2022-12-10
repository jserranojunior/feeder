<script setup lang="ts">
  import HelloWorld from "./HelloWorld.vue";
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

              <li><a>Contato</a></li>
            </ul>
          </div>
        </div>
        <!-- Page content here -->

        <section id="sobre">
          <div
            class="bg-gradient-to-r from-primary via-green-500 to-blue-400 flex mt-1"
          >
            <div class="w-1/2 text-white px-12 py-6 mx-auto px-auto">
              Mais de 200 máquinas de última geração, distribuidas em 15.000m²
              de área construída, em um terreno de 30.000m². <br /><br />Dentre
              o maquinário, injetoras, CNCs, prensas, máquinas e robôs de solda,
              dobrada de molas. Todas as máquinas possuem qualidade e eficácia
            </div>
            <div class="w-1/2">
              <img
                ref="logo"
                src="../assets/images/home/1.png"
                class="w-1/2 mx-auto"
              />
            </div>
          </div>

          <div class="flex justify-center mt-4 gap-2 px-12">
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
            <div class="w-1/2">
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

          <div class="flex mt-3 px-12 gap-1 justify-between">
            <div class="w-1/3 mx-auto">
              <img src="../assets/images/home/7.png" class="mx-auto" />
            </div>
            <div class="w-1/3 mx-auto">
              <img src="../assets/images/home/8.png" class="mx-auto" />
            </div>
            <div class="w-1/3 mx-auto">
              <img src="../assets/images/home/9.png" class="mx-auto" />
            </div>
          </div>

          <div class="flex mt-3 px-12 gap-1">
            <div class="w-2/3 mx-auto">
              <img src="../assets/images/home/3.png" class="mx-auto" />
            </div>
            <div class="w-2/3 mx-auto">
              <img src="../assets/images/home/10.png" class="mx-auto" />
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
            <div class="w-1/3 px-1">
              <img src="../assets/images/produtos/1.png" class="mx-auto mt-1" />
            </div>
            <div class="w-1/3 px-1">
              <img src="../assets/images/produtos/2.png" class="mx-auto mt-1" />
            </div>
            <div class="w-1/3 px-1">
              <img src="../assets/images/produtos/3.png" class="mx-auto mt-1" />
            </div>
            <div class="w-1/3 px-1">
              <img src="../assets/images/produtos/4.png" class="mx-auto mt-1" />
            </div>
            <div class="w-1/3 px-1">
              <img src="../assets/images/produtos/5.png" class="mx-auto mt-1" />
            </div>
            <div class="w-1/3 px-1">
              <img src="../assets/images/produtos/6.png" class="mx-auto mt-1" />
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
              >Certificados e Prêmios</span
            >
          </div>

          <div
            class="flex justify-center bg-gradient-to-r from-primary via-green-500 to-blue-400 mt-6"
          >
            <div class="w-2/3">
              <div class="flex justify-center px-6 mt-6 mx-auto mb-6">
                <div class="w-1/3 px-1">
                  <img src="../assets/images/home/4.png" class="mx-auto" />
                  <div class="mt-6">
                    <img
                      src="../assets/images/certificados/7863ts.jpg"
                      class="mx-auto mt-1"
                    />
                  </div>
                </div>

                <div class="w-1/3 px-1">
                  <div class="card w-auto bg-base-100 shadow-xl px-auto">
                    <div class="card-body">
                      <img
                        src="../assets/images/certificados/1789iso.jpg"
                        class="mx-auto mt-1"
                      />
                    </div>
                  </div>

                  <div class="mt-6">
                    <img
                      src="../assets/images/certificados/160qsb.jpg"
                      class="mx-auto mt-1"
                    />
                  </div>
                </div>

                <div class="w-1/3 px-1">
                  <div class="">
                    <div class="card w-auto bg-base-100 shadow-xl">
                      <div class="card-body">
                        <img
                          src="../assets/images/premios/p01.png"
                          class="mx-auto mt-1"
                        />
                      </div>
                    </div>
                  </div>

                  <div class="card w-auto bg-base-100 shadow-xl px-auto mt-1">
                    <div class="card-body">
                      <img
                        src="../assets/images/premios/p02.png"
                        class="mx-auto mt-1"
                      />
                    </div>
                  </div>
                </div>
                <div class="w-1/3 px-1 mb-6">
                  <div class="">
                    <div class="card w-auto bg-base-100 shadow-xl px-auto">
                      <div class="card-body">
                        <img
                          src="../assets/images/premios/07.png"
                          class="mx-auto mt-1"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <footer
          class="footer px-40 py-6 bg-neutral text-neutral-content align-center justify-between"
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
