<script setup lang="ts">
  import { computed, ref, type ComputedRef, type Ref } from 'vue';
  import { addToClasses } from '@/lib';
  import type { BoxProps } from '.';
  import { getBoxClasses } from '.';

  /* Props */
  interface Props extends BoxProps {
    colSpan?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 'full';
    colStart?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13;
    colEnd?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13;
    rowSpan?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 'full';
    rowStart?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13;
    rowEnd?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13;
  }
  const props = withDefaults(defineProps<Props>(), {
    is: 'div',
  });

  /* Classes */
  const classes: ComputedRef<string[]> = computed(() => {
    let res: string[] = [];

    const boxClasses = getBoxClasses({
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

    addToClasses(res, props.colSpan, 'col-span');
    addToClasses(res, props.colStart, 'col-start');
    addToClasses(res, props.colEnd, 'col-end');
    addToClasses(res, props.rowSpan, 'row-span');
    addToClasses(res, props.rowStart, 'row-start');
    addToClasses(res, props.rowEnd, 'row-end');
    return [...res, ...boxClasses.value];
  });
</script>

<template>
  <component
    :is="props.is"
    class="gr"
    :class="classes"
    ><slot></slot
  ></component>
</template>

<style>
  .gr.col-span-1 {
    grid-column: span 1 / span 1;
  }
  .gr.col-span-2 {
    grid-column: span 2 / span 2;
  }
  .gr.col-span-3 {
    grid-column: span 3 / span 3;
  }
  .gr.col-span-4 {
    grid-column: span 4 / span 4;
  }
  .gr.col-span-5 {
    grid-column: span 5 / span 5;
  }
  .gr.col-span-6 {
    grid-column: span 6 / span 6;
  }
  .gr.col-span-7 {
    grid-column: span 7 / span 7;
  }
  .gr.col-span-8 {
    grid-column: span 8 / span 8;
  }
  .gr.col-span-9 {
    grid-column: span 9 / span 9;
  }
  .gr.col-span-10 {
    grid-column: span 10 / span 10;
  }
  .gr.col-span-11 {
    grid-column: span 11 / span 11;
  }
  .gr.col-span-12 {
    grid-column: span 12 / span 12;
  }
  .gr.col-span-full {
    grid-column: 1 / -1;
  }

  .gr.col-start-1 {
    grid-column-start: 1;
  }
  .gr.col-start-2 {
    grid-column-start: 2;
  }
  .gr.col-start-3 {
    grid-column-start: 3;
  }
  .gr.col-start-4 {
    grid-column-start: 4;
  }
  .gr.col-start-5 {
    grid-column-start: 5;
  }
  .gr.col-start-6 {
    grid-column-start: 6;
  }
  .gr.col-start-7 {
    grid-column-start: 7;
  }
  .gr.col-start-8 {
    grid-column-start: 8;
  }
  .gr.col-start-9 {
    grid-column-start: 9;
  }
  .gr.col-start-10 {
    grid-column-start: 10;
  }
  .gr.col-start-11 {
    grid-column-start: 11;
  }
  .gr.col-start-12 {
    grid-column-start: 12;
  }
  .gr.col-start-13 {
    grid-column-start: 13;
  }

  .gr.col-end-1 {
    grid-column-end: 1;
  }
  .gr.col-end-2 {
    grid-column-end: 2;
  }
  .gr.col-end-3 {
    grid-column-end: 3;
  }
  .gr.col-end-4 {
    grid-column-end: 4;
  }
  .gr.col-end-5 {
    grid-column-end: 5;
  }
  .gr.col-end-6 {
    grid-column-end: 6;
  }
  .gr.col-end-7 {
    grid-column-end: 7;
  }
  .gr.col-end-8 {
    grid-column-end: 8;
  }
  .gr.col-end-9 {
    grid-column-end: 9;
  }
  .gr.col-end-10 {
    grid-column-end: 10;
  }
  .gr.col-end-11 {
    grid-column-end: 11;
  }
  .gr.col-end-12 {
    grid-column-end: 12;
  }
  .gr.col-end-13 {
    grid-column-end: 13;
  }

  .gr.row-span-1 {
    grid-row: span 1 / span 1;
  }
  .gr.row-span-2 {
    grid-row: span 2 / span 2;
  }
  .gr.row-span-3 {
    grid-row: span 3 / span 3;
  }
  .gr.row-span-4 {
    grid-row: span 4 / span 4;
  }
  .gr.row-span-5 {
    grid-row: span 5 / span 5;
  }
  .gr.row-span-6 {
    grid-row: span 6 / span 6;
  }
  .gr.row-span-7 {
    grid-row: span 7 / span 7;
  }
  .gr.row-span-8 {
    grid-row: span 8 / span 8;
  }
  .gr.row-span-9 {
    grid-row: span 9 / span 9;
  }
  .gr.row-span-10 {
    grid-row: span 10 / span 10;
  }
  .gr.row-span-11 {
    grid-row: span 11 / span 11;
  }
  .gr.row-span-12 {
    grid-row: span 12 / span 12;
  }
  .gr.row-span-full {
    grid-row: 1 / -1;
  }

  .gr.row-start-1 {
    grid-row-start: 1;
  }
  .gr.row-start-2 {
    grid-row-start: 2;
  }
  .gr.row-start-3 {
    grid-row-start: 3;
  }
  .gr.row-start-4 {
    grid-row-start: 4;
  }
  .gr.row-start-5 {
    grid-row-start: 5;
  }
  .gr.row-start-6 {
    grid-row-start: 6;
  }
  .gr.row-start-7 {
    grid-row-start: 7;
  }
  .gr.row-start-8 {
    grid-row-start: 8;
  }
  .gr.row-start-9 {
    grid-row-start: 9;
  }
  .gr.row-start-10 {
    grid-row-start: 10;
  }
  .gr.row-start-11 {
    grid-row-start: 11;
  }
  .gr.row-start-12 {
    grid-row-start: 12;
  }
  .gr.row-start-13 {
    grid-row-start: 13;
  }

  .gr.row-end-1 {
    grid-row-end: 1;
  }
  .gr.row-end-2 {
    grid-row-end: 2;
  }
  .gr.row-end-3 {
    grid-row-end: 3;
  }
  .gr.row-end-4 {
    grid-row-end: 4;
  }
  .gr.row-end-5 {
    grid-row-end: 5;
  }
  .gr.row-end-6 {
    grid-row-end: 6;
  }
  .gr.row-end-7 {
    grid-row-end: 7;
  }
  .gr.row-end-8 {
    grid-row-end: 8;
  }
  .gr.row-end-9 {
    grid-row-end: 9;
  }
  .gr.row-end-10 {
    grid-row-end: 10;
  }
  .gr.row-end-11 {
    grid-row-end: 11;
  }
  .gr.row-end-12 {
    grid-row-end: 12;
  }
  .gr.row-end-13 {
    grid-row-end: 13;
  }
</style>
