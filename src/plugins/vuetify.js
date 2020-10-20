import Vue from "vue";
import Vuetify from "vuetify/lib";
import '@mdi/font/css/materialdesignicons.css'

Vue.use(Vuetify);

export default new Vuetify({
  icons:'mdi',
  theme: {
    themes: {
      light: {
        primary: "#63D9A6",
      },
      dark: {
        primary: "#1D9969",
      },
    },
  },
});
