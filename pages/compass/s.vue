<template>
  <NuxtLayout>
    <section
      class="container px-10 mt-6 text-justify leading-8 text-gray-900 p-10 border-solid border bg-gray-50 shadow-sm rounded-lg mx-4 w-[90%] min-h-screen"
    >
      <p class="select-none text-xl leading-10">
        El {{ maleOrder }} crimen ocurrió el tres de noviembre en las afuera del centro de
        la capital. Era el atardecer y uno de habitantes vio de lejos un cuerpo
        acostado en la acera. El rostro del cuerpo muerto tenía una cara de
        terror. Le habían cortado la cabeza y le habían apuñalado el estómago.
        En la calle, junto al rostro habían dibujado un triángulo, un rombo y un
        círculo, pero dentro del triángulo había unas letras escritas con tiza
        de color rojo. Esa madrugada Lönnrot y Treviranus se dirigieron a la
        escena del crimen. Al llegar a la escena, la policía ya había
        identificado al muerto, pero el cuerpo empezó a flotar en dirección al
        Sur. Era Pilar Riaca, una mujer de fama en los antiguos suburbios del
        Sur que había ascendido al Parlamento, para después convertirse en una
        rufiana. Pilar era la última representante de un grupo de criminales que
        tenía poder en la ciudad. Las palabras en el triángulo eran las
        siguientes: 
      </p>
      <p class="select-none text-xl leading-10">La {{ femaleOrder }} letra del nombre ha sido articulada</p>

      <NuxtLink
        :to="{
          path: '/compass',
          hash: '#' + backQuery,
        }"
      >
        <Button class="mt-10"> Volver </Button>
      </NuxtLink>
    </section>
  </NuxtLayout>
</template>

<script setup>
import Button from "~/components/Core/Button/Button.vue";
import {ref, computed} from "vue";
import useOrder from "@/composables/useOrder.js";

const route = useRoute();
const backQuery = ref(route.query.link);
const {maleOrder, femaleOrder} = useOrder(backQuery.value);

</script>

<style lang="scss" scoped></style>
