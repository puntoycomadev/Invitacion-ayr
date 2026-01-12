import React from 'react';

export default function InfoSection() {
  return (
    <section className='panel base'>
      <div className='flor-superior'>
        <img src="/last-sup.svg" alt="Flor superior" />
      </div>
      <div className='flex flex-col items-center justify-center gap-6 px-6 w-full'>
        <div>
          <img src='/regalo.svg' alt="Regalo" />
        </div>
        <p className='text-primary text-xl font-garland'>SUGERENCIA DE REGALOS</p>
        <p className='font-cormorant text-2xl leading-[1.25] tracking-[-0.7]'>Tu presencia es nuestro mejor regalo. Si deseas realizar algun obsequio, lo recibiremos con gratitud, aqui tienes algunas ideas:</p>
        <a className='text-primary font-cormorant bg-[#434430] text-white rounded-xl px-4 py-2 text-[#EEEDED]' href='www.google.com' target='_blank' rel='noreferrer'>MESA DE REGALOS</a>

        <div>
          <img src='/sobre.svg' alt="Sobre" />
        </div>
        <p className='text-primary text-xl font-garland'>LLUVIA DE SOBRES</p>

        <div>
          <img src='/calendario.svg' alt="Calendario" />
        </div>
        <p className='text-primary text-xl font-garland'>CONFIRMACION</p>
        <p className='font-cormorant text-2xl  leading-[1.25] tracking-[-0.7]'>Agradecemos que confirmes tu asistencia antes del Domingo 1 de Marzo de  2026:</p>
        <a className='text-primary font-cormorant  text-white bg-[#434430] rounded-2xl px-4 py-2 text-[#EEEDED]' href='www.google.com' target='_blank' rel='noreferrer'>CONFIRMAR</a>
      </div>
    </section>
  );
}
