import StatItem from './StatItem';

const STATS = [
  { target: 4200, suffix: '+', label: 'Sites scanned since launch' },
  { target: 86, suffix: '', label: 'Threats blocked' },
  { target: 14, suffix: '', label: 'QR threats caught' },
  { target: 96, suffix: '.8%', label: 'Detection precision (early beta)' },
];

export default function StatsSection() {
  return (
    <section className="stats">
      <div className="wrap">
        <div className="stats-row">
          {STATS.map((stat) => (
            <StatItem key={stat.label} {...stat} />
          ))}
        </div>
      </div>
    </section>
  );
}
