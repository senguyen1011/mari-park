<script setup lang="ts">
  import { useBreakpoints } from '@/lib';

  /* Types */
  interface event {
    date: string;
    location: string;
    venue: string;
    path: string;
  }

  /* Props */
  interface Props {
    events?: event[];
  }
  const props = defineProps<Props>();
  const { width } = useBreakpoints();
</script>

<template>
  <section id="events">
    <Container
      pad="xl"
      direction="col"
      :gap="width > 1024 ? 'xl' : 'lg'"
    >
      <Heading :size="width > 1024 ? '7xl' : width > 640 ? '6xl' : '5xl'">events</Heading>
      <Flex
        v-if="props.events"
        is="ul"
        direction="col"
        gap="md"
      >
        <li
          v-for="event in props.events"
          :key="`event-${event.date}-${event.location}`"
        >
          <Flex
            v-if="width > 640"
            gap="lg"
            justifyContent="between"
            alignItems="center"
          >
            <Flex
              gap="xl"
              alignItems="center"
            >
              <Text size="xl">{{ event.date }}</Text>
              <Text>{{ event.location }} @ {{ event.venue }}</Text>
            </Flex>
            <template v-if="width > 640">
              <div class="li-line"></div>
              <Button
                :href="event.path"
                target="_blank"
                link
                >Tickets</Button
              >
            </template>
          </Flex>

          <Button v-else
            ><Text size="xl">{{ event.date }}</Text> - {{ event.location }} @ {{ event.venue }}
          </Button>
        </li>
      </Flex>
      <Text
        v-else
        size="xl"
        color="text-muted"
        >No shows currently available</Text
      >
    </Container>
    <SplashText scroll>events</SplashText>
  </section>
</template>

<style>
  #events {
    position: relative;
  }
  #events ul {
    white-space: nowrap;
  }
  .li-line {
    width: 100%;
    border-bottom: 1px solid var(--border);
  }
</style>
