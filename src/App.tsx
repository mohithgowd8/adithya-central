import { Routes, Route } from 'react-router-dom';
import TopHeaderBar from './components/layout/TopHeaderBar';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import FloatingActions from './components/ui/FloatingActions';
import ScrollToTop from './components/layout/ScrollToTop';

import Home from './pages/Home';
import About from './pages/About';
import Catering from './pages/Catering';
import Banquets from './pages/Banquets';
import ArnaKalyanaVedhi from './pages/ArnaKalyanaVedhi';
import AchutaBanquet from './pages/AchutaBanquet';
import Restaurant from './pages/Restaurant';
import Gallery from './pages/Gallery';
import Contact from './pages/Contact';

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-ivory text-charcoal selection:bg-gold selection:text-burgundy-deep">
      <ScrollToTop />
      <Navbar />

      <div className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/catering" element={<Catering />} />
          <Route path="/banquets" element={<Banquets />} />
          <Route path="/banquets/arna-kalyana-vedhi" element={<ArnaKalyanaVedhi />} />
          <Route path="/banquets/achuta-banquet" element={<AchutaBanquet />} />
          <Route path="/restaurant" element={<Restaurant />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>

      <Footer />
      <FloatingActions />
    </div>
  );
}
