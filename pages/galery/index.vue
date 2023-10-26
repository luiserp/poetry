<template>
  <NuxtLayout>
      <ContentList path="/galery">
        <template #default="{ list }">
          <div
            class="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8"
          >
            <NuxtLink
              v-for="article in list"
              :key="article._path"
              :href="article._path"
              class="group"
            >
              <div
                class="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7"
              >
                <img
                  :src="article.image"
                  :alt="article.title"
                  class="h-full w-full object-cover object-center group-hover:opacity-75"
                />
              </div>
              <h3 class="mt-4 text-sm text-gray-700">
                {{ article.title }}
              </h3>
              <p class="mt-1 text-lg font-medium text-gray-900">
                {{ article.description }}
              </p>
            </NuxtLink>
          </div>
        </template>

        <template #not-found>
          <p>No articles found.</p>
        </template>
      </ContentList>
  </NuxtLayout>
</template>

<script setup></script>
