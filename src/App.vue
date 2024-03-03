<script setup lang="ts">
import NavBar from "./components/NavBar.vue";
import Footer from "./components/Footer.vue";
import { ref } from "vue";
import { reactive } from "vue";

const drawer = ref(false);
const items = reactive([
  { name: "Home", route: "/", icon: "mdi-home" },
  { name: "Portfolio", route: "/home/portfolio", icon: "mdi-briefcase" },
  { name: "Contact me", route: "/home/contact-me", icon: "mdi-email" },
]);
</script>

<template>
  <v-layout wrap>
    <v-flex>
      <NavBar @toggleDrawer="drawer = !drawer" />
      <v-main>
        <router-view />
      </v-main>
      <Footer />
    </v-flex>
    <v-navigation-drawer v-model="drawer" location="right" temporary>
      <div class="bg-primary-grayish h-full p-3 pt-5">
        <v-list-item v-for="item in items" :key="item.name">
          <div class="flex gap-1 justify-start items-center">
            <v-icon class="text-white" :icon="item.icon" />
            <router-link class="text-white uppercase" :to="item.route">{{ item.name }}</router-link>
          </div>
        </v-list-item>
      </div>
    </v-navigation-drawer>
  </v-layout>
</template>

<style scoped></style>
