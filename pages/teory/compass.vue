<template>
  <NuxtLayout>
    <section
      class="container px-10 mt-6 text-justify leading-8 text-gray-900 p-10 border-solid border bg-gray-50 shadow-sm rounded-lg mx-4 w-[90%] min-h-screen space-y-4"
      data-aos="fade-up"
    >
      <h2 class="font-semibold text-lg">
        “La muerte y la brújula” de Jorge Luis Borges. 1942.
      </h2>
      <p class="select-none text-lg leading-10">
        “La muerte y la brújula” de Jorge Luis Borges, es un cuento policial,
        que nos recuerdan a las gloriosas novelas policiacas de Agatha Christie.
        Por ende, este cuento contiene aspectos de investigación de crímenes
        vinculados con la ficción y el juego lúdico, que se reconoce en los
        cuentos de Borges. Al parecer el cuento tiene un lectura lógica y lineal
        de los sucesos, en la cual el lector real, se guía por la lectura del
        detective en la búsqueda de la resolución del misterio. Sin embargo, el
        relato policial en este cuento se invierte. No es el detective quien
        logra interpretar las huellas dejadas por el asesino; si no que el
        asesino indica las huellas para que el detective se confunda. Al final
        también el autor logra confundir a los lectores.
      </p>
      <p class="select-none text-lg leading-10">
        Por lo tanto, con dicha inversión del relato policial, surge la idea de
        utilizar la teoría de la hipertextualidad tecnológica para lectura del
        cuento en la página web. Dicha teoría permite reconfigurar la forma en
        la que el lector lee un texto lineal, por medio de nexos que lo conectan
        con otros textos entre sí. Esta reconfiguración posibilita la
        participación de él dentro del texto y la oportunidad de establecer su
        propia carta de navegación. Por esta razón, en el cuento el lector podrá
        navegar dentro de la “brújula” y podrá seleccionar un punto cardinal que
        prefiera. Estos puntos cardinales lo llevaran a otro texto, y en él se
        encontrará un crimen que es parte de la historia. Por ello, a medida que
        el lector continue la lectura, podrá redirigirse en la brújula y podrá
        escoger otros crímenes. Este ejercicio posibilita que el lector tenga
        diferentes experiencias al leer el cuento. Él siempre podrá elegir. Él
        creará su forma de leer los crímenes.
      </p>
      <p class="select-none text-lg leading-10">
        De igual manera, en el punto cardinal sur, se escribió otro crímen
        distinto al cuento. La idea era utilizar los mismos pensamientos de
        realidad y ficción, tal como lo realiza Borges. Por lo tanto, al
        escribir dicho crimen, nos hemos considerado coautores del cuento.
        Además, se han utilizado las mismas estrategias que utiliza el asesino
        para dejar huellas y confundir al detective y a los lectores. De esa
        manera el texto no pierde su esencia.
      </p>

      <h2 class="font-semibold text-lg">Bibliografía</h2>
      <p class="select-none text-lg leading-10">
        Bueno, Lourdes. “La dialética autor/lector en la muerte y brújula, de
        Borges. Un análisis narratológico”. Anuario de estudios filológicos. No.
        20, 199, pp. 9-32,
        https://dialnet.unirioja.es/servlet/articulo?codigo=58895
      </p>
      <p class="select-none text-lg leading-10">
        Piedrahita Lara, Fáber. “El concepto de hipertexto desde la literatura”
        Revista Q, educación, comunicación y tecnología.No. 1(1), 2006, pp1-17,
        https://repository.upb.edu.co/bitstream/handle/20.500.11912/6467/El%20concepto%20de%20hipertexto%20desde%20la%20literatura.pdf?sequence=1&isAllowed=y
      </p>

      <NuxtLink href="/compass"
        ><Button class="my-6"> Ver obra </Button></NuxtLink
      >
    </section>
  </NuxtLayout>
</template>

<script setup>
import Button from "~/components/Core/Button/Button.vue";

useHead({
  title: 'El Girar De Destinos',
})
</script>

<style lang="scss" scoped></style>
