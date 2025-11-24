import { height } from '@fortawesome/free-solid-svg-icons/fa0';
import { Link } from 'react-router-dom';

export default function Section3() {
  return (
    <section className="section alt-section" id="formation">
      <h2>Mon Approche psychosexologique</h2>
      <div className="cards">
        <div className="card-section3">
          <div className="approche-container">
            <div className="approche-text">
              <p>Formée aux techniques diagnostiques et thérapeutiques en sexologie, je propose également des entretiens psychosexologiques, destinés à accompagner chaque individus avec ou sans leur·s partenaire·s dans leurs questionnements relatifs à leur vie affective, relationnelle et sexuelle.</p>
              <p>Dans un espace d’écoute et de confiance, il est possible d’aborder ces sujets intimes en toute sécurité, toujours dans le respect du consentement, de la pudeur et des limites de chacun.</p>
              <p>Ces entretiens permettent de mieux comprendre son rapport à soi, à son corps, à l’autre et à sa sexualité, et d’envisager les ajustements appropriés.</p>
            </div>
            <div className="approche-image">
              <img
                src="/photo/imageSection3.jpeg"
                alt="Espace d'écoute bienveillant"
                className="approche-img"
              />
            </div>
          </div>
        </div>
      </div>
      <div className='cards'>
        <div className='card'>
          <div className='approche-container'>
            <div className='approche-text'>
              <p>Ces accompagnements s'adressent a tous·tes, quelle que soit leur orientation affective, sexuelle, leur identité ou expression de genre. Cet espace est inclusif et les personnes LGBTQIA+ y sont les bienvenus <img src="/photo/lgbtlogo.jpeg" alt="drapeau LGBT" className='lgbtLogo'/></p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
