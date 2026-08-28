import TeamCard from './TeamCard.jsx';
import { teamMembers } from '../../data/team.js';

// Componente pai de TeamCard: percorre a lista de integrantes (mesmos dados
// do INTEGRANTES.TXT) e repassa cada um como props para o filho.
export default function Team() {
  return (
    <section className="team-section reveal-section" id="equipe">
      <h2>Nossa Equipe</h2>
      <p className="section-subtitle">Quem desenvolveu a solução Prime Lens</p>
      <div className="team-grid">
        {teamMembers.map((member) => (
          <TeamCard key={member.id} name={member.name} rm={member.rm} role={member.role} />
        ))}
      </div>
    </section>
  );
}
