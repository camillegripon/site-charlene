import { Link } from 'react-router-dom';
import '../styles/hero.css';

export default function Hero() {
  return (
<section className="hero">
  <div className="hero-images"> 
    <div className="hero-image">
      <img src="/photo/rectangle.jpg" alt="Nom Prénom, psychologue" />
    </div>
    <div className="hero-image">
      <img src="/photo/profil3.jpg" alt="Nom Prénom, psychologue" />
    </div>
  </div>
</section>

  );
}
