<template>
<div class="flex justify-center">
<!--    md:px-0 lg:px-0 2xl:px-80 2xl:mx-80 3xl:px-96 3xl:mx-96
 -->      <div 
             class="w-full sm:w-full md:w-full lg:w-11/12 xl:w-10/12 2xl:w-10/12 ult:w-7/12"

       >
        <Navbar></Navbar>
        <Sobre></Sobre>
        <Infraestrutura></Infraestrutura>
        <Produtos></Produtos>
        <Clientes></Clientes>
        <Certificados></Certificados>
        <DocumentosLegais></DocumentosLegais>

        <Premios></Premios>
        <Contatos></Contatos>
        <Footer></Footer>
        <BtnToTop></BtnToTop>
        <Notifications></Notifications>
   </div>
    </div>

</template>
<script setup lang="ts">
  import ProdutosVue from "./ProdutosModal.vue";
  import { onMounted } from "vue";
  import Navbar from "./Navbar.vue";
  import Footer from "./Footer.vue";
  import Sobre from "./Sobre.vue";
  import Infraestrutura from "./Infraestrutura.vue";
  import Produtos from "./Produtos.vue";
  import Clientes from "./Clientes.vue";
  import Certificados from "./Certificados.vue";
  import DocumentosLegais from "./DocumentosLegais.vue";

  import Premios from "./Premios.vue";
  import Contatos from "./Contatos.vue";
  import BtnToTop from "./BtnToTop.vue";
  import Notifications from "./Notifications.vue"

</script>