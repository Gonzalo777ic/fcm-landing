'use client';

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function ContactPreFooter() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('loading');

    const formData = new FormData(e.currentTarget);
    const data = {
      nombre: formData.get('nombre'),
      empresa: formData.get('empresa'),
      email: formData.get('email'),
      celular: formData.get('celular'),
      mensaje: formData.get('mensaje'),
    };

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setStatus('success');
        setTimeout(() => setStatus('idle'), 5000);
      } else {
        setStatus('error');
      }
    } catch (error) {
      console.error("Error:", error);
      setStatus('error');
    }
  };

  return (
    <section className="bg-fcm-blue py-24 overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 flex flex-col lg:flex-row gap-20 items-center">
        
        {/* Columna Izquierda: Texto Estilo Industrial */}
        <div className="lg:w-1/2 text-white">
          <motion.h3 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-fcm-yellow font-black tracking-[0.4em] text-[10px] mb-6 uppercase"
          >
            Soporte Técnico Directo
          </motion.h3>
          <motion.h2 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl font-black mb-10 leading-[0.85] tracking-tighter uppercase"
          >
            ¿Cotizamos tu <br /> <span className="text-gray-400">próxima obra?</span>
          </motion.h2>
          <p className="text-xl text-white/60 max-w-md font-light leading-relaxed border-l-2 border-fcm-yellow/30 pl-6">
            Optimiza tu presupuesto utilizando <strong className="text-white">fibras sintéticas</strong> de alto rendimiento. Recibe asesoría en menos de 24 horas.
          </p>
        </div>

        {/* Columna Derecha: Formulario con campos completos */}
        <div className="lg:w-1/2 w-full relative">
          <AnimatePresence mode="wait">
            {status === 'success' ? (
              <motion.div 
                key="success"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                className="bg-white/5 backdrop-blur-md border border-fcm-yellow/30 p-12 text-center rounded-sm"
              >
                <div className="w-20 h-20 bg-fcm-yellow rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-fcm-blue text-4xl font-bold">✓</span>
                </div>
                <h4 className="text-white text-2xl font-black uppercase mb-2">¡Mensaje Recibido!</h4>
                <p className="text-white/60">Un especialista técnico de FCM te contactará pronto.</p>
              </motion.div>
            ) : (
              <motion.form 
                key="form"
                onSubmit={handleSubmit}
                className="space-y-0 border border-white/10 rounded-sm overflow-hidden bg-white/5 backdrop-blur-sm shadow-2xl"
              >
                <div className="grid grid-cols-1 md:grid-cols-2">
                  {/* Campo Nombre */}
                  <div className="border-b md:border-r border-white/10 p-6 focus-within:bg-white/5 transition-colors group">
                    <label className="block text-[10px] font-black uppercase tracking-[0.2em] text-fcm-yellow mb-2">
                      Nombre Completo
                    </label>
                    <input 
                      name="nombre"
                      type="text" 
                      className="w-full bg-transparent border-none outline-none text-white placeholder-white/20 text-lg font-medium"
                      placeholder="Ej. Juan Pérez"
                      required
                    />
                  </div>

                  {/* Campo Empresa */}
                  <div className="border-b border-white/10 p-6 focus-within:bg-white/5 transition-colors group">
                    <label className="block text-[10px] font-black uppercase tracking-[0.2em] text-fcm-yellow mb-2">
                      Empresa
                    </label>
                    <input 
                      name="empresa"
                      type="text" 
                      className="w-full bg-transparent border-none outline-none text-white placeholder-white/20 text-lg font-medium"
                      placeholder="Nombre de empresa"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2">
                  {/* Campo Correo */}
                  <div className="border-b md:border-r border-white/10 p-6 focus-within:bg-white/5 transition-colors group">
                    <label className="block text-[10px] font-black uppercase tracking-[0.2em] text-fcm-yellow mb-2">
                      Correo Electrónico
                    </label>
                    <input 
                      name="email"
                      type="email" 
                      className="w-full bg-transparent border-none outline-none text-white placeholder-white/20 text-lg font-medium"
                      placeholder="juan@gmail.com"
                      required
                    />
                  </div>

                  {/* Campo Celular */}
                  <div className="border-b border-white/10 p-6 focus-within:bg-white/5 transition-colors group">
                    <label className="block text-[10px] font-black uppercase tracking-[0.2em] text-fcm-yellow mb-2">
                      Celular / WhatsApp
                    </label>
                    <input 
                      name="celular"
                      type="tel" 
                      className="w-full bg-transparent border-none outline-none text-white placeholder-white/20 text-lg font-medium"
                      placeholder="987 654 321"
                      required
                    />
                  </div>
                </div>

                {/* Campo Mensaje */}
                <div className="p-6 focus-within:bg-white/5 transition-colors group">
                  <label className="block text-[10px] font-black uppercase tracking-[0.2em] text-fcm-yellow mb-2">
                    Detalles de la obra
                  </label>
                  <textarea 
                    name="mensaje"
                    rows={2}
                    className="w-full bg-transparent border-none outline-none text-white placeholder-white/20 text-lg font-medium resize-none"
                    placeholder="¿En qué proyecto necesitas usar fibra?"
                  ></textarea>
                </div>

                {/* Botón Envío */}
                <div className="p-6 bg-black/20">
                  <button 
                    type="submit"
                    disabled={status === 'loading'}
                    className={`w-full bg-fcm-yellow text-fcm-blue px-10 py-5 font-black uppercase tracking-[0.2em] text-xs transition-all flex items-center justify-center gap-3 hover:bg-white active:scale-[0.98] ${status === 'loading' ? 'opacity-50 cursor-not-allowed' : ''}`}
                  >
                    {status === 'loading' ? 'ENVIANDO...' : 'SOLICITAR COTIZACIÓN'}
                  </button>
                  {status === 'error' && (
                    <p className="text-red-400 text-[10px] font-bold mt-4 text-center uppercase tracking-widest">
                      Ocurrió un error. Inténtalo de nuevo.
                    </p>
                  )}
                </div>
              </motion.form>
            )}
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}