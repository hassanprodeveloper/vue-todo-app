import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";
import "core-js/stable";
import "regenerator-runtime/runtime";
import "@babel/polyfill";
import 'intersection-observer' 

createApp(App).use(store).use(router).mount("#app");
