<script setup lang="ts">
import Preview from "../components/Preview.vue";
import Interested from "./../components/Interested.vue"
import { useExperienceStore } from '../store/experiences';

const store = useExperienceStore();
</script>

<template>
    <div class="base-container flex-col gap-[72px]">
    <Preview
      v-for="project in store.allExperiences"
      :alt="project.alt"
      :description="project.description"
      :image="project.image"
      :title="project.title"
      :company="project.company"
      :jobType="project.jobType"
      :position="project.position"
      :hideButton="true"
    />
  </div>
    <Interested/>
</template>
