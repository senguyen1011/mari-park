<script setup lang="ts">
  import { computed, type ComputedRef } from 'vue';
  import { useBreakpoints } from '@/lib';

  /* Types */
  interface release {
    title: string;
    art: string;
    release: string;
    bandcamp?: string;
    spotify?: string;
    appleMusic?: string;
  }
  interface featureRelease extends release {
    artists: string;
  }
  interface discography {
    albums: release[];
    singles: release[];
    features: featureRelease[];
  }
  /* Props */
  interface Props {
    discography: discography;
  }
  const props = defineProps<Props>();
  const { width } = useBreakpoints();
  const gridSize: ComputedRef<number> = computed(() => {
    if (width.value > 1024) {
      return 4;
    } else if (width.value > 768) {
      return 3;
    } else if (width.value > 640) {
      return 2;
    }
    return 1;
  });
</script>

<template>
  <section id="discography">
    <Container
      pad="xl"
      direction="col"
      :gap="width > 1024 ? 'xl' : 'lg'"
    >
      <Heading :size="width > 1024 ? '7xl' : width > 640 ? '6xl' : '5xl'">discography</Heading>
      <Heading :size="width > 1024 ? '5xl' : width > 640 ? '4xl' : '3xl'">albums</Heading>
      <Grid
        :cols="gridSize"
        :rows="Math.ceil(props.discography.albums.length / gridSize)"
        gap="lg"
      >
        <GridItem
          v-for="item in props.discography.albums"
          :key="`discography-${item.art}`"
        >
          <Flex
            direction="col"
            alignItems="center"
            gap="sm"
          >
            <div class="disc-item">
              <div class="disc-overlay">
                <Text>{{ item.release }}</Text>
                <Flex gap="md">
                  <Button
                    :href="item.bandcamp"
                    target="_blank"
                    type="ghost"
                    color="light"
                    icon
                    link
                    ><Icon name="bandcamp"
                  /></Button>
                  <Button
                    :href="item.spotify"
                    target="_blank"
                    type="ghost"
                    color="light"
                    icon
                    link
                    ><Icon name="spotify"
                  /></Button>
                  <Button
                    :href="item.appleMusic"
                    target="_blank"
                    type="ghost"
                    color="light"
                    icon
                    link
                    ><Icon name="appleMusic"
                  /></Button>
                </Flex>
              </div>
              <Image
                :src="item.art"
                :alt="item.title"
                aspectRatio="1:1"
              />
            </div>
            <Text>{{ item.title }}</Text>
          </Flex>
        </GridItem>
      </Grid>
      <Heading :size="width > 1024 ? '5xl' : width > 640 ? '4xl' : '3xl'">singles</Heading>
      <Grid
        :cols="gridSize"
        :rows="Math.ceil(props.discography.singles.length / gridSize)"
        gap="lg"
      >
        <GridItem
          v-for="item in props.discography.singles"
          :key="`discography-${item.art}`"
        >
          <Flex
            direction="col"
            alignItems="center"
            gap="sm"
          >
            <div class="disc-item">
              <div class="disc-overlay">
                <Text>{{ item.release }}</Text>
                <Flex gap="md">
                  <Button
                    :href="item.bandcamp"
                    target="_blank"
                    type="ghost"
                    color="light"
                    icon
                    link
                    ><Icon name="bandcamp"
                  /></Button>
                  <Button
                    :href="item.spotify"
                    target="_blank"
                    type="ghost"
                    color="light"
                    icon
                    link
                    ><Icon name="spotify"
                  /></Button>
                  <Button
                    :href="item.appleMusic"
                    target="_blank"
                    type="ghost"
                    color="light"
                    icon
                    link
                    ><Icon name="appleMusic"
                  /></Button>
                </Flex>
              </div>
              <Image
                :src="item.art"
                :alt="item.title"
                aspectRatio="1:1"
              />
            </div>
            <Text>{{ item.title }}</Text>
          </Flex>
        </GridItem>
      </Grid>
      <Heading :size="width > 1024 ? '5xl' : width > 640 ? '4xl' : '3xl'">featured on</Heading>
      <Grid
        :cols="gridSize"
        :rows="Math.ceil(props.discography.features.length / gridSize)"
        gap="lg"
      >
        <GridItem
          v-for="item in props.discography.features"
          :key="`discography-${item.art}`"
        >
          <Flex
            direction="col"
            alignItems="center"
            gap="sm"
          >
            <div class="disc-item">
              <div class="disc-overlay">
                <Text>{{ item.release }}</Text>
                <Text size="sm">{{ item.artists }}</Text>
                <Flex gap="md">
                  <Button
                    :href="item.bandcamp"
                    target="_blank"
                    type="ghost"
                    color="light"
                    icon
                    link
                    ><Icon name="bandcamp"
                  /></Button>
                  <Button
                    :href="item.spotify"
                    target="_blank"
                    type="ghost"
                    color="light"
                    icon
                    link
                    ><Icon name="spotify"
                  /></Button>
                  <Button
                    :href="item.appleMusic"
                    target="_blank"
                    type="ghost"
                    color="light"
                    icon
                    link
                    ><Icon name="appleMusic"
                  /></Button>
                </Flex>
              </div>
              <Image
                :src="item.art"
                :alt="item.title"
                aspectRatio="1:1"
              />
            </div>
            <Text>{{ item.title }}</Text>
          </Flex>
        </GridItem>
      </Grid>
    </Container>
    <SplashText scroll>discography</SplashText>
  </section>
</template>

<style>
  #discography {
    position: relative;
  }

  .disc-item {
    position: relative;
  }

  .disc-overlay {
    position: absolute;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: var(--space-sm);
    width: 100%;
    height: 100%;
    opacity: 0;
    background-color: var(--background-accent-a);
    -webkit-backdrop-filter: blur(2px);
    backdrop-filter: blur(2px);
    transition-property: opacity;
    transition-timing-function: var(--transition-ease);
    transition-duration: var(--transition-time);
  }
  .disc-item:hover .disc-overlay {
    opacity: 1;
  }
</style>
