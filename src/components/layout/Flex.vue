<script setup lang="ts">
  import { computed, type ComputedRef } from 'vue';
  import { getBoxClasses, getFlexClasses, type FlexProps } from '.';

  /* Props */
  const props = withDefaults(defineProps<FlexProps>(), {
    is: 'div',
    inline: false,
  });

  /* Classes */
  const classes: ComputedRef<string[]> = computed(() => {
    const flexClasses = getFlexClasses({
      inline: props.inline,
      direction: props.direction,
      justifyContent: props.justifyContent,
      justifyItems: props.justifyItems,
      alignContent: props.alignContent,
      alignItems: props.alignItems,
      gap: props.gap,
    });

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

    return [...flexClasses.value, ...boxClasses.value];
  });
</script>

<template>
  <component
    :is="props.is"
    class="fl"
    :class="classes"
  >
    <slot></slot>
  </component>
</template>

<style>
  .fl {
    display: flex;
  }
  .fl.inline {
    display: inline-flex;
  }

  .fl.row {
    flex-direction: row;
  }
  .fl.col {
    flex-direction: column;
  }
  .fl.row-reverse {
    flex-direction: row-reverse;
  }
  .fl.col-reverse {
    flex-direction: column-reverse;
  }

  .fl.jc-start {
    justify-content: flex-start;
  }
  .fl.jc-end {
    justify-content: flex-end;
  }
  .fl.jc-center {
    justify-content: center;
  }
  .fl.jc-between {
    justify-content: space-between;
  }
  .fl.jc-around {
    justify-content: space-around;
  }
  .fl.jc-evenly {
    justify-content: space-evenly;
  }
  .fl.jc-stretch {
    justify-content: stretch;
  }

  .fl.ac-start {
    align-content: flex-start;
  }
  .fl.ac-end {
    align-content: flex-end;
  }
  .fl.ac-center {
    align-content: center;
  }
  .fl.ac-between {
    align-content: space-between;
  }
  .fl.ac-around {
    align-content: space-around;
  }
  .fl.ac-evenly {
    align-content: space-evenly;
  }
  .fl.ac-stretch {
    align-content: stretch;
  }

  .fl.ji-start {
    justify-items: flex-start;
  }
  .fl.ji-end {
    justify-items: flex-end;
  }
  .fl.ji-center {
    justify-items: center;
  }
  .fl.ji-stretch {
    justify-items: stretch;
  }

  .fl.ai-start {
    align-items: flex-start;
  }
  .fl.ai-end {
    align-items: flex-end;
  }
  .fl.ai-center {
    align-items: center;
  }
  .fl.ai-stretch {
    align-items: stretch;
  }
</style>
