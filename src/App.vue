<script setup lang="ts">
  import config from '../site-config.json';
  import Navbar from '@/components/custom/Navbar.vue';
  import Landing from '@/views/Landing.vue';
  import About from '@/views/About.vue';
  import Discography from '@/views/Discography.vue';
  import Events from '@/views/Events.vue';
</script>

<template>
  <Navbar
    :links="[
      { name: 'About', path: '#about' },
      { name: 'Discography', path: '#discography' },
      { name: 'Events', path: '#events' },
      { name: 'Contact', path: `mailto: ${config.contactEmail}` },
    ]"
    :socials="config.socials"
  />
  <Landing
    :title="config.landing.title"
    :subtitle="config.landing.subtitle"
    :hero="config.landing.heroImage"
    :cta="config.landing.callToAction"
  />
  <About
    :profile="config.about.profileImage"
    :bio="config.about.bio"
  />
  <Discography :discography="config.discography" />
  <Events :events="config.events" />
  <Footer :socials="config.socials" />
</template>
