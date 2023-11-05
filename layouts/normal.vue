<template>
    <slot name="navbar">
        <div class="container absolute left-2/4 z-50 mx-auto -translate-x-2/4 p-4">
            <Navbar></Navbar>
        </div>
    </slot>
        
    <slot />

</template>

<script setup>
import Navbar from '~/components/Core/Navbar/Navbar.vue';


</script>
