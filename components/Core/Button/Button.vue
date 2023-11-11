<template>
    <button
        class="middle none font-sans font-bold center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg"
        :class="buttonVariant"
    >
        <slot />
    </button>
</template>

<script setup>
import { computed } from 'vue';

const props = defineProps({
    variant: String,
})

const buttonVariant = computed(() => {
    let map = {
        'gradient': 'bg-gradient-to-r from-blue-500 to-blue-600 text-white hover:opacity-75 focus:ring focus:ring-blue-200 active:opacity-[0.85]',
        'outlined': 'border border-blue-500 text-blue-500 hover:opacity-75 focus:ring focus:ring-blue-200 active:opacity-[0.85]',
        'solid': 'bg-blue-500 text-white hover:opacity-75 focus:ring focus:ring-blue-200 active:opacity-[0.85]',
        'link': 'text-blue-500 hover:opacity-75 focus:ring focus:ring-blue-200 active:opacity-[0.85]',
    }

    return map[props.variant] ?? map['solid'];
})

</script>

<style lang="scss" scoped>

</style>
