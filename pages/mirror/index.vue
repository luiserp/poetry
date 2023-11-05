<template>
  <NuxtLayout name="normal">
    <div class="scene mt-8" @mousemove="updateMagic" @wheel="increaseDecrease">
      <div
        ref="text"
        @scroll="updateScroll"
        class="overflow-y-scroll h-[100%] p-40 z-index-scroll"
      >
        <p class="select-none">
          Había empezado a leer la novela unos días antes. La abandonó por
          negocios urgentes, volvió a abrirla cuando regresaba en tren a la
          finca; se dejaba interesar lentamente por la trama, por el dibujo de
          los personajes. Esa tarde, después de escribir una carta a su
          apoderado y discutir con el mayordomo una cuestión de aparcerías,
          volvió al libro en la tranquilidad del estudio que miraba hacia el
          parque de los robles. Arrellanado en su sillón favorito, de espaldas a
          la puerta que lo hubiera molestado como una irritante posibilidad de
          intrusiones, dejó que su mano izquierda acariciara una y otra vez el
          terciopelo verde y se puso a leer los últimos capítulos. Su memoria
          retenía sin esfuerzo los nombres y las imágenes de los protagonistas;
          la ilusión novelesca lo ganó casi enseguida. Gozaba del placer casi
          perverso de irse desgajando línea a línea de lo que lo rodeaba, y
          sentir a la vez que su cabeza descansaba cómodamente en el terciopelo
          del alto respaldo, que los cigarrillos seguían al alcance de la mano,
          que más allá de los ventanales danzaba el aire del atardecer bajo los
          robles. Palabra a palabra, absorbido por la sórdida disyuntiva de los
          héroes, dejándose ir hacia las imágenes que se concertaban y adquirían
          color y movimiento, fue testigo del último encuentro en la cabaña del
          monte. Primero entraba la mujer, recelosa; ahora llegaba el amante,
          lastimada la cara por el chicotazo de una rama. Admirablemente
          restañaba ella la sangre con sus besos, pero él rechazaba las
          caricias, no había venido para repetir las ceremonias de una pasión
          secreta, protegida por un mundo de hojas secas y senderos furtivos. El
          puñal se entibiaba contra su pecho, y debajo latía la libertad
          agazapada. Un diálogo anhelante corría por las páginas como un arroyo
          de serpientes, y se sentía que todo estaba decidido desde siempre.
          Hasta esas caricias que enredaban el cuerpo del amante como queriendo
          retenerlo y disuadirlo, dibujaban abominablemente la figura de otro
          cuerpo que era necesario destruir. Nada había sido olvidado:
          coartadas, azares, posibles errores. A partir de esa hora cada
          instante tenía su empleo minuciosamente atribuido. El doble repaso
          despiadado se interrumpía apenas para que una mano acariciara una
          mejilla. Empezaba a anochecer.
        </p>
        <p class="select-none">
          Sin mirarse ya, atados rígidamente a la tarea que los esperaba, se
          separaron en la puerta de la cabaña. Ella debía seguir por la senda
          que iba al norte. Desde la senda opuesta él se volvió un instante para
          verla correr con el pelo suelto. Corrió a su vez, para petándose en
          los árboles y los setos, hasta distinguir en la bruma malva del
          crepúsculo la alameda que llevaba a la casa. Los perros no debían
          ladrar, y no ladraron. El mayordomo no estaría a esa hora, y no
          estaba. Subió los tres peldaños del porche y entró. Desde la sangre
          galopando en sus oídos le llegaban las palabras de la mujer: primero
          una sala azul, después una galería, una escalera alfombrada. En lo
          alto, dos puertas. Nadie en la primera habitación, nadie en la
          segunda. La puerta del salón, y entonces el puñal en la mano, la luz
          de los ventanales, el alto respaldo de un sillón de terciopelo verde,
          la cabeza del hombre en el sillón leyendo una novela.
        </p>
      </div>

      <div ref="magic" class="magic"></div>
    </div>
  </NuxtLayout>
</template>

<script setup>
import { ref } from "vue";

const magic = ref(null);
const text = ref(null);
const deltaY = ref(0);

function updateMagic(e) {
  if (magic.value && text.value) {
    magic.value.style.left = e.pageX - magic.value.offsetWidth / 2 + "px";
    magic.value.style.top = e.pageY - magic.value.offsetHeight / 2 + "px";
    magic.value.style.height =
      e.pageY - magic.value.offsetHeight / 2 + deltaY.value + "px";
    magic.value.style.width =
      e.pageY - magic.value.offsetHeight / 2 + deltaY.value + "px";
  }
}

function increaseDecrease(e) {
  // const percentage = Math.round(text.value.scrollTop / text.value.scrollHeight * 100);

  const factor = 0.1;
  deltaY.value += e.deltaY * factor;

  if (deltaY.value < 0) {
    deltaY.value = 0;
  }

  if (deltaY.value > text.value.scrollHeight) {
    deltaY.value = text.value.scrollHeight;
  }

  updateMagic(e);
}
</script>
<style scoped>
*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}
.scene {
  position: relative;
  height: 100vh;
  background: white;
  text-align: center;
  overflow: hidden;
}
p {
  color: white;
  position: relative;
  z-index: 10;
}
.magic {
  z-index: 5;
  position: absolute;
  min-width: 20px;
  min-height: 20px;
  width: 0rem;
  height: 0rem;
  background: url("img/park/2.jpeg") 1024px 1024px fixed;
    /* Center and scale the image nicely */
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 50%;
  transition: height 50ms ease;
  transition: width 50ms ease;
  /* mix-blend-mode: difference; */
  box-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.636);
}
.check-out {
  z-index: 100;
  position: absolute;
  bottom: 1rem;
  left: 50%;
  transform: translateX(-50%);
  font-size: 2rem;
  color: #fff;
  font-family: test;
}
a {
  color: rgba(255, 170, 170, 1);
}

::-webkit-scrollbar {
  width: 0.5rem;
}
</style>
