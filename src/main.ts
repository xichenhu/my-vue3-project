import { createSSRApp } from "vue";
import App from "./App.vue";
import Vuex from 'vuex'
import store from './store'
export function createApp() {
  const app = createSSRApp(App);
  app.use(store)
  return {
    app,
    Vuex
  };
}
