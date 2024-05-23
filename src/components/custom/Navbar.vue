<script setup lang="ts">
  import { type Ref, ref } from 'vue';

  /* Types */
  type navLink = {
    name: string;
    path: string;
  };

  type socialLink = {
    site: string;
    path: string;
  };

  /* Props */
  interface Props {
    links: navLink[];
    socials: socialLink[];
  }

  const props = defineProps<Props>();

  const active: Ref<string> = ref('');
</script>

<template>
  <Flex
    id="nav-wrapper"
    justifyContent="center"
    alignItems="center"
  >
    <Container
      padY="sm"
      padX="xl"
      justifyContent="between"
      alignItems="center"
      gap="md"
    >
      <a
        id="brand"
        href="/"
      >
        maripark
      </a>
      <Flex
        is="nav"
        gap="sm"
      >
        <a
          v-for="link in props.links"
          :key="`nav-link-${link.name}`"
          :href="link.path"
          class="nav-link"
          :class="{ active: active === link.name.toLowerCase() }"
        >
          {{ link.name }}
        </a>
      </Flex>
      <span> </span>
    </Container>
  </Flex>
</template>

<style>
  :root {
    --nav-height: var(--size-16);
  }

  #nav-wrapper {
    position: absolute;
    width: 100vw;
    height: var(--nav-height);
    color: var(--text);
    background-color: var(--foreground);
    z-index: 100;
  }

  #brand {
    font-family: var(--font-body);
    font-size: var(--font-3xl);
    color: inherit;
    text-transform: lowercase;
  }

  .nav-link {
    width: var(--size-20);
    color: inherit;
    text-align: center;
    text-transform: uppercase;
  }
</style>
