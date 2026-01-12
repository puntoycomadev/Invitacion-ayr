import React from 'react';
import Countdown from '../Countdown';
import ScrollDownArrow from '../ScrollDownArrow';

export default function DateSection() {
  return (
    <section className="panel base">
      <div className='absolute top-0 left-0 w-1/2 lg:w-1/4'>
        <img src="/two-sup.svg" className='w-full' alt="Flor superior izquierda" />
      </div>
      <div className=' w-full px-10 flex flex-col relative z-10 max-w-[790px]'>
        <div className='text-[48px] font-light lg:text-[58px] text-primary leading-[1.25] tracking-[-0.7]'>
          <p className='font-cormorant'>Nuestra felicidad se completa al compartirla con quienes amamos; por ello, Jehova Dios y ustedes será testigos  de nuestra promesa de amor en nuestra boda.</p>
        </div>
        <div className='pt-[30px] grid grid-cols-3 auto-rows-min gap-0 text-primary font-extrabold text-[28px] font-cormorant leading-[1.25] tracking-[-0.7] items-end'>
          <div className='border-b border-primary text-center' />
          <div className='text-[48px]'> ABRIL</div>
          <div className='border-b border-primary' />
          <div className='text-[48px] border-b border-primary pb-4'>SÁBADO</div>
          <div className='text-[120px] leading-none pb-0'>25</div>
          <div className=' border-b border-primary text-[52px] pb-4'>2026</div>
        </div>
        <div className='mt-[60px]'>
          <span className='text-[48px] font-bold text-primary block mb-[10px] uppercase  font-cormorant leading-[1.25] tracking-[-0.7] '>FALTAN</span>
          <Countdown targetDate="2026-04-25T00:00:00" />
        </div>
      </div>
      <div className='absolute bottom-0 right-0 w-1/2 lg:w-1/4'>
        <img src="/two-inf.svg" className='w-full' alt="Flor inferior derecha" />
      </div>
      <ScrollDownArrow />
    </section>
  );
}
