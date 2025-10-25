import { Link } from 'react-router-dom';
import '../styles/header.css';
import Accueil from '../pages/Accueil'; 

export default function Header() {
  return (
    <header>
      <nav>
        <Link to="/">
          <img src="/photo/miniLogo.png" id="Logo" alt="Logo" />
          </Link>
<div className="nav-links">
          <Link to="/#approche">Psychologie</Link>
          <Link to="/#formation">Sexologie</Link>
          <Link to="/tarif">Tarif</Link>
          <Link to="https://www.doctolib.fr/" className="button">Prendre RDV</Link>
        </div>
      </nav>
    </header>
  );
}
