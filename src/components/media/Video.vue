<script setup lang="ts">
  interface Props {
    src: string;
    aspectRatio?: '1:1' | '2:3' | '3:2' | '9:16' | '16:9';
  }

  const props = defineProps<Props>();
</script>

<template>
  <div
    class="vid"
    :class="props.aspectRatio && `aspect-${props.aspectRatio.replace(':', '-')}`"
  >
    <iframe
      :src="props.src"
      title="YouTube video player"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      referrerpolicy="strict-origin-when-cross-origin"
      allowfullscreen
    ></iframe>
  </div>
</template>

<style>
  .vid {
    width: 100%;
    overflow: hidden;
  }
  .vid iframe {
    width: 100%;
    height: 100%;
  }

  .vid.aspect-1-1 {
    aspect-ratio: 1/1;
  }
  .vid.aspect-2-3 {
    aspect-ratio: 2/3;
  }
  .vid.aspect-3-2 {
    aspect-ratio: 3/2;
  }
  .vid.aspect-9-16 {
    aspect-ratio: 9/16;
  }
  .vid.aspect-16-9 {
    aspect-ratio: 16/9;
  }
</style>
