<script setup lang="ts">
  import { computed, type ComputedRef } from 'vue';
  import { addToClasses } from '@/lib';
  import type { ButtonProps } from '.';

  /* Props */
  const props = withDefaults(defineProps<ButtonProps>(), {
    size: 'md',
    color: 'light',
  });

  /* Classes */
  const classes: ComputedRef<string[]> = computed(() => {
    const res: string[] = [];
    addToClasses(res, props.size);
    addToClasses(res, props.color);
    addToClasses(res, props.type);
    props.icon && res.push('icon');

    return res;
  });
</script>

<template>
  <a
    v-if="props.link"
    class="btn"
    :class="classes"
  >
    <slot></slot>
  </a>
  <button
    v-else
    class="btn"
    :class="classes"
  >
    <slot></slot>
  </button>
</template>

<style>
  .btn {
    height: var(--height);
    width: fit-content;
    padding: var(--size-px) var(--pad-x);
    display: inline-flex;
    justify-content: center;
    align-items: center;
    gap: var(--gap);
    font-family: var(--font-body);
    font-size: var(--font-size);
    color: var(--btn-color);
    text-transform: uppercase;
    background-color: var(--btn-background);
    border-width: 1px;
    border-style: solid;
    border-color: var(--btn-border);
    -webkit-backdrop-filter: blur(2px);
    backdrop-filter: blur(2px);
    cursor: pointer;
    transition-property: color, background-color, border-color, box-shadow;
    transition-timing-function: var(--transition-ease);
    transition-duration: var(--transition-time);
  }
  .btn:active {
    box-shadow: var(--focus-ring);
  }

  .btn.md {
    --height: var(--space-xl);
    --pad-x: var(--space-md);
    --gap: var(--space-sm);
    --font-size: var(--font-md);
  }
  .btn.lg {
    --height: var(--space-2xl);
    --pad-x: var(--space-lg);
    --gap: var(--space-sm);
    --font-size: var(--font-lg);
  }
  .btn.xl {
    --height: var(--space-3xl);
    --pad-x: var(--space-xl);
    --gap: var(--space-md);
    --font-size: var(--font-xl);
  }

  .btn.light {
    --btn-background: var(--foreground-2);
    --btn-color: var(--text);
    --btn-border: transparent;
    --focus-ring: 0 0 0 2px var(--background), 0 0 0 3px var(--focus);
  }
  .btn.light:hover,
  .btn.light:focus,
  .btn.light.active {
    --btn-background: var(--background-accent);
  }
  .btn.light:active {
    --btn-background: var(--background-accent-2);
  }

  .btn.light.ghost {
    --btn-background: transparent;
    --btn-color: var(--text);
    --btn-border: transparent;
    --focus-ring: 0 0 0 2px var(--background), 0 0 0 3px var(--focus);
  }
  .btn.light.ghost:hover,
  .btn.light.ghost:focus,
  .btn.light.ghost.active {
    --btn-background: var(--background-accent);
  }
  .btn.light.ghost:active {
    --btn-background: var(--background-accent-2);
  }

  .btn.xs .icon {
    --size: var(--font-sm);
  }
  .btn.sm .icon {
    --size: var(--font-md);
  }
  .btn.md .icon {
    --size: var(--font-lg);
  }
  .btn.lg .icon {
    --size: var(--font-xl);
  }
  .btn.xl .icon {
    --size: var(--font-2xl);
  }

  .btn.icon {
    display: flex;
    height: var(--height);
    width: var(--height);
    padding: 0;
  }
</style>
