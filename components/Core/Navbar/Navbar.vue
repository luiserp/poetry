<template>
    <nav
        class="block w-full max-w-screen-2xl rounded-xl bg-transparent shadow-none"
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
            <div class="hidden lg:block">
                <ul
                    class="mb-4 mt-2 flex flex-col gap-2 text-inherit lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6"
                >
                    <li
                        v-for="link in links"
                        class="block antialiased font-sans text-sm font-light leading-normal text-inherit capitalize"
                    >
                        <NuxtLink
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
                    </li>
                </ul>
            </div>
            <button
                class="relative middle none font-sans font-medium text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none w-8 max-w-[32px] h-8 max-h-[32px] rounded-lg text-xs ml-auto text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
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

        <div
            class="lg:hidden transition-all duration-200 block w-full basis-full overflow-hidden rounded-xl bg-white px-4 pt-2 pb-4 text-blue-gray-900 z-20"
            :style="pannelStyle"
        >
            <div class="container mx-auto">
                <ul
                    class="mb-4 mt-2 flex flex-col gap-2 text-inherit lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6"
                >
                    <li
                        v-for="link in links"
                        class="block antialiased font-sans text-sm font-light leading-normal text-inherit capitalize"
                    >
                        <NuxtLink
                            class="flex items-center gap-1 p-1 font-normal text-gray-700 hover:text-gray-900"
                            :href="link.href"
                        >
                            <component
                                :is="link.icon"
                                class="w-[18px] h-[18px] opacity-75 mr-1"
                            />
                            {{ link.name }}</NuxtLink
                        >
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>

<script setup>
import { ArrowRightOnRectangleIcon, Bars3Icon, DocumentIcon, DocumentTextIcon, HomeIcon, UserCircleIcon, UserPlusIcon, XMarkIcon } from "@heroicons/vue/24/solid";
import { computed } from "vue";
import { ref } from "vue";
import CompassIcon from "../Icons/CompassIcon.vue";

const links = computed(() => ([
    {
        name: "Inicio",
        href: "/",
        icon: HomeIcon,
        class: "text-white hover:text-slate-300",
    },
    {
        name: "Trabajos",
        href: "/works",
        icon: DocumentTextIcon,
        class: "text-gray-700 hover:text-gray-900",
    },
    {
        name: "Brújula",
        href: "/compass",  
        icon: CompassIcon,
        class: "text-gray-700 hover:text-gray-900",
    }
]));


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
    'max-height': opened.value ? "300px" : "0px",
    'opacity': opened.value ? "1" : "0",
}))

</script>

<style lang="scss" scoped></style>
