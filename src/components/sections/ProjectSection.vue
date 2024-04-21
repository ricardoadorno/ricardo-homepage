<script setup lang="ts">
import ProjectCard from '../ProjectCard.vue';

const PROJECT_ITEMS = [
  {
    name: 'Project 1',
    description: 'Description 1',
    link: '#',
  },
  {
    name: 'Project 2',
    description: 'Description 2',
    link: '#',
    inverted: true,
  },
  {
    name: 'Project 3',
    description: 'Description 3',
    link: '#',
  },
];
</script>

<template>
  <div class="flex flex-wrap gap-8 my-8">
    <ProjectCard
      v-motion-fade-visible-once
      v-for="project in PROJECT_ITEMS"
      :key="project.name"
      :name="project.name"
      :description="project.description"
      :link="project.link"
      :inverted="project.inverted" />
  </div>
</template>
