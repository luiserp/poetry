<template>
  <NuxtLayout>
      <ContentDoc>
        <template #not-found>
            <div class="flex flex-col items-center justify-center h-screen">
                <h1 class="text-6xl font-bold">404</h1>
                <h2 class="text-2xl font-bold">Page not found</h2>
                <NuxtLink to="/" class="mt-8 text-blue-500 hover:underline">
                    Go back home
                </NuxtLink>
            </div>
        </template>
      </ContentDoc>
  </NuxtLayout>
</template>

<script setup></script>
