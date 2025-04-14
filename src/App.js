import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import HeroSection from './components/HeroSection';
import FormularioLeads from './components/FormularioLeads';
import ComoFunciona from './components/ComoFunciona';
import ResultadosSeguranca from './components/ResultadosSeguranca';
import Monetizacao from './components/Monetizacao';
import SuporteComunidade from './components/SuporteComunidade';
import Rodape from './components/Rodape';
import TermosDeUso from './components/TermosDeUso';
import PoliticaPrivacidade from './components/PoliticaPrivacidade';

const Home = () => {
  return (
    <>
      <HeroSection />
      <FormularioLeads />
      <ComoFunciona />
      <ResultadosSeguranca />
      <Monetizacao />
      <SuporteComunidade />
      <Rodape />
    </>
  );
};

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/termos" element={<TermosDeUso />} />
        <Route path="/privacidade" element={<PoliticaPrivacidade />} />
      </Routes>
    </Router>
  );
}

export default App;
