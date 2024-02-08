import { createApp } from "vue";
import router from "./router";
import store from "./store";
import "./style.css";
import App from "./App.vue";
import * as filters from "./filters";

createApp(App).mount("#app");

app.config.globalProperties.$filters = filters;
