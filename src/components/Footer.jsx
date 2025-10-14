import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer>
      <div className="footer-content">
        <div className="footer-section">
          <h3>Contact</h3>
          <p><i className="fas fa-map-marker-alt"></i> Adresse du cabinet</p>
          <p><i className="fas fa-phone"></i> 0X XX XX XX XX</p>
          <p><i className="fas fa-envelope"></i> contact@nom-psychologue.fr</p>
        </div>
        <div className="footer-section">
          <h3>Liens utiles</h3>
          <Link to="/">Accueil</Link>
          <Link to="/a-propos">À propos</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/agenda">Prendre rendez-vous</Link>
        </div>
        <div className="footer-section">
          <h3>Informations</h3>
          <Link to="/mentions-legales">Mentions légales</Link>
          <Link to="/politique-confidentialite">Confidentialité</Link>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2025 Nom Prénom - Psychologue. Tous droits réservés.</p>
      </div>
    </footer>
  );
}
