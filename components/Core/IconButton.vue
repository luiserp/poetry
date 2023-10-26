<template>
    <button
        class="relative middle none font-sans font-medium text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none w-12 max-w-[48px] h-12 max-h-[48px] text-sm bg-gradient-to-tr active:opacity-[0.85] pointer-events-none mb-6 rounded-full"
        :class="bgColor"
    >
        <span class="absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2">
            <component :is="icon" class="w-5 h-5 text-white" />
        </span>
    </button>
</template>

<script setup>
import { computed } from 'vue';


const props = defineProps({
    icon: Function,
    color: String,
    size: String,
});


const bgColor = computed(() => {

    let colorMap = {
        'teal': 'from-teal-600 to-teal-400 text-white shadow-md shadow-teal-500/20 hover:shadow-lg hover:shadow-teal-500/40',
        'red': 'from-red-600 to-red-400 text-white shadow-md shadow-red-500/20 hover:shadow-lg hover:shadow-red-500/40',
        'blue': 'from-blue-600 to-blue-400 text-white shadow-md shadow-blue-500/20 hover:shadow-lg hover:shadow-blue-500/40',
        'green': 'from-green-600 to-green-400 text-white shadow-md shadow-green-500/20 hover:shadow-lg hover:shadow-green-500/40',
        'yellow': 'from-yellow-600 to-yellow-400 text-white shadow-md shadow-yellow-500/20 hover:shadow-lg hover:shadow-yellow-500/40',
        'indigo': 'from-indigo-600 to-indigo-400 text-white shadow-md shadow-indigo-500/20 hover:shadow-lg hover:shadow-indigo-500/40',
        'purple': 'from-purple-600 to-purple-400 text-white shadow-md shadow-purple-500/20 hover:shadow-lg hover:shadow-purple-500/40',
        'pink': 'from-pink-600 to-pink-400 text-white shadow-md shadow-pink-500/20 hover:shadow-lg hover:shadow-pink-500/40',
        'gray': 'from-gray-600 to-gray-400 text-white shadow-md shadow-gray-500/20 hover:shadow-lg hover:shadow-gray-500/40',
        'white': 'from-white to-gray-100 text-gray-700 shadow-md shadow-gray-500/20 hover:shadow-lg hover:shadow-gray-500/40',
    }

    return colorMap[props.color] ?? colorMap['teal'];
});


</script>

<style lang="scss" scoped>

</style>
