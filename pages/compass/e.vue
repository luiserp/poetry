<template>
  <NuxtLayout>
    <section
      class="container px-10 mt-6 text-justify leading-8 text-gray-900 p-10 border-solid border bg-gray-50 shadow-sm rounded-lg mx-4 w-[90%] min-h-screen"
    >
      <p class="select-none text-xl leading-10">
        El {{maleOrder}} crimen ocurrió la noche del tres de enero, en el más
        desamparado y vacío de los huecos suburbios occidentales de la capital.
        Hacia el amanecer, uno de los gendarmes que vigilan a caballo esas
        soledades vio en el umbral de una antigua pintorería un hombre
        emponchado, yacente. El duro rostro estaba como enmascarado de sangre;
        una puñalada profunda le había rajado el pecho. En la pared, sobre los
        rombos amarillos y rojos, había unas palabras en tiza. El gendarme las
        deletreó... Esa tarde, Treviranus y Lönnrot se dirigieron a la remota
        escena del crimen. A izquierda y derecha del automóvil, la ciudad se
        desintegraba; crecía el firmamento y ya importaban poco las casas y
        mucho un horno de ladrillos o un álamo. Llegaron a su pobre destino: un
        callejón final de tapias rosadas que parecían reflejar de algún modo la
        desaforada puesta de sol. El muerto ya había sido identificado. Era
        Daniel Simó Azevedo, hombre de alguna fama en los antiguos arrabales del
        Norte, que había ascendido de carrero a guapo electoral, para degenerar
        después en ladrón y hasta en delator. (El singular estilo de su muerte
        les pareció adecuado: Azevedo era el último representante de una
        generación de bandidos que sabía el manejo del puñal, pero no del
        revólver.) Las palabras en tiza eran las siguientes:
      </p>
      <p class="select-none text-xl leading-10">
        La {{femaleOrder}} letra del Nombre ha sido articulada.
      </p>

      <NuxtLink to="/compass">
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
