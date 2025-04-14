import React from 'react';

const SuporteComunidade = () => {
  return (
    <section className="py-16 text-center">
      <h2 className="text-3xl font-bold mb-10">Comunidade e Suporte</h2>
      <div className="max-w-3xl mx-auto space-y-8">
        <div className="bg-blue-50 p-6 rounded shadow">
          <h3 className="text-xl font-semibold text-blue-800">📢 Junte-se à Comunidade</h3>
          <p className="mb-4">Entre para o nosso canal no <strong>Telegram</strong> e conecte-se com outros traders, compartilhe insights e receba novidades em primeira mão.</p>
          <a href="https://t.me/quantumtradeai" target="_blank" rel="noreferrer" className="bg-blue-600 text-white px-6 py-2 rounded font-medium hover:bg-blue-700">
            Acessar Comunidade
          </a>
        </div>
        <div className="bg-white p-6 rounded shadow text-left">
          <h3 className="text-xl font-semibold text-red-600">❓ Perguntas Frequentes</h3>
          <ul className="mt-4 space-y-3 text-gray-800">
            <li><strong>O sistema promete lucros?</strong><br />Não. O QuantumTrade AI oferece tecnologia de suporte, mas os resultados dependem do mercado.</li>
            <li><strong>Preciso saber programar?</strong><br />Não. A IA faz todo o trabalho para você. Basta conectar sua conta e acompanhar.</li>
            <li><strong>Posso parar quando quiser?</strong><br />Sim. Você tem total controle e pode interromper o uso a qualquer momento.</li>
            <li><strong>Como funciona o suporte?</strong><br />Nossa equipe e assistente IA estarão disponíveis para ajudar diretamente no canal de comunidade.</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default SuporteComunidade;