<script setup lang="ts">
import { Icon } from '@iconify/vue';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

defineProps<{
  items: { name: string; link: string }[];
}>();
</script>

<template>
  <div class="flex justify-between items-center mt-8 h-16">
    <div class="text-xl">
      <a href="/">Ricardo Adorno</a>
    </div>
    <div class="hidden md:flex gap-9 items-center">
      <ul class="flex space-x-9 text-lg font-semibold items-center">
        <li
          v-for="item in items"
          :key="item.name"
          class="relative after:hidden after:absolute after:left-0 after:w-full after:h-full after:bg-cyan-400 after:z-[-1] after:blur-[50px] hover:after:block">
          <a
            class="hover:before:w-full hover:before:left-0 before:absolute before:bottom-[-0.3rem] before:left-1/2 before:w-0 before:h-[2px] before:bg-primary before:transition-width before:duration-300 before:ease-in-out before:transition-left"
            :href="item.link"
            >{{ item.name }}</a
          >
        </li>
      </ul>
    </div>
    <div class="flex gap-4 items-center">
      <a
        href="https://github.com/ricardoadorno"
        target="_blank"
        rel="noopener noreferrer">
        <Icon icon="radix-icons:github-logo" class="w-8 h-8" />
      </a>
      <a
        :href="
          $i18n.locale === 'en'
            ? 'https://www.linkedin.com/in/ricardo-adorno/?locale=en_US'
            : 'https://www.linkedin.com/in/ricardo-adorno'
        "
        target="_blank"
        rel="noopener noreferrer">
        <Icon icon="radix-icons:linkedin-logo" class="w-8 h-8" />
      </a>
      <Select v-model="$i18n.locale">
        <SelectTrigger>
          <SelectValue />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectItem
              v-for="locale in $i18n.availableLocales"
              :key="`locale-${locale}`"
              :value="locale"
              >{{ $t(`header.locale.${locale}`) }}
            </SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  </div>
</template>
