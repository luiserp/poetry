<template>
  <NuxtLayout>
    <section
      class="container px-10 mt-6 text-justify leading-8 text-gray-900 p-10 border-solid border bg-gray-50 shadow-sm rounded-lg mx-4 w-[90%] min-h-screen"
    >
      <p class="select-none text-xl leading-10">
        El {{maleOrder}} crimen ocurrió la noche del tres de febrero. Poco antes de la
        una, el teléfono resonó en la oficina del comisario Treviranus. Con
        ávido sigilo, habló un hombre de voz gutural; dijo que se llamaba
        Ginzberg (o Ginsburg), y que estaba dispuesto a comunicar, por una
        remuneración razonable, los hechos de los dos sacrificios de Azevedo y
        Yarmolinsky. Una discordia de silbidos y de cornetas ahogó la voz del
        delator. Después, la comunicación se cortó. Sin rechazar la posibilidad
        de una broma (al fin, estaban en carnaval), Treviranus indagó que le
        habían hablado desde el Liverpool House, taberna de la Rue de Toulon
        —esa calle salobre en la que conviven el cosmorama y la lechería, el
        burdel y los vendedores de biblias. Treviranus habló con el patrón. Este
        (Black Finnegan, antiguo criminal irlandés, abrumado y casi anulado por
        la decencia) le dijo que la última persona que había empleado el
        teléfono de la casa era un inquilino, un tal Gryphius, que acababa de
        salir con unos amigos. Treviranus fue enseguida al Liverpool House. El
        patrón le comunicó lo siguiente: Hace ocho días, Gryphius había tomado
        pieza en los altos del bar. Era un hombre de rasgos afilados, de
        nebulosa barba gris, trajeado pobremente de negro; Finnegan (que
        destinaba esa habitación a un empleo que Treviranus adivinó) le pidió un
        alquiler sin duda excesivo; Gryphius inmediatamente pagó la suma
        estipulada. No salía casi nunca; cenaba y almorzaba en su cuarto; apenas
        si le conocían la cara en el bar. Esa noche, bajó a telefonear al
        despacho de Finnegan. Un cupé cerrado se detuvo ante la taberna. El
        cochero no se movió del pescante; algunos parroquianos recordaron que
        tenía máscara de oso. Del cupé bajaron dos arlequines; eran de reducida
        estatura y nadie pudo no observar que estaban muy borrachos. Entre
        balidos de cornetas, irrumpieron en el escritorio de Finnegan; abrazaron
        a Gryphius, que pareció reconocerlos, pero que les respondió con
        frialdad; cambiaron unas palabras en yiddish —él en voz baja, gutural,
        ellos con las voces falsas, agudas— y subieron a la pieza del fondo. Al
        cuarto de hora bajaron los tres, muy felices; Gryphius, tambaleante,
        parecía tan borracho como los otros. Iba, alto y vertiginoso, en el
        medio, entre los arlequines enmascarados. (Una de las mujeres del bar
        recordó los losanges amarillos, rojos y verdes.) Dos veces tropezó; dos
        veces lo sujetaron los arlequines. Rumbo a la dársena inmediata, de agua
        rectangular, los tres subieron al cupé y desaparecieron. Ya en el
        estribo del cupé, el último arlequín garabateó una figura obscena y una
        sentencia en una de las pizarras de la recova.
      </p>
      <p class="select-none text-xl leading-10">
        Treviranus vio la sentencia. Era casi previsible; decía:
      </p>
      <p class="select-none text-xl leading-10">
        La {{ femaleOrder }} de las letras del Nombre ha sido articulada.
      </p>

      <NuxtLink :to="{
        path: '/compass',
        hash: '#' + backQuery,
      }">
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
