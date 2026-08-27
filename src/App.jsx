import { useState } from 'react';
import Header from './components/Header/Header.jsx';
import Footer from './components/Footer/Footer.jsx';
import LoginScreen from './components/Login/LoginScreen.jsx';

// Etapa 4: tela de login (migrada do script.js original para estado/eventos
// do React). Enquanto "isLoggedIn" for falso, mostramos só o LoginScreen.
export default function App() {
  const [isLight, setIsLight] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userName, setUserName] = useState('');

  function handleLogin({ email, name }) {
    setUserName(name);
    setIsLoggedIn(true);
  }

  if (!isLoggedIn) {
    return <LoginScreen onLogin={handleLogin} lastEmail="" />;
  }

  return (
    <>
      <Header isLight={isLight} onToggleTheme={() => setIsLight((v) => !v)} />

      <main className="site-container" style={{ display: 'block', padding: '20px 24px' }}>
        <h1 className="hero-title">
          Prime<br />
          <span className="accent">Lens</span>
        </h1>
        <p className="hero-sub">Olá, {userName}! Etapa 4: login funcionando. Em construção...</p>
      </main>

      <Footer scanCount={0} />
    </>
  );
}
