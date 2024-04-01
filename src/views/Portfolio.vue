<script setup lang="ts">
// import Preview from "../components/Preview.vue";
import { useProjectsStore } from "../store/projects";
import Interested from "./../components/Interested.vue"
import WorkingOnIt from "../components/WorkingOnIt.vue";

const store = useProjectsStore();
console.log(store.allProjects);
</script>

<template>
    <WorkingOnIt/>
  <!-- <div class="base-container flex-col gap-[72px]">
    <Preview
      v-for="project in store.allProjects"
      :alt="project.alt"
      :description="project.description"
      :image="project.image"
      :title="project.title"
      :name="project.name"
      :key="project.name"
      :position="project.position"
      :hideButton=false
    />
  </div> -->
  <Interested/>
</template>

