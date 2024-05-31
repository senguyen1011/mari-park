<script setup lang="ts">
  import { useBreakpoints } from '@/lib';

  // /* Props */
  interface Props {
    videos: string[];
  }
  const props = defineProps<Props>();
  const { width } = useBreakpoints();
</script>

<template>
  <section id="videos">
    <Container
      pad="xl"
      direction="col"
      :gap="width > 1024 ? 'xl' : 'lg'"
    >
      <Heading :size="width > 1024 ? '7xl' : width > 640 ? '6xl' : '5xl'">videos</Heading>
      <Carousel>
        <div v-for="video in videos">
          <Video
            :src="video"
            aspectRatio="16:9"
          />
        </div>
      </Carousel>
    </Container>
    <SplashText scroll>videos</SplashText>
  </section>
</template>

<style>
  #videos {
    position: relative;
  }
</style>
