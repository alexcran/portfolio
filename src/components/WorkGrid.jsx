import { useScrollReveal } from '../hooks/useScrollReveal';
import ImageCard from './ImageCard';
import TextCard from './TextCard';
import styles from './WorkGrid.module.css';

function getDisplayType(project) {
  if (project.displayType) return project.displayType;
  return project.cardType === 'image' ? 'case-study' : 'writing';
}

export default function WorkGrid({ id, heading, projects, columns = 3 }) {
  const ref = useScrollReveal();

  return (
    <section id={id} className={styles.section} ref={ref} style={{ '--grid-cols': String(columns) }}>
      <div className={styles.inner}>
        <h2 className={`${styles.heading} reveal`}>{heading}</h2>

        <div className={styles.grid}>
          {projects.map((project, i) => {
            const displayType = getDisplayType(project);
            const span = project.gridSpan ?? (project.cardSize === 'large' ? 3 : 1);
            const height = project.gridHeight ?? (project.cardSize === 'large' ? 'tall' : 'standard');

            return (
              <div
                key={project.id}
                className={[
                  styles.cell,
                  styles[`span${span}`],
                  styles[height],
                  styles[displayType],
                  'reveal',
                ].filter(Boolean).join(' ')}
                style={{ transitionDelay: `${(i % 4) * 0.09}s` }}
              >
                {displayType === 'photo' || displayType === 'case-study' ? (
                  <ImageCard project={{ ...project, displayType }} />
                ) : (
                  <TextCard project={{ ...project, displayType }} />
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
