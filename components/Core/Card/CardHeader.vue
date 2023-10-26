<template>
    <div
        class="bg-clip-border mx-4 rounded-xl overflow-hidden bg-white text-gray-700 shadow-lg -mt-6 relative"
        :class="classes"
    >
        <slot/>
    </div>
</template>

<script setup>
import { computed } from 'vue';


const props = defineProps({
    variant: {
        type: String,
        default: 'standard',
        validator: (value) => {
            return ['standard', 'gradient'].includes(value)
        }
    },
})

const classes = computed(() => {
    return {
        'bg-gradient-to-r from-blue-600 to-blue-400 shadow-blue-500/40 shadow-lg': props.variant === 'gradient',
        'bg-white': props.variant === 'standard',
    }
})

</script>

<style lang="scss" scoped>

</style>
