<script setup lang="ts">
import Button from "../components/Button.vue";
</script>

<template>
    <section class="base-container flex flex-col gap-10 pt-[115px] pb-20 px-10 items-center md:flex-row md:justify-between">
            <h2 class="text-center md:max-w-[350px]">
                Interested in doing a project together?
            </h2>
            <router-link :to="'/contact-me'">
                <Button :text="'CONTACT ME'" :isPrimary="false" />
            </router-link>
        </section>
</template>


<style scoped>

</style>