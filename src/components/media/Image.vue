<script setup lang="ts">
  interface Props {
    src: string;
    alt: string;
    aspectRatio?: '1:1' | '2:3' | '3:2' | '9:16' | '16:9';
  }

  const props = defineProps<Props>();
</script>

<template>
  <img
    :src="`/images/${props.src}.jpg`"
    :alt="props.alt"
    class="image"
    :class="props.aspectRatio"
  />
</template>

<style>
  .image {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }

  .image.\1\:1 {
    aspect-ratio: 1;
  }
  .image.\2\:3 {
    aspect-ratio: 2/3;
  }
  .image.\3\:2 {
    aspect-ratio: 3/2;
  }
  .image.\9\:16 {
    aspect-ratio: 9/16;
  }
  .image.\16\:9 {
    aspect-ratio: 16/9;
  }
</style>
