<script setup lang="ts">
import ProjectCard from '../ProjectCard.vue';
import spotify_rest from '@/assets/images/spotify_rest.png';

const PROJECT_ITEMS = [
  {
    name: 'spotifyApi',
    image: spotify_rest,
    link: 'https://vue-spotify-rest-2.vercel.app',
    inverted: false,
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
      :image="project.image"
      :link="project.link"
      :inverted="project.inverted" />
  </div>
</template>
