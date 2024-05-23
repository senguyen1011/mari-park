import '@/styles/index.css';

import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import { Navbar, SplashText } from './components/custom';
import { Box, Container, Flex } from './components/layout';
import { Image } from './components/media';
import { Heading, Text } from './components/typography';

const app = createApp(App);

app.use(router);
app.component('Navbar', Navbar).component('SplashText', SplashText);
app.component('Box', Box).component('Container', Container).component('Flex', Flex);
app.component('Image', Image);
app.component('Heading', Heading).component('Text', Text);
app.mount('#app');
