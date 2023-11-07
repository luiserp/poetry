<template>
  <div>
    <NuxtLayout>
      <div class="flex flex-col md:flex-row lg:pb-20">
          <section class="container px-10 mt-10 text-justify leading-8 text-gray-900 p-10 border-solid border bg-gray-50 shadow-sm rounded-lg mx-4 w-[90%] min-h-screen">
            <slot />
          </section>
          <section class="flex items-center align-middle border-solid border bg-gray-50 shadow-sm rounded-lg mx-4 mt-10">
            <div class="w-96 h-96 mx-auto">
              <Compass />
            </div>
          </section>
      </div>
    </NuxtLayout>
  </div>
</template>

<script setup>
import Compass from "@/components/Compass.vue";
</script>

<style lang="scss" scoped></style>
