import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Accueil from './pages/Accueil';
import Tarif from './pages/Tarif';
import Contact from './pages/Contact';
import Agenda from './pages/Agenda';
import MentionsLegales from './pages/MentionsLegales';
import Confidentialite from './pages/Confidentialite';
import './styles/app.css';

function App() {
  return (
    <Router>
      <div className="app-container">
        <Header /> {/* Sera maintenant une sidebar à gauche */}
        <div className="main-content">
          <Routes>
            <Route path="/" element={<Accueil />} />
            <Route path="/tarif" element={<Tarif />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/agenda" element={<Agenda />} />
            <Route path="/mentions-legales" element={<MentionsLegales />} />
            <Route path="/confidentialite" element={<Confidentialite />} />
          </Routes>
          <Footer />
        </div>
      </div>
    </Router>
  );
}

export default App;
