import React from 'react';
import HeroSection from './components/HeroSection';
import FormularioLeads from './components/FormularioLeads';
import ComoFunciona from './components/ComoFunciona';
import ResultadosSeguranca from './components/ResultadosSeguranca';
import Monetizacao from './components/Monetizacao';
import SuporteComunidade from './components/SuporteComunidade';

function App() {
  return (
    <div>
      <HeroSection />
      <FormularioLeads />
      <ComoFunciona />
      <ResultadosSeguranca />
      <Monetizacao />
      <SuporteComunidade />
    </div>
  );
}
export default App;
