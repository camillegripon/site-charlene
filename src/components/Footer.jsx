import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer>
      <div className="footer-content" id="footer">
        <div className="footer-section">
          <h3>Contact</h3>
          <p><i className="fas fa-map-marker-alt"></i> Adresse du cabinet : CCSM 53 rue de Strasbourg Hérouville-Saint-Clair</p>
          <p><i className="fas fa-phone"></i> N°RPPS :  10009189654</p>
          <p><i className="fas fa-envelope"></i> N°Adeli : 149308736</p>
        </div>
        <div className="footer-section">
          <h3>Liens utiles</h3>
          <Link to="/">Accueil</Link>
          <a href="https://www.instagram.com/ccsm.herouville/?igsh=Z2cxbm92dW51OHZj#"><i class="fa-brands fa-instagram"></i>Le CCSM</a>
          <Link to="https://www.doctolib.fr/">Prendre rendez-vous</Link>
        </div>
        <div className="footer-section">
          <h3>Informations</h3>
          <Link to="/mentions-legales">Mentions légales</Link>
          <Link to="/confidentialite">Confidentialité</Link>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2025 Guérard Charlène - Psychologue. Tous droits réservés.</p>
      </div>
    </footer>
  );
}
