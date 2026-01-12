
export default function Contact() {
    return (
        <section className="panel base">
            <div className="flex flex-col gap-6 items-center justify-center">
                <div className="w-full max-w-[150px]">
                    <img className="w-full" src='/whatsapp.svg' alt="WhatsApp" />
                </div>
                <p className='text-primary text-[48px] font-garland'>CONTACTO</p>
                <div className='flex flex-row gap-2'>
                    <a className='text-primary font-cormorant text-2xl  bg-[#434430] text-white rounded-xl px-10 py-2 text-[#EEEDED]' href='www.google.com' target='_blank' rel='noreferrer'>ANGÉLICA</a>
                    <a className='text-primary font-cormorant text-2xl  bg-[#434430] text-white rounded-xl px-10 py-2 text-[#EEEDED]' href='www.google.com' target='_blank' rel='noreferrer'>ROBERTO</a>
                </div>
                <div className="flex gap-2 absolute bottom-4 text-start justify-start text-sm">
                    <p>Desarrollado por Invitaciones Digitales Studio</p>
                    <p>Invitacionesdigitales.studio</p>
                </div>
            </div>
        </section>
    )
}