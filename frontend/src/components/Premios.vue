<template>
  <section id="premios">
    <div class="py-4 mt-4 text-center">
      <span class="text-xl font-bold border-t border-b py-4 border-green-800 text-green-800"><span v-if="UseLang.store.lang == 'pt'">Prêmios</span><span v-else>Awards</span></span>
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
                  <img src="../assets/images/premios/p01.png" class="mx-auto mt-1" />
                </div>
                <div class="w-1/2">
                  <img src="../assets/images/premios/p02.png" class="mx-auto mt-1" />
                </div>
                <div class="w-full px-4 pt-1">
                  <div class="card w-auto shadow-xl px-auto mt-1 bg-gradient-to-r from-primary via-green-500 to-blue-400">
                    <div class="card-body text-white py-2">
                      <p>
                        <span v-if="UseLang.store.lang == 'pt'">O prêmio Top of Quality Brazil, segundo a Cia. Eventos &
                        Pesquisas, tem por objetivo reconhecer o alto padrão de
                        excelência e qualidade em serviços e produtos de
                        empresas e profissionais que atuam com destaque e
                        credibilidade gerando resultados positivos no mercado
                        globalizado.</span>
                        <span v-else>
                          The Top of Quality Brazil award, according to Cia. Eventos & Pesquisas, aims to recognize the high standard of excellence and quality in services and products of companies and professionals who stand out with credibility, generating positive results in the globalized market.
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
      <div class="w-full md:w-1/2 mt-6">
        <div class="flex flex-wrap justify-center px-4">
          <div class="card w-auto bg-base-100 shadow-xl px-auto mt-1 py-0">
            <div class="card-body py-0 pt-4 px-4">
              <div class="flex flex-wrap">
                <div class="w-full mx-auto text-center">
                  <h2 class="text-xl font-bold text-center">
                    Qualitas Fiat Chrysler
                  </h2>
                </div>
                <div class="w-full md:w-1/3">
                  <div class="flex justify-center px-1 mt-6 mx-auto mb-6">
                    <div class="w-8/12 px-1 mb-6">
                      <img src="../assets/images/premios/07.png" class="mt-1" />
                    </div>
                  </div>
                </div>
                <div class="w-full md:w-2/3 my-auto">
                  <br />
                  <div class="card w-auto shadow-xl px-auto mt-1 bg-gradient-to-r from-primary via-green-500 to-blue-400">
                    <div class="card-body text-white text-lg">
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
