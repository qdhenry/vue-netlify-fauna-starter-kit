import Vue from "vue";
import Vuetify from "vuetify";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import attemptToAuthoriseTokens from "./helpers/authorise-tokens";
import "vuetify/dist/vuetify.min.css";

Vue.use(Vuetify);
const vuetify = new Vuetify({
  theme: {
    dark: false
  }
});
new Vue({
  el: "#app",
  render: h => h(App),
  router,
  vuetify,
  store
});

store.dispatch("auth/initAuth");

attemptToAuthoriseTokens();

Vue.config.productionTip = false;

// Register a global custom directive called `v-focus`
Vue.directive("focus", {
  // When the bound element is inserted into the DOM...
  // eslint-disable-next-line prettier/prettier
  inserted: function (el) {
    // Focus the element
    el.focus();
  }
});
