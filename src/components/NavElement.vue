<template>
    <router-link
    class="text-xs uppercase active:text-primary"
    :class="{
      'text-primary-grayish': type,
      'text-white': !type,
    }"
    :to="route"
  >
    <slot></slot>
  </router-link>
</template>

<script setup lang="ts">
import {defineProps} from 'vue';
import { RouteLocationRaw } from 'vue-router';

const { route, type } = defineProps<{
//   text: {type: String, required: true};
  route: RouteLocationRaw;
  type: Boolean
}>();
</script>

<style scoped>

</style>