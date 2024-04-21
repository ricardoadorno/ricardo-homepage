<script setup lang="ts">
defineProps<{
  id: string;
  text: string;
}>();
</script>

<template>
  <h2
    :id="id"
    class="border-b mb-12 py-4 text-3xl font-semibold tracking-tight transition-colors first:mt-0 text-center">
    {{ text }}
  </h2>
</template>
