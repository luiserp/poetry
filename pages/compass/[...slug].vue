<template>
  <NuxtLayout name="compass">
    <ContentDoc v-slot="data">
      
          <p
            v-for="paragraph in data.doc.content"
            class="select-none text-xl leading-10"
          >
            {{ paragraph }}
          </p>

    </ContentDoc>
  </NuxtLayout>
</template>

<script setup></script>

<style scoped></style>
