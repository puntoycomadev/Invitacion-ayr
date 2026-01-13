import React from 'react';
import ScrollDownArrow from '../ScrollDownArrow';

export default function DressCodeSection() {
  return (
    <section className="panel base">
      <div className='absolute top-0 right-0 w-1/2'>
        <img src="/four-sup.svg" className='w-full' alt="Flor superior" />
      </div>

      <div className='flex flex-col items-center justify-center gap-10  md:gap-12 lg:gap-16 font-garland'>
        <p className='text-primary font-light text-[48px]'>VESTIMENTA FORMAL</p>
        <div className='w-full max-w-[400px]'>
          <img src='/dress-code.svg' className='w-full' alt="Código de vestimenta" />
        </div>
        <p className='text-primary font-light text-[48px]'>COLORES RESERVADOS</p>
        <div className='w-full max-w-[400px]'>
          <img src='/colors.svg' className='w-full' alt="Colores reservados" />
        </div>
        <p className='text-primary font-light text-[48px] pt-10'>RECOMENDACIONES</p>
      </div>
      <p className=' pt-4 text-primary text-[60px] font-light font-cormorant leading-[1.25] tracking-[-0.75] '>Evitar tacón de aguja (Hacienda-jardin)</p>

      <div className='absolute bottom-0 right-0 w-1/2'>
        <img src="/four-inf.svg" className='w-full' alt="Flor inferior derecha" />
      </div>
      <ScrollDownArrow />
    </section>
  );
}
