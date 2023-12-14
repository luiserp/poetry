<template>
  <NuxtLayout>
    <section
      class="container px-10 mt-6 text-justify leading-8 text-gray-900 p-10 invert-text border-solid border bg-gray-50 shadow-sm rounded-lg mx-4 w-[90%] min-h-screen space-y-4"
      data-aos="fade-up"
    >
      <div class="flex justify-between items-end">
        <h2 class="font-semibold text-lg">
          “El jardín de los senderos que se bifurcan” de Jorge Luis Borges. 1941
        </h2>
        <div class="flex gap-2">
          <Button variant="outlined" @click="change" title="Cambiar">
            <LanguageIcon class="w-5 h-5" />
          </Button>
          <Button variant="outlined" @click="original" title="Obra original">
            <DocumentCheckIcon class="w-5 h-5" />
          </Button>
        </div>
      </div>
      <p class="select-none text-lg leading-10" v-html="text_fill"></p>
    </section>
  </NuxtLayout>
</template>

<script setup>
import { DocumentCheckIcon, LanguageIcon } from "@heroicons/vue/24/solid";
import { computed, ref } from "vue";
import Button from "~/components/Core/Button/Button.vue";
import text from "~/public/assets/texto_randomizado.js";
import texto_original from "~/public/assets/texto_original.js";
import verbs from "~/public/assets/verbos.json";

useHead({
  title: "El jardín de senderos que se bifurcan",
});

const text_fill = ref("");
const change = () => {
  let text_new = text;
  while (text_new.includes("<verbo>")) {
    text_new = text_new.replace(
      "<verbo>",
      verbs[Math.floor(Math.random() * verbs.length)]
    );
  }
  text_fill.value = text_new;
};

const original = () => {
  text_fill.value = texto_original;
};

onMounted(() => {
  change();
});
</script>
