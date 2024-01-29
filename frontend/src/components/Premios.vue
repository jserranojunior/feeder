<template>
  <section id="premios">
    <div class="py-4 mt-12 text-center ">
      <span class="text-xl font-bold border-t border-b py-4 border-green-800 text-green-800"><span v-if="UseLang.store.lang == 'pt'">Prêmios</span><span v-else>Awards</span></span>
    </div>
    <div class="flex flex-wrap px-12 mb-6">
      <div class="xs:w-full  tab:w-full lap:w-1/2 mt-6">
        <div class="flex flex-wrap justify-center px-4">
          <div class="card w-auto bg-base-100 shadow-xl px-auto mt-1">
            <div class="card-body p-0 py-4">
              <h2 class="text-xl font-bold text-center">
                O.P.B - Top of Quality Brazil
              </h2>
              <div class="flex flex-wrap justify-between">
                <div class="w-1/2">
                  <img src="../assets/images/premios/p01.png" class="mx-auto mt-1" />
                </div>
                <div class="w-1/2">
                  <img src="../assets/images/premios/p02.png" class="mx-auto mt-1" />
                </div>
                <div class="w-full px-4 pt-1">
                  <div class="card w-auto shadow-xl px-auto mt-1 bg-gradient-to-r from-primary via-green-500 to-blue-400">
                    <div class="card-body text-white py-2">
                      <p>
                        <span v-if="UseLang.store.lang == 'pt'">O Prêmio Top of Quality Brazil, pela Cia. Eventos & Pesquisas, destaca o alto padrão de excelência e qualidade em serviços e produtos, reconhecendo empresas e profissionais que geram resultados positivos no mercado globalizado.</span>
                        <span v-else>

                          The Top of Quality Brazil Award, presented by Cia. Eventos & Pesquisas, emphasizes the high standard of excellence and quality in services and products. It recognizes companies and professionals who achieve positive results in the globalized market.                        </span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="xs:w-full  tab:w-full lap:w-1/2 mt-6 shadow-xl rounded-lg">
        <div class="flex flex-wrap justify-center px-4">
          <div class="card w-auto bg-base-100  px-auto mt-1 py-0">
            <div class="card-body py-2 pt-4">
              <div class="flex flex-wrap">
                <div class="w-full mx-auto text-center">
                  <h2 class="text-xl font-bold text-center">
                    Qualitas Fiat Chrysler
                  </h2>
                </div>
                <div class="w-full md:w-1/2 mx-auto">
                  <div class="justify-center flex">
                    <div class="w-full">
                      <img src="../assets/images/premios/07.png" width="80" class="mx-auto my-auto mt-3" />
                    </div>
                  </div>
                </div>
                <div class="w-full mt-6 rounded-xl bg-gradient-to-r from-primary via-green-500 to-blue-400 ">
                
                  <div class="card w-auto shadow-xl  ">
                    <div class="card-body  text-white text-lg py-2 ">
                      <p>
                        <span v-if="UseLang.store.lang == 'pt'">
                          O prêmio destaca os fornecedores que obtiveram o melhor
                        desempenho em qualidade, inovação, competitividade e
                        nível de serviço.
                        </span>
                        <span v-else>
                          The award highlights suppliers who have achieved the best performance in quality, innovation, competitiveness, and level of service.
                        </span>
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
</template>

<script setup lang="ts">
  import UseLang from "../composables/lang"

</script>

<style scoped></style>
