import { Link } from 'react-router-dom';
import styles from './Resume.module.css';

export default function Resume() {
  return (
    <main className={styles.page}>
      <div className={styles.shell}>

        <div className={styles.topBar}>
          <Link to="/" className={styles.back}>← Back</Link>
          <a
            href="/Alex-Cranstoun-Resume-09-2026.pdf"
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
              <li>Lead internal communications for a largely deskless workforce of 1,000+ employees across four states, in partnership with HR, IT, operations, food safety, and executive leadership.</li>
              <li>Write executive communications for the CEO and senior leadership and equip leaders to communicate directly with their teams through LinkedIn post kits, talking points, and templates.</li>
              <li>Proposed and launched a quarterly all-employee executive town hall in 2025 (60% watch rate).</li>
              <li>Serve as internal crisis communications lead and author of the company's crisis communications guidelines.</li>
              <li>Developed internal brand guidelines to support the company's unification under a single brand.</li>
              <li>Led AI governance work alongside IT, including translation and further development of the company's AI Acceptable Use Policy and authorship of the Creative AI and Brand Authenticity Standards.</li>
              <li>Serve as lead graphic designer for all internal projects, including facility signage, food safety activations, plant identity systems, internal templates, and merchandise.</li>
              <li>Led implementation of internal communications technology, including employee SMS and email analytics, with employee surveys to measure results.</li>
            </ul>
          </article>

          <article className={styles.entry}>
            <div className={styles.entryRow}>
              <h3 className={styles.jobTitle}>Communications Specialist</h3>
              <span className={styles.meta}>August 2020 – June 2024</span>
            </div>
            <p className={styles.employer}>Basilica of the National Shrine of the Immaculate Conception</p>
            <ul className={styles.bullets}>
              <li>Managed all publications and digital channels for the largest Catholic church in North America, including books, signage, promotional materials, social media, and the website, with outside vendors.</li>
              <li>Produced weekly livestreams for audiences of 20,000+, floor-managed major liturgies, and negotiated terms for national broadcasts.</li>
              <li>Served as media spokesperson and advised the Rector, Associate Rectors, and Board of Trustees on strategic communications as a member of the Rector's Executive Staff.</li>
              <li>Supported the Development Department's fundraising strategy and built partnerships with DC's tourism community.</li>
            </ul>
          </article>

          <article className={styles.entry}>
            <div className={styles.entryRow}>
              <h3 className={styles.jobTitle}>Media Manager</h3>
              <span className={styles.meta}>December 2018 – August 2020</span>
            </div>
            <p className={styles.employer}>Catholic Apostolate Center</p>
            <p className={styles.prevRoles}>
              Previously Administrative Intern, Program Associate, and Production Coordinator
            </p>
            <ul className={styles.bullets}>
              <li>Directed daily media operations and a multimedia studio for an international nonprofit, producing a biweekly podcast series and partner video projects with organizations such as the United States Conference of Catholic Bishops.</li>
              <li>Built and executed a social media strategy across platforms with 300,000+ combined followers.</li>
              <li>Supervised editing and design of major publications, including The Art of Accompaniment, Living as Missionary Disciples, and In Service to the Parish and the Church.</li>
              <li>Organized all catechetical webinar series, including scheduling, content, and participant management.</li>
            </ul>
          </article>
        </section>

        {/* SKILLS */}
        <section className={styles.section}>
          <h2 className={styles.sectionLabel}>Skills</h2>

          <div className={styles.skillsBlock}>
            <p className={styles.skillRow}>
              <span className={styles.skillLabel}>Communications</span>
              {' · '}
              Internal and executive communications, crisis communications, media relations, writing and editing
            </p>
            <p className={styles.skillRow}>
              <span className={styles.skillLabel}>Design &amp; Media</span>
              {' · '}
              Brand identity and guidelines, graphic design, typography, photography, livestream and video production, podcast production
            </p>
            <p className={styles.skillRow}>
              <span className={styles.skillLabel}>Platforms</span>
              {' · '}
              Microsoft 365, SharePoint, Workshop (internal email), Mailchimp, Meltwater, WordPress, Adobe Creative Cloud
            </p>
            <p className={styles.skillRow}>
              <span className={styles.skillLabel}>Web</span>
              {' · '}
              HTML/CSS, React, Next.js
            </p>
          </div>
        </section>

        {/* EDUCATION */}
        <section className={styles.section}>
          <h2 className={styles.sectionLabel}>Education</h2>

          <article className={`${styles.entry} ${styles.eduEntry}`}>
            <div className={styles.entryRow}>
              <h3 className={styles.schoolName}>University of Maryland Global Campus</h3>
              <span className={styles.meta}>College Park, MD</span>
            </div>
            <p className={styles.field}>Integrated Strategic Communications, in progress</p>
          </article>

          <article className={`${styles.entry} ${styles.eduEntry}`}>
            <div className={styles.entryRow}>
              <h3 className={styles.schoolName}>The Catholic University of America</h3>
              <span className={styles.meta}>Washington, DC</span>
            </div>
            <p className={styles.field}>Theology and Religious Studies, attended</p>
          </article>
        </section>

        </div>
      </div>
    </main>
  );
}
