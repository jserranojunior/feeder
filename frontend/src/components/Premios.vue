<template>
  <section id="premios">
    <div class="py-4 mt-12 text-center">
      <span class="text-xl font-bold border-t border-b py-4 border-green-800 text-green-800">
        <span v-if="UseLang.store.lang == 'pt'">Prêmios</span>
        <span v-else>Awards</span>
      </span>
    </div>

    <div class="flex flex-wrap">


      <div class="xs:w-full tab:w-full lap:w-1/3 mt-6 px-2">
        <div class="card bg-base-100 shadow-xl rounded-lg h-full">
          <div class="card-body p-4">
            <h2 class="text-xl font-bold text-center">Qualitas Fiat Chrysler</h2>
            <div class="flex flex-wrap justify-center ">
              <div class="w-1/2 flex justify-center h-60">
                <img src="/static/img/premios/p01.png" width="180" class="w-auto mt-3" />
              </div>
              <div class="w-1/2 flex justify-center h-60">
                <img src="/static/img/premios/p02.png" width="180" class="w-auto mt-3" />
              </div>
            </div>
            <div class="mt-4 rounded-xl bg-gradient-to-r from-green-600 via-green-700 to-green-600 h-full">
              <div class="card-body text-white text-lg  p-4">
                <p>
                  <span v-if="UseLang.store.lang == 'pt'">
                    O Prêmio Top of Quality Brazil, pela Cia. Eventos & Pesquisas, destaca o alto padrão de excelência e qualidade em serviços e produtos, reconhecendo empresas e profissionais que geram resultados positivos no mercado globalizado.
                  </span>
                  <span v-else>
                    The Top of Quality Brazil Award, presented by Cia. Eventos & Pesquisas, highlights the high standard of excellence and quality in services and products, recognizing companies and professionals that generate positive results in the global market.
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>


      <div class="xs:w-full tab:w-full lap:w-1/3 mt-6 px-2">
        <div class="card bg-base-100 shadow-xl rounded-lg h-full">
          <div class="card-body p-4">
            <h2 class="text-xl font-bold text-center">Qualitas Fiat Chrysler</h2>
            <div class="flex justify-center h-60">
              <img src="/static/img/premios/07.png" width="120" class="w-auto mt-3" />
            </div>
            <div class="mt-4 rounded-xl bg-gradient-to-r from-green-600 via-green-700 to-green-600 h-full">
              <div class="card-body text-white text-lg  p-4  ">
                <p>
                  <span v-if="UseLang.store.lang == 'pt'">
O prêmio Qualitas Fiat Chrysler destaca os fornecedores com melhor desempenho em qualidade, inovação, competitividade e nível de serviço, reconhecendo a consistência dos resultados e o compromisso com os padrões da indústria automotiva.                  </span>
                  <span v-else>
                    The Qualitas Fiat Chrysler Award highlights suppliers with the best performance in quality, innovation, competitiveness, and level of service, recognizing consistency of results and commitment to automotive industry standards.
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>


      <div class="xs:w-full tab:w-full lap:w-1/3 mt-6 px-2">
        <div class="card bg-base-100 shadow-xl rounded-lg h-full">
          <div class="card-body p-4">
            <h2 class="text-xl font-bold text-center">Lear: Fornecedor Destaque em Inovação</h2>
            <div class="flex justify-center h-60">
              <img src="/static/img/premios/p03.png" width="200" class="w-auto mt-3" />
            </div>
            <div class="mt-4 rounded-xl bg-gradient-to-r from-green-600 via-green-700 to-green-600 h-full">
              <div class="card-body text-white text-lg  p-4">
                <p>
                  <span v-if="UseLang.store.lang == 'pt'">
                    O prêmio celebra empresas que impulsionam a modernização da indústria por meio de soluções tecnológicas disruptivas e do fortalecimento de parcerias estratégicas duradouras.
                  </span>
                  <span v-else>
                    The award celebrates companies that drive industry modernization through disruptive technological solutions and the strengthening of long-term strategic partnerships.
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="xs:w-full tab:w-full lap:w-1/3 mt-6 px-2">
        <div class="card bg-base-100 shadow-xl rounded-lg h-full">
          <div class="card-body p-4">
            <h2 class="text-xl font-bold text-center">G-KT: Destaque de Fornecedores</h2>
            <div class="flex justify-center h-60">
              <img src="/static/img/premios/p04.png" width="180" class="w-auto mt-3" />
            </div>
            <div class="mt-4 rounded-xl bg-gradient-to-r from-green-600 via-green-700 to-green-600 h-full">
              <div class="card-body text-white text-lg  p-4">
                <p>
                  <span v-if="UseLang.store.lang == 'pt'">
                    Esta honraria reconhece parceiros que atingiram a excelência operacional através do rigoroso controle de qualidade e da precisão logística no cumprimento de prazos de entrega.
                  </span>
                  <span v-else>
                    This recognition honors partners who achieve operational excellence through strict quality control and logistical precision in meeting delivery deadlines.
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>


      <div class="xs:w-full tab:w-full lap:w-1/3 mt-6 px-2">
        <div class="card bg-base-100 shadow-xl rounded-lg h-full">
          <div class="card-body p-4">
            <h2 class="text-xl font-bold text-center">REI: Tecnologia da Informação e Software</h2>
            <div class="flex justify-center h-60">
              <img src="/static/img/premios/p05.png" width="200" class="w-auto mt-3" />
            </div>
            <div class="mt-4 rounded-xl bg-gradient-to-r from-green-600 via-green-700 to-green-600 h-full">
              <div class="card-body text-white text-lg  p-4">
                <p>
                  <span v-if="UseLang.store.lang == 'pt'">
                    Este reconhecimento valida a maturidade digital de finalistas que desenvolvem sistemas inteligentes voltados para a gestão sistêmica da produção e inovação no setor automobilístico.
                  </span>
                  <span v-else>
                    This recognition validates the digital maturity of finalists who develop intelligent systems focused on production management and innovation in the automotive sector.
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>


      <div class="xs:w-full tab:w-full lap:w-1/3 mt-6 px-2">
        <div class="card bg-base-100 shadow-xl rounded-lg h-full">
          <div class="card-body p-2">
            <h2 class="text-xl font-bold text-center">Woodbridge Brasil: Fornecedor Destaque</h2>
            <div class="flex justify-center h-60">
              <img src="/static/img/premios/p06.png" width="180" class=" w-auto mt-3" />
            </div>
            <div class="mt-4 rounded-xl bg-gradient-to-r from-green-600 via-green-700 to-green-600 h-full">
              <div class="card-body text-white text-lg  p-4">
                <p>
                  <span v-if="UseLang.store.lang == 'pt'">
                    A premiação certifica o alto desempenho técnico e a excelência no atendimento de fornecedores que alinham ciência e processos para servir às demandas da companhia.
                  </span>
                  <span v-else>
                    The award certifies high technical performance and excellence in service from suppliers who align science and processes to meet company demands.
                  </span>
                </p>
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