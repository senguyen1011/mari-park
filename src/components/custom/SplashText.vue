<script setup lang="ts">
  /* Props */
  interface Props {
    scroll?: boolean;
  }
  const props = withDefaults(defineProps<Props>(), {
    scroll: false,
  });
</script>

<template>
  <div class="splash-text">
    <div
      v-if="scroll"
      class="scroll-container"
    >
      <div class="scroll-text">
        <span><slot></slot></span>
      </div>
      <div class="scroll-text">
        <span><slot></slot></span>
      </div>
    </div>
    <span v-else><slot></slot></span>
  </div>
</template>

<style>
  .splash-text {
    position: absolute;
    top: 0;
    z-index: -1;
    width: 100%;
    height: 100%;
    font-family: var(--font-display);
    font-size: var(--size-32);
    writing-mode: vertical-lr;
    opacity: 15%;
    pointer-events: none;
  }
  @media (width > 640px) {
    .splash-text {
      font-size: var(--size-40);
    }
  }
  @media (width > 768px) {
    .splash-text {
      font-size: var(--size-48);
    }
  }
  @media (width > 1024px) {
    .splash-text {
      font-size: var(--size-64);
    }
  }
  .scroll-container {
    position: relative;
    overflow: hidden;
    width: 100%;
    height: 100%;
  }

  .scroll-text {
    --scroll-duration: 60s;
    --scroll-distance: 150%;
    position: absolute;
    animation: var(--animation-value);
    -moz-animation: var(--animation-value);
    -webkit-animation: var(--animation-value);
  }
  .scroll-text:first-of-type {
    --animation-value: scroll-first var(--scroll-duration) linear infinite;
  }
  .scroll-text:last-of-type {
    --animation-value: scroll-second var(--scroll-duration) linear infinite;
  }
  @keyframes scroll-first {
    0% {
      transform: translateY(0%);
    }

    100% {
      transform: translateY(calc(-1 * var(--scroll-distance)));
    }
  }

  @keyframes scroll-second {
    0% {
      transform: translateY(var(--scroll-distance));
    }

    100% {
      transform: translateY(0%);
    }
  }
</style>
