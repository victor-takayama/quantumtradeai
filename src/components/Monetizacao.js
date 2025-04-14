import React from 'react';

const Monetizacao = () => {
  return (
    <section className="bg-gray-100 py-16 px-6" id="monetizacao">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8">
          Modelo de Monetização Inteligente
        </h2>
        <div className="bg-white rounded shadow p-6 mb-6 text-left">
          <h3 className="text-xl font-semibold text-blue-700 mb-2">🤝 Revenue Share</h3>
          <p className="text-gray-700">
            O QuantumTrade AI só lucra quando você lucra. O modelo de revenue share retém uma pequena porcentagem apenas das operações lucrativas.
          </p>
          <p className="text-sm text-gray-500 italic mt-1">Sem mensalidade, sem custo fixo, sem surpresas.</p>
        </div>
        <div className="bg-white rounded shadow p-6 text-left">
          <h3 className="text-xl font-semibold text-green-700 mb-2">✅ Zero Risco para o Usuário</h3>
          <p className="text-gray-700">
            Em caso de operações com perda, você não paga nada. Isso garante confiança e alinhamento total entre seus resultados e os da plataforma.
          </p>
          <p className="text-sm text-gray-500 italic mt-1">Transparente, justo e alinhado com seu sucesso.</p>
        </div>
      </div>
    </section>
  );
};

export default Monetizacao;
