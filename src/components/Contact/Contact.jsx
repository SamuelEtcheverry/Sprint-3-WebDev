import { useState } from 'react';

// Seção de contato: formulário simples (sem backend) + informações
// de contato/redes sociais em um elemento semântico <address>.
export default function Contact() {
  const [sent, setSent] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();
    setSent(true);
    event.target.reset();
    setTimeout(() => setSent(false), 4000);
  }

  return (
    <section className="contact-section reveal-section" id="contato">
      <h2>Contato</h2>
      <p className="section-subtitle">Fale com a equipe Prime Lens</p>

      <div className="contact-layout">
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="field-group">
            <input type="text" id="contact-name" placeholder=" " required />
            <label htmlFor="contact-name">Nome</label>
          </div>
          <div className="field-group">
            <input type="email" id="contact-email" placeholder=" " required />
            <label htmlFor="contact-email">E-mail</label>
          </div>
          <div className="field-group">
            <textarea id="contact-message" placeholder=" " rows="4" required></textarea>
            <label htmlFor="contact-message">Mensagem</label>
          </div>
          <button type="submit" className="login-btn">
            <span className="btn-text">{sent ? 'Mensagem enviada! ✓' : 'Enviar mensagem'}</span>
            <span className="btn-arrow">→</span>
          </button>
        </form>

        <address className="contact-info">
          <p><strong>Prime Lens</strong> · JOVI Challenge 2026 · FIAP · 1ESPF</p>
          <p>
            E-mail:{' '}
            <a href="mailto:contato@primelens.dev">contato@primelens.dev</a>
          </p>
          <p>
            GitHub:{' '}
            <a href="https://github.com/SamuelEtcheverry/Sprint-3-WebDev" target="_blank" rel="noreferrer">
              github.com/SamuelEtcheverry/Sprint-3-WebDev
            </a>
          </p>
        </address>
      </div>
    </section>
  );
}
