import React from "react";

function App() {
  return (
    <div className="bg-gray-50 min-h-screen flex flex-col">
      {/* Header */}
      <header className="bg-blue-600 py-8 text-white text-center shadow">
        <h1 className="text-4xl font-extrabold mb-2">Entrena en casa, personalizadamente</h1>
        <p className="text-lg">La app que te ayuda a mejorar tu postura y rendimiento, con feedback en tiempo real.</p>
      </header>
      
      {/* Main Content */}
      <main className="flex-1 container mx-auto px-4 py-12">
        {/* Hero Section */}
        <section className="text-center mb-12">
          <h2 className="text-2xl font-bold mb-4">¿Por qué elegirnos?</h2>
          <p className="text-gray-700 mb-6">
            Olvídate de rutinas genéricas. Nuestra app te guía paso a paso con entrenamientos adaptados a tu nivel y te corrige en tiempo real para que tu postura sea siempre la correcta.
          </p>
          <a
            href="#registro"
            className="inline-block bg-blue-600 text-white rounded px-8 py-3 font-semibold hover:bg-blue-700 transition"
          >
            ¡Empieza gratis!
          </a>
        </section>
        
        {/* Features */}
        <section className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white p-6 rounded shadow text-center">
            <span className="text-4xl mb-2 inline-block">🤖</span>
            <h3 className="font-bold text-xl mb-2">Personalización total</h3>
            <p>Ejercicios adaptados a tu nivel y objetivos, con seguimiento inteligente.</p>
          </div>
          <div className="bg-white p-6 rounded shadow text-center">
            <span className="text-4xl mb-2 inline-block">🧍‍♂️</span>
            <h3 className="font-bold text-xl mb-2">Feedback de postura</h3>
            <p>Recibe correcciones visuales y auditivas para mejorar tu técnica en tiempo real.</p>
          </div>
          <div className="bg-white p-6 rounded shadow text-center">
            <span className="text-4xl mb-2 inline-block">📈</span>
            <h3 className="font-bold text-xl mb-2">Progreso y motivación</h3>
            <p>Visualiza tu avance, desbloquea logros y mantente motivado cada semana.</p>
          </div>
        </section>
        
        {/* Call to Action / Registro */}
        <section id="registro" className="text-center">
          <h2 className="text-xl font-bold mb-2">¿Listo para transformar tu entrenamiento?</h2>
          <p className="mb-6 text-gray-700">
            Regístrate ahora y accede a tu primera rutina personalizada.
          </p>
          <form className="max-w-md mx-auto flex flex-col gap-4">
            <input
              type="email"
              placeholder="Tu email"
              className="p-3 rounded border"
              required
            />
            <button
              type="submit"
              className="bg-blue-600 text-white font-semibold py-3 rounded hover:bg-blue-700 transition"
            >
              Comenzar ahora
            </button>
          </form>
        </section>
      </main>
      
      {/* Footer */}
      <footer className="bg-gray-800 text-gray-200 py-6 text-center">
        © 2025 EntrenaEnCasa | Tu entrenador personal digital
      </footer>
    </div>
  );
}

export default App;