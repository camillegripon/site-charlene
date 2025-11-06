import { Link } from 'react-router-dom';

export default function Section2() {
  return (
    <section className="section" id="approche">
      <h2>Approche psychodynamique</h2>
      <div className="cards">
        <div className="card">
          <div className="approche-container">
            {/* Image à gauche */}
            <div className="approche-image">
              <img
                src="/photo/profil.jpg"
                alt="Approche psychodynamique - Espace d'écoute et d'analyse"
                style={{ width: '100%', borderRadius: '8px' }}
              />
            </div>
            {/* Texte à droite */}
            <div className="approche-text">
              <p>J’inscris mon accompagnement dans une approche psychodynamique, centrée sur la singularité de chaque personne, sur la compréhension et l’analyse fine de son vécu.</p>
              <p>Je propose un espace sécurisant, confidentiel et bienveillant, où la parole peut se déployer librement, dans l’écoute, le respect et sans jugement.</p>
              <p>Mon travail vise à mettre du sens et en perspective ce qui se vit aujourd’hui, à partir de l’histoire personnelle et du parcours singulier de chacun.</p>
              <p>Au fil des séances, nous pouvons repérer les répétitions, identifier les mécanismes à l’œuvre, favoriser les prises de conscience et accéder à une meilleure connaissance de soi.</p>
              <p>Ce cheminement permet peu à peu de retrouver un mieux-être, d’aborder les crises et changements de vie futures avec plus de souplesse, et de renouer avec un sentiment de cohérence et d’apaisement.</p>
              <p>Mon cadre de travail s’appuie sur les principes du code de déontologie des psychologues, garantissant le respect de la personne, de son intégrité, de sa liberté et de ses valeurs.</p>
              <p>Tout au long des entretiens et du travail thérapeutique, j’accorde une attention particulière au consentement : chaque étape se construit dans un dialogue ouvert, afin que la démarche reste toujours claire, choisie et respectueuse du rythme propre à chacun.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
