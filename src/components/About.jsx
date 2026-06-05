import { Link } from 'react-router-dom';
import { useScrollReveal } from '../hooks/useScrollReveal';
import styles from './About.module.css';

export default function About() {
  const ref = useScrollReveal();

  return (
    <section id="about" className={styles.section} ref={ref}>
      <div className={styles.inner}>
        <div className={styles.grid}>
          <div className={styles.left}>
            <img
              src="/Alex.JPG"
              alt="Alex Cranstoun"
              className={`${styles.photo} reveal`}
            />
          </div>

          <div className={styles.right}>
            <p className={`${styles.bio} reveal`}>
              My love for digital and print media started in elementary school 
              when I signed up for Ms. Dempsey's journalism class (which still laid out 
              the yearbook with Mod Podge). After begging my parents for a copy of PowerPoint <s>(and 
              figuring out how to bootleg copies of Photoshop, Illustrator, and InDesign)</s>, 
              the whole world of design pulled me in quickly: the written word, 
              the way design and layout shape a reader's experience, the beauty of 
              a well-taken photograph. I've been working on design projects ever since.
            </p>
            <p className={`${styles.bio} reveal`}>
              Today I put those skills to work every day. Paired with data-driven insights, 
              they help me empower the 1,000+ employees of a sustainability-focused dairy cooperative, 
              keeping us connected through fresh, strategic content even when we're separated by 
              hundreds, sometimes thousands, of miles. Before this, I handled digital 
              and print media for the nation's largest Catholic church, which welcomes 
              more than a million visitors a year (popes included).
            </p>
            <p className={`${styles.bio} reveal`}>
              Outside of work, I do some volunteering <a href="https://legacy.dcknights.org" target="_blank" rel="noopener noreferrer" className="prose-link"> (some of which uses my design skills) </a>
              and still like to take pictures, swim, go hiking, and play in the mud 
              (better known as making ceramic pottery.)
            </p>

            <Link to="/resume" className={`${styles.resumeLink} reveal`}>
              View resume <span aria-hidden="true">-&gt;</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
