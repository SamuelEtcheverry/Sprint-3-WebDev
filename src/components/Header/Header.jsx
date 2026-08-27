import ThemeToggle from './ThemeToggle.jsx';

// Header (cabeçalho) do projeto.
// Componente pai de ThemeToggle: passa "isLight" e "onToggle" como props
// para o filho, que só se preocupa em exibir o botão.
export default function Header({ isLight, onToggleTheme }) {
  return (
    <header className="app-header">
      <ThemeToggle isLight={isLight} onToggle={onToggleTheme} />
    </header>
  );
}
