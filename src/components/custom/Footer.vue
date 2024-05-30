<script setup lang="ts">
  import { type Ref, ref } from 'vue';
  import type { socialLink } from '.';
  /* Props */
  interface Props {
    socials: socialLink[];
  }
  const props = defineProps<Props>();
</script>

<template>
  <footer id="footer">
    <Container
      pad="xl"
      justifyContent="center"
      alignItems="center"
      gap="md"
    >
      <Button
        v-for="social in props.socials"
        :key="`footer-icon-${social.site}`"
        :href="social.path"
        size="xl"
        type="ghost"
        link
        icon
      >
        <Icon :name="social.icon" />
      </Button>
    </Container>
  </footer>
</template>

<style>
  #footer {
    background-color: var(--background);
  }
</style>
