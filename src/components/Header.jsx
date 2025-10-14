import { Link } from 'react-router-dom';
import '../styles/header.css'; 

export default function Header() {
  return (
    <header>
      <nav>
        <img src="/photo/rectangle.jpg" id="Logo" alt="Logo" />
        <div className="nav-links">
          <a href="#approche">Approche</a>
          <a href="#formation">Formation</a>
          <a href="#footer">Contact</a>
          <Link to="https://www.doctolib.fr/" className="button">Prendre RDV</Link>
        </div>
      </nav>
    </header>
  );
}
