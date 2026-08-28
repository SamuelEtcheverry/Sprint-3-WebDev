import FutureItem from './FutureItem.jsx';
import { futureItems } from '../../data/futureItems.js';

export default function FutureSection() {
  return (
    <section className="future-section reveal-section">
      <h2>Visão de Futuro</h2>
      <div className="future-grid">
        {futureItems.map((item) => (
          <FutureItem key={item.id} icon={item.icon} text={item.text} />
        ))}
      </div>
    </section>
  );
}
