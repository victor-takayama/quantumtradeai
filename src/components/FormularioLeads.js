import React from 'react';

const FormularioLeads = () => {
  return (
    <section id="formulario" className="py-16 text-center">
      <h2 className="text-3xl font-bold mb-4">Garanta seu acesso antecipado</h2>
      <p className="mb-6">Cadastre-se para ser um dos primeiros a testar o QuantumTrade AI e receba novidades exclusivas.</p>
      <form action="https://formspree.io/f/mqapjpdz" method="POST" className="space-y-4 max-w-md mx-auto">
        <input type="text" name="nome" placeholder="Seu nome" required className="w-full px-4 py-2 border border-gray-300 rounded" />
        <input type="email" name="email" placeholder="Seu e-mail" required className="w-full px-4 py-2 border border-gray-300 rounded" />
        <button type="submit" className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-2 rounded">
          Cadastrar
        </button>
      </form>
    </section>
  );
};

export default FormularioLeads;