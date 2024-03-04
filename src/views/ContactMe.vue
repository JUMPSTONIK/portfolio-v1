<script setup lang="ts">
import Icon from './../components/Icon.vue';
</script>

<template>
    <div
        class="max-w-[1440px] w-full flex flex-col gap-6 items-start justify-start px-8 md:gap-12 md:px-10 md:py-6 xl:px-0 ">
        <v-divider class="border-opacity-100" />
        <h1>Get in Touch</h1>
        <p class="font-body-2 text-primary-grayish">I’d love to hear about what you’re working on and how I could help. I’m
            currently looking for a new role and am open to a wide range of opportunities. My preference would be to find a
            position in a company in London. But I’m also happy to hear about opportunites that don’t fit that description.
            I’m a hard-working and positive person who will always approach each task with a sense of purpose and attention
            to detail. Please do feel free to check out my online profiles below and get in touch using the form.</p>
        <div class=" flex gap-[15px]">
            <Icon :icon="'linkedIn'" class="text-primary-grayish w-[25px] h-[25px]" alt="LinkedIn link profile" />
            <Icon :icon="'github'"   class="text-primary-grayish w-[25px] h-[25px]" alt="Github link profile" />
        </div>
        <v-divider class="border-opacity-100" />
        <div>
            <h1>Contact Me</h1>
        </div>
    </div>
</template>


<style scoped></style>