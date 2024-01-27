<template>
  <div v-if="state.showProdutos">
    <ProdutosModalVue></ProdutosModalVue>
  </div>
  <section id="produtos">
    <div class="py-4 px-2 md:px-8 mt-4 text-center">
      <span
        class="text-base md:text-xl font-bold border-t border-b py-4 border-green-800 text-green-800"
        ><span v-if="UseLang.store.lang == 'pt'"
          >Tecnologia, qualidade e comprometimento</span
        >
        <span v-else>Technology, quality, and commitment</span></span
      >
    </div>

    <div class="flex flex-wrap px-12 mt-12">
      <div class="w-full text-3xl mx-0 px-0 text-primary text-center">
        <span v-if="UseLang.store.lang == 'pt'">Produtos</span
        ><span v-else>Products</span>
      </div>
      <div class="w-full md:w-1/3 p-4">
        <div class="card px-1 bg-gray-50 shadow-md transition-transform transform-gpu hover:scale-105 hover:shadow-lg cursor-pointer">
          <img
            src="../assets/images/produtos/1.png"
            class="card-img-top mx-auto mt-1"
            alt="Product Image"
            width="500"
            height="500"
            style="width: 100%"
          />
          <div class="card-body py-2 my-0 text-center">
            <p class="card-text text-primary">
              <span v-if="UseLang.store.lang == 'pt'">Processos complexos</span>
              <span v-else>Complex processes</span>
            </p>
          </div>
        </div>
      </div>
      <div class="w-full md:w-1/3 p-4">
        <div class="card px-1 bg-gray-50 shadow-md transition-transform transform-gpu hover:scale-105 hover:shadow-lg cursor-pointer">
          <img
            src="../assets/images/produtos/2.png"
            class="card-img-top mx-auto mt-1"
            alt="Product Image"
            width="500"
            height="500"
            style="width: 100%"
          />
          <div class="card-body py-2 my-0 text-center">
            <p class="card-text text-primary">
              <span v-if="UseLang.store.lang == 'pt'">Dobra de tubo e arame</span>
              <span v-else>Tube and wire bending</span>
            </p>
          </div>
        </div>
      </div>
      <div class="w-full md:w-1/3 p-4">
        <div class="card px-1 bg-gray-50 shadow-md transition-transform transform-gpu hover:scale-105 hover:shadow-lg cursor-pointer">
          <img
            src="../assets/images/produtos/3.png"
            class="card-img-top mx-auto mt-1"
            alt="Product Image"
            width="500"
            height="500"
            style="width: 100%"
          />
          <div class="card-body py-2 my-0 text-center">
            <p class="card-text text-primary">
              <span v-if="UseLang.store.lang == 'pt'">Enrolamento de mola</span>
              <span v-else>Spring winding</span>
            </p>
          </div>
        </div>
      </div>
      <div class="w-full md:w-1/3 p-4">
        <div class="card px-1 bg-gray-50 shadow-md transition-transform transform-gpu hover:scale-105 hover:shadow-lg cursor-pointer">
          <img
            src="../assets/images/produtos/4.png"
            class="card-img-top mx-auto mt-1"
            alt="Product Image"
            width="500"
            height="500"
            style="width: 100%"
          />
          <div class="card-body py-2 my-0 text-center">
            <p class="card-text text-primary">
              <span v-if="UseLang.store.lang == 'pt'">Estamparia</span>
              <span v-else>Stamping</span>
            </p>
          </div>
        </div>
      </div>
      <div class="w-full md:w-1/3 p-4">
        <div class="card px-1 bg-gray-50 shadow-md transition-transform transform-gpu hover:scale-105 hover:shadow-lg cursor-pointer">
          <img
            src="../assets/images/produtos/5.png"
            class="card-img-top mx-auto mt-1"
            alt="Product Image"
            width="500"
            height="500"
            style="width: 100%"
          />
          <div class="card-body py-2 my-0 text-center">
            <p class="card-text text-primary">
              <span v-if="UseLang.store.lang == 'pt'">Soldas</span>
              <span v-else>Welding</span>
            </p>
          </div>
        </div>
      </div>
      <div class="w-full md:w-1/3 p-4">
        <div class="card px-1 bg-gray-50 shadow-md transition-transform transform-gpu hover:scale-105 hover:shadow-lg cursor-pointer">
          <img
            src="../assets/images/produtos/6.png"
            class="card-img-top mx-auto mt-1"
            alt="Product Image"
            width="500"
            height="500"
            style="width: 100%"
          />
          <div class="card-body py-2 my-0 text-center">
            <p class="card-text text-primary">
              <span v-if="UseLang.store.lang == 'pt'">Processos complexos</span>
              <span v-else> Complex processes</span>
            </p>
          </div>
        </div>
      </div>
    </div>

    <div class="flex mt-1 justify-end">
      <div class="mt-4 mr-12">
        <label class="btn animate-bounce" @click="changeProdutos()"
          ><span v-if="UseLang.store.lang == 'pt'">Mais Produtos</span>
          <span v-else>More products</span></label
        >
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import ProdutosModalVue from "./ProdutosModal.vue";
import { reactive } from "vue";
import UseLang from "../composables/lang";

const state = reactive({
  showProdutos: false,
});
function changeProdutos() {
  console.log("JOi");
  state.showProdutos = true;
}
</script>

<style scoped></style>
