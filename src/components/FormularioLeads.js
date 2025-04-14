import React from 'react';

const FormularioLeads = () => {
  return (
    <div id="formulario" className="bg-white py-16 px-6">
      <div className="max-w-xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4 text-gray-900">Garanta seu acesso antecipado</h2>
        <p className="mb-8 text-gray-700">Cadastre-se para ser um dos primeiros a testar o QuantumTrade AI e receba novidades exclusivas.</p>
        <form
          action="https://formspree.io/f/your-form-id"
          method="POST"
          className="space-y-4"
        >
          <input
            type="text"
            name="nome"
            placeholder="Seu nome"
            required
            className="w-full px-4 py-3 border border-gray-300 rounded"
          />
          <input
            type="email"
            name="email"
            placeholder="Seu e-mail"
            required
            className="w-full px-4 py-3 border border-gray-300 rounded"
          />
          <button
            type="submit"
            className="bg-blue-600 text-white font-semibold px-6 py-3 rounded hover:bg-blue-700 transition duration-300"
          >
            Cadastrar
          </button>
        </form>
      </div>
    </div>
  );
};

export default FormularioLeads;
