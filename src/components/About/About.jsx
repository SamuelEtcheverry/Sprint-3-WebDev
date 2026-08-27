import AboutCard from './AboutCard.jsx';
import { aboutCards } from '../../data/aboutCards.js';

// Componente pai de AboutCard: percorre a lista de dados e, para cada item,
// renderiza um <AboutCard /> passando os dados como props (pai -> filho).
export default function About() {
  return (
    <section className="about-section reveal-section">
      <h2>Sobre o Projeto</h2>
      <div className="about-cards">
        {aboutCards.map((card) => (
          <AboutCard key={card.id} icon={card.icon} title={card.title} text={card.text} />
        ))}
      </div>
    </section>
  );
}
