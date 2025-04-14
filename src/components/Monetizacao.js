import React from 'react';

const Monetizacao = () => {
  return (
    <section className="bg-gray-100 py-16 text-center">
      <h2 className="text-3xl font-bold mb-10">Modelo de Monetização Inteligente</h2>
      <div className="grid md:grid-cols-2 gap-6 px-4 max-w-4xl mx-auto">
        <div className="bg-white border-l-4 border-yellow-500 p-6 text-left shadow">
          <h3 className="text-lg font-semibold text-blue-700">💰 Revenue Share</h3>
          <p>O QuantumTrade AI só lucra quando você lucra. O modelo de revenue share retém uma pequena porcentagem apenas das operações lucrativas.</p>
          <p className="text-xs mt-2 italic text-gray-500">Sem mensalidade, sem custo fixo, sem surpresas.</p>
        </div>
        <div className="bg-white border-l-4 border-green-600 p-6 text-left shadow">
          <h3 className="text-lg font-semibold text-green-800">✅ Zero Risco para o Usuário</h3>
          <p>Em caso de operações com perda, você não paga nada. Isso garante confiança e alinhamento total entre seus resultados e os da plataforma.</p>
          <p className="text-xs mt-2 italic text-gray-500">Transparente, justo e alinhado com seu sucesso.</p>
        </div>
      </div>
    </section>
  );
};

export default Monetizacao;