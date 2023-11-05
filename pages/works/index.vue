<template>
  <NuxtLayout>
    <div class="container p-10 bg-gray-50 ">
      <ContentList path="/works">
        <template #default="{ list }">
          <div
            class="mt-8"
          >
            <NuxtLink
              v-for="(article, index) in list"
              :key="article._path"
              :href="article._path"
              class="group"
            >
              <div class="flex gap-4 hover:scale-105 w-[60%] transition-all duration-300">
                <div
                  class="aspect-h-1 aspect-w-1 max-h-96 max-w-96 overflow-hidden xl:aspect-h-8 xl:aspect-w-7"
                >
                  <img
                    :src="article.image"
                    :alt="article.title"
                    class="object-cover"
                  />
                </div>
                <div>
                  <h3 class="text-lg font-medium text-gray-900">
                    {{ article.title }}
                  </h3>
                  <p class="mt-1 text-gray-700">
                    {{ article.description }}
                  </p>
                </div>
              </div>
            </NuxtLink>
          </div>
        </template>

        <template #not-found>
          <div class="flex flex-col items-center justify-center h-screen gap-6">
            <h1 class="text-6xl font-bold">Opps!!!</h1>
            <h2 class="text-2xl font-bold">No hay ninguna obra todavia</h2>
            <NuxtLink to="/" class="mt-8 text-blue-500 hover:underline">
              Ir al inicio
            </NuxtLink>
          </div>
        </template>
      </ContentList>
    </div>
  </NuxtLayout>
</template>

<script setup>
import Card from "~/components/Core/Card/Card.vue";
import CardBody from "~/components/Core/Card/CardBody.vue";
import CardHeader from "~/components/Core/Card/CardHeader.vue";
</script>
