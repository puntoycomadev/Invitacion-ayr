import React, { useContext, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollToPlugin);

import TransitionContext from '../context/TransitionContext';
import HeroSection from '../components/sections/HeroSection';
import QuoteSection from '../components/sections/QuoteSection';
import DateSection from '../components/sections/DateSection';
import LocationSection from '../components/sections/LocationSection';
import DressCodeSection from '../components/sections/DressCodeSection';
import GallerySection from '../components/sections/GallerySection';
import InfoSection from '../components/sections/InfoSection';
import Contact from '../components/sections/Contact';


export default function Layers() {
  const main = useRef();
  const { completed, toggleCompleted } = useContext(TransitionContext);
  const hasRunIntro = useRef(false);
  const currentSection = useRef(0);
  const isAnimating = useRef(false);
  useGSAP(
    () => {
      // Si completed es false y no hemos ejecutado la intro, activarlo
      if (!completed && !hasRunIntro.current) {
        toggleCompleted(true);
        return;
      }

      if (!completed) return;

      /* ------------------------------------------------------------------
       * INTRO HEADER (solo una vez)
       * ------------------------------------------------------------------ */

      if (!hasRunIntro.current) {
        const introTl = gsap.timeline({
          defaults: { ease: "power3.inOut" }
        });

        introTl
          .set(".anagram", { scale: 1 })
          .set(".hero-bg", { autoAlpha: 1 })
          .to({}, { duration: 4 })
          .to(".anagram", { scale: 0.8, y: "-30vh", duration: 3 }, 0)
          .to(".hero-bg", { autoAlpha: 0, duration: 3 }, 0);

        hasRunIntro.current = true;
      }

      /* ------------------------------------------------------------------
       * SCROLL SNAP SYSTEM - Estilo Instagram Stories
       * Un swipe = una sección completa
       * ------------------------------------------------------------------ */

      let panels = gsap.utils.toArray(".panel");
      let panelPositions = [];

      // Guardar posiciones de cada panel
      panels.forEach((panel, i) => {
        panelPositions[i] = panel.offsetTop;
      });

      // Función para ir a una sección específica
      const goToSection = (index) => {
        if (isAnimating.current) return;
        if (index < 0 || index >= panels.length) return;

        isAnimating.current = true;
        currentSection.current = index;

        gsap.to(window, {
          scrollTo: { y: panelPositions[index], autoKill: false },
          duration: 0.8,
          ease: "power1.inOut",
          onComplete: () => {
            isAnimating.current = false;
          }
        });
      };

      // Observer para detectar swipe/scroll - Estilo Instagram Reels
      ScrollTrigger.observe({
        type: "wheel,touch",
        tolerance: 5, // Más sensible (menos tolerancia)
        preventDefault: true,
        dragMinimum: 0, // Sin drag mínimo

        // Instagram: swipe up = siguiente, swipe down = anterior
        onUp: () => {
          if (isAnimating.current) return;
          goToSection(currentSection.current + 1);
        },
        onDown: () => {
          if (isAnimating.current) return;
          goToSection(currentSection.current - 1);
        }
      });

      ScrollTrigger.refresh();
    },
    {
      dependencies: [completed],
      scope: main,
      revertOnUpdate: true
    }
  );

  return (
    <main ref={main} className=''>
      <HeroSection />
      <QuoteSection />
      <DateSection />
      <LocationSection />
      <DressCodeSection />
      <GallerySection />
      <InfoSection />
      <Contact />
    </main>
  );
}
