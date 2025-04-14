import React from 'react';

const ComoFunciona = () => {
  return (
    <section className="bg-gray-100 py-16 text-center">
      <h2 className="text-3xl font-bold mb-10">Como Funciona o QuantumTrade AI</h2>
      <div className="grid md:grid-cols-3 gap-6 px-4 max-w-6xl mx-auto">
        <div className="bg-white p-6 rounded shadow">
          <h3 className="text-xl font-semibold text-blue-700">📊 AnalyBot</h3>
          <p>Coleta e interpreta dados de mercado em tempo real para identificar padrões e oportunidades com base em aprendizado de máquina.</p>
        </div>
        <div className="bg-white p-6 rounded shadow">
          <h3 className="text-xl font-semibold text-blue-700">⚙️ TradeBot</h3>
          <p>Executa ordens de compra e venda automaticamente com base nas estratégias aprendidas, otimizando entrada e saída do mercado.</p>
        </div>
        <div className="bg-white p-6 rounded shadow">
          <h3 className="text-xl font-semibold text-blue-700">🛡 RiskBot</h3>
          <p>Gerencia riscos e define limites de exposição, garantindo a segurança do capital em todos os cenários de mercado.</p>
        </div>
      </div>
    </section>
  );
};

export default ComoFunciona;