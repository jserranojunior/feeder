<template>
  <div>
    <input type="checkbox"   />
    <label class="modal modal-open cursor-pointer p-0">
      <div class="modal-box w-11/12 max-w-5xl">
        <h3 class="font-bold text-lg px-4 text-center"><span v-if="UseLang.store.lang == 'pt'">Produtos</span
        ><span v-else>Products</span></h3>

        <section class="overflow-hidden text-gray-700">
          <div class="container mx-auto p-2">
            <div class="flex flex-wrap">
              <div
                class="flex flex-wrap w-1/3"
                v-for="image in state.imagesLinks"
              >
                <div class="w-full p-1">
                  <img
                    alt="gallery"
                    class="block object-cover object-center w-full h-full rounded-lg shadow-lg"
                    :src="image"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        <div class="modal-action py-0 pr-3" @click="UseProducts.changeProdutos(false)">
          <label class="btn btn-secondary"
            ><span v-if="UseLang.store.lang == 'pt'">Fechar</span
        ><span v-else>Close</span></label
          >
        </div>
      </div>
    </label>
  </div>
</template>

<script lang="ts" setup>
  import { reactive, onBeforeMount } from "vue";
  import UseLang from "../composables/lang"
  import UseProducts from "../composables/products"

  const countImages = 29;

  const state = reactive({
    imagesLinks: [] as any,
  });

  onBeforeMount(async () => {
    let contador = 1;

    while (contador < 30) {
      state.imagesLinks.push(`/static/img/produtos_completo/${contador}.jpg`);
      contador += 1;
    }
  });
</script>
