<template>
  
      <label tabindex="0" class="btn btn-sm btn-outline btn-success  text-white h-full "> <a
              ><span v-if="UseLang.store.lang == 'pt'">
                <img class="mr-2"
              width="22"
              height="10"
                src="/static/img/lang/ptbr.png"
              />
              </span>
              <span v-else>
                <a class="w-full"
              ><img class="mr-2"
              width="22"
              height="10"
                src="/static/img/lang/usa.png"
              />
              </a
            >
              </span>
             
            </a> <svg
          class="fill-current h-4 w-4"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
        >
          <path
            d="M10 12.582l-6.293-6.293-1.414 1.414L10 15.414l7.707-7.707-1.414-1.414L10 12.582z"
          />
        </svg></label>
        <ul
          tabindex="0"
          class="dropdown-content menu p-2 px-0 bg-white shadow rounded-box w-52"
        >
          <li class="px-2" @click="changeLanguage('pt')">
            <a class="w-full"
              ><img
              width="22"
              height="10"
                src="/static/img/lang/ptbr.png"
              />
              Português
            </a>
          </li>
          <li class="px-2" @click="changeLanguage('en')">
            <a class="w-full"
              ><img
              width="22"
              height="10"
                src="/static/img/lang/usa.png"
              />
              English</a
            >
          </li>
        </ul>
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