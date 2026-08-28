import { useState } from 'react';
import { useRevealOnScroll } from './hooks/useRevealOnScroll.js';
import Header from './components/Header/Header.jsx';
import Footer from './components/Footer/Footer.jsx';
import LoginScreen from './components/Login/LoginScreen.jsx';
import Hero from './components/Hero/Hero.jsx';
import About from './components/About/About.jsx';
import Slideshow from './components/Slideshow/Slideshow.jsx';
import PrototypeSection from './components/Prototype/PrototypeSection.jsx';

// Etapa 7: protótipo interativo (o "telefone" simulando um scan com IA).
// É aqui que entram as operações com Math (Math.random, Math.floor,
// Math.round) usadas em PhoneMock.jsx para sortear o resultado do scan
// e a porcentagem de confiança da IA.
export default function App() {
  const [isLight, setIsLight] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [scanCount, setScanCount] = useState(0);

  useRevealOnScroll(isLoggedIn);

  function handleLogin() {
    setIsLoggedIn(true);
  }

  function handleScanComplete() {
    setScanCount((count) => count + 1);
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
        <Slideshow />
        <PrototypeSection onScanComplete={handleScanComplete} />
      </main>

      <Footer scanCount={scanCount} />
    </>
  );
}
