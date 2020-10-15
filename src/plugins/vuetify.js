import Vue from "vue";
import Vuetify from "vuetify/lib";

Vue.use(Vuetify);

export default new Vuetify({
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
