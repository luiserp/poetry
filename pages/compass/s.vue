<template>
  <NuxtLayout>
    <section
      class="container px-10 mt-6 text-justify leading-8 text-gray-900 p-10 border-solid border bg-gray-50 shadow-sm rounded-lg mx-4 w-[90%] min-h-screen"
    >
      <p class="select-none text-xl leading-10"></p>

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
import Compass from "@/components/Compass.vue";
import Button from "~/components/Core/Button/Button.vue";
</script>

<style lang="scss" scoped></style>
