<script setup lang="ts">
import { Icon } from '@iconify/vue';

defineProps<{
  name: string;
  description: string;
  icon: string;
}>();
</script>

<template>
  <div
    class="flex flex-col items-center justify-center border-2 border-primary-foreground bg-primary-background rounded-lg p-8 mb-4">
    <div
      class="flex items-center justify-center w-24 h-24 mx-auto rounded-full border-2 border-primary-foreground bg-primary-background mb-4">
      <Icon :icon="icon" class="w-12 h-12" />
    </div>
    <h4 class="scroll-m-20 text-xl font-semibold tracking-tight mb-2">
      {{ name }}
    </h4>
    <p class="text-xl text-muted-foreground">
      {{ description }}
    </p>
  </div>
</template>
