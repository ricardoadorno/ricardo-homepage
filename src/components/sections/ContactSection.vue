<script setup lang="ts">
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Icon } from '@iconify/vue';
import Button from '../ui/button/Button.vue';

const SOCIALS_LINKS = [
  {
    name: 'Whatsapp',
    link: 'whatsapp',
    icon: 'uil:whatsapp',
  },
  {
    name: 'Github',
    link: 'github',
    icon: 'uil:github',
  },
  {
    name: 'Linkedin',
    link: 'linkedin',
    icon: 'uil:linkedin',
  },
];
</script>

<template>
  <div
    class="flex justify-center items-center gap-8 pb-16 mt-8 flex-col md:flex-row md:gap-16 md:pb-24 md:mt-8 d:flex-inverted">
    <!-- <form
      v-motion-fade-visible-once
      class="flex flex-col justify-center items-center px-8 py-16 mb-4 gap-4 border-4 rounded-2xl border-muted-foreground md:w-1/3 w-full">
      <h4 class="text-center text-3xl font-bold text-primary mb-4">
        Send me a message
      </h4>
      <Input type="text" placeholder="Name" />
      <Input type="email" placeholder="Email" />
      <Textarea placeholder="Message" class="resize-none" />
      <Button class="py-2 px-6 text-lg w-full" type="submit"> Send </Button>
    </form> -->

    <div>
      <img src="https://via.placeholder.com/300" alt="contact" />
    </div>

    <div
      v-motion-fade-visible-once
      class="flex flex-col px-8 pt-6 pb-8 mb-4 self-start md:w-1/3 w-full">
      <h4 class="text-3xl font-bold text-primary mb-4">
        {{ $t('contact.header') }}
      </h4>
      <p class="text-gray-600 text-base mb-4 leading-relaxed tracking-wide">
        {{ $t('contact.lead') }}
      </p>
      <div
        v-for="social in SOCIALS_LINKS"
        :key="social.name"
        class="text-xl my-2 text-start hover:text-primary hover:cursor-pointer">
        <a
          :href="$t(`socials.${social.link}`)"
          target="_blank"
          class="flex items-center gap-1">
          <Icon
            :icon="social.icon"
            class="mr-2 flex place-items-center t"
            size="24px" />
          {{ social.name }}
        </a>
      </div>
    </div>
  </div>
</template>
