<template>
    <slot name="navbar">
        <div class="lg:container z-50 mx-auto px-10 py-2 bg-gray-50">
            <Navbar></Navbar>
        </div>
    </slot>

    <slot />

</template>

<script setup>
import Navbar from '~/components/Core/Navbar/Navbar.vue';

</script>
