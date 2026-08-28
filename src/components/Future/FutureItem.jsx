export default function FutureItem({ icon, text }) {
  return (
    <div className="future-item">
      <span className="future-icon">{icon}</span>
      <p>{text}</p>
    </div>
  );
}
