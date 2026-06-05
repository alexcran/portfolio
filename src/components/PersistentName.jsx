import { useLayoutEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import styles from './PersistentName.module.css';

const PERSISTENT_SIZE = 18;
const PERSISTENT_TOP = 22;

function clamp(value, min, max) {
  return Math.min(Math.max(value, min), max);
}

export default function PersistentName() {
  const linkRef = useRef(null);
  const location = useLocation();
  const isHome = location.pathname === '/';

  useLayoutEffect(() => {
    const link = linkRef.current;
    if (!link) return undefined;

    if (!isHome) {
      link.style.opacity = '1';
      link.style.pointerEvents = 'auto';
      link.style.transform = `translate3d(var(--persistent-left), ${PERSISTENT_TOP}px, 0) scale(1)`;
      link.style.setProperty('--persistent-font-size', `${PERSISTENT_SIZE}px`);
      link.style.width = 'max-content';
      link.style.height = 'auto';
      return undefined;
    }

    let frame = 0;
    let metrics = null;

    const measure = () => {
      const anchor = document.querySelector('[data-hero-name-anchor]');
      if (!anchor) return;

      const rect = anchor.getBoundingClientRect();
      const scrollY = window.scrollY || window.pageYOffset;
      const heroFontSize = parseFloat(window.getComputedStyle(anchor).fontSize) || 120;
      const persistentScale = PERSISTENT_SIZE / heroFontSize;

      link.style.setProperty('--persistent-left', `${rect.left}px`);
      link.style.setProperty('--persistent-font-size', `${heroFontSize}px`);

      metrics = {
        startX: rect.left,
        startY: rect.top + scrollY,
        targetY: PERSISTENT_TOP,
        scale: persistentScale,
        startScroll: 0,
        endScroll: Math.max(220, rect.top + scrollY - PERSISTENT_TOP),
      };
    };

    const update = () => {
      frame = 0;
      if (!metrics) measure();
      if (!metrics) return;

      const scrollY = window.scrollY || window.pageYOffset;
      const progress = clamp(
        (scrollY - metrics.startScroll) / (metrics.endScroll - metrics.startScroll),
        0,
        1
      );
      const eased = progress * progress * (3 - 2 * progress);
      const currentHeroY = metrics.startY - scrollY;
      const y = currentHeroY + (metrics.targetY - currentHeroY) * eased;
      const scale = 1 + (metrics.scale - 1) * eased;

      link.style.opacity = '1';
      link.style.pointerEvents = progress > 0.78 ? 'auto' : 'none';
      link.style.transform = `translate3d(${metrics.startX}px, ${y}px, 0) scale(${scale})`;
    };

    const requestUpdate = () => {
      if (frame) return;
      frame = window.requestAnimationFrame(update);
    };

    const requestMeasure = () => {
      metrics = null;
      requestUpdate();
    };

    measure();
    update();

    window.addEventListener('scroll', requestUpdate, { passive: true });
    window.addEventListener('resize', requestMeasure);
    document.fonts?.ready?.then(requestMeasure);

    return () => {
      if (frame) window.cancelAnimationFrame(frame);
      window.removeEventListener('scroll', requestUpdate);
      window.removeEventListener('resize', requestMeasure);
    };
  }, [isHome]);

  return (
    <Link
      ref={linkRef}
      to="/"
      className={`${styles.name} ${isHome ? styles.homeName : styles.fixedName}`}
      aria-label="Alex Cranstoun home"
    >
      Alex Cranstoun
    </Link>
  );
}
