
<script setup lang="ts">
import Icon from './Icon.vue';
import NavElement from './NavElement.vue';

</script>

<template>
        <nav class="base-container relative px-8 pt-8 pb-10 flex justify-between items-center xl:px-0">
            <div class="absolute h-full w-1/2 left-0 md:hidden" @click="$emit('close')"></div>
            <router-link :to="'/'">
                <Icon :icon="'logo'" />
            </router-link>
            <div class="hidden md:flex md:gap-[2.625rem]">
                <NavElement :type="true" :route="'/'">Home</NavElement>
                <NavElement :type="true" :route="'/portfolio'">Portfolio</NavElement>
                <NavElement :type="true" :route="'/experience'">Work Experience</NavElement>
                <NavElement :type="true" :route="'/contact-me'">Contact me</NavElement>
            </div>
            <Icon class=" md:hidden" :icon="'menu'" @click="$emit('toggleDrawer')" />
        </nav>
</template>