<template>

  <div class="navbar bg-base-100 flex mx-0 px-0">
    <div class="navbar-start ">
      <div class="hidden lg:flex w-full px-6">
        <img src="../assets/images/logo.png" width="80" alt="" />
      </div>
      <div class="dropdown text-center mx-auto">
        <label
          tabindex="0"
          class="btn btn-primary text-gray-100 lg:hidden ml-auto"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h8m-8 6h16"
            />
          </svg>
        </label>
        <ul
          tabindex="0"
          class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
        >
          <li><a><span>Home</span></a></li>
          <li>
      <span v-if="UseLang.store.lang == 'pt'">Sobre</span>
      <span v-else>About</span>
    </li>
    <li>
      <span v-if="UseLang.store.lang == 'pt'">Infraestrutura</span>
      <span v-else>Infrastructure</span>
    </li>
    <li>
      <span v-if="UseLang.store.lang == 'pt'">Clientes</span>
      <span v-else>Clients</span>
    </li>
    <li>
      <span v-if="UseLang.store.lang == 'pt'">Certificados</span>
      <span v-else>Certificates</span>
    </li>
    <li>
      <span v-if="UseLang.store.lang == 'pt'">Prêmios</span>
      <span v-else>Awards</span>
    </li>
    <li>
      <span v-if="UseLang.store.lang == 'pt'">Contato</span>
      <span v-else>Contact</span>
    </li>
          <li>   
            <ButtonChangeLang></ButtonChangeLang>
       
</li> 
        </ul>
      </div>
    </div>
    <div class="navbar-end hidden lg:flex w-full ">
      <ul class="menu menu-horizontal px-0 ">
        <li>
      <span v-if="UseLang.store.lang == 'pt'">Sobre</span>
      <span v-else>About</span>
    </li>
    <li>
      <span v-if="UseLang.store.lang == 'pt'">Infraestrutura</span>
      <span v-else>Infrastructure</span>
    </li>
    <li>
      <span v-if="UseLang.store.lang == 'pt'">Clientes</span>
      <span v-else>Clients</span>
    </li>
    <li>
      <span v-if="UseLang.store.lang == 'pt'">Certificados</span>
      <span v-else>Certificates</span>
    </li>
    <li>
      <span v-if="UseLang.store.lang == 'pt'">Prêmios</span>
      <span v-else>Awards</span>
    </li>
    <li>
      <span v-if="UseLang.store.lang == 'pt'">Contato</span>
      <span v-else>Contact</span>
    </li>
       <li class="px-o">
        <div class="bg-white hover:bg-white pr-0">
          <div class="dropdown w-auto max-w-xs dropdown-end">
          <ButtonChangeLang></ButtonChangeLang>
      
    </div>
  </div>
       </li>
      </ul>
    </div>

  </div>
  
  <div>
  
  </div>
</template>

<script setup lang="ts">
import ButtonChangeLang from './ButtonChangeLang.vue';
import UseLang from "../composables/lang"

</script>

<style scoped></style>
