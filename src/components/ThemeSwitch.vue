<script setup lang="ts">
import { Icon } from '@iconify/vue';
import { Switch } from '@/components/ui/switch';

defineProps<{
  mode: string;
}>();

defineEmits<{
  (event: 'update:mode'): boolean;
}>();
</script>

<template>
  <Switch
    class="absolute top-4 right-4"
    :checked="mode === 'dark'"
    @update:checked="$emit('update:mode')">
    <Icon :icon="`radix-icons:${mode === 'dark' ? 'sun' : 'moon'}`" />
  </Switch>
</template>
