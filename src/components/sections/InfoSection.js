import React from 'react';
import ScrollDownArrow from '../ScrollDownArrow';

export default function InfoSection() {
  return (
    <section className='panel base'>
      <div className='flex flex-col items-center justify-center gap-10 px-6 w-full'>
        <div className='w-full max-w-[150px]'>
          <img className='w-full' src='/regalo.svg' alt="Regalo" />
        </div>
        <p className='text-primary text-[48px] font-garland'>SUGERENCIA DE REGALOS</p>
        <p className='font-cormorant text-[48px] text-primary font-light px-10 leading-[1.25] tracking-[-0.7] w-full max-w-[750px]'>Tu presencia es nuestro mejor regalo. Si deseas realizar algun obsequio, lo recibiremos con gratitud, aqui tienes algunas ideas:</p>
        <a className='text-primary font-cormorant text-[32px] bg-[#434430] text-white rounded-xl px-4 py-2 text-[#EEEDED]' href='www.google.com' target='_blank' rel='noreferrer'>MESA DE REGALOS</a>

        <div className='w-full max-w-[175px]'>
          <img className='w-full' src='/sobre.svg' alt="Sobre" />
        </div>
        <p className='text-primary text-[48px] v font-garland'>LLUVIA DE SOBRES</p>

        <div className='w-full max-w-[130px]'>
          <img className='w-full' src='/calendario.svg' alt="Calendario" />
        </div>
        <p className='text-primary text-[48px]  font-garland'>CONFIRMACION</p>
        <p className='font-cormorant text-[48px] text-primary px-8 font-light  leading-[1.25] tracking-[-0.7] w-full max-w-[700px]'>Agradecemos que confirmes tu asistencia antes del Domingo 1 de Marzo de  2026:</p>
        <a className='text-primary font-cormorant text-[32px]  text-white bg-[#434430] rounded-2xl px-4 py-2 text-[#EEEDED]' href='www.google.com' target='_blank' rel='noreferrer'>CONFIRMAR</a>
      </div>
      <ScrollDownArrow />
    </section>
  );
}
