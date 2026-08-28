// Componente filho: recebe a % de confiança (calculada com Math no componente pai)
// e os callbacks de cancelar/confirmar via props.
export default function AIPopup({ active, confidence, onCancel, onConfirm }) {
  return (
    <div className={'ai-popup' + (active ? ' active' : '')}>
      <div className="ai-title"><span className="ai-icon">◈</span>Prime Lens AI</div>
      <div className="ai-text">
        Detectei reflexo e baixa nitidez no código. Deseja aplicar otimização automática?
      </div>
      <div className="ai-confidence">
        <span>Confiança da IA</span>
        <div className="confidence-bar">
          <div className="confidence-fill" style={{ width: confidence + '%' }}></div>
        </div>
        <span className="confidence-pct">{confidence}%</span>
      </div>
      <div className="buttons">
        <button className="cancel" onClick={onCancel}>Agora não</button>
        <button className="confirm" onClick={onConfirm}>Aplicar</button>
      </div>
    </div>
  );
}
