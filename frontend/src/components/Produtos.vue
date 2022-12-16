<template>
  <div>
    <input type="checkbox" id="my-modal-produtos" class="modal-toggle" />
    <div class="modal p-0">
      <div class="modal-box">
        <h3 class="font-bold text-lg px-4 text-center">Produtos</h3>

        <section class="overflow-hidden text-gray-700">
          <div class="container mx-auto p-2">
            <div class="flex flex-wrap">
              <div class="flex flex-wrap w-1/3" v-for="image in countImages">
                <div class="w-full p-1">
                  <img
                    alt="gallery"
                    class="block object-cover object-center w-full h-full rounded-lg shadow-lg"
                    :src="
                      'src/assets/images/produtos_completo/' + image + '.jpg'
                    "
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        <div class="modal-action py-0 pr-3">
          <label for="my-modal-produtos" class="btn btn-secondary"
            >Fechar</label
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
  const countImages = 29;
</script>
