
export default function Contact() {
    return (
        <section className="panel base">
            <div className="flex flex-col gap-6 items-center justify-center">
                <div>
                    <img src='/whatsapp.svg' alt="WhatsApp" />
                </div>
                <p className='text-primary text-2xl font-garland'>CONTACTO</p>
                <div className='flex flex-row gap-2'>
                    <a className='text-primary font-cormorant  bg-[#434430] text-white rounded-xl px-10 py-2 text-[#EEEDED]' href='www.google.com' target='_blank' rel='noreferrer'>ANGÉLICA</a>
                    <a className='text-primary font-cormorant  bg-[#434430] text-white rounded-xl px-10 py-2 text-[#EEEDED]' href='www.google.com' target='_blank' rel='noreferrer'>ROBERTO</a>
                </div>
                <div className="flex flex-col gap-2 absolute bottom-4 text-start text-sm">
                    <p>Desarrollado por Invitaciones Digitales Studio</p>
                    <p>Invitacionesdigitales.studio</p>
                </div>
            </div>
        </section>
    )
}