<template>
    <div class="scene" @mousemove="updateMagic">
        <h1 class="">Simple magic!</h1>
        <div ref="magic" class="magic"></div>
    </div>
</template>

<script setup>
import { ref } from 'vue'


const magic = ref(null)

function updateMagic(e) {
    magic.value.style.left = e.pageX - magic.value.offsetWidth / 2 + 'px'
    magic.value.style.top = e.pageY - magic.value.offsetHeight / 2 + 'px'
}

</script>

<style scoped>
@font-face {
  src: url('https://s3-us-west-2.amazonaws.com/s.cdpn.io/142996/Anders.ttf');
  font-family: test;
}
*, *:before, *:after {
  box-sizing: border-box;
  margin: 0;
}
.scene {
  position: relative;
  height: 100vh;
  background: #1d1f20;
  padding: 20rem;
  text-align: center;
  overflow: hidden;
}
h1 {
  position: relative;
  font-size: 6rem;
  text-transform: uppercase;
  font-family: test;
  color: #fff;
  z-index: 10;
}
.magic {
  z-index: 5;
  position: absolute;
  top: calc(50% - 10rem);
  left: calc(50% - 10rem);
  width: 20rem;
  height: 20rem;
  background: url('https://media.admagazine.com/photos/618a6549a1fa32def5822e87/master/w_1600%2Cc_limit/76899.jpg') 50% 50% no-repeat fixed;
  background-size: cover;
  border-radius: 50%;
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

  a {
    color: rgba(255,170,170,1);
  }
}
</style>
