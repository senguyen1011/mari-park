<script setup lang="ts">
  import { ref, onMounted, type Ref } from 'vue';
  import { useBreakpoints } from '@/lib';
  import type { socialLink } from '.';

  /* Types */
  type navLink = {
    name: string;
    path: string;
  };

  /* Props */
  interface Props {
    links: navLink[];
    socials: socialLink[];
  }
  const props = defineProps<Props>();

  /* Scroll Functionality */
  const onLanding: Ref<boolean> = ref(true);
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(({ isIntersecting }) => {
        onLanding.value = isIntersecting;
      });
    },
    {
      root: document.querySelector('#root'),
      rootMargin: '0px',
      threshold: [0.75],
    }
  );

  onMounted(() => {
    observer.observe(document.querySelector('#landing')!);
  });

  const { width } = useBreakpoints();
</script>

<template>
  <Flex
    id="nav-wrapper"
    justifyContent="center"
    alignItems="center"
    :class="{ 'on-landing': onLanding }"
  >
    <Container
      padY="sm"
      padX="xl"
      :direction="width > 640 ? 'row' : 'col'"
      :justifyContent="width > 640 ? 'between' : 'center'"
      alignItems="center"
      :gap="width > 640 ? 'md' : 'xs'"
    >
      <a
        id="brand"
        href="#landing"
      >
        maripark
      </a>
      <Flex
        is="nav"
        gap="sm"
      >
        <Button
          v-for="link in props.links"
          :key="`nav-link-${link.name}`"
          :href="link.path"
          class="nav-link"
          type="ghost"
          link
        >
          {{ link.name }}
        </Button>
      </Flex>
      <Dropdown
        v-if="width > 640"
        size="xl"
        type="ghost"
        icon
        align="right"
      >
        <template #button>
          <Icon name="queueMusic" />
        </template>
        <template #options>
          <DropdownOption
            v-for="social in props.socials"
            :key="`social-link-${social.site}`"
          >
            <a
              class="dropdown-social-link"
              :href="social.path"
            >
              <Icon :name="social.icon" />
            </a>
          </DropdownOption>
        </template>
      </Dropdown>
    </Container>
  </Flex>
</template>

<style>
  :root {
    --nav-height: var(--size-24);
  }
  @media (width > 640px) {
    :root {
      --nav-height: var(--size-16);
    }
  }

  #nav-wrapper {
    position: fixed;
    width: 100vw;
    height: var(--nav-height);
    color: var(--text);
    background-color: var(--background-navbar);
    -webkit-backdrop-filter: blur(2px);
    backdrop-filter: blur(2px);
    z-index: 1000;
    transition-property: background-color, backdrop-filter;
    transition-timing-function: var(--transition-ease);
    transition-duration: 300ms;
  }
  #nav-wrapper.on-landing {
    background-color: transparent;
    -webkit-backdrop-filter: blur(0px);
    backdrop-filter: blur(0px);
  }
  #nav-wrapper.on-landing .nav-link {
    -webkit-backdrop-filter: blur(0px);
    backdrop-filter: blur(0px);
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

  .dropdown-social-link {
    display: flex;
    align-items: center;
    height: var(--space-xl);
  }
</style>
