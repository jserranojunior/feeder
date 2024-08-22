import { createApp } from "vue";
import "./style.css";
import { Icon } from "@iconify/vue";
import router from "./routes/router"
import App from "./components/App.vue";
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';

createApp(App).component("Icon", Icon).use(ElementPlus).use(router).mount("#app");
