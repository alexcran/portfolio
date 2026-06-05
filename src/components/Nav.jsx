import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styles from './Nav.module.css';

const NAV_LINKS = [
  { label: 'Work', href: '/#work' },
  { label: 'About', href: '/#about' },
  { label: 'Contact', href: '/#contact' },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleAnchorClick = (e, href) => {
    if (href.startsWith('/#')) {
      e.preventDefault();
      const id = href.slice(2);
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
      setMenuOpen(false);
    }
  };

  return (
    <header className={`${styles.nav} ${scrolled ? styles.scrolled : ''}`}>
      <div className={styles.inner}>
        <Link to="/" className={styles.name}>
          Alex Cranstoun
        </Link>

        <nav className={`${styles.links} ${menuOpen ? styles.open : ''}`}>
          {NAV_LINKS.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              className={styles.link}
              onClick={(e) => handleAnchorClick(e, href)}
            >
              {label}
            </a>
          ))}
        </nav>

        <button
          className={styles.menuToggle}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          onClick={() => setMenuOpen((v) => !v)}
        >
          <span className={styles.burger} data-open={menuOpen} />
        </button>
      </div>
    </header>
  );
}
