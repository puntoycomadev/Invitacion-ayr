import React from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';
import { useGSAP } from '@gsap/react';

import Router from './router/Router';
import Header from './components/Header';
import SEO from './components/SEO';

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin, useGSAP);

function App() {
  return (
    <>
      <SEO />
      <Header />
      <Router />
    </>
  );
}

export default App;
