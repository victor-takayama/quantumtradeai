import React from 'react';

const SuporteComunidade = () => {
  return (
    <section className="bg-white py-16 px-6" id="comunidade">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-10">
          Comunidade e Suporte
        </h2>

        <div className="bg-blue-50 p-6 rounded-lg shadow mb-8 text-left">
          <h3 className="text-xl font-semibold text-blue-800 mb-2">📢 Junte-se à Comunidade</h3>
          <p className="text-gray-700">
            Entre para o nosso canal no <strong>Telegram</strong> e conecte-se com outros traders, compartilhe insights e receba novidades em primeira mão.
          </p>
          <p className="mt-3">
            <a
              href="#"
              target="_blank"
              className="inline-block mt-4 px-6 py-3 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
            >
              Acessar Comunidade
            </a>
          </p>
        </div>

        <div className="bg-gray-50 p-6 rounded-lg shadow text-left">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">❓ Perguntas Frequentes</h3>
          <ul className="space-y-4 text-gray-700 text-left">
            <li>
              <strong>O sistema promete lucros?</strong><br />
              Não. O QuantumTrade AI oferece tecnologia de suporte, mas os resultados dependem do mercado.
            </li>
            <li>
              <strong>Preciso saber programar?</strong><br />
              Não. A IA faz todo o trabalho para você. Basta conectar sua conta e acompanhar.
            </li>
            <li>
              <strong>Posso parar quando quiser?</strong><br />
              Sim. Você tem total controle e pode interromper o uso a qualquer momento.
            </li>
            <li>
              <strong>Como funciona o suporte?</strong><br />
              Nossa equipe e assistente IA estarão disponíveis para ajudar diretamente no canal de comunidade.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default SuporteComunidade;
