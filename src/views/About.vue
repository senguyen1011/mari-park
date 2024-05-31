<script setup lang="ts">
  import GridItem from '@/components/layout/GridItem.vue';
  import { useBreakpoints } from '@/lib';
  /* Props */
  interface Props {
    bio: string;
    profile: string;
  }
  const props = defineProps<Props>();
  const { width } = useBreakpoints();
</script>

<template>
  <section id="about">
    <Container
      pad="xl"
      justifyContent="center"
      gap="lg"
    >
      <Grid
        id="about-content"
        v-if="width > 1024"
        :cols="12"
        gap="xl"
      >
        <GridItem :colSpan="width > 1280 ? 8 : 6">
          <Flex
            direction="col"
            gap="xl"
          >
            <Heading size="7xl">about</Heading>
            <Text align="justify">
              {{ props.bio }}
            </Text>
          </Flex>
        </GridItem>
        <GridItem :colSpan="width > 1280 ? 4 : 6">
          <Image
            :src="props.profile"
            alt="About mari park"
            aspectRatio="1:1"
          />
        </GridItem>
      </Grid>
      <Flex
        v-else
        direction="col"
        gap="lg"
      >
        <Heading :size="width > 640 ? '6xl' : '5xl'">about</Heading>
        <Text align="justify">
          {{ props.bio }}
        </Text>
        <Box
          :width="64"
          marX="auto"
        >
          <Image
            :src="props.profile"
            alt="About mari park"
            aspectRatio="1:1"
          />
        </Box>
      </Flex>
    </Container>
    <SplashText scroll>about</SplashText>
  </section>
</template>

<style>
  #about {
    position: relative;
    color: var(--text-light);
    background-color: var(--background-light);
  }

  #about-content {
    z-index: 1;
  }
  #about .splash-text {
    z-index: 0;
  }
</style>
