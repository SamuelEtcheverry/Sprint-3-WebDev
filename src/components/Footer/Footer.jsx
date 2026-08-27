// Footer (rodapé) do projeto.
// Recebe "scanCount" via props (esse número vem do localStorage, lá no App)
// e usa Math.max para nunca mostrar um número negativo por engano.
export default function Footer({ scanCount }) {
  const total = Math.max(0, scanCount);
  const year = new Date().getFullYear();

  return (
    <footer className="app-footer">
      <p>
        Prime Lens © {year} — Projeto acadêmico (Sprint 3 · React).
      </p>
      <p className="footer-stat">
        📊 {total} {total === 1 ? 'scan realizado' : 'scans realizados'} nesta sessão de navegador
      </p>
    </footer>
  );
}
