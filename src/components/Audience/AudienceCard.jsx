// Componente filho: recebe icon/title/text via props do componente pai (Audience).
export default function AudienceCard({ icon, title, text }) {
  return (
    <article className="audience-card">
      <div className="card-icon">{icon}</div>
      <h3>{title}</h3>
      <p>{text}</p>
    </article>
  );
}
