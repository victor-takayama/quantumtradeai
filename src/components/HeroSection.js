import React from 'react';

const HeroSection = () => {
  return (
    <section className="bg-gray-900 text-white py-20 px-6 text-center">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          O Futuro do Trading é 100% Inteligente
        </h1>
        <p className="text-lg md:text-xl mb-8">
          Conheça o QuantumTrade AI: o primeiro sistema de trading operado por agentes de IA autônomos
          que aprendem, evoluem e operam por você.
        </p>
        <a
          href="#formulario"
          className="bg-blue-600 hover:bg-blue-700 transition text-white font-semibold px-6 py-3 rounded"
        >
          Entre para a lista de espera
        </a>
      </div>
    </section>
  );
};

export default HeroSection;