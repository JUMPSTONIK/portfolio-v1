<script setup lang="ts">
import Button from "./Button.vue";

const { image, alt, title, description, name, position, hideButton } = defineProps([
  "image",
  "alt",
  "title",
  "description",
  "name",
  "position",
  "hideButton"
]);
</script>

<template>
  <div class="flex flex-col gap-[25px] md:gap-[69px] md:items-center"
    :class="{ 'md:flex-row-reverse': position % 2, 'md:flex-row': !(position % 2) }">
    <img class="h-[288px] md:w-1/2 md:h-[314px] lg:h-[500px]" :src="image" :alt="alt" />
    <div class="flex flex-col gap-6 md:w-full lg:justify-between lg:h-[500px]">
      <v-divider class="border-opacity-100 md:hidden" />
      <div class="flex flex-col gap-[25px] md:items-center">
        <h1>{{ title }}</h1>
        <p class="font-body-2">{{ description }}</p>
        <router-link v-if="!hideButton" class=" self-start" :to="`./portfolio/${name}`">
          <Button :text="'VIEW PROJECT'" :isPrimary="false" />
        </router-link>
      </div>
      <v-divider class="border-opacity-100 md:hidden" />
    </div>
  </div>
</template>
