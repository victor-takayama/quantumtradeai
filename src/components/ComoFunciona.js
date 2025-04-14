import React from 'react';

const ComoFunciona = () => {
  return (
    <section className="bg-gray-100 py-16 px-6" id="como-funciona">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-10">
          Como Funciona o QuantumTrade AI
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
          <div className="bg-white rounded shadow p-6">
            <h3 className="text-xl font-semibold text-blue-700 mb-2">📊 AnalyBot</h3>
            <p className="text-gray-700">
              Coleta e interpreta dados de mercado em tempo real para identificar padrões e oportunidades com base em aprendizado de máquina.
            </p>
          </div>
          <div className="bg-white rounded shadow p-6">
            <h3 className="text-xl font-semibold text-blue-700 mb-2">⚙️ TradeBot</h3>
            <p className="text-gray-700">
              Executa ordens de compra e venda automaticamente com base nas estratégias aprendidas, otimizando entrada e saída do mercado.
            </p>
          </div>
          <div className="bg-white rounded shadow p-6">
            <h3 className="text-xl font-semibold text-blue-700 mb-2">🛡️ RiskBot</h3>
            <p className="text-gray-700">
              Gerencia riscos e define limites de exposição, garantindo a segurança do capital em todos os cenários de mercado.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComoFunciona;
