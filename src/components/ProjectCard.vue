<script setup lang="ts">
import Button from './ui/button/Button.vue';

defineProps<{
  name: string;
  description: string;
  link: string;
  inverted?: boolean;
}>();
</script>

<template>
  <div
    class="flex items-center justify-between gap-16 md:flex-row flex-col"
    :class="inverted ? 'md:flex-row-reverse' : 'md:flex-row'">
    <div
      class="flex flex-col justify-center items-start md:w-1/2 w-full mt-5 md:mt-0">
      <small class="text-sm font-semibold mb-2"> Consuming API's</small>
      <h4 class="scroll-m-20 text-xl font-semibold tracking-tight">
        Movies DB Api
      </h4>
      <p class="leading-7 [&:not(:first-child)]:mt-6">
        A app that uses the Movies DB Api to show the most popular movies and
        the most rated movies. It also has a search bar to search for movies.
      </p>
      <Button class="mt-3 text-lg w-1/2" :href="link" target="_blank"
        >Take a Look!</Button
      >
    </div>
    <div>
      <img src="https://placehold.it/600x300" alt="avatar" />
    </div>
  </div>
</template>
