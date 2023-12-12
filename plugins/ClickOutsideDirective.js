import vClickOutside from "click-outside-vue3";

export default defineNuxtPlugin((app) => {
  app.vueApp.use(vClickOutside);
});
