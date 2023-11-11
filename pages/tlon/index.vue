<template>
  <NuxtLayout>
    <section
      class="container px-10 mt-6 text-justify leading-8 text-gray-900 p-10 border-solid border bg-gray-50 shadow-sm rounded-lg mx-4 w-[90%] min-h-screen"
    >
      <p class="select-none text-xl leading-10">
        Al principio se creyó que Tlön era un mero caos, una irresponsable
        licencia de la imaginación; ahora se sabe que es un cosmos y las íntimas
        leyes que lo rigen han sido formuladas, siquiera en modo
        provisional.Básteme recordar que las contradicciones aparentes del
        Onceno Tomo son la piedra fundamental de la prueba de que existen los
        otros: tan lúcido y tan justo es el orden que se ha observado en él. Las
        revistas populares han divulgado, con perdonable exceso, la zoología y
        la topografía de Tlön; yo pienso que sus
        <Dropdown :options="firstOption" v-model="firstSelect" /> y sus torres
        de <Dropdown :options="secondOption" v-model="secondSelect" /> no merecen, tal vez, la continua atención de todos los
        hombres. Yo me atrevo a pedir unos minutos para su concepto del
        universo. Hume notó para siempre que los argumentos de Berkeley no
        admiten la menor réplica y no causan la menor convicción. Ese dictamen
        es del todo verídico en su aplicación a la tierra; del todo falso en
        Tlön. Las naciones de ese planeta son -congénitamente- idealistas. Su
        lenguaje y las derivaciones de su lenguaje -la religión, las letras, la
        metafísica- presuponen el idealismo. El mundo para ellos no es un
        concurso de objetos en el espacio; es una serie heterogénea de actos
        independientes. Es sucesivo, temporal, no espacial. No hay sustantivos
        en la conjetural Ursprache de Tlön, de la que proceden los idiomas
        "actuales" y los dialectos: hay verbos impersonales, calificados por
        sufijos (o prefijos) monosilábicos de valor adverbial. Por ejemplo: no
        hay palabra que corresponda a la palabra luna, pero hay un verbo que
        sería en español lunecer o lunar. Surgió la luna sobre el río se dice
        hlör u fang axaxaxas mlö o sea en su orden: hacia arriba (upward) detrás
        duradero-fluir luneció. (Xul Solar traduce con brevedad: upa tras
        perfluyue lunó. Upward, behind the onstreaming it mooned.
      </p>
    </section>
  </NuxtLayout>
</template>

<script setup>
import Dropdown from "@/components/Core/Dropdown.vue";
import { ref } from "vue";

const firstOption = [
  { id: 1, name: "tigres transparentes" },
  { id: 2, name: "osos albinos" },
  { id: 3, name: "unicornios amarillos" },
  { id: 4, name: "lagartos gigantes" },
  { id: 4, name: "diminutos elefantes verdes" },
];

const firstSelect = ref(null);

const secondOption = [
  { id: 1, name: "sangre" },
  { id: 2, name: "piedra translúcida" },
  { id: 3, name: "espuma rosa" },
  { id: 4, name: "lava azul" },
];

const secondSelect = ref(null);
</script>

<style lang="scss" scoped></style>
