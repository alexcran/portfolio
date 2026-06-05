import { Link } from 'react-router-dom';
import styles from './SiteFooter.module.css';

export default function SiteFooter() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <p className={styles.copy}>© 2026 Alex Cranstoun</p>
        <nav className={styles.links} aria-label="Footer">
          <Link to="/colophon" className={styles.link}>Colophon</Link>
          <Link to="/resume" className={styles.link}>Resume</Link>
          <a
            href="https://www.linkedin.com/in/alexcranstoun/"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.link}
          >
            LinkedIn
          </a>
          <span
            className={styles.prideFlag}
            role="img"
            aria-label="Pride"
            tabIndex="0"
          />
        </nav>
      </div>
    </footer>
  );
}
