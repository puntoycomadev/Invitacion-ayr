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

      let panels = gsap.utils.toArray(".panel"),
        scrollStarts = [0],
        snapScroll = (value) => value;

      panels.forEach((panel, i) => {
        snapTriggers.current[i] = ScrollTrigger.create({
          trigger: panel,
          start: "top top"
        });
      });

      ScrollTrigger.addEventListener("refresh", () => {
        scrollStarts = snapTriggers.current.map((t) => t.start);
        snapScroll = ScrollTrigger.snapDirectional(scrollStarts);
      });

      ScrollTrigger.observe({
        type: "wheel,touch",
        onChangeY(self) {
          if (!scrollTween.current) {
            // En touch, deltaY es negativo cuando scrolleas hacia abajo
            // En wheel, deltaY es positivo cuando scrolleas hacia abajo
            const delta = self.event.type.includes('touch') ? -self.deltaY : self.deltaY;

            const scrollTarget = snapScroll(
              self.scrollY() + delta,
              delta > 0 ? 1 : -1
            );

            const index = scrollStarts.indexOf(scrollTarget);
            if (index !== -1) {
              goToSection(index);
            }
          }
        }
      });

      /* ------------------------------------------------------------------
       * FADE SUAVE ENTRE SECCIONES (NO HERO)
       * ------------------------------------------------------------------ */

      const contentPanels = panels.filter(
        (panel) => !panel.classList.contains("hero")
      );

      // Estado inicial - usar opacity en lugar de autoAlpha para mejor performance
      gsap.set(contentPanels, {
        opacity: 0,
        y: 20
      });

      // Fade IN - optimizado para móvil
      contentPanels.forEach((panel) => {
        gsap.to(panel, {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: "power1.out",
          scrollTrigger: {
            trigger: panel,
            start: "top 80%",
            toggleActions: "play none none reverse"
          }
        });
      });

      // Forzar cálculo inicial
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
    scrollTween.current = gsap.to(window, {
      scrollTo: { y: snapTriggers.current[i].start, autoKill: false },
      duration: 0.7,
      ease: "power2.inOut",
      onComplete: () => (scrollTween.current = null),
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
