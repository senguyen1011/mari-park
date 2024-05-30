<script setup lang="ts">
  import { computed, ref, type ComputedRef, type Ref } from 'vue';
  import { addToClasses } from '@/lib';
  import { getBoxClasses, getFlexClasses, type FlexProps } from '.';

  /* Props */
  interface Props extends FlexProps {
    flex?: boolean;
    size?: '2xl' | 'xl' | 'lg' | 'md' | 'sm';
  }

  const props = withDefaults(defineProps<Props>(), {
    is: 'div',
    flex: true,
    inline: false,
    marX: 'auto',
  });

  /* Classes */
  const classes: ComputedRef<string[]> = computed(() => {
    let res: string[] = [];
    let flexClasses: Ref<string[]> = ref([]);
    if (props.flex) {
      flexClasses = getFlexClasses({
        inline: props.inline,
        direction: props.direction,
        justifyContent: props.justifyContent,
        justifyItems: props.justifyItems,
        alignContent: props.alignContent,
        alignItems: props.alignItems,
        gap: props.gap,
      });
      flexClasses.value.unshift('fl');
    }

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

    addToClasses(res, props.size);
    return [...res, ...flexClasses.value, ...boxClasses.value];
  });
</script>

<template>
  <component
    :is="props.is"
    class="container"
    :class="classes"
  >
    <slot></slot>
  </component>
</template>

<style>
  .container {
    position: relative;
    width: 100%;
  }

  @media (width >= 640px) {
    .container {
      max-width: var(--screen-sm);
    }

    .container.sm {
      width: var(--screen-sm);
    }
    .container.md {
      width: var(--screen-sm);
    }
    .container.lg {
      width: var(--screen-sm);
    }
    .container.xl {
      width: var(--screen-sm);
    }
    .container.\2xl {
      width: var(--screen-sm);
    }
  }

  @media (width >= 768px) {
    .container {
      max-width: var(--screen-md);
    }

    .container.sm {
      width: var(--screen-sm);
    }
    .container.md {
      width: var(--screen-md);
    }
    .container.lg {
      width: var(--screen-md);
    }
    .container.xl {
      width: var(--screen-md);
    }
    .container.\2xl {
      width: var(--screen-md);
    }
  }

  @media (width >= 1024px) {
    .container {
      max-width: var(--screen-lg);
    }

    .container.sm {
      width: var(--screen-sm);
    }
    .container.md {
      width: var(--screen-md);
    }
    .container.lg {
      width: var(--screen-lg);
    }
    .container.xl {
      width: var(--screen-lg);
    }
    .container.\2xl {
      width: var(--screen-lg);
    }
  }

  @media (width >= 1280px) {
    .container {
      max-width: var(--screen-xl);
    }

    .container.sm {
      width: var(--screen-sm);
    }
    .container.md {
      width: var(--screen-md);
    }
    .container.lg {
      width: var(--screen-lg);
    }
    .container.xl {
      width: var(--screen-xl);
    }
    .container.\2xl {
      width: var(--screen-xl);
    }
  }

  @media (width >= 1536px) {
    .container {
      max-width: var(--screen-2xl);
    }

    .container.sm {
      width: var(--screen-sm);
    }
    .container.md {
      width: var(--screen-md);
    }
    .container.lg {
      width: var(--screen-lg);
    }
    .container.xl {
      width: var(--screen-xl);
    }
    .container.\2xl {
      width: var(--screen-2xl);
    }
  }
</style>
