<script setup lang="ts">
import { Icon } from '@iconify/vue';

defineProps<{
  name: string;
  icon: string;
}>();
</script>

<template>
  <div
    class="flex flex-col items-center justify-center border-2 border-primary-foreground bg-primary-background rounded-lg p-4 mb-4">
    <Icon :icon="icon" class="w-12 h-12 m-4" />
    <h4 class="scroll-m-20 text-lg font-semibold tracking-tight mb-2">
      {{ $t(`technologies.items.${name}.title`) }}
    </h4>
    <!-- <p class="text-md text-muted-foreground">
      {{ $t(`technologies.items.${name}.description`) }}
    </p> -->
  </div>
</template>
