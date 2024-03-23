<script setup lang="ts">
import Icon from './Icon.vue';
import NavElement from './NavElement.vue';
</script>

<template>
    <footer class=" bg-primary-grayish w-full">
        <div
            class="base-container w-full flex flex-col md:flex-row gap-10 md:gap-12 items-center justify-center py-14 md:px-10 md:py-6 lg:px-8">
            <Icon :icon="'logo'" class="text-white " />
            <div class="flex flex-col md:flex-row gap-9 md:gap-11 items-center md:mr-auto">
                <NavElement :type="false" :route="'/'">Home</NavElement>
                <NavElement :type="false" :route="'/portfolio'">Portfolio</NavElement>
                <NavElement :type="false" :route="'/contact-me'">Contact me</NavElement>
            </div>
            <div class=" flex gap-[15px]">
                <a href="https://www.linkedin.com/in/josue-david-lopez-florian/">
                    <Icon :icon="'linkedIn'" class="text-white w-[25px] h-[25px]" alt="LinkedIn link profile" />
                </a>
                <a href="https://github.com/JUMPSTONIK">
                    <Icon :icon="'github'" class="text-white w-[25px] h-[25px]" alt="Github link profile" />
                </a>
            </div>
        </div>
    </footer>
</template>


<style scoped></style>