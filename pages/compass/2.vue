<template>
  <NuxtLayout>
    <section
      class="container px-10 mt-6 text-justify leading-8 text-gray-900 p-10 border-solid border bg-gray-50 shadow-sm rounded-lg mx-4 w-[90%] min-h-screen"
    >
      <!-- Second -->
      <p class="select-none text-xl leading-10">
        Lönnrot se abstuvo de sonreír. Bruscamente bibliófilo o hebraísta,
        ordenó que le hicieran un paquete con los libros del muerto y los llevó
        a su departamento. Indiferente a la investigación policial, se dedicó a
        estudiarlos. Un libro en octavo mayor le reveló las enseñanzas de Israel
        Baal Shem Tobh, fundador de la secta de los Piadosos; otro, las virtudes
        y terrores del Tetragrámaton, que es el inefable Nombre de Dios; otro,
        la tesis de que Dios tiene un nombre secreto, en el cual está
        compendiado (como en la esfera de cristal que los persas atribuyen a
        Alejandro de Macedonia), su noveno atributo, la eternidad, es decir, el
        conocimiento inmediato de todas las cosas que serán, que son y que han
        sido en el universo. La tradición enumera noventa y nueve nombres de
        Dios; los hebraístas atribuyen ese imperfecto número al mágico temor de
        las cifras pares; los Hasidim razonan que ese hiato señala un centésimo
        nombre. El Nombre Absoluto.
      </p>
      <p class="select-none text-xl leading-10">
        De esa erudición lo distrajo, a los pocos días, la aparición del
        redactor de la Yidische Zaitung. Este quería hablar del asesinato;
        Lönnrot prefirió hablar de los diversos nombres de Dios; el periodista
        declaró en tres columnas que el investigador Erik Lönnrot se había
        dedicado a estudiar los nombres de Dios para dar con el nombre del
        asesino. Lönnrot, habituado a las simplificaciones del periodismo, no se
        indignó. Uno de esos tenderos que han descubierto que cualquier hombre
        se resigna a comprar cualquier libro, publicó una edición popular de la
        Historia de la secta de los Hasidim
      </p>
     

      <!-- First -->
      <div id="first">
        <Button class="mt-10"
          @click="show = true"
        >
          ELIGE NUEVAMENTE EL SIGUIENTE CRIMEN EN LA BRUJULA 
        </Button>
      </div>
      
      <Modal :show="show" @close="show = false">
        <div class="w-[100%] h-80 flex flex-col justify-center items-center">
          <Compass />
        </div>
      </Modal>
    </section>
  </NuxtLayout>
</template>

<script setup>
import Compass from "@/components/Compass.vue";
import Button from "~/components/Core/Button/Button.vue";
import Modal from "~/components/Core/Modal.vue";
</script>

<style lang="scss" scoped></style>
