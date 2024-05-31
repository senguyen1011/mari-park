<script setup lang="ts">
  import { onMounted, ref, type Ref } from 'vue';
  import { useBreakpoints } from '@/lib';

  /* Props */
  interface Props {
    visibleItems?: 1 | 2 | 3;
  }
  const props = withDefaults(defineProps<Props>(), {
    visibleItems: 1,
  });

  const { width } = useBreakpoints();
  const wrapper = ref();
  const wrapperWidth: Ref<number> = ref(0);
  const carouselSize: Ref<number> = ref(0);
  const stepSize: Ref<number> = ref(0);
  const steps: Ref<number> = ref(0);

  onMounted(() => {
    wrapperWidth.value = wrapper.value.scrollWidth;
    carouselSize.value = wrapper.value.childElementCount / props.visibleItems;
    stepSize.value = wrapperWidth.value / carouselSize.value;
  });

  function handleStep(dir: -1 | 1) {
    steps.value += dir;

    if (steps.value < 0) {
      steps.value = carouselSize.value - 1;
    } else if (steps.value >= carouselSize.value) {
      steps.value = 0;
    }
  }
</script>

<template>
  <div class="carousel-wrapper">
    <div
      class="carousel"
      :class="`visible-${props.visibleItems}`"
    >
      <div
        class="carousel-container"
        ref="wrapper"
        :style="{
          transform: `translateX(-${stepSize * steps}px)`,
        }"
      >
        <slot></slot>
      </div>
    </div>
    <div
      class="step-buttons"
      v-if="carouselSize > 1"
    >
      <button @click="handleStep(-1)">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 -960 960 960"
        >
          <path d="M560-240 320-480l240-240 56 56-184 184 184 184-56 56Z" />
        </svg>
        <span v-if="width > 640">Prev</span>
      </button>
      <div class="step-progress">
        <span
          v-for="ind in carouselSize"
          :key="`step-${ind}`"
          class="step-indicator"
          :class="{ active: ind - 1 === steps }"
        />
      </div>
      <button @click="handleStep(1)">
        <span v-if="width > 640">Next</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 -960 960 960"
        >
          <path d="M504-480 320-664l56-56 240 240-240 240-56-56 184-184Z" />
        </svg>
      </button>
    </div>
  </div>
</template>

<style>
  .carousel {
    width: 100%;
    height: 100%;
    overflow: hidden;
  }

  .carousel.visible-1 {
    --carousel-width: 100%;
  }
  .carousel.visisble-2 {
    --carousel-width: 50%;
  }
  .carousel.visible-3 {
    --carousel-width: calc(100% / 3);
  }

  .carousel-container {
    white-space: nowrap;
    transition: transform 200ms var(--transition-ease);
  }

  .carousel-container > * {
    width: var(--carousel-width);
    display: inline-flex;
    align-items: center;
    justify-content: center;
  }

  .step-buttons {
    width: 100%;
    padding-top: var(--space-md);
    display: flex;
    justify-content: space-between;
    gap: var(--space-md);
    align-items: center;
    z-index: 3;
    pointer-events: none;
  }

  .step-buttons button {
    height: var(--space-xl);
    width: var(--space-xl);
    padding: 0;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    gap: var(--space-sm);
    color: var(--text);
    background-color: var(--foreground-2);
    border: none;
    outline: none;
    -webkit-backdrop-filter: blur(2px);
    backdrop-filter: blur(2px);
    cursor: pointer;
    transition-property: color, background-color, border-color, box-shadow;
    transition-timing-function: var(--transition-ease);
    transition-duration: var(--transition-time);
    pointer-events: all;
  }

  @media (width > 640) {
    .step-buttons button {
      width: fit-content;
      padding: var(--size-px) var(--space-md);
    }
  }

  .step-buttons button:hover,
  .step-buttons button:focus {
    background-color: var(--background-accent);
  }
  .step-buttons button:active {
    background-color: var(--background-accent-2);
    box-shadow:
      0 0 0 2px var(--background),
      0 0 0 3px var(--focus);
  }

  .step-buttons svg {
    --size: var(--font-lg);
    height: var(--size);
    width: var(--size);
    fill: currentColor;
  }

  .step-progress {
    display: inline-flex;
    width: 50%;
    gap: var(--space-sm);
  }

  .step-indicator {
    width: 100%;
    height: 5px;
    background-color: var(--foreground-2);
  }

  .step-indicator.active {
    background-color: var(--background-accent-a);
  }
</style>
