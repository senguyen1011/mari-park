<!-- <script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <header>
    <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />

    <div class="wrapper">
      <HelloWorld msg="You did it!" />

      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
</template>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style> -->

<script setup lang="ts">
  import Navbar from '@/components/custom/Navbar.vue';
  import Landing from '@/views/Landing.vue';
</script>

<template>
  <Navbar
    :links="[
      { name: 'About', path: '#about' },
      { name: 'Discography', path: '#discography' },
      { name: 'Events', path: '#events' },
      { name: 'Contact', path: '#contact' },
    ]"
    :socials="[
      { site: 'Bandcamp', path: 'https://maripark.bandcamp.com/music' },
      {
        site: 'Spotify',
        path: 'https://open.spotify.com/artist/4BdVSgljeKysPvPGoVapuv?si=z9dSLY2QQ8-yRkJyAytffw',
      },
      { site: 'Apple Music', path: 'https://music.apple.com/us/artist/mari-park/1650004928' },
      { site: 'Instagram', path: 'https://www.instagram.com/maripark__/' },
    ]"
  />
  <Landing
    :title="'ditch lily\nevery time'"
    subtitle="new single - mar 30 2024"
    hero="ditchLily-everyTime"
    cta="https://maripark.bandcamp.com/album/ditch-lily-every-time"
  />
</template>
