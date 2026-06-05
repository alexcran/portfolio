import { Routes, Route } from 'react-router-dom';
import PersistentName from './components/PersistentName';
import SiteFooter from './components/SiteFooter';
import Home from './pages/Home';
import ProjectDetail from './pages/ProjectDetail';
import Resume from './pages/Resume';
import Colophon from './pages/Colophon';

export default function App() {
  return (
    <>
      <PersistentName />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/work/:id" element={<ProjectDetail />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/colophon" element={<Colophon />} />
      </Routes>
      <SiteFooter />
    </>
  );
}
