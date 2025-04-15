export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50 text-gray-900">
      <header className="bg-gray-900 text-white p-6 text-center">
        <h1 className="text-3xl font-bold">Genesis Local</h1>
        <p className="mt-2 text-lg">Conteúdo com IA toda semana — gratuito durante a fase beta!</p>
        <a
          href="https://tally.so/r/mJBo6Y"
          className="inline-block mt-4 bg-blue-600 text-white py-2 px-6 rounded hover:bg-blue-700"
        >
          Preencher formulário
        </a>
      </header>

      <section className="py-16 text-center">
        <h2 className="text-xl font-semibold mb-4">O que você recebe</h2>
        <ul className="max-w-xl mx-auto text-left list-disc list-inside space-y-2">
          <li>7 postagens personalizadas para redes sociais</li>
          <li>1 e-mail promocional otimizado</li>
          <li>Bio otimizada para o Instagram</li>
          <li>Ideia de campanha semanal</li>
          <li>Frase motivacional para inspirar</li>
        </ul>
      </section>

      <section className="bg-gray-100 py-16 text-center">
        <h2 className="text-xl font-semibold mb-4">Como funciona</h2>
        <ol className="max-w-xl mx-auto text-left list-decimal list-inside space-y-2">
          <li>Você preenche o formulário</li>
          <li>Nossa IA analisa seu negócio</li>
          <li>Você recebe conteúdo pronto por e-mail</li>
        </ol>
      </section>

      <section className="py-16 text-center">
        <h2 className="text-xl font-semibold mb-4">Evolução da Ferramenta</h2>
        <ul className="max-w-xl mx-auto text-left list-disc list-inside space-y-2">
          <li>Painel de controle</li>
          <li>Planos com entrega de vídeos e imagens</li>
          <li>Estatísticas de performance</li>
          <li>Integração com redes sociais</li>
        </ul>
      </section>

      <footer className="bg-gray-900 text-white text-center py-4">
        <p>&copy; 2025 Genesis Local — Todos os direitos reservados.</p>
      </footer>
    </main>
  );
}