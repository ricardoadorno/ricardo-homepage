<script setup lang="ts"></script>

<template>
  <div
    class="flex items-center justify-between mb-10 md:flex-row flex-col-reverse">
    <div
      class="flex flex-col justify-center md:w-1/2 w-full"
      v-motion-slide-visible-once-left>
      <h3 class="scroll-m-20 text-2xl font-semibold tracking-tight">
        A Developer with great aspirations
      </h3>
      <p class="leading-7 [&:not(:first-child)]:mt-6">
        Hello! I'm Ricardo, an Information Systems student and FullStack
        Developer. I'm passionate about learning new technologies and creating
        new things. I'm currently looking for an opportunity to grow as a
        developer.
      </p>
      <p class="leading-7 [&:not(:first-child)]:mt-6">
        I'm also a very passionate person about business and innovation. I'm
        aspire to be a technical leader, I love to work on teams, learn from
        others and teach others, for me is very important to foster a culture of
        learning and growth.
      </p>
      <p class="leading-7 [&:not(:first-child)]:mt-6">
        My dream is to be the CTO of Notion or a similar company, I want to be
        able to create a product that helps people to be more productive and
        creative.
      </p>
    </div>

    <div class="p-5" v-motion-slide-visible-once-right>
      <img
        src="https://placehold.it/450x450"
        class="rounded-full"
        alt="avatar" />
    </div>
  </div>
</template>
