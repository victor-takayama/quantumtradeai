import React from 'react';

const ResultadosSeguranca = () => {
  return (
    <section className="bg-white py-16 px-6" id="resultados">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-10">
          Resultados e Segurança
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
          <div className="bg-gray-50 p-6 rounded shadow">
            <h3 className="text-xl font-semibold text-green-700 mb-2">📈 Simulações de Performance</h3>
            <p className="text-gray-700 mb-2">
              O sistema QuantumTrade AI foi testado em ambientes simulados com diferentes estratégias, apresentando resultados consistentes em operações curtas e médias.
            </p>
            <p className="text-sm text-gray-500 italic">*Resultados simulados. Não garantem retornos futuros.</p>
          </div>
          <div className="bg-gray-50 p-6 rounded shadow">
            <h3 className="text-xl font-semibold text-red-700 mb-2">🛡️ Controle de Risco com RiskBot</h3>
            <p className="text-gray-700">
              Cada operação é monitorada em tempo real pelo RiskBot, que limita perdas, ajusta alocações e garante a sobrevivência da conta em cenários adversos.
            </p>
            <p className="text-sm text-gray-500 italic">Foco total em proteção de capital e gestão responsável.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResultadosSeguranca;
