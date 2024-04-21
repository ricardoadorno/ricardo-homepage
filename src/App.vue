<script setup lang="ts">
import TechSection from './components/sections/TechSection.vue';
import ProjectSection from './components/sections/ProjectSection.vue';
import LayoutFooter from './components/layout/LayoutFooter.vue';
import LayoutHeader from './components/layout/LayoutHeader.vue';
import { useColorMode } from '@vueuse/core';
import Heading from './components/Heading.vue';
import ThemeSwitch from './components/ThemeSwitch.vue';
import ContactSection from './components/sections/ContactSection.vue';
import HeroSection from './components/sections/HeroSection.vue';
import AboutSection from './components/sections/AboutSection.vue';

const HEADER_ITEMS = [
  {
    name: 'Technologies',
    link: '#technologies',
  },
  {
    name: 'Projects',
    link: '#projects',
  },
  {
    name: 'About Me',
    link: '#about',
  },
  {
    name: 'Contact',
    link: '#contact',
  },
];

const HEADINGS = {
  technologies: {
    id: 'technologies',
    text: 'Technologies',
  },
  projects: {
    id: 'projects',
    text: 'Projects',
  },
  about: {
    id: 'about',
    text: 'About Me',
  },
  contact: {
    id: 'contact',
    text: 'Contact',
  },
};

const mode = useColorMode();

const handleChange = () => {
  mode.value = mode.value === 'light' ? 'dark' : 'light';
};
</script>

<template>
  <ThemeSwitch :mode="mode" @update:mode="handleChange" />

  <main class="container mx-auto px-10 md:px-20">
    <LayoutHeader :items="HEADER_ITEMS" />
    <HeroSection />

    <Heading v-bind="HEADINGS.technologies" />
    <TechSection />

    <Heading v-bind="HEADINGS.projects" />
    <ProjectSection />

    <Heading v-bind="HEADINGS.about" />
    <AboutSection />

    <Heading v-bind="HEADINGS.contact" />
    <ContactSection />
  </main>

  <LayoutFooter />
</template>
