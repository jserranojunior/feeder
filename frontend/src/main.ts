import { createApp } from "vue";
import "./style.css";
import { Icon } from "@iconify/vue";
import router from "./routes/router"
import App from "./components/App.vue";

createApp(App).component("Icon", Icon).use(router).mount("#app");
