<script setup lang="ts">
  import ProdutosVue from "./ProdutosModal.vue";
  import FabricaVue from "./FabricaModal.vue";
  import gsap from "gsap";
  import { onMounted, ref } from "vue";
  import Navbar from "./Navbar.vue";
  import Footer from "./Footer.vue";
  import Sobre from "./Sobre.vue";
  import Infraestrutura from "./Infraestrutura.vue";
  import Produtos from "./Produtos.vue";
  import Clientes from "./Clientes.vue";
  import Certificados from "./Certificados.vue";
  import Premios from "./Premios.vue";
  import Contatos from "./Contatos.vue";
  import BtnToTop from "./BtnToTop.vue";

  /*   const logo = ref(null);
  const card = ref(null); */

  onMounted(() => {
    /*     gsap.fromTo(logo.value, { autoAlpha: 0 }, { autoAlpha: 1, duration: 3 });
    gsap.fromTo(card.value, { x: -100 }, { x: 0, duration: 3 }); */
  });
</script>

<template>
  <div>
    <FabricaVue></FabricaVue>
    <ProdutosVue></ProdutosVue>
    <div class="bg-base-200">
      <div class="content px-0 md:px-0 lg:px-0 2xl:px-24 bg-white">
        <Navbar></Navbar>
        <Sobre></Sobre>
        <Infraestrutura></Infraestrutura>
        <Produtos></Produtos>
        <Clientes></Clientes>
        <Certificados></Certificados>
        <Premios></Premios>
        <Contatos></Contatos>
        <Footer></Footer>
        <BtnToTop></BtnToTop>
      </div>
    </div>
  </div>
</template>
