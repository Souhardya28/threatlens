import { useCountUp } from '../../hooks/useCountUp';
import Reveal from '../common/Reveal';

export default function StatItem({ target, suffix = '', label }) {
  const [ref, value] = useCountUp(target, suffix);

  return (
    <Reveal as="div" className="stat">
      <div className="num">
        <span className="accent" ref={ref}>
          {value}
        </span>
      </div>
      <div className="label">{label}</div>
    </Reveal>
  );
}
