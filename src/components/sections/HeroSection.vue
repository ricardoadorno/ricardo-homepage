<script setup lang="ts">
import { Button } from '../ui/button';
</script>

<template>
  <div
    class="relative flex flex-wrap items-center justify-between min-h-screen md:py-2 py-8 gap-5 before:content-[''] before:absolute before:top-1/4 before:right-1/4 before:w-3/4 before:h-1/2 before:rounded-full before:bg-cyan-400 before:z-[-1] before:blur-[50px] before:filter before:opacity-30">
    <div
      v-motion-fade-visible-once
      class="flex flex-col justify-center gap-7 md:w-1/2 w-full md:text-start text-center">
      <h1
        class="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
        {{ $t('hero.header') }}
      </h1>

      <p class="leading-7 [&:not(:first-child)]:mt-6">
        {{ $t('hero.lead') }}
      </p>

      <div class="flex gap-x-4 justify-center md:justify-start">
        <Button>
          <a href="#projects">{{ $t('hero.buttonPrimary') }}</a>
        </Button>
        <Button variant="outline">
          <a href="#contact">{{ $t('hero.buttonSecondary') }}</a>
        </Button>
      </div>
    </div>
    <div v-motion-fade-visible-once>
      <img src="https://placehold.it/500x500" alt="profile" />
    </div>
  </div>
</template>
