<template>
  <NuxtLayout>
    <section
      class="container px-10 mt-6 text-justify leading-8 text-gray-900 p-10 border-solid border bg-gray-50 shadow-sm rounded-lg mx-4 w-[90%] min-h-screen space-y-4"
      data-aos="fade-up"
    >
      <h2 class="text-lg font-semibold text-center">Capítulo 81</h2>

      <p class="select-none text-lg leading-10">
        Lo propio del sofista, según Aristófanes, es inventar razones nuevas.
        <br />
        Procuremos inventar pasiones nuevas, o reproducir las viejas con pareja
        intensidad.
        <br />
        Analizo una vez más esta conclusión, de raíz pascaliana: la verdadera
        creencia está entre la superstición y el libertinaje.
        <br />
        José Lezama Lima, Tratados en La Habana
      </p>

      <div class="flex space-x-4 justify-center">
        <!-- <NuxtLink to="/rayuela/98" class="my-10">
          <Button class="my-10"> 98 </Button>
        </NuxtLink> -->
      </div>
    </section>
  </NuxtLayout>
</template>

<script setup>
import { ref } from "vue";
import Button from "~/components/Core/Button/Button.vue";

useHead({
  title: "Rayuela",
});

const show = ref(false);
const text = ref("");
const option = ref("");
</script>

<style lang="scss" scoped></style>
