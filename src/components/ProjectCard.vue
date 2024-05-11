<script setup lang="ts">
import Button from './ui/button/Button.vue';

defineProps<{
  name: string;
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
      <small
        class="text-sm font-semibold mb-2 text-[#FFD700] dark:text-[#FFD700]">
        {{ $t(`projects.items.${name}.subtitle`) }}
      </small>
      <h4 class="scroll-m-20 text-xl font-semibold tracking-tight">
        {{ $t(`projects.items.${name}.title`) }}
      </h4>
      <p class="leading-7 [&:not(:first-child)]:mt-6">
        {{ $t(`projects.items.${name}.lead`) }}
      </p>
      <Button class="mt-3 text-lg w-1/2" :href="link" target="_blank">
        {{ $t('projects.ctaButton') }}
      </Button>
    </div>
    <div>
      <img src="https://placehold.it/600x300" alt="avatar" />
    </div>
  </div>
</template>
