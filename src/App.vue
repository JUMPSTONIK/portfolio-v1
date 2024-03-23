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
  <v-layout wrap class="w-screen flex-col">

      <NavBar @toggleDrawer="drawer = !drawer" />
      <main @click="close()">
        <router-view />
      </main>
      <Footer @click="close()" />
    <NavigationDrawer :drawer="drawer" onUpdateDrawer="val => drawer = val"/>
  </v-layout>
</template>
