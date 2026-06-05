import { useParams, Link, Navigate } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import { getProject, getAdjacentProjects } from '../lib/projects';
import styles from './ProjectDetail.module.css';

function getDisplayType(project) {
  if (project.displayType) return project.displayType;
  return project.cardType === 'image' ? 'case-study' : 'writing';
}

export default function ProjectDetail() {
  const { id } = useParams();
  const project = getProject(id);

  if (!project) return <Navigate to="/" replace />;

  const { next } = getAdjacentProjects(id);
  const { title, category, tags = [], pullQuote, heroImage, body } = project;
  const displayType = getDisplayType(project);
  const hasVisualHero = displayType === 'photo' || displayType === 'case-study' || displayType === 'document';

  return (
    <main className={styles.page}>
      <div className={styles.backWrap}>
        <div className={styles.backInner}>
          <Link to="/#work" className={styles.backLink}>
            <span aria-hidden="true">&lt;-</span> All Work
          </Link>
        </div>
      </div>

      <header className={styles.hero}>
        <div className={styles.heroInner}>
          <span className={`label ${styles.category}`}>{category}</span>

          <h1 className={styles.title}>{title}</h1>

          <div className={styles.tags}>
            {tags.map((tag) => (
              <span key={tag} className="tag">{tag}</span>
            ))}
          </div>
        </div>
      </header>

      {hasVisualHero ? (
        <div className={styles.heroImage}>
          {heroImage
            ? <img src={heroImage} alt="" className={styles.heroImageEl} />
            : <div className={styles.heroImagePlaceholder} aria-hidden="true" />
          }
        </div>
      ) : pullQuote ? (
        <div className={styles.heroPullQuote}>
          <div className={styles.heroPullQuoteInner}>
            <p className={styles.pullQuoteText}>{pullQuote}</p>
          </div>
        </div>
      ) : null}

      <article className={styles.body}>
        <div className={styles.bodyInner}>
          <ReactMarkdown
            components={{
              h2: ({ children }) => <h2 className={styles.subhead}>{children}</h2>,
              p: ({ children }) => <p className={styles.prose}>{children}</p>,
              img: ({ src, alt }) => {
                const isFullWidth = /full[-\s]?width|fullbleed|wide/i.test(`${src ?? ''} ${alt ?? ''}`);
                const isPair = /\bpair\b/i.test(alt ?? '');
                const caption = (alt ?? '').replace(/\b(full[-\s]?width|fullbleed|wide|pair)\b/gi, '').trim();
                const figureClass = isPair
                  ? styles.figurePair
                  : `${styles.figure} ${isFullWidth ? styles.figureFull : ''}`;
                return (
                  <figure className={figureClass}>
                    <img src={src} alt={caption} className={styles.bodyImage} />
                    {caption && <figcaption className={styles.caption}>{caption}</figcaption>}
                  </figure>
                );
              },
            }}
          >
            {body}
          </ReactMarkdown>
        </div>
      </article>

      <nav className={styles.projectNav}>
        <div className={styles.projectNavInner}>
          {next ? (
            <Link to={`/work/${next.id}`} className={styles.navLink}>
              <span className={styles.navDirection}>Next Project <span aria-hidden="true">-&gt;</span></span>
              <span className={styles.navTitle}>{next.title}</span>
            </Link>
          ) : (
            <Link to="/#work" className={styles.navLink}>
              <span className={styles.navDirection}>Back to Work <span aria-hidden="true">-&gt;</span></span>
              <span className={styles.navTitle}>View the full archive</span>
            </Link>
          )}
        </div>
      </nav>
    </main>
  );
}
