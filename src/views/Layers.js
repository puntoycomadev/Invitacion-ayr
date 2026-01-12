import React, { useContext, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

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
  const scrollTween = useRef();
  const snapTriggers = useRef([]);
  const hasRunIntro = useRef(false);
  const isAnimating = useRef(false);
  const currentIndex = useRef(0);
  const { contextSafe } = useGSAP(
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
       * SCROLL SNAP SYSTEM (panel por panel)
       * ------------------------------------------------------------------ */

      let panels = gsap.utils.toArray(".panel");
      let scrollStarts = [0];

      // Crear ScrollTrigger para cada panel
      panels.forEach((panel, i) => {
        snapTriggers.current[i] = ScrollTrigger.create({
          trigger: panel,
          start: "top top"
        });
      });

      // Función para actualizar posiciones de snap
      const updateSnapPositions = () => {
        scrollStarts = snapTriggers.current.map((trigger) => trigger.start);
      };

      // Registrar el listener una sola vez
      ScrollTrigger.addEventListener("refresh", updateSnapPositions);

      // Observer para detectar scroll y hacer snap
      ScrollTrigger.observe({
        type: "wheel,touch",
        tolerance: 10,

        onDown() {
          if (isAnimating.current) return;

          // Calcular índice actual basado en scroll position
          let scrollY = window.scrollY;
          let foundIndex = scrollStarts.findIndex((start, i) => {
            let nextStart = scrollStarts[i + 1] !== undefined ? scrollStarts[i + 1] : Infinity;
            return scrollY >= start - 50 && scrollY < nextStart - 50;
          });

          if (foundIndex === -1) foundIndex = scrollStarts.length - 1;
          currentIndex.current = foundIndex;

          // Ir a la siguiente sección
          if (currentIndex.current < scrollStarts.length - 1) {
            isAnimating.current = true;
            goToSection(currentIndex.current + 1);
          }
        },

        onUp() {
          if (isAnimating.current) return;

          // Calcular índice actual basado en scroll position
          let scrollY = window.scrollY;
          let foundIndex = scrollStarts.findIndex((start, i) => {
            let nextStart = scrollStarts[i + 1] !== undefined ? scrollStarts[i + 1] : Infinity;
            return scrollY >= start - 50 && scrollY < nextStart - 50;
          });

          if (foundIndex === -1) foundIndex = scrollStarts.length - 1;
          currentIndex.current = foundIndex;

          // Ir a la sección anterior
          if (currentIndex.current > 0) {
            isAnimating.current = true;
            goToSection(currentIndex.current - 1);
          }
        }
      });

      // Inicializar posiciones
      ScrollTrigger.refresh();
    },
    {
      dependencies: [completed],
      scope: main,
      revertOnUpdate: true
    }
  );

  const goToSection = contextSafe((i) => {
    console.log("scroll to", i);

    // El flag ya está establecido por el Observer
    scrollTween.current = gsap.to(window, {
      scrollTo: { y: snapTriggers.current[i].start, autoKill: false },
      duration: 0.7,
      ease: "power2.inOut",
      onComplete: () => {
        scrollTween.current = null;
        isAnimating.current = false;  // Resetear flag cuando termine
      },
      overwrite: true
    });
  });

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
