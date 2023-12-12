<template>
    <nav
        class="block w-full max-w-screen-2xl rounded-xl bg-transparent shadow-none select-none"
    >
        <div
            class="container mx-auto flex items-center justify-between"
        >
            <NuxtLink href="/"
                    :class="textColor"

                >
                <p
                    class="block antialiased font-sans text-base leading-relaxed text-inherit mr-4 ml-2 cursor-pointer py-1.5 font-bold"
                >
                    Poetry
                </p>
            </NuxtLink>
            <div class="hidden xl:block">
                <ul
                    class="mb-4 mt-2 flex flex-col whitespace-nowrap flex-wrap gap-2 text-inherit lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6"
                >
                    <li
                        v-for="link in links"
                        class="block antialiased font-sans text-sm font-light leading-normal text-inherit capitalize"
                    >
                        <!-- Normal link -->
                        <NuxtLink
                            v-if="!link.children"
                            class="flex items-center gap-1 p-1 font-normal"
                            :class="textColor"
                            :href="link.href"
                        >
                            <component
                                :is="link.icon"
                                class="w-[18px] h-[18px] opacity-75 mr-1"
                            />
                            {{ link.name }}
                        </NuxtLink>

                        <!-- Dropdowns -->
                        <div class="relative" v-else >
                            <button class="flex items-center" @click="link.opened = !link.opened" v-click-outside="() => link.opened = false" :class="textColor">
                                <component :is="link.opened ? ChevronUpIcon : ChevronDownIcon" class="w-4 h-4 opacity-75 mr-1"/>
                                <p>{{ link.name }}</p>
                            </button>
                            <div v-if="link.opened" class="bg-white absolute overflow-hidden rounded-lg z-50 right-0 top-10 w-48 whitespace-nowrap">
                                <ul class="flex flex-col gap-2">
                                    <NuxtLink
                                        v-for="child in link.children"
                                        :href="child.href"
                                    >
                                    <li
                                        class="flex items-center gap-1 p-1 font-normal py-1 px-3 antialiased font-sans text-sm leading-normal text-inherit capitalize hover:bg-gray-200"
                                    >

                                            <component
                                                :is="child.icon"
                                                class="w-[18px] h-[18px] opacity-75 mr-1"
                                            />
                                            {{ child.name }}
                                        </li>
                                    </NuxtLink>
                                </ul>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
            <button
                class="relative middle none font-sans font-medium text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none w-8 max-w-[32px] h-8 max-h-[32px] rounded-lg text-xs ml-auto text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent xl:hidden"
                type="button"
                :class="textColor">
                <span @click="toggle" class="absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2">
                    <Transition
                        enter-active-class="transition ease-out duration-50"
                        enter-from-class="opacity-0"
                        enter-to-class="opacity-100"
                        leave-active-class="transition ease-in duration-50"
                        leave-from-class="opacity-100"
                        leave-to-class="opacity-0"
                        mode="out-in"
                    >
                        <component :is="opened ? XMarkIcon : Bars3Icon" class="w-7 h-7"/>
                    </Transition>
                </span>
            </button>
        </div>

        <!-- Mobile -->
        <div
            class="xl:hidden transition-all duration-200 block w-full basis-full overflow-hidden rounded-xl bg-white px-4 pt-2 pb-4 text-blue-gray-900 z-20"
            :style="pannelStyle"
        >
            <div class="container mx-auto">
                <ul
                    class="mb-4 mt-2 grid grid-flow-row md:grid-cols-2 gap-2 grid-cols-1"
                >
                    <li
                        v-for="link in links"
                        class="block antialiased font-sans text-sm font-light leading-normal text-inherit capitalize"
                        :class="link.children ? 'col-span-2' : ''"
                    >
                        <NuxtLink
                            v-if="!link.children"
                            class="flex items-center gap-1 p-1 font-normal text-gray-700 hover:text-gray-900"
                            :href="link.href"
                        >
                            <component
                                :is="link.icon"
                                class="w-[18px] h-[18px] opacity-75 mr-1"
                            />
                            {{ link.name }}
                        </NuxtLink>
                        <div v-else>
                            <button class="flex items-center" :class="textColor">
                                <component :is="link.opened ? ChevronUpIcon : ChevronDownIcon" class="w-4 h-4 opacity-75 mr-1"/>
                                <p>{{ link.name }}</p>
                            </button>
                            <div class="w-48 whitespace-nowrap">
                                <ul class="flex flex-col flex-wrap gap-2 mt-2">
                                    <li
                                        v-for="child in link.children"
                                        class="block px-2 antialiased font-sans text-sm font-light leading-normal text-inherit capitalize"
                                    >
                                        <NuxtLink
                                            class="flex items-center gap-1 p-1 font-normal"
                                            :href="child.href"
                                        >
                                            <component
                                                :is="child.icon"
                                                class="w-[18px] h-[18px] opacity-75 mr-1"
                                            />
                                            {{ child.name }}
                                        </NuxtLink>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>

<script setup>
import { Bars3Icon, ChevronDownIcon, ChevronUpIcon, DocumentIcon, HomeIcon, LanguageIcon, MapPinIcon, PhotoIcon, ReceiptRefundIcon, Squares2X2Icon, UserCircleIcon, XMarkIcon } from "@heroicons/vue/24/solid";
import { computed, ref } from "vue";
import CompassIcon from "../Icons/CompassIcon.vue";

const links = ref([
    {
        name: "Inicio",
        href: "/",
        icon: HomeIcon,
        class: "text-white hover:text-slate-300",
    },
    {
        name: "Imágenes Reveladoras",
        href: "/works",
        icon: PhotoIcon,
        class: "text-gray-700 hover:text-gray-900",
    },
    {
        name: "El Girar de Destinos",
        href: "/compass",  
        icon: CompassIcon,
        class: "text-gray-700 hover:text-gray-900",
    },
    {
        name: "Universos de Elección",
        href: "/tlon",  
        icon: MapPinIcon,
        class: "text-gray-700 hover:text-gray-900",
    },
    {
        name: "La Lejana",
        href: "/lejana",  
        icon: ReceiptRefundIcon,
        class: "text-gray-700 hover:text-gray-900",
    },
    {
        name: "El Jardín verbal",
        href: "/garden",  
        icon: LanguageIcon,
        class: "text-gray-700 hover:text-gray-900",
    },
    {
        name: "Rayuela",
        href: "/rayuela",  
        icon: Squares2X2Icon,
        class: "text-gray-700 hover:text-gray-900",
    },
    {
        name: "Nosotros",
        href: "/about",  
        icon: UserCircleIcon,
        class: "text-gray-700 hover:text-gray-900",
    },
    {
        name: "Teoría",
        class: "text-gray-700 hover:text-gray-900",
        opened: false,
        children: [
            { name: "La continuidad", href: "/teory/park", icon: PhotoIcon },
            { name: "Universos de Elección", href: "/teory/tlon", icon: MapPinIcon },
            { name: "Lejana", href: "/teory/lejana", icon: ReceiptRefundIcon },
            { name: "El jardín", href: "/teory/garden", icon: LanguageIcon },
            { name: "El Girar de Destinos", href: "/teory/compass", icon: CompassIcon },
            { name: "Rayuela", href: "/rayuela", icon: Squares2X2Icon },
        ]
    },
]);


const route = useRoute()

const textColor = computed(() => {
    return links.value.find(link => link.href === route.path)?.class ?? 'text-gray-700 hover:text-gray-900'
})

const opened = ref(false);

function toggle () {
    opened.value = !opened.value;
}

function close () {
    opened.value = false;
}

const pannelStyle = computed(() => ({
    'max-height': opened.value ? "500px" : "0px",
    'opacity': opened.value ? "1" : "0",
}))

</script>

<style lang="scss" scoped></style>
