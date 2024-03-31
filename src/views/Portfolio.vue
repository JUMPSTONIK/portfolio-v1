<script setup lang="ts">
import ProjectPreview from "../components/ProjectPreview.vue";
import { useProjectsStore } from "../store/projects";
import WorkingOnIt from "../components/WorkingOnIt.vue";

const store = useProjectsStore();
console.log(store.allProjects);
</script>

<template>
    <WorkingOnIt/>
  <!-- <div class="base-container flex-col gap-[72px]">
    <ProjectPreview
      v-for="project in store.allProjects"
      :alt="project.alt"
      :description="project.description"
      :image="project.image"
      :title="project.title"
      :name="project.name"
      :key="project.name"
      :position="project.position"
    />
  </div> -->
</template>

<style scoped></style>
