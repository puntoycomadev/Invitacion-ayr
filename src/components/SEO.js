import { Helmet } from 'react-helmet-async';

export default function SEO() {
  return (
    <Helmet>
      <html lang="es" />
      <title>Angélica & Roberto | Invitación Digital</title>
      <meta name="description" content="Te invitamos a celebrar la boda de Angélica y Roberto. Descubre todos los detalles de nuestra invitación digital." />

      {/* Open Graph (WhatsApp / Facebook) */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content="Angélica & Roberto | Invitación Digital" />
      <meta property="og:description" content="Acompáñanos a celebrar la boda de Angélica y Roberto. Consulta fecha, lugar y detalles en nuestra invitación digital." />
      <meta property="og:url" content="https://angelicayroberto.invitacionesdigitales.studio" />
      <meta property="og:image" content="https://angelicayroberto.invitacionesdigitales.studio/_0004188.webp" />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Angélica & Roberto | Invitación Digital" />
      <meta name="twitter:description" content="Te invitamos a la boda de Angélica y Roberto. Todos los detalles en nuestra invitación digital." />
      <meta name="twitter:image" content="https://angelicayroberto.invitacionesdigitales.studio/_0004188.webp" />
    </Helmet>
  );
}
