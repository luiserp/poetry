<template>
  <NuxtLayout>
    <section
      class="container px-10 mt-6 text-justify leading-8 text-gray-900 p-10 border-solid border bg-gray-50 shadow-sm rounded-lg mx-4 w-[90%] min-h-screen"
    >
      <p class="select-none text-xl leading-10">
        El {{ maleOrder }} crimen ocurrió en el Hôtel du Nord, ese alto prisma que
        domina el estuario cuyas aguas tienen el color del desierto. A esa torre
        (que muy notoriamente reúne la aborrecida blancura de un sanatorio, la
        numerada divisibilidad de una cárcel y la apariencia general de una casa
        mala) arribó el día tres de diciembre el delegado de Podólsk al Tercer
        Congreso Talmúdico, doctor Marcelo Yarmolinsky, hombre de barba gris y
        ojos grises. Nunca sabremos si el Hôtel du Nord le agradó: lo aceptó con
        la antigua resignación que le había permitido tolerar tres años de
        guerra en los Cárpatos y tres mil años de opresión y de pogroms. Le
        dieron un dormitorio en el piso R, frente a la suite que no sin
        esplendor ocupaba el Tetraca de Galilea. Yarmolinsky cenó, postergó para
        el día siguiente el examen de la desconocida ciudad, ordenó en un
        placard sus muchos libros y sus muy pocas prendas, y antes de medianoche
        apagó la luz. (Así lo declaró el chauffeur del Tetrarca, que dormía en
        la pieza contigua.) El cuatro, a las 11 y 3 minutos A.M., lo llamó por
        teléfono un redactor de la Yidische Zaitung; el doctor Yarmolinsky no
        respondió; lo hallaron en su pieza, ya levemente oscura la cara, casi
        desnudo bajo una gran capa anacrónica. Yacía no lejos de la puerta que
        daba al corredor; una puñalada profunda le había partido el pecho. Un
        par de horas después, en el mismo cuarto, entre periodistas, fotógrafos
        y gendarmes, el comisario Treviranus y Lönnrot debatían con serenidad el
        problema.
      </p>
      <p class="select-none text-xl leading-10">
        —No hay que buscarle tres pies al gato —decía Treviranus, blandiendo un
        imperioso cigarro—. Todos sabemos que el Tetrarca de Galilea posee los
        mejores zafiros del mundo. Alguien, para robarlos, habrá penetrado aquí
        por error. Yarmolinsky se ha levantado; el ladrón ha tenido que matarlo.
        ¿Qué le parece?
      </p>
      <p class="select-none text-xl leading-10">
        —Posible, pero no interesante —respondió Lönnrot—. Usted replicará que
        la realidad no tiene la menor obligación de ser interesante. Yo le
        replicaré que la realidad puede prescindir de esa obligación, pero no
        las hipótesis. En la que usted ha improvisado interviene copiosamente el
        azar. He aquí un rabino muerto; yo preferiría una explicación puramente
        rabínica, no los imaginarios percances de un imaginario ladrón.
      </p>
      <p class="select-none text-xl leading-10">
        Treviranus repuso con mal humor:
      </p>
      <p class="select-none text-xl leading-10">
        —No me interesan las explicaciones rabínicas; me interesa la captura del
        hombre que apuñaló a este desconocido.
      </p>
      <p class="select-none text-xl leading-10">
        —No tan desconocido —corrigió Lönnrot —. Aquí están sus obras
        completas—. Indicó en el placard una fila de altos volúmenes; una
        Vindicación de la cábala; un Examen de la filosofía de Robert Fludd; una
        traducción literal del Sepher Yezirah; una Biografía del Baal Shem; una
        Historia de la secta de los Hasidim; una monografía (en alemán) sobre el
        Tetragrámaton; otra, sobre la nomenclatura divina del Pentateuco. El
        comisario los miró con temor, casi con repulsión. Luego, se echó a reír.
      </p>
      <p class="select-none text-xl leading-10">
        —Soy un pobre cristiano —repuso—. Llévese todos esos mamotretos, si
        quiere; no tengo tiempo que perder en supersticiones judías.
      </p>
      <p class="select-none text-xl leading-10">
        —Quizás este crimen pertenece a la historia de las supersticiones judías
        —murmuró Lönnrot.
      </p>
      <p class="select-none text-xl leading-10">
        —Como el cristanismo —se atrevió a completar el redactor de la Yidische
        Zaitung. Era miope, ateo y muy tímido.
      </p>
      <p class="select-none text-xl leading-10">
        Nadie le contestó. Uno de los agentes había encontrado en la pequeña
        máquina de escribir una hoja de papel con esta sentencia inconclusa
      </p>
      <p class="select-none text-xl leading-10">
        La {{ femaleOrder }} letra del Nombre ha sido articulada.
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
