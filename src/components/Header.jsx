import { Link } from 'react-router-dom';
import '../styles/header.css';

export default function Header() {
  return (
    <header className="sidebar">
      <nav>
        <Link to="/" className="logo-link">
          <img src="/photo/miniLogo.png" id="Logo" alt="Logo" />
        </Link>
        <div className="nav-links">
          <Link to="/#approche">Psychologie</Link>
          <Link to="/#formation">Sexologie</Link>
          <Link to="/tarif/#tarif">Tarif</Link>
          <Link to="/tarif/#acces">Accès</Link>
          <Link to="https://www.doctolib.fr/psychologue/herouville-saint-clair/charlene-guerard/" className="button">Prendre RDV</Link>
        </div>
      </nav>
    </header>
  );
}
