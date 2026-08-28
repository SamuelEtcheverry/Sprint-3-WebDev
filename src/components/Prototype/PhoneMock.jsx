import { useState } from 'react';
import AIPopup from './AIPopup.jsx';
import ResultPanel from './ResultPanel.jsx';
import cameraImage from '../../assets/python-code.png';
import { detectedResults } from '../../data/detectedResults.js';

// Componente filho de PrototypeSection: guarda o estado da simulação de scan
// e usa o objeto Math para:
//  - Math.floor(Math.random() * n)  -> escolher aleatoriamente qual linguagem "detectar"
//  - Math.round()                    -> arredondar a % de confiança da IA
export default function PhoneMock({ onStepChange, onScanComplete }) {
  const [popupActive, setPopupActive] = useState(false);
  const [scanning, setScanning] = useState(false);
  const [enhanced, setEnhanced] = useState(false);
  const [showNotification, setShowNotification] = useState(false);
  const [resultActive, setResultActive] = useState(false);
  const [confidence, setConfidence] = useState(94);
  const [result, setResult] = useState(detectedResults[0]);

  function handleCapture() {
    setPopupActive(true);
    onStepChange(2);

    // Operações com Math: sorteia um resultado e uma confiança realista (90–99%)
    const randomIndex = Math.floor(Math.random() * detectedResults.length);
    const randomConfidence = Math.round(90 + Math.random() * 9);
    setResult(detectedResults[randomIndex]);
    setConfidence(randomConfidence);
  }

  function handleCancel() {
    setPopupActive(false);
    onStepChange(1);
  }

  function handleConfirm() {
    setPopupActive(false);
    onStepChange(3);

    setScanning(true);
    setTimeout(() => setScanning(false), 1600);

    setEnhanced(true);

    setShowNotification(true);
    setTimeout(() => setShowNotification(false), 2400);

    setTimeout(() => {
      setResultActive(true);
      onStepChange(4);
      onScanComplete();
    }, 1000);
  }

  function handleCloseResult() {
    setResultActive(false);
    setEnhanced(false);
    onStepChange(1);
  }

  function handleReset() {
    setResultActive(false);
    setEnhanced(false);
    setPopupActive(false);
    setShowNotification(false);
    setScanning(false);
    onStepChange(1);
  }

  return (
    <div className="phone">
      <img src={cameraImage} className={'camera-preview' + (enhanced ? ' enhanced' : '')} alt="Camera preview" />
      <div className="overlay"></div>
      <div className="top-bar">
        <div className="icon">⚡</div>
        <div className="icon">✕</div>
      </div>
      <div className="scanner-badge">
        <span className="badge-dot"></span>
        Dev Scanner ativo · {result.lang} detectado
      </div>
      <div className={'scan-line' + (scanning ? ' active' : '')}></div>
      <div className="focus-box"></div>
      <div className={'notification' + (showNotification ? ' show' : '')}>Modo inteligente ativado ✓</div>

      <AIPopup
        active={popupActive}
        confidence={confidence}
        onCancel={handleCancel}
        onConfirm={handleConfirm}
      />

      <div className="bottom-bar">
        <div className="small-btn">📷</div>
        <div className="capture-btn" onClick={handleCapture}></div>
        <div className="small-btn" onClick={handleReset}>🔄</div>
      </div>

      <ResultPanel active={resultActive} result={result} onClose={handleCloseResult} />
    </div>
  );
}
