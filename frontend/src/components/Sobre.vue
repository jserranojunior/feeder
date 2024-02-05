<template>
  <section id="sobre">
    <div
      class=" flex flex-wrap  mt-1 pb-4 shadow-md"
    >
      <div class="xs:w-full mx-auto tab:w-1/2 lap:w-3/12 des:w-3/12 my-auto ">
       
        <img
          src="/static/img/home/1.png"
          class="w-full "
         
         style="width: 100%;"
        />
      </div>
      <div class="w-full md:w-1/2 text-white my-auto px-auto xs:text-lg lap:text-xl desk:text-3xl p-2">
        <div class="bg-gradient-to-r from-primary  rounded-xl via-green-700 to-green-700 p-4">
          <span v-if="UseLang.store.lang == 'pt'">
          Mais de 200 máquinas de última geração, distribuidas em 15.000m² de área
        construída, em um terreno de 30.000m².
        <br /><br />Dentre o maquinário, injetoras, CNCs, prensas, máquinas e
        robôs de solda, dobrada de molas. Todas as máquinas possuem qualidade e
        eficácia
        </span>
        <span v-else>
          
More than 200 state-of-the-art machines spread across 15,000m² of built-up area on a 30,000m² plot of land.
<br /><br />
Among the machinery are injection molding machines, CNCs, presses, machines, and welding and spring bending robots. All machines are of high quality and efficiency.
        </span>

        </div>
       
      </div>

     
    </div>

    <div class="flex flex-wrap justify-center mt-4  px-12 shadow-md">
   <div class="xs:w-full  tab:w-full lap:w-1/2  my-auto p-1 ">
    <div class="card bg-base-100  px-auto" ref="card">
        <div class="card-body">
          <h2 class="card-title text-3xl font-sans font-normal mb-4 text-green-700"><span v-if="UseLang.store.lang == 'pt'">Seja Bem-vindo à Feeder</span>
            <span v-else>Welcome to Feeder</span></h2>
          <p v-if="UseLang.store.lang == 'pt'">
            A Feeder Industrial Ltda. foi fundada em 1990, com sua primeira sede
            no bairro da Vila Guilherme, São Paulo, visando à fabricação de
            Molas e Artefatos metálicos e prestação de serviços de mecânica. No
            início, com menos de 10 funcionários, as máquinas utilizadas na
            produção eram todas confeccionadas internamente. Algumas dessas
            máquinas continuam em operação até hoje.
          </p>
          <p v-else>
            The Feeder Industrial Ltda. was founded in 1990, with its first headquarters in the Vila Guilherme neighborhood, São Paulo, focusing on the manufacturing of Springs and Metal Artifacts and providing mechanical services. In the beginning, with fewer than 10 employees, the machines used in production were all made in-house. Some of these machines are still in operation today.
          </p>
        </div>
      </div>
   </div>
      <div class="xs:w-full  tab:w-full lap:w-1/2 p-1">
        <div class="card w-auto bg-base-100 px-auto" ref="afeeder">
          <div class="card-body p-0 md:p-4">
            <img v-if="UseLang.store.lang == 'pt'"
              src="../assets/images/home/2.png"
              class="mx-auto mt-1"
              width="500"
              height="500"
              style="width: 100%"
            />
            <img v-else
              src="../assets/images/home/en/2.png"
              class="mx-auto mt-1"
              width="500"
              height="500"
              style="width: 100%"
            />
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
