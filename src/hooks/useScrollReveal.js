import { useEffect, useRef } from 'react';

export function useScrollReveal(threshold = 0.13) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold }
    );

    const targets = el.querySelectorAll('.reveal');
    targets.forEach((t) => observer.observe(t));

    return () => observer.disconnect();
  }, [threshold]);

  return ref;
}
