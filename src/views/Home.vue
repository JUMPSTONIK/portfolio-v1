<script setup lang="ts">
import Button from "../components/Button.vue";
import Interested from "./../components/Interested.vue"
import { useWindowSize } from "@vueuse/core";

const { height } = useWindowSize();
</script>

<template>
    <div class="flex flex-col base-container">
        <section class="flex flex-col relative">
            <img class="w-full md:hidden" src="./../assets/homepage/mobile/image-homepage-hero@2x.jpg" alt="" />
            <img class="w-full hidden md:block xl:hidden" src="./../assets/homepage/tablet/image-homepage-hero@2x.jpg"
                alt="" />
            <img class="w-full hidden xl:block" src="./../assets/homepage/desktop/image-homepage-hero@2x.jpg" alt="" />
            <div
                class="flex flex-col gap-6 md:gap-12 xl:gap-[52px] md:absolute md:bg-white md:left-0 md:bottom-0 md:pt-14 md:pr-14 md:max-w-[615px] xl:max-w-[512px]">
                <h1 class="mt-6">
                    Hey, I’m Josue David Lopez and I love building beautiful websites
                </h1>
                <a href="#about-me">
                    <Button :text="'ABOUT ME'" :showIcon="true" />
                </a>
            </div>
        </section>
        <section id="about-me" class="flex flex-col gap-8 mt-20 md:flex-row md:gap-20 lg:gap-24">
            <img class="w-full md:w-[40%] lg:w-[50%] object-cover" src="./../assets/picture.jpeg" alt="" />
            <v-divider v-if="height < 768" class="border-opacity-100 md:hidden" />
            <div class="flex flex-col gap-7 md:w-[60%] md:pt-12 lg:w-[50%]">
                <h2>About Me</h2>
                <p class="font-body-1">
                    Josue David Lopez Florian is a seasoned Senior Frontend Web Developer,
                    equipped with a Bachelor of Engineering in Computer Science.
                    Proficient in HTML5, CSS3, JavaScript, Typescript, and Python, he
                    specializes in React.js while maintaining expertise in Angular and
                    Vue.js. With hands-on experience in various libraries and frameworks
                    such as Redux, Material UI, Styled-components, Vuex, and Ionic, Josue
                    excels in crafting dynamic web projects from inception to deployment.
                    <br />
                    As a native Spanish speaker with a C1 level of English proficiency,
                    Josue thrives as a proactive, collaborative team player. His
                    commitment to continuous learning and growth ensures he consistently
                    delivers optimal solutions, surpassing expectations. With a keen eye
                    for detail and a knack for following instructions, Josue is a valuable
                    asset to any team, capable of working both independently and
                    collectively to achieve excellence. Passionate about web development,
                    he derives satisfaction from delivering efficient, high-quality
                    solutions that elevate user experiences.
                </p>
                <router-link :to="'/portfolio'">
                    <Button :text="'GO TO PORTFOLIO'" :isPrimary="false" />
                </router-link>
                <v-divider class="border-opacity-100 mt-7 md:mt-4" />
            </div>
        </section>
        <Interested/>
    </div>
</template>

<style scoped></style>
