<template>
    <Card>
        <CardBody>
            <IconButton :icon="icon" :color="color" />
            <h2 class="card-title text-lg font-semibold">{{ title }}</h2>
            <p class="text-justify">{{ description }}</p>
            <div class="card-actions justify-end"></div>
        </CardBody>
    </Card>
</template>

<script setup>
import IconButton from '@/components/Core/IconButton.vue';
import CardBody from '@/components/Core/Card/CardBody.vue';
import Card from '@/components/Core/Card/Card.vue';

const props = defineProps({
    title: String,
    description: String,
    icon: Function,
    color: String,
});
</script>

<style lang="scss" scoped></style>
