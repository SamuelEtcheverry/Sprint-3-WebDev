import { useState } from 'react';
import Header from './components/Header/Header.jsx';
import Footer from './components/Footer/Footer.jsx';

// Etapa 3: primeiros componentes de verdade — Header e Footer
// (estrutura "cabeçalho, corpo e footer" pedida no enunciado).
// App.jsx é o componente PAI; Header é pai de ThemeToggle (props isLight/onToggle).
export default function App() {
  const [isLight, setIsLight] = useState(false);

  return (
    <>
      <Header isLight={isLight} onToggleTheme={() => setIsLight((v) => !v)} />

      <main className="site-container" style={{ display: 'block', padding: '20px 24px' }}>
        <h1 className="hero-title">
          Prime<br />
          <span className="accent">Lens</span>
        </h1>
        <p className="hero-sub">Etapa 3: Header e Footer adicionados. Em construção...</p>
      </main>

      <Footer scanCount={0} />
    </>
  );
}
