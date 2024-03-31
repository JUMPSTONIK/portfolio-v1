<script setup lang="ts">
import Button from "./Button.vue";

const { image, alt, title, description, name, position } = defineProps([
  "image",
  "alt",
  "title",
  "description",
  "name",
  "position"
]);
</script>

<template>
  <div class="flex flex-col gap-[25px] md:gap-[69px] md:items-center" :class="{'md:flex-row-reverse' : position % 2, 'md:flex-row' : !(position % 2)}">
    <img class="h-[288px] md:w-1/2 md:h-[314px] lg:h-[500px]" :src="image" :alt="alt" />
    <div class="flex flex-col gap-6 md:w-full">
    <v-divider  class="border-opacity-100 md:hidden" />
      <h1>{{ title }}</h1>
      <p class="font-body-2">{{ description }}</p>
      <router-link :to="`./portfolio/${name}`">
        <Button :text="'VIEW PROJECT'" :isPrimary="false" />
      </router-link>
    <v-divider class="border-opacity-100 md:hidden" />
    </div>
  </div>
</template>

<style scoped></style>
