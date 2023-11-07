<template>
  <div>
    <NuxtLayout>
      <div class="flex flex-col md:flex-row lg:pb-20">
          <section class="container px-10 mt-10 text-justify leading-8 text-gray-900">
            <slot />
          </section>
          <section class="flex items-center align-middle h-[80vh]">
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
