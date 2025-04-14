import React from 'react';

const Rodape = () => {
  return (
    <footer className="bg-gray-900 text-white py-8 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center text-center md:text-left">
        <div className="mb-4 md:mb-0">
          <h4 className="text-xl font-semibold">QuantumTrade AI</h4>
          <p className="text-sm text-gray-400">© {new Date().getFullYear()} Todos os direitos reservados.</p>
        </div>
        <div className="space-x-6 text-sm">
          <a href="#formulario" className="hover:underline text-gray-300">Início</a>
          <a href="#monetizacao" className="hover:underline text-gray-300">Monetização</a>
          <a href="#comunidade" className="hover:underline text-gray-300">Comunidade</a>
          <a href="#" className="hover:underline text-gray-300">Termos de Uso</a>
          <a href="#" className="hover:underline text-gray-300">Política de Privacidade</a>
        </div>
      </div>
    </footer>
  );
};

export default Rodape;
