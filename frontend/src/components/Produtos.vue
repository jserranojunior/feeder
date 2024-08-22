<template>
  <div v-if="UseProducts.store.showProdutos">
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
      <div class="w-full text-3xl mx-0 px-0 text-green-700 text-center">
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
            <p class="card-text text-green-700">
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
            <p class="card-text text-green-700">
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
            <p class="card-text text-green-700">
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
            <p class="card-text text-green-700">
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
            <p class="card-text text-green-700">
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
            <p class="card-text text-green-700">
              <span v-if="UseLang.store.lang == 'pt'">Processos complexos</span>
              <span v-else> Complex processes</span>
            </p>
          </div>
        </div>
      </div>
    </div>

    <div class="flex mt-1 justify-end">
      <div class="mt-4 mr-16">
        <label class="btn btn-success bg-green-700 text-white " @click="UseProducts.changeProdutos(true)"
          ><span v-if="UseLang.store.lang == 'pt'">Mais Produtos</span>
          <span v-else>More products</span><span class="animate-bounce mx-1"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-award" viewBox="0 0 16 16">
  <path d="M9.669.864 8 0 6.331.864l-1.858.282-.842 1.68-1.337 1.32L2.6 6l-.306 1.854 1.337 1.32.842 1.68 1.858.282L8 12l1.669-.864 1.858-.282.842-1.68 1.337-1.32L13.4 6l.306-1.854-1.337-1.32-.842-1.68zm1.196 1.193.684 1.365 1.086 1.072L12.387 6l.248 1.506-1.086 1.072-.684 1.365-1.51.229L8 10.874l-1.355-.702-1.51-.229-.684-1.365-1.086-1.072L3.614 6l-.25-1.506 1.087-1.072.684-1.365 1.51-.229L8 1.126l1.356.702z"/>
  <path d="M4 11.794V16l4-1 4 1v-4.206l-2.018.306L8 13.126 6.018 12.1z"/>
</svg> </span></label
        >
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import ProdutosModalVue from "./ProdutosModal.vue";
import { reactive } from "vue";
import UseLang from "../composables/lang";
import UseProducts from "../composables/products"


</script>

<style scoped></style>
