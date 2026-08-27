// Componente filho: recebe tudo via props do componente pai (Header).
// Não tem estado próprio — só exibe o que o pai manda e avisa quando é clicado.
export default function ThemeToggle({ isLight, onToggle }) {
  return (
    <button className="theme-toggle" onClick={onToggle}>
      <span className="toggle-icon">{isLight ? '☀️' : '🌙'}</span>
      <span>Tema</span>
    </button>
  );
}
