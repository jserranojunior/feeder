<template>
 
  <div class="mt-2 bg-base-100 flex mx-0 px-0">
    <div class="w-full">
      <div class="flex w-full px-6">
        <img src="../assets/images/logo.png" width="80" alt="" />
      </div>
    </div>
    <div class="w-full ">
      <div class="xs:hidden tab:hidden lap:block ">
        <div class="w-1/2 ml-auto">
          <ul class="menu right-full float-right left-0 menu-horizontal ">
          <li class="">
            <a href="#sobre">
              <span v-if="UseLang.store.lang == 'pt'">Sobre</span>
              <span v-else>About</span>
            </a>
          </li>
          <li>
            <a href="#infraestrutura">
              <span v-if="UseLang.store.lang == 'pt'">Infraestrutura</span>
              <span v-else>Infrastructure</span>
            </a>
          </li>
          <li>
            <a href="#clientes">
              <span v-if="UseLang.store.lang == 'pt'">Clientes</span>
              <span v-else>Clients</span>
            </a>
          </li>
          <li>
            <a href="#certificados">
              <span v-if="UseLang.store.lang == 'pt'">Certificados</span>
              <span v-else>Certificates</span>
            </a>
          </li>
          <li>
            <a href="#premios">
              <span v-if="UseLang.store.lang == 'pt'">Prêmios</span>
              <span v-else>Awards</span>
            </a>
          </li>
          <li>
            <a href="#contato">
              <span v-if="UseLang.store.lang == 'pt'">Contato</span>
              <span v-else>Contact</span>
            </a>
          </li>
          <li >
            <div class="bg-white hover:bg-white pr-0">
              <div class="dropdown w-auto max-w-xs dropdown-end">
                <ButtonChangeLang></ButtonChangeLang>
              </div>
            </div>
          </li>
        </ul>
        </div>
      </div>
      <div class="dropdown text-center mx-auto xs:flex tab:flex lap:hidden">
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
          class="menu menu-compact dropdown-content dropdown-end dropdown-left mt-3 p-2 shadow bg-base-100 rounded-box w-52"
        >
          <li>
            <a><span>Home</span></a>
          </li>
          <li>
            <a href="#sobre">
              <span v-if="UseLang.store.lang == 'pt'">Sobre</span>
              <span v-else>About</span>
            </a>
          </li>
          <li>
            <a href="#infraestrutura">
              <span v-if="UseLang.store.lang == 'pt'">Infraestrutura</span>
              <span v-else>Infrastructure</span>
            </a>
          </li>
          <li>
            <a href="#clientes">
              <span v-if="UseLang.store.lang == 'pt'">Clientes</span>
              <span v-else>Clients</span>
            </a>
          </li>
          <li>
            <a href="#certificados">
              <span v-if="UseLang.store.lang == 'pt'">Certificados</span>
              <span v-else>Certificates</span>
            </a>
          </li>
          <li>
            <a href="#premios">
              <span v-if="UseLang.store.lang == 'pt'">Prêmios</span>
              <span v-else>Awards</span>
            </a>
          </li>
          <li>
            <a href="#contato">
              <span v-if="UseLang.store.lang == 'pt'">Contato</span>
              <span v-else>Contact</span>
            </a>
          </li>
          <li>
            <MiniButtonChangeLang></MiniButtonChangeLang>

          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import ButtonChangeLang from "./ButtonChangeLang.vue";
import UseLang from "../composables/lang";
import MiniButtonChangeLang from "./MiniButtonChangeLang.vue";
</script>

<style scoped></style>
