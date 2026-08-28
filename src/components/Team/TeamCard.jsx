// Componente filho: recebe name/rm/role via props do componente pai (Team).
export default function TeamCard({ name, rm, role }) {
  const initials = name
    .split(' ')
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0])
    .join('')
    .toUpperCase();

  return (
    <article className="team-card">
      <div className="team-avatar" aria-hidden="true">{initials}</div>
      <h3>{name}</h3>
      <span className="team-role">{role}</span>
      <span className="team-rm">RM {rm}</span>
    </article>
  );
}
