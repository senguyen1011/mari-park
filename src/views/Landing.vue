<script setup lang="ts">
  import { computed } from 'vue';

  /* Props */
  interface Props {
    title: string;
    subtitle: string;
    hero: string;
    cta: string;
  }
  const props = defineProps<Props>();

  const backgroundUrl = computed(() => `/images/${props.hero}.jpg`);
</script>

<template>
  <main
    id="landing"
    class="dark"
  >
    <Container
      pad="xl"
      justifyContent="center"
      alignItems="center"
    >
      <div id="hero-image">
        <Image
          :src="props.hero"
          :alt="props.title"
          aspectRatio="1:1"
        />
      </div>

      <Flex
        id="hero-text"
        is="hgroup"
        direction="col"
      >
        <Text
          size="xl"
          color="text-muted"
          >{{ props.subtitle }}</Text
        >
        <Heading size="9xl">{{ props.title }}</Heading>
      </Flex>
    </Container>
    <SplashText>maripark</SplashText>
    <div
      class="hero-background"
      :style="{ backgroundImage: `url(${backgroundUrl})` }"
    />
  </main>
</template>

<style>
  #landing {
    position: relative;
    width: 100vw;
    padding-top: var(--nav-height);
    background-color: #12111340;
    overflow: hidden;

    --hero-intersect: var(--space-2xl);
  }
  .hero-background {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-size: cover;
    filter: blur(12px);
    -webkit-filter: blur(12px);
    z-index: -1;
  }

  #hero-image {
    width: 512px;
    transform: translateX(var(--hero-intersect));
    z-index: 0;
  }

  #hero-text {
    line-height: 1;
    transform: translateX(calc(-1 * var(--hero-intersect)));
    z-index: 1;
  }

  #hero-text .heading {
    white-space: pre-line;
  }
</style>
