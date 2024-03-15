<script setup lang="ts">
import NavBar from "./components/NavBar.vue";
import Footer from "./components/Footer.vue";
import { ref } from "vue";
import NavigationDrawer from "./components/NavigationDrawer.vue";


const drawer = ref(false);

const close = () =>{
  if(drawer) {
    drawer.value = false;
  } 
}

</script>

<template>
  <v-layout wrap>
    <v-flex>
      <NavBar @toggleDrawer="drawer = !drawer" />
      <main @click="close()" class="base-container">
        <router-view />
      </main>
      <Footer @click="close()" />
    </v-flex>
    <NavigationDrawer :drawer="drawer" onUpdateDrawer="val => drawer = val"/>
  </v-layout>
</template>
