<script setup lang="ts">
import TechCard from '../TechCard.vue';

const TECH_ITEMS = [
  {
    name: 'Vue 3',
    description: 'The Progressive JavaScript Framework',
    icon: 'radix-icons:github-logo',
  },
  {
    name: 'Vite',
    description: 'Next Generation Frontend Tooling',
    icon: 'radix-icons:github-logo',
  },
  {
    name: 'Tailwind CSS',
    description: 'A utility-first CSS framework',
    icon: 'radix-icons:github-logo',
  },
  {
    name: 'Vue 3',
    description: 'The Progressive JavaScript Framework',
    icon: 'radix-icons:github-logo',
  },
  {
    name: 'Vite',
    description: 'Next Generation Frontend Tooling',
    icon: 'radix-icons:github-logo',
  },
  {
    name: 'Tailwind CSS',
    description: 'A utility-first CSS framework',
    icon: 'radix-icons:github-logo',
  },
];
</script>

<template>
  <div class="grid grid-cols-1 gap-8 my-8 md:grid-cols-3 md:gap-16">
    <TechCard
      v-motion-pop-visible-once
      v-for="tech in TECH_ITEMS"
      :key="tech.name"
      :name="tech.name"
      :description="tech.description"
      :icon="tech.icon" />
  </div>
</template>
