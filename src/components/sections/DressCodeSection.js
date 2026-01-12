import React from 'react';

export default function DressCodeSection() {
  return (
    <section className="panel base">
      <div className='flor-superior'>
        <img src="/four-sup.svg" alt="Flor superior" />
      </div>

      <div className='flex flex-col items-center justify-center gap-10  md:gap-12 lg:gap-16 font-garland'>
        <p className='text-primary font-light text-2xl md:text-[32px] lg:text-[48px]'>VESTIMENTA FORMAL</p>
        <div>
          <img src='/dress-code.svg' alt="Código de vestimenta" />
        </div>
        <p className='text-primary font-light text-2xl  md:text-[32px] lg:text-[48px]'>COLORES RESERVADOS</p>
        <div>
          <img src='/colors.svg' alt="Colores reservados" />
        </div>
        <p className='text-primary font-light text-2xl  md:text-[32px] lg:text-[48px]'>RECOMENDACIONES</p>
      </div>
      <p className=' pt-4 text-primary text-base  md:text-[24px] font-light text-base font-cormorant leading-[1.25] tracking-[-0.75] '>Evitar tacón de aguja (Hacienda-jardin)</p>

      <div className='flor-inferior-der'>
        <img src="/four-inf.svg" alt="Flor inferior derecha" />
      </div>
    </section>
  );
}
