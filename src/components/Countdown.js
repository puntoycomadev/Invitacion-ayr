import React, { useState, useEffect } from 'react';
import gsap from 'gsap';

export default function Countdown({ targetDate }) {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = new Date(targetDate) - new Date();

      if (difference > 0) {
        return {
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60)
        };
      }

      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    };

    // Actualizar inmediatamente
    setTimeLeft(calculateTimeLeft());

    // Actualizar cada segundo
    const timer = setInterval(() => {
      const newTime = calculateTimeLeft();
      setTimeLeft(prevTime => {
        // Animar solo si hay cambio
        if (prevTime.seconds !== newTime.seconds) {
          gsap.fromTo('.countdown-number',
            { scale: 1.1, opacity: 0.7 },
            { scale: 1, opacity: 1, duration: 0.3, ease: 'power2.out' }
          );
        }
        return newTime;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  return (
    <div className="flex items-center justify-center gap-0 ">
      <div className="flex flex-col items-center justify-center gap-2">
        <div className="countdown-number text-[64px] lg:text-[96px] font-extrabold text-primary min-w-[70px] text-center transition-all duration-300 font-cormorant">{String(timeLeft.days).padStart(2, '0')}</div>
        <div className="text-lg lg:text-[36px]  font-bold text-primary  tracking-[-0.7] font-cormorant">Días</div>
      </div>
      <div className="text-[64px] lg:text-[96px] font-extrabold text-primary font-cormorant self-center mb-6">:</div>
      <div className="flex flex-col items-center justify-center gap-2">
        <div className="countdown-number text-[64px] lg:text-[96px] font-extrabold text-primary min-w-[70px] text-center transition-all duration-300 font-cormorant">{String(timeLeft.hours).padStart(2, '0')}</div>
        <div className="text-lg lg:text-[36px]  font-bold text-primary  tracking-[-0.7] font-cormorant">Horas</div>
      </div>
      <div className="text-[64px] lg:text-[96px] font-extrabold text-primary font-cormorant self-center mb-6">:</div>
      <div className="flex flex-col items-center justify-center gap-2">
        <div className="countdown-number text-[64px] lg:text-[96px] font-extrabold text-primary min-w-[70px] text-center transition-all duration-300 font-cormorant">{String(timeLeft.minutes).padStart(2, '0')}</div>
        <div className="text-lg lg:text-[36px]  font-bold text-primary  tracking-[-0.7] font-cormorant">Min</div>
      </div>
      <div className="text-[64px] lg:text-[96px] font-extrabold text-primary font-cormorant self-center mb-6">:</div>
      <div className="flex flex-col items-center justify-center gap-2">
        <div className="countdown-number text-[64px] lg:text-[96px] font-extrabold text-primary min-w-[70px] text-center transition-all duration-300 font-cormorant">{String(timeLeft.seconds).padStart(2, '0')}</div>
        <div className="text-lg lg:text-[36px] font-bold text-primary  tracking-[-0.7]  font-cormorant">Seg</div>
      </div>
    </div>
  );
}
