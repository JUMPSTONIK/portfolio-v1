<script setup lang="ts">
import NavBar from "./components/NavBar.vue";
import Footer from "./components/Footer.vue";
import { ref } from "vue";
import NavigationDrawer from "./components/NavigationDrawer.vue";


const drawer = ref(false);

</script>

<template>
  <v-layout wrap>
    <v-flex>
      <NavBar @toggleDrawer="drawer = !drawer" />
      <main class="base-container">
        <router-view />
      </main>
      <Footer />
    </v-flex>
    <NavigationDrawer :drawer="drawer"/>

  </v-layout>
</template>

<style scoped></style>
