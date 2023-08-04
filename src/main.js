import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "vuetify/styles";
import { createVuetify } from "vuetify";
import "vuetify/dist/vuetify.min.css";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";
import { loadFonts } from "./plugins/webfontloader";

const vuetify = createVuetify({
  components,
  directives,
});

loadFonts();

createApp(App).use(router).use(vuetify).mount("#app");
