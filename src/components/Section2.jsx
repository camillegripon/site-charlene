import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faLock, faLightbulb, faRedo, faHeart, faHandHoldingHeart } from '@fortawesome/free-solid-svg-icons';

export default function Section2() {
  return (
    <section className="section" id="approche">
      <h2>Mon approche <span style={{ color: '#6ca6c1' }}>psychodynamique</span></h2>
      <div className="cards">
        <div className="card approche-card">
          <div className="approche-container">
            {/* Image à gauche */}
            <div className="approche-image">
              <img
                src="/photo/profil.jpg"
                alt="Espace d'écoute bienveillant"
                className="approche-img"
              />
            </div>
            {/* Texte à droite avec icônes */}
            <div className="approche-text">
              <div className="approche-item">
                <div className="item-icon">
                  <FontAwesomeIcon icon={faUser} style={{ color: '#6ca6c1' }} />
                </div>
                <div className="item-content">
                  <h3>Un accompagnement <span style={{ color: '#6ca6c1' }}>sur mesure</span></h3>
                  <p>Chaque personne est unique. Mon approche psychodynamique part de <strong>votre vécu</strong> pour comprendre ensemble ce qui vous anime, vous bloque ou vous questionne.</p>
                </div>
              </div>

              <div className="approche-item">
                <div className="item-icon">
                  <FontAwesomeIcon icon={faLock} style={{ color: '#6ca6c1' }} />
                </div>
                <div className="item-content">
                  <h3>Un espace <span style={{ color: '#6ca6c1' }}>sécurisé et confidentiel</span></h3>
                  <p>Ici, votre parole se libère <strong>sans jugement</strong>, dans le respect de votre rythme. Un cadre bienveillant pour explorer en toute confiance.</p>
                </div>
              </div>

              <div className="approche-item">
                <div className="item-icon">
                  <FontAwesomeIcon icon={faLightbulb} style={{ color: '#6ca6c1' }} />
                </div>
                <div className="item-content">
                  <h3>Donner du <span style={{ color: '#6ca6c1' }}>sens</span></h3>
                  <p>Nous relions votre présent à votre histoire pour éclairer les répétitions, les mécanismes inconscients, et <strong>favoriser les prises de conscience</strong>.</p>
                </div>
              </div>

              <div className="approche-item">
                <div className="item-icon">
                  <FontAwesomeIcon icon={faRedo} style={{ color: '#6ca6c1' }} />
                </div>
                <div className="item-content">
                  <h3>Retrouver <span style={{ color: '#6ca6c1' }}>mieux-être et apaisement</span></h3>
                  <p>Petit à petit, ce travail permet d’aborder les défis avec plus de sérénité, et de renouer avec un sentiment de <strong>cohérence intérieure</strong>.</p>
                </div>
              </div>

              <div className="approche-item">
                <div className="item-icon">
                  <FontAwesomeIcon icon={faHeart} style={{ color: '#6ca6c1' }} />
                </div>
                <div className="item-content">
                  <h3>Un cadre <span style={{ color: '#6ca6c1' }}>éthique et respectueux</span></h3>
                  <p>Mon travail suit le code de déontologie des psychologues : <strong>respect, liberté et consentement</strong> sont au cœur de chaque étape.</p>
                </div>
              </div>

              <div className="approche-item">
                <div className="item-icon">
                  <FontAwesomeIcon icon={faHandHoldingHeart} style={{ color: '#6ca6c1' }} />
                </div>
                <div className="item-content">
                  <h3>Votre <span style={{ color: '#6ca6c1' }}>rythme</span>, votre chemin</h3>
                  <p>Chaque séance est un dialogue ouvert, où <strong>votre accord et votre confort</strong> guident le processus thérapeutique.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
