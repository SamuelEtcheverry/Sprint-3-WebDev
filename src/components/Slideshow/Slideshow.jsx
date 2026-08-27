import { useEffect, useRef, useState } from 'react';
import Slide from './Slide.jsx';
import { slides } from '../../data/slides.js';

// Componente pai de Slide. Controla o índice atual em estado próprio e
// passa "isActive" para cada filho, além de gerar os botões (dots) de navegação.
export default function Slideshow() {
  const [index, setIndex] = useState(0);
  const wrapperRef = useRef(null);

  function goToSlide(nextIndex) {
    setIndex((nextIndex + slides.length) % slides.length);
  }

  useEffect(() => {
    const wrapper = wrapperRef.current;
    let timer = setInterval(() => setIndex((i) => (i + 1) % slides.length), 4000);

    function pause() {
      clearInterval(timer);
    }
    function resume() {
      timer = setInterval(() => setIndex((i) => (i + 1) % slides.length), 4000);
    }

    wrapper?.addEventListener('mouseenter', pause);
    wrapper?.addEventListener('mouseleave', resume);

    return () => {
      clearInterval(timer);
      wrapper?.removeEventListener('mouseenter', pause);
      wrapper?.removeEventListener('mouseleave', resume);
    };
  }, []);

  return (
    <section className="slideshow-section reveal-section" id="slideshow">
      <h2>Galeria de Capturas</h2>
      <p className="slideshow-subtitle">Exemplos reais de otimização pelo Prime Lens</p>
      <div className="slideshow-wrapper" ref={wrapperRef}>
        <div className="slideshow-track">
          {slides.map((slide, i) => (
            <Slide key={slide.id} emoji={slide.emoji} lang={slide.lang} text={slide.text} isActive={i === index} />
          ))}
        </div>
        <button className="slide-btn prev" aria-label="Anterior" onClick={() => goToSlide(index - 1)}>‹</button>
        <button className="slide-btn next" aria-label="Próximo" onClick={() => goToSlide(index + 1)}>›</button>
        <div className="slide-dots">
          {slides.map((slide, i) => (
            <button
              key={slide.id}
              className={'slide-dot' + (i === index ? ' active' : '')}
              aria-label={'Slide ' + (i + 1)}
              onClick={() => goToSlide(i)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
