<template>
  <NuxtLayout>
    <section
      class="container px-10 mt-6 text-justify leading-8 text-gray-900 p-10 border-solid border bg-gray-50 shadow-sm rounded-lg mx-4 w-[90%] min-h-screen space-y-4"
      data-aos="fade-up"
    >
      <p class="select-none text-lg leading-10">
        Aquí doy término a la parte personal de mi narración. Lo demás está en
        la memoria (cuando no en la esperanza o en el temor) de todos mis
        lectores. Básteme recordar o mencionar los hechos subsiguientes, con una
        mera brevedad de palabras que el cóncavo recuerdo general enriquecerá o
        ampliará. Hacia 1944 un investigador del diario The American (de
        Nashville, Tennessee) exhumó en una biblioteca de Memphis los cuarenta
        volúmenes de la Primera Enciclopedia de Tlön. Hasta el día de hoy se
        discute si ese descubrimiento fue casual o si lo consintieron los
        directores del todavía nebuloso Orbís Tertius. Es verosímil lo segundo.
        Algunos rasgos increíbles del Onceno Tomo (verbigracia, la
        multiplicación de los hrönir) han sido eliminados o atenuados en el
        ejemplar de Memphis; es razonable imaginar que esas tachaduras obedecen
        al plan de exhibir un mundo que no sea demasiado incompatible con el
        mundo real. La diseminación de objetos de Tlön en diversos países
        complementaría ese plan...6 El hecho es que la prensa internacional
        voceó infinitamente el "hallazgo". Manuales, antologías, resúmenes,
        versiones literales, reimpresiones autorizadas y reimpresiones piráticas
        de la Obra Mayor de los Hombres abarrotaron y siguen abarrotando la
        tierra. Casi inmediatamente, la realidad cedió en más de un punto. Lo
        cierto es que anhelaba ceder. Hace diez años bastaba cualquier simetría
        con apariencia de orden -el materialismo dialéctico, el antisemitismo,
        el nazismo- para embelesar a los hombres. ¿Cómo no someterse a Tlön, a
        la minuciosa y vasta evidencia de un planeta ordenado? Inútil responder
        que la realidad también está ordenada. Quizá lo esté, pero de acuerdo a
        leyes divinas -traduzco: a leyes inhumanas- que no acabamos nunca de
        percibir. Tlön será un laberinto, pero es un laberinto urdido por
        hombres, un laberinto destinado a que lo descifren los hombres.
      </p>

      <p class="select-none text-lg leading-10">
        El contacto y el hábito de Tlön han desintegrado este mundo. Encantada
        por su rigor, la humanidad olvida y torna a olvidar que es un rigor de
        ajedrecistas, no de ángeles. Ya ha penetrado en las escuelas el
        (conjetural), "idioma primitivo" de Tlön; ya la enseñanza de su historia
        armoniosa (y llena de episodios conmovedores) ha obliterado a la que
        presidió mi niñez; ya en las memorias un pasado ficticio ocupa el sitio
        de otro, del que nada sabemos con certidumbre -ni siquiera que es falso.
        Han sido reformadas la numismática, la farmacología y la arqueología.
        Entiendo que la biología y las matemáticas aguardan también su avatar...
        Una dispersa dinastía de solitarios ha cambiado la faz del mundo. Su
        tarea prosigue. Si nuestras previsiones no erran, de aquí a cien años
        alguien descubrirá los cien tomos de la Segunda Enciclopedia de Tlön.
        Entonces desaparecerán del planeta el inglés y el francés y el mero
        español. El mundo será Tlön. Yo no hago caso, yo sigo revisando en los
        quietos días del hotel de Adrogué una indecisa traducción quevediana
        (que no pienso dar a la imprenta) del Urn Burial de Browne...
      </p>

      <div class="flex space-x-4 justify-center">
        <Button class="my-10" @click="showOption('a')"> A </Button>
        <Button class="my-10" @click="showOption('b')"> B </Button>
        <Button class="my-10" @click="showOption('c')"> C </Button>
      </div>

      <NuxtLink href="/tlon/justification"><Button class=""> Justificacíon </Button></NuxtLink> 

      <Modal :show="show" @close="show = false">
        <div
          class="w-[100%] h-80 flex flex-col justify-center items-center"
          >
        <h2 class="text-lg font-semibold mb-2">Opción: <span class="uppercase"> {{ option }}</span></h2>
          <p class="px-4 select-none text-lg leading-10 text-justify">{{ text }}</p>
      </div>
      </Modal>
    </section>
  </NuxtLayout>
</template>

<script setup>
import Button from "~/components/Core/Button/Button.vue";
import Modal from "~/components/Core/Modal.vue";
import { ref } from "vue";

useHead({
  title: 'Universos De Elección',
})

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

<style lang="scss" scoped></style>
