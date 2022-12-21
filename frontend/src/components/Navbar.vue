<template>
  <div class="navbar bg-base-100">
    <div class="navbar-start w-auto">
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
          <li><a>Home</a></li>
          <li><a href="#sobre">Sobre</a></li>
          <li><a href="#infraestrutura">Infraestrutura</a></li>
          <li><a href="#clientes">Clientes</a></li>
          <li><a href="#certificados">Certificados</a></li>
          <li><a href="#premios">Prêmios</a></li>

          <li><a href="#contato">Contato</a></li>
        </ul>
      </div>
    </div>
    <div class="navbar-end hidden lg:flex w-full">
      <ul class="menu menu-horizontal px-1">
        <li><a>Home</a></li>
        <li><a href="#sobre" data-speed="0.5">Sobre</a></li>
        <li><a href="#infraestrutura">Infraestrutura</a></li>
        <li><a href="#clientes">Clientes</a></li>
        <li><a href="#certificados">Certificados</a></li>
        <li><a href="#premios">Prêmios</a></li>

        <li><a href="#contato">Contato</a></li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped></style>
