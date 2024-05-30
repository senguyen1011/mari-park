import '@/styles/index.css';

import { createApp } from 'vue';
import App from './App.vue';
import { Footer, Navbar, SplashText } from './components/custom';
import { Button, Dropdown, DropdownOption } from './components/forms';
import { Box, Container, Flex, Grid, GridItem } from './components/layout';
import { Icon, Image } from './components/media';
import { Heading, Text } from './components/typography';

const app = createApp(App);

app.component('Footer', Footer).component('Navbar', Navbar).component('SplashText', SplashText);
app
  .component('Button', Button)
  .component('Dropdown', Dropdown)
  .component('DropdownOption', DropdownOption);
app
  .component('Box', Box)
  .component('Container', Container)
  .component('Flex', Flex)
  .component('Grid', Grid)
  .component('GridItem', GridItem);
app.component('Icon', Icon).component('Image', Image);
app.component('Heading', Heading).component('Text', Text);
app.mount('#app');
