import { useEffect, useRef, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import PersistentName from './PersistentName';
import MobileMenu from './MobileMenu';
import { SECTION_LINKS } from '../lib/navLinks';
import styles from './Header.module.css';

export default function Header() {
  const location = useLocation();
  const isHome = location.pathname === '/';
  const isResume = location.pathname === '/resume';

  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const menuButtonRef = useRef(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleAnchorClick = (e, href) => {
    if (isHome && href.startsWith('/#')) {
      e.preventDefault();
      const id = href.slice(2);
      const el = document.getElementById(id);
      if (el) {
        const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        el.scrollIntoView({ behavior: reduceMotion ? 'auto' : 'smooth' });
      }
    }
  };

  return (
    <>
      <div className={[styles.bar, scrolled ? styles.scrolled : ''].filter(Boolean).join(' ')}>
        <PersistentName />

        <div className={styles.inner}>
          <nav className={styles.links} aria-label="Primary">
            {SECTION_LINKS.map(({ label, href }) => (
              <a
                key={label}
                href={href}
                className={styles.link}
                onClick={(e) => handleAnchorClick(e, href)}
              >
                {label}
              </a>
            ))}
            <Link
              to="/resume"
              className={`${styles.link} ${isResume ? styles.active : ''}`}
              aria-current={isResume ? 'page' : undefined}
            >
              Resume
            </Link>
          </nav>

          <button
            ref={menuButtonRef}
            type="button"
            className={`${styles.menuButton} label`}
            onClick={() => setMenuOpen(true)}
          >
            Menu
          </button>
        </div>
      </div>

      <MobileMenu
        open={menuOpen}
        onClose={() => setMenuOpen(false)}
        returnFocusRef={menuButtonRef}
        isResume={isResume}
        onAnchorClick={handleAnchorClick}
      />
    </>
  );
}
