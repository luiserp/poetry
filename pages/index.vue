<template>
    <NuxtLayout>
        <div
            class="relative flex h-screen content-center items-center justify-center pt-16 pb-32"
        >
            <div
                class="absolute top-0 h-full w-full bg-[url('https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1267&q=80')] bg-cover bg-center"
            />
            <div
                class="absolute top-0 h-full w-full bg-black/75 bg-cover bg-center"
            />
            <div class="max-w-8xl container relative mx-auto">
                <div class="flex flex-wrap items-center">
                    <div class="ml-auto mr-auto w-full px-4 text-center lg:w-8/12">
                        <h1 class="text-4xl mb-6 font-black text-white">
                            Your story starts with us.
                        </h1>

                        <p class="text-lg text-white opacity-80">
                            This is a simple example of a Landing Page you can build
                            using Material Tailwind. It features multiple components
                            based on the Tailwind CSS and Material Design by Google.
                        </p>
                    </div>
                </div>
            </div>
        </div>
        <section class="-mt-32 bg-gray-50 px-4 pb-20 pt-4">
            <div class="max-w-6xl mx-auto">
                <div class="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                    <FeatureCard
                        v-for="feature in featuresData"
                        :key="feature.title"
                        :color="feature.color"
                        :title="feature.title"
                        :icon="feature.icon"
                        :description="feature.description"
                    />
                </div>
                <div class="mt-32 flex flex-wrap items-center">
                    <div class="mx-auto -mt-8 w-full px-4 md:w-5/12">
                        <div
                            class="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-full bg-white p-3 text-center shadow-lg"
                        >
                            <UsersIcon class="h-6 w-6 text-blue-gray-900" />
                        </div>
                        <h3 class="mb-3 font-bold">
                            Working with us is a pleasure
                        </h3>
                        <p class="mb-8 font-normal text-blue-gray-500">
                            Don't let your uses guess by attaching tooltips and
                            popoves to any element. Just make sure you enable them
                            first via JavaScript.
                            <br />
                            <br />
                            The kit comes with three pre-built pages to help you get
                            started faster. You can change the text and images and
                            you're good to go. Just make sure you enable them first
                            via JavaScript.
                        </p>
                        <Button variant="outlined">read more</Button>
                    </div>
                    <div
                        class="mx-auto mt-24 flex w-full justify-center px-4 md:w-4/12 lg:mt-0"
                    >
                        <Card class="shadow-lg shadow-gray-500/10">
                            <CardHeader class="relative h-56">
                                <img
                                    alt="Card Image"
                                    src="/img/teamwork.jpeg"
                                    class="h-full w-full"
                                />
                            </CardHeader>
                            <CardBody>
                                <h5
                                    class="text-2xl mb-3 font-bold"
                                >
                                    Top Notch Services
                                </h5>
                                <p class="font-normal text-blue-gray-500">
                                    The Arctic Ocean freezes every winter and much
                                    of the sea-ice then thaws every summer, and that
                                    process will continue whatever happens.
                                </p>
                            </CardBody>
                        </Card>
                    </div>
                </div>
            </div>
        </section>
        <div class="bg-blue-gray-50/50">
            <!-- <Footer /> -->
        </div>
    </NuxtLayout>
</template>

<script setup>
import { ArrowPathIcon, FingerPrintIcon, StarIcon, UsersIcon } from '@heroicons/vue/24/solid';
import Button from '~/components/Core/Button/Button.vue';
import Card from '~/components/Core/Card/Card.vue';
import CardBody from '~/components/Core/Card/CardBody.vue';
import CardHeader from '~/components/Core/Card/CardHeader.vue';



const featuresData = [
    {
        color: "blue",
        title: "Awarded Agency",
        icon: StarIcon,
        description:
            "Divide details about your product or agency work into parts. A paragraph describing a feature will be enough.",
    },
    {
        color: "red",
        title: "Free Revisions",
        icon: ArrowPathIcon,
        description:
            "Keep you user engaged by providing meaningful information. Remember that by this time, the user is curious.",
    },
    {
        color: "teal",
        title: "Verified Company",
        icon: FingerPrintIcon,
        description:
            "Write a few lines about each one. A paragraph describing a feature will be enough. Keep you user engaged!",
    },
];
</script>