<template>
  <footer
    class="px-12 md:px-20 py-6 bg-neutral text-neutral-content align-center justify-between"
  >
    <div class="flex flex-wrap justify-between mx-auto">
      <div class="xs:w-full tab:w-full lap:w-1/5 mt-2">
        <img src="../assets/images/logo.png" width="60" alt="" />

        <p>
          Feeder Industria LTDA<br />Copyright © 2024 -
          <span v-if="UseLang.store.lang == 'pt'"
            >Todos os direitos reservados</span
          ><span v-else>All rights reserved.</span>
        </p>
      </div>

      <div class="xs:w-full tab:w-full lap:w-1/5 mx-auto mt-8">
        <!--         <div class="footer-title text-center mx-auto">TÜV SÜD Verify</div>
 -->
        <div class="card w-36 shadow-xl p-0 mx-auto">
          <div class="card-body p-0 bg-white rounded-lg">
            <img src="/static/img/iaft.jpeg" class="mt-1" style="width: 100%" />
          </div>
        </div>
      </div>
      <div class="xs:w-full tab:w-full lap:w-1/5 mx-auto mt-2">
        <div class="card w-36 shadow-xl p-0 mx-auto">
          <div class="card-body p-0 rounded-lg">
            <img
              src="/static/img/certificados/iqaselo.jpeg"
              class="mx-auto"
              style="width: 70%"
            />
          </div>
        </div>
      </div>
      <div class="xs:w-full tab:w-full lap:w-1/5">
        <div class="flex flex-wrap">
          <div class="w-full mx-auto">
            <div class="text-center mx-auto">D&B D-U-N-S® Registered™</div>
          </div>

          <div class="card w-32 shadow-xl p-1 mx-auto">
            <div
              class="card-body p-0 bg-white rounded-lg mx-auto"
              v-if="state.domain != 'localhost'"
            >
              <iframe
                id="Iframe1"
                src="https://dunsregistered.dnb.com/SealAuthentication.aspx?Cid=1"
                width="114px"
                height="97px"
                frameborder="0"
                scrolling="no"
                allowtransparency="true"
              ></iframe>
            </div>
          </div>
        </div>
      </div>

      <div class="xs:w-full tab:w-full lap:w-1/5">
        <span class="footer-title">Social</span>
        <div
          class="grid grid-flow-col gap-4"
          v-if="state.domain != 'localhost'"
        >
          <iframe
            src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FFeederIndustrial&tabs&width=340&height=130&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId"
            width="340"
            height="130"
            style="border: none; overflow: hidden; width: 100%"
            scrolling="no"
            frameborder="0"
            allowfullscreen="true"
            allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
          ></iframe>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import UseLang from "../composables/lang";

import { reactive } from "vue";
import router from "../routes/router";
const state = reactive({
  domain: window.location.hostname,
});

/*   function verifyUrl(){
  const urlAtual = window.location.href;
  const urlDesejada = "https://feeder.com.br";
  if(urlAtual.trim() === urlDesejada){
  return true
  }else{
    return false
  }
} */
</script>

<style scoped></style>
