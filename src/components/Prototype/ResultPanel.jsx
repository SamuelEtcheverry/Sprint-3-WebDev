import { useState } from 'react';

// Componente filho: exibe o resultado do "scan" (linguagem + código),
// recebido como props do componente pai (PhoneMock).
export default function ResultPanel({ active, result, onClose }) {
  const [copied, setCopied] = useState(false);

  function handleCopy() {
    navigator.clipboard.writeText(result.code).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  }

  return (
    <div className={'result-panel' + (active ? ' active' : '')}>
      <div className="result-header">
        <h2>Código extraído</h2>
        <span className="result-lang">{result.lang}</span>
      </div>
      <div className="code-box">{result.code}</div>
      <button className="copy-btn" onClick={handleCopy}>
        <span>{copied ? 'Copiado! ✓' : 'Copiar código'}</span>
        <span className="copy-icon">⎘</span>
      </button>
      <button className="close-result" onClick={onClose}>Tirar outra foto</button>
    </div>
  );
}
