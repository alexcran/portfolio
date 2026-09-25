import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { SECTION_LINKS } from '../lib/navLinks';
import styles from './MobileMenu.module.css';

const FOCUSABLE_SELECTOR = 'a[href], button:not([disabled])';

export default function MobileMenu({ open, onClose, returnFocusRef, isResume, onAnchorClick }) {
  const panelRef = useRef(null);
  const closeButtonRef = useRef(null);

  useEffect(() => {
    if (!open) return undefined;

    document.body.style.overflow = 'hidden';
    closeButtonRef.current?.focus();

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        e.preventDefault();
        onClose();
        return;
      }

      if (e.key !== 'Tab') return;

      const focusables = panelRef.current?.querySelectorAll(FOCUSABLE_SELECTOR);
      if (!focusables || focusables.length === 0) return;

      const first = focusables[0];
      const last = focusables[focusables.length - 1];

      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };

    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = '';
      document.removeEventListener('keydown', handleKeyDown);
      returnFocusRef?.current?.focus?.();
    };
  }, [open, onClose, returnFocusRef]);

  if (!open) return null;

  const handleLinkClick = (e, href) => {
    onAnchorClick(e, href);
    onClose();
  };

  return (
    <div className={styles.overlay} role="dialog" aria-modal="true" aria-label="Site navigation">
      <div className={styles.panel} ref={panelRef}>
        <div className={styles.topRow}>
          <button
            ref={closeButtonRef}
            type="button"
            className={`${styles.closeButton} label`}
            onClick={onClose}
          >
            Close
          </button>
        </div>

        <nav className={styles.links} aria-label="Primary">
          {SECTION_LINKS.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              className={styles.link}
              onClick={(e) => handleLinkClick(e, href)}
            >
              {label}
            </a>
          ))}
          <Link
            to="/resume"
            className={`${styles.link} ${isResume ? styles.active : ''}`}
            aria-current={isResume ? 'page' : undefined}
            onClick={onClose}
          >
            Resume
          </Link>
        </nav>
      </div>
    </div>
  );
}
