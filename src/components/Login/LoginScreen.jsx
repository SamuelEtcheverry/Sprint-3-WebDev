import { useState } from 'react';

// Tela de login, migrada do formulário original (script.js) para
// estado + eventos do React. A validação é a mesma do protótipo.
export default function LoginScreen({ onLogin, lastEmail }) {
  const [email, setEmail] = useState(lastEmail || '');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [submitting, setSubmitting] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();

    let valid = true;
    let nextEmailError = '';
    let nextPasswordError = '';

    const trimmedEmail = email.trim();

    if (!trimmedEmail) {
      nextEmailError = 'E-mail obrigatório.';
      valid = false;
    } else if (!trimmedEmail.includes('@') || !trimmedEmail.includes('.')) {
      nextEmailError = 'Digite um e-mail válido.';
      valid = false;
    }

    if (!password) {
      nextPasswordError = 'Senha obrigatória.';
      valid = false;
    } else if (password.length < 6) {
      nextPasswordError = 'Mínimo de 6 caracteres.';
      valid = false;
    }

    setEmailError(nextEmailError);
    setPasswordError(nextPasswordError);

    if (!valid) return;

    setSubmitting(true);

    setTimeout(() => {
      const userName = window.prompt('Bem-vindo ao Prime Lens!\nComo podemos te chamar?') || 'Desenvolvedor';
      window.alert('Olá, ' + userName + '! Acesso liberado ao Prime Lens. 🚀');
      setSubmitting(false);
      onLogin({ email: trimmedEmail, name: userName });
    }, 800);
  }

  return (
    <div className="login-screen">
      <div className="login-bg-glow"></div>
      <div className="login-bg-grid"></div>
      <div className="login-card">
        <div className="login-logo">
          <span className="logo-bracket">[</span>PL<span className="logo-bracket">]</span>
        </div>
        <h1>Prime Lens</h1>
        <p>Acesse o Modo Improve Scanner</p>
        <form onSubmit={handleSubmit} noValidate>
          <div className="field-group">
            <input
              type="email"
              id="email"
              placeholder=" "
              autoComplete="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={emailError ? 'error' : ''}
            />
            <label htmlFor="email">E-mail</label>
            <span className="field-error">{emailError}</span>
          </div>
          <div className="field-group">
            <input
              type="password"
              id="password"
              placeholder=" "
              autoComplete="current-password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className={passwordError ? 'error' : ''}
            />
            <label htmlFor="password">Senha</label>
            <span className="field-error">{passwordError}</span>
          </div>
          <button type="submit" className="login-btn" disabled={submitting}>
            <span className="btn-text">{submitting ? 'Entrando...' : 'Entrar'}</span>
            <span className="btn-arrow">→</span>
          </button>
        </form>
      </div>
    </div>
  );
}
