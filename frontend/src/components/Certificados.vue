<template>
  <section id="certificados" class="mt-6">
    <div class="py-4 px-8 mt-4 text-center">
      <span
        class="text-xl font-bold border-t border-b py-4 border-green-800 text-green-800"
        ><span v-if="UseLang.store.lang == 'pt'">Certificados</span>
        <span v-else>Certificates</span></span
      >
    </div>
    <div
      class="flex flex-wrap px-12 justify-center bg-gradient-to-r from-primary via-green-500 to-blue-400 mt-6 mb-6 pb-6"
    >
      <div class="w-full px-2">
        <div class="card md:w-1/3 bg-base-100 shadow-xl mt-6 mx-auto">
          <figure class="p-1">
            <img v-if="UseLang.store.lang == 'pt'"
              src="../assets/images/home/4.png"
              alt="Shoes"
              class="rounded-xl"
              width="500"
              height="500"
              style="width: 100%"
            />
            <img v-else
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
      <div class="w-full md:w-1/2 px-4">
        <a href="/static/img/certificados/7863ts.jpg" target="_blank">
          <div
            class="card bg-base-100 shadow-xl mt-6 mx-auto transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 cursor-pointer"
          >
            <figure class="p-1">
              <img
                src="/static/img/certificados/7863ts.jpg"
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
                <span v-if="UseLang.store.lang == 'pt'">A IATF 16949 especifica os requisitos de um sistema de gestão de
                qualidade para a produção automotiva.</span>
                <span v-else>IATF 16949 specifies the requirements for a quality management system for automotive production.</span>
              </p>
            </div>
          </div>
        </a>
      </div>

    </div>
  </section>
</template>

<script setup lang="ts">
  import UseLang from "../composables/lang"

</script>

<style scoped></style>
