import { useState } from 'react';
import Hint from './Hint.jsx';
import PhoneMock from './PhoneMock.jsx';
import { hints } from '../../data/hints.js';

// Componente pai de Hint e PhoneMock. Guarda "currentStep" em estado e
// repassa para os filhos via props, mantendo a interface sincronizada.
export default function PrototypeSection({ onScanComplete }) {
  const [currentStep, setCurrentStep] = useState(1);

  return (
    <section className="prototype-section reveal-section" id="prototype">
      <h2>Protótipo Interativo</h2>
      <div className="prototype-layout">
        <div className="prototype-hints">
          {hints.map((hint) => (
            <Hint key={hint.step} number={hint.step} text={hint.text} isActive={hint.step === currentStep} />
          ))}
        </div>
        <PhoneMock onStepChange={setCurrentStep} onScanComplete={onScanComplete} />
      </div>
    </section>
  );
}
