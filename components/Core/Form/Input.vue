<template>
    <div class="relative w-full min-w-[200px] h-12">
        <input
            :type="type"
            class="peer w-full h-full bg-transparent text-blue-gray-700 font-sans font-normal outline outline-0 disabled:bg-blue-gray-50 disabled:border-0 border-0 border-b text-sm px-px pt-5 pb-2 border-gray-400 focus:ring-0 focus:border-b-2 focus:border-blue-500 peer-focus:placeholder-transparent peer-focus:text-blue-500 peer-focus:outline-none peer-focus:border-b-2 peer-focus:border-blue-500 peer-focus:ring-0 peer-focus:ring-blue-500 peer-focus:ring-opacity-50 peer-disabled:text-blue-gray-500 peer-disabled:placeholder-transparent peer-disabled:cursor-not-allowed peer-disabled:opacity-50 peer-disabled:ring-0 peer-disabled:border-b-2 peer-disabled:border-blue-gray-50 peer-disabled:ring-blue-gray-50 peer-disabled:ring-opacity-50"
            placeholder=""
        />
        <label
            class="flex w-full h-full select-none pointer-events-none absolute left-0 font-normal peer-placeholder-shown:text-blue-gray-500 leading-tight peer-focus:leading-tight peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500 transition-all -top-1.5 peer-placeholder-shown:text-sm text-[11px] peer-focus:text-[11px] after:content[' '] after:block after:w-full after:absolute after:-bottom-1.5 left-0 after:border-b-2 after:scale-x-0 peer-focus:after:scale-x-100 after:transition-transform after:duration-300 peer-placeholder-shown:leading-[4.875] text-blue-gray-500 peer-focus:text-blue-500 after:border-blue-500 peer-focus:after:border-blue-500"
        >
            {{ label }}
        </label>
    </div>
</template>

<script setup>
const props = defineProps({
    label: String,
    type: String,
});
</script>
