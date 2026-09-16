<template>
  <section id="premios">
    <div class="py-4 mt-12 text-center">
      <span class="text-xl font-bold border-t border-b py-4 border-green-800 text-green-800">
        <span v-if="UseLang.store.lang == 'pt'">Prêmios</span>
        <span v-else>Awards</span>
      </span>
    </div>

    <div class="flex flex-wrap">

      <!-- CARD 1 - Qualitas (Especial com 2 imagens) -->
      <div class="xs:w-full tab:w-full lap:w-1/3 mt-6 px-2">
        <div class="card bg-base-100 shadow-xl rounded-lg overflow-hidden group">
          <div class="card-body p-4 relative">
            <h2 class="text-xl font-bold text-center mb-4">Qualitas Fiat Chrysler</h2>
            
            <!-- Área da Imagem e Hover -->
            <div class="relative h-72 flex items-center justify-center overflow-hidden rounded-xl">
              <div class="flex w-full justify-center gap-4 transition-transform duration-500 group-hover:scale-105">
                <img src="/static/img/premios/p01.png" class="h-48 w-auto object-contain" />
                <img src="/static/img/premios/p02.png" class="h-48 w-auto object-contain" />
              </div>

              <!-- Overlay que aparece no Hover -->
              <div class="absolute inset-0 bg-green-700/95 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center p-4">
                <p class="text-white text-center text-sm">
                  <span v-if="UseLang.store.lang == 'pt'">O Prêmio Top of Quality Brazil destaca o alto padrão de excelência e qualidade em serviços e produtos.</span>
                  <span v-else>The Top of Quality Brazil Award highlights the high standard of excellence and quality in services and products.</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- CARD 2 - Qualitas Simples -->
      <div class="xs:w-full tab:w-full lap:w-1/3 mt-6 px-2">
        <div class="card bg-base-100 shadow-xl rounded-lg overflow-hidden group">
          <div class="card-body p-4 relative">
            <h2 class="text-xl font-bold text-center mb-4">Qualitas Fiat Chrysler</h2>
            <div class="relative h-72 flex items-center justify-center overflow-hidden rounded-xl">
              <img src="/static/img/premios/07.png" class="h-56 w-auto object-contain transition-transform duration-500 group-hover:scale-110" />
              <div class="absolute inset-0 bg-green-700/95 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center p-4">
                <p class="text-white text-center text-sm">
                  <span v-if="UseLang.store.lang == 'pt'">Destaque para fornecedores com melhor desempenho em qualidade, inovação e compromisso com os padrões automotivos.</span>
                  <span v-else>Highlights suppliers with best performance in quality, innovation and commitment to automotive standards.</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- CARD 3 - Lear -->
      <div class="xs:w-full tab:w-full lap:w-1/3 mt-6 px-2">
        <div class="card bg-base-100 shadow-xl rounded-lg overflow-hidden group">
          <div class="card-body p-4 relative">
            <h2 class="text-xl font-bold text-center mb-4 leading-tight">Lear: Inovação</h2>
            <div class="relative h-72 flex items-center justify-center overflow-hidden rounded-xl">
              <img src="/static/img/premios/p03.png" class="h-56 w-auto object-contain transition-transform duration-500 group-hover:scale-110" />
              <div class="absolute inset-0 bg-green-700/95 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center p-4">
                <p class="text-white text-center text-sm">
                  <span v-if="UseLang.store.lang == 'pt'">Celebra empresas que impulsionam a modernização da indústria por meio de soluções disruptivas.</span>
                  <span v-else>Celebrates companies that drive industry modernization through disruptive solutions.</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- CARD 4 - G-KT -->
      <div class="xs:w-full tab:w-full lap:w-1/4 mt-6 px-2">
        <div class="card bg-base-100 shadow-xl rounded-lg overflow-hidden group">
          <div class="card-body p-4 relative">
            <h2 class="text-xl font-bold text-center mb-4">G-KT: Destaque</h2>
            <div class="relative h-72 flex items-center justify-center overflow-hidden rounded-xl">
              <img src="/static/img/premios/p04.png" class="h-56 w-auto object-contain transition-transform duration-500 group-hover:scale-110" />
              <div class="absolute inset-0 bg-green-700/95 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center p-4">
                <p class="text-white text-center text-sm">
                  <span v-if="UseLang.store.lang == 'pt'">Reconhece parceiros que atingiram a excelência operacional e rigoroso controle de qualidade.</span>
                  <span v-else>Recognizes partners who achieve operational excellence and strict quality control.</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- CARD 5 - REI -->
      <div class="xs:w-full tab:w-full lap:w-1/4 mt-6 px-2">
        <div class="card bg-base-100 shadow-xl rounded-lg overflow-hidden group">
          <div class="card-body p-4 relative">
            <h2 class="text-xl font-bold text-center mb-4 leading-tight">REI: TI e Software</h2>
            <div class="relative h-72 flex items-center justify-center overflow-hidden rounded-xl">
              <img src="/static/img/premios/p05.png" class="h-56 w-auto object-contain transition-transform duration-500 group-hover:scale-110" />
              <div class="absolute inset-0 bg-green-700/95 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center p-4">
                <p class="text-white text-center text-sm">
                  <span v-if="UseLang.store.lang == 'pt'">Valida a maturidade digital de finalistas que desenvolvem sistemas inteligentes de produção.</span>
                  <span v-else>Validates the digital maturity of finalists who develop intelligent production systems.</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- CARD 6 - Woodbridge -->
      <div class="xs:w-full tab:w-full lap:w-1/4 mt-6 px-2">
        <div class="card bg-base-100 shadow-xl rounded-lg overflow-hidden group">
          <div class="card-body p-4 relative">
            <h2 class="text-xl font-bold text-center mb-4">Suplier Day</h2>
            <div class="relative h-72 flex items-center justify-center overflow-hidden rounded-xl">
              <img src="/static/img/premios/p06.png" class="h-56 w-auto object-contain transition-transform duration-500 group-hover:scale-110" />
              <div class="absolute inset-0 bg-green-700/95 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center p-4">
                <p class="text-white text-center text-sm">
                  <span v-if="UseLang.store.lang == 'pt'">Certifica o alto desempenho técnico e a excelência no atendimento de fornecedores.</span>
                  <span v-else>Certifies high technical performance and excellence in supplier service.</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- CARD 7 - Woodbridge (P08) -->
      <div class="xs:w-full tab:w-full lap:w-1/4 mt-6 px-2">
        <div class="card bg-base-100 shadow-xl rounded-lg overflow-hidden group">
          <div class="card-body p-4 relative">
            <h2 class="text-xl font-bold text-center mb-4">Woodbridge Brasil</h2>
            <div class="relative h-72 flex items-center justify-center overflow-hidden rounded-xl">
              <img src="/static/img/premios/p08.png" class="h-56 w-auto object-contain transition-transform duration-500 group-hover:scale-110" />
              <div class="absolute inset-0 bg-green-700/95 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center p-4">
                <p class="text-white text-center text-sm">
                  <span v-if="UseLang.store.lang == 'pt'">Reconhecimento como Fornecedor Destaque 2021 na categoria metálicos, premiando a excelência da Feeder Industrial em qualidade e fornecimento técnico.</span>
                  <span v-else>Recognized as 2021 Outstanding Supplier in the metals category, honoring Feeder Industrial's excellence in quality and technical supply.</span>
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