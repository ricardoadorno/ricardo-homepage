<script setup lang="ts">
import ProjectCard from '../ProjectCard.vue';

const PROJECT_ITEMS = [
  {
    name: 'spotifyApi',
    link: '#',
  },
  {
    name: 'realtimeChat',
    link: '#',
    inverted: true,
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
      :link="project.link"
      :inverted="project.inverted" />
  </div>
</template>
