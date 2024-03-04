<script setup lang="ts">
import { reactive } from 'vue';

const {drawer} = defineProps<{drawer: boolean}>()

const items = reactive([
  { name: "Home", route: "/", icon: "mdi-home" },
  { name: "Portfolio", route: "/portfolio", icon: "mdi-briefcase" },
  { name: "Contact me", route: "/contact-me", icon: "mdi-email" },
]);
</script>

<template>
    <v-navigation-drawer :value="drawer" @update:value="drawer = $event" location="right" temporary>
        <div class="bg-primary-grayish h-full p-3 pt-5">
            <v-list-item v-for="item in items" :key="item.name">
                <div class="flex gap-1 justify-start items-center">
                    <v-icon class="text-white" :icon="item.icon" />
                    <router-link class="text-white uppercase" :to="item.route">{{ item.name }}</router-link>
                </div>
            </v-list-item>
        </div>
    </v-navigation-drawer>
</template>


<style scoped></style>