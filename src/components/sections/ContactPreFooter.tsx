export default function ContactPreFooter() {
  return (
    <section className="bg-fcm-blue py-20">
      <div className="container mx-auto px-6 md:px-12 flex flex-col lg:flex-row gap-16 items-center">
        
        {/* Columna Izquierda: Texto */}
        <div className="lg:w-1/2 text-white">
          <h3 className="text-white/80 font-bold tracking-[0.2em] text-xs mb-4 uppercase">
            Agenda una llamada con nosotros
          </h3>
          <h2 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">
            ¿Quieres un presupuesto para tu obra?
          </h2>
          <p className="text-lg text-white/70 max-w-md">
            Si tienes alguna consulta adicional, no dudes en contactarnos.
          </p>
        </div>

        {/* Columna Derecha: Formulario */}
        <div className="lg:w-1/2 w-full">
          <form className="space-y-0 border border-white/20 rounded-sm overflow-hidden">
            {/* Campo Nombre */}
            <div className="border-b border-white/20 p-6 bg-fcm-blue focus-within:bg-white/5 transition-colors">
              <label className="block text-xs font-bold uppercase tracking-widest text-white mb-2">
                Nombre <span className="text-fcm-yellow text-[10px]">(required)</span>
              </label>
              <input 
                type="text" 
                className="w-full bg-transparent border-none outline-none text-white placeholder-white/30 text-lg"
                placeholder="Tu nombre completo"
                required
              />
            </div>

            {/* Campo Correo */}
            <div className="border-b border-white/20 p-6 bg-fcm-blue focus-within:bg-white/5 transition-colors">
              <label className="block text-xs font-bold uppercase tracking-widest text-white mb-2">
                Correo <span className="text-fcm-yellow text-[10px]">(required)</span>
              </label>
              <input 
                type="email" 
                className="w-full bg-transparent border-none outline-none text-white placeholder-white/30 text-lg"
                placeholder="ejemplo@correo.com"
                required
              />
            </div>

            {/* Campo Mensaje */}
            <div className="p-6 bg-fcm-blue focus-within:bg-white/5 transition-colors">
              <label className="block text-xs font-bold uppercase tracking-widest text-white mb-2">
                Mensaje
              </label>
              <textarea 
                rows={4}
                className="w-full bg-transparent border-none outline-none text-white placeholder-white/30 text-lg resize-none"
                defaultValue="Hola! Estoy interesado(a) en sus productos"
              ></textarea>
            </div>

            {/* Botón Envío */}
            <div className="p-6 bg-fcm-blue">
              <button 
                type="submit"
                className="bg-fcm-yellow text-fcm-blue px-10 py-4 font-bold uppercase tracking-widest text-sm hover:bg-yellow-500 transition-all rounded-sm shadow-lg active:scale-95"
              >
                CONTÁCTANOS
              </button>
            </div>
          </form>
        </div>

      </div>
    </section>
  );
}