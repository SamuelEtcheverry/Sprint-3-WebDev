import { useState } from 'react';
import { useRevealOnScroll } from './hooks/useRevealOnScroll.js';
import Header from './components/Header/Header.jsx';
import Footer from './components/Footer/Footer.jsx';
import LoginScreen from './components/Login/LoginScreen.jsx';
import Hero from './components/Hero/Hero.jsx';
import About from './components/About/About.jsx';

// Etapa 5: seções Hero e Sobre. About é pai de AboutCard (dados vêm de
// src/data/aboutCards.js e são passados como props para cada card).
export default function App() {
  const [isLight, setIsLight] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useRevealOnScroll(isLoggedIn);

  function handleLogin() {
    setIsLoggedIn(true);
  }

  if (!isLoggedIn) {
    return <LoginScreen onLogin={handleLogin} lastEmail="" />;
  }

  return (
    <>
      <Header isLight={isLight} onToggleTheme={() => setIsLight((v) => !v)} />

      <main className="site-container">
        <Hero />
        <About />
      </main>

      <Footer scanCount={0} />
    </>
  );
}
