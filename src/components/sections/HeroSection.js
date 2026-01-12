import React from 'react';
import ScrollDownArrow from '../ScrollDownArrow';

export default function HeroSection() {
  return (
    <section className="panel hero">
      <div className="hero-bg" />
      <div className="hero-image" />
      <div className="anagram">
        <img src="/Anagrama.svg" alt="Anagrama Ana y Luis" />
      </div>
      <ScrollDownArrow />
    </section>
  );
}
