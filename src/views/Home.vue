<script setup lang="ts">
import Button from '../components/Button.vue';
</script>

<template>
    <div class="px-8 flex flex-col">
        <section class="flex flex-col">
            <img class="w-full md:hidden" src="./../assets/homepage/mobile/image-homepage-hero@2x.jpg" alt="">
            <img class="w-full hidden md:block xl:hidden" src="./../assets/homepage/tablet/image-homepage-hero@2x.jpg"
                alt="">
            <img class="w-full hidden xl:block" src="./../assets/homepage/desktop/image-homepage-hero@2x.jpg" alt="">
            <div class="flex flex-col gap-6">
                <h1 class="mt-6">Hey, I’m Josue David Lopez and I love building beautiful websites</h1>
                <Button :text="'ABOUT ME'" />
            </div>
        </section>
        <section class="flex flex-col gap-8 mt-20">
            <img class="w-full" src="./../assets/picture.jpeg" alt="">
            <v-divider class="border-opacity-100" />
            <h2>About me</h2>
            <p class="font-body-1">
                Josue David Lopez Florian is a seasoned Senior Frontend Web Developer, equipped with a Bachelor of
                Engineering in Computer Science. Proficient in HTML5, CSS3, JavaScript, Typescript, and Python, he
                specializes in React.js while maintaining expertise in Angular and Vue.js. With hands-on experience in
                various libraries and frameworks such as Redux, Material UI, Styled-components, Vuex, and Ionic, Josue
                excels in crafting dynamic web projects from inception to deployment.
                <br />
                As a native Spanish speaker with a C1 level of English proficiency, Josue thrives as a proactive,
                collaborative team player. His commitment to continuous learning and growth ensures he consistently
                delivers optimal solutions, surpassing expectations. With a keen eye for detail and a knack for
                following instructions, Josue is a valuable asset to any team, capable of working both independently and
                collectively to achieve excellence. Passionate about web development, he derives satisfaction from
                delivering efficient, high-quality solutions that elevate user experiences.
            </p>
            <Button  :text="'GO TO PORTFOLIO'" :isPrimary="false" />
            <v-divider class="border-opacity-100 mt-7" />
        </section>
        <section class="flex flex-col gap-10 pt-[115px] pb-20 items-center">
            <h2 class=" text-center">Interested in doing a project together?</h2>
            <Button  :text="'CONTACT ME'" :isPrimary="false" />
        </section>
    </div>
</template>

<style scoped></style>