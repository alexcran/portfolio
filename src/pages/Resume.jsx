import { Link } from 'react-router-dom';
import styles from './Resume.module.css';

export default function Resume() {
  return (
    <main className={styles.page}>
      <div className={styles.shell}>

        <div className={styles.topBar}>
          <Link to="/" className={styles.back}>← Back</Link>
          <a
            href="/Alex-Cranstoun-Resume-2026.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.downloadBtn}
          >
            View PDF
          </a>
        </div>

        <div className={styles.column}>
        <header className={styles.header}>
          <h1 className={styles.name}>Alex Cranstoun</h1>
          <p className={styles.tagline}>DESIGNER. PHOTOGRAPHER. WRITER. COMMUNICATOR.</p>
          <p className={styles.contact}>
            <a href="mailto:amc@alexcranstoun.com" className={styles.contactLink}>
              amc@alexcranstoun.com
            </a>
            {' · '}
            <a
              href="https://www.linkedin.com/in/alexcranstoun"
              className={styles.contactLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn.com/in/alexcranstoun
            </a>
            {' · '}
            Seattle, WA
          </p>
        </header>

        {/* EXPERIENCE */}
        <section className={styles.section}>
          <h2 className={styles.sectionLabel}>Experience</h2>

          <article className={styles.entry}>
            <div className={styles.entryRow}>
              <h3 className={styles.jobTitle}>Internal Communications Specialist</h3>
              <span className={styles.meta}>June 2024 – Present</span>
            </div>
            <p className={styles.employer}>Maola Local Dairies</p>
            <ul className={styles.bullets}>
              <li>Create strategic communications reaching 1,000+ employees across four states, aligning a largely deskless workforce with organizational goals.</li>
              <li>Advise senior leadership and HR on communication strategy, shaping key initiatives and broadening reach to frontline employees.</li>
              <li>Produce design, writing, and photography that reflects company values across every internal channel.</li>
              <li>Measure communication impact and translate the findings into refinements that improve engagement.</li>
            </ul>
          </article>

          <article className={styles.entry}>
            <div className={styles.entryRow}>
              <h3 className={styles.jobTitle}>Communications Specialist</h3>
              <span className={styles.meta}>August 2020 – June 2024</span>
            </div>
            <p className={styles.employer}>Basilica of the National Shrine of the Immaculate Conception</p>
            <ul className={styles.bullets}>
              <li>Managed all publications for the largest Catholic church in North America, including books, signage, and promotional materials.</li>
              <li>Produced weekly livestreams for audiences of 20,000+, serving as floor manager to ensure seamless execution.</li>
              <li>Represented the Basilica as media spokesperson, fielding press inquiries and cultivating positive coverage.</li>
              <li>Advised the Rector, Associate Rectors, and Board of Trustees on strategic communications as a member of the Rector's Executive Staff.</li>
              <li>Supported the Development Department's fundraising strategy and strengthened partnerships with DC's tourism community to increase visibility.</li>
              <li>Directed social media and website strategy, coordinating contractors to keep output aligned with organizational goals.</li>
            </ul>
          </article>

          <article className={styles.entry}>
            <div className={styles.entryRow}>
              <h3 className={styles.jobTitle}>Media Manager</h3>
              <span className={styles.meta}>December 2018 – August 2020</span>
            </div>
            <p className={styles.employer}>Catholic Apostolate Center</p>
            <p className={styles.prevRoles}>
              Previous Roles include Administrative Intern, Program Associate, and Production Coordinator
            </p>
            <ul className={styles.bullets}>
              <li>Directed daily media operations and managed a multimedia studio for an international nonprofit.</li>
              <li>Led production of a bi-monthly podcast series and numerous video projects, coordinating cross-functional teams.</li>
              <li>Built and executed a social media strategy across platforms totaling 300,000+ followers, driving sustained engagement.</li>
              <li>Supervised editing and design of major publications, maintaining consistent quality and brand alignment.</li>
              <li>Organized multiple catechetical webinar series, managing schedules, content, and participant engagement.</li>
            </ul>
          </article>
        </section>

        {/* EDUCATION */}
        <section className={styles.section}>
          <h2 className={styles.sectionLabel}>Education</h2>

          <article className={`${styles.entry} ${styles.eduEntry}`}>
            <div className={styles.entryRow}>
              <h3 className={styles.schoolName}>University of Maryland Global Campus</h3>
              <span className={styles.meta}>College Park, MD</span>
            </div>
            <p className={styles.field}>Integrated Strategic Communications</p>
          </article>

          <article className={`${styles.entry} ${styles.eduEntry}`}>
            <div className={styles.entryRow}>
              <h3 className={styles.schoolName}>The Catholic University of America</h3>
              <span className={styles.meta}>Washington, DC</span>
            </div>
            <p className={styles.field}>Theology and Religious Studies</p>
          </article>
        </section>

        {/* SKILLS */}
        <section className={styles.section}>
          <h2 className={styles.sectionLabel}>Skills</h2>

          <div className={styles.skillsBlock}>
            <p className={styles.skillRow}>
              <span className={styles.skillLabel}>Communications</span>
              {' · '}
              Strategic communications, media &amp; PR, crisis communications
            </p>
            <p className={styles.skillRow}>
              <span className={styles.skillLabel}>Design &amp; Photography</span>
              {' · '}
              Brand identity, typography, photography, Adobe Creative Suite
            </p>
            <p className={styles.skillRow}>
              <span className={styles.skillLabel}>Platforms</span>
              {' · '}
              Microsoft 365 &amp; SharePoint, Workshop, Mailchimp, Meltwater, WordPress
            </p>
            <p className={styles.skillRow}>
              <span className={styles.skillLabel}>Web</span>
              {' · '}
              HTML/CSS, Next.js, React, Astro, Tailwind, Sanity, Supabase, Vercel
            </p>
          </div>
        </section>

        </div>
      </div>
    </main>
  );
}
