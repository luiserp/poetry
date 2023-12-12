<template>
  <footer
    aria-labelledby="footer-heading"
    class="border-t border-gray-200 bg-gray-800"
  >
    <h2 id="footer-heading" class="sr-only">Footer</h2>
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div class="py-20">
        <div
          class="grid grid-cols-1 md:grid-flow-col md:auto-rows-min md:grid-cols-12 md:gap-x-8 md:gap-y-16"
        >
          <!-- Image section -->
          <div class="col-span-1 md:col-span-2 lg:col-start-1 lg:row-start-1">
            <!-- <img
              src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
              alt=""
              class="h-8 w-auto"
            /> -->
            <NuxtLink class="text-white" to="/">Poetry</NuxtLink>
          </div>

          <!-- Sitemap sections -->
          <div
            class="col-span-8 mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2 md:col-span-10 md:col-start-3 md:row-start-1 md:mt-0 lg:col-span-11 lg:col-start-2"
          >
            <div
              class="grid grid-cols-1 gap-y-12 sm:col-span-2 sm:grid-cols-2 sm:gap-x-8"
            >
              <div>
                <h3 class="text-sm font-medium text-white">Secciones</h3>
                <ul role="list" class="mt-6 space-y-6 grid grid-cols-2 items-baseline gap-x-4">
                  <li
                    v-for="item in footerNavigation.products"
                    :key="item.name"
                    class="text-sm"
                  >
                    <NuxtLink
                      :href="item.href"
                      class="text-gray-500 hover:text-gray-300"
                      >{{ item.name }}</NuxtLink
                    >
                  </li>
                </ul>
              </div>
              <div>
                <h3 class="text-sm font-medium text-white">Teoría</h3>
                <ul role="list" class="mt-6 space-y-6 grid grid-cols-2 items-baseline gap-x-4">
                  <li
                    v-for="item in footerNavigation.company"
                    :key="item.name"
                    class="text-sm"
                  >
                    <NuxtLink
                      :to="item.href"
                      class="text-gray-500 hover:text-gray-300"
                      >{{ item.name }}</NuxtLink
                    >
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="border-t border-gray-100 py-10 text-center">
        <p class="text-sm text-gray-200">
          &copy; 2023 UWO. All rights reserved.
        </p>
      </div>
    </div>
  </footer>
</template>

<script setup>
const footerNavigation = {
  products: [
    { name: "Imágenes reveladoras", href: "/works" },
    { name: "El Girar de Destinos", href: "/compass" },
    { name: "Universos de Elección", href: "/tlon" },
    { name: "La Lejana", href: "/lejana" },
    { name: "El Jardín verbal", href: "/garden" },
    { name: "Rayuela", href: "/rayuela" },
    { name: "Nosotros", href: "/about" },
    // { name: "Objects", href: "#" },
    // { name: "Home Goods", href: "#" },
    // { name: "Accessories", href: "#" },
  ],
  company: [
    { name: "Universos de Elección", href: "teory/tlon" },
    { name: "El Girar de Destinos", href: "teory/compass" },
    { name: "Rayuela", href: "/rayuela" },
    { name: "La continuidad", href: "/teory/park" },
    { name: "Lejana", href: "/teory/lejana" },
    { name: "El jardín", href: "/teory/garden" },
    // { name: "Press", href: "#" },
    // { name: "Careers", href: "#" },
    // { name: "Terms & Conditions", href: "#" },
    // { name: "Privacy", href: "#" },
  ],
  customerService: [
    { name: "Contact", href: "#" },
    { name: "Shipping", href: "#" },
    // { name: "Returns", href: "#" },
    // { name: "Warranty", href: "#" },
    // { name: "Secure Payments", href: "#" },
    // { name: "FAQ", href: "#" },
    // { name: "Find a store", href: "#" },
  ],
};
</script>

<style lang="scss" scoped></style>
