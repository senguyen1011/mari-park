import Button from './Button.vue';
import Dropdown from './Dropdown/Dropdown.vue';
import DropdownOption from './Dropdown/DropdownOption.vue';

interface ButtonProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  color?: 'light' | 'dark';
  type?: 'ghost';
  link?: boolean;
  icon?: boolean;
}

export type { ButtonProps };
export { Button, Dropdown, DropdownOption };
