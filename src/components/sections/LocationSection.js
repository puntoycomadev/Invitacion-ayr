import React from 'react';
import ScrollDownArrow from '../ScrollDownArrow';

export default function LocationSection() {
  return (
    <section className="panel base">
      <div className='absolute top-0 right-0 w-1/2 lg:w-1/4'>
        <img src="/three-sup.svg" className='w-full' alt="Flor superior" />
      </div>
      <div className='flex flex-col lg:flex-row lg:max-w-[1024px] gap-10 px-20 mx-auto lg:items-stretch'>
        <div className='flex flex-col gap-2 items-center justify-start tracking-[-0.7] leading-[1.25] font-cormorant text-[42px] lg:flex-1'>
          <div className='max-w-[500px] w-full'>
            <img className='w-full' src='/salon-reino.svg' alt="Salón del reino" />
          </div>
          <p className='font-bold text-primary'>4:00 pm</p>
          <p className='font-bold text-primary'>Salón del reino de los testigos de Jehová</p>
          <p className='text-primary'>Calle 12 de Octubre 7213, esquina con calle Chihuahua, Fracc. Chihuahua 31104</p>
          <a className='text-primary text-sm md:text-lg text-white bg-[#434430] rounded-xl mt-auto px-10 py-1 text-[#EEEDED]' href='https://maps.app.goo.gl/orXvuf3MbBk2g6W6A' target='_blank' rel='noreferrer'>UBICACIÓN</a>
        </div>

        <div className='flex flex-col  lg:max-w-[1024px]  px-20  items-center justify-start tracking-[-0.7] leading-[1.25] font-cormorant text-[48px] lg:flex-1'>
          <div className='w-full'>
            <img src='/quinta.svg' className='w-full' alt="Quinta Carolina" />
          </div>
          <p className='font-bold text-primary'>8:00 pm</p>
          <p className='font-bold text-primary'>El mesón de la Quinta Carolina</p>
          <p className='text-primary'>Calle Fedor Dostoyevsky y Monte Everest, Col. Quintas Carolinas</p>
          <a className='text-primary text-sm md:text-lg text-white bg-[#434430] rounded-xl mt-auto px-10 py-1 text-[#EEEDED]' href='https://maps.app.goo.gl/7jWkmceP8epDoVCa9' target='_blank' rel='noreferrer'>UBICACIÓN</a>
        </div>
      </div>
      <div className='absolute bottom-0 right-0 w-1/2 '>
        <img src="/three-inf.svg" className='w-full' alt="Flor inferior derecha" />
      </div>
      <ScrollDownArrow />
    </section>
  );
}
