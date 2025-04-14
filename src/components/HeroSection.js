import React from 'react';

const HeroSection = () => {
  return (
    <div className="bg-gray-900 text-white min-h-screen flex items-center justify-center px-6">
      <div className="max-w-3xl text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          O Futuro do Trading é 100% Inteligente
        </h1>
        <p className="text-xl md:text-2xl mb-8">
          Conheça o QuantumTrade AI: o primeiro sistema de trading operado por agentes de IA autônomos que aprendem, evoluem e operam por você.
        </p>
        <a href="#formulario" className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded transition duration-300">
          Entre para a lista de espera
        </a>
      </div>
    </div>
  );
};

export default HeroSection;
