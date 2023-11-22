<template>
  <NuxtLayout>
    <section
      class="container px-10 mt-6 text-justify leading-8 text-gray-900 p-10 invert-text border-solid border bg-gray-50 shadow-sm rounded-lg mx-4 w-[90%] min-h-screen space-y-4"
      data-aos="fade-up"
    >
      <h2 class="text-lg font-semibold invert-text">Diario de Alina Reyes</h2>
      <p class="select-none text-lg leading-10 invert-text">12 de enero</p>
      <p class="select-none text-lg leading-10 invert-text">
        Anoche fue otra vez, yo tan cansada de pulseras y farándulas, de pink
        champagne y la cara Renato Viñes, oh esa cara de foca balbuciante, de
        retrato de Doran Gray a lo último. Me acosté con gusto a bombón de
        menta, al Boogie del Banco Rojo, a mamá bostezada y cenicienta (como
        queda ella a la vuelta de las fiestas, cenicienta y durmiéndose, pescado
        enormísimo y tan no ella.)
      </p>

      <p class="select-none text-lg leading-10 invert-text">
        Nora que dice dormirse con luz, con bulla, entre las urgidas crónicas de
        su hermana a medio desvestir. Qué felices son, yo apago las luces y las
        manos, me desnudo a gritos de lo diurno y moviente, quiero dormir y soy
        una horrible campana resonando, una ola, la cadena que Rex arrastra toda
        la noche contra los ligustros. Now I lay me down to sleep... Tengo que
        repetir versos, o el sistema de buscar palabras con a, después con a y
        e, con las cinco vocales, con cuatro. Con dos y una consonante (ala,
        ola), con tres consonantes y una vocal(tras, gris) y otra vez versos, la
        luna bajó a la fragua con su polisón de nardos, el niño la mira mira, el
        niño la está mirando. Con tres y tres alternadas, cábala, laguna,
        animal; Ulises, ráfaga, reposo.
      </p>
      <p class="select-none text-lg leading-10 invert-text">
        Así paso horas: de cuatro, de tres y dos, y más tarde palíndromos. Los
        fáciles, salta Lenin el Atlas; amigo, no gima; los más difíciles y
        hermosos, átate, demoniaco Caín o me delata; Anás usó tu auto Susana. O
        los preciosos anagramas: Salvador Dalí, Avida Dollars; Alina Reyes, es
        la reina y... Tan hermoso, éste, porque abre un camino, porque no
        concluye. Porque la reina y...
      </p>
      <p class="select-none text-lg leading-10 invert-text">
        No, horrible. Horrible porque abre camino a esta que no es la reina, y
        que otra vez odio de noche. A esa que es Alina Reyes pero no la reina
        del anagrama; que será cualquier cosa, mendiga en Budapest, pupila de
        mala casa en Jujuy o sirvienta en Quetzaltenango, cualquier lejos y no
        reina. Pero sí Alina Reyes y por eso fue otra vez, sentirla y el odio.
      </p>
    </section>
  </NuxtLayout>
</template>

<script setup>
import { ref } from "vue";

useHead({
  title: "La lejana",
});

const show = ref(false);
const text = ref("");
const option = ref("");

function showOption(o) {
  const map = {
    a: "Y cien años han pasado y las previsiones de Borges se han hecho realidad, no solo el inglés, el francés y el español desaparecieron sino todas las demás lenguas también y dando lugar al idioma sin sustantivos y verbos impersonales de Tlön.",
    b: "Y cien años han pasado y Borges no pudo haber estado más equivocado en sus predicciones. Aunque se intentó introducir el idioma de Tlön, su falta de substantivos dificultó su asimilación y poco a poco se convirtió en lengua muerta.",
    c: "Y cien años han pasado y las previsiones de Borges se han hecho realidad, ahora las personas que habitan este planeta se han olvidado de su antigua identidad de “seres Humanos” y se hacen llamar simplemente Tlönistas tanto hombres como mujeres pues ya no existe alguna diferencia entre ellos. ",
  };

  option.value = o;
  text.value = map[o];

  show.value = true;
}
</script>

<style lang="scss" scoped>
.invert-text {
  -moz-transform: scale(-1, 1);
  -webkit-transform: scale(-1, 1);
  -o-transform: scale(-1, 1);
  -ms-transform: scale(-1, 1);
  transform: scale(-1, 1);
}
</style>
