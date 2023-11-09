<template>
  <div>
    <NuxtLayout>
      <div class="flex flex-col md:flex-row lg:pb-20">
          <section class="container px-10 mt-6 text-justify leading-8 text-gray-900 p-10 border-solid border bg-gray-50 shadow-sm rounded-lg mx-4 w-[90%] min-h-screen">
            <slot />
          </section>
          <section class="flex max-h-96 items-center align-middle border-solid border bg-gray-50 shadow-sm rounded-lg mx-4 mt-6">
            <div class="max-w-96 max-h-96 mx-auto p-6">
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
