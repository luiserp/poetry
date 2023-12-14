<template>
  <NuxtLayout>
    <section
      class="container px-10 mt-6 text-justify leading-8 text-gray-900 p-10 border-solid border bg-gray-50 shadow-sm rounded-lg mx-4 w-[90%] min-h-screen space-y-4"
      data-aos="fade-up"
    >
      <h2 class="text-lg font-semibold">
        “Rayuela” de Julio Cortázar. 1963
      </h2>
      <p class="select-none text-lg leading-10">

      Rayuela constituye uno de esos fenómenos literarios singulares, en el
      entorno cultural latinoamericano y universal del siglo XX. Construida a lo
      largo de varios años, sus comienzos ni siquiera fueron los de una novela,
      sino más bien escritos sueltos, encargados de plasmar la vivencialidad
      existencial de Julio Cortázar en los años de la década del 50, mientras
      vivía en París. (Cortázar 204).
      <br />

      De cierta manera Rayuela es un serio absurdo, es un juego textual, que,
      como la propia rayuela infantil, te va reconfigurando de diversas maneras
      el mundo ficcional en una especie de salto permanente. Es una ruptura con
      las convenciones del lenguaje y del propio género de la novela, es un
      fabular permanente que no permite discernir el centro y los contornos o
      las posibilidades infinitas del inicio y el final, un laberinto bien
      fraguado, cuyos cimientos culturales llevaran al lector por la odisea
      humana de la música, la pintura, la filosofía o la propia literatura, es
      sin dudas, una metafísica de la vida. (Barrenechea 552)
      <br />

      Los personajes principales de Rayuela, Horacio Oliveira y la Maga,
      constituyen el epítome de la angustia, de la búsqueda constante de
      respuestas de varias generaciones, ante una modernidad y sus diferentes
      facetas muchas veces contradictorias. Hay cierto individualismo en
      Rayuela, así representado en el personaje de Horacio, quien siempre
      antepone su yo al otro y así queda reflejado a lo largo del texto.
      (Cortázar 212)
      <br />

      Concebida desde una perspectiva lúdica a modo de juego muy serio, la obra
      consta de 155 capítulos, y puede leerse de dos maneras según el propio
      Julio Cortázar. La primera, lineal y tradicional va desde el capítulo 1
      hasta el capítulo 56, mientras que la otra manera comienza en el capítulo
      73 y seguiría otra línea desordenada propuesta por su autor. Como
      propuesta al lector-jugador le traemos una tercera manera de leer la
      antinovela o contranovela como un estímulo para que, a su vez, realice su
      propia propuesta de lectura y participe de la experiencia en la doble
      condición de autor-lector. De esta forma, en lugar de cuadros dibujados
      con tiza, el autor-lector puede hacer los saltos entre capítulos según lo
      desee mediante la selección de varias opciones a su disposición en el
      texto.
      <br />
      <br />
      <h2 class="font-semibold text-lg">Bibliografía</h2>
      Cortázar, Julio. Clases de literatura. Berkeley, 1980. Alfaguara, 2013.
      <br />
      Barrenechea, Ana María. ¨Génesis y circunstancias¨, en la edición crítica
      de Rayuela de Julio Cortázar, coordinadores J. Ortega y S. Yurkievich,
      Asociación Archivos de la Literatura Latinoamericana, del Caribe y
      Africana del Siglo XX, 1991, pp. 551-570.
      <br />
      </p>

      
      <h2 class="text-lg font-semibold text-center">
        ¿Por donde te gustaría empezar?
      </h2>

      <div class="flex space-x-4 justify-center">
        <NuxtLink to="/rayuela/98">
          <Button> 98 </Button>
        </NuxtLink>
        <NuxtLink to="/rayuela/73">
          <Button> 73 </Button>
        </NuxtLink>
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
