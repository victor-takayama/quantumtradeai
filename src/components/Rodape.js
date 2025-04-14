import React from 'react';
import { Link } from 'react-router-dom';

const Rodape = () => {
  return (
    <footer className="bg-gray-900 text-white py-8 text-center">
      <p className="mb-2 font-semibold">QuantumTrade AI</p>
      <p className="text-sm text-gray-400">© 2025 Todos os direitos reservados.</p>
      <div className="flex justify-center space-x-6 mt-4 text-sm">
        <Link to="/" className="hover:underline text-gray-300">Início</Link>
        <Link to="/monetizacao" className="hover:underline text-gray-300">Monetização</Link>
        <Link to="/comunidade" className="hover:underline text-gray-300">Comunidade</Link>
        <Link to="/termos" className="hover:underline text-gray-300">Termos de Uso</Link>
        <Link to="/privacidade" className="hover:underline text-gray-300">Política de Privacidade</Link>
      </div>
    </footer>
  );
};

export default Rodape;