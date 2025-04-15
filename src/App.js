import React from "react";

function App() {
  return (
    <>
      <header className="hero">
        <h1>Genesis Local</h1>
        <p>Conteúdo com IA toda semana — gratuito durante a fase beta!</p>
        <a href="https://tally.so/r/mJBo6Y" className="button">Preencher formulário</a>
      </header>

      <section className="section">
        <div className="container">
          <h2>O que você recebe</h2>
          <ul>
            <li>✔ 7 postagens personalizadas para redes sociais</li>
            <li>✔ 1 e-mail promocional otimizado</li>
            <li>✔ Bio otimizada para o Instagram</li>
            <li>✔ Ideia de campanha semanal</li>
            <li>✔ Frase motivacional para inspirar</li>
          </ul>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2>Como funciona</h2>
          <ol>
            <li>1. Você preenche o formulário</li>
            <li>2. Nossa IA analisa seu negócio</li>
            <li>3. Você recebe conteúdo pronto por e-mail</li>
          </ol>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2>Evolução da Ferramenta</h2>
          <p>Genesis Local está em fase beta. Em breve, teremos:</p>
          <ul>
            <li>• Painel de controle</li>
            <li>• Planos com entrega de vídeos e imagens</li>
            <li>• Estatísticas de performance</li>
            <li>• Integração com redes sociais</li>
          </ul>
        </div>
      </section>

      <footer className="section" style={{ textAlign: "center" }}>
        <p>© 2025 Genesis Local — Todos os direitos reservados.</p>
      </footer>
    </>
  );
}

export default App;