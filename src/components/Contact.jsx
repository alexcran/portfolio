import styles from './Contact.module.css';

const user = 'hello';
const domain = 'alexcranstoun.com';
const email = `${user}@${domain}`;

export default function Contact() {
  return (
    <section id="contact" className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.content}>
          <p className={styles.invite}>
            Have a project, collaboration idea, or just want to say hello? I'd love to hear from you.
          </p>

          <a href={`mailto:${email}`} className={styles.email}>{email}</a>

          <p className={styles.disclaimer}>
            The work shown here was created in the course of my employment, contract, or volunteer engagements. Copyright and ownership remain with the respective organizations. These projects do not imply endorsement by, or any ongoing relationship with, the organizations named. Some internal or client-facing work has been modified, excerpted, or withheld to respect privacy.
          </p>
        </div>
      </div>
    </section>
  );
}
