<script setup lang="ts">
import me from '@/assets/images/me_relaxed.jpg';
</script>

<template>
  <div
    class="flex items-center justify-between mb-10 md:flex-row flex-col-reverse">
    <div
      class="flex flex-col justify-center md:w-1/2 w-full"
      v-motion-slide-visible-once-left>
      <h3 class="scroll-m-20 text-2xl font-semibold tracking-tight">
        {{ $t('about.header') }}
      </h3>
      <p class="leading-7 [&:not(:first-child)]:mt-6">
        {{ $t('about.content.p1') }}
      </p>
      <p class="leading-7 [&:not(:first-child)]:mt-6">
        {{ $t('about.content.p2') }}
      </p>
      <p class="leading-7 [&:not(:first-child)]:mt-6">
        {{ $t('about.content.p3') }}
      </p>
    </div>

    <div class="p-5" v-motion-slide-visible-once-right>
      <img
        :src="me"
        class="rounded-2xl"
        alt="ricardo_relaxed"
        width="450"
        height="450" />
    </div>
  </div>
</template>
