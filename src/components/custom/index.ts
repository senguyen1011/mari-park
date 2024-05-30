import Footer from './Footer.vue';
import Navbar from './Navbar.vue';
import SplashText from './SplashText.vue';

type socialLink = {
  site: string;
  path: string;
  icon: 'appleMusic' | 'bandcamp' | 'instagram' | 'spotify';
};

export { Footer, Navbar, SplashText };
export type { socialLink };
