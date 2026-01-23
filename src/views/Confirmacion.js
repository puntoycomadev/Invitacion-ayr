import React, { useState, useEffect } from 'react';

// Configuración de la API
const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:3001';
// ID del evento (esto debería venir de la configuración del proyecto)
const EVENTO_ID = process.env.REACT_APP_EVENTO_ID || '';

export default function Confirmacion() {
  // Estados del formulario
  const [step, setStep] = useState(1); // 1: código, 2: formulario, 3: éxito
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  // Datos del paso 1
  const [codigoConfirmacion, setCodigoConfirmacion] = useState('');

  // Formateador del código de confirmación (XXX-###-XX)
  const formatearCodigo = (value) => {
    // Remover todo excepto letras y números
    const cleaned = value.replace(/[^A-Za-z0-9]/g, '').toUpperCase();

    // Aplicar formato: XXX-###-XX
    let formatted = '';
    for (let i = 0; i < cleaned.length && i < 8; i++) {
      // Agregar guion después de posición 3 y 6
      if (i === 3 || i === 6) {
        formatted += '-';
      }
      formatted += cleaned[i];
    }

    return formatted;
  };

  const handleCodigoChange = (e) => {
    const formatted = formatearCodigo(e.target.value);
    setCodigoConfirmacion(formatted);
  };

  // Datos del invitado (recibidos del API)
  const [invitado, setInvitado] = useState(null);
  const [evento, setEvento] = useState(null);

  // Datos del paso 2
  const [asistira, setAsistira] = useState(true);
  const [pasesConfirmados, setPasesConfirmados] = useState(1);
  const [mensaje, setMensaje] = useState('');
  const [nombresAcompanantes, setNombresAcompanantes] = useState(['']);
  const [restriccionesAlimenticias, setRestriccionesAlimenticias] = useState('');

  // Verificar código de confirmación
  const handleVerificarCodigo = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      const response = await fetch(`${API_URL}/api/confirmar/verificar`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          eventoId: EVENTO_ID,
          codigoConfirmacion: codigoConfirmacion.toUpperCase().trim()
        }),
      });

      const data = await response.json();

      if (!data.success) {
        setError(data.error || 'Código no válido');
        setLoading(false);
        return;
      }

      // Guardar datos y pasar al paso 2
      setInvitado(data.data);
      setEvento(data.data.evento);
      setPasesConfirmados(1);
      setStep(2);
    } catch (err) {
      setError('Error de conexión. Intenta de nuevo.');
    } finally {
      setLoading(false);
    }
  };

  // Enviar confirmación
  const handleConfirmar = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      const response = await fetch(`${API_URL}/api/confirmar`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          eventoId: EVENTO_ID,
          codigoConfirmacion: codigoConfirmacion.toUpperCase().trim(),
          pasesConfirmados: asistira ? pasesConfirmados : 0,
          asistira,
          mensaje: mensaje || null,
          nombresAcompanantes: nombresAcompanantes.filter(n => n.trim()) || null,
          restriccionesAlimenticias: restriccionesAlimenticias || null
        }),
      });

      const data = await response.json();

      if (!data.success) {
        setError(data.error || 'Error al confirmar');
        setLoading(false);
        return;
      }

      // Éxito
      setStep(3);
    } catch (err) {
      setError('Error de conexión. Intenta de nuevo.');
    } finally {
      setLoading(false);
    }
  };

  // Manejar cambio en nombres de acompañantes
  const handleAcompananteChange = (index, value) => {
    const nuevosNombres = [...nombresAcompanantes];
    nuevosNombres[index] = value;
    setNombresAcompanantes(nuevosNombres);
  };

  // Agregar campo para acompañante
  const agregarAcompanante = () => {
    if (nombresAcompanantes.length < pasesConfirmados - 1) {
      setNombresAcompanantes([...nombresAcompanantes, '']);
    }
  };

  // Actualizar campos de acompañantes cuando cambia el número de pases
  useEffect(() => {
    if (pasesConfirmados > 1) {
      const cantidadAcompanantes = pasesConfirmados - 1;
      if (nombresAcompanantes.length < cantidadAcompanantes) {
        const nuevos = [...nombresAcompanantes];
        while (nuevos.length < cantidadAcompanantes) {
          nuevos.push('');
        }
        setNombresAcompanantes(nuevos);
      } else if (nombresAcompanantes.length > cantidadAcompanantes) {
        setNombresAcompanantes(nombresAcompanantes.slice(0, cantidadAcompanantes));
      }
    } else {
      setNombresAcompanantes(['']);
    }
  }, [pasesConfirmados]);

  return (
    <section className="min-h-screen bg-background flex items-center justify-center px-20">
      <div className="w-full ">

        {/* PASO 1: Ingresar código */}
        {step === 1 && (
          <div className="bg-white rounded-2xl shadow-lg p-20">
            <div className="text-center mb-10">
              <h1 className="text-primary text-[72px] font-garland mb-3">CONFIRMAR</h1>
              <h2 className="text-primary text-[64px] font-garland">ASISTENCIA</h2>
            </div>

            <form onSubmit={handleVerificarCodigo} className="space-y-8">
              <div>
                <label className="block text-primary font-cormorant text-[48px] mb-3">
                  Ingresa tu código de confirmación
                </label>
                <input
                  type="text"
                  value={codigoConfirmacion}
                  onChange={handleCodigoChange}
                  placeholder="JUA-001-A7"
                  maxLength={10}
                  className="w-full px-5 py-6 border-2 border-primary/30 rounded-xl font-cormorant text-[32px] text-center uppercase tracking-widest focus:outline-none focus:border-primary transition-colors text-black"
                  required
                  disabled={loading}
                />
              </div>

              {error && (
                <div className="bg-red-50 border border-red-200 text-red-700 px-5 py-4 rounded-xl text-center font-cormorant text-[32px]">
                  {error}
                </div>
              )}

              <button
                type="submit"
                disabled={loading || !codigoConfirmacion.trim()}
                className="w-full bg-primary text-white font-cormorant text-[42px] py-6 rounded-xl hover:bg-primary/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? 'Verificando...' : 'Continuar'}
              </button>
            </form>
          </div>
        )}

        {/* PASO 2: Formulario de confirmación */}
        {step === 2 && invitado && (
          <div className="bg-white rounded-2xl shadow-lg p-20">
            <div className="text-center mb-8">
              <h1 className="text-primary text-[64px] font-garland mb-3">¡HOLA!</h1>
              <p className="text-primary text-[48px] font-cormorant font-semibold">{invitado.nombre}</p>
              {evento && (
                <p className="text-primary/70 font-cormorant text-[32px] mt-2">{evento.nombreEvento}</p>
              )}
            </div>

            <form onSubmit={handleConfirmar} className="space-y-8">
              {/* Asistencia */}
              <div>
                <label className="block text-primary font-cormorant text-[32px] mb-4">
                  ¿Asistirás al evento?
                </label>
                <div className="flex gap-4">
                  <button
                    type="button"
                    onClick={() => setAsistira(true)}
                    className={`flex-1 py-4 rounded-xl font-cormorant text-[32px] transition-all ${
                      asistira
                        ? 'bg-primary text-white'
                        : 'bg-primary/10 text-primary hover:bg-primary/20'
                    }`}
                  >
                    ¡Sí, asistiré!
                  </button>
                  <button
                    type="button"
                    onClick={() => setAsistira(false)}
                    className={`flex-1 py-4 rounded-xl font-cormorant text-[32px] transition-all ${
                      !asistira
                        ? 'bg-red-500 text-white'
                        : 'bg-red-50 text-red-500 hover:bg-red-100'
                    }`}
                  >
                    No podré asistir
                  </button>
                </div>
              </div>

              {/* Número de pases (solo si asistirá) */}
              {asistira && (
                <>
                  <div>
                    <label className="block text-primary font-cormorant text-[32px] mb-3">
                      ¿Cuántos pases confirmas? (máximo {invitado.pasesAsignados})
                    </label>
                    <div className="flex items-center justify-center gap-5">
                      <button
                        type="button"
                        onClick={() => setPasesConfirmados(Math.max(1, pasesConfirmados - 1))}
                        className="w-14 h-14 rounded-full bg-primary/10 text-primary text-3xl font-bold hover:bg-primary/20 transition-colors"
                        disabled={pasesConfirmados <= 1}
                      >
                        -
                      </button>
                      <span className="text-primary text-5xl font-cormorant font-bold w-20 text-center">
                        {pasesConfirmados}
                      </span>
                      <button
                        type="button"
                        onClick={() => setPasesConfirmados(Math.min(invitado.pasesAsignados, pasesConfirmados + 1))}
                        className="w-14 h-14 rounded-full bg-primary/10 text-primary text-3xl font-bold hover:bg-primary/20 transition-colors"
                        disabled={pasesConfirmados >= invitado.pasesAsignados}
                      >
                        +
                      </button>
                    </div>
                  </div>

                  {/* Nombres de acompañantes */}
                  {pasesConfirmados > 1 && (
                    <div>
                      <label className="block text-primary font-cormorant text-[32px] mb-3">
                        Nombres de tus acompañantes
                      </label>
                      <div className="space-y-3">
                        {nombresAcompanantes.slice(0, pasesConfirmados - 1).map((nombre, index) => (
                          <input
                            key={index}
                            type="text"
                            value={nombre}
                            onChange={(e) => handleAcompananteChange(index, e.target.value)}
                            placeholder={`Acompañante ${index + 1}`}
                            className="w-full px-5 py-3 border-2 border-primary/30 rounded-xl font-cormorant text-lg focus:outline-none focus:border-primary transition-colors text-primary"
                          />
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Restricciones alimenticias */}
                  <div>
                    <label className="block text-primary font-cormorant text-[32px] mb-3">
                      ¿Alguna restricción alimenticia? (opcional)
                    </label>
                    <input
                      type="text"
                      value={restriccionesAlimenticias}
                      onChange={(e) => setRestriccionesAlimenticias(e.target.value)}
                      placeholder="Ej: Vegetariano, sin gluten, alergias..."
                      className="w-full px-5 py-3 border-2 border-primary/30 rounded-xl font-cormorant text-[28px] focus:outline-none focus:border-primary transition-colors text-black"
                    />
                  </div>
                </>
              )}

              {/* Mensaje opcional */}
              <div>
                <label className="block text-primary font-cormorant text-[32px] mb-3">
                  Mensaje para los novios (opcional)
                </label>
                <textarea
                  value={mensaje}
                  onChange={(e) => setMensaje(e.target.value)}
                  placeholder="Escribe un mensaje especial..."
                  rows={3}
                  className="w-full px-5 py-3 border-2 border-primary/30 rounded-xl font-cormorant text-[28px] focus:outline-none focus:border-primary transition-colors resize-none text-black"
                />
              </div>

              {error && (
                <div className="bg-red-50 border border-red-200 text-red-700 px-5 py-4 rounded-xl text-center font-cormorant text-lg">
                  {error}
                </div>
              )}

              <div className="flex gap-4">
                <button
                  type="button"
                  onClick={() => setStep(1)}
                  className="flex-1 bg-gray-200 text-gray-700 font-cormorant text-[32px] py-4 rounded-xl hover:bg-gray-300 transition-colors"
                >
                  Volver
                </button>
                <button
                  type="submit"
                  disabled={loading}
                  className="flex-1 bg-primary text-white font-cormorant text-[32px] py-4 rounded-xl hover:bg-primary/90 transition-colors disabled:opacity-50"
                >
                  {loading ? 'Enviando...' : 'Confirmar'}
                </button>
              </div>
            </form>
          </div>
        )}

        {/* PASO 3: Confirmación exitosa */}
        {step === 3 && (
          <div className="bg-white rounded-2xl shadow-lg p-10 text-center">
            <div className="mb-8">
              <div className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-5">
                <svg className="w-12 h-12 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h1 className="text-primary text-[64px] font-garland mb-3">
                {asistira ? '¡GRACIAS!' : 'CONFIRMACIÓN'}
              </h1>
              <h2 className="text-primary text-[52px] font-garland mb-4">
                {asistira ? 'TE ESPERAMOS' : 'RECIBIDA'}
              </h2>
            </div>

            {asistira ? (
              <div className="space-y-4">
                <p className="text-primary font-cormorant text-[42px]">
                  Tu asistencia ha sido confirmada con <strong>{pasesConfirmados}</strong> {pasesConfirmados === 1 ? 'pase' : 'pases'}.
                </p>
                <p className="text-primary/70 font-cormorant text-[32px]">
                  ¡Nos vemos pronto!
                </p>
              </div>
            ) : (
              <div className="space-y-4">
                <p className="text-primary font-cormorant text-[32px]">
                  Lamentamos que no puedas acompañarnos.
                </p>
                <p className="text-primary/70 font-cormorant text-[32px]">
                  ¡Gracias por informarnos!
                </p>
              </div>
            )}

            <div className="mt-10">
              <a
                href="/"
                className="inline-block bg-primary text-white font-cormorant text-[32px] px-10 py-4 rounded-xl hover:bg-primary/90 transition-colors"
              >
                Volver al inicio
              </a>
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
