<script setup lang="ts">
  import { computed, ref, type ComputedRef, type Ref } from 'vue';
  import { addToClasses } from '@/lib';
  import type { space } from '@/styles/types';
  import type { BoxProps } from '.';
  import { getBoxClasses } from '.';

  /* Props */
  interface Props extends BoxProps {
    cols?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
    rows?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
    flow?: 'row' | 'col' | 'dense' | 'row-dense' | 'col-dense';
    autoCols?: 'min' | 'max' | 'fr';
    autoRows?: 'min' | 'max' | 'fr';
    gap?: space;
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

    addToClasses(res, props.cols, 'cols');
    addToClasses(res, props.rows, 'rows');
    addToClasses(res, props.flow, 'flow');
    addToClasses(res, props.autoCols, 'auto-cols');
    addToClasses(res, props.autoRows, 'auto-rows');
    addToClasses(res, props.gap, 'gap');
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
  .gr {
    display: grid;
  }

  .gr.cols-1 {
    grid-template-columns: repeat(1, minmax(0, 1fr));
  }
  .gr.cols-2 {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
  .gr.cols-3 {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
  .gr.cols-4 {
    grid-template-columns: repeat(4, minmax(0, 1fr));
  }
  .gr.cols-5 {
    grid-template-columns: repeat(5, minmax(0, 1fr));
  }
  .gr.cols-6 {
    grid-template-columns: repeat(6, minmax(0, 1fr));
  }
  .gr.cols-7 {
    grid-template-columns: repeat(7, minmax(0, 1fr));
  }
  .gr.cols-8 {
    grid-template-columns: repeat(8, minmax(0, 1fr));
  }
  .gr.cols-9 {
    grid-template-columns: repeat(9, minmax(0, 1fr));
  }
  .gr.cols-10 {
    grid-template-columns: repeat(10, minmax(0, 1fr));
  }
  .gr.cols-11 {
    grid-template-columns: repeat(11, minmax(0, 1fr));
  }
  .gr.cols-12 {
    grid-template-columns: repeat(12, minmax(0, 1fr));
  }

  .gr.rows-1 {
    grid-template-rows: repeat(1, minmax(0, 1fr));
  }
  .gr.rows-2 {
    grid-template-rows: repeat(2, minmax(0, 1fr));
  }
  .gr.rows-3 {
    grid-template-rows: repeat(3, minmax(0, 1fr));
  }
  .gr.rows-4 {
    grid-template-rows: repeat(4, minmax(0, 1fr));
  }
  .gr.rows-5 {
    grid-template-rows: repeat(5, minmax(0, 1fr));
  }
  .gr.rows-6 {
    grid-template-rows: repeat(6, minmax(0, 1fr));
  }
  .gr.rows-7 {
    grid-template-rows: repeat(7, minmax(0, 1fr));
  }
  .gr.rows-8 {
    grid-template-rows: repeat(8, minmax(0, 1fr));
  }
  .gr.rows-9 {
    grid-template-rows: repeat(9, minmax(0, 1fr));
  }
  .gr.rows-10 {
    grid-template-rows: repeat(10, minmax(0, 1fr));
  }
  .gr.rows-11 {
    grid-template-rows: repeat(11, minmax(0, 1fr));
  }
  .gr.rows-12 {
    grid-template-rows: repeat(12, minmax(0, 1fr));
  }

  .gr.flow-row {
    grid-auto-flow: row;
  }
  .gr.flow-col {
    grid-auto-flow: column;
  }
  .gr.flow-dense {
    grid-auto-flow: dense;
  }
  .gr.flow-row-dense {
    grid-auto-flow: row dense;
  }
  .gr.flow-col-dense {
    grid-auto-flow: column dense;
  }

  .gr.auto-cols-min {
    grid-auto-columns: min-content;
  }
  .gr.auto-cols-max {
    grid-auto-columns: max-content;
  }
  .gr.auto-cols-fr {
    grid-auto-columns: minmax(0, 1fr);
  }

  .gr.auto-rows-min {
    grid-auto-rows: min-content;
  }
  .gr.auto-rows-max {
    grid-auto-rows: max-content;
  }
  .gr.auto-rows-fr {
    grid-auto-rows: minmax(0, 1fr);
  }
</style>
