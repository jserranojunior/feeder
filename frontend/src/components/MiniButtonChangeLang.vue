<template>
  <hr class="border-t py-1 rounded-none  border-gray-400">
    <li class="" @click="changeLanguage('pt')">
            <a class="w-full my-0 py-0"
              ><img
              width="22"
              height="10"
                src="/static/img/lang/ptbr.png"
              />
              Português
            </a>
          </li>
          <li class=" my-0 py-0" @click="changeLanguage('en')">
            <a class="w-full"
              ><img
              width="22"
              height="10"
                src="/static/img/lang/usa.png"
              />
              English</a
            >
          </li>
</template>

<script setup lang="ts">
import { onMounted } from 'vue';
import router from "../routes/router"
import UseLang from "../composables/lang"

function checkRouterLang(){
    if(router.currentRoute.value.params.lang && router.currentRoute.value.params.lang == 'en'){
        changeLanguage("en")
    }else{
        changeLanguage("pt")
    }
}

function checkSavedLanguage() {
const savedLanguage = localStorage.getItem('preferredLanguage') || 'pt';
changeLanguage(savedLanguage);


}

function changeLanguage(lang :string) {
localStorage.setItem('preferredLanguage', lang);
 UseLang.store.lang = lang
if(lang == 'en'){
    router.push("/en")
}else{
    router.push("/")
}


}

onMounted(()=>{
checkSavedLanguage();
checkRouterLang()
})
</script>