<template>
  <section id="certificados" class="mt-6">
    <div class="py-4 px-8 mt-4 text-center mb-6">
      <span
        class="text-xl font-bold border-t border-b py-4 border-green-800 text-green-800"
        ><span v-if="UseLang.store.lang == 'pt'">Certificados</span>
        <span v-else>Certificates</span></span
      >
    </div>
    <div
      class="flex flex-wrap justify-center bg-gradient-to-r from-green-900 via-green-600 to-green-600 shadow-xl"
    >
      <div class="xs:w-full tab:w-full lap:w-1/2 px-2 my-auto">
        <div
          class="card bg-base-100 shadow-xl m-2 mx-auto xs:w-full tab:w-full lap:w-3/4"
        >
          <figure class="p-1">
            <img
              v-if="UseLang.store.lang == 'pt'"
              src="../assets/images/home/4.png"
              alt="Shoes"
              class="rounded-xl"
              width="500"
              height="500"
              style="width: 100%"
            />
            <img
              v-else
              src="../assets/images/home/en/4.png"
              alt="Shoes"
              class="rounded-xl"
              width="500"
              height="500"
              style="width: 100%"
            />
          </figure>
        </div>
      </div>
      <div class="xs:w-full tab:w-full lap:w-1/2 p-4 bg-white">
        <a href="/static/img/certificados/certificadotuv.jpeg" target="_blank">
          <div
            class="card bg-base-100 xs:w-full tab:w-full lap:w-7/12 mt-6 mx-auto transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 cursor-pointer"
          >
            <figure class="p-1">
              <img
                src="/static/img/certificados/certificadotuv.jpeg"
                alt="Shoes"
                class="rounded-xl w-1/3"
                width="500"
                height="500"
                style="width: 100%"
              />
            </figure>
            <div class="card-body items-center text-center p-4">
              <div
                class="absolute top-0 right-0 -mr-1 -mt-1 w-4 h-4 rounded-full bg-green-400 animate-ping"
              ></div>
              <div
                class="absolute top-0 right-0 -mr-1 -mt-1 w-4 h-4 rounded-full bg-green-400"
              ></div>
              <h2 class="card-title">
                Certificação IATF 16949 <br />
                TÜV SÜD
              </h2>
              <p>
                <span v-if="UseLang.store.lang == 'pt'"
                  >A IATF 16949 especifica os requisitos de um sistema de gestão
                  de qualidade para a produção automotiva.</span
                >
                <span v-else
                  >IATF 16949 specifies the requirements for a quality
                  management system for automotive production.</span
                >
              </p>
            </div>
          </div>
        </a>
      </div>
    </div>
    <div
      class="my-4 flex flex-wrap justify-center bg-gradient-to-r from-green-900 via-green-600 to-green-600 shadow-xl"
    >
      <div class="xs:w-full tab:w-full lap:w-1/2 px-2 my-auto">
        <div
          class="card bg-base-100 shadow-xl m-2 mx-auto xs:w-full tab:w-full lap:w-3/4"
        >
          <figure class="p-1">
            <img
              src="../assets/images/home/certificadoselo14001.jpeg"
              alt="Shoes"
              class="rounded-xl"
              width="500"
              height="500"
              style="width: 100%"
            />
          </figure>
        </div>
      </div>
      <div class="xs:w-full tab:w-full lap:w-1/2 p-4 bg-white">
        <a href="/static/img/certificados/iqa.jpeg" target="_blank">
          <div
            class="card bg-base-100 xs:w-full tab:w-full lap:w-7/12 mt-6 mx-auto transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 cursor-pointer"
          >
            <figure class="p-1">
              <img
                src="/static/img/certificados/iqa.jpeg"
                alt="Shoes"
                class="rounded-xl w-1/3"
                width="500"
                height="500"
                style="width: 100%"
              />
            </figure>
          </div>
        </a>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import UseLang from "../composables/lang";
</script>

<style scoped></style>
