<template>
  <NuxtLayout>

    <template #navbar>
      <div class="container absolute left-2/4 z-50 mx-auto -translate-x-2/4 p-4">
        <Navbar></Navbar>
      </div>
    </template>

    <ContentDoc v-slot="data">
        <div
          class="scene mt-8"
          @mousemove="updateMagic"
          @wheel="increaseDecrease"
        >
          <div
            ref="text"
            class="overflow-y-scroll h-[100vh] p-40 space-y-4"
          >
            <p 
              v-for="paragraph in data.doc.content"
              class="select-none text-2xl">{{ paragraph }}</p>
          </div>

          <div 
            ref="magic" 
            class="magic"
            :style="`background-image: url(${data.doc.image})`"
            ></div>
        </div>
    </ContentDoc>
  </NuxtLayout>
</template>

<script setup>
import { ref } from "vue";
import Navbar from '~/components/Core/Navbar/Navbar.vue';

const magic = ref(null);
const text = ref(null);
const deltaY = ref(0);

function updateMagic(e) {
  console.log(e);
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
  cursor: none;
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

::-webkit-scrollbar {
  width: 0.5rem;
  height: 0.5rem;
  background: #fff;
}
</style>
