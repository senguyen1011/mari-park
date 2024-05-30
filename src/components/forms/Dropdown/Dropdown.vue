<script setup lang="ts">
  import { computed, ref, type ComputedRef, type Ref } from 'vue';
  import { addToClasses } from '@/lib';
  import type { ButtonProps } from '../index';

  /* Props */
  interface Props extends ButtonProps {
    align: 'left' | 'right';
  }
  const props = withDefaults(defineProps<Props>(), {
    align: 'left',
  });

  /* Classes */
  const classes: ComputedRef<string[]> = computed(() => {
    const res: string[] = [];
    addToClasses(res, props.size);
    addToClasses(res, props.align);
    return res;
  });

  const isVisible: Ref<boolean> = ref(false);
</script>

<template>
  <div class="dropdown">
    <Button
      :size="props.size"
      :color="props.color"
      :type="props.type"
      :link="props.link"
      :icon="props.icon"
      @click="isVisible = !isVisible"
      :class="{ active: isVisible }"
    >
      <slot name="button"></slot>
    </Button>
    <ul
      v-if="isVisible"
      class="dropdown-options"
      :class="classes"
    >
      <slot name="options"></slot>
    </ul>
  </div>
  <div
    v-if="isVisible"
    class="dropdown-dismiss"
    @click="isVisible = false"
  />
</template>

<style>
  .dropdown {
    position: relative;
  }
  .dropdown-options {
    position: absolute;
    top: 100%;
    display: flex;
    flex-direction: column;
    background-color: var(--foreground-2);
    list-style-type: none;
    margin-block-start: 0;
    margin-block-end: 0;
    padding-inline-start: 0;
    -webkit-backdrop-filter: blur(2px);
    backdrop-filter: blur(2px);
    z-index: 100;
  }
  .dropdown-options.left {
    left: 0;
  }
  .dropdown-options.right {
    right: 0;
  }

  .dropdown-dismiss {
    position: fixed;
    top: 0;
    left: 0;
    height: 100vh;
    width: 100vw;
    z-index: 0;
  }
</style>
