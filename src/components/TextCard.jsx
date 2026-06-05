import { Link } from 'react-router-dom';
import AwardBadge from './AwardBadge';
import styles from './Card.module.css';

export default function TextCard({ project }) {
  const {
    id,
    title,
    category,
    pullQuote,
    description,
    cardBackground = 'accent',
    displayType = 'writing',
    cta,
    award,
  } = project;
  const bgClass = cardBackground === 'dark'
    ? styles.bgDark
    : cardBackground === 'alt'
      ? styles.bgAlt
      : styles.bgAccent;
  const action = cta ?? (displayType === 'document' ? 'View document' : 'Read the story');

  return (
    <Link to={`/work/${id}`} className={`${styles.card} ${styles.textCard} ${styles[displayType]} ${bgClass}`}>
      {award && <AwardBadge className={styles.badge} />}
      <div className={styles.textFill} aria-hidden="true">
        {pullQuote && <span>{pullQuote}</span>}
      </div>
      <span className={`${styles.categoryLabel} ${styles.lightLabel} label`}>{category}</span>

      <h3 className={`${styles.title} ${styles.restingTitle} ${styles.lightTitle}`}>{title}</h3>
      <div className={styles.detailsPanel}>
        <h3 className={`${styles.title} ${styles.panelTitle}`}>{title}</h3>
        {description && (
          <p className={styles.description}>{description}</p>
        )}

        <div className={styles.footer}>
          <span className={styles.ctaText}>
            {action} <span className={styles.arrow} aria-hidden="true">-&gt;</span>
          </span>
        </div>
      </div>
    </Link>
  );
}
