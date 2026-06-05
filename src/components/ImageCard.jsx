import { Link } from 'react-router-dom';
import AwardBadge from './AwardBadge';
import styles from './Card.module.css';

export default function ImageCard({ project }) {
  const {
    id,
    title,
    category,
    description,
    displayType = 'case-study',
    cta,
    heroImage,
    heroImagePosition = 'center',
    darkHero,
    award,
  } = project;
  const action = cta ?? (displayType === 'photo' ? 'View series' : 'View project');

  return (
    <Link to={`/work/${id}`} className={`${styles.card} ${styles.imageCard} ${styles[displayType]}${darkHero ? ` ${styles.darkHero}` : ''}`}>
      <div
        className={styles.imageFill}
        style={heroImage ? { backgroundImage: `url(${heroImage})`, backgroundSize: 'cover', backgroundPosition: heroImagePosition } : undefined}
        aria-hidden="true"
      />
      {award && <AwardBadge className={styles.badge} />}
      <span className={`${styles.categoryLabel} label`}>{category}</span>
      <h3 className={`${styles.title} ${styles.restingTitle}`}>{title}</h3>
      <div className={styles.detailsPanel}>
        <h3 className={`${styles.title} ${styles.panelTitle}`}>{title}</h3>
        {description && <p className={styles.description}>{description}</p>}
        <div className={styles.footer}>
          <span className={styles.ctaText}>
            {action} <span className={styles.arrow} aria-hidden="true">→</span>
          </span>
        </div>
      </div>
    </Link>
  );
}
