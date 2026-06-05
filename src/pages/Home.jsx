import Hero from '../components/Hero';
import WorkGrid from '../components/WorkGrid';
import About from '../components/About';
import Contact from '../components/Contact';
import { projects } from '../lib/projects';

export default function Home() {
  return (
    <main>
      <Hero />
      <WorkGrid projects={projects} />
      <About />
      <Contact />
    </main>
  );
}
