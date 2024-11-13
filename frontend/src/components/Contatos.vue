<template>
  <section id="contato">
    <div class="py-4 px-8 mt-4 text-center">
      <span
        class="text-xl font-bold border-t border-b py-4 border-green-800 text-green-800"
        ><span v-if="UseLang.store.lang == 'pt'">Contato</span>
        <span v-else>Contact</span></span
      >
    </div>

    <div
      class="flex flex-wrap justify-between px-12 mt-6 py-6 bg-gray-500 xs:px-4"
    >
      <div class="xs:w-full tab:w-full lap:w-1/2 px-0 md:px-2 py-4">
        <div class="card bg-white shadow-xl mx-auto">
          <div class="card-body p-2 text-center xs:px-0">
            <div>
              <div class="my-4">
                <span class="font-bold text-lg"
                  ><Icon
                    icon="bytesize:telephone"
                    width="20"
                    class="inline-block mx-1 my-auto mb-1"
                  />
                  <span v-if="UseLang.store.lang == 'pt'">Telefones:</span>
                  <span v-else>Phones:</span>
                </span>
                <br />

                (11) 2413-0070 - (11) 2085-4830<br />
              </div>
              <hr class="my-2" />
              <div class="flex flex-wrap">
                <div class="xs:w-full tab:w-full lap:w-1/2 my-4">
                  <div class="flex flex-wrap">
                    <div class="w-full text-center font-bold text-lg">
                      <span class="font-bold">
                        <Icon
                          icon="material-symbols:mail-outline-rounded"
                          width="20"
                          class="inline-block mx-1 my-auto mb-1"
                        />
                      </span>
                      <span v-if="UseLang.store.lang == 'pt'"
                        >Email para Contato</span
                      >
                      <span v-else>Contact Email:</span>
                    </div>
                    <div class="w-full text-center mx-auto">
                      <div
                        class="btn btn-sm btn-outline border-t-green-600 hover:bg-green-700"
                      >
                        <span class="font-bold"> </span>
                        <a href="mailto:feeder@feeder.com.br"
                          ><div class="">feeder@feeder.com.br</div>

                          <div class="mx-auto justify-center text-center"></div>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="xs:w-full tab:w-full lap:w-1/2 border-l-2 my-4">
                  <div class="flex flex-wrap text-left mx-5">
                    <div class="w-full text-center font-bold text-lg">
                      <span class="font-bold">
                        <Icon
                          icon="pajamas:work"
                          width="20"
                          class="inline-block mx-1 my-auto mb-1"
                        />
                      </span>
                      <span v-if="UseLang.store.lang == 'pt'"
                        >Trabalhe Conosco:</span
                      >
                      <span v-else>Work with us:</span>
                    </div>
                    <div class="w-fulltext-center mx-auto mb-2">
                      <div
                        class="btn btn-sm btn-outline border-t-green-600 hover:bg-green-700"
                      >
                        <span class="font-bold"> </span>
                        <a href="mailto:vagas@feeder.com.br">
                          vagas@feeder.com.br
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div class="flex flex-wrap text-left mx-5">
                <div class="w-full">
                  <hr class="my-2" />

                  <div class="font-bold text-center text-lg my-4">
                    <Icon
                      icon="mingcute:warning-line"
                      width="20"
                      class="inline-block mx-1 my-auto mb-1"
                    ></Icon>
                    <span v-if="UseLang.store.lang == 'pt'">
                      Canal de Denúncia e Reclamação:</span
                    >
                    <span v-else>Whistleblower and Complaint Channel:</span>
                  </div>

                  <span v-if="UseLang.store.lang == 'pt'">
                    Nossa empresa compromete-se em manter um ambiente<br />
                    respeitoso e sustentável. Se você presenciar ou for vítima
                    de:<br />
                    Abuso; Preconceito; Discriminação; Práticas prejudiciais ao
                    meio ambiente;<br />
                    Sua colaboração é fundamental para nós!
                    <br />
                  </span>
                  <span v-else>
                    Our company is committed to maintaining a respectful and
                    sustainable environment.<br />
                    If you witness or are a victim of:<br />

                    Abuse; Prejudice; Discrimination; Harmful environmental
                    practices <br />
                    Your cooperation is essential to us!<br />
                  </span>
                  <div class="mx-center mt-2">
                    <span v-if="UseLang.store.lang == 'pt'">
                      Denuncie para:
                    </span>
                    <span v-else> Report to: </span>
                    <a href="mailto:abuse@feeder.com.br">
                      <div
                        class="mx-2 btn btn-sm btn-outline border-t-green-600 hover:bg-green-700"
                      >
                        <span class="font-bold">abuse@feeder.com.br</span>
                        <br />
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="xs:w-full tab:w-full lap:w-1/2 px:0 md:px-2 py-4">
        <div class="card bg-white shadow-xl h-full">
          <div class="p-0 m-0">
            <div class="font-bold text-center mt-1 m-0 p-0">
              <Icon
                icon="mdi:address-marker-outline"
                width="20"
                class="inline-block mx-1 my-auto mb-1"
              />
              <span class="text-center mx-auto text-lg">
                <span v-if="UseLang.store.lang == 'pt'">Endereço:</span>
                <span v-else>Address:</span>
              </span>
            </div>

            <a
              href="https://maps.google.com/maps?ll=-23.432199,-46.411828&z=15&t=m&hl=pt-BR&gl=BR&mapclient=embed&q=R.%20Prof.%20Jo%C3%A3o%20Cavaleiro%20Sal%C3%A9m%2C%20310%20-%20Parque%20das%20Nacoes%20Guarulhos%20-%20SP%2007243-580"
              target="_blank"
            >
              <div class="text-center w-auto px-2">
                <div
                  class="bg-gradient-to-r from-green-600 via-green-700 to-green-600 text-white rounded-lg py-1"
                >
                  <span class="">
                    R. Prof. João Cavaleiro Salém, 310, <br />Parque das Nacoes,
                    Guarulhos, SP
                  </span>
                </div>
              </div></a
            >
          </div>
          <div class="card-body p-2">
            <iframe
              class="w-full"
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d5144.524769267864!2d-46.413535747911055!3d-23.43142374324372!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce89d86d79a521%3A0x187bf9bed7a1cc3!2sR.%20Prof.%20Jo%C3%A3o%20Cavaleiro%20Sal%C3%A9m%2C%20310%20-%20Parque%20das%20Nacoes%2C%20Guarulhos%20-%20SP%2C%2007243-580!5e0!3m2!1spt-BR!2sbr!4v1670944596928!5m2!1spt-BR!2sbr"
              style="border: 0; height: 100%"
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import UseLang from "../composables/lang";
</script>

<style scoped></style>
