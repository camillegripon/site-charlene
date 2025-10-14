import { Link } from 'react-router-dom';
import '../styles/header.css'; 

export default function Header() {
  return (
    <header>
      <nav>
        <img src="/public/photo/rectangle.jpg" id="Logo" alt="Logo" />
        <div className="nav-links">
          <Link to="/">Accueil</Link>
          <Link to="/a-propos">À propos</Link>
          <Link to="/contact">Contact</Link>
          <Link to="https://www.doctolib.fr/" className="button">Prendre RDV</Link>
        </div>
      </nav>
    </header>
  );
}
