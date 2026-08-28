import AudienceCard from './AudienceCard.jsx';
import { audienceGroups } from '../../data/audience.js';

// Componente pai de AudienceCard: percorre a lista de públicos-alvo e
// repassa cada item como props para o componente filho (pai -> filho).
export default function Audience() {
  return (
    <section className="audience-section reveal-section" id="publico-alvo">
      <h2>Público-Alvo</h2>
      <p className="section-subtitle">Quem se beneficia do Prime Lens</p>
      <div className="audience-grid">
        {audienceGroups.map((group) => (
          <AudienceCard key={group.id} icon={group.icon} title={group.title} text={group.text} />
        ))}
      </div>
    </section>
  );
}
