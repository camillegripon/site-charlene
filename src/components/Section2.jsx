import { Link } from 'react-router-dom';

export default function Section2() {
  return (

      <section className="section">
        <h2>Pourquoi me consulter ?</h2>
        <div className="cards">
          <div className="card">
            <h3>Approche bienveillante</h3>
            <p>Un espace sécurisé pour explorer vos difficultés sans jugement.</p>
          </div>
          <div className="card">
            <h3>Expertise reconnue</h3>
            <p>Diplômée de Caen, formée à la méthode Heimlich et Montessori.</p>
          </div>
          <div className="card">
            <h3>Flexibilité</h3>
            <p>Séances en cabinet ou en visio, selon vos besoins.</p>
          </div>
        </div>
      </section>
  );
}
