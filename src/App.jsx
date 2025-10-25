import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Accueil from './pages/Accueil';
import Tarif from './pages/Tarif';
import Contact from './pages/Contact';
import Agenda from './pages/Agenda';
import './styles/app.css'; // Feuille de style globale

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Accueil />} />
        <Route path="/tarif" element={<Tarif />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/agenda" element={<Agenda />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
