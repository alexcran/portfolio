import styles from './Colophon.module.css';

const fonts = [
  {
    name: 'BN Chester',
    className: styles.bnChester,
    foundry: 'Brandon Nickerson',
    url: 'https://bnicks.com',
    source: 'bnicks.com',
    note: "I wanted a serif with real weight that didn't feel corporate. Chester is beautiful, sophisticated, yet fun. It's rooted in a vintage specimen, but it still feels warm. Brandon is doing some great work and I love the way his stuff looks!",
  },
  {
    name: 'Klima',
    className: styles.klima,
    foundry: 'Matthew Hinders-Anderson',
    url: 'https://wehtt.am',
    source: 'wehtt.am',
    note: 'Klima is a beautiful, easy, and simple font that is incredibly versatile',
  },
];

const colors = [
  {
    token: '--bg',
    name: 'Warm off-white',
    hex: '#F5F4EF',
  },
  {
    token: '--text',
    name: 'Warm near-black',
    hex: '#1A1A1A',
  },
  {
    token: '--accent',
    name: 'Deep teal',
    hex: '#005C5C',
  },
];

export default function Colophon() {
  return (
    <main className={styles.page}>
      <div className={styles.shell}>
        <header className={styles.header}>
          <h1 className={styles.title}>Colophon</h1>
          <p className={styles.intro}>
            In case you care about the design details 
            behind this site, like I do.
          </p>
        </header>

        <section className={styles.section}>
          <h2 className={styles.label}>Typography</h2>
          <div className={styles.sectionContent}>
            <p className={styles.prose}>
              The short version: I really wanted fonts from 
              independent designers, and I've followed by Brandon Nickerson and Matthew Hinders-Anderson for a while.
              Matthew Hinders-Anderson famously blew up after his fonts were used by Mayor Zohran Mamdani during his successful bid for Mayor of NYC. 
            </p>
            <div className={styles.specimens}>
              {fonts.map((font) => (
                <article key={font.name} className={styles.specimen}>
                  <p className={`${styles.specimenName} ${font.className}`}>{font.name}</p>
                  <p className={styles.meta}>
                    By <a href={font.url} target="_blank" rel="noopener noreferrer">{font.foundry}</a>
                    {' '}(<a href={font.url} target="_blank" rel="noopener noreferrer">{font.source}</a>)
                  </p>
                  <p className={styles.prose}>{font.note}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className={styles.section}>
          <h2 className={styles.label}>Color</h2>
          <div className={styles.sectionContent}>
            <div className={styles.swatches}>
              {colors.map((color) => (
                <article key={color.token} className={styles.swatch}>
                  <div
                    className={styles.color}
                    style={{ backgroundColor: color.hex }}
                    aria-hidden="true"
                  />
                  <div>
                    <p className={styles.swatchName}>{color.name}</p>
                    <p className={styles.swatchMeta}>{color.token} / {color.hex}</p>
                  </div>
                </article>
              ))}
            </div>
            <p className={styles.prose}>
              I wanted to keep it simple. Warm off-white so the page doesn't feel sterile.
              Near-black that has some warmth to it, and a deep PNW teal (I'm looking at you, Mariners) that only
              shows up when it has a job to do.
            </p>
          </div>
        </section>

        <section className={styles.section}>
          <h2 className={styles.label}>Design</h2>
          <div className={styles.sectionContent}>
            <p className={styles.pullLine}>Made by hand. Not poured into a template.</p>
            <p className={styles.prose}>
              I wanted the site to feel made by hand, not poured into a portfolio
              template. The grid borrows from editorial layout and lets the words speak when necessary. 
              </p>
          </div>
        </section>

        <section className={styles.section}>
          <h2 className={styles.label}>Built With</h2>
          <div className={styles.sectionContent}>
            <p className={styles.prose}>
              Designed by hand, built with Vite and
              React with self-hosted fonts.
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}
