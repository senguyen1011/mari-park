<script setup lang="ts">
  interface Props {
    src: string;
    alt: string;
    aspectRatio?: '1:1' | '2:3' | '3:2' | '9:16' | '16:9';
  }

  const props = defineProps<Props>();
</script>

<template>
  <div
    class="img"
    :class="props.aspectRatio && `aspect-${props.aspectRatio.replace(':', '-')}`"
  >
    <img
      :src="`/images/${props.src}.jpg`"
      :alt="props.alt"
    />
  </div>
</template>

<style>
  .img {
    overflow: hidden;
  }
  .img img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .img.aspect-1-1 {
    aspect-ratio: 1/1;
  }
  .img.aspect-2-3 {
    aspect-ratio: 2/3;
  }
  .img.aspect-3-2 {
    aspect-ratio: 3/2;
  }
  .img.aspect-9-16 {
    aspect-ratio: 9/16;
  }
  .img.aspect-16-9 {
    aspect-ratio: 16/9;
  }
</style>
