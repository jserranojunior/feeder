<template>

    
<!--    md:px-0 lg:px-0 2xl:px-80 2xl:mx-80 3xl:px-96 3xl:mx-96
 -->      <div class=" bg-white  xs:px-0 tab:px-12 lap:px-24 des:px-40 ult:px-96">
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
  import Premios from "./Premios.vue";
  import Contatos from "./Contatos.vue";
  import BtnToTop from "./BtnToTop.vue";

  onMounted(() => {});
</script>