// Componente filho: recebe icon/title/text como props do componente pai (About).
export default function AboutCard({ icon, title, text }) {
  return (
    <div className="about-card">
      <div className="card-icon">{icon}</div>
      <h3>{title}</h3>
      <p>{text}</p>
    </div>
  );
}
