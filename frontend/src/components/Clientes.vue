<template>
  <section id="clientes" class="mt-6">
    <div class="py-4 px-2 md:px-8 mt-4 text-center">
      <span
        class="text-base md:text-xl font-bold border-t border-b py-4 border-green-800 text-green-800"
        ><span v-if="UseLang.store.lang == 'pt'">Alguns de nossos clientes</span>
        <span v-else>Some of our clients
</span></span
      >
    </div>
    <div class="flex gap-1 px-12 mt-6 bg-gray-100 py-4">
      <div class="w-full md:w-2/3 mx-auto px-1">
        <img v-if="UseLang.store.lang == 'pt'"
          src="../assets/images/home/5.png"
          class="mx-auto"
          width="500"
          height="500"
          style="width: 100%"
        />
        <img v-else
          src="../assets/images/home/en/5.png"
          class="mx-auto"
          width="500"
          height="500"
          style="width: 100%"
        />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import UseLang from "../composables/lang"

</script>

<style scoped></style>
