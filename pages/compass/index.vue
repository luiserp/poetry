<template>
  <div>
    <NuxtLayout>
        <section class="flex items-center align-middle h-[80vh]">
            <div class="w-96 h-96 mx-auto">
                <Compass />
            </div>
        </section>
    </NuxtLayout>
  </div>
</template>

<script setup>
import Compass from "@/components/Compass.vue";

</script>

<style lang="scss" scoped></style>
