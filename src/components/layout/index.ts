import { computed, type ComputedRef } from 'vue';
import { addToClasses } from '@/lib';
import type { margin, size, space } from '@/styles/types';
import Box from './Box.vue';
import Container from './Container.vue';
import Flex from './Flex.vue';

/* Types */
type content =
  | 'start'
  | 'center'
  | 'end'
  | 'space-between'
  | 'space-around'
  | 'space-evenly'
  | 'stretch';
type items = 'start' | 'center' | 'end' | 'stretch';

/* Props */
interface BoxProps {
  is?: 'aside' | 'footer' | 'header' | 'hgroup' | 'main' | 'nav' | 'section' | 'div' | 'span';
  width?: size;
  minWidth?: size;
  maxWidth?: size;
  height?: size;
  minHeight?: size;
  maxHeight?: size;
  pad?: space;
  padX?: space;
  padY?: space;
  padT?: space;
  padB?: space;
  padL?: space;
  padR?: space;
  mar?: margin;
  marX?: margin;
  marY?: margin;
  marT?: margin;
  marB?: margin;
  marL?: margin;
  marR?: margin;
}

interface FlexProps extends BoxProps {
  inline?: boolean;
  direction?: 'row' | 'col' | 'row-reverse' | 'col-reverse';
  justifyContent?: content;
  justifyItems?: items;
  alignContent?: content;
  alignItems?: items;
  gap?: space;
}

/* Functions */
function getBoxClasses(props: BoxProps): ComputedRef<string[]> {
  return computed(() => {
    const res: string[] = [];
    addToClasses(res, props.width, 'w');
    addToClasses(res, props.minWidth, 'min-w');
    addToClasses(res, props.maxWidth, 'max-w');
    addToClasses(res, props.height, 'h');
    addToClasses(res, props.minHeight, 'min-h');
    addToClasses(res, props.maxHeight, 'max-h');
    addToClasses(res, props.pad, 'p');
    addToClasses(res, props.padX, 'px');
    addToClasses(res, props.padY, 'py');
    addToClasses(res, props.padT, 'pt');
    addToClasses(res, props.padB, 'pb');
    addToClasses(res, props.padL, 'pl');
    addToClasses(res, props.padR, 'pr');
    addToClasses(res, props.mar, 'm');
    addToClasses(res, props.marX, 'mx');
    addToClasses(res, props.marY, 'my');
    addToClasses(res, props.marT, 'mt');
    addToClasses(res, props.marB, 'mb');
    addToClasses(res, props.marL, 'ml');
    addToClasses(res, props.marR, 'mr');
    return res;
  });
}

function getFlexClasses(props: FlexProps): ComputedRef<string[]> {
  return computed(() => {
    const res: string[] = [];
    props.inline && res.push('inline');
    addToClasses(res, props.direction);
    addToClasses(res, props.justifyContent, 'jc');
    addToClasses(res, props.justifyItems, 'ji');
    addToClasses(res, props.alignContent, 'ac');
    addToClasses(res, props.alignItems, 'ai');
    addToClasses(res, props.gap, 'gap');
    return res;
  });
}

export type { BoxProps, FlexProps };
export { getBoxClasses, getFlexClasses };
export { Box, Container, Flex };
