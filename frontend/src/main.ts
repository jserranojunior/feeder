import { createApp } from "vue";


import { Icon } from "@iconify/vue";
import router from "./routes/router"
import App from "./components/App.vue";
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';
import './assets/styles/tail.css' 
import 'daisyui/daisyui.css'
createApp(App).component("Icon", Icon).use(ElementPlus).use(router).mount("#app");
