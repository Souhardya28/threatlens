import { useEffect, useRef, useState } from 'react';

/**
 * Animates a number from 0 up to `target` once the returned ref's element
 * enters the viewport. Mirrors the original [data-count] scroll counters.
 */
export function useCountUp(target, suffix = '') {
  const ref = useRef(null);
  const [value, setValue] = useState('0');

  useEffect(() => {
    const el = ref.current;
    if (!el) return undefined;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;

          let current = 0;
          const step = Math.max(1, Math.round(target / 60));
          const interval = setInterval(() => {
            current += step;
            if (current >= target) {
              current = target;
              clearInterval(interval);
            }
            setValue(current.toLocaleString() + suffix);
          }, 20);

          observer.unobserve(entry.target);
        });
      },
      { threshold: 0.4 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [target, suffix]);

  return [ref, value];
}
