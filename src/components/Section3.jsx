import { Link } from 'react-router-dom';

export default function Section3() {
  return (
      <section className="section alt-section">
        <h2>Comment se déroule une séance ?</h2>
        <div className="steps">
          <div className="step">
            <span className="step-number">1</span>
            <p>Prise de contact et évaluation de vos besoins.</p>
          </div>
          <div className="step">
            <span className="step-number">2</span>
            <p>Séances régulières (45-60 min) adaptées à votre rythme.</p>
          </div>
          <div className="step">
            <span className="step-number">3</span>
            <p>Outils concrets pour avancer vers vos objectifs.</p>
          </div>
        </div>
        <div className="cta-center">
          <Link to="https://www.doctolib.fr/" className="button outline">Prendre RDV</Link>
        </div>
      </section>
  );
}
