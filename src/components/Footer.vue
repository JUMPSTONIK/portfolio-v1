<script setup lang="ts">
import Icon from './Icon.vue';
import NavElement from './NavElement.vue';
</script>

<template>
    <footer class=" bg-primary-grayish base-container">
        <div class=" max-w-[1440px] w-full flex flex-col md:flex-row gap-10 md:gap-12 xl:px-0 items-center justify-center py-14 md:px-10 md:py-6">
            <Icon :icon="'logo'" class="text-white "/>
            <div class="flex flex-col md:flex-row gap-9 md:gap-11 items-center md:mr-auto">
                <NavElement :type="false" :route="'/'">Home</NavElement>
                <NavElement :type="false" :route="'/portfolio'">Portfolio</NavElement>
                <NavElement :type="false" :route="'/contact-me'">Contact me</NavElement>
            </div>
            <div class=" flex gap-[15px]">
                <Icon :icon="'linkedIn'" class="text-white w-[25px] h-[25px]" alt="LinkedIn link profile"/>
                <Icon :icon="'github'" class="text-white w-[25px] h-[25px]" alt="Github link profile"/>
            </div>
        </div>
    </footer>
</template>


<style scoped>

</style>