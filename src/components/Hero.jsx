import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../styles/hero.css';

export default function Hero() {

  const [isPhone, setIsPhone] = useState(false);

  useEffect(() => {
    const checkIfPhone = () => {
      setIsPhone(window.innerWidth <= 768);
    };
    checkIfPhone();
    window.addEventListener('resize', checkIfPhone);
    return () => window.removeEventListener('resize', checkIfPhone);
  }, []);

  return (
    <section className="hero">
      <div className="hero-images">
        <div className="hero-image">
          <img
            src={isPhone ? "/photo/logo.jpg" : "/photo/rectangle.jpg"}
            alt="Nom Prénom, psychologue" />
        </div>
      </div>
    </section>

  );
}
