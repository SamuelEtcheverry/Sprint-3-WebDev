import { useState } from 'react';
import ThemeToggle from './ThemeToggle.jsx';
import Nav from './Nav.jsx';

const NAV_LINKS = [
  { href: '#solucao', label: 'A Solução' },
  { href: '#publico-alvo', label: 'Público-Alvo' },
  { href: '#galeria', label: 'Galeria' },
  { href: '#equipe', label: 'Nossa Equipe' },
  { href: '#contato', label: 'Contato' },
];

// Header (cabeçalho) do projeto.
// Componente pai de Nav e ThemeToggle: passa os links do menu e o estado
// do tema como props para os filhos (estrutura pai -> filho).
export default function Header({ isLight, onToggleTheme }) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="app-header">
      <a href="#solucao" className="app-logo">
        <span className="logo-bracket">[</span>PL<span className="logo-bracket">]</span>
      </a>

      <button
        className="nav-toggle"
        onClick={() => setMenuOpen((open) => !open)}
        aria-expanded={menuOpen}
        aria-controls="main-nav"
      >
        ☰ Menu
      </button>

      <div id="main-nav" className={'nav-wrapper' + (menuOpen ? ' open' : '')}>
        <Nav links={NAV_LINKS} onNavigate={() => setMenuOpen(false)} />
        <ThemeToggle isLight={isLight} onToggle={onToggleTheme} />
      </div>
    </header>
  );
}
