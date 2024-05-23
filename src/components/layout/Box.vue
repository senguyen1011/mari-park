<script setup lang="ts">
  import type { ComputedRef } from 'vue';
  import type { BoxProps } from '.';
  import { getBoxClasses } from '.';

  /* Props */
  const props = withDefaults(defineProps<BoxProps>(), {
    is: 'div',
  });

  /* Classes */
  const classes: ComputedRef<string[]> = getBoxClasses({
    width: props.width,
    minWidth: props.minWidth,
    maxWidth: props.maxWidth,
    height: props.height,
    minHeight: props.minHeight,
    maxHeight: props.maxHeight,
    pad: props.pad,
    padX: props.padX,
    padY: props.padY,
    padT: props.padT,
    padB: props.padB,
    padL: props.padL,
    padR: props.padR,
    mar: props.mar,
    marX: props.marX,
    marY: props.marY,
    marT: props.marT,
    marB: props.marB,
    marL: props.marL,
    marR: props.marR,
  });
</script>

<template>
  <component
    :is="props.is"
    :class="classes"
    ><slot></slot
  ></component>
</template>
