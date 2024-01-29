<template>
  <div v-if="state.showFabrica">
    <FabricaVue></FabricaVue>
  </div>
  <section id="infraestrutura">
    <div class="py-4 px-2 md:px-8 mt-4 text-center">
      <span
        class="text-base md:text-xl font-bold border-t border-b py-4 border-green-800 text-green-800"
        ><span v-if="UseLang.store.lang == 'pt'">Super infraestrutura, agilidade, flexibilidade</span>
        <span v-else>Super infrastructure, agility, flexibility</span></span
      >
    </div>

    <div class="flex flex-wrap mt-3 px-12 justify-center">
      <div class="w-full md:w-1/3 mx-auto px-6">
        <img v-if="UseLang.store.lang == 'pt'"
          src="../assets/images/home/7.png"
          class="mx-auto"
          width="500"
          height="500"
          style="width: 100%"
        />
        <img v-else
          src="../assets/images/home/en/7.png"
          class="mx-auto"
          width="500"
          height="500"
          style="width: 100%"
        />
      </div>
      <div class="w-full md:w-1/3 mx-auto px-6">
        <img v-if="UseLang.store.lang == 'pt'"
          src="../assets/images/home/8.png"
          class="mx-auto"
          width="500"
          height="500"
          style="width: 100%"
        />
        <img v-else
          src="../assets/images/home/en/8.png"
          class="mx-auto"
          width="500"
          height="500"
          style="width: 100%"
        />
      </div>
      <div class="w-full md:w-1/3 mx-auto px-6">
        <img  v-if="UseLang.store.lang == 'pt'"
          src="../assets/images/home/9.png"
          class="mx-auto"
          width="500"
          height="500"
          style="width: 100%"
        />
        <img  v-else
          src="../assets/images/home/en/9.png"
          class="mx-auto"
          width="500"
          height="500"
          style="width: 100%"
        />
      </div>
    </div>

    <div class="flex flex-wrap mt-3 px-12 gap-1">
      <div class="w-full md:w-2/3 mx-auto">
        <img v-if="UseLang.store.lang == 'pt'"
          src="../assets/images/home/3.png"
          class="mx-auto"
          width="500"
          height="500"
          style="width: 100%"
        />
        <img v-else
          src="../assets/images/home/en/3.png"
          class="mx-auto"
          width="500"
          height="500"
          style="width: 100%"
        />
      </div>
      <div class="w-full md:w-2/3 mx-auto">
        <img
          src="../assets/images/home/10.png"
          class="mx-auto"
          width="500"
          height="500"
          style="width: 100%"
        />
      </div>
    </div>

    <div class="flex mt-1 justify-end">
      <div class="mt-4 mx-auto">
        <label
          
          class="btn btn-primary animate-bounce"
          @click="UseFabrica.changeFabrica(true)"
        >
          <span v-if="UseLang.store.lang == 'pt'">Veja Mais</span>
          <span v-else>See More</span></label
        >
      </div>
      <br />
    </div>
  </section>
</template>

<script setup lang="ts">
  import { reactive } from "vue";
  import FabricaVue from "./FabricaModal.vue";
  import UseLang from "../composables/lang"
  import UseFabrica from "../composables/fabrica"

  const state = reactive({
    showFabrica: false,
  });


  
</script>
<style scoped></style>
