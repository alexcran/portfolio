import Hero from '../components/Hero';
import WorkGrid from '../components/WorkGrid';
import About from '../components/About';
import Contact from '../components/Contact';
import { projects } from '../lib/projects';

const design = projects.filter((p) => p.displayType === 'case-study');
const photography = projects.filter((p) => p.displayType === 'photo');
const writing = projects.filter((p) => p.displayType === 'writing');

export default function Home() {
  return (
    <main>
      <Hero />
      <WorkGrid id="design" heading="Design" projects={design} columns={3} />
      <WorkGrid id="photography" heading="Photography" projects={photography} columns={3} />
      <WorkGrid id="writing" heading="Writing" projects={writing} columns={2} />
      <About />
      <Contact />
    </main>
  );
}
