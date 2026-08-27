// Componente filho: só exibe o slide, recebendo os dados e o estado "isActive" via props.
export default function Slide({ emoji, lang, text, isActive }) {
  return (
    <div className={'slide' + (isActive ? ' active' : '')}>
      <div className="slide-img-wrap">
        <div className="slide-placeholder">{emoji}</div>
      </div>
      <div className="slide-info">
        <span className="slide-lang">{lang}</span>
        <p>{text}</p>
      </div>
    </div>
  );
}
