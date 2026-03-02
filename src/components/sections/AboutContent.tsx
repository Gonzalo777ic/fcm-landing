import Image from "next/image";

export default function AboutContent() {
  return (
    <section className="bg-white py-20">
      <div className="container mx-auto px-6 md:px-12">
        {/* Encabezado Quiénes Somos */}
        <div className="text-center max-w-4xl mx-auto mb-20">
          <h1 className="text-fcm-blue text-4xl font-bold mb-4 uppercase">Quiénes Somos</h1>
          <div className="w-16 h-1 bg-fcm-yellow mx-auto mb-8"></div>
          <p className="text-gray-700 text-lg leading-relaxed">
            Somos una empresa peruana productora de <strong className="text-fcm-blue">macro fibra sintética de polipropileno</strong> con más de 30 años de experiencia atendiendo clientes nacionales e internacionales. 
            Contamos con un <strong className="text-fcm-blue">producto de calidad garantizada</strong> por nuestra certificación <strong className="text-fcm-blue">ISO 9001:2015</strong>, porque sabemos que la seguridad es lo primero.
          </p>
        </div>

        {/* Misión y Visión */}
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-1/2 relative h-[400px] md:h-[500px] w-full rounded-2xl overflow-hidden shadow-2xl">
            <Image
              src="/images/casco.png"
              alt="Seguridad y Calidad FCM"
              fill
              className="object-cover"
            />
          </div>
          
          <div className="lg:w-1/2 space-y-12">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-1 h-8 bg-fcm-yellow"></div>
                <h2 className="text-fcm-blue text-2xl font-bold uppercase tracking-wider">Misión</h2>
              </div>
              <p className="text-gray-600 text-lg leading-relaxed">
                Somos una empresa dedicada a la elaboración y comercialización de macro fibra sintética estructural, brindamos productos de calidad y un alto nivel de servicio, lo cual nos permite satisfacer las necesidades de nuestros clientes.
              </p>
            </div>

            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-1 h-8 bg-fcm-yellow"></div>
                <h2 className="text-fcm-blue text-2xl font-bold uppercase tracking-wider">Visión</h2>
              </div>
              <p className="text-gray-600 text-lg leading-relaxed">
                Ser reconocidos en el mercado nacional e internacional, fortaleciendo nuestra marca a través de un amplio portafolio de productos, así como la optimización de nuestro sistema de distribución y la atención excepcional a nuestros clientes.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}