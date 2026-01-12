import React from 'react';

export default function QuoteSection() {
  return (
    <section className="panel base  ">
      <div className='absolute top-0 right-0 w-1/2 md:w-1/4'>
        <img src="/Flor-sup.svg" alt="Flor superior" className='w-full' />
      </div>
      <div className='px-10 md:px-[120px] xl:max-w-[1024px] mx-auto'>
        <div className="borde-texto w-full flex flex-col gap-0 ">
          {/* líneas */}
          <span className="borde-superior" />
          <span className="borde-derecho" />
          <span className="borde-inferior" />
          <span className="borde-izquierdo" />

          {/* esquinas unidas */}
          <span className="esquina-tr" />
          <span className="esquina-bl" />

          {/* comillas */}
          <span className="comillas open">
            <svg width="27" height="19" viewBox="0 0 27 19" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M19.0155 0.096164C16.8801 0.372205 13.6717 1.93471 13.9374 5.367C14.1874 8.617 16.4895 9.90866 18.9842 9.98679C20.5051 10.0337 21.4322 9.85137 21.9426 9.68471C22.1509 9.617 22.3384 9.82533 22.2551 10.0285C21.979 10.6743 21.4322 11.8201 20.5259 13.1691C19.578 14.5649 17.9113 16.6899 17.0415 17.7837C16.8801 17.9868 17.0936 18.2785 17.3384 18.1795C19.6509 17.2576 25.9113 14.0962 26.479 6.66908C27.0259 -0.492378 20.9165 -0.143419 19.0155 0.096164Z" fill="#6B725C" />
              <path d="M5.09362 0.096164C2.9582 0.372205 -0.250129 1.93471 0.0154968 5.367C0.265497 8.617 2.56758 9.90866 5.06237 9.98679C6.58321 10.0337 7.51029 9.85137 8.02071 9.68471C8.22383 9.617 8.41654 9.82533 8.33321 10.0285C8.05716 10.6743 7.51029 11.8201 6.60404 13.1691C5.65612 14.5649 3.98945 16.6899 3.11966 17.7837C2.9582 17.9868 3.17175 18.2785 3.41654 18.1795C5.72904 17.2576 11.9895 14.0962 12.552 6.66908C13.104 -0.492378 6.99466 -0.143419 5.09362 0.096164Z" fill="#6B725C" />
            </svg>
          </span>
          <span className="comillas close ">
            <svg width="27" height="19" viewBox="0 0 27 19" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M19.0155 0.096164C16.8801 0.372205 13.6717 1.93471 13.9374 5.367C14.1874 8.617 16.4895 9.90866 18.9842 9.98679C20.5051 10.0337 21.4322 9.85137 21.9426 9.68471C22.1509 9.617 22.3384 9.82533 22.2551 10.0285C21.979 10.6743 21.4322 11.8201 20.5259 13.1691C19.578 14.5649 17.9113 16.6899 17.0415 17.7837C16.8801 17.9868 17.0936 18.2785 17.3384 18.1795C19.6509 17.2576 25.9113 14.0962 26.479 6.66908C27.0259 -0.492378 20.9165 -0.143419 19.0155 0.096164Z" fill="#6B725C" />
              <path d="M5.09362 0.096164C2.9582 0.372205 -0.250129 1.93471 0.0154968 5.367C0.265497 8.617 2.56758 9.90866 5.06237 9.98679C6.58321 10.0337 7.51029 9.85137 8.02071 9.68471C8.22383 9.617 8.41654 9.82533 8.33321 10.0285C8.05716 10.6743 7.51029 11.8201 6.60404 13.1691C5.65612 14.5649 3.98945 16.6899 3.11966 17.7837C2.9582 17.9868 3.17175 18.2785 3.41654 18.1795C5.72904 17.2576 11.9895 14.0962 12.552 6.66908C13.104 -0.492378 6.99466 -0.143419 5.09362 0.096164Z" fill="#6B725C" />
            </svg>
          </span>

          {/* contenido */}
          <p className='font-cormorant font-light tracking-tight text-[22px]  md:text-[32px] lg:text-[64px] italic px-6 pt-5 leading-[1.25] tracking-[-.7]'> Así que ya no son dos, sino una sola carne. Por lo tanto, lo que Dios ha unido, que no lo separe ningún hombre.</p>
          <span className='font-cormorant font-bold tracking-tight text-[22px]  md:text-[28px] lg:text-[64px] italic pb-5'>Mateo 19:6</span>
        </div>
      </div>
      <div className='absolute bottom-0 left-0 w-1/2 md:w-1/4'>
        <img src="/Flor-inf.svg" className='w-full' alt="Flor inferior" />
      </div>
    </section>
  );
}
