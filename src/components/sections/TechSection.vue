<script setup lang="ts">
import TechCard from '../TechCard.vue';

const TECH_ITEMS = [
  {
    name: 'javascript',
    icon: 'skill-icons:typescript',
  },
  {
    name: 'react',
    icon: 'skill-icons:react-dark',
  },
  {
    name: 'vue',
    icon: 'skill-icons:vuejs-dark',
  },
  {
    name: 'tailwind',
    icon: 'skill-icons:tailwindcss-dark',
  },
  {
    name: 'figma',
    icon: 'skill-icons:figma-dark',
  },
  {
    name: 'node',
    icon: 'skill-icons:nodejs-dark',
  },
  {
    name: 'nest',
    icon: 'skill-icons:nestjs-dark',
  },
  {
    name: 'docker',
    icon: 'skill-icons:docker',
  },
  {
    name: 'test',
    icon: 'skill-icons:jest',
  },
  {
    name: 'sql',
    icon: 'skill-icons:postgresql-dark',
  },
];
</script>

<template>
  <div class="grid grid-cols-1 gap-8 my-8 md:grid-cols-5 md:gap-8">
    <TechCard
      v-motion-pop-visible-once
      v-for="tech in TECH_ITEMS"
      :key="tech.name"
      :name="tech.name"
      :icon="tech.icon" />
  </div>
</template>
