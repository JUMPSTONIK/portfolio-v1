<script setup lang="ts">
import Button from './Button.vue';

const { image, alt, title, description, project } = defineProps(['image', 'alt', 'title', 'description', 'project']);
</script>

<template>
    <div class="flex flex-col gap-[25px]">
        <img class="h-[288px]" :src="image" :alt="alt">
        <v-divider class="border-opacity-100 md:hidden" />
        <div>
            <h1>{{ title }}</h1>
            <p class="font-body-2">{{ description }}</p>
            <router-link :to="`./portfolio/${project}`">
                <Button :text="'VIEW PROJECT'" :isPrimary="false" />
            </router-link>
        </div>
    </div>
</template>

<style scoped></style>