import styles from './Hero.module.css';

export default function Hero() {
  return (
    <section className={styles.hero} aria-label="Hero">
      <div className={styles.content}>
        <div className={styles.greeting}>Hi, I'm</div>
        <div
          className={styles.headline}
          data-hero-name-anchor
          aria-hidden="true"
        >
          <span>Alex</span>
          <span>Cranstoun</span>
        </div>

        <p className={styles.subhead}>
          I'm a designer, photographer, writer, and general communicator from the PNW living in Maryland,
          working as the internal communications leader for{' '}
          <a href="https://www.maolamilk.com" target="_blank" rel="noopener noreferrer" className={styles.employerLink} data-tooltip="It's pronounced May-oh-lah">Maola Local Dairies</a>,
          a farmer-owned dairy cooperative.
          Previously, I worked in communications at the{' '}
          <a href="https://www.nationalshrine.org" target="_blank" rel="noopener noreferrer" className={styles.employerLink} data-tooltip="The Largest Catholic Church in North America">Basilica of the National Shrine of the Immaculate Conception</a>{' '}
          and media at the{' '}
          <a href="https://www.catholicapostolatecenter.org" target="_blank" rel="noopener noreferrer" className={styles.employerLink} data-tooltip="It's a ministry, not an apostolate">Catholic Apostolate Center</a>.
          Reach me via email or scroll down to see some of my selected work.
        </p>
      </div>
    </section>
  );
}
