'use client';

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function ContactForm() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [formData, setFormData] = useState({
    nombre: "",
    empresa: "",
    email: "",
    celular: "",
    mensaje: ""
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ nombre: "", empresa: "", email: "", celular: "", mensaje: "" });
        // Volver al estado inicial después de 5 segundos
        setTimeout(() => setStatus('idle'), 5000);
      } else {
        setStatus('error');
      }
    } catch (error) {
      console.error("Error:", error);
      setStatus('error');
    }
  };

  const inputStyles = "w-full p-4 border border-gray-300 rounded-sm focus:outline-none focus:border-fcm-blue text-sm text-gray-700 bg-white shadow-sm transition-all";

  return (
    <section className="bg-[#F2F2F2] py-24 min-h-[800px] flex items-center">
      <div className="container mx-auto px-6 max-w-3xl">
        <div className="text-center mb-12">
          <h1 className="text-fcm-blue text-4xl md:text-5xl font-black uppercase mb-6 tracking-tight">
            Ponte en contacto con nosotros
          </h1>
          <p className="text-gray-600 text-lg leading-relaxed">
            En <strong className="text-fcm-blue">FCM</strong> estamos listos para asesorarte en la elección de la fibra para concreto ideal para tu aplicación.
          </p>
        </div>

        <div className="relative">
          <AnimatePresence mode="wait">
            {status === 'success' ? (
              <motion.div 
                key="success"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="bg-white p-12 rounded-sm shadow-xl border-t-4 border-fcm-yellow text-center"
              >
                <div className="w-20 h-20 bg-fcm-yellow rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-fcm-blue text-4xl font-bold">✓</span>
                </div>
                <h2 className="text-fcm-blue text-2xl font-black uppercase mb-2 italic">¡MENSAJE RECIBIDO!</h2>
                <p className="text-gray-600">Un especialista técnico de FCM se contactará pronto.</p>
              </motion.div>
            ) : (
              <motion.form 
                key="form"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                onSubmit={handleSubmit} 
                className="space-y-4"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input 
                    type="text" 
                    placeholder="Nombre (Obligatorio)" 
                    required
                    value={formData.nombre}
                    className={inputStyles}
                    onChange={(e) => setFormData({...formData, nombre: e.target.value})}
                  />
                  <input 
                    type="text" 
                    placeholder="Empresa" 
                    value={formData.empresa}
                    className={inputStyles}
                    onChange={(e) => setFormData({...formData, empresa: e.target.value})}
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input 
                    type="email" 
                    placeholder="Correo electrónico (Obligatorio)" 
                    required
                    value={formData.email}
                    className={inputStyles}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                  />
                  <input 
                    type="tel" 
                    placeholder="Celular (Ej: +51 987 654 321)" 
                    required
                    value={formData.celular}
                    className={inputStyles}
                    onChange={(e) => setFormData({...formData, celular: e.target.value})}
                  />
                </div>

                <textarea 
                  placeholder="Mensaje" 
                  rows={6}
                  value={formData.mensaje}
                  className={inputStyles}
                  onChange={(e) => setFormData({...formData, mensaje: e.target.value})}
                ></textarea>

                <div className="text-left pt-4 flex items-center gap-6">
                  <button 
                    type="submit"
                    disabled={status === 'loading'}
                    className={`bg-fcm-yellow text-fcm-blue px-12 py-4 rounded-sm font-black uppercase text-xs tracking-[0.2em] hover:bg-yellow-500 shadow-lg transition-all active:scale-95 ${status === 'loading' ? 'opacity-50 cursor-not-allowed' : ''}`}
                  >
                    {status === 'loading' ? 'ENVIANDO...' : 'ENVIAR'}
                  </button>
                  {status === 'error' && (
                    <p className="text-red-500 font-bold text-xs uppercase tracking-widest italic animate-pulse">
                      Error en el envío. Intente de nuevo.
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