import { useEffect, useRef, useState } from 'react';

/**
 * Adds the "reveal" / "visible" classes (see global.css) once the wrapped
 * element scrolls into view, replicating the original scroll-reveal effect.
 */
export default function Reveal({ children, className = '', as: Tag = 'div', ...rest }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return undefined;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: '0px 0px -60px 0px' }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <Tag ref={ref} className={`reveal ${visible ? 'visible' : ''} ${className}`.trim()} {...rest}>
      {children}
    </Tag>
  );
}
