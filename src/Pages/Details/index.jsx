import React from "react";

const ProductPage = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <main className="p-4">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col lg:flex-row lg:space-x-8 bg-gray-800 p-4 rounded-lg">
            <div className="lg:w-1/2">
              <img
                src="https://via.placeholder.com/400"
                alt="Producto"
                className="w-full rounded-lg"
              />
            </div>
            <div className="lg:w-1/2">
              <h1 className="text-3xl font-bold mb-2">
                Slider reforzado para moto yamaha ybr125
              </h1>
              <p className="text-2xl text-green-500 mb-4">$1,200.00 MXN</p>
              <p className="text-red-500 mb-4">(3 Disponibles)</p>
              <button className="bg-green-500 text-white font-bold py-2 px-4 rounded-full mb-4">
                Agregar al carrito
              </button>
              <div className="flex items-center mb-4">
                <img
                  src="https://via.placeholder.com/150x50"
                  alt="Payment Methods"
                />
              </div>
              <p className="mb-4">
                ¡Envío de 3 a 5 días hábiles!* Hasta 12MSI con mercado crédito
              </p>
              <button className="bg-gray-700 text-white font-bold py-2 px-4 rounded-full">
                Manual Instalación
              </button>
            </div>
          </div>

          <div className="bg-gray-800 p-4 mt-8 rounded-lg">
            <div className="tabs mb-4">
              <button className="px-4 py-2 bg-green-700 text-white rounded-l">
                Descripción
              </button>
              <button className="px-4 py-2 bg-gray-700 text-white">
                Opiniones
              </button>
              <button className="px-4 py-2 bg-gray-700 text-white rounded-r">
                Información del envío
              </button>
            </div>
            <div className="tab-content text-gray-300">
              <p>
                Slider tipo jaula. Hecho de acero industrial y con pintura
                electrostática para mayor duración, incluso en climas
                costeros...
              </p>
            </div>
          </div>

          <div className="bg-gray-800 p-4 mt-8 rounded-lg">
            <h2 className="text-xl mb-4">Hacer una pregunta</h2>
            <div className="flex space-x-2">
              <input
                className="w-full px-3 py-2 text-gray-900 rounded-lg"
                type="text"
                placeholder="Hacer una pregunta..."
              />
              <button className="bg-green-500 text-white px-4 py-2 rounded-lg">
                Enviar Pregunta
              </button>
            </div>
            <a href="#" className="text-green-500 mt-4 block">
              Ver todas las preguntas
            </a>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ProductPage;
