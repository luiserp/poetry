<template>
  <NuxtLayout>
    <div class="container p-10">
      <ContentList path="/works">
        <template #default="{ list }">
          <div
            class="flex space-y-4 flex-col"
          >
            <NuxtLink
              v-for="article in list"
              :key="article._path"
              :href="article._path"
            >
              <div class="flex gap-8 hover:scale-105 w-[60%] transition-all duration-300">
                <div
                  class="max-h-[20%] max-w-[20%] overflow-hidden xl:aspect-h-8 xl:aspect-w-7"
                >
                  <img
                    :src="article.card"
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

<script setup></script>
