<template>
  <div>
    <div class="bg-gray-100 min-h-screen pb-2">
      <!-- Navbar -->
      <slot name="navbar">
        <div
          class="z-50 flex px-10 py-2 bg-gray-100 border-solid border-b shadow-sm"
        >
          <Navbar></Navbar>
        </div>
      </slot>

      <!-- Main -->
      <slot />
    </div>

    <!-- Footer -->
    <slot name="footer">
      <Footer />
    </slot>
  </div>
</template>

<script setup>
import Navbar from "~/components/Core/Navbar/Navbar.vue";
import Footer from "~/components/Footer.vue";
</script>
