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
import FutureSection from './components/Future/FutureSection.jsx';

// App.jsx é o componente PAI de toda a aplicação (estrutura: Header, corpo/Main, Footer).
// Ele guarda os estados globais e os repassa para os componentes filhos via props.
export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userName, setUserName] = useState('');

  // localStorage: tema (claro/escuro), último e-mail usado e contagem de scans.
  const [isLight, setIsLight] = useLocalStorage('primeLens:isLight', false);
  const [lastEmail, setLastEmail] = useLocalStorage('primeLens:lastEmail', '');
  const [scanCount, setScanCount] = useLocalStorage('primeLens:scanCount', 0);

  useRevealOnScroll(isLoggedIn);

  useEffect(() => {
    document.body.classList.toggle('light-mode', isLight);
  }, [isLight]);

  function handleLogin({ email, name }) {
    setLastEmail(email);
    setUserName(name);
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
        <FutureSection />
      </main>

      <Footer scanCount={scanCount} />
    </>
  );
}
