<script setup lang="ts">
  import { computed } from 'vue';
  import { useBreakpoints } from '@/lib';

  /* Props */
  interface Props {
    title: string;
    subtitle: string;
    hero: string;
    cta: string;
  }
  const props = defineProps<Props>();
  const { width } = useBreakpoints();
  const backgroundUrl = computed(() => `/images/${props.hero}.jpg`);
</script>

<template>
  <main id="landing">
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
        direction="col"
        :gap="width > 768 ? '2xl' : width > 640 ? 'xl' : 'lg'"
        :alignItems="width > 640 ? 'start' : 'center'"
      >
        <Flex
          is="hgroup"
          direction="col"
        >
          <Text
            :size="width > 1280 ? 'xl' : width > 1024 ? 'lg' : width > 768 ? 'md' : 'sm'"
            color="text-muted"
            >{{ props.subtitle }}</Text
          >
          <Heading
            :size="
              width > 1280
                ? '9xl'
                : width > 1024
                  ? '8xl'
                  : width > 768
                    ? '7xl'
                    : width > 640
                      ? '6xl'
                      : '5xl'
            "
            >{{ props.title }}</Heading
          >
        </Flex>
        <Button
          :size="width > 1280 ? 'xl' : width > 1024 ? 'lg' : 'md'"
          link
          :href="props.cta"
          ><span>Listen Now</span><Icon name="graphicEq"
        /></Button>
      </Flex>
      <div
        v-if="width > 640"
        class="accent-line"
      >
        &nbsp;
      </div>
    </Container>
    <SplashText scroll>mari park</SplashText>
    <div
      class="hero-background"
      :style="{ backgroundImage: `url(${backgroundUrl})` }"
    />
  </main>
</template>

<style>
  #landing {
    position: relative;
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
    z-index: -2;
  }

  #hero-image {
    width: var(--size-80);
    z-index: 1;
  }

  #hero-text {
    position: absolute;
    text-align: center;
    line-height: 1;
    z-index: 2;
  }

  #hero-text .heading {
    white-space: pre-line;
  }

  #landing .accent-line {
    align-self: stretch;
    margin-left: auto;
    width: 4px;
    border-radius: 4px;
    background-color: var(--text);
    opacity: 0.2;
  }

  @media (width > 640px) {
    #hero-image {
      position: relative;
      width: var(--size-64);
      transform: translateX(var(--hero-intersect));
      margin-left: auto;
    }

    #hero-text {
      position: relative;
      text-align: left;
      transform: translateX(calc(-1 * var(--hero-intersect)));
    }
  }
  @media (width > 768px) {
    #hero-image {
      width: var(--size-80);
    }
  }
  @media (width > 1024px) {
    #hero-image {
      width: var(--size-96);
    }
  }
  @media (width > 1280px) {
    #hero-image {
      width: 32rem;
    }
  }
</style>
