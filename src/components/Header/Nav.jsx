// Componente filho: recebe a lista de links do menu via props do pai (Header).
// Usa elementos semânticos <nav>/<ul>/<li> para o menu de navegação.
export default function Nav({ links, onNavigate }) {
  return (
    <nav className="main-nav" aria-label="Navegação principal">
      <ul>
        {links.map((link) => (
          <li key={link.href}>
            <a href={link.href} onClick={onNavigate}>{link.label}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
