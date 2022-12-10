<script setup lang="ts">
import HelloWorld from './HelloWorld.vue'
import gsap from "gsap";
import { onMounted, ref } from 'vue';
const logo = ref(null);
const card = ref(null);


onMounted(() => {
  /*   gsap.to(logo.value, {
        x: 100,       
        duration: 2,
    }); */
    gsap.fromTo(logo.value, {autoAlpha: 0}, {autoAlpha: 1, duration: 3});
        gsap.fromTo(card.value, {x: -200}, {x: 0, duration: 3});

});
</script>

<template>
  <div>
<div class="navbar bg-base-100 ">
 <div class="flex-1 px-6"> 
 <img src="../assets/images/logo.png" width="60" alt="">
</div>
   <div class="flex-none">
    <ul class="menu menu-horizontal px-1">
      <li><a>Home</a></li>
            <li><a>Sobre</a></li>
      <li><a>Produtos</a></li>
            <li><a>Clientes</a></li>


            <li><a>Contato</a></li>


    </ul>
  </div>
</div>
<div class="drawer bg-base-200">
  <input id="my-drawer" type="checkbox" class="drawer-toggle" />
  <div class="drawer-content">
    <!-- Page content here -->


 <div class="bg-gradient-to-r from-primary via-green-500 to-blue-400 flex mt-1">
 <div class="w-1/2 text-white px-12 py-6 mx-auto px-auto">Mais de 200 máquinas de última geração, distribuidas em 15.000m² de área construída, em um terreno de 30.000m². <br><br>Dentre o maquinário, injetoras, CNCs, prensas, máquinas e robôs de solda, dobrada de molas. Todas as máquinas possuem qualidade e eficácia</div>
 <div class="w-1/2">
   <img ref="logo" src="../assets/images/home/1.png" class="w-1/2 mx-auto" />

 </div>
</div>



<div class="flex justify-center mt-4 ">
<div class="card w-1/2 bg-base-100 shadow-xl  px-auto" ref="card">
  <div class="card-body">
    <h2 class="card-title">Seja Bem-vindo à Feeder</h2>
    <p>A Feeder Industrial Ltda. foi fundada em 1990, com sua primeira sede no bairro da Vila Guilherme, São Paulo, visando à fabricação de Molas e Artefatos metálicos e prestação de serviços de mecânica. No início, com menos de 10 funcionários, as máquinas utilizadas na produção eram todas confeccionadas internamente. Algumas dessas máquinas continuam em operação até hoje.
</p>
    
  </div>
</div>


</div>

<div class="py-4 border-t border-b px-8 border-green-800 mt-4 text-center">
  <span class="text-xl font-bold">Tecnologia, qualidade e comprometimento</span>
</div>
<div class="flex mt-3 px-12">
<div class="w-2/3">
<img src="../assets/images/home/2.png" class="mx-auto mt-1" />
</div>
<div class="w-2/3">
<img src="../assets/images/home/3.png" class="mx-auto" />
</div>
</div>
  </div> 

</div>

   </div>

</template>


