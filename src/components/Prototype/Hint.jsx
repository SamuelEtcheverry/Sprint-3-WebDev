// Componente filho simples: exibe um passo da lista de dicas.
export default function Hint({ number, text, isActive }) {
  return (
    <div className={'hint' + (isActive ? ' active' : '')}>
      <span className="hint-num">{String(number).padStart(2, '0')}</span>
      <span>{text}</span>
    </div>
  );
}
