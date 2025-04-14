import React from 'react';

const ResultadosSeguranca = () => {
  return (
    <section className="py-16 text-center">
      <h2 className="text-3xl font-bold mb-10">Resultados e Segurança</h2>
      <div className="grid md:grid-cols-2 gap-6 px-4 max-w-4xl mx-auto">
        <div className="bg-white border-l-4 border-green-500 p-6 text-left shadow">
          <h3 className="text-lg font-semibold text-green-700">☑ Simulações de Performance</h3>
          <p>O sistema QuantumTrade AI foi testado em ambientes simulados com diferentes estratégias, apresentando resultados consistentes em operações curtas e médias.</p>
          <p className="text-xs mt-2 italic text-gray-500">*Resultados simulados. Não garantem retornos futuros.</p>
        </div>
        <div className="bg-white border-l-4 border-red-500 p-6 text-left shadow">
          <h3 className="text-lg font-semibold text-red-700">🛡 Controle de Risco com RiskBot</h3>
          <p>Cada operação é monitorada em tempo real pelo RiskBot, que limita perdas, ajusta alocações e garante a sobrevivência da conta em cenários adversos.</p>
          <p className="text-xs mt-2 italic text-gray-500">Foco total em proteção de capital e gestão responsável.</p>
        </div>
      </div>
    </section>
  );
};

export default ResultadosSeguranca;