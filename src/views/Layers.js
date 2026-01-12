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
  const hasRunIntro = useRef(false);
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
       * SCROLL SNAP SYSTEM (panel por panel) - Método nativo GSAP
       * ------------------------------------------------------------------ */

      let panels = gsap.utils.toArray(".panel");

      // Crear un ScrollTrigger para cada panel (para animaciones u otros efectos)
      panels.forEach((panel) => {
        ScrollTrigger.create({
          trigger: panel,
          start: "top top",
          end: "bottom top",
          // markers: true, // Descomentar para debug
        });
      });

      // Snap nativo de GSAP - mucho más simple y robusto
      ScrollTrigger.create({
        start: 0,
        end: "max",
        snap: {
          snapTo: 1 / (panels.length - 1), // Snap a cada sección
          duration: { min: 0.3, max: 1 }, // Duración basada en velocidad
          delay: 0.1, // Pequeño delay después de que el usuario pare de scrollear
          ease: "power2.inOut",
          directional: true, // Snap en la dirección del scroll
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
