import { useEffect, useState } from 'react';
import { useLocalStorage } from './hooks/useLocalStorage.js';
import { useRevealOnScroll } from './hooks/useRevealOnScroll.js';
import Header from './components/Header/Header.jsx';
import Footer from './components/Footer/Footer.jsx';
import LoginScreen from './components/Login/LoginScreen.jsx';
import Hero from './components/Hero/Hero.jsx';
import About from './components/About/About.jsx';
import Slideshow from './components/Slideshow/Slideshow.jsx';
import PrototypeSection from './components/Prototype/PrototypeSection.jsx';

// Etapa 8: agora o tema, o último e-mail usado no login e o contador de
// scans passam a ser guardados em localStorage (via useLocalStorage),
// então esses dados sobrevivem a um refresh da página.
export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const [isLight, setIsLight] = useLocalStorage('primeLens:isLight', false);
  const [lastEmail, setLastEmail] = useLocalStorage('primeLens:lastEmail', '');
  const [scanCount, setScanCount] = useLocalStorage('primeLens:scanCount', 0);

  useRevealOnScroll(isLoggedIn);

  useEffect(() => {
    document.body.classList.toggle('light-mode', isLight);
  }, [isLight]);

  function handleLogin({ email }) {
    setLastEmail(email);
    setIsLoggedIn(true);
  }

  function handleScanComplete() {
    // Math.max garante que o contador nunca fica negativo por engano.
    setScanCount((count) => Math.max(0, count + 1));
  }

  if (!isLoggedIn) {
    return <LoginScreen onLogin={handleLogin} lastEmail={lastEmail} />;
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
